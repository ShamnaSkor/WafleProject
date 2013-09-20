module Wafle {
    export interface IEveInventoryGroupMap {
        [groupId: string]: IEveInventoryType;
    }

    export interface IEveInventoryType {
        [typeId: string]: IEveInventoryTypeAttributes;
    }

    export interface ITypeInfo {
        typeId: number;
        groupId?: number;
    }

    export interface IEveInventoryTypeAttributes extends IArmorResist, IShieldResist, IHullResist, IRig, IBaseSpeedMod,
            IArmorPlate, IArmorPercent, IResistBonus, IProjected, IPropulsion, IAgilityMod, INanofiber, IPeriodic,
            ITurret, ICapacitorUser, IAmmo, IDamage, IEnergyDestabilizer, IEnergyVampire, ISignatureRadius, IShieldHP {
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
        lg?: Wafle.InventoryGroups;
        /** Tracking Speed modifier as fraction of base (example: 1.2 means 20% faster tracking than normal) */
        tsm?: number;
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
        rgsz?: Wafle.RigSize;
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
        //todo: add description
        rof?: number;
    }

    export interface ITurret  {
        //todo: add description
        trk?: number;
        dmg?: number;
    }



    export interface ILauncher {
        //todo: refactor into the main interface type.
    }
    
    export interface IProjected{
        //todo: add description
        opt?: number;
        acc?: number;
    }
    export interface IPropulsion {
        //todo: add description
        spd?: number;
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


}
