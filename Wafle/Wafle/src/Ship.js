define(["require", "exports", "../wafle"], function(require, exports, Wafle) {
    var Ship = (function () {
        function Ship(p1) {
            this.pilot = null;
            this.fittingSlots = [];
            this.droneBay = [];
            this.cargoHold = [];
            if (typeof (p1) === "string") {
                this.hullName = p1;
            } else if (typeof (p1) === "number") {
                var ti = new Wafle.TypeInfo(p1);
                ti.FindGroupId();
                this.hullName = Wafle.Data.Types[ti.groupId][ti.typeId].n;
            } else {
                throw "Ship must be created with valid string name of ship or typeId number.";
            }
            this.baseShipData = new Wafle.BaseShipData(this.hullName);
            for (var hiSlot = 0; hiSlot < this.baseShipData.highSlotCount; hiSlot++) {
                this.fittingSlots.push(new Wafle.FittingSlot(1 /* High */, this));
            }
            for (var midSlot = 0; midSlot < this.baseShipData.midSlotCount; midSlot++) {
                this.fittingSlots.push(new Wafle.FittingSlot(2 /* Mid */, this));
            }
            for (var lowSlot = 0; lowSlot < this.baseShipData.lowSlotCount; lowSlot++) {
                this.fittingSlots.push(new Wafle.FittingSlot(3 /* Low */, this));
            }
            for (var rigSlot = 0; rigSlot < this.baseShipData.rigSlotCount; rigSlot++) {
                this.fittingSlots.push(new Wafle.FittingSlot(4 /* Rig */, this));
            }
        }
        /** in Mbit/sec */
        Ship.prototype.DroneBandwidthUsed = function () {
            var bandwidthUsed = 0;
            for (var i = 0; i < this.droneBay.length; i++) {
                if (this.droneBay[i].droneBandwidthUsed && this.droneBay[i].isActive) {
                    bandwidthUsed += this.droneBay[i].droneBandwidthUsed;
                }
            }
            return bandwidthUsed;
        };

        /** in Mbit/sec */
        Ship.prototype.DroneBandwidthRemaining = function () {
            return this.baseShipData.droneBandwidth - this.DroneBandwidthUsed();
        };

        /** in m3 */
        Ship.prototype.DroneCapacityRemaining = function () {
            return this.baseShipData.droneBayCapacity - this.DroneCapacityUsed();
        };

        /** in m3 */
        Ship.prototype.DroneCapacityUsed = function () {
            var capacityUsed = 0;
            for (var i = 0; i < this.droneBay.length; i++) {
                if (this.droneBay[i].volume) {
                    capacityUsed += this.droneBay[i].volume;
                }
            }
            return capacityUsed;
        };
        Ship.prototype.LoadDrone = function (droneType) {
            var drone = new Wafle.BaseShipEquipmentData(droneType);
            if (drone.volume > this.DroneCapacityRemaining()) {
                throw "This drone will not fit in the drone bay.";
            }
            this.droneBay.push(drone);
        };
        Ship.prototype.LoadDrones = function (droneType, count) {
            if (count < 0) {
                throw "Parameter 'count' must be a positive number.";
            }
            for (var i = 0; i < count; i++) {
                this.LoadDrone(droneType);
            }
        };

        Ship.prototype.totalDroneAlphaDamage = function () {
            return this.emDroneAlphaDamage() + this.explosiveDroneAlphaDamage() + this.kineticDroneAlphaDamage() + this.thermalDroneAlphaDamage();
        };

        Ship.prototype.emDroneAlphaDamage = function () {
            var dmg = 0;
            for (var i = 0; i < this.droneBay.length; i++) {
                if (this.droneBay[i].droneBandwidthUsed && this.droneBay[i].isActive) {
                    dmg += this.droneBay[i].emAlphaDamageActual(this, null);
                }
            }
            return dmg;
        };
        Ship.prototype.explosiveDroneAlphaDamage = function () {
            var dmg = 0;
            for (var i = 0; i < this.droneBay.length; i++) {
                if (this.droneBay[i].droneBandwidthUsed && this.droneBay[i].isActive) {
                    dmg += this.droneBay[i].explosiveAlphaDamageActual(this, null);
                }
            }
            return dmg;
        };
        Ship.prototype.kineticDroneAlphaDamage = function () {
            var dmg = 0;
            for (var i = 0; i < this.droneBay.length; i++) {
                if (this.droneBay[i].droneBandwidthUsed && this.droneBay[i].isActive) {
                    dmg += this.droneBay[i].kineticAlphaDamageActual(this, null);
                }
            }
            return dmg;
        };
        Ship.prototype.thermalDroneAlphaDamage = function () {
            var dmg = 0;
            for (var i = 0; i < this.droneBay.length; i++) {
                if (this.droneBay[i].droneBandwidthUsed && this.droneBay[i].isActive) {
                    dmg += this.droneBay[i].thermalAlphaDamageActual(this, null);
                }
            }
            return dmg;
        };

        Ship.prototype.SetPilot = function (pilot) {
            this.pilot = pilot;
        };
        Ship.prototype.isPiloted = function () {
            return (!!this.pilot);
        };

        Ship.prototype.powergrid = function () {
            var pg = this.baseShipData.powergridOutput;
            for (var i = 0; i <= this.baseShipData.slotCount(); i++) {
                if (this.fittingSlots[i] && this.fittingSlots[i].baseShipEquipmentData) {
                    pg += this.fittingSlots[i].baseShipEquipmentData.powerGridIncrease;
                }
            }
            if (this.pilot) {
                pg *= this.pilot.skills.powergridMultiplier();
            }
            return pg;
        };

        Ship.prototype.powergridString = function () {
            return this.powergrid().toFixed(2);
        };

        Ship.prototype.cpu = function () {
            if (this.pilot) {
                return Wafle.Round(this.baseShipData.cpuOutput * this.pilot.skills.cpuMultiplier(), -2);
            } else {
                return this.baseShipData.cpuOutput;
            }
        };

        Ship.prototype.remainingCpu = function () {
            var remaining = this.cpu();
            for (var i = 0; i < this.fittingSlots.length; i++) {
                remaining -= this.fittingSlots[i].cpuUsage();
            }
            return Wafle.Round(remaining, -2);
        };

        Ship.prototype.remainingPowergrid = function () {
            var remaining = this.powergrid();
            for (var i = 0; i < this.fittingSlots.length; i++) {
                remaining -= this.fittingSlots[i].powergridUsage();
            }
            return Wafle.Round(remaining, -2);
        };

        Ship.prototype.cpuString = function () {
            return this.cpu().toFixed(2);
        };

        Ship.prototype.shieldHP = function () {
            var baseShieldHP = this.baseShipData.shieldHP;
            for (var i = 0; i <= this.baseShipData.slotCount(); i++) {
                if (this.fittingSlots[i] && this.fittingSlots[i].baseShipEquipmentData) {
                    baseShieldHP += this.fittingSlots[i].baseShipEquipmentData.shieldHPBonusAdd;
                }
            }
            if (this.pilot) {
                baseShieldHP *= this.pilot.skills.shieldHPMultiplier();
            }

            for (var i = 0; i <= this.baseShipData.slotCount(); i++) {
                if (this.fittingSlots[i] && this.fittingSlots[i].baseShipEquipmentData && this.fittingSlots[i].baseShipEquipmentData.shieldHPBonusPercent) {
                    baseShieldHP *= (1 + (this.fittingSlots[i].baseShipEquipmentData.shieldHPBonusPercent(this) * 0.01));
                }
            }

            return Wafle.Round(baseShieldHP, 0);
        };

        Ship.prototype.armorHP = function () {
            var baseArmorHP = this.baseShipData.armorHP;
            for (var i = 0; i <= this.baseShipData.slotCount(); i++) {
                if (this.fittingSlots[i] && this.fittingSlots[i].baseShipEquipmentData) {
                    baseArmorHP += this.fittingSlots[i].baseShipEquipmentData.armorHPBonusAdd;
                }
            }
            if (this.pilot) {
                baseArmorHP *= this.pilot.skills.armorHPMultiplier();
            }

            for (var i = 0; i <= this.baseShipData.slotCount(); i++) {
                if (this.fittingSlots[i] && this.fittingSlots[i].baseShipEquipmentData && this.fittingSlots[i].baseShipEquipmentData.armorHPBonusPercent) {
                    baseArmorHP *= (1 + (this.fittingSlots[i].baseShipEquipmentData.armorHPBonusPercent(this) * 0.01));
                }
            }
            return Wafle.Round(baseArmorHP, 0);
        };

        Ship.prototype.structureHP = function () {
            if (this.pilot) {
                return Wafle.Round(this.baseShipData.structureHP * this.pilot.skills.structureHPMultiplier(), 0);
            } else {
                return this.baseShipData.structureHP;
            }
        };

        Ship.prototype.totalHP = function () {
            return this.structureHP() + this.armorHP() + this.shieldHP();
        };

        Ship.prototype.ShieldEMDamageReduction = function () {
            return this.ShieldSpecificDamageReduction("EM");
        };
        Ship.prototype.ShieldExplosiveDamageReduction = function () {
            return this.ShieldSpecificDamageReduction("Explosive");
        };
        Ship.prototype.ShieldKineticDamageReduction = function () {
            return this.ShieldSpecificDamageReduction("Kinetic");
        };
        Ship.prototype.ShieldThermalDamageReduction = function () {
            return this.ShieldSpecificDamageReduction("Thermal");
        };

        Ship.prototype.ShieldSpecificDamageReduction = function (damageTypeName) {
            var damageTakenPercent = 1 - this.baseShipData.shieldResists[damageTypeName].baseDamageReductionPercentage();
            var damageTakenMultipliers = [];
            for (var i = 0; i <= this.baseShipData.slotCount(); i++) {
                if (this.fittingSlots[i] && this.fittingSlots[i].baseShipEquipmentData && this.fittingSlots[i].baseShipEquipmentData.shieldResists) {
                    if (this.fittingSlots[i].baseShipEquipmentData.shieldResists.HasDiminishingReturns === true) {
                        var dtm = 1 - this.fittingSlots[i].baseShipEquipmentData.shieldResists[damageTypeName].baseDamageReductionPercentage();
                        if (dtm !== 1.0) {
                            damageTakenMultipliers.push(dtm);
                        }
                    } else {
                        damageTakenPercent = damageTakenPercent * (1 - this.fittingSlots[i].baseShipEquipmentData.shieldResists[damageTypeName].baseDamageReductionPercentage());
                    }
                }
            }
            return 1 - this.multiplyPercentages(damageTakenPercent, damageTakenMultipliers, true);
        };

        Ship.prototype.ArmorEMDamageReduction = function () {
            return this.ArmorSpecificDamageReduction("EM");
        };

        Ship.prototype.ArmorExplosiveDamageReduction = function () {
            return this.ArmorSpecificDamageReduction("Explosive");
        };

        Ship.prototype.ArmorKineticDamageReduction = function () {
            return this.ArmorSpecificDamageReduction("Kinetic");
        };

        Ship.prototype.ArmorThermalDamageReduction = function () {
            return this.ArmorSpecificDamageReduction("Thermal");
        };

        Ship.prototype.ArmorSpecificDamageReduction = function (damageTypeName) {
            var damageTakenPercent = 1 - this.baseShipData.armorResists[damageTypeName].baseDamageReductionPercentage();
            var damageTakenMultipliers = [];
            for (var i = 0; i <= this.baseShipData.slotCount(); i++) {
                if (this.fittingSlots[i] && this.fittingSlots[i].baseShipEquipmentData && this.fittingSlots[i].baseShipEquipmentData.armorResists) {
                    if (this.fittingSlots[i].baseShipEquipmentData.armorResists.HasDiminishingReturns === true) {
                        var dtm = 1 - this.fittingSlots[i].baseShipEquipmentData.armorResists[damageTypeName].baseDamageReductionPercentage();
                        if (Wafle.Data.AffectedByArmorCompensationSkills(this.fittingSlots[i].baseShipEquipmentData.typeInfo())) {
                            var compensationSkillName = damageTypeName.replace("Thermal", "Thermic") + "ArmorCompensation";
                            dtm = 1 - ((1 - dtm) * (1 + (this.pilot.skills[compensationSkillName] * 0.05)));
                        }
                        if (dtm !== 1.0) {
                            damageTakenMultipliers.push(dtm);
                        }
                    } else {
                        damageTakenPercent = damageTakenPercent * (1 - this.fittingSlots[i].baseShipEquipmentData.armorResists[damageTypeName].baseDamageReductionPercentage());
                    }
                }
            }
            return 1 - this.multiplyPercentages(damageTakenPercent, damageTakenMultipliers, true);
        };

        //todo: refactor similarly to "ArmorSpecificDamageReduction"
        Ship.prototype.HullEMDamageReduction = function () {
            var damageTakenPercent = 1 - this.baseShipData.hullResists.EM.baseDamageReductionPercentage();
            var damageTakenMultipliers = [];
            for (var i = 0; i <= this.baseShipData.slotCount(); i++) {
                if (this.fittingSlots[i] && this.fittingSlots[i].baseShipEquipmentData && this.fittingSlots[i].baseShipEquipmentData.hullResists) {
                    if (this.fittingSlots[i].baseShipEquipmentData.hullResists.HasDiminishingReturns === true) {
                        damageTakenMultipliers.push(1 - this.fittingSlots[i].baseShipEquipmentData.hullResists.EM.baseDamageReductionPercentage());
                    } else {
                        damageTakenPercent = damageTakenPercent * (1 - this.fittingSlots[i].baseShipEquipmentData.hullResists.EM.baseDamageReductionPercentage());
                    }
                }
            }
            return 1 - this.multiplyPercentages(damageTakenPercent, damageTakenMultipliers, true);
        };

        //todo: refactor similarly to "ArmorSpecificDamageReduction"
        Ship.prototype.HullExplosiveDamageReduction = function () {
            var damageTakenPercent = 1 - this.baseShipData.hullResists.Explosive.baseDamageReductionPercentage();
            var damageTakenMultipliers = [];
            for (var i = 0; i <= this.baseShipData.slotCount(); i++) {
                if (this.fittingSlots[i] && this.fittingSlots[i].baseShipEquipmentData && this.fittingSlots[i].baseShipEquipmentData.hullResists) {
                    if (this.fittingSlots[i].baseShipEquipmentData.hullResists.HasDiminishingReturns === true) {
                        damageTakenMultipliers.push(1 - this.fittingSlots[i].baseShipEquipmentData.hullResists.Explosive.baseDamageReductionPercentage());
                    } else {
                        damageTakenPercent = damageTakenPercent * (1 - this.fittingSlots[i].baseShipEquipmentData.hullResists.Explosive.baseDamageReductionPercentage());
                    }
                }
            }
            return 1 - this.multiplyPercentages(damageTakenPercent, damageTakenMultipliers, true);
        };

        //todo: refactor similarly to "ArmorSpecificDamageReduction"
        Ship.prototype.HullKineticDamageReduction = function () {
            var damageTakenPercent = 1 - this.baseShipData.hullResists.Kinetic.baseDamageReductionPercentage();
            var damageTakenMultipliers = [];
            for (var i = 0; i <= this.baseShipData.slotCount(); i++) {
                if (this.fittingSlots[i] && this.fittingSlots[i].baseShipEquipmentData && this.fittingSlots[i].baseShipEquipmentData.hullResists) {
                    if (this.fittingSlots[i].baseShipEquipmentData.hullResists.HasDiminishingReturns === true) {
                        damageTakenMultipliers.push(1 - this.fittingSlots[i].baseShipEquipmentData.hullResists.Kinetic.baseDamageReductionPercentage());
                    } else {
                        damageTakenPercent = damageTakenPercent * (1 - this.fittingSlots[i].baseShipEquipmentData.hullResists.Kinetic.baseDamageReductionPercentage());
                    }
                }
            }
            return 1 - this.multiplyPercentages(damageTakenPercent, damageTakenMultipliers, true);
        };

        //todo: refactor similarly to "ArmorSpecificDamageReduction"
        Ship.prototype.HullThermalDamageReduction = function () {
            var damageTakenPercent = 1 - this.baseShipData.hullResists.Thermal.baseDamageReductionPercentage();
            var damageTakenMultipliers = [];
            for (var i = 0; i <= this.baseShipData.slotCount(); i++) {
                if (this.fittingSlots[i] && this.fittingSlots[i].baseShipEquipmentData && this.fittingSlots[i].baseShipEquipmentData.hullResists) {
                    if (this.fittingSlots[i].baseShipEquipmentData.hullResists.HasDiminishingReturns === true) {
                        damageTakenMultipliers.push(1 - this.fittingSlots[i].baseShipEquipmentData.hullResists.Thermal.baseDamageReductionPercentage());
                    } else {
                        damageTakenPercent = damageTakenPercent * (1 - this.fittingSlots[i].baseShipEquipmentData.hullResists.Thermal.baseDamageReductionPercentage());
                    }
                }
            }
            return 1 - this.multiplyPercentages(damageTakenPercent, damageTakenMultipliers, true);
        };

        Ship.prototype.MaxVelocity = function () {
            var vel = this.baseShipData.maxVelocity;
            if (this.pilot) {
                vel = vel * this.pilot.skills.velocityMultiplier();
            }
            var percentages = [];
            for (var i = 0; i <= this.baseShipData.slotCount(); i++) {
                if (this.fittingSlots[i] && this.fittingSlots[i].baseShipEquipmentData && this.fittingSlots[i].baseShipEquipmentData.baseVelocityMultiplier) {
                    if (this.fittingSlots[i].baseShipEquipmentData.actualVelocityMultiplier) {
                        percentages.push((1 + (this.fittingSlots[i].baseShipEquipmentData.actualVelocityMultiplier(this) / 100)));
                    } else {
                        percentages.push((1 + (this.fittingSlots[i].baseShipEquipmentData.baseVelocityMultiplier / 100)));
                    }
                }
            }
            return Wafle.Round(this.multiplyPercentages(vel, percentages), -2);
        };

        Ship.prototype.multiplyPercentages = function (startValue, percentages, closerToZeroIsMostSignificant) {
            if (typeof closerToZeroIsMostSignificant === "undefined") { closerToZeroIsMostSignificant = false; }
            if (closerToZeroIsMostSignificant) {
                percentages = this.SortArrayByAscendingAbsoluteValue(percentages);
            } else {
                percentages = this.SortArrayByDescendingAbsoluteValue(percentages);
            }
            var growerCount = 0, shrinkerCount = 0;
            for (var i = 0; i < percentages.length; i++) {
                if (percentages[i] > 1) {
                    startValue *= (1 + ((percentages[i] - 1) * Wafle.dimEffRatio(growerCount)));
                    growerCount += 1;
                } else if (percentages[i] < 1) {
                    startValue *= (1 - ((1 - percentages[i]) * Wafle.dimEffRatio(shrinkerCount)));
                    shrinkerCount += 1;
                }
            }
            return startValue;
        };

        Ship.prototype.SortArrayByAscendingAbsoluteValue = function (theArray) {
            return theArray.sort(function (a, b) {
                return Math.abs(a) - Math.abs(b);
            });
        };

        Ship.prototype.SortArrayByDescendingAbsoluteValue = function (theArray) {
            return theArray.sort(function (a, b) {
                return Math.abs(b) - Math.abs(a);
            });
        };

        Ship.prototype.emDamageMultiplier = function (attackingModule, charge) {
            var multiplier = Wafle.Data.ShipOmniDamageMultiplier(this, attackingModule, charge);
            if (this.pilot) {
                multiplier *= this.pilot.OmniDamageMultiplier(attackingModule);
            }
            return multiplier;
        };
        Ship.prototype.explosiveDamageMultiplier = function (attackingModule, charge) {
            var multiplier = Wafle.Data.ShipOmniDamageMultiplier(this, attackingModule, charge);
            if (this.pilot) {
                multiplier *= this.pilot.OmniDamageMultiplier(attackingModule);
            }
            return multiplier;
        };
        Ship.prototype.kineticDamageMultiplier = function (attackingModule, charge) {
            var multiplier = Wafle.Data.ShipOmniDamageMultiplier(this, attackingModule, charge);
            if (this.pilot) {
                multiplier *= this.pilot.OmniDamageMultiplier(attackingModule);
            }
            return multiplier;
        };
        Ship.prototype.thermalDamageMultiplier = function (attackingModule, charge) {
            var multiplier = Wafle.Data.ShipOmniDamageMultiplier(this, attackingModule, charge);
            if (this.pilot) {
                multiplier *= this.pilot.OmniDamageMultiplier(attackingModule);
            }
            return multiplier;
        };

        Ship.prototype.totalAlphaDamageActual = function () {
            var total = 0;
            for (var i = 0; i < this.fittingSlots.length; i++) {
                total += this.fittingSlots[i].baseShipEquipmentData.totalAlphaDamageActual(this, this.fittingSlots[i].LoadedCharge());
            }
            return total;
        };
        return Ship;
    })();

    
    return Ship;
});
//# sourceMappingURL=Ship.js.map
