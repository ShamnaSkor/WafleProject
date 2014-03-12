///<reference path="../_references.ts"/>

 module Wafle {

    export module PowergridFormulas {

        export function standardWeapon(ship: Wafle.Ship, basePowergrid: number) {
            if (ship && ship.pilot) {
                return basePowergrid - (ship.pilot.skills.AdvancedWeaponUpgrades * 0.02 * basePowergrid);
            } else {
                return basePowergrid;
            }
        }

        export function standardModule(ship: Wafle.Ship, basePowergrid: number) {
            if (basePowergrid) {
                return basePowergrid;
            } else {
                return 0;
            }
        }
        export function shieldUpgradeModule(ship: Wafle.Ship, basePowergrid: number) {
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
    }
}