import Wafle = require("../wafle");
declare class FittingSlot {
    public slotType: Wafle.FittingSlotType;
    public ship: Wafle.Ship;
    private loadedCharge;
    public baseShipEquipmentData: Wafle.InventoryTypeAttributes;
    public cpuUsage(): number;
    public powergridUsage(): number;
    constructor(slotType: Wafle.FittingSlotType, ship: Wafle.Ship);
    public SetModule(typeId: number, groupId?: number): void;
    public LoadedCharge(): Wafle.InventoryTypeAttributes;
    public LoadCharge(type: Wafle.TypeInfo): void;
    public totalAlphaDamage(): number;
}
export = FittingSlot;
