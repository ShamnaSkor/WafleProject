import Wafle = require("../wafle");
declare class Pilot {
    public name: string;
    public skills: Wafle.Skills;
    constructor(name: string);
    public OmniDamageMultiplier(attackingModule: Wafle.InventoryTypeAttributes): number;
}
export = Pilot;
