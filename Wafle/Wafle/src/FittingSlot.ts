import Wafle = require("../wafle");

class FittingSlot {
    private loadedCharge: Wafle.InventoryTypeAttributes = null;
    public baseShipEquipmentData: Wafle.InventoryTypeAttributes = null;
    public cpuUsage(): number {
        if (this.baseShipEquipmentData) {
            return this.baseShipEquipmentData.cpuUsageActual(this.ship);
        } else {
            return 0;
        }
    }
    public powergridUsage(): number {
        if (this.baseShipEquipmentData) {
            return this.baseShipEquipmentData.powergridUsageActual(this.ship);
        } else {
            return 0;
        }
    }


    constructor(public slotType: Wafle.FittingSlotType, public ship: Wafle.Ship) {
    }


    public SetModule(typeId: number, groupId?: number) {

        var calcGroupId: number;
        if (groupId) {
            calcGroupId = groupId;
        } else {
            var ti = Wafle.TypeInfo.TypeInfoByTypeId(typeId); 
            if (ti) {
                calcGroupId = ti.groupId;
            } else {
                calcGroupId = -1;
            }
        }

        if (calcGroupId === -1) {
            throw "typeId " + typeId.toString() + ' is not a member of a known inventory group.';
        }

        //bug: this seems to break an existing module regardless of if the new module is valid.
        this.baseShipEquipmentData = new Wafle.InventoryTypeAttributes(calcGroupId, typeId);
        if (this.baseShipEquipmentData) {
            if (this.baseShipEquipmentData.slotUsed !== this.slotType) {
                var errorMessage = "Module " + this.baseShipEquipmentData.name + ' only fits in a ' + Wafle.FittingSlotType[this.baseShipEquipmentData.slotUsed] + ' slot.';
                this.baseShipEquipmentData = null;
                throw errorMessage;
            }
        }
    }

    public LoadedCharge() {
        return this.loadedCharge;
    }

    public LoadCharge(type: Wafle.TypeInfo) {
        if (!Wafle.Data.IsLoadableCharge(type)) {
            throw "Type " + type.typeId + " in group " + type.groupId + " is not a loadable charge.";
        }
        var charge = new Wafle.InventoryTypeAttributes(type);
        if (charge.launcherGroup !== this.baseShipEquipmentData.groupId) {
            throw "Type " + type.typeId + " is not compatible with a launcher of type " + this.baseShipEquipmentData.name + ".";
        }
        this.loadedCharge = charge;
    }

    public totalAlphaDamage(): number {
        if (this.baseShipEquipmentData) {
            return this.baseShipEquipmentData.totalAlphaDamageActual(this.ship, this.loadedCharge);
        } else {
            return 0;
        }
    }
}

export = FittingSlot;