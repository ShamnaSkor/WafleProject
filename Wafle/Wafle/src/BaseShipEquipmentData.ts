import Wafle = require("../wafle");

//todo: rename to InventoryTypeData during the refactoring initiative.
class BaseShipEquipmentData {
    public groupId: number;
    public typeId: number;
    public isActive: boolean = false;  //try to move this out into an actualized inventoryItem class that uses BaseTypeData as a "has a".  Also need to support "canActivate" to distinguish passive modules, etc.  Quite a bit of refactoring required here.
    public name: string = '';
    public techLevel: number = 1;
    public description: string = '';
    public race: Wafle.RaceType = Wafle.RaceType.Unknown;
    /** volume of the item in m3 */
    public volume: number = 0;
    public accuracyFalloff: number = 0;
    public trackingSpeed: number = 0;
    public cpuUsage: number = 0;
    public rateOfFire: number = 0;
    /** Rate of fire multiplier - Rate is measured in ms between firing, so lower is faster: 0.9 would be a 10% faster rate of fire.*/
    public rateOfFireMultiplier: number = 0;
    public powergridUsage: number = 0;
    /** Base powergrid increase amount (for modules that create powergrid capacity) in MW, such as 12 = 12 MW powergrid increase.*/
    public powerGridIncrease: number = 0;
    public optimalRange: number = 0;
    public metaLevel: number = 0;
    public damageMultiplier: number = 1;
    public missileDamageMultiplier: number = 1;
    public marketGroup: number = 0;
    public parentMarketGroup: number = 0;
    public speedFactor: number = 0;
    /** Signature Radius bonus - expressed as a whole percentage increase, such as 10 = 10% increase to signature radius */
    public signatureRadiusBonus: number = 0;
    /** Signature Radius bonus (of target) - expressed as a whole percentage increase, such as 10 = 10% increase to signature radius of a targeted ship */
    public signatureRadiusBonusOfTarget: number = 0;
    /** Signature Radius Add - represented in meters (10 = 10 additional meters) */
    public signatureRadiusAdd: number = 0;
    /** Shield HP added - represented as a flat addition (10 = 10 additional HP) */
    public shieldHPBonusAdd: number = 0;
    /** Armor HP added - represented as a flat addition (10 = 10 additional HP) */
    public armorHPBonusAdd: number = 0;
    /** Armor HP Bonus Percent - represented in whole numbers (20% bonus as 20). */
    public armorHPBonusPercent: (ship: Wafle.Ship) => number; //todo: refactor to eliminate requirement to pass ship to the module on the ship.
    /** Shield HP Bonus Percent - represented in whole numbers (20% bonus as 20). */
    public shieldHPBonusPercent: (ship: Wafle.Ship) => number; //todo: refactor to eliminate requirement to pass ship to the module on the ship.
    public slotUsed: Wafle.FittingSlotType = Wafle.FittingSlotType.Unknown;
    public cpuUsageActual: (ship: Wafle.Ship) => number;
    public powergridUsageActual: (ship: Wafle.Ship) => number;
    public hullResists: Wafle.ResistSet = null;
    public armorResists: Wafle.ResistSet = null;
    public shieldResists: Wafle.ResistSet = null;
    public shipHullHPMultiplier: number = 0;
    public agilityMultiplier: number = 0;
    /** Base Velocity Multiplier - As defined on the module with no skills applied - percentage represented in whole numbers (20% bonus as 20). */
    public baseVelocityMultiplier: number = 0;
    /** Actual Velocity Multiplier - considers the pilot and ship - percentage represented in whole numbers (20% bonus as 20). */
    public actualVelocityMultiplier: (ship: Wafle.Ship) => number;
    /** Drawback if this is a rig */
    public drawback: number = 0;
    /** Module activation duration in ms */
    public activationDuration: number = 0;
    /** Armor repair amount in HP */
    public armorHPRepaired: number = 0;
    /** Flat capacitor amount needed to activate the module */
    public capacitorNeed: number = 0;
    /** powerTransferAmount in "not specified" units (probably GJ) - ex: 8 */
    public powerTransferAmount: number = 0;
    /** energyDestabilizationAmount in Giga Joule - ex: 45 = 45GJ */
    public energyDestabilizationAmount: number = 0;
    /** drone bandwidth used in Mbits/sec ex: 5 = 5 Mbits/sec */
    public droneBandwidthUsed: number = 0;

