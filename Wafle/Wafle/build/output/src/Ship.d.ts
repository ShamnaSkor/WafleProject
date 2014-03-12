/// <reference path="../_references.d.ts" />
declare module Wafle {
    class Ship {
        public hullName: string;
        public baseShipData: BaseShipData;
        public pilot: Pilot;
        public fittingSlots: FittingSlot[];
        public droneBay: InventoryTypeAttributes[];
        public cargoHold: InventoryTypeAttributes[];
        /** in Mbit/sec */
        public DroneBandwidthUsed(): number;
        /** in Mbit/sec */
        public DroneBandwidthRemaining(): number;
        /** in m3 */
        public DroneCapacityRemaining(): number;
        /** in m3 */
        public DroneCapacityUsed(): number;
        public LoadDrone(droneType: TypeInfo): void;
        public LoadDrones(droneType: TypeInfo, count: number): void;
        public totalDroneAlphaDamage(): number;
        public emDroneAlphaDamage(): number;
        public explosiveDroneAlphaDamage(): number;
        public kineticDroneAlphaDamage(): number;
        public thermalDroneAlphaDamage(): number;
        constructor(shipTypeId: number);
        constructor(hullName: string);
        public SetPilot(pilot: Pilot): void;
        public isPiloted(): boolean;
        public powergrid(): number;
        public powergridString(): string;
        public cpu(): number;
        public remainingCpu(): number;
        public remainingPowergrid(): number;
        public cpuString(): string;
        public shieldHP(): number;
        public armorHP(): number;
        public structureHP(): number;
        public totalHP(): number;
        public ShieldEMDamageReduction(): number;
        public ShieldExplosiveDamageReduction(): number;
        public ShieldKineticDamageReduction(): number;
        public ShieldThermalDamageReduction(): number;
        private ShieldSpecificDamageReduction(damageTypeName);
        public ArmorEMDamageReduction(): number;
        public ArmorExplosiveDamageReduction(): number;
        public ArmorKineticDamageReduction(): number;
        public ArmorThermalDamageReduction(): number;
        private ArmorSpecificDamageReduction(damageTypeName);
        public HullEMDamageReduction(): number;
        public HullExplosiveDamageReduction(): number;
        public HullKineticDamageReduction(): number;
        public HullThermalDamageReduction(): number;
        public MaxVelocity(): number;
        private multiplyPercentages(startValue, percentages, closerToZeroIsMostSignificant?);
        private SortArrayByAscendingAbsoluteValue(theArray);
        private SortArrayByDescendingAbsoluteValue(theArray);
        public emDamageMultiplier(attackingModule: InventoryTypeAttributes, charge: InventoryTypeAttributes): number;
        public explosiveDamageMultiplier(attackingModule: InventoryTypeAttributes, charge: InventoryTypeAttributes): number;
        public kineticDamageMultiplier(attackingModule: InventoryTypeAttributes, charge: InventoryTypeAttributes): number;
        public thermalDamageMultiplier(attackingModule: InventoryTypeAttributes, charge: InventoryTypeAttributes): number;
        public totalAlphaDamageActual(): number;
    }
}
