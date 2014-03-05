define(["require", "exports"], function(require, exports) {
    function standardWeapon(ship, basePowergrid) {
        if (ship && ship.pilot) {
            return basePowergrid - (ship.pilot.skills.AdvancedWeaponUpgrades * 0.02 * basePowergrid);
        } else {
            return basePowergrid;
        }
    }
    exports.standardWeapon = standardWeapon;

    function standardModule(ship, basePowergrid) {
        if (basePowergrid) {
            return basePowergrid;
        } else {
            return 0;
        }
    }
    exports.standardModule = standardModule;
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
    exports.shieldUpgradeModule = shieldUpgradeModule;
});
//# sourceMappingURL=PowergridFormulas.js.map
