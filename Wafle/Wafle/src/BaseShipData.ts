///<reference path="../_references.ts"/>

 module Wafle {

    export class BaseShipData {
        public typeId: number;
        public groupId: number;
        public marketGroupId: number;
        public parentMarketGroupId: number;
        public metaLevel: number;
        public hullName: string;
        public techLevel: number;
        public race: Wafle.RaceType = Wafle.RaceType.Unknown;
        public cpuOutput: number;
        public powergridOutput: number;
        public structureHP: number;
        public armorHP: number;
        public shieldHP: number;
        /** in m3 */
        public droneBayCapacity: number;
        /** in Mbit/sec */
        public droneBandwidth: number;
        /** in m3 */
        public cargoHoldCapacity: number;

        public hullResists: Wafle.ResistSet = null;
        public armorResists: Wafle.ResistSet = null;
        public shieldResists: Wafle.ResistSet = null;

        public lowSlotCount: number;
        public midSlotCount: number;
        public highSlotCount: number;
        public rigSlotCount: number;
        public rigSize: Wafle.RigSize = Wafle.RigSize.Unknown;
        public calibration: number;
        public turretCount: number;
        public launcherCount: number;
        public maxVelocity: number;

        public slotCount() {
            return this.highSlotCount + this.midSlotCount + this.lowSlotCount + this.rigSlotCount;
        }

        constructor(hullName: string);
        constructor(groupId: number, typeId: number);
        constructor(typeInfo: Wafle.TypeInfo);
        constructor(param1?: any, param2: number= -1) {

            var _groupId: number, _typeId: number, _hullname: string;
            if (param1 === null) {
                throw "BaseShipData does not accept a null parameter.";
            }
            if (param2 === -1 && !(param1.typeId)) {
                //we are searching for a ship by name.
                _hullname = param1;

                var typeInfo: Wafle.TypeInfo = Wafle.TypeInfo.TypeInfoByName(_hullname);
                if (typeInfo === null) {
                    throw 'Could not find ship with name "' + _hullname + '".';
                }
                _groupId = typeInfo.groupId;
                _typeId = typeInfo.typeId;
            } else {
                if (param1.typeId) {
                    _groupId = (<Wafle.TypeInfo>param1).groupId;
                    _typeId = (<Wafle.TypeInfo>param1).typeId;
                } else {
                    _groupId = param1;
                    _typeId = param2;
                }
            }

            var data: Wafle.IEveInventoryTypeAttributes = Wafle.TypeInfo.GetTypeAttributes(_typeId, _groupId);

            if (data === null) {
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
    }
}