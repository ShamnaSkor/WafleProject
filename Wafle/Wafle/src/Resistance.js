define(["require", "exports"], function(require, exports) {
    var Resistance = (function () {
        /** baseResistRatio = Fractional damage amount taken - 90% damage taken (10% resisted) expressed as 0.9  */
        function Resistance(baseResistRatio) {
            this.baseResistRatio = baseResistRatio;
        }
        /**
        * Base damage reduction percentage.  30% damage reduction expressed as 0.3 .
        **/
        Resistance.prototype.baseDamageReductionPercentage = function () {
            return 1 - this.baseResistRatio;
        };
        return Resistance;
    })();
    
    return Resistance;
});
//# sourceMappingURL=Resistance.js.map