    /** total alpha damage of all types at optimal including ship bonuses, pilot skill, and ammunition used. */
    public totalAlphaDamageActual(ship: Wafle.Ship, charge: BaseShipEquipmentData): number {
        var total = 0;
        if (this.emAlphaDamageActual) {
            total += this.emAlphaDamageActual(ship, charge)
            }
        if (this.explosiveAlphaDamageActual) {
            total += this.explosiveAlphaDamageActual(ship, charge)
            }
        if (this.kineticAlphaDamageActual) {
            total += this.kineticAlphaDamageActual(ship, charge)
            }
        if (this.thermalAlphaDamageActual) {
            total += this.thermalAlphaDamageActual(ship, charge)
            }
        return total;
    }
    public emAlphaDamageActual: (ship: Wafle.Ship, charge: BaseShipEquipmentData) => number;
    public explosiveAlphaDamageActual: (ship: Wafle.Ship, charge: BaseShipEquipmentData) => number;
    public kineticAlphaDamageActual: (ship: Wafle.Ship, charge: BaseShipEquipmentData) => number;
    public thermalAlphaDamageActual: (ship: Wafle.Ship, charge: BaseShipEquipmentData) => number;
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



    constructor(typeInfo: Wafle.TypeInfo)
    constructor(groupId: number, typeId: number)
    constructor(p1: any, p2?: any) {
    if (p1.typeId) {
        if (!<Wafle.TypeInfo>p1.groupId) {
            <Wafle.TypeInfo>p1.FindGroupId();
        }
        this.typeId = (<Wafle.TypeInfo>p1).typeId;
        this.groupId = (<Wafle.TypeInfo>p1).groupId;
    } else {
        this.typeId = p2;
        this.groupId = p1;
    }

    if (Wafle.TypeInfo.groupIndex(this.groupId)===-1) {
        throw "groupId " + this.groupId.toString() + " is not known.";
    }

    var data: Wafle.IEveInventoryTypeAttributes = Wafle.TypeInfo.GetTypeAttributes(this.typeId, this.groupId);
    if (!data) {
        throw "typeId " + this.typeId.toString() + " in groupId " + this.groupId.toString() + " is not known.";
    }

    ShipEquipmentLoader(data, this);

    switch (this.groupId) {
        case Wafle.InventoryGroups.ProjectileWeapon: //fall through
        case Wafle.InventoryGroups.HybridWeapon: //fall through
        case Wafle.InventoryGroups.EnergyWeapon:
            TurretLoader(data, this);
            break;
        case Wafle.InventoryGroups.HybridCharge: //fall through
        case Wafle.InventoryGroups.FrequencyCrystal: //fall through
        case Wafle.InventoryGroups.AdvancedRailgunCharge: //fall through
        case Wafle.InventoryGroups.AdvancedBlasterCharge: //fall through
        case Wafle.InventoryGroups.AdvancedBeamLaserCrystal: //fall through
        case Wafle.InventoryGroups.AdvancedPulseLaserCrystal: //fall through
        case Wafle.InventoryGroups.AdvancedArtilleryAmmo: //fall through
        case Wafle.InventoryGroups.ProjectileAmmo: //fall through
        case Wafle.InventoryGroups.Rocket: //fall through
        case Wafle.InventoryGroups.AdvancedRocket: //fall through
        case Wafle.InventoryGroups.LightMissile:  //fall through
        case Wafle.InventoryGroups.AdvancedLightMissile:
            ChargeLoader(data, this);
            break;
        case Wafle.InventoryGroups.RocketLauncher: //fall through
        case Wafle.InventoryGroups.LightMissileLauncher: //fall through
        case Wafle.InventoryGroups.HeavyAssaultMissileLauncher: //fall through
        case Wafle.InventoryGroups.HeavyMissileLauncher: // fall through
            LauncherLoader(data, this);
            break;
        case Wafle.InventoryGroups.StasisWeb: // fall through
        case Wafle.InventoryGroups.TargetPainter:
            MidProjectedEffectLoader(data, this);
            break;
        case Wafle.InventoryGroups.Propulsion:
            PropulsionLoader(data, this);
            break;
        case Wafle.InventoryGroups.ShieldExtender:
            ShieldExtenderLoader(data, this);
            break;
        case Wafle.InventoryGroups.WarpScrambler:
            MidProjectedEffectLoader(data, this);
            break;
        case Wafle.InventoryGroups.ArmorPlate: //fall through
        case Wafle.InventoryGroups.ArmorCoating:
            ArmorPlateAndCoatingLoader(data, this);
            break;
        case Wafle.InventoryGroups.Nanofiber:
            NanofiberLoader(data, this);
            break;
        case Wafle.InventoryGroups.EnergyDestabilizer: //fall through
        case Wafle.InventoryGroups.EnergyVampire:
            NosNeutLoader(data, this);
            break;
        case Wafle.InventoryGroups.ArmorRig: //fall through
        case Wafle.InventoryGroups.ShieldRig: //fall through
        case Wafle.InventoryGroups.NavigationRig:
            RigLoader(data, this);
            break;
        case Wafle.InventoryGroups.DamageControl:
            DamageControlLoader(data, this);
            break;
        case Wafle.InventoryGroups.AuxiliaryPowerCore:
            PowerModuleLoader(data, this);
        case Wafle.InventoryGroups.BallisticControlSystem: //fall through
        case Wafle.InventoryGroups.Gyrostabilizer: //fall through
        case Wafle.InventoryGroups.HeatSink: //fall through
        case Wafle.InventoryGroups.MagneticFieldStabilizer:
            LowWeaponEnhancementLoader(data, this);
        case Wafle.InventoryGroups.CombatDrone:
            DroneLoader(data, this);
        default:
            break;
        }
    }

