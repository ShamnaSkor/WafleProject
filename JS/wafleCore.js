///<reference path="wafleInterfaces.ts"/>
///<reference path="wafleData.ts"/>
///<reference path="wafleCuratedData.ts"/>
/*

The MIT License (MIT)

Copyright (c) 2013 Shamna Skor

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

@license
*/
/* Todo:
. more rigs and other modules.
. modules that use capacitor - adjust stats for active or inactive.
. track capacitor usage of ship/cap stability
. cruisers, bc, bs, other
. align time, warp speed, other navigation concerns
. Offline Modules
. Overheating
. UI
. track calibration remaining for rigs.
*/
var Wafle;
(function (Wafle) {
    Wafle.Version = "0.1.0-alpha.5";

    (function (RaceType) {
        RaceType[RaceType["Unknown"] = 0] = "Unknown";
        RaceType[RaceType["Caldari"] = 1] = "Caldari";
        RaceType[RaceType["Minmatar"] = 2] = "Minmatar";
        RaceType[RaceType["Amarr"] = 4] = "Amarr";
        RaceType[RaceType["Gallente"] = 8] = "Gallente";
        RaceType[RaceType["ORE"] = 9] = "ORE";
    })(Wafle.RaceType || (Wafle.RaceType = {}));
    var RaceType = Wafle.RaceType;

    (function (FittingSlotType) {
        FittingSlotType[FittingSlotType["Unknown"] = 0] = "Unknown";
        FittingSlotType[FittingSlotType["High"] = 1] = "High";
        FittingSlotType[FittingSlotType["Mid"] = 2] = "Mid";
        FittingSlotType[FittingSlotType["Low"] = 3] = "Low";
        FittingSlotType[FittingSlotType["Rig"] = 4] = "Rig";
    })(Wafle.FittingSlotType || (Wafle.FittingSlotType = {}));
    var FittingSlotType = Wafle.FittingSlotType;

    (function (RigSize) {
        RigSize[RigSize["Unknown"] = 0] = "Unknown";
        RigSize[RigSize["Small"] = 1] = "Small";
        RigSize[RigSize["Medium"] = 2] = "Medium";
        RigSize[RigSize["Large"] = 3] = "Large";
        RigSize[RigSize["Capital"] = 4] = "Capital";
    })(Wafle.RigSize || (Wafle.RigSize = {}));
    var RigSize = Wafle.RigSize;

    (function (InventoryGroups) {
        InventoryGroups[InventoryGroups["Unknown"] = -1] = "Unknown";
        InventoryGroups[InventoryGroups["Frigate"] = 25] = "Frigate";
        InventoryGroups[InventoryGroups["ShieldExtender"] = 38] = "ShieldExtender";
        InventoryGroups[InventoryGroups["Propulsion"] = 46] = "Propulsion";
        InventoryGroups[InventoryGroups["WarpScrambler"] = 52] = "WarpScrambler";
        InventoryGroups[InventoryGroups["EnergyWeapon"] = 53] = "EnergyWeapon";
        InventoryGroups[InventoryGroups["ProjectileWeapon"] = 55] = "ProjectileWeapon";
        InventoryGroups[InventoryGroups["Gyrostabilizer"] = 59] = "Gyrostabilizer";
        InventoryGroups[InventoryGroups["DamageControl"] = 60] = "DamageControl";
        InventoryGroups[InventoryGroups["ArmorRepairUnit"] = 62] = "ArmorRepairUnit";
        InventoryGroups[InventoryGroups["StasisWeb"] = 65] = "StasisWeb";
        InventoryGroups[InventoryGroups["EnergyVampire"] = 68] = "EnergyVampire";
        InventoryGroups[InventoryGroups["EnergyDestabilizer"] = 71] = "EnergyDestabilizer";
        InventoryGroups[InventoryGroups["HybridWeapon"] = 74] = "HybridWeapon";
        InventoryGroups[InventoryGroups["ShieldHardener"] = 77] = "ShieldHardener";
        InventoryGroups[InventoryGroups["ProjectileAmmo"] = 83] = "ProjectileAmmo";
        InventoryGroups[InventoryGroups["HybridCharge"] = 85] = "HybridCharge";
        InventoryGroups[InventoryGroups["FrequencyCrystal"] = 86] = "FrequencyCrystal";
        InventoryGroups[InventoryGroups["ArmorCoating"] = 98] = "ArmorCoating";
        InventoryGroups[InventoryGroups["CombatDrone"] = 100] = "CombatDrone";
        InventoryGroups[InventoryGroups["HeatSink"] = 205] = "HeatSink";
        InventoryGroups[InventoryGroups["MagneticFieldStabilizer"] = 302] = "MagneticFieldStabilizer";
        InventoryGroups[InventoryGroups["ArmorRepairProjector"] = 325] = "ArmorRepairProjector";
        InventoryGroups[InventoryGroups["ArmorPlatingEnergized"] = 326] = "ArmorPlatingEnergized";
        InventoryGroups[InventoryGroups["ArmorPlate"] = 329] = "ArmorPlate";
        InventoryGroups[InventoryGroups["AuxiliaryPowerCore"] = 339] = "AuxiliaryPowerCore";
        InventoryGroups[InventoryGroups["BallisticControlSystem"] = 367] = "BallisticControlSystem";
        InventoryGroups[InventoryGroups["AdvancedAutocannonAmmo"] = 372] = "AdvancedAutocannonAmmo";
        InventoryGroups[InventoryGroups["AdvancedRailgunCharge"] = 373] = "AdvancedRailgunCharge";
        InventoryGroups[InventoryGroups["AdvancedBeamLaserCrystal"] = 374] = "AdvancedBeamLaserCrystal";
        InventoryGroups[InventoryGroups["AdvancedPulseLaserCrystal"] = 375] = "AdvancedPulseLaserCrystal";
        InventoryGroups[InventoryGroups["AdvancedArtilleryAmmo"] = 376] = "AdvancedArtilleryAmmo";
        InventoryGroups[InventoryGroups["AdvancedBlasterCharge"] = 377] = "AdvancedBlasterCharge";
        InventoryGroups[InventoryGroups["TargetPainter"] = 379] = "TargetPainter";
        InventoryGroups[InventoryGroups["LightMissile"] = 384] = "LightMissile";
        InventoryGroups[InventoryGroups["HeavyMissile"] = 385] = "HeavyMissile";
        InventoryGroups[InventoryGroups["Rocket"] = 387] = "Rocket";
        InventoryGroups[InventoryGroups["FoFHeavyMissile"] = 395] = "FoFHeavyMissile";
        InventoryGroups[InventoryGroups["RocketLauncher"] = 507] = "RocketLauncher";
        InventoryGroups[InventoryGroups["LightMissileLauncher"] = 509] = "LightMissileLauncher";
        InventoryGroups[InventoryGroups["HeavyMissileLauncher"] = 510] = "HeavyMissileLauncher";
        InventoryGroups[InventoryGroups["RapidLightMissileLauncher"] = 511] = "RapidLightMissileLauncher";
        InventoryGroups[InventoryGroups["AdvancedRocket"] = 648] = "AdvancedRocket";
        InventoryGroups[InventoryGroups["AdvancedLightMissile"] = 653] = "AdvancedLightMissile";
        InventoryGroups[InventoryGroups["AdvancedHeavyAssaultMissile"] = 654] = "AdvancedHeavyAssaultMissile";
        InventoryGroups[InventoryGroups["AdvancedHeavyMissile"] = 655] = "AdvancedHeavyMissile";
        InventoryGroups[InventoryGroups["Nanofiber"] = 763] = "Nanofiber";
        InventoryGroups[InventoryGroups["HeavyAssaultMissileLauncher"] = 771] = "HeavyAssaultMissileLauncher";
        InventoryGroups[InventoryGroups["HeavyAssaultMissile"] = 772] = "HeavyAssaultMissile";
        InventoryGroups[InventoryGroups["ArmorRig"] = 773] = "ArmorRig";
        InventoryGroups[InventoryGroups["ShieldRig"] = 774] = "ShieldRig";
        InventoryGroups[InventoryGroups["NavigationRig"] = 782] = "NavigationRig";
    })(Wafle.InventoryGroups || (Wafle.InventoryGroups = {}));
    var InventoryGroups = Wafle.InventoryGroups;

    function Round(value, decimalPlace) {
        return Math.round(value * Math.pow(10, decimalPlace * -1)) * Math.pow(10, decimalPlace);
    }
    Wafle.Round = Round;

    function e() {
        return 2.718281828459;
    }
    Wafle.e = e;

    /**
    ** Diminishing effectiveness ratio.  The most powerful modifier should be passed in with 0.
    **  The second most powerful modifier should be passed in with 1, etc.
    **/
    function dimEffRatio(zeroBasedIndex) {
        return Math.pow(e(), (-0.140274 * Math.pow((zeroBasedIndex), 2)));
    }
    Wafle.dimEffRatio = dimEffRatio;

    var FittingSlot = (function () {
        function FittingSlot(slotType, ship) {
            this.slotType = slotType;
            this.ship = ship;
            this.loadedCharge = null;
            this.baseShipEquipmentData = null;
        }
        FittingSlot.prototype.cpuUsage = function () {
            if (this.baseShipEquipmentData) {
                return this.baseShipEquipmentData.cpuUsageActual(this.ship);
            } else {
                return 0;
            }
        };
        FittingSlot.prototype.powergridUsage = function () {
            if (this.baseShipEquipmentData) {
                return this.baseShipEquipmentData.powergridUsageActual(this.ship);
            } else {
                return 0;
            }
        };

        FittingSlot.prototype.SetModule = function (typeId, groupId) {
            var calcGroupId;
            if (groupId) {
                calcGroupId = groupId;
            } else {
                calcGroupId = Wafle.Data.TypeToGroupIDMapping[typeId.toString()];
            }

            if (!calcGroupId) {
                throw "typeId " + typeId.toString() + ' is not a member of a known inventory group.';
            }
            this.baseShipEquipmentData = new BaseShipEquipmentData(calcGroupId, typeId);
            if (this.baseShipEquipmentData) {
                if (this.baseShipEquipmentData.slotUsed !== this.slotType) {
                    var errorMessage = "Module " + this.baseShipEquipmentData.name + ' only fits in a ' + FittingSlotType[this.baseShipEquipmentData.slotUsed] + ' slot.';
                    this.baseShipEquipmentData = null;
                    throw errorMessage;
                }
            }
        };

        FittingSlot.prototype.LoadedCharge = function () {
            return this.loadedCharge;
        };

        FittingSlot.prototype.LoadCharge = function (type) {
            if (!Wafle.Data.IsLoadableCharge(type)) {
                throw "Type " + type.typeId + " in group " + type.groupId + " is not a loadable charge.";
            }
            var charge = new BaseShipEquipmentData(type);
            if (charge.launcherGroup !== this.baseShipEquipmentData.groupId) {
                throw "Type " + type.typeId + " is not compatible with a launcher of type " + this.baseShipEquipmentData.name + ".";
            }
            this.loadedCharge = charge;
        };

        FittingSlot.prototype.totalAlphaDamage = function () {
            if (this.baseShipEquipmentData) {
                return this.baseShipEquipmentData.totalAlphaDamageActual(this.ship, this.loadedCharge);
            } else {
                return 0;
            }
        };
        return FittingSlot;
    })();
    Wafle.FittingSlot = FittingSlot;

    var Ship = (function () {
        function Ship(hullName) {
            this.hullName = hullName;
            this.pilot = null;
            this.fittingSlots = [];
            this.droneBay = [];
            this.cargoHold = [];
            this.baseShipData = new BaseShipData(hullName);
            for (var hiSlot = 0; hiSlot < this.baseShipData.highSlotCount; hiSlot++) {
                this.fittingSlots.push(new FittingSlot(FittingSlotType.High, this));
            }
            for (var midSlot = 0; midSlot < this.baseShipData.midSlotCount; midSlot++) {
                this.fittingSlots.push(new FittingSlot(FittingSlotType.Mid, this));
            }
            for (var lowSlot = 0; lowSlot < this.baseShipData.lowSlotCount; lowSlot++) {
                this.fittingSlots.push(new FittingSlot(FittingSlotType.Low, this));
            }
            for (var rigSlot = 0; rigSlot < this.baseShipData.rigSlotCount; rigSlot++) {
                this.fittingSlots.push(new FittingSlot(FittingSlotType.Rig, this));
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
            var drone = new BaseShipEquipmentData(droneType);
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
                return Round(this.baseShipData.cpuOutput * this.pilot.skills.cpuMultiplier(), -2);
            } else {
                return this.baseShipData.cpuOutput;
            }
        };

        Ship.prototype.remainingCpu = function () {
            var remaining = this.cpu();
            for (var i = 0; i < this.fittingSlots.length; i++) {
                remaining -= this.fittingSlots[i].cpuUsage();
            }
            return Round(remaining, -2);
        };

        Ship.prototype.remainingPowergrid = function () {
            var remaining = this.powergrid();
            for (var i = 0; i < this.fittingSlots.length; i++) {
                remaining -= this.fittingSlots[i].powergridUsage();
            }
            return Round(remaining, -2);
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

            return Round(baseShieldHP, 0);
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
            return Round(baseArmorHP, 0);
        };

        Ship.prototype.structureHP = function () {
            if (this.pilot) {
                return Round(this.baseShipData.structureHP * this.pilot.skills.structureHPMultiplier(), 0);
            } else {
                return this.baseShipData.structureHP;
            }
        };

        Ship.prototype.totalHP = function () {
            return this.structureHP() + this.armorHP() + this.shieldHP();
        };

        //todo: refactor similarly to "ArmorSpecificDamageReduction"
        Ship.prototype.ShieldEMDamageReduction = function () {
            var damageTakenPercent = 1 - this.baseShipData.shieldResists.EM.baseDamageReductionPercentage();
            var damageTakenMultipliers = [];
            for (var i = 0; i <= this.baseShipData.slotCount(); i++) {
                if (this.fittingSlots[i] && this.fittingSlots[i].baseShipEquipmentData && this.fittingSlots[i].baseShipEquipmentData.shieldResists) {
                    if (this.fittingSlots[i].baseShipEquipmentData.shieldResists.HasDiminishingReturns === true) {
                        damageTakenMultipliers.push(1 - this.fittingSlots[i].baseShipEquipmentData.shieldResists.EM.baseDamageReductionPercentage());
                    } else {
                        damageTakenPercent = damageTakenPercent * (1 - this.fittingSlots[i].baseShipEquipmentData.shieldResists.EM.baseDamageReductionPercentage());
                    }
                }
            }
            return 1 - this.multiplyPercentages(damageTakenPercent, damageTakenMultipliers, true);
        };

        //todo: refactor similarly to "ArmorSpecificDamageReduction"
        Ship.prototype.ShieldExplosiveDamageReduction = function () {
            var damageTakenPercent = 1 - this.baseShipData.shieldResists.Explosive.baseDamageReductionPercentage();
            var damageTakenMultipliers = [];
            for (var i = 0; i <= this.baseShipData.slotCount(); i++) {
                if (this.fittingSlots[i] && this.fittingSlots[i].baseShipEquipmentData && this.fittingSlots[i].baseShipEquipmentData.shieldResists) {
                    if (this.fittingSlots[i].baseShipEquipmentData.shieldResists.HasDiminishingReturns === true) {
                        damageTakenMultipliers.push(1 - this.fittingSlots[i].baseShipEquipmentData.shieldResists.Explosive.baseDamageReductionPercentage());
                    } else {
                        damageTakenPercent = damageTakenPercent * (1 - this.fittingSlots[i].baseShipEquipmentData.shieldResists.Explosive.baseDamageReductionPercentage());
                    }
                }
            }
            return 1 - this.multiplyPercentages(damageTakenPercent, damageTakenMultipliers, true);
        };

        //todo: refactor similarly to "ArmorSpecificDamageReduction"
        Ship.prototype.ShieldKineticDamageReduction = function () {
            var damageTakenPercent = 1 - this.baseShipData.shieldResists.Kinetic.baseDamageReductionPercentage();
            var damageTakenMultipliers = [];
            for (var i = 0; i <= this.baseShipData.slotCount(); i++) {
                if (this.fittingSlots[i] && this.fittingSlots[i].baseShipEquipmentData && this.fittingSlots[i].baseShipEquipmentData.shieldResists) {
                    if (this.fittingSlots[i].baseShipEquipmentData.shieldResists.HasDiminishingReturns === true) {
                        damageTakenMultipliers.push(1 - this.fittingSlots[i].baseShipEquipmentData.shieldResists.Kinetic.baseDamageReductionPercentage());
                    } else {
                        damageTakenPercent = damageTakenPercent * (1 - this.fittingSlots[i].baseShipEquipmentData.shieldResists.Kinetic.baseDamageReductionPercentage());
                    }
                }
            }
            return 1 - this.multiplyPercentages(damageTakenPercent, damageTakenMultipliers, true);
        };

        //todo: refactor similarly to "ArmorSpecificDamageReduction"
        Ship.prototype.ShieldThermalDamageReduction = function () {
            var damageTakenPercent = 1 - this.baseShipData.shieldResists.Thermal.baseDamageReductionPercentage();
            var damageTakenMultipliers = [];
            for (var i = 0; i <= this.baseShipData.slotCount(); i++) {
                if (this.fittingSlots[i] && this.fittingSlots[i].baseShipEquipmentData && this.fittingSlots[i].baseShipEquipmentData.shieldResists) {
                    if (this.fittingSlots[i].baseShipEquipmentData.shieldResists.HasDiminishingReturns === true) {
                        damageTakenMultipliers.push(1 - this.fittingSlots[i].baseShipEquipmentData.shieldResists.Thermal.baseDamageReductionPercentage());
                    } else {
                        damageTakenPercent = damageTakenPercent * (1 - this.fittingSlots[i].baseShipEquipmentData.shieldResists.Thermal.baseDamageReductionPercentage());
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
            return Round(this.multiplyPercentages(vel, percentages), -2);
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
                    startValue *= (1 + ((percentages[i] - 1) * dimEffRatio(growerCount)));
                    growerCount += 1;
                } else if (percentages[i] < 1) {
                    startValue *= (1 - ((1 - percentages[i]) * dimEffRatio(shrinkerCount)));
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
    Wafle.Ship = Ship;

    var Pilot = (function () {
        function Pilot(name) {
            this.name = name;
            this.skills = new Skills();
        }
        Pilot.prototype.OmniDamageMultiplier = function (attackingModule) {
            var mult = 1.0;
            if (attackingModule.groupId === InventoryGroups.ProjectileWeapon) {
                mult *= this.skills.surgicalStrikeDamageMultiplier();
                switch (attackingModule.chargeSize) {
                    case 1:
                        mult *= this.skills.smallProjectileTurretDamageMultiplier();
                        break;
                }
            } else if (attackingModule.groupId === InventoryGroups.HybridWeapon) {
                mult *= this.skills.surgicalStrikeDamageMultiplier();
                switch (attackingModule.chargeSize) {
                    case 1:
                        mult *= this.skills.smallHybridTurretDamageMultiplier();
                        if (attackingModule.techLevel == 2) {
                            if (Wafle.Data.IsBlaster(attackingModule)) {
                                mult *= this.skills.smallT2BlasterDamageMultiplier();
                            } else if (Wafle.Data.IsRailgun(attackingModule)) {
                                mult *= this.skills.smallT2RailgunDamageMultiplier();
                            }
                        }
                        break;
                }
            } else if (attackingModule.groupId === InventoryGroups.RocketLauncher) {
                mult *= this.skills.rocketsDamageMultiplier() * this.skills.warheadDamageMultiplier();
            } else if (attackingModule.groupId === InventoryGroups.LightMissileLauncher) {
                mult *= this.skills.lightMissilesDamageMultiplier() * this.skills.warheadDamageMultiplier();
            }
            return mult;
        };
        return Pilot;
    })();
    Wafle.Pilot = Pilot;

    var Skills = (function () {
        function Skills() {
            this.PowerGridManagement = 0;
            this.CPUManagement = 0;
            this.HullUpgrades = 0;
            this.Mechanics = 0;
            this.ShieldManagement = 0;
            this.ShieldUpgrades = 0;
            this.WeaponUpgrades = 0;
            this.AdvancedWeaponUpgrades = 0;
            this.Navigation = 0;
            this.ArmorRigging = 0;
            this.AstronauticsRigging = 0;
            this.EMArmorCompensation = 0;
            this.ExplosiveArmorCompensation = 0;
            this.KineticArmorCompensation = 0;
            this.ThermicArmorCompensation = 0;
            this.GallenteFrigate = 0;
            this.MinmatarFrigate = 0;
            this.CaldariFrigate = 0;
            this.AmarrFrigate = 0;
            this.GallenteCruiser = 0;
            this.MinmatarCruiser = 0;
            this.CaldariCruiser = 0;
            this.AmarrCruiser = 0;
            this.SmallProjectileTurret = 0;
            this.SurgicalStrike = 0;
            this.Rockets = 0;
            this.LightMissiles = 0;
            this.WarheadUpgrades = 0;
            this.SmallHybridTurret = 0;
            this.SmallRailgunSpecialization = 0;
            this.SmallBlasterSpecialization = 0;
            this.Drones = 0;
            this.DroneInterfacing = 0;
            this.CombatDroneOperation = 0;
            this.GallenteDroneSpecialization = 0;
            this.MinmatarDroneSpecialization = 0;
            this.CaldariDroneSpecialization = 0;
            this.AmarrDroneSpecialization = 0;
        }
        Skills.prototype.SetAllSkills = function (level) {
            this.PowerGridManagement = level;
            this.CPUManagement = level;
            this.HullUpgrades = level;
            this.Mechanics = level;
            this.ShieldManagement = level;
            this.ShieldUpgrades = level;
            this.WeaponUpgrades = level;
            this.AdvancedWeaponUpgrades = level;
            this.Navigation = level;
            this.ArmorRigging = level;
            this.AstronauticsRigging = level;
            this.GallenteFrigate = level;
            this.MinmatarFrigate = level;
            this.CaldariFrigate = level;
            this.AmarrFrigate = level;
            this.GallenteCruiser = level;
            this.MinmatarCruiser = level;
            this.CaldariCruiser = level;
            this.AmarrCruiser = level;
            this.SmallProjectileTurret = level;
            this.SmallHybridTurret = level;
            this.SmallRailgunSpecialization = level;
            this.SmallBlasterSpecialization = level;
            this.SurgicalStrike = level;
            this.Rockets = level;
            this.LightMissiles = level;
            this.WarheadUpgrades = level;
            this.EMArmorCompensation = level;
            this.ExplosiveArmorCompensation = level;
            this.KineticArmorCompensation = level;
            this.ThermicArmorCompensation = level;
            this.Drones = level;
            this.DroneInterfacing = level;
            this.CombatDroneOperation = level;
            this.GallenteDroneSpecialization = level;
            this.MinmatarDroneSpecialization = level;
            this.CaldariDroneSpecialization = level;
            this.AmarrDroneSpecialization = level;
        };

        Skills.prototype.cpuMultiplier = function () {
            return 1.0 + (this.CPUManagement * 0.05);
        };
        Skills.prototype.powergridMultiplier = function () {
            return 1.0 + (this.PowerGridManagement * 0.05);
        };
        Skills.prototype.shieldHPMultiplier = function () {
            return 1.0 + (this.ShieldManagement * 0.05);
        };
        Skills.prototype.armorHPMultiplier = function () {
            return 1.0 + (this.HullUpgrades * 0.05);
        };
        Skills.prototype.structureHPMultiplier = function () {
            return 1.0 + (this.Mechanics * 0.05);
        };
        Skills.prototype.velocityMultiplier = function () {
            return 1.0 + (this.Navigation * 0.05);
        };
        Skills.prototype.smallProjectileTurretDamageMultiplier = function () {
            return 1.0 + (this.SmallProjectileTurret * 0.05);
        };
        Skills.prototype.smallHybridTurretDamageMultiplier = function () {
            return 1.0 + (this.SmallHybridTurret * 0.05);
        };
        Skills.prototype.smallT2BlasterDamageMultiplier = function () {
            return 1.0 + (this.SmallBlasterSpecialization * 0.02);
        };
        Skills.prototype.smallT2RailgunDamageMultiplier = function () {
            return 1.0 + (this.SmallRailgunSpecialization * 0.02);
        };
        Skills.prototype.surgicalStrikeDamageMultiplier = function () {
            return 1.0 + (this.SurgicalStrike * 0.03);
        };
        Skills.prototype.rocketsDamageMultiplier = function () {
            return 1.0 + (this.Rockets * 0.05);
        };
        Skills.prototype.lightMissilesDamageMultiplier = function () {
            return 1.0 + (this.LightMissiles * 0.05);
        };
        Skills.prototype.warheadDamageMultiplier = function () {
            return 1.0 + (this.WarheadUpgrades * 0.02);
        };
        return Skills;
    })();
    Wafle.Skills = Skills;

    var CpuFormulas = (function () {
        function CpuFormulas() {
        }
        CpuFormulas.standardWeapon = function (ship, baseCpu) {
            if (ship && ship.pilot) {
                return baseCpu - (ship.pilot.skills.WeaponUpgrades * 0.05 * baseCpu);
            } else {
                return baseCpu;
            }
        };

        CpuFormulas.standardModule = function (ship, baseCpu) {
            if (baseCpu) {
                return baseCpu;
            } else {
                return 0;
            }
        };
        return CpuFormulas;
    })();
    Wafle.CpuFormulas = CpuFormulas;

    var PowergridFormulas = (function () {
        function PowergridFormulas() {
        }
        PowergridFormulas.standardWeapon = function (ship, basePowergrid) {
            if (ship && ship.pilot) {
                return basePowergrid - (ship.pilot.skills.AdvancedWeaponUpgrades * 0.02 * basePowergrid);
            } else {
                return basePowergrid;
            }
        };

        PowergridFormulas.standardModule = function (ship, basePowergrid) {
            if (basePowergrid) {
                return basePowergrid;
            } else {
                return 0;
            }
        };
        PowergridFormulas.shieldUpgradeModule = function (ship, basePowergrid) {
            if (basePowergrid) {
                if (ship.pilot) {
                    return basePowergrid * (1 - (0.05 * ship.pilot.skills.ShieldUpgrades));
                } else {
                    return basePowergrid;
                }
            } else {
                return 0;
            }
        };
        return PowergridFormulas;
    })();
    Wafle.PowergridFormulas = PowergridFormulas;

    function ShipEquipmentLoader(data, target) {
        target.name = data.n;
        target.description = data.d;
        target.cpuUsage = (data.cpu || 0);
        target.powergridUsage = (data.pg || 0);
        target.metaLevel = data.mta;
        target.marketGroup = data.mg;
        target.parentMarketGroup = data.pmg;
        target.volume = data.v;
        target.techLevel = data.tl;
        target.race = data.r;
    }

    function TurretLoader(data, target) {
        target.optimalRange = data.opt;
        target.accuracyFalloff = data.acc;
        target.rateOfFire = data.rof;
        target.trackingSpeed = data.trk;
        target.damageMultiplier = data.dmg;
        target.slotUsed = FittingSlotType.High;
        target.launcherGroup = data.lg;
        target.chargeSize = data.cs;
        target.cpuUsageActual = function (ship) {
            return CpuFormulas.standardWeapon(ship, target.cpuUsage);
        };
        target.powergridUsageActual = function (ship) {
            return PowergridFormulas.standardWeapon(ship, target.powergridUsage);
        };
        target.emAlphaDamageActual = function (ship, charge) {
            return charge.emBaseDamage * target.damageMultiplier * ship.emDamageMultiplier(target, charge);
        };
        target.explosiveAlphaDamageActual = function (ship, charge) {
            return charge.explosiveBaseDamage * target.damageMultiplier * ship.explosiveDamageMultiplier(target, charge);
        };
        target.kineticAlphaDamageActual = function (ship, charge) {
            return charge.kineticBaseDamage * target.damageMultiplier * ship.kineticDamageMultiplier(target, charge);
        };
        target.thermalAlphaDamageActual = function (ship, charge) {
            return charge.thermalBaseDamage * target.damageMultiplier * ship.thermalDamageMultiplier(target, charge);
        };
    }

    function LauncherLoader(data, target) {
        target.rateOfFire = data.rof;
        target.slotUsed = FittingSlotType.High;
        target.cpuUsageActual = function (ship) {
            return CpuFormulas.standardWeapon(ship, target.cpuUsage);
        };
        target.powergridUsageActual = function (ship) {
            return PowergridFormulas.standardWeapon(ship, target.powergridUsage);
        };
        target.launcherGroup = data.lg;
        target.emAlphaDamageActual = function (ship, charge) {
            return charge.emBaseDamage * ship.emDamageMultiplier(target, charge);
        };
        target.explosiveAlphaDamageActual = function (ship, charge) {
            return charge.explosiveBaseDamage * ship.explosiveDamageMultiplier(target, charge);
        };
        target.kineticAlphaDamageActual = function (ship, charge) {
            return charge.kineticBaseDamage * ship.kineticDamageMultiplier(target, charge);
        };
        target.thermalAlphaDamageActual = function (ship, charge) {
            return charge.thermalBaseDamage * ship.thermalDamageMultiplier(target, charge);
        };
    }

    function MidProjectedEffectLoader(data, target) {
        target.optimalRange = data.opt;
        target.accuracyFalloff = data.acc;
        target.slotUsed = FittingSlotType.Mid;
        if (data.srb) {
            target.signatureRadiusBonusOfTarget = data.srb;
        }
        if (data.ad) {
            target.activationDuration = data.ad;
        }
        target.cpuUsageActual = function (ship) {
            return CpuFormulas.standardModule(ship, this.cpuUsage);
        };
        target.powergridUsageActual = function (ship) {
            return PowergridFormulas.standardModule(ship, this.powergridUsage);
        };
    }

    function PropulsionLoader(data, target) {
        target.speedFactor = data.spd;
        if (data.srb) {
            target.signatureRadiusBonus = data.srb;
        }
        target.slotUsed = FittingSlotType.Mid;
        target.cpuUsageActual = function (ship) {
            return CpuFormulas.standardModule(ship, this.cpuUsage);
        };
        target.powergridUsageActual = function (ship) {
            return PowergridFormulas.standardModule(ship, this.powergridUsage);
        };
    }

    function ShieldExtenderLoader(data, target) {
        target.slotUsed = FittingSlotType.Mid;
        target.shieldHPBonusAdd = data.shp;
        target.signatureRadiusBonus = data.sra;
        target.cpuUsageActual = function (ship) {
            return CpuFormulas.standardModule(ship, this.cpuUsage);
        };
        target.powergridUsageActual = function (ship) {
            return PowergridFormulas.shieldUpgradeModule(ship, this.powergridUsage);
        };
    }

    function DroneLoader(data, target) {
        target.droneBandwidthUsed = data.dbu;
        target.optimalRange = data.opt;
        target.accuracyFalloff = data.acc;
        target.rateOfFire = data.rof;
        target.trackingSpeed = data.trk;
        target.damageMultiplier = data.dmg;
        target.emBaseDamage = data.emd;
        target.explosiveBaseDamage = data.exd;
        target.kineticBaseDamage = data.kid;
        target.thermalBaseDamage = data.thd;
        target.emAlphaDamageActual = function (ship) {
            return target.emBaseDamage * target.damageMultiplier * ship.emDamageMultiplier(target, null);
        };
        target.explosiveAlphaDamageActual = function (ship) {
            return target.explosiveBaseDamage * target.damageMultiplier * ship.explosiveDamageMultiplier(target, null);
        };
        target.kineticAlphaDamageActual = function (ship) {
            return target.kineticBaseDamage * target.damageMultiplier * ship.kineticDamageMultiplier(target, null);
        };
        target.thermalAlphaDamageActual = function (ship) {
            return target.thermalBaseDamage * target.damageMultiplier * ship.thermalDamageMultiplier(target, null);
        };
    }

    function LowWeaponEnhancementLoader(data, target) {
        target.slotUsed = FittingSlotType.Low;
        if (data.rofm) {
            target.rateOfFireMultiplier = data.rofm;
        }
        if (data.dmg) {
            target.damageMultiplier = data.dmg;
        }
        if (data.midm) {
            target.missileDamageMultiplier = data.midm;
        }
        target.cpuUsageActual = function (ship) {
            return CpuFormulas.standardModule(ship, this.cpuUsage);
        };
        target.powergridUsageActual = function (ship) {
            return PowergridFormulas.standardModule(ship, this.powergridUsage);
        };
    }

    function ArmorPlateAndCoatingLoader(data, target) {
        if (data.ahp) {
            target.armorHPBonusAdd = data.ahp;
        }
        if (data.ahpbp) {
            target.armorHPBonusPercent = function (ship) {
                return data.ahpbp;
            };
        }
        if (data.emdrb || data.exdrb || data.kidrb || data.thdrb) {
            target.armorResists = new ResistSet(new Resistance((100 + (data.emdrb || 0)) / 100), new Resistance((100 + (data.exdrb || 0)) / 100), new Resistance((100 + (data.kidrb || 0)) / 100), new Resistance((100 + (data.thdrb || 0)) / 100), true);
        }
        target.slotUsed = FittingSlotType.Low;
        target.cpuUsageActual = function (ship) {
            return CpuFormulas.standardModule(ship, this.cpuUsage);
        };
        target.powergridUsageActual = function (ship) {
            return PowergridFormulas.standardModule(ship, this.powergridUsage);
        };
    }

    function PowerModuleLoader(data, target) {
        target.slotUsed = FittingSlotType.Low;
        target.powerGridIncrease = data.pginc;
        target.cpuUsageActual = function (ship) {
            return CpuFormulas.standardModule(ship, this.cpuUsage);
        };
        target.powergridUsageActual = function (ship) {
            return 0;
        };
    }

    function DamageControlLoader(data, target) {
        target.hullResists = new ResistSet(data.hemr, data.hexr, data.hkir, data.hthr, false);
        target.armorResists = new ResistSet(data.aemr, data.aexr, data.akir, data.athr, false);
        target.shieldResists = new ResistSet(data.semr, data.sexr, data.skir, data.sthr, false);

        target.slotUsed = FittingSlotType.Low;
        target.cpuUsageActual = function (ship) {
            return CpuFormulas.standardModule(ship, this.cpuUsage);
        };
        target.powergridUsageActual = function (ship) {
            return PowergridFormulas.standardModule(ship, this.powergridUsage);
        };
    }

    function ChargeLoader(data, target) {
        target.emBaseDamage = data.emd;
        target.explosiveBaseDamage = data.exd;
        target.kineticBaseDamage = data.kid;
        target.thermalBaseDamage = data.thd;
        target.weaponsRangeModifier = data.wrm;
        target.chargeSize = data.cs;
        target.launcherGroup = data.lg;
        target.trackingSpeedModifier = data.tsm;
    }

    function NanofiberLoader(data, target) {
        target.shipHullHPMultiplier = data.sshpm;
        target.agilityMultiplier = data.agim;
        target.baseVelocityMultiplier = data.velm;
        target.slotUsed = FittingSlotType.Low;
        target.cpuUsageActual = function (ship) {
            return CpuFormulas.standardModule(ship, target.cpuUsage);
        };
        target.powergridUsageActual = function (ship) {
            return PowergridFormulas.standardModule(ship, target.powergridUsage);
        };
    }

    function NosNeutLoader(data, target) {
        target.slotUsed = FittingSlotType.High;
        target.optimalRange = data.opt;
        target.capacitorNeed = data.capn;
        target.activationDuration = data.ad;
        target.powerTransferAmount = data.pta;
        target.energyDestabilizationAmount = data.eda;
        target.cpuUsageActual = function (ship) {
            return CpuFormulas.standardModule(ship, target.cpuUsage);
        };
        target.powergridUsageActual = function (ship) {
            return PowergridFormulas.standardModule(ship, target.powergridUsage);
        };
    }

    function RigLoader(data, target) {
        target.cpuUsageActual = function () {
            return 0;
        };
        target.powergridUsageActual = function () {
            return 0;
        };
        target.slotUsed = FittingSlotType.Rig;
        target.drawback = data.drwbk;
        var typeInfo = new TypeInfo(target.typeId, target.groupId);

        if (target.groupId == InventoryGroups.ArmorRig) {
            target.armorResists = new ResistSet((100 + data.emdrb) * 0.01 || 1, (100 + data.exdrb) * 0.01 || 1, (100 + data.kidrb) * 0.01 || 1, (100 + data.thdrb) * 0.01 || 1);
            if (Wafle.Data.DrawbackIsArmorRepairPowergridPenalty(typeInfo)) {
                //todo: implement me once armor repair modules are supported.
            } else if (Wafle.Data.DrawbackIsMaxVelocityPenalty(typeInfo)) {
                target.baseVelocityMultiplier = target.drawback;
                target.actualVelocityMultiplier = function (ship) {
                    var m = target.drawback;
                    if (ship.pilot) {
                        m = m * (1 - (ship.pilot.skills.ArmorRigging * 0.1));
                    }
                    return m;
                };
            }

            if (data.ahpbp) {
                target.armorHPBonusPercent = function (ship) {
                    return data.ahpbp;
                };
            }
        } else if (target.groupId == InventoryGroups.ShieldRig) {
            target.shieldResists = new ResistSet((100 + data.emdrb) * 0.01 || 1, (100 + data.exdrb) * 0.01 || 1, (100 + data.kidrb) * 0.01 || 1, (100 + data.thdrb) * 0.01 || 1);
        } else if (target.groupId == InventoryGroups.NavigationRig) {
            if (data.agim) {
                target.agilityMultiplier = data.agim;
            }
            if (data.velm) {
                target.baseVelocityMultiplier = data.velm;
            }
            target.armorHPBonusPercent = function (ship) {
                return target.drawback * (1 - (ship.pilot.skills.AstronauticsRigging * 0.1));
            };
        }
    }

    var TypeInfo = (function () {
        function TypeInfo(typeId, groupId) {
            this.typeId = typeId;
            if (groupId === undefined) {
                this.FindGroupId();
            } else {
                this.groupId = groupId;
            }
        }
        TypeInfo.prototype.FindGroupId = function () {
            this.groupId = Wafle.Data.TypeToGroupIDMapping[this.typeId.toString()];
        };
        return TypeInfo;
    })();
    Wafle.TypeInfo = TypeInfo;

    //todo: rename to InventoryTypeData during the refactoring initiative.
    var BaseShipEquipmentData = (function () {
        function BaseShipEquipmentData(p1, p2) {
            this.isActive = false;
            this.name = '';
            this.techLevel = 1;
            this.description = '';
            this.race = RaceType.Unknown;
            /** volume of the item in m3 */
            this.volume = 0;
            this.accuracyFalloff = 0;
            this.trackingSpeed = 0;
            this.cpuUsage = 0;
            this.rateOfFire = 0;
            /** Rate of fire multiplier - Rate is measured in ms between firing, so lower is faster: 0.9 would be a 10% faster rate of fire.*/
            this.rateOfFireMultiplier = 0;
            this.powergridUsage = 0;
            /** Base powergrid increase amount (for modules that create powergrid capacity) in MW, such as 12 = 12 MW powergrid increase.*/
            this.powerGridIncrease = 0;
            this.optimalRange = 0;
            this.metaLevel = 0;
            this.damageMultiplier = 1;
            this.missileDamageMultiplier = 1;
            this.marketGroup = 0;
            this.parentMarketGroup = 0;
            this.speedFactor = 0;
            /** Signature Radius bonus - expressed as a whole percentage increase, such as 10 = 10% increase to signature radius */
            this.signatureRadiusBonus = 0;
            /** Signature Radius bonus (of target) - expressed as a whole percentage increase, such as 10 = 10% increase to signature radius of a targeted ship */
            this.signatureRadiusBonusOfTarget = 0;
            /** Signature Radius Add - represented in meters (10 = 10 additional meters) */
            this.signatureRadiusAdd = 0;
            /** Shield HP added - represented as a flat addition (10 = 10 additional HP) */
            this.shieldHPBonusAdd = 0;
            /** Armor HP added - represented as a flat addition (10 = 10 additional HP) */
            this.armorHPBonusAdd = 0;
            this.slotUsed = FittingSlotType.Unknown;
            this.hullResists = null;
            this.armorResists = null;
            this.shieldResists = null;
            this.shipHullHPMultiplier = 0;
            this.agilityMultiplier = 0;
            /** Base Velocity Multiplier - As defined on the module with no skills applied - percentage represented in whole numbers (20% bonus as 20). */
            this.baseVelocityMultiplier = 0;
            /** Drawback if this is a rig */
            this.drawback = 0;
            /** Module activation duration in ms */
            this.activationDuration = 0;
            /** Armor repair amount in HP */
            this.armorHPRepaired = 0;
            /** Flat capacitor amount needed to activate the module */
            this.capacitorNeed = 0;
            /** powerTransferAmount in "not specified" units (probably GJ) - ex: 8 */
            this.powerTransferAmount = 0;
            /** energyDestabilizationAmount in Giga Joule - ex: 45 = 45GJ */
            this.energyDestabilizationAmount = 0;
            /** drone bandwidth used in Mbits/sec ex: 5 = 5 Mbits/sec */
            this.droneBandwidthUsed = 0;
            if (p1.typeId) {
                if (!p1.groupId) {
                    p1.FindGroupId();
                }
                this.typeId = (p1).typeId;
                this.groupId = (p1).groupId;
            } else {
                this.typeId = p2;
                this.groupId = p1;
            }

            if (!Wafle.Data.Types[this.groupId.toString()]) {
                throw "groupId " + this.groupId.toString() + " is not known.";
            }
            var data = Wafle.Data.Types[this.groupId.toString()][this.typeId.toString()];
            if (!data) {
                throw "typeId " + this.typeId.toString() + " in groupId " + this.groupId.toString() + " is not known.";
            }
            ShipEquipmentLoader(data, this);
            switch (this.groupId) {
                case InventoryGroups.ProjectileWeapon:
                case InventoryGroups.HybridWeapon:
                case InventoryGroups.EnergyWeapon:
                    TurretLoader(data, this);
                    break;
                case InventoryGroups.HybridCharge:
                case InventoryGroups.FrequencyCrystal:
                case InventoryGroups.AdvancedRailgunCharge:
                case InventoryGroups.AdvancedBlasterCharge:
                case InventoryGroups.AdvancedBeamLaserCrystal:
                case InventoryGroups.AdvancedPulseLaserCrystal:
                case InventoryGroups.AdvancedArtilleryAmmo:
                case InventoryGroups.ProjectileAmmo:
                case InventoryGroups.Rocket:
                case InventoryGroups.AdvancedRocket:
                case InventoryGroups.LightMissile:
                case InventoryGroups.AdvancedLightMissile:
                    ChargeLoader(data, this);
                    break;
                case InventoryGroups.RocketLauncher:
                case InventoryGroups.LightMissileLauncher:
                case InventoryGroups.HeavyAssaultMissileLauncher:
                case InventoryGroups.HeavyMissileLauncher:
                    LauncherLoader(data, this);
                    break;
                case InventoryGroups.StasisWeb:
                case InventoryGroups.TargetPainter:
                    MidProjectedEffectLoader(data, this);
                    break;
                case InventoryGroups.Propulsion:
                    PropulsionLoader(data, this);
                    break;
                case InventoryGroups.ShieldExtender:
                    ShieldExtenderLoader(data, this);
                    break;
                case InventoryGroups.WarpScrambler:
                    MidProjectedEffectLoader(data, this);
                    break;
                case InventoryGroups.ArmorPlate:
                case InventoryGroups.ArmorCoating:
                    ArmorPlateAndCoatingLoader(data, this);
                    break;
                case InventoryGroups.Nanofiber:
                    NanofiberLoader(data, this);
                    break;
                case InventoryGroups.EnergyDestabilizer:
                case InventoryGroups.EnergyVampire:
                    NosNeutLoader(data, this);
                    break;
                case InventoryGroups.ArmorRig:
                case InventoryGroups.ShieldRig:
                case InventoryGroups.NavigationRig:
                    RigLoader(data, this);
                    break;
                case InventoryGroups.DamageControl:
                    DamageControlLoader(data, this);
                    break;
                case InventoryGroups.AuxiliaryPowerCore:
                    PowerModuleLoader(data, this);
                case InventoryGroups.BallisticControlSystem:
                case InventoryGroups.Gyrostabilizer:
                case InventoryGroups.HeatSink:
                case InventoryGroups.MagneticFieldStabilizer:
                    LowWeaponEnhancementLoader(data, this);
                case InventoryGroups.CombatDrone:
                    DroneLoader(data, this);
                default:
                    break;
            }
        }
        /** total alpha damage of all types at optimal including ship bonuses, pilot skill, and ammunition used. */
        BaseShipEquipmentData.prototype.totalAlphaDamageActual = function (ship, charge) {
            var total = 0;
            if (this.emAlphaDamageActual) {
                total += this.emAlphaDamageActual(ship, charge);
            }
            if (this.explosiveAlphaDamageActual) {
                total += this.explosiveAlphaDamageActual(ship, charge);
            }
            if (this.kineticAlphaDamageActual) {
                total += this.kineticAlphaDamageActual(ship, charge);
            }
            if (this.thermalAlphaDamageActual) {
                total += this.thermalAlphaDamageActual(ship, charge);
            }
            return total;
        };

        BaseShipEquipmentData.prototype.Activate = function () {
            this.isActive = true;
        };
        BaseShipEquipmentData.prototype.Deactivate = function () {
            this.isActive = false;
        };

        BaseShipEquipmentData.prototype.typeInfo = function () {
            return new TypeInfo(this.typeId, this.groupId);
        };

        BaseShipEquipmentData.prototype.damageMultiplierForModule = function (theAttackingModule) {
            if (this.damageMultiplier == 0 && this.missileDamageMultiplier == 0) {
                return 1;
            }

            var ti = theAttackingModule.typeInfo();
            if (Wafle.Data.IsLauncher(ti)) {
                return this.missileDamageMultiplier;
            } else if (ti.groupId == InventoryGroups.ProjectileWeapon) {
                if (this.groupId == InventoryGroups.Gyrostabilizer) {
                    return this.damageMultiplier;
                }
            } else if (ti.groupId == InventoryGroups.HybridWeapon) {
                if (this.groupId == InventoryGroups.MagneticFieldStabilizer) {
                    return this.damageMultiplier;
                }
            } else if (ti.groupId == InventoryGroups.EnergyWeapon) {
                if (this.groupId == InventoryGroups.HeatSink) {
                    return this.damageMultiplier;
                }
            }
            return 1;
        };
        return BaseShipEquipmentData;
    })();
    Wafle.BaseShipEquipmentData = BaseShipEquipmentData;

    var Resistance = (function () {
        /** baseResistRatio = Fractional damage amount taken - 90% damage taken (10% resisted) expressed as 0.9  */
        function Resistance(baseResistRatio) {
            this.baseResistRatio = baseResistRatio;
        }
        /**
        * Base damage reduction percentage.  30% damage reduction expressed as 0.3 .
        **/
        Resistance.prototype.baseDamageReductionPercentage = function () {
            return 1 - this.baseResistRatio;
        };
        return Resistance;
    })();
    Wafle.Resistance = Resistance;
    var ResistSet = (function () {
        function ResistSet(em, ex, ki, th, dr) {
            this.HasDiminishingReturns = true;
            this.EM = this.resistLoader(em);
            this.Explosive = this.resistLoader(ex);
            this.Kinetic = this.resistLoader(ki);
            this.Thermal = this.resistLoader(th);
            if (dr != undefined) {
                this.HasDiminishingReturns = dr;
            }
        }
        ResistSet.prototype.resistLoader = function (theValue) {
            if (theValue.baseResistRatio) {
                return theValue;
            } else {
                return new Resistance(theValue);
            }
        };
        return ResistSet;
    })();
    Wafle.ResistSet = ResistSet;

    var BaseShipData = (function () {
        function BaseShipData(param1, param2) {
            if (typeof param2 === "undefined") { param2 = -1; }
            this.race = RaceType.Unknown;
            this.hullResists = null;
            this.armorResists = null;
            this.shieldResists = null;
            this.rigSize = RigSize.Unknown;
            var _groupId, _typeId, _hullname;
            if (param1 === null) {
                throw "BaseShipData does not accept a null parameter.";
            }
            if (param2 === -1 && !(param1.typeId)) {
                //we are searching for a ship by name.
                _hullname = param1;

                var typeInfo = FindTypeByName(_hullname);
                if (typeInfo === null) {
                    throw 'Could not find ship with name "' + _hullname + '".';
                }
                _groupId = typeInfo.groupId;
                _typeId = typeInfo.typeId;
            } else {
                if (param1.typeId) {
                    _groupId = (param1).groupId;
                    _typeId = (param1).typeId;
                } else {
                    _groupId = param1;
                    _typeId = param2;
                }
            }

            try  {
                var data = Wafle.Data.Types[_groupId.toString()][_typeId.toString()];
            } catch (ex) {
                throw "Ship not found with typeId " + _typeId.toString() + ", groupId " + _groupId.toString() + ".";
            }

            this.typeId = _typeId;
            this.groupId = _groupId;
            this.marketGroupId = data.mg;
            this.parentMarketGroupId = data.pmg;
            this.metaLevel = data.mta;
            this.techLevel = data.tl;
            this.hullName = data.n;
            this.race = data.r;
            this.cpuOutput = data.cpuo;
            this.powergridOutput = data.pgo;
            this.structureHP = data.shhp;
            this.armorHP = data.sahp;
            this.shieldHP = data.sshp;
            this.hullResists = new ResistSet(data.hemr, data.hexr, data.hkir, data.hthr, false);
            this.armorResists = new ResistSet(data.aemr, data.aexr, data.akir, data.athr, false);
            this.shieldResists = new ResistSet(data.semr, data.sexr, data.skir, data.sthr, false);

            this.lowSlotCount = data.lsc;
            this.midSlotCount = data.msc;
            this.highSlotCount = data.hsc;
            this.rigSlotCount = data.rsc;
            this.rigSize = data.rgsz;
            this.calibration = data.calb;
            this.turretCount = data.tusc;
            this.launcherCount = data.lasc;
            this.maxVelocity = data.vel;
            this.droneBayCapacity = data.dc;
            this.droneBandwidth = data.db;
            this.cargoHoldCapacity = data.c;
        }
        BaseShipData.prototype.slotCount = function () {
            return this.highSlotCount + this.midSlotCount + this.lowSlotCount + this.rigSlotCount;
        };
        return BaseShipData;
    })();
    Wafle.BaseShipData = BaseShipData;

    if (typeof Object.getOwnPropertyNames !== "function") {
        Object.getOwnPropertyNames = function (obj) {
            var keys = [];

            if (typeof obj === "object" && obj !== null) {
                for (var x in obj) {
                    if (obj.hasOwnProperty(x)) {
                        keys.push(x);
                    }
                }
            }

            return keys;
        };
    }

    function FindTypeByName(theName) {
        var groupCount = Object.getOwnPropertyNames(Wafle.Data.Types).length;
        for (var groupIndex = 0; groupIndex < groupCount; groupIndex++) {
            var groupId = Object.getOwnPropertyNames(Wafle.Data.Types)[groupIndex];
            var typeCount = Object.getOwnPropertyNames(Wafle.Data.Types[groupId]).length;
            for (var typeIndex = 0; typeIndex < typeCount; typeIndex++) {
                var typeId = Object.getOwnPropertyNames(Wafle.Data.Types[groupId])[typeIndex];
                if (Wafle.Data.Types[groupId][typeId].n === theName) {
                    return new TypeInfo(parseInt(typeId), parseInt(groupId));
                }
            }
        }
        return null;
    }
    Wafle.FindTypeByName = FindTypeByName;
})(Wafle || (Wafle = {}));
//# sourceMappingURL=wafleCore.js.map
