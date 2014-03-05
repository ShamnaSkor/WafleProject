import Wafle = require("../wafle");
class Resistance {
    /** baseResistRatio = Fractional damage amount taken - 90% damage taken (10% resisted) expressed as 0.9  */
    constructor(private baseResistRatio: number) {
    }
    /**
    * Base damage reduction percentage.  30% damage reduction expressed as 0.3 .
    **/
    public baseDamageReductionPercentage() {
        return 1 - this.baseResistRatio;
    }
}
export = Resistance;