    public Activate(): void {
        this.isActive = true;
    }
    public Deactivate(): void {
        this.isActive = false;
    }

    public typeInfo(): Wafle.TypeInfo {
        return new Wafle.TypeInfo(this.typeId, this.groupId);
    }

    public damageMultiplierForModule(theAttackingModule: BaseShipEquipmentData): number {
        if (this.damageMultiplier == 0 && this.missileDamageMultiplier == 0) {
            return 1;
        }

        var ti = theAttackingModule.typeInfo();
        if (Wafle.Data.IsLauncher(ti)) {
            return this.missileDamageMultiplier;
        } else if (ti.groupId == Wafle.InventoryGroups.ProjectileWeapon) {
            if (this.groupId == Wafle.InventoryGroups.Gyrostabilizer) {
                return this.damageMultiplier;
            }
        } else if (ti.groupId == Wafle.InventoryGroups.HybridWeapon) {
            if (this.groupId == Wafle.InventoryGroups.MagneticFieldStabilizer) {
                return this.damageMultiplier;
            }
        } else if (ti.groupId == Wafle.InventoryGroups.EnergyWeapon) {
            if (this.groupId == Wafle.InventoryGroups.HeatSink) {
                return this.damageMultiplier;
            }
        }
        return 1;
    }


}

function ShipEquipmentLoader(data: Wafle.IEveInventoryTypeAttributes, target: BaseShipEquipmentData) {
    target.name = data.n;
    target.description = data.d;
    target.cpuUsage = (data.cpu || 0);
    target.powergridUsage = (data.pg || 0);
    target.metaLevel = data.mta;
    target.marketGroup = data.mg;
    target.parentMarketGroup = data.pmg;
    target.volume = data.v;
    target.techLevel = data.tl;
    target.race = data.r;
}

function TurretLoader(data: Wafle.IEveInventoryTypeAttributes, target: BaseShipEquipmentData) {
    target.optimalRange = data.opt;
    target.accuracyFalloff = data.acc;
    target.rateOfFire = data.rof;
    target.trackingSpeed = data.trk;
    target.damageMultiplier = data.dmg;
    target.slotUsed = Wafle.FittingSlotType.High;
    target.launcherGroup = data.lg;
    target.chargeSize = data.cs;
    target.cpuUsageActual = (ship: Wafle.Ship) => {
        return Wafle.CpuFormulas.standardWeapon(ship, target.cpuUsage);
    }
    target.powergridUsageActual = (ship: Wafle.Ship) => Wafle.PowergridFormulas.standardWeapon(ship, target.powergridUsage);
    target.emAlphaDamageActual = (ship: Wafle.Ship, charge: BaseShipEquipmentData) => {
        return (charge.emBaseDamage ? charge.emBaseDamage : 0) * target.damageMultiplier * ship.emDamageMultiplier(target, charge);
    };
    target.explosiveAlphaDamageActual = (ship: Wafle.Ship, charge: BaseShipEquipmentData) => {
        return (charge.explosiveBaseDamage ? charge.explosiveBaseDamage : 0) * target.damageMultiplier * ship.explosiveDamageMultiplier(target, charge);
    };
    target.kineticAlphaDamageActual = (ship: Wafle.Ship, charge: BaseShipEquipmentData) => {
        return (charge.kineticBaseDamage ? charge.kineticBaseDamage : 0) * target.damageMultiplier * ship.kineticDamageMultiplier(target, charge);
    };
    target.thermalAlphaDamageActual = (ship: Wafle.Ship, charge: BaseShipEquipmentData) => {
        return (charge.thermalBaseDamage ? charge.thermalBaseDamage : 0) * target.damageMultiplier * ship.thermalDamageMultiplier(target, charge);
    };
}


