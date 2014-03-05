define(["require", "exports"], function(require, exports) {
    function standardWeapon(ship, baseCpu) {
        if (ship && ship.pilot) {
            return baseCpu - (ship.pilot.skills.WeaponUpgrades * 0.05 * baseCpu);
        } else {
            return baseCpu;
        }
    }
    exports.standardWeapon = standardWeapon;

    function standardModule(ship, baseCpu) {
        if (baseCpu) {
            return baseCpu;
        } else {
            return 0;
        }
    }
    exports.standardModule = standardModule;
});
//# sourceMappingURL=CpuFormulas.js.map
