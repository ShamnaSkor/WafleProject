/// <reference path="wafleInterfaces.d.ts" />
/// <reference path="wafleData.d.ts" />
/// <reference path="wafleCuratedData.d.ts" />
declare module Wafle {
    var Version: string;
    enum RaceType {
        Unknown = 0,
        Caldari = 1,
        Minmatar = 2,
        Amarr = 4,
        Gallente = 8,
        ORE,
    }
    enum FittingSlotType {
        Unknown,
        High,
        Mid,
        Low,
        Rig,
    }
    enum RigSize {
        Unknown = 0,
        Small = 1,
        Medium = 2,
        Large = 3,
        Capital = 4,
    }
    enum InventoryGroups {
        Unknown,
        Frigate = 25,
        ShieldExtender = 38,
        Propulsion = 46,
        WarpScrambler = 52,
        EnergyWeapon = 53,
        ProjectileWeapon = 55,
        Gyrostabilizer = 59,
        DamageControl = 60,
        ArmorRepairUnit = 62,
        StasisWeb = 65,
        EnergyVampire = 68,
        EnergyDestabilizer = 71,
        HybridWeapon = 74,
        ShieldHardener = 77,
        ProjectileAmmo = 83,
        HybridCharge = 85,
        FrequencyCrystal = 86,
        ArmorCoating = 98,
        CombatDrone = 100,
        HeatSink = 205,
        MagneticFieldStabilizer = 302,
        ArmorRepairProjector = 325,
        ArmorPlatingEnergized = 326,
        ArmorPlate = 329,
        AuxiliaryPowerCore = 339,
        BallisticControlSystem = 367,
        AdvancedAutocannonAmmo = 372,
        AdvancedRailgunCharge = 373,
        AdvancedBeamLaserCrystal = 374,
        AdvancedPulseLaserCrystal = 375,
        AdvancedArtilleryAmmo = 376,
        AdvancedBlasterCharge = 377,
        TargetPainter = 379,
        LightMissile = 384,
        HeavyMissile = 385,
        Rocket = 387,
        FoFHeavyMissile = 395,
        RocketLauncher = 507,
        LightMissileLauncher = 509,
        HeavyMissileLauncher = 510,
        RapidLightMissileLauncher = 511,
        AdvancedRocket = 648,
        AdvancedLightMissile = 653,
        AdvancedHeavyAssaultMissile = 654,
        AdvancedHeavyMissile = 655,
        Nanofiber = 763,
        HeavyAssaultMissileLauncher = 771,
        HeavyAssaultMissile = 772,
        ArmorRig = 773,
        ShieldRig = 774,
        NavigationRig = 782,
    }
    function Round(value: number, decimalPlace: number): number;
    function e(): number;
    /**
    ** Diminishing effectiveness ratio.  The most powerful modifier should be passed in with 0.
    **  The second most powerful modifier should be passed in with 1, etc.
    **/
    function dimEffRatio(zeroBasedIndex: number): number;
    class FittingSlot {
        public slotType: FittingSlotType;
        public ship: Ship;
        private loadedCharge;
        public baseShipEquipmentData: BaseShipEquipmentData;
        public cpuUsage(): number;
        public powergridUsage(): number;
        constructor(slotType: FittingSlotType, ship: Ship);
        public SetModule(typeId: number, groupId?: number): void;
        public LoadedCharge(): BaseShipEquipmentData;
        public LoadCharge(type: TypeInfo): void;
        public totalAlphaDamage(): number;
    }
    class Ship {
        public hullName: string;
        public baseShipData: BaseShipData;
        public pilot: Pilot;
        public fittingSlots: FittingSlot[];
        public droneBay: BaseShipEquipmentData[];
        public cargoHold: BaseShipEquipmentData[];
        /** in Mbit/sec */
        public DroneBandwidthUsed(): number;
        /** in Mbit/sec */
        public DroneBandwidthRemaining(): number;
        /** in m3 */
        public DroneCapacityRemaining(): number;
        /** in m3 */
        public DroneCapacityUsed(): number;
        public LoadDrone(droneType: TypeInfo): void;
        public LoadDrones(droneType: TypeInfo, count: number): void;
        public totalDroneAlphaDamage(): number;
        public emDroneAlphaDamage(): number;
        public explosiveDroneAlphaDamage(): number;
        public kineticDroneAlphaDamage(): number;
        public thermalDroneAlphaDamage(): number;
        constructor(hullName: string);
        public SetPilot(pilot: Pilot): void;
        public isPiloted(): boolean;
        public powergrid(): number;
        public powergridString(): string;
        public cpu(): number;
        public remainingCpu(): number;
        public remainingPowergrid(): number;
        public cpuString(): string;
        public shieldHP(): number;
        public armorHP(): number;
        public structureHP(): number;
        public totalHP(): number;
        public ShieldEMDamageReduction(): number;
        public ShieldExplosiveDamageReduction(): number;
        public ShieldKineticDamageReduction(): number;
        public ShieldThermalDamageReduction(): number;
        public ArmorEMDamageReduction(): number;
        public ArmorExplosiveDamageReduction(): number;
        public ArmorKineticDamageReduction(): number;
        public ArmorThermalDamageReduction(): number;
        private ArmorSpecificDamageReduction(damageTypeName);
        public HullEMDamageReduction(): number;
        public HullExplosiveDamageReduction(): number;
        public HullKineticDamageReduction(): number;
        public HullThermalDamageReduction(): number;
        public MaxVelocity(): number;
        private multiplyPercentages(startValue, percentages, closerToZeroIsMostSignificant?);
        private SortArrayByAscendingAbsoluteValue(theArray);
        private SortArrayByDescendingAbsoluteValue(theArray);
        public emDamageMultiplier(attackingModule: BaseShipEquipmentData, charge: BaseShipEquipmentData): number;
        public explosiveDamageMultiplier(attackingModule: BaseShipEquipmentData, charge: BaseShipEquipmentData): number;
        public kineticDamageMultiplier(attackingModule: BaseShipEquipmentData, charge: BaseShipEquipmentData): number;
        public thermalDamageMultiplier(attackingModule: BaseShipEquipmentData, charge: BaseShipEquipmentData): number;
        public totalAlphaDamageActual(): number;
    }
    class Pilot {
        public name: string;
        public skills: Skills;
        constructor(name: string);
        public OmniDamageMultiplier(attackingModule: BaseShipEquipmentData): number;
    }
    class Skills {
        public PowerGridManagement: number;
        public CPUManagement: number;
        public HullUpgrades: number;
        public Mechanics: number;
        public ShieldManagement: number;
        public ShieldUpgrades: number;
        public WeaponUpgrades: number;
        public AdvancedWeaponUpgrades: number;
        public Navigation: number;
        public ArmorRigging: number;
        public AstronauticsRigging: number;
        public EMArmorCompensation: number;
        public ExplosiveArmorCompensation: number;
        public KineticArmorCompensation: number;
        public ThermicArmorCompensation: number;
        public GallenteFrigate: number;
        public MinmatarFrigate: number;
        public CaldariFrigate: number;
        public AmarrFrigate: number;
        public GallenteCruiser: number;
        public MinmatarCruiser: number;
        public CaldariCruiser: number;
        public AmarrCruiser: number;
        public SmallProjectileTurret: number;
        public SurgicalStrike: number;
        public Rockets: number;
        public LightMissiles: number;
        public WarheadUpgrades: number;
        public SmallHybridTurret: number;
        public SmallRailgunSpecialization: number;
        public SmallBlasterSpecialization: number;
        public Drones: number;
        public DroneInterfacing: number;
        public CombatDroneOperation: number;
        public GallenteDroneSpecialization: number;
        public MinmatarDroneSpecialization: number;
        public CaldariDroneSpecialization: number;
        public AmarrDroneSpecialization: number;
        public SetAllSkills(level: number): void;
        public cpuMultiplier(): number;
        public powergridMultiplier(): number;
        public shieldHPMultiplier(): number;
        public armorHPMultiplier(): number;
        public structureHPMultiplier(): number;
        public velocityMultiplier(): number;
        public smallProjectileTurretDamageMultiplier(): number;
        public smallHybridTurretDamageMultiplier(): number;
        public smallT2BlasterDamageMultiplier(): number;
        public smallT2RailgunDamageMultiplier(): number;
        public surgicalStrikeDamageMultiplier(): number;
        public rocketsDamageMultiplier(): number;
        public lightMissilesDamageMultiplier(): number;
        public warheadDamageMultiplier(): number;
    }
    class CpuFormulas {
        static standardWeapon(ship: Ship, baseCpu: number): number;
        static standardModule(ship: Ship, baseCpu: number): number;
    }
    class PowergridFormulas {
        static standardWeapon(ship: Ship, basePowergrid: number): number;
        static standardModule(ship: Ship, basePowergrid: number): number;
        static shieldUpgradeModule(ship: Ship, basePowergrid: number): number;
    }
    class TypeInfo implements Wafle.ITypeInfo {
        public typeId: number;
        public groupId: number;
        constructor(typeId: number, groupId?: number);
        public FindGroupId(): void;
    }
    class BaseShipEquipmentData {
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
        public totalAlphaDamageActual(ship: Ship, charge: BaseShipEquipmentData): number;
        public emAlphaDamageActual: (ship: Ship, charge: BaseShipEquipmentData) => number;
        public explosiveAlphaDamageActual: (ship: Ship, charge: BaseShipEquipmentData) => number;
        public kineticAlphaDamageActual: (ship: Ship, charge: BaseShipEquipmentData) => number;
        public thermalAlphaDamageActual: (ship: Ship, charge: BaseShipEquipmentData) => number;
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
        public damageMultiplierForModule(theAttackingModule: BaseShipEquipmentData): number;
    }
    class Resistance {
        private baseResistRatio;
        /** baseResistRatio = Fractional damage amount taken - 90% damage taken (10% resisted) expressed as 0.9  */
        constructor(baseResistRatio: number);
        /**
        * Base damage reduction percentage.  30% damage reduction expressed as 0.3 .
        **/
        public baseDamageReductionPercentage(): number;
    }
    class ResistSet {
        public EM: Resistance;
        public Explosive: Resistance;
        public Kinetic: Resistance;
        public Thermal: Resistance;
        public HasDiminishingReturns: boolean;
        constructor(EM: Resistance, Explosive: Resistance, Kinetic: Resistance, Thermal: Resistance, HasDiminishingReturns?: boolean);
        /** Each parameter is a fractional percent damage taken (1 = no resistance, 0.8 = 20% resistance, 0 = 100% resistance.) */
        constructor(EM: number, Explosive: number, Kinetic: number, Thermal: number, HasDiminishingReturns?: boolean);
        private resistLoader(theValue);
    }
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
    function FindTypeByName(theName: string): TypeInfo;
}
