/// <reference path="wafleCore.d.ts" />
/// <reference path="wafleData.d.ts" />
declare module Wafle.Data {
    function DrawbackIsArmorRepairPowergridPenalty(type: Wafle.TypeInfo): boolean;
    function DrawbackIsMaxVelocityPenalty(type: Wafle.TypeInfo): boolean;
    function DrawbackIsArmorAmount(type: Wafle.TypeInfo): boolean;
    function AffectedByArmorCompensationSkills(type: Wafle.TypeInfo): boolean;
    function IsTurret(type: Wafle.TypeInfo): boolean;
    function IsBlaster(bsed: Wafle.BaseShipEquipmentData): boolean;
    function IsRailgun(bsed: Wafle.BaseShipEquipmentData): boolean;
    function IsLauncher(type: Wafle.TypeInfo): boolean;
    function IsLoadableCharge(type: Wafle.TypeInfo): boolean;
    function ShipOmniDamageMultiplier(ship: Wafle.Ship, attackingModule: Wafle.BaseShipEquipmentData, charge: Wafle.BaseShipEquipmentData): number;
}
