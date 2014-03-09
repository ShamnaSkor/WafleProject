import Wafle = require("../wafle");
declare class Ship {
    public hullName: string;
    public baseShipData: Wafle.BaseShipData;
    public pilot: Wafle.Pilot;
    public fittingSlots: Wafle.FittingSlot[];
    public droneBay: Wafle.InventoryTypeAttributes[];
    public cargoHold: Wafle.InventoryTypeAttributes[];
    /** in Mbit/sec */
    public DroneBandwidthUsed(): number;
    /** in Mbit/sec */
    public DroneBandwidthRemaining(): number;
    /** in m3 */
    public DroneCapacityRemaining(): number;
    /** in m3 */
    public DroneCapacityUsed(): number;
    public LoadDrone(droneType: Wafle.TypeInfo): void;
    public LoadDrones(droneType: Wafle.TypeInfo, count: number): void;
    public totalDroneAlphaDamage(): number;
    public emDroneAlphaDamage(): number;
    public explosiveDroneAlphaDamage(): number;
    public kineticDroneAlphaDamage(): number;
    public thermalDroneAlphaDamage(): number;
    constructor(shipTypeId: number);
    constructor(hullName: string);
    public SetPilot(pilot: Wafle.Pilot): void;
    public isPiloted(): boolean;
    public powergrid(): number;
    public powergridString(): string;
    public cpu(): number;
    public remainingCpu(): number;
    public remainingPowergrid(): number;
    public cpuString(): string;
    public shieldHP(): number;
    public armorHP(): number;
    public structureHP(): number;
    public totalHP(): number;
    public ShieldEMDamageReduction(): number;
    public ShieldExplosiveDamageReduction(): number;
    public ShieldKineticDamageReduction(): number;
    public ShieldThermalDamageReduction(): number;
    private ShieldSpecificDamageReduction(damageTypeName);
    public ArmorEMDamageReduction(): number;
    public ArmorExplosiveDamageReduction(): number;
    public ArmorKineticDamageReduction(): number;
    public ArmorThermalDamageReduction(): number;
    private ArmorSpecificDamageReduction(damageTypeName);
    public HullEMDamageReduction(): number;
    public HullExplosiveDamageReduction(): number;
    public HullKineticDamageReduction(): number;
    public HullThermalDamageReduction(): number;
    public MaxVelocity(): number;
    private multiplyPercentages(startValue, percentages, closerToZeroIsMostSignificant?);
    private SortArrayByAscendingAbsoluteValue(theArray);
    private SortArrayByDescendingAbsoluteValue(theArray);
    public emDamageMultiplier(attackingModule: Wafle.InventoryTypeAttributes, charge: Wafle.InventoryTypeAttributes): number;
    public explosiveDamageMultiplier(attackingModule: Wafle.InventoryTypeAttributes, charge: Wafle.InventoryTypeAttributes): number;
    public kineticDamageMultiplier(attackingModule: Wafle.InventoryTypeAttributes, charge: Wafle.InventoryTypeAttributes): number;
    public thermalDamageMultiplier(attackingModule: Wafle.InventoryTypeAttributes, charge: Wafle.InventoryTypeAttributes): number;
    public totalAlphaDamageActual(): number;
}
export = Ship;
