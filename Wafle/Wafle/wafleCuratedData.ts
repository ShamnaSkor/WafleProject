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
        var ps = ship.pilot.skills;
        var mult = 1.0;

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

        for (var i = 0; i < ship.fittingSlots.length; i++) {
            if (ship.fittingSlots[i].baseShipEquipmentData) {
                mult *= ship.fittingSlots[i].baseShipEquipmentData.damageMultiplierForModule(attackingModule);
            }
        }

        return mult;
    }
}