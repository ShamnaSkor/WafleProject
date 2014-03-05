define(["require", "exports", "../wafle"], function(require, exports, Wafle) {
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
    
    return ResistSet;
});
//# sourceMappingURL=ResistSet.js.map
