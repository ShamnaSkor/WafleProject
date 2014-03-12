///<reference path="../_references.ts"/>
var Wafle;
(function (Wafle) {
    (function (CpuFormulas) {
        function standardWeapon(ship, baseCpu) {
            if (ship && ship.pilot) {
                return baseCpu - (ship.pilot.skills.WeaponUpgrades * 0.05 * baseCpu);
            } else {
                return baseCpu;
            }
        }
        CpuFormulas.standardWeapon = standardWeapon;

        function standardModule(ship, baseCpu) {
            if (baseCpu) {
                return baseCpu;
            } else {
                return 0;
            }
        }
        CpuFormulas.standardModule = standardModule;
    })(Wafle.CpuFormulas || (Wafle.CpuFormulas = {}));
    var CpuFormulas = Wafle.CpuFormulas;
})(Wafle || (Wafle = {}));
//# sourceMappingURL=CpuFormulas.js.map
