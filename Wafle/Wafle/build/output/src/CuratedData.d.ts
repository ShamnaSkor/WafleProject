declare var WAFLE_DATA_BLOB_INVENTORY_TYPES_BY_GROUP: any;
declare module Wafle {
    module Data {
        var Types: IWafleTypeDataBlob;
        var TypeToGroupIDMapping: any[];
        function DrawbackIsArmorRepairPowergridPenalty(type: TypeInfo): boolean;
        function DrawbackIsMaxVelocityPenalty(type: TypeInfo): boolean;
        function DrawbackIsArmorAmount(type: TypeInfo): boolean;
        function AffectedByArmorCompensationSkills(type: TypeInfo): boolean;
        function IsTurret(type: TypeInfo): boolean;
        function IsLauncher(type: TypeInfo): boolean;
        function IsLoadableCharge(type: TypeInfo): boolean;
        function IsBlaster(bsed: InventoryTypeAttributes): boolean;
        function IsRailgun(bsed: InventoryTypeAttributes): boolean;
        function ShipOmniDamageMultiplier(ship: Ship, attackingModule: InventoryTypeAttributes, charge: InventoryTypeAttributes): number;
    }
}
