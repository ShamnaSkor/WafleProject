define(["require", "exports", "../wafle"], function(require, exports, Wafle) {
    //todo: rename to InventoryTypeData during the refactoring initiative.
    var BaseShipEquipmentData = (function () {
        function BaseShipEquipmentData(p1, p2) {
            this.isActive = false;
            this.name = '';
            this.techLevel = 1;
            this.description = '';
            this.race = 0 /* Unknown */;
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
            this.slotUsed = 0 /* Unknown */;
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
                this.typeId = p1.typeId;
                this.groupId = p1.groupId;
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
                case 55 /* ProjectileWeapon */:
                case 74 /* HybridWeapon */:
                case 53 /* EnergyWeapon */:
                    TurretLoader(data, this);
                    break;
                case 85 /* HybridCharge */:
                case 86 /* FrequencyCrystal */:
                case 373 /* AdvancedRailgunCharge */:
                case 377 /* AdvancedBlasterCharge */:
                case 374 /* AdvancedBeamLaserCrystal */:
                case 375 /* AdvancedPulseLaserCrystal */:
                case 376 /* AdvancedArtilleryAmmo */:
                case 83 /* ProjectileAmmo */:
                case 387 /* Rocket */:
                case 648 /* AdvancedRocket */:
                case 384 /* LightMissile */:
                case 653 /* AdvancedLightMissile */:
                    ChargeLoader(data, this);
                    break;
                case 507 /* RocketLauncher */:
                case 509 /* LightMissileLauncher */:
                case 771 /* HeavyAssaultMissileLauncher */:
                case 510 /* HeavyMissileLauncher */:
                    LauncherLoader(data, this);
                    break;
                case 65 /* StasisWeb */:
                case 379 /* TargetPainter */:
                    MidProjectedEffectLoader(data, this);
                    break;
                case 46 /* Propulsion */:
                    PropulsionLoader(data, this);
                    break;
                case 38 /* ShieldExtender */:
                    ShieldExtenderLoader(data, this);
                    break;
                case 52 /* WarpScrambler */:
                    MidProjectedEffectLoader(data, this);
                    break;
                case 329 /* ArmorPlate */:
                case 98 /* ArmorCoating */:
                    ArmorPlateAndCoatingLoader(data, this);
                    break;
                case 763 /* Nanofiber */:
                    NanofiberLoader(data, this);
                    break;
                case 71 /* EnergyDestabilizer */:
                case 68 /* EnergyVampire */:
                    NosNeutLoader(data, this);
                    break;
                case 773 /* ArmorRig */:
                case 774 /* ShieldRig */:
                case 782 /* NavigationRig */:
                    RigLoader(data, this);
                    break;
                case 60 /* DamageControl */:
                    DamageControlLoader(data, this);
                    break;
                case 339 /* AuxiliaryPowerCore */:
                    PowerModuleLoader(data, this);
                case 367 /* BallisticControlSystem */:
                case 59 /* Gyrostabilizer */:
                case 205 /* HeatSink */:
                case 302 /* MagneticFieldStabilizer */:
                    LowWeaponEnhancementLoader(data, this);
                case 100 /* CombatDrone */:
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
            return new Wafle.TypeInfo(this.typeId, this.groupId);
        };

        BaseShipEquipmentData.prototype.damageMultiplierForModule = function (theAttackingModule) {
            if (this.damageMultiplier == 0 && this.missileDamageMultiplier == 0) {
                return 1;
            }

            var ti = theAttackingModule.typeInfo();
            if (Wafle.Data.IsLauncher(ti)) {
                return this.missileDamageMultiplier;
            } else if (ti.groupId == 55 /* ProjectileWeapon */) {
                if (this.groupId == 59 /* Gyrostabilizer */) {
                    return this.damageMultiplier;
                }
            } else if (ti.groupId == 74 /* HybridWeapon */) {
                if (this.groupId == 302 /* MagneticFieldStabilizer */) {
                    return this.damageMultiplier;
                }
            } else if (ti.groupId == 53 /* EnergyWeapon */) {
                if (this.groupId == 205 /* HeatSink */) {
                    return this.damageMultiplier;
                }
            }
            return 1;
        };
        return BaseShipEquipmentData;
    })();

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
        target.slotUsed = 1 /* High */;
        target.launcherGroup = data.lg;
        target.chargeSize = data.cs;
        target.cpuUsageActual = function (ship) {
            return Wafle.CpuFormulas.standardWeapon(ship, target.cpuUsage);
        };
        target.powergridUsageActual = function (ship) {
            return Wafle.PowergridFormulas.standardWeapon(ship, target.powergridUsage);
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
        target.slotUsed = 1 /* High */;
        target.cpuUsageActual = function (ship) {
            return Wafle.CpuFormulas.standardWeapon(ship, target.cpuUsage);
        };
        target.powergridUsageActual = function (ship) {
            return Wafle.PowergridFormulas.standardWeapon(ship, target.powergridUsage);
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
        target.slotUsed = 2 /* Mid */;
        if (data.srb) {
            target.signatureRadiusBonusOfTarget = data.srb;
        }
        if (data.ad) {
            target.activationDuration = data.ad;
        }
        target.cpuUsageActual = function (ship) {
            return Wafle.CpuFormulas.standardModule(ship, this.cpuUsage);
        };
        target.powergridUsageActual = function (ship) {
            return Wafle.PowergridFormulas.standardModule(ship, this.powergridUsage);
        };
    }

    function PropulsionLoader(data, target) {
        target.speedFactor = data.spd;
        if (data.srb) {
            target.signatureRadiusBonus = data.srb;
        }
        target.slotUsed = 2 /* Mid */;
        target.cpuUsageActual = function (ship) {
            return Wafle.CpuFormulas.standardModule(ship, this.cpuUsage);
        };
        target.powergridUsageActual = function (ship) {
            return Wafle.PowergridFormulas.standardModule(ship, this.powergridUsage);
        };
    }

    function ShieldExtenderLoader(data, target) {
        target.slotUsed = 2 /* Mid */;
        target.shieldHPBonusAdd = data.shp;
        target.signatureRadiusBonus = data.sra;
        target.cpuUsageActual = function (ship) {
            return Wafle.CpuFormulas.standardModule(ship, this.cpuUsage);
        };
        target.powergridUsageActual = function (ship) {
            return Wafle.PowergridFormulas.shieldUpgradeModule(ship, this.powergridUsage);
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
        target.slotUsed = 3 /* Low */;
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
            return Wafle.CpuFormulas.standardModule(ship, this.cpuUsage);
        };
        target.powergridUsageActual = function (ship) {
            return Wafle.PowergridFormulas.standardModule(ship, this.powergridUsage);
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
            target.armorResists = new Wafle.ResistSet(new Wafle.Resistance((100 + (data.emdrb || 0)) / 100), new Wafle.Resistance((100 + (data.exdrb || 0)) / 100), new Wafle.Resistance((100 + (data.kidrb || 0)) / 100), new Wafle.Resistance((100 + (data.thdrb || 0)) / 100), true);
        }
        target.slotUsed = 3 /* Low */;
        target.cpuUsageActual = function (ship) {
            return Wafle.CpuFormulas.standardModule(ship, this.cpuUsage);
        };
        target.powergridUsageActual = function (ship) {
            return Wafle.PowergridFormulas.standardModule(ship, this.powergridUsage);
        };
    }

    function PowerModuleLoader(data, target) {
        target.slotUsed = 3 /* Low */;
        target.powerGridIncrease = data.pginc;
        target.cpuUsageActual = function (ship) {
            return Wafle.CpuFormulas.standardModule(ship, this.cpuUsage);
        };
        target.powergridUsageActual = function (ship) {
            return 0;
        };
    }

    function DamageControlLoader(data, target) {
        target.hullResists = new Wafle.ResistSet(data.hemr, data.hexr, data.hkir, data.hthr, false);
        target.armorResists = new Wafle.ResistSet(data.aemr, data.aexr, data.akir, data.athr, false);
        target.shieldResists = new Wafle.ResistSet(data.semr, data.sexr, data.skir, data.sthr, false);

        target.slotUsed = 3 /* Low */;
        target.cpuUsageActual = function (ship) {
            return Wafle.CpuFormulas.standardModule(ship, this.cpuUsage);
        };
        target.powergridUsageActual = function (ship) {
            return Wafle.PowergridFormulas.standardModule(ship, this.powergridUsage);
        };
    }

    function ChargeLoader(data, target) {
        target.emBaseDamage = data.emd;
        target.explosiveBaseDamage = data.exd;
        target.kineticBaseDamage = data.kid;
        target.thermalBaseDamage = data.thd;
        target.weaponsRangeModifier = data.wrm;
        target.chargeSize = data.cs;
        target.launcherGroup = data.lg; //todo: fix up so this works with all types of charges
        target.trackingSpeedModifier = data.tsm;
    }

    function NanofiberLoader(data, target) {
        target.shipHullHPMultiplier = data.sshpm;
        target.agilityMultiplier = data.agim;
        target.baseVelocityMultiplier = data.velm;
        target.slotUsed = 3 /* Low */;
        target.cpuUsageActual = function (ship) {
            return Wafle.CpuFormulas.standardModule(ship, target.cpuUsage);
        };
        target.powergridUsageActual = function (ship) {
            return Wafle.PowergridFormulas.standardModule(ship, target.powergridUsage);
        };
    }

    function NosNeutLoader(data, target) {
        target.slotUsed = 1 /* High */;
        target.optimalRange = data.opt;
        target.capacitorNeed = data.capn;
        target.activationDuration = data.ad;
        target.powerTransferAmount = data.pta;
        target.energyDestabilizationAmount = data.eda;
        target.cpuUsageActual = function (ship) {
            return Wafle.CpuFormulas.standardModule(ship, target.cpuUsage);
        };
        target.powergridUsageActual = function (ship) {
            return Wafle.PowergridFormulas.standardModule(ship, target.powergridUsage);
        };
    }

    function RigLoader(data, target) {
        target.cpuUsageActual = function () {
            return 0;
        };
        target.powergridUsageActual = function () {
            return 0;
        };
        target.slotUsed = 4 /* Rig */;
        target.drawback = data.drwbk;
        var typeInfo = new Wafle.TypeInfo(target.typeId, target.groupId);

        if (target.groupId == 773 /* ArmorRig */) {
            target.armorResists = new Wafle.ResistSet((100 + data.emdrb) * 0.01 || 1, (100 + data.exdrb) * 0.01 || 1, (100 + data.kidrb) * 0.01 || 1, (100 + data.thdrb) * 0.01 || 1);
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
        } else if (target.groupId == 774 /* ShieldRig */) {
            target.shieldResists = new Wafle.ResistSet((100 + data.emdrb) * 0.01 || 1, (100 + data.exdrb) * 0.01 || 1, (100 + data.kidrb) * 0.01 || 1, (100 + data.thdrb) * 0.01 || 1);
        } else if (target.groupId == 782 /* NavigationRig */) {
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

    
    return BaseShipEquipmentData;
});
//# sourceMappingURL=BaseShipEquipmentData.js.map
