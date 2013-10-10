declare module Wafle {
    interface IEveInventoryGroupMap {
        [groupId: string]: IEveInventoryType;
    }
    interface IEveInventoryType {
        [typeId: string]: IEveInventoryTypeAttributes;
    }
    interface ITypeInfo {
        typeId: number;
        groupId?: number;
    }
    interface IEveInventoryTypeAttributes extends IArmorResist, IShieldResist, IHullResist, IRig, IBaseSpeedMod, IArmorPlate, IArmorPercent, IResistBonus, IProjected, IPropulsion, IAgilityMod, INanofiber, IPeriodic, IPowerModule, ITurretModifier, ICapacitorUser, IAmmo, IDamage, IEnergyDestabilizer, IEnergyVampire, ISignatureRadius, IShieldHP, IMissileModifier, IDroneSupport, IDrone, IContainer {
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
        r?: Wafle.RaceType;
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
    interface IDroneSupport {
        /** Drone bay capacity in m3 */
        dc?: number;
        /** Drone bandwidth in Mbit/sec */
        db?: number;
    }
    interface IDrone {
        /** Drone bandwidth used */
        dbu?: number;
    }
    interface IContainer {
        /** Capacity in m3 */
        c?: number;
    }
    interface IDamage {
        /** EM damage in HP */
        emd?: number;
        /** Explosive damage in HP */
        exd?: number;
        /** Kinetic damage in HP */
        kid?: number;
        /** Thermal damage in HP */
        thd?: number;
    }
    interface ISignatureRadius {
        /** Signature Radius add amount - flat in meters (2 = 2 meters of additional signature radius) */
        sra?: number;
    }
    interface IShieldHP {
        /** Shield HP increase - flat in HP (100 = 100 additional HP) */
        shp?: number;
    }
    interface IAmmo {
        /** Weapons Range Modifier as fraction of base range (example: 0.5 means the range is half of normal) */
        wrm?: number;
        /** Charge size: 1=small, 2=medium, 3=large, etc... */
        cs?: number;
        /** Launcher Group (Group ID number of compatible Launchers) */
        lg?: Wafle.InventoryGroups;
        /** Tracking Speed modifier as fraction of base (example: 1.2 means 20% faster tracking than normal) */
        tsm?: number;
    }
    interface IBallisticEnhancement {
        /** Missile damage multiplier - 1.1 = 10% increased damage. */
        midm?: number;
    }
    interface IResistBonus {
        /** EM Damage resist bonus - measured as whole percentage of reduction in damage taken (example: value of -10 means 10% less damage taken)) */
        emdrb?: number;
        /** Explosive Damage resist bonus - measured as whole percentage of reduction in damage taken (example: value of -10 means 10% less damage taken)) */
        exdrb?: number;
        /** Kinetic Damage resist bonus - measured as whole percentage of reduction in damage taken (example: value of -10 means 10% less damage taken)) */
        kidrb?: number;
        /** Thermal Damage resist bonus - measured as whole percentage of reduction in damage taken (example: value of -10 means 10% less damage taken)) */
        thdrb?: number;
    }
    interface IArmorResist {
        /** armor EM resistance measured as percent of damage taken (example: value of 0.9 = 90% damage taken (10% resistance)). */
        aemr?: number;
        /** armor explosive resistance measured as percent of damage taken (example: value of 0.9 = 90% damage taken (10% resistance)). */
        aexr?: number;
        /** armor kinetic resistance measured as percent of damage taken (example: value of 0.9 = 90% damage taken (10% resistance)). */
        akir?: number;
        /** armor thermal resistance measured as percent of damage taken (example: value of 0.9 = 90% damage taken (10% resistance)). */
        athr?: number;
    }
    interface IHullResist {
        /** hull EM resistance measured as percent of damage taken (example: value of 0.9 = 90% damage taken (10% resistance)). */
        hemr?: number;
        /** hull explosive resistance measured as percent of damage taken (example: value of 0.9 = 90% damage taken (10% resistance)). */
        hexr?: number;
        /** hull kinetic resistance measured as percent of damage taken (example: value of 0.9 = 90% damage taken (10% resistance)). */
        hkir?: number;
        /** hull thermal resistance measured as percent of damage taken (example: value of 0.9 = 90% damage taken (10% resistance)). */
        hthr?: number;
    }
    interface IShieldResist {
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
    interface IRig {
        /** Rig Size */
        rgsz?: Wafle.RigSize;
        /** Drawback as percentage (example: value of -10 is a 10% penalty) */
        drwbk?: number;
        /** Calibration cost of a rig */
        calbc?: number;
    }
    interface ICapacitorUser {
        /** Flat capacitor amount needed to activate the module */
        capn?: number;
    }
    interface IArmorPlate {
        /** Flat Armor HP Bonus - represented in whole numbers (20 = 20 armor HP). */
        ahp?: number;
    }
    interface IArmorPercent {
        /** Armor HP Bonus Percent - represented in whole numbers (20% bonus as 20). */
        ahpbp?: number;
    }
    interface IBaseSpeedMod {
        /** Velocity Bonus Percent - represented in whole numbers (20% bonus as 20). */
        velm?: number;
    }
    interface IPeriodic {
        /** Rate of fire - measured in ms so 5000 means fires every 5 seconds.  */
        rof?: number;
        /** Rate of fire multiplier - Rate is measured in ms between firing, so lower is faster: 0.9 would be a 10% faster rate of fire.*/
        rofm?: number;
    }
    interface ITurretModifier {
        /** Turret tracking speed modifier */
        trk?: number;
        /** Turret damage multiplier - such as 1.5 = 50% damage increase. */
        dmg?: number;
    }
    interface IMissileModifier {
        midm?: number;
    }
    interface IProjected {
        opt?: number;
        acc?: number;
    }
    interface IPropulsion {
        spd?: number;
        /** Signature Radius bonus - expressed as a whole percentage increase, such as 10 = 10% increase to signature radius */
        srb?: number;
    }
    interface IAgilityMod {
        agim?: number;
    }
    interface INanofiber {
        sshpm?: number;
    }
    interface IEnergyDestabilizer {
        /** energyDestabilizationAmount in Giga Joule - ex: 45 = 45GJ */
        eda?: number;
    }
    interface IEnergyVampire {
        /** powerTransferAmount in "not specified" units (probably GJ) - ex: 8 */
        pta?: number;
    }
    interface IPowerModule {
        /** Power grid increase (in MW) */
        pginc?: number;
    }
}
