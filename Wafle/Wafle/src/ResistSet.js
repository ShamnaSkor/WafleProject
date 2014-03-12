///<reference path="../_references.ts"/>
var Wafle;
(function (Wafle) {
    var ResistSet = (function () {
        function ResistSet(em, ex, ki, th, dr) {
            this.HasDiminishingReturns = true;
            this.EM = this.resistLoader(em);
            this.Explosive = this.resistLoader(ex);
            this.Kinetic = this.resistLoader(ki);
            this.Thermal = this.resistLoader(th);
            if (dr != undefined) {
                this.HasDiminishingReturns = dr;
            }
        }
        ResistSet.prototype.resistLoader = function (theValue) {
            if (theValue.baseResistRatio) {
                return theValue;
            } else {
                return new Wafle.Resistance(theValue);
            }
        };
        return ResistSet;
    })();
    Wafle.ResistSet = ResistSet;
})(Wafle || (Wafle = {}));
//# sourceMappingURL=ResistSet.js.map
