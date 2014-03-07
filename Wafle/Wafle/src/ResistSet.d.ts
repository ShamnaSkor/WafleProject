import Wafle = require("../wafle");
declare class ResistSet {
    public EM: Wafle.Resistance;
    public Explosive: Wafle.Resistance;
    public Kinetic: Wafle.Resistance;
    public Thermal: Wafle.Resistance;
    public HasDiminishingReturns: boolean;
    constructor(EM: Wafle.Resistance, Explosive: Wafle.Resistance, Kinetic: Wafle.Resistance, Thermal: Wafle.Resistance, HasDiminishingReturns?: boolean);
    /** Each parameter is a fractional percent damage taken (1 = no resistance, 0.8 = 20% resistance, 0 = 100% resistance.) */
    constructor(EM: number, Explosive: number, Kinetic: number, Thermal: number, HasDiminishingReturns?: boolean);
    private resistLoader(theValue);
}
export = ResistSet;
