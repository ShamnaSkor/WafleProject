define(["require", "exports", "../wafle"], function(require, exports, Wafle) {
    exports.Types = {};

    exports.TypeToGroupIDMapping = [];

    function DrawbackIsArmorRepairPowergridPenalty(type) {
        if (type.groupId === undefined) {
            type.FindGroupId();
        }
        if (type.groupId !== 773 /* ArmorRig */) {
            return false;
        }
        var typeIdsWithArmorRepairPowergridPenalty = [25896, 25898, 26294, 26296, 27064, 27066, 31045, 31047, 31049, 31051, 31053, 31063, 31065, 31067, 31069, 31071];
        return (typeIdsWithArmorRepairPowergridPenalty.indexOf(type.typeId) > -1);
    }
    exports.DrawbackIsArmorRepairPowergridPenalty = DrawbackIsArmorRepairPowergridPenalty;
    function DrawbackIsMaxVelocityPenalty(type) {
        if (type.groupId === undefined) {
            type.FindGroupId();
        }
        if (type.groupId !== 773 /* ArmorRig */) {
            return false;
        }
        return (!exports.DrawbackIsArmorRepairPowergridPenalty(type));
    }
    exports.DrawbackIsMaxVelocityPenalty = DrawbackIsMaxVelocityPenalty;
    function DrawbackIsArmorAmount(type) {
        if (type.groupId === undefined) {
            type.FindGroupId();
        }
        return (type.groupId === 782 /* NavigationRig */);
    }
    exports.DrawbackIsArmorAmount = DrawbackIsArmorAmount;
    function AffectedByArmorCompensationSkills(type) {
        var w = Wafle.InventoryGroups;
        return (type.groupId === 98 /* ArmorCoating */ || type.groupId === 326 /* ArmorPlatingEnergized */);
    }
    exports.AffectedByArmorCompensationSkills = AffectedByArmorCompensationSkills;

    function IsTurret(type) {
        var w = Wafle.InventoryGroups;
        return (type.groupId === 55 /* ProjectileWeapon */ || type.groupId === 53 /* EnergyWeapon */ || type.groupId === 74 /* HybridWeapon */);
    }
    exports.IsTurret = IsTurret;

    function IsLauncher(type) {
        var w = Wafle.InventoryGroups;
        return (type.groupId === 507 /* RocketLauncher */ || type.groupId === 510 /* HeavyMissileLauncher */ || type.groupId === 771 /* HeavyAssaultMissileLauncher */ || type.groupId === 509 /* LightMissileLauncher */ || type.groupId === 511 /* RapidLightMissileLauncher */);
    }
    exports.IsLauncher = IsLauncher;

    function IsLoadableCharge(type) {
        var w = Wafle.InventoryGroups;
        return (type.groupId === 376 /* AdvancedArtilleryAmmo */ || type.groupId === 372 /* AdvancedAutocannonAmmo */ || type.groupId === 374 /* AdvancedBeamLaserCrystal */ || type.groupId === 377 /* AdvancedBlasterCharge */ || type.groupId === 654 /* AdvancedHeavyAssaultMissile */ || type.groupId === 655 /* AdvancedHeavyMissile */ || type.groupId === 653 /* AdvancedLightMissile */ || type.groupId === 375 /* AdvancedPulseLaserCrystal */ || type.groupId === 373 /* AdvancedRailgunCharge */ || type.groupId === 648 /* AdvancedRocket */ || type.groupId === 395 /* FoFHeavyMissile */ || type.groupId === 86 /* FrequencyCrystal */ || type.groupId === 772 /* HeavyAssaultMissile */ || type.groupId === 385 /* HeavyMissile */ || type.groupId === 85 /* HybridCharge */ || type.groupId === 384 /* LightMissile */ || type.groupId === 83 /* ProjectileAmmo */ || type.groupId === 387 /* Rocket */);
    }
    exports.IsLoadableCharge = IsLoadableCharge;

    function IsBlaster(bsed) {
        return (bsed.groupId === 74 /* HybridWeapon */ && bsed.parentMarketGroup === 556);
    }
    exports.IsBlaster = IsBlaster;
    function IsRailgun(bsed) {
        return (bsed.groupId === 74 /* HybridWeapon */ && bsed.parentMarketGroup === 555);
    }
    exports.IsRailgun = IsRailgun;

    function ShipOmniDamageMultiplier(ship, attackingModule, charge) {
        var mult = 1.0;

        if (ship.pilot && ship.pilot.skills) {
            var ps = ship.pilot.skills;
            switch (ship.baseShipData.typeId) {
                case 587:
                    if (attackingModule.groupId === 55 /* ProjectileWeapon */ && attackingModule.chargeSize === 1) {
                        mult *= (1 + (0.05 * ps.MinmatarFrigate));
                    }
                    break;
                case 602:
                    if (attackingModule.groupId === 507 /* RocketLauncher */ || attackingModule.groupId === 509 /* LightMissileLauncher */) {
                        mult *= (1 + (0.05 * ps.CaldariFrigate));
                    }
                    break;
            }

            if (attackingModule.groupId === 100 /* CombatDrone */) {
                mult *= (1 + (0.2 * ps.DroneInterfacing));
                if (attackingModule.volume == 10 || attackingModule.volume == 5) {
                    mult *= (1 + (0.05 * ps.CombatDroneOperation));
                }
                if (attackingModule.techLevel == 2) {
                    switch (attackingModule.race) {
                        case 2 /* Minmatar */:
                            mult *= (1 + (0.02 * ps.MinmatarDroneSpecialization));
                            break;
                        case 8 /* Gallente */:
                            mult *= (1 + (0.02 * ps.GallenteDroneSpecialization));
                            break;
                        case 1 /* Caldari */:
                            mult *= (1 + (0.02 * ps.CaldariDroneSpecialization));
                            break;
                        case 4 /* Amarr */:
                            mult *= (1 + (0.02 * ps.AmarrDroneSpecialization));
                            break;
                    }
                }
            }
        }

        for (var i = 0; i < ship.fittingSlots.length; i++) {
            if (ship.fittingSlots[i].baseShipEquipmentData) {
                mult *= ship.fittingSlots[i].baseShipEquipmentData.damageMultiplierForModule(attackingModule);
            }
        }

        return mult;
    }
    exports.ShipOmniDamageMultiplier = ShipOmniDamageMultiplier;
});
//# sourceMappingURL=CuratedData.js.map
