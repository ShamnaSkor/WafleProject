/// <reference path="../_references.d.ts" />
declare module Wafle {
    class Pilot {
        public name: string;
        public skills: Skills;
        constructor(name: string);
        public OmniDamageMultiplier(attackingModule: InventoryTypeAttributes): number;
    }
}
