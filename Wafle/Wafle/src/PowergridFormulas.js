///<reference path="../_references.ts"/>
var Wafle;
(function (Wafle) {
    (function (PowergridFormulas) {
        function standardWeapon(ship, basePowergrid) {
            if (ship && ship.pilot) {
                return basePowergrid - (ship.pilot.skills.AdvancedWeaponUpgrades * 0.02 * basePowergrid);
            } else {
                return basePowergrid;
            }
        }
        PowergridFormulas.standardWeapon = standardWeapon;

        function standardModule(ship, basePowergrid) {
            if (basePowergrid) {
                return basePowergrid;
            } else {
                return 0;
            }
        }
        PowergridFormulas.standardModule = standardModule;
        function shieldUpgradeModule(ship, basePowergrid) {
            if (basePowergrid) {
                if (ship.pilot) {
                    return basePowergrid * (1 - (0.05 * ship.pilot.skills.ShieldUpgrades));
                } else {
                    return basePowergrid;
                }
            } else {
                return 0;
            }
        }
        PowergridFormulas.shieldUpgradeModule = shieldUpgradeModule;
    })(Wafle.PowergridFormulas || (Wafle.PowergridFormulas = {}));
    var PowergridFormulas = Wafle.PowergridFormulas;
})(Wafle || (Wafle = {}));
//# sourceMappingURL=PowergridFormulas.js.map
