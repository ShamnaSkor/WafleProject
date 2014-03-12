///<reference path="../_references.ts"/>
var Wafle;
(function (Wafle) {
    var Pilot = (function () {
        function Pilot(name) {
            this.name = name;
            this.skills = new Wafle.Skills();
        }
        Pilot.prototype.OmniDamageMultiplier = function (attackingModule) {
            var mult = 1.0;
            if (attackingModule.groupId === 55 /* ProjectileWeapon */) {
                mult *= this.skills.surgicalStrikeDamageMultiplier();
                switch (attackingModule.chargeSize) {
                    case 1:
                        mult *= this.skills.smallProjectileTurretDamageMultiplier();
                        break;
                }
            } else if (attackingModule.groupId === 74 /* HybridWeapon */) {
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
            } else if (attackingModule.groupId === 507 /* RocketLauncher */) {
                mult *= this.skills.rocketsDamageMultiplier() * this.skills.warheadDamageMultiplier();
            } else if (attackingModule.groupId === 509 /* LightMissileLauncher */) {
                mult *= this.skills.lightMissilesDamageMultiplier() * this.skills.warheadDamageMultiplier();
            }
            return mult;
        };
        return Pilot;
    })();
    Wafle.Pilot = Pilot;
})(Wafle || (Wafle = {}));
//# sourceMappingURL=Pilot.js.map
