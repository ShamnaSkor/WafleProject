/// <reference path="../_references.d.ts" />
declare module Wafle {
    class ResistSet {
        public EM: Resistance;
        public Explosive: Resistance;
        public Kinetic: Resistance;
        public Thermal: Resistance;
        public HasDiminishingReturns: boolean;
        constructor(EM: Resistance, Explosive: Resistance, Kinetic: Resistance, Thermal: Resistance, HasDiminishingReturns?: boolean);
        /** Each parameter is a fractional percent damage taken (1 = no resistance, 0.8 = 20% resistance, 0 = 100% resistance.) */
        constructor(EM: number, Explosive: number, Kinetic: number, Thermal: number, HasDiminishingReturns?: boolean);
        private resistLoader(theValue);
    }
}