function LauncherLoader(data: Wafle.IEveInventoryTypeAttributes, target: BaseShipEquipmentData) {
    target.rateOfFire = data.rof;
    target.slotUsed = Wafle.FittingSlotType.High;
    target.cpuUsageActual = (ship: Wafle.Ship) => Wafle.CpuFormulas.standardWeapon(ship, target.cpuUsage);
    target.powergridUsageActual = (ship: Wafle.Ship) => Wafle.PowergridFormulas.standardWeapon(ship, target.powergridUsage);
    target.launcherGroup = data.lg;
    target.emAlphaDamageActual = (ship: Wafle.Ship, charge: BaseShipEquipmentData) => {
        return (charge.emBaseDamage ? charge.emBaseDamage : 0) * ship.emDamageMultiplier(target, charge);
    };
    target.explosiveAlphaDamageActual = (ship: Wafle.Ship, charge: BaseShipEquipmentData) => {
        return (charge.explosiveBaseDamage ? charge.explosiveBaseDamage : 0) * ship.explosiveDamageMultiplier(target, charge);
    };
    target.kineticAlphaDamageActual = (ship: Wafle.Ship, charge: BaseShipEquipmentData) => {
        return (charge.kineticBaseDamage ? charge.kineticBaseDamage : 0) * ship.kineticDamageMultiplier(target, charge);
    };
    target.thermalAlphaDamageActual = (ship: Wafle.Ship, charge: BaseShipEquipmentData) => {
        return (charge.thermalBaseDamage ? charge.thermalBaseDamage : 0) * ship.thermalDamageMultiplier(target, charge);
    };
}

function MidProjectedEffectLoader(data: Wafle.IEveInventoryTypeAttributes, target: BaseShipEquipmentData) {
    target.optimalRange = data.opt;
    target.accuracyFalloff = data.acc;
    target.slotUsed = Wafle.FittingSlotType.Mid;
    if (data.srb) {
        target.signatureRadiusBonusOfTarget = data.srb;
    }
    if (data.ad) {
        target.activationDuration = data.ad;
    }
    target.cpuUsageActual = function (ship: Wafle.Ship) {
            return Wafle.CpuFormulas.standardModule(ship, this.cpuUsage)
        }
        target.powergridUsageActual = function (ship: Wafle.Ship) {
            return Wafle.PowergridFormulas.standardModule(ship, this.powergridUsage);
    }
    }

function PropulsionLoader(data: Wafle.IEveInventoryTypeAttributes, target: BaseShipEquipmentData) {
    target.speedFactor = data.spd;
    if (data.srb) {
        target.signatureRadiusBonus = data.srb;
    }
    target.slotUsed = Wafle.FittingSlotType.Mid;
    target.cpuUsageActual = function (ship: Wafle.Ship) {
            return Wafle.CpuFormulas.standardModule(ship, this.cpuUsage)
        }
        target.powergridUsageActual = function (ship: Wafle.Ship) {
            return Wafle.PowergridFormulas.standardModule(ship, this.powergridUsage);
    }
    }

function ShieldExtenderLoader(data: Wafle.IEveInventoryTypeAttributes, target: BaseShipEquipmentData) {
    target.slotUsed = Wafle.FittingSlotType.Mid;
    target.shieldHPBonusAdd = data.shp;
    target.signatureRadiusBonus = data.sra;
    target.cpuUsageActual = function (ship: Wafle.Ship) {
            return Wafle.CpuFormulas.standardModule(ship, this.cpuUsage)
        }
        target.powergridUsageActual = function (ship: Wafle.Ship) {
            return Wafle.PowergridFormulas.shieldUpgradeModule(ship, this.powergridUsage);
    }
    }

