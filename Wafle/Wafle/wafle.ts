/*

The MIT License (MIT)

Copyright (c) 2013 Shamna Skor

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

@license
*/

/* Todo:
. more rigs and other modules.
. modules that use capacitor - adjust stats for active or inactive.
. track capacitor usage of ship/cap stability
. cruisers, bc, bs, other
. align time, warp speed, other navigation concerns
. Offline Modules
. Overheating
. UI
. track calibration remaining for rigs.
*/


export import Pilot = require("./src/Pilot");
export import Skills = require("./src/Skills");
export import InventoryTypeAttributes = require("./src/InventoryTypeAttributes");
export import BaseShipData = require("./src/BaseShipData");
export import Ship = require("./src/Ship");
export import Resistance = require("./src/Resistance");
export import ResistSet = require("./src/ResistSet");
export import TypeInfo = require("./src/TypeInfo");
export import PowergridFormulas = require("./src/PowergridFormulas");
export import CpuFormulas = require("./src/CpuFormulas");
export import FittingSlot = require("./src/FittingSlot");
export import Data = require("./src/CuratedData");

export var ProjectName: string = "Wafle Project";
export var ProjectDescription: string = "Web Accessible Fitting Library for EVE";
export var Version: string = "0.1.0-alpha.7";
export var VersionDescription : string = "Alpha Release - UI construction";
export var AuthorName: string = "Shamna Skor";
export var SourceWebSite: string = "http://github.com/ShamnaSkor/WafleProject";

export enum RaceType {
    Unknown = 0, Caldari = 1, Minmatar = 2, Amarr = 4, Gallente = 8, ORE
}

export enum FittingSlotType {
    Unknown, High, Mid, Low, Rig
}

export enum RigSize {
    Unknown= 0, Small= 1, Medium= 2, Large= 3, Capital= 4
}

export enum InventoryGroups {
    Unknown = -1, Frigate = 25, ShieldExtender = 38, Propulsion = 46, WarpScrambler = 52, EnergyWeapon= 53, ProjectileWeapon= 55,
    Gyrostabilizer= 59, DamageControl= 60, ArmorRepairUnit = 62, StasisWeb= 65, EnergyVampire= 68, EnergyDestabilizer= 71,
    HybridWeapon= 74, ShieldHardener= 77, ProjectileAmmo = 83, HybridCharge= 85, FrequencyCrystal= 86,
    ArmorCoating= 98, CombatDrone= 100, HeatSink= 205, MagneticFieldStabilizer= 302, ArmorRepairProjector = 325,
    ArmorPlatingEnergized = 326, ArmorPlate = 329, AuxiliaryPowerCore= 339, BallisticControlSystem= 367,
    AdvancedAutocannonAmmo= 372, AdvancedRailgunCharge= 373, AdvancedBeamLaserCrystal= 374, AdvancedPulseLaserCrystal= 375,
    AdvancedArtilleryAmmo= 376, AdvancedBlasterCharge= 377, TargetPainter= 379, LightMissile= 384, HeavyMissile= 385, Rocket= 387,
    FoFHeavyMissile= 395, RocketLauncher= 507, LightMissileLauncher= 509, HeavyMissileLauncher= 510,
    RapidLightMissileLauncher= 511, AdvancedRocket= 648, AdvancedLightMissile= 653,
    AdvancedHeavyAssaultMissile= 654, AdvancedHeavyMissile= 655, Nanofiber= 763,
    HeavyAssaultMissileLauncher= 771, HeavyAssaultMissile= 772, ArmorRig= 773, ShieldRig= 774, NavigationRig= 782
}

export function Round(value: number, decimalPlace: number) {
    return Math.round(value * Math.pow(10, decimalPlace * -1)) * Math.pow(10, decimalPlace);
}

export function e() {
    return 2.718281828459;
}

/**
** Diminishing effectiveness ratio.  The most powerful modifier should be passed in with 0.
**  The second most powerful modifier should be passed in with 1, etc.
**/
export function dimEffRatio(zeroBasedIndex: number) {
    return Math.pow(e(), (-0.140274 * Math.pow((zeroBasedIndex), 2)));
}


//export function FindTypeByName(theName: string): TypeInfo {
//    var groupCount = Object.getOwnPropertyNames(Data.Types).length;
//    for (var groupIndex = 0; groupIndex < groupCount; groupIndex++) {
//        var groupId = Object.getOwnPropertyNames(Data.Types)[groupIndex];
//        var typeCount = Object.getOwnPropertyNames(Data.Types[groupId]).length;
//        for (var typeIndex = 0; typeIndex < typeCount; typeIndex++) {
//            var typeId = Object.getOwnPropertyNames(Data.Types[groupId])[typeIndex];
//            if (Data.Types[groupId][typeId].n === theName) {
//                return new TypeInfo(parseInt(typeId), parseInt(groupId));
//            }
//        }
//    }
//    return null;
//}




export interface ITypeInfo {
    typeId: number;
    groupId: number;
}

export interface INamedType extends ITypeInfo {
    name: string;
}

export interface IWafleTypeDataBlob {
    [index: number]: IWafleGroupDataBlob;
    length: number;
}

