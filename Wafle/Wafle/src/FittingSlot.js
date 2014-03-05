define(["require", "exports", "../wafle"], function(require, exports, Wafle) {
    var FittingSlot = (function () {
        function FittingSlot(slotType, ship) {
            this.slotType = slotType;
            this.ship = ship;
            this.loadedCharge = null;
            this.baseShipEquipmentData = null;
        }
        FittingSlot.prototype.cpuUsage = function () {
            if (this.baseShipEquipmentData) {
                return this.baseShipEquipmentData.cpuUsageActual(this.ship);
            } else {
                return 0;
            }
        };
        FittingSlot.prototype.powergridUsage = function () {
            if (this.baseShipEquipmentData) {
                return this.baseShipEquipmentData.powergridUsageActual(this.ship);
            } else {
                return 0;
            }
        };

        FittingSlot.prototype.SetModule = function (typeId, groupId) {
            var calcGroupId;
            if (groupId) {
                calcGroupId = groupId;
            } else {
                calcGroupId = Wafle.Data.TypeToGroupIDMapping[typeId.toString()]; //todo: refactor to use TypeInfo
            }

            if (!calcGroupId) {
                throw "typeId " + typeId.toString() + ' is not a member of a known inventory group.';
            }

            //bug: this seems to break an existing module regardless of if the new module is valid.
            this.baseShipEquipmentData = new Wafle.BaseShipEquipmentData(calcGroupId, typeId);
            if (this.baseShipEquipmentData) {
                if (this.baseShipEquipmentData.slotUsed !== this.slotType) {
                    var errorMessage = "Module " + this.baseShipEquipmentData.name + ' only fits in a ' + Wafle.FittingSlotType[this.baseShipEquipmentData.slotUsed] + ' slot.';
                    this.baseShipEquipmentData = null;
                    throw errorMessage;
                }
            }
        };

        FittingSlot.prototype.LoadedCharge = function () {
            return this.loadedCharge;
        };

        FittingSlot.prototype.LoadCharge = function (type) {
            if (!Wafle.Data.IsLoadableCharge(type)) {
                throw "Type " + type.typeId + " in group " + type.groupId + " is not a loadable charge.";
            }
            var charge = new Wafle.BaseShipEquipmentData(type);
            if (charge.launcherGroup !== this.baseShipEquipmentData.groupId) {
                throw "Type " + type.typeId + " is not compatible with a launcher of type " + this.baseShipEquipmentData.name + ".";
            }
            this.loadedCharge = charge;
        };

        FittingSlot.prototype.totalAlphaDamage = function () {
            if (this.baseShipEquipmentData) {
                return this.baseShipEquipmentData.totalAlphaDamageActual(this.ship, this.loadedCharge);
            } else {
                return 0;
            }
        };
        return FittingSlot;
    })();

    
    return FittingSlot;
});
//# sourceMappingURL=FittingSlot.js.map
