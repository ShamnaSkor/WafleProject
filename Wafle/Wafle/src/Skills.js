///<reference path="../_references.ts"/>
var Wafle;
(function (Wafle) {
    var Skills = (function () {
        function Skills() {
            this.PowerGridManagement = 0;
            this.CPUManagement = 0;
            this.HullUpgrades = 0;
            this.Mechanics = 0;
            this.ShieldManagement = 0;
            this.ShieldUpgrades = 0;
            this.WeaponUpgrades = 0;
            this.AdvancedWeaponUpgrades = 0;
            this.Navigation = 0;
            this.ArmorRigging = 0;
            this.AstronauticsRigging = 0;
            this.EMArmorCompensation = 0;
            this.ExplosiveArmorCompensation = 0;
            this.KineticArmorCompensation = 0;
            this.ThermicArmorCompensation = 0;
            this.GallenteFrigate = 0;
            this.MinmatarFrigate = 0;
            this.CaldariFrigate = 0;
            this.AmarrFrigate = 0;
            this.GallenteCruiser = 0;
            this.MinmatarCruiser = 0;
            this.CaldariCruiser = 0;
            this.AmarrCruiser = 0;
            this.SmallProjectileTurret = 0;
            this.SurgicalStrike = 0;
            this.Rockets = 0;
            this.LightMissiles = 0;
            this.WarheadUpgrades = 0;
            this.SmallHybridTurret = 0;
            this.SmallRailgunSpecialization = 0;
            this.SmallBlasterSpecialization = 0;
            this.Drones = 0;
            this.DroneInterfacing = 0;
            this.CombatDroneOperation = 0;
            this.GallenteDroneSpecialization = 0;
            this.MinmatarDroneSpecialization = 0;
            this.CaldariDroneSpecialization = 0;
            this.AmarrDroneSpecialization = 0;
        }
        Skills.prototype.SetAllSkills = function (level) {
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
        };

        Skills.prototype.cpuMultiplier = function () {
            return 1.0 + (this.CPUManagement * 0.05);
        };
        Skills.prototype.powergridMultiplier = function () {
            return 1.0 + (this.PowerGridManagement * 0.05);
        };
        Skills.prototype.shieldHPMultiplier = function () {
            return 1.0 + (this.ShieldManagement * 0.05);
        };
        Skills.prototype.armorHPMultiplier = function () {
            return 1.0 + (this.HullUpgrades * 0.05);
        };
        Skills.prototype.structureHPMultiplier = function () {
            return 1.0 + (this.Mechanics * 0.05);
        };
        Skills.prototype.velocityMultiplier = function () {
            return 1.0 + (this.Navigation * 0.05);
        };
        Skills.prototype.smallProjectileTurretDamageMultiplier = function () {
            return 1.0 + (this.SmallProjectileTurret * 0.05);
        };
        Skills.prototype.smallHybridTurretDamageMultiplier = function () {
            return 1.0 + (this.SmallHybridTurret * 0.05);
        };
        Skills.prototype.smallT2BlasterDamageMultiplier = function () {
            return 1.0 + (this.SmallBlasterSpecialization * 0.02);
        };
        Skills.prototype.smallT2RailgunDamageMultiplier = function () {
            return 1.0 + (this.SmallRailgunSpecialization * 0.02);
        };
        Skills.prototype.surgicalStrikeDamageMultiplier = function () {
            return 1.0 + (this.SurgicalStrike * 0.03);
        };
        Skills.prototype.rocketsDamageMultiplier = function () {
            return 1.0 + (this.Rockets * 0.05);
        };
        Skills.prototype.lightMissilesDamageMultiplier = function () {
            return 1.0 + (this.LightMissiles * 0.05);
        };
        Skills.prototype.warheadDamageMultiplier = function () {
            return 1.0 + (this.WarheadUpgrades * 0.02);
        };
        return Skills;
    })();
    Wafle.Skills = Skills;
})(Wafle || (Wafle = {}));
//# sourceMappingURL=Skills.js.map
