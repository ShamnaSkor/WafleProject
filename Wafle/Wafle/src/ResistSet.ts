///<reference path="../_references.ts"/>

 module Wafle {

    export class ResistSet {
        public EM: Wafle.Resistance;
        public Explosive: Wafle.Resistance;
        public Kinetic: Wafle.Resistance;
        public Thermal: Wafle.Resistance;
        public HasDiminishingReturns: boolean = true;

        constructor(EM: Wafle.Resistance, Explosive: Wafle.Resistance, Kinetic: Wafle.Resistance, Thermal: Wafle.Resistance, HasDiminishingReturns?: boolean);
        /** Each parameter is a fractional percent damage taken (1 = no resistance, 0.8 = 20% resistance, 0 = 100% resistance.) */
        constructor(EM: number, Explosive: number, Kinetic: number, Thermal: number, HasDiminishingReturns?: boolean /** Defaults to true.  Set to false for special cases such as ships or damage controls.  */);
        constructor(em, ex, ki, th, dr?) {
            this.EM = this.resistLoader(em);
            this.Explosive = this.resistLoader(ex);
            this.Kinetic = this.resistLoader(ki);
            this.Thermal = this.resistLoader(th);
            if (dr != undefined) {
                this.HasDiminishingReturns = dr;
            }
        }

        private resistLoader(theValue: any) {
            if (theValue.baseResistRatio) {
                return theValue;
            } else {
                return new Wafle.Resistance(theValue);
            }
        }
    }
}
