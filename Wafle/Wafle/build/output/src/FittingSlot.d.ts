/// <reference path="../_references.d.ts" />
declare module Wafle {
    class FittingSlot {
        public slotType: FittingSlotType;
        public ship: Ship;
        private loadedCharge;
        public baseShipEquipmentData: InventoryTypeAttributes;
        public cpuUsage(): number;
        public powergridUsage(): number;
        constructor(slotType: FittingSlotType, ship: Ship);
        public SetModule(typeId: number, groupId?: number): void;
        public LoadedCharge(): InventoryTypeAttributes;
        public LoadCharge(type: TypeInfo): void;
        public totalAlphaDamage(): number;
    }
}
