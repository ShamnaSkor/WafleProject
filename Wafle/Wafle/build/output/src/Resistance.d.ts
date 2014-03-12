/// <reference path="../_references.d.ts" />
declare module Wafle {
    class Resistance {
        private baseResistRatio;
        /** baseResistRatio = Fractional damage amount taken - 90% damage taken (10% resisted) expressed as 0.9  */
        constructor(baseResistRatio: number);
        /**
        * Base damage reduction percentage.  30% damage reduction expressed as 0.3 .
        **/
        public baseDamageReductionPercentage(): number;
    }
}
