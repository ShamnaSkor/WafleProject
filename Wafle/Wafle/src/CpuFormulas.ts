///<reference path="../_references.ts"/>

 module Wafle {

    export module CpuFormulas {

        export function standardWeapon(ship: Wafle.Ship, baseCpu: number) {
            if (ship && ship.pilot) {
                return baseCpu - (ship.pilot.skills.WeaponUpgrades * 0.05 * baseCpu);
            } else {
                return baseCpu;
            }
        }

        export function standardModule(ship: Wafle.Ship, baseCpu: number) {
            if (baseCpu) {
                return baseCpu;
            } else {
                return 0;
            }
        }

    }
}