function DroneLoader(data: Wafle.IEveInventoryTypeAttributes, target: BaseShipEquipmentData) {
    target.droneBandwidthUsed = data.dbu;
    target.optimalRange = data.opt;
    target.accuracyFalloff = data.acc;
    target.rateOfFire = data.rof;
    target.trackingSpeed = data.trk;
    target.damageMultiplier = data.dmg;
    target.emBaseDamage = data.emd;
    target.explosiveBaseDamage = data.exd;
    target.kineticBaseDamage = data.kid;
    target.thermalBaseDamage = data.thd;
    target.emAlphaDamageActual = (ship: Wafle.Ship) => {
        return (target.emBaseDamage ? target.emBaseDamage : 0) * target.damageMultiplier * ship.emDamageMultiplier(target, null);
    };
    target.explosiveAlphaDamageActual = (ship: Wafle.Ship) => {
        return (target.explosiveBaseDamage ? target.explosiveBaseDamage : 0) * target.damageMultiplier * ship.explosiveDamageMultiplier(target, null);
    };
    target.kineticAlphaDamageActual = (ship: Wafle.Ship) => {
        return (target.kineticBaseDamage ? target.kineticBaseDamage : 0) * target.damageMultiplier * ship.kineticDamageMultiplier(target, null);
    };
    target.thermalAlphaDamageActual = (ship: Wafle.Ship) => {
        return (target.thermalBaseDamage ? target.thermalBaseDamage : 0) * target.damageMultiplier * ship.thermalDamageMultiplier(target, null);
    };

}

function LowWeaponEnhancementLoader(data: Wafle.IEveInventoryTypeAttributes, target: BaseShipEquipmentData) {
    target.slotUsed = Wafle.FittingSlotType.Low;
    if (data.rofm) {
        target.rateOfFireMultiplier = data.rofm;
    }
    if (data.dmg) {
        target.damageMultiplier = data.dmg;
    }
    if (data.midm) {
        target.missileDamageMultiplier = data.midm;
    }
    target.cpuUsageActual = function (ship: Wafle.Ship) {
            return Wafle.CpuFormulas.standardModule(ship, this.cpuUsage)
        }
        target.powergridUsageActual = function (ship: Wafle.Ship) {
            return Wafle.PowergridFormulas.standardModule(ship, this.powergridUsage);
    }
    }

function ArmorPlateAndCoatingLoader(data: Wafle.IEveInventoryTypeAttributes, target: BaseShipEquipmentData) {
    if (data.ahp) {
        target.armorHPBonusAdd = data.ahp;
    }
    if (data.ahpbp) {
        target.armorHPBonusPercent = (ship: Wafle.Ship): number => {
            return data.ahpbp;
        }
        }
    if (data.emdrb || data.exdrb || data.kidrb || data.thdrb) {
        target.armorResists = new Wafle.ResistSet(
            new Wafle.Resistance((100 + (data.emdrb || 0)) / 100),
            new Wafle.Resistance((100 + (data.exdrb || 0)) / 100),
            new Wafle.Resistance((100 + (data.kidrb || 0)) / 100),
            new Wafle.Resistance((100 + (data.thdrb || 0)) / 100), true);
    }
    target.slotUsed = Wafle.FittingSlotType.Low;
    target.cpuUsageActual = function (ship: Wafle.Ship) {
            return Wafle.CpuFormulas.standardModule(ship, this.cpuUsage)
        }
        target.powergridUsageActual = function (ship: Wafle.Ship) {
            return Wafle.PowergridFormulas.standardModule(ship, this.powergridUsage);
    }
    }

function PowerModuleLoader(data: Wafle.IEveInventoryTypeAttributes, target: BaseShipEquipmentData) {
    target.slotUsed = Wafle.FittingSlotType.Low;
    target.powerGridIncrease = data.pginc;
    target.cpuUsageActual = function (ship: Wafle.Ship) { 
            return Wafle.CpuFormulas.standardModule(ship, this.cpuUsage)
        }
        target.powergridUsageActual = function (ship: Wafle.Ship) {
        return 0;
    }
    }

function DamageControlLoader(data: Wafle.IEveInventoryTypeAttributes, target: BaseShipEquipmentData) {

    target.hullResists = new Wafle.ResistSet(data.hemr, data.hexr, data.hkir, data.hthr, false);
    target.armorResists = new Wafle.ResistSet(data.aemr, data.aexr, data.akir, data.athr, false);
    target.shieldResists = new Wafle.ResistSet(data.semr, data.sexr, data.skir, data.sthr, false);

    target.slotUsed = Wafle.FittingSlotType.Low;
    target.cpuUsageActual = function (ship: Wafle.Ship) { 
            return Wafle.CpuFormulas.standardModule(ship, this.cpuUsage)
        }
        target.powergridUsageActual = function (ship: Wafle.Ship) {
            return Wafle.PowergridFormulas.standardModule(ship, this.powergridUsage);
    }
    }