export interface IWafleGroupDataBlob {
    /** gid - the inventory group id number. */
    gid: number;
    /** n - the name of the inventory group. */
    n: string;
    /** gts - an array of the types in this inventory group (each element is of type IEveInventoryTypeAttributes). */
    gts: IWafleTypesArrayDataBlob;
}

export interface IWafleTypesArrayDataBlob {
    [index: number]: IEveInventoryTypeAttributes;
    length: number;
}

export interface IWafleMarketGroupDataBlob {
    [index: number]: IWafleMarketGroupDataItem;
    length: number;
}

export interface IWafleMarketGroupDataItem {
    /** Market Group ID */
    mgid: number;
    /** Name */
    n: string;
    /** Parent Market Group ID */
    pgid?: number
    /** Children */
    children?: IWafleMarketGroupDataItem[];
}

/** A property bag of attributes for an EVE inventory type */
export interface IEveInventoryTypeAttributes extends IArmorResist, IShieldResist, IHullResist, IRig, IBaseSpeedMod,
IArmorPlate, IArmorPercent, IResistBonus, IProjected, IPropulsion, IAgilityMod, INanofiber, IPeriodic, IPowerModule,
ITurretModifier, ICapacitorUser, IAmmo, IDamage, IEnergyDestabilizer, IEnergyVampire, ISignatureRadius, IShieldHP,
IMissileModifier, IDroneSupport, IDrone, IContainer {
    /** id - the type id number. */
    id: number
    /** name - the name of the type. */
    n: string;
    /** description - the description text for the type. */
    d: string;
    /** marketGroup - the market group Id number. */
    mg: number;
    /** parentMarketGroup - the parent market group Id number. */
    pmg: number;
    /** metaLevel - the relative measure of a type as compared to other types in the same category.  0 is the most basic and higher numbers are more capable. */
    mta: number;
    /** Volume in m3 */
    v: number;
    /** tech level (Tech I = 1, Tech II = 2, etc). */
    tl?: number;

    /** base cpu usage of the type (in teraflops). */
    cpu?: number;
    /** base power grid usage of the type (in megawatts). */
    pg?: number;
    /** base cpu output of the type (in teraflops). */
    cpuo?: number;
    /** base power grid output of the type (in megawatts). */
    pgo?: number;


    /** raceId */
    r?: RaceType;

    /** Ship Hull Base HP */
    shhp?: number;
    /** Ship Shield Base HP */
    sshp?: number;
    /** Ship Armor Base HP */
    sahp?: number;

    /** Count of Low-power fitting slots */
    lsc?: number;
    /** Count of Mid-power fitting slots */
    msc?: number;
    /** Count of High-power fitting slots */
    hsc?: number;

    /** Count of Launcher hardpoints */
    lasc?: number;
    /** Count of Turret hardpoints */
    tusc?: number;

    /** Count of Rig fitting slots */
    rsc?: number;

    /** Calibration amount */
    calb?: number;

    /** Velocity */
    vel?: number;

    /** Armor HP Repaired */
    ahpr?: number;

    /** Activation Duration (in ms) */
    ad?: number;

}

export interface IDroneSupport {
    /** Drone bay capacity in m3 */
    dc?: number;
    /** Drone bandwidth in Mbit/sec */
    db?: number;
}

export interface IDrone {
    /** Drone bandwidth used */
    dbu?: number;
}

export interface IContainer {
    /** Capacity in m3 */
    c?: number;
}

export interface IDamage {
    /** EM damage in HP */
    emd?: number;
    /** Explosive damage in HP */
    exd?: number;
    /** Kinetic damage in HP */
    kid?: number;
    /** Thermal damage in HP */
    thd?: number;
}

export interface ISignatureRadius {
    /** Signature Radius add amount - flat in meters (2 = 2 meters of additional signature radius) */
    sra?: number;
}

export interface IShieldHP {
    /** Shield HP increase - flat in HP (100 = 100 additional HP) */
    shp?: number;
}

export interface IAmmo {
    /** Weapons Range Modifier as fraction of base range (example: 0.5 means the range is half of normal) */
    wrm?: number;
    /** Charge size: 1=small, 2=medium, 3=large, etc... */
    cs?: number;
    /** Launcher Group (Group ID number of compatible Launchers) */
    lg?: InventoryGroups;
    /** Tracking Speed modifier as fraction of base (example: 1.2 means 20% faster tracking than normal) */
    tsm?: number;
}


export interface IBallisticEnhancement {
    /** Missile damage multiplier - 1.1 = 10% increased damage. */
    midm?: number;
}





export interface IResistBonus {
    /** EM Damage resist bonus - measured as whole percentage of reduction in damage taken (example: value of -10 means 10% less damage taken)) */
    emdrb?: number;
    /** Explosive Damage resist bonus - measured as whole percentage of reduction in damage taken (example: value of -10 means 10% less damage taken)) */
    exdrb?: number;
    /** Kinetic Damage resist bonus - measured as whole percentage of reduction in damage taken (example: value of -10 means 10% less damage taken)) */
    kidrb?: number;
    /** Thermal Damage resist bonus - measured as whole percentage of reduction in damage taken (example: value of -10 means 10% less damage taken)) */
    thdrb?: number;
}

