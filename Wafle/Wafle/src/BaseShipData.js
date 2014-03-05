define(["require", "exports", "../wafle"], function(require, exports, Wafle) {
    var BaseShipData = (function () {
        function BaseShipData(param1, param2) {
            if (typeof param2 === "undefined") { param2 = -1; }
            this.race = 0 /* Unknown */;
            this.hullResists = null;
            this.armorResists = null;
            this.shieldResists = null;
            this.rigSize = 0 /* Unknown */;
            var _groupId, _typeId, _hullname;
            if (param1 === null) {
                throw "BaseShipData does not accept a null parameter.";
            }
            if (param2 === -1 && !(param1.typeId)) {
                //we are searching for a ship by name.
                _hullname = param1;

                var typeInfo = Wafle.FindTypeByName(_hullname);
                if (typeInfo === null) {
                    throw 'Could not find ship with name "' + _hullname + '".';
                }
                _groupId = typeInfo.groupId;
                _typeId = typeInfo.typeId;
            } else {
                if (param1.typeId) {
                    _groupId = param1.groupId;
                    _typeId = param1.typeId;
                } else {
                    _groupId = param1;
                    _typeId = param2;
                }
            }

            try  {
                var data = Wafle.Data.Types[_groupId.toString()][_typeId.toString()];
            } catch (ex) {
                throw "Ship not found with typeId " + _typeId.toString() + ", groupId " + _groupId.toString() + ".";
            }

            this.typeId = _typeId;
            this.groupId = _groupId;
            this.marketGroupId = data.mg;
            this.parentMarketGroupId = data.pmg;
            this.metaLevel = data.mta;
            this.techLevel = data.tl;
            this.hullName = data.n;
            this.race = data.r;
            this.cpuOutput = data.cpuo;
            this.powergridOutput = data.pgo;
            this.structureHP = data.shhp;
            this.armorHP = data.sahp;
            this.shieldHP = data.sshp;
            this.hullResists = new Wafle.ResistSet(data.hemr, data.hexr, data.hkir, data.hthr, false);
            this.armorResists = new Wafle.ResistSet(data.aemr, data.aexr, data.akir, data.athr, false);
            this.shieldResists = new Wafle.ResistSet(data.semr, data.sexr, data.skir, data.sthr, false);

            this.lowSlotCount = data.lsc;
            this.midSlotCount = data.msc;
            this.highSlotCount = data.hsc;
            this.rigSlotCount = data.rsc;
            this.rigSize = data.rgsz;
            this.calibration = data.calb;
            this.turretCount = data.tusc;
            this.launcherCount = data.lasc;
            this.maxVelocity = data.vel;
            this.droneBayCapacity = data.dc;
            this.droneBandwidth = data.db;
            this.cargoHoldCapacity = data.c;
        }
        BaseShipData.prototype.slotCount = function () {
            return this.highSlotCount + this.midSlotCount + this.lowSlotCount + this.rigSlotCount;
        };
        return BaseShipData;
    })();

    
    return BaseShipData;
});
//# sourceMappingURL=BaseShipData.js.map
