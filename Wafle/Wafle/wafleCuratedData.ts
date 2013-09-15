///<reference path="wafleCore.ts"/>
///<reference path="wafleData.ts"/>
module Wafle.Data {

    export function DrawbackIsArmorRepairPowergridPenalty(type: Wafle.TypeInfo): boolean {
        var t = type;
        if (t.groupId === undefined) {
            t.FindGroupId();
        }
        if (t.groupId !== Wafle.InventoryGroups.ArmorRig) {
            return false;
        }
        var typeIdsWithArmorRepairPowergridPenalty = [25896, 25898, 26294, 26296, 27064, 27066, 31045, 31047, 31049, 31051, 31053, 31063, 31065, 31067, 31069, 31071];
        return (typeIdsWithArmorRepairPowergridPenalty.indexOf(t.typeId) > -1);
    }
    export function DrawbackIsMaxVelocityPenalty(type: Wafle.TypeInfo): boolean {
        var t = type; 
        if (t.groupId === undefined) {
            t.FindGroupId();
        }
        if (t.groupId !== Wafle.InventoryGroups.ArmorRig) {
            return false;
        }
        return (!DrawbackIsArmorRepairPowergridPenalty(t));
    }

}