function ChargeLoader(data: Wafle.IEveInventoryTypeAttributes, target: BaseShipEquipmentData) {
    target.emBaseDamage = data.emd;
    target.explosiveBaseDamage = data.exd;
    target.kineticBaseDamage = data.kid;
    target.thermalBaseDamage = data.thd;
    target.weaponsRangeModifier = data.wrm;
    target.chargeSize = data.cs;
    target.launcherGroup = data.lg; //todo: fix up so this works with all types of charges
    target.trackingSpeedModifier = data.tsm;
}

function NanofiberLoader(data: Wafle.IEveInventoryTypeAttributes, target: BaseShipEquipmentData) {

    target.shipHullHPMultiplier = data.sshpm;
    target.agilityMultiplier = data.agim;
    target.baseVelocityMultiplier = data.velm;
    target.slotUsed = Wafle.FittingSlotType.Low;
    target.cpuUsageActual = (ship: Wafle.Ship): number => {
            return Wafle.CpuFormulas.standardModule(ship, target.cpuUsage)
        }
        target.powergridUsageActual = (ship: Wafle.Ship): number => {
            return Wafle.PowergridFormulas.standardModule(ship, target.powergridUsage);
    }
    }

function NosNeutLoader(data: Wafle.IEveInventoryTypeAttributes, target: BaseShipEquipmentData) {
    target.slotUsed = Wafle.FittingSlotType.High;
    target.optimalRange = data.opt;
    target.capacitorNeed = data.capn;
    target.activationDuration = data.ad;
    target.powerTransferAmount = data.pta;
    target.energyDestabilizationAmount = data.eda;
    target.cpuUsageActual = (ship: Wafle.Ship) => {
            return Wafle.CpuFormulas.standardModule(ship, target.cpuUsage)
        }
    target.powergridUsageActual = (ship: Wafle.Ship) => {
            return Wafle.PowergridFormulas.standardModule(ship, target.powergridUsage);
    }
    }

function RigLoader(data: Wafle.IEveInventoryTypeAttributes, target: BaseShipEquipmentData): void {
    target.cpuUsageActual = () => {return 0 };
    target.powergridUsageActual = () => {return 0 };
    target.slotUsed = Wafle.FittingSlotType.Rig;
    target.drawback = data.drwbk;
    var typeInfo = new Wafle.TypeInfo(target.typeId, target.groupId);

    if (target.groupId == Wafle.InventoryGroups.ArmorRig) {
        target.armorResists = new Wafle.ResistSet((100 + data.emdrb) * 0.01 || 1, (100 + data.exdrb) * 0.01 || 1, (100 + data.kidrb) * 0.01 || 1, (100 + data.thdrb) * 0.01 || 1);
        if (Wafle.Data.DrawbackIsArmorRepairPowergridPenalty(typeInfo)) {
            //todo: implement me once armor repair modules are supported.
        } else if (Wafle.Data.DrawbackIsMaxVelocityPenalty(typeInfo)) {
            target.baseVelocityMultiplier = target.drawback;
            target.actualVelocityMultiplier = (ship: Wafle.Ship) => {
                var m: number = target.drawback;
                if (ship.pilot) {
                    m = m * (1 - (ship.pilot.skills.ArmorRigging * 0.1));
                }
                return m;
            }
            }

        if (data.ahpbp) {
            target.armorHPBonusPercent = (ship: Wafle.Ship): number => {
                return data.ahpbp;
            }
            }
    } else if (target.groupId == Wafle.InventoryGroups.ShieldRig) {
        target.shieldResists = new Wafle.ResistSet((100 + data.emdrb) * 0.01 || 1, (100 + data.exdrb) * 0.01 || 1, (100 + data.kidrb) * 0.01 || 1, (100 + data.thdrb) * 0.01 || 1);
    } else if (target.groupId == Wafle.InventoryGroups.NavigationRig) {
        if (data.agim) {
            target.agilityMultiplier = data.agim;
        }
        if (data.velm) {
            target.baseVelocityMultiplier = data.velm;
        }
        target.armorHPBonusPercent = (ship: Wafle.Ship) => {
            return target.drawback * (1 - (ship.pilot.skills.AstronauticsRigging * 0.1));
        }
    }

}


export = BaseShipEquipmentData;

