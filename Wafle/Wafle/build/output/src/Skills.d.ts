/// <reference path="../_references.d.ts" />
declare module Wafle {
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
}
