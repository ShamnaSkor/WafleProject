///<reference path="wafleCore.ts"/>
///<reference path="wafleData.ts"/>
module Wafle.Data {

    export function DrawbackIsArmorRepairPowergridPenalty(type: Wafle.TypeInfo): boolean {
        if (type.groupId === undefined) {
            type.FindGroupId();
        }
        if (type.groupId !== Wafle.InventoryGroups.ArmorRig) {
            return false;
        }
        var typeIdsWithArmorRepairPowergridPenalty = [25896, 25898, 26294, 26296, 27064, 27066, 31045, 31047, 31049, 31051, 31053, 31063, 31065, 31067, 31069, 31071];
        return (typeIdsWithArmorRepairPowergridPenalty.indexOf(type.typeId) > -1);
    }
    export function DrawbackIsMaxVelocityPenalty(type: Wafle.TypeInfo): boolean {
        if (type.groupId === undefined) {
            type.FindGroupId();
        }
        if (type.groupId !== Wafle.InventoryGroups.ArmorRig) {
            return false;
        }
        return (!DrawbackIsArmorRepairPowergridPenalty(type));
    }
    export function DrawbackIsArmorAmount(type: Wafle.TypeInfo): boolean {
        if (type.groupId === undefined) {
            type.FindGroupId();
        }
        return (type.groupId === Wafle.InventoryGroups.NavigationRig); //they all have this drawback.
    }
    export function AffectedByArmorCompensationSkills(type: Wafle.TypeInfo): boolean {
        var w = Wafle.InventoryGroups;
        return (type.groupId === w.ArmorCoating || type.groupId === w.ArmorPlatingEnergized);
    }

    export function IsTurret(type: Wafle.TypeInfo): boolean {
       var w = Wafle.InventoryGroups;
        return (type.groupId === w.ProjectileWeapon || type.groupId === w.EnergyWeapon || type.groupId === w.HybridWeapon);
    }
    export function IsBlaster(bsed: BaseShipEquipmentData): boolean {
        return (bsed.groupId === Wafle.InventoryGroups.HybridWeapon && bsed.parentMarketGroup === 556);
    }
    export function IsRailgun(bsed: BaseShipEquipmentData): boolean {
        return (bsed.groupId === Wafle.InventoryGroups.HybridWeapon && bsed.parentMarketGroup === 555);
    }

    export function IsLauncher(type: Wafle.TypeInfo): boolean {
        var w = Wafle.InventoryGroups;
        return (type.groupId === w.RocketLauncher ||
            type.groupId === w.HeavyMissileLauncher ||
            type.groupId === w.HeavyAssaultMissileLauncher ||
            type.groupId === w.LightMissileLauncher ||
            type.groupId === w.RapidLightMissileLauncher);
    }

    export function IsLoadableCharge(type: Wafle.TypeInfo): boolean {
        var w = Wafle.InventoryGroups;
        return (type.groupId === w.AdvancedArtilleryAmmo ||
            type.groupId === w.AdvancedAutocannonAmmo ||
            type.groupId === w.AdvancedBeamLaserCrystal ||
            type.groupId === w.AdvancedBlasterCharge ||
            type.groupId === w.AdvancedHeavyAssaultMissile ||
            type.groupId === w.AdvancedHeavyMissile ||
            type.groupId === w.AdvancedLightMissile ||
            type.groupId === w.AdvancedPulseLaserCrystal ||
            type.groupId === w.AdvancedRailgunCharge ||
            type.groupId === w.AdvancedRocket ||
            type.groupId === w.FoFHeavyMissile ||
            type.groupId === w.FrequencyCrystal ||
            type.groupId === w.HeavyAssaultMissile ||
            type.groupId === w.HeavyMissile ||
            type.groupId === w.HybridCharge ||
            type.groupId === w.LightMissile ||
            type.groupId === w.ProjectileAmmo ||
            type.groupId === w.Rocket);
    }


    export function ShipOmniDamageMultiplier(ship: Ship, attackingModule: BaseShipEquipmentData, charge: BaseShipEquipmentData): number {
        
        var mult = 1.0;

        if (ship.pilot && ship.pilot.skills) {
            var ps = ship.pilot.skills;
            switch (ship.baseShipData.typeId) {
                case 587:
                    if (attackingModule.groupId === InventoryGroups.ProjectileWeapon && attackingModule.chargeSize === 1) {
                        mult *= (1 + (0.05 * ps.MinmatarFrigate));
                    }
                    break;
                case 602:
                    if (attackingModule.groupId === InventoryGroups.RocketLauncher || attackingModule.groupId === InventoryGroups.LightMissileLauncher) {
                        mult *= (1 + (0.05 * ps.CaldariFrigate));
                    }
                    break;
                //no default
            }

            if (attackingModule.groupId === InventoryGroups.CombatDrone) {
                mult *= (1 + (0.2 * ps.DroneInterfacing));
                if (attackingModule.volume == 10 || attackingModule.volume == 5) {
                    mult *= (1 + (0.05 * ps.CombatDroneOperation));
                }
                if (attackingModule.techLevel == 2) {
                    switch (attackingModule.race) {
                        case RaceType.Minmatar:
                            mult *= (1 + (0.02 * ps.MinmatarDroneSpecialization));
                            break;
                        case RaceType.Gallente:
                            mult *= (1 + (0.02 * ps.GallenteDroneSpecialization));
                            break;
                        case RaceType.Caldari:
                            mult *= (1 + (0.02 * ps.CaldariDroneSpecialization));
                            break;
                        case RaceType.Amarr:
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
}