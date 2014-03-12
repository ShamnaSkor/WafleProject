/// <reference path="../_references.d.ts" />
declare module Wafle {
    module PowergridFormulas {
        function standardWeapon(ship: Ship, basePowergrid: number): number;
        function standardModule(ship: Ship, basePowergrid: number): number;
        function shieldUpgradeModule(ship: Ship, basePowergrid: number): number;
    }
}
