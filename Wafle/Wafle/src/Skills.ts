import Wafle = require("../wafle");

class Skills {
    PowerGridManagement: number = 0;
    CPUManagement: number = 0;
    HullUpgrades: number = 0;
    Mechanics: number = 0;
    ShieldManagement: number = 0;
    ShieldUpgrades: number = 0;
    WeaponUpgrades: number = 0;
    AdvancedWeaponUpgrades: number = 0;
    Navigation: number = 0;
    ArmorRigging: number = 0;
    AstronauticsRigging: number = 0;
    EMArmorCompensation: number = 0;
    ExplosiveArmorCompensation: number = 0;
    KineticArmorCompensation: number = 0;
    ThermicArmorCompensation: number = 0;
    GallenteFrigate: number = 0;
    MinmatarFrigate: number = 0;
    CaldariFrigate: number = 0;
    AmarrFrigate: number = 0;
    GallenteCruiser: number = 0;
    MinmatarCruiser: number = 0;
    CaldariCruiser: number = 0;
    AmarrCruiser: number = 0;
    SmallProjectileTurret: number = 0;
    SurgicalStrike: number = 0;
    Rockets: number = 0;
    LightMissiles: number = 0;
    WarheadUpgrades: number = 0;
    SmallHybridTurret: number = 0;
    SmallRailgunSpecialization: number = 0;
    SmallBlasterSpecialization: number = 0;
    Drones: number = 0;
    DroneInterfacing: number = 0;
    CombatDroneOperation: number = 0;
    GallenteDroneSpecialization: number = 0;
    MinmatarDroneSpecialization: number = 0;
    CaldariDroneSpecialization: number = 0;
    AmarrDroneSpecialization: number = 0;

    public SetAllSkills(level: number) {
        this.PowerGridManagement = level;
        this.CPUManagement = level;
        this.HullUpgrades = level;
        this.Mechanics = level;
        this.ShieldManagement = level;
        this.ShieldUpgrades = level;
        this.WeaponUpgrades = level;
        this.AdvancedWeaponUpgrades = level;
        this.Navigation = level;
        this.ArmorRigging = level;
        this.AstronauticsRigging = level;
        this.GallenteFrigate = level;
        this.MinmatarFrigate = level;
        this.CaldariFrigate = level;
        this.AmarrFrigate = level;
        this.GallenteCruiser = level;
        this.MinmatarCruiser = level;
        this.CaldariCruiser = level;
        this.AmarrCruiser = level;
        this.SmallProjectileTurret = level;
        this.SmallHybridTurret = level;
        this.SmallRailgunSpecialization = level;
        this.SmallBlasterSpecialization = level;
        this.SurgicalStrike = level;
        this.Rockets = level;
        this.LightMissiles = level;
        this.WarheadUpgrades = level;
        this.EMArmorCompensation = level;
        this.ExplosiveArmorCompensation = level;
        this.KineticArmorCompensation = level;
        this.ThermicArmorCompensation = level;
        this.Drones = level;
        this.DroneInterfacing = level;
        this.CombatDroneOperation = level;
        this.GallenteDroneSpecialization = level;
        this.MinmatarDroneSpecialization = level;
        this.CaldariDroneSpecialization = level;
        this.AmarrDroneSpecialization = level;
    }

    public cpuMultiplier(): number {
        return 1.0 + (this.CPUManagement * 0.05);
    }
    public powergridMultiplier(): number {
        return 1.0 + (this.PowerGridManagement * 0.05);
    }
    public shieldHPMultiplier(): number {
        return 1.0 + (this.ShieldManagement * 0.05);
    }
    public armorHPMultiplier(): number {
        return 1.0 + (this.HullUpgrades * 0.05);
    }
    public structureHPMultiplier(): number {
        return 1.0 + (this.Mechanics * 0.05);
    }
    public velocityMultiplier(): number {
        return 1.0 + (this.Navigation * 0.05);
    }
    public smallProjectileTurretDamageMultiplier(): number {
        return 1.0 + (this.SmallProjectileTurret * 0.05);
    }
    public smallHybridTurretDamageMultiplier(): number {
        return 1.0 + (this.SmallHybridTurret * 0.05);
    }
    public smallT2BlasterDamageMultiplier(): number {
        return 1.0 + (this.SmallBlasterSpecialization * 0.02);
    }
    public smallT2RailgunDamageMultiplier(): number {
        return 1.0 + (this.SmallRailgunSpecialization * 0.02);
    }
    public surgicalStrikeDamageMultiplier(): number {
        return 1.0 + (this.SurgicalStrike * 0.03);
    }
    public rocketsDamageMultiplier(): number {
        return 1.0 + (this.Rockets * 0.05);
    }
    public lightMissilesDamageMultiplier(): number {
        return 1.0 + (this.LightMissiles * 0.05);
    }
    public warheadDamageMultiplier(): number {
        return 1.0 + (this.WarheadUpgrades * 0.02);
    }
}
export = Skills;