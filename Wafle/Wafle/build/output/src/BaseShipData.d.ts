/// <reference path="../_references.d.ts" />
declare module Wafle {
    class BaseShipData {
        public typeId: number;
        public groupId: number;
        public marketGroupId: number;
        public parentMarketGroupId: number;
        public metaLevel: number;
        public hullName: string;
        public techLevel: number;
        public race: RaceType;
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
        public hullResists: ResistSet;
        public armorResists: ResistSet;
        public shieldResists: ResistSet;
        public lowSlotCount: number;
        public midSlotCount: number;
        public highSlotCount: number;
        public rigSlotCount: number;
        public rigSize: RigSize;
        public calibration: number;
        public turretCount: number;
        public launcherCount: number;
        public maxVelocity: number;
        public slotCount(): number;
        constructor(hullName: string);
        constructor(groupId: number, typeId: number);
        constructor(typeInfo: TypeInfo);
    }
}
