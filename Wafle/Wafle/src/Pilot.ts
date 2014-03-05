import Wafle = require("../wafle");

class Pilot {

    public skills: Wafle.Skills;
    constructor(public name: string) {
        this.skills = new Wafle.Skills();
    }

    public OmniDamageMultiplier(attackingModule: Wafle.InventoryTypeAttributes): number {
        var mult = 1.0;
        if (attackingModule.groupId === Wafle.InventoryGroups.ProjectileWeapon) {
            mult *= this.skills.surgicalStrikeDamageMultiplier();
            switch (attackingModule.chargeSize) {
                case 1:
                    mult *= this.skills.smallProjectileTurretDamageMultiplier();
                    break;
            }
        } else if (attackingModule.groupId === Wafle.InventoryGroups.HybridWeapon) {
            mult *= this.skills.surgicalStrikeDamageMultiplier();
            switch (attackingModule.chargeSize) {
                case 1:
                    mult *= this.skills.smallHybridTurretDamageMultiplier();
                    if (attackingModule.techLevel == 2) {
                        if (Wafle.Data.IsBlaster(attackingModule)) {
                            mult *= this.skills.smallT2BlasterDamageMultiplier();
                        } else if (Wafle.Data.IsRailgun(attackingModule)) {
                            mult *= this.skills.smallT2RailgunDamageMultiplier();
                        }
                    }
                    break;
            }
        } else if (attackingModule.groupId === Wafle.InventoryGroups.RocketLauncher) {
            mult *= this.skills.rocketsDamageMultiplier() * this.skills.warheadDamageMultiplier();
        } else if (attackingModule.groupId === Wafle.InventoryGroups.LightMissileLauncher) {
            mult *= this.skills.lightMissilesDamageMultiplier() * this.skills.warheadDamageMultiplier();
        }
        return mult;
    }

}
export = Pilot;