/// <reference path="../_references.d.ts" />
declare module Wafle {
    class InventoryTypeAttributes {
        public groupId: number;
        public typeId: number;
        public isActive: boolean;
        public name: string;
        public techLevel: number;
        public description: string;
        public race: RaceType;
        /** volume of the item in m3 */
        public volume: number;
        public accuracyFalloff: number;
        public trackingSpeed: number;
        public cpuUsage: number;
        public rateOfFire: number;
        /** Rate of fire multiplier - Rate is measured in ms between firing, so lower is faster: 0.9 would be a 10% faster rate of fire.*/
        public rateOfFireMultiplier: number;
        public powergridUsage: number;
        /** Base powergrid increase amount (for modules that create powergrid capacity) in MW, such as 12 = 12 MW powergrid increase.*/
        public powerGridIncrease: number;
        public optimalRange: number;
        public metaLevel: number;
        public damageMultiplier: number;
        public missileDamageMultiplier: number;
        public marketGroup: number;
        public parentMarketGroup: number;
        public speedFactor: number;
        /** Signature Radius bonus - expressed as a whole percentage increase, such as 10 = 10% increase to signature radius */
        public signatureRadiusBonus: number;
        /** Signature Radius bonus (of target) - expressed as a whole percentage increase, such as 10 = 10% increase to signature radius of a targeted ship */
        public signatureRadiusBonusOfTarget: number;
        /** Signature Radius Add - represented in meters (10 = 10 additional meters) */
        public signatureRadiusAdd: number;
        /** Shield HP added - represented as a flat addition (10 = 10 additional HP) */
        public shieldHPBonusAdd: number;
        /** Armor HP added - represented as a flat addition (10 = 10 additional HP) */
        public armorHPBonusAdd: number;
        /** Armor HP Bonus Percent - represented in whole numbers (20% bonus as 20). */
        public armorHPBonusPercent: (ship: Ship) => number;
        /** Shield HP Bonus Percent - represented in whole numbers (20% bonus as 20). */
        public shieldHPBonusPercent: (ship: Ship) => number;
        public slotUsed: FittingSlotType;
        public cpuUsageActual: (ship: Ship) => number;
        public powergridUsageActual: (ship: Ship) => number;
        public hullResists: ResistSet;
        public armorResists: ResistSet;
        public shieldResists: ResistSet;
        public shipHullHPMultiplier: number;
        public agilityMultiplier: number;
        /** Base Velocity Multiplier - As defined on the module with no skills applied - percentage represented in whole numbers (20% bonus as 20). */
        public baseVelocityMultiplier: number;
        /** Actual Velocity Multiplier - considers the pilot and ship - percentage represented in whole numbers (20% bonus as 20). */
        public actualVelocityMultiplier: (ship: Ship) => number;
        /** Drawback if this is a rig */
        public drawback: number;
        /** Module activation duration in ms */
        public activationDuration: number;
        /** Armor repair amount in HP */
        public armorHPRepaired: number;
        /** Flat capacitor amount needed to activate the module */
        public capacitorNeed: number;
        /** powerTransferAmount in "not specified" units (probably GJ) - ex: 8 */
        public powerTransferAmount: number;
        /** energyDestabilizationAmount in Giga Joule - ex: 45 = 45GJ */
        public energyDestabilizationAmount: number;
        /** drone bandwidth used in Mbits/sec ex: 5 = 5 Mbits/sec */
        public droneBandwidthUsed: number;
        /** total alpha damage of all types at optimal including ship bonuses, pilot skill, and ammunition used. */
        public totalAlphaDamageActual(ship: Ship, charge: InventoryTypeAttributes): number;
        public emAlphaDamageActual: (ship: Ship, charge: InventoryTypeAttributes) => number;
        public explosiveAlphaDamageActual: (ship: Ship, charge: InventoryTypeAttributes) => number;
        public kineticAlphaDamageActual: (ship: Ship, charge: InventoryTypeAttributes) => number;
        public thermalAlphaDamageActual: (ship: Ship, charge: InventoryTypeAttributes) => number;
        /** EM damage in HP */
        public emBaseDamage: number;
        /** Explosive damage in HP */
        public explosiveBaseDamage: number;
        /** Kinetic damage in HP */
        public kineticBaseDamage: number;
        /** Thermal damage in HP */
        public thermalBaseDamage: number;
        /** Weapons Range Modifier as fraction of base range (example: 0.5 means the range is half of normal) */
        public weaponsRangeModifier: number;
        /** Charge size: 1=small, 2=medium, 3=large, etc... */
        public chargeSize: number;
        /** Launcher Group (Group ID number of compatible Launchers) */
        public launcherGroup: number;
        /** Tracking Speed modifier as fraction of base (example: 1.2 means 20% faster tracking than normal) */
        public trackingSpeedModifier: number;
        constructor(typeInfo: TypeInfo);
        constructor(groupId: number, typeId: number);
        public Activate(): void;
        public Deactivate(): void;
        public typeInfo(): TypeInfo;
        public damageMultiplierForModule(theAttackingModule: InventoryTypeAttributes): number;
    }
}