export interface IArmorResist {
    /** armor EM resistance measured as percent of damage taken (example: value of 0.9 = 90% damage taken (10% resistance)). */
    aemr?: number;
    /** armor explosive resistance measured as percent of damage taken (example: value of 0.9 = 90% damage taken (10% resistance)). */
    aexr?: number;
    /** armor kinetic resistance measured as percent of damage taken (example: value of 0.9 = 90% damage taken (10% resistance)). */
    akir?: number;
    /** armor thermal resistance measured as percent of damage taken (example: value of 0.9 = 90% damage taken (10% resistance)). */
    athr?: number;
}

export interface IHullResist {
    /** hull EM resistance measured as percent of damage taken (example: value of 0.9 = 90% damage taken (10% resistance)). */
    hemr?: number;
    /** hull explosive resistance measured as percent of damage taken (example: value of 0.9 = 90% damage taken (10% resistance)). */
    hexr?: number;
    /** hull kinetic resistance measured as percent of damage taken (example: value of 0.9 = 90% damage taken (10% resistance)). */
    hkir?: number;
    /** hull thermal resistance measured as percent of damage taken (example: value of 0.9 = 90% damage taken (10% resistance)). */
    hthr?: number;
}

export interface IShieldResist {
    /** shield EM resistance measured as percent of damage taken (example: value of 0.9 = 90% damage taken (10% resistance)). */
    semr?: number;
    /** shield explosive resistance measured as percent of damage taken (example: value of 0.9 = 90% damage taken (10% resistance)). */
    sexr?: number;
    /** shield kinetic resistance measured as percent of damage taken (example: value of 0.9 = 90% damage taken (10% resistance)). */
    skir?: number;
    /** shield thermal resistance measured as percent of damage taken (example: value of 0.9 = 90% damage taken (10% resistance)). */
    sthr?: number;
}



/**
** A rig may or may not implement any of these properties.  Always test.
**/
export interface IRig {
    /** Rig Size */
    rgsz?: RigSize;
    /** Drawback as percentage (example: value of -10 is a 10% penalty) */
    drwbk?: number;
    /** Calibration cost of a rig */
    calbc?: number;

}

export interface ICapacitorUser {
    /** Flat capacitor amount needed to activate the module */
    capn?: number;
}

export interface IArmorPlate {
    /** Flat Armor HP Bonus - represented in whole numbers (20 = 20 armor HP). */
    ahp?: number;
}
export interface IArmorPercent {
    /** Armor HP Bonus Percent - represented in whole numbers (20% bonus as 20). */
    ahpbp?: number;
}
export interface IBaseSpeedMod {
    /** Velocity Bonus Percent - represented in whole numbers (20% bonus as 20). */
    velm?: number;
}

export interface IPeriodic {
    /** Rate of fire - measured in ms so 5000 means fires every 5 seconds.  */
    rof?: number;
    /** Rate of fire multiplier - Rate is measured in ms between firing, so lower is faster: 0.9 would be a 10% faster rate of fire.*/
    rofm?: number;
}

export interface ITurretModifier {
    /** Turret tracking speed modifier */
    trk?: number;
    /** Turret damage multiplier - such as 1.5 = 50% damage increase. */
    dmg?: number;
}

export interface IMissileModifier {
    midm?: number;

}

export interface IProjected {
    //todo: add description
    opt?: number;
    acc?: number;
}
export interface IPropulsion {
    //todo: add description
    spd?: number;
    /** Signature Radius bonus - expressed as a whole percentage increase, such as 10 = 10% increase to signature radius */
    srb?: number;
}
export interface IAgilityMod {
    //todo: add description
    agim?: number;
}

export interface INanofiber {
    //todo: add description
    sshpm?: number;
}

export interface IEnergyDestabilizer {
    /** energyDestabilizationAmount in Giga Joule - ex: 45 = 45GJ */
    eda?: number;
}

export interface IEnergyVampire {
    /** powerTransferAmount in "not specified" units (probably GJ) - ex: 8 */
    pta?: number;
}

export interface IPowerModule {
    /** Power grid increase (in MW) */
    pginc?: number;
}






//shim for getOwnPropertyNames (not supported in EVE IGB as of Odyssey 1.1) http://stackoverflow.com/questions/8240802/is-it-possible-to-simulated-object-getownpropertynames-in-ie8
if (typeof Object.getOwnPropertyNames !== "function") {
    Object.getOwnPropertyNames = function (obj) {
        var keys = [];

        // Only iterate the keys if we were given an object, and
        // a special check for null, as typeof null == "object"
        if (typeof obj === "object" && obj !== null) {
            // Use a standard for in loop
            for (var x in obj) {
                // A for in will iterate over members on the prototype
                // chain as well, but Object.getOwnPropertyNames returns
                // only those directly on the object, so use hasOwnProperty.
                if (obj.hasOwnProperty(x)) {
                    keys.push(x);
                }
            }
        }

        return keys;
    }
}

