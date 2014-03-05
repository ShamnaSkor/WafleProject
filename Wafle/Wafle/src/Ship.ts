import Wafle = require("../wafle");

class Ship {
    public hullName: string;
    public baseShipData: Wafle.BaseShipData;
    public pilot: Wafle.Pilot = null;
    public fittingSlots: Wafle.FittingSlot[] = [];
    public droneBay: Wafle.InventoryTypeAttributes[] = [];
    public cargoHold: Wafle.InventoryTypeAttributes[] = [];

    /** in Mbit/sec */
    public DroneBandwidthUsed(): number {
        var bandwidthUsed = 0
            for (var i = 0; i < this.droneBay.length; i++) {
            if (this.droneBay[i].droneBandwidthUsed && this.droneBay[i].isActive) {
                bandwidthUsed += this.droneBay[i].droneBandwidthUsed;
            }
        }
        return bandwidthUsed;
    }

    /** in Mbit/sec */
    public DroneBandwidthRemaining(): number {
        return this.baseShipData.droneBandwidth - this.DroneBandwidthUsed();
    }

    /** in m3 */
    public DroneCapacityRemaining(): number {
        return this.baseShipData.droneBayCapacity - this.DroneCapacityUsed();
    }

    /** in m3 */
    public DroneCapacityUsed(): number {
        var capacityUsed = 0
            for (var i = 0; i < this.droneBay.length; i++) {
            if (this.droneBay[i].volume) {
                capacityUsed += this.droneBay[i].volume;
            }
        }
        return capacityUsed;
    }
    public LoadDrone(droneType: Wafle.TypeInfo) {
        var drone = new Wafle.InventoryTypeAttributes(droneType);
        if (drone.volume > this.DroneCapacityRemaining()) {
            throw "This drone will not fit in the drone bay.";
        }
        this.droneBay.push(drone);
    }
    public LoadDrones(droneType: Wafle.TypeInfo, count: number) {
        if (count < 0) {
            throw "Parameter 'count' must be a positive number.";
        }
        for (var i = 0; i < count; i++) {
            this.LoadDrone(droneType);
        }
    }

    public totalDroneAlphaDamage(): number {
        return this.emDroneAlphaDamage() + this.explosiveDroneAlphaDamage() + this.kineticDroneAlphaDamage() + this.thermalDroneAlphaDamage();
    }

    public emDroneAlphaDamage(): number {
        var dmg = 0
            for (var i = 0; i < this.droneBay.length; i++) {
            if (this.droneBay[i].droneBandwidthUsed && this.droneBay[i].isActive) {
                dmg += this.droneBay[i].emAlphaDamageActual(this, null);
            }
        }
        return dmg;
    }
    public explosiveDroneAlphaDamage(): number {
        var dmg = 0
            for (var i = 0; i < this.droneBay.length; i++) {
            if (this.droneBay[i].droneBandwidthUsed && this.droneBay[i].isActive) {
                dmg += this.droneBay[i].explosiveAlphaDamageActual(this, null);
            }
        }
        return dmg;
    }
    public kineticDroneAlphaDamage(): number {
        var dmg = 0
            for (var i = 0; i < this.droneBay.length; i++) {
            if (this.droneBay[i].droneBandwidthUsed && this.droneBay[i].isActive) {
                dmg += this.droneBay[i].kineticAlphaDamageActual(this, null);
            }
        }
        return dmg;
    }
    public thermalDroneAlphaDamage(): number {
        var dmg = 0
            for (var i = 0; i < this.droneBay.length; i++) {
            if (this.droneBay[i].droneBandwidthUsed && this.droneBay[i].isActive) {
                dmg += this.droneBay[i].thermalAlphaDamageActual(this, null);
            }
        }
        return dmg;
    }

    constructor(shipTypeId: number);
    constructor(hullName: string);
    constructor(p1: any) {
        if (typeof (p1) === "string") {
            this.hullName = p1;
        } else if (typeof (p1) === "number") {
            var ti = new Wafle.TypeInfo(<number>p1);
            ti.FindOwnGroupId();
            this.hullName = Wafle.TypeInfo.GetTypeAttributes(ti.typeId, ti.groupId).n;
        } else {
            throw "Ship must be created with valid string name of ship or typeId number.";
        }
        //todo: refactor this since we've probably already got the type ID and group ID which may be faster to use.
        this.baseShipData = new Wafle.BaseShipData(this.hullName);
        for (var hiSlot = 0; hiSlot < this.baseShipData.highSlotCount; hiSlot++) {
            this.fittingSlots.push(new Wafle.FittingSlot(Wafle.FittingSlotType.High, this));
        }
        for (var midSlot = 0; midSlot < this.baseShipData.midSlotCount; midSlot++) {
            this.fittingSlots.push(new Wafle.FittingSlot(Wafle.FittingSlotType.Mid, this));
        }
        for (var lowSlot = 0; lowSlot < this.baseShipData.lowSlotCount; lowSlot++) {
            this.fittingSlots.push(new Wafle.FittingSlot(Wafle.FittingSlotType.Low, this));
        }
        for (var rigSlot = 0; rigSlot < this.baseShipData.rigSlotCount; rigSlot++) {
            this.fittingSlots.push(new Wafle.FittingSlot(Wafle.FittingSlotType.Rig, this));
        }
    }

    public SetPilot(pilot: Wafle.Pilot) {
        this.pilot = pilot;
    }
    public isPiloted(): boolean {
        return (!!this.pilot);
    }

    public powergrid() {
        var pg = this.baseShipData.powergridOutput;
        for (var i = 0; i <= this.baseShipData.slotCount(); i++) {
            if (this.fittingSlots[i] && this.fittingSlots[i].baseShipEquipmentData) {
                pg += this.fittingSlots[i].baseShipEquipmentData.powerGridIncrease;
            }
        }
        if (this.pilot) {
            pg *= this.pilot.skills.powergridMultiplier();
        }
        return pg;
    }

    public powergridString(): string {
        return this.powergrid().toFixed(2);  //todo: remove this.
    }

    public cpu(): number {
        if (this.pilot) {
            return Wafle.Round(this.baseShipData.cpuOutput * this.pilot.skills.cpuMultiplier(), -2);
        }
        else {
            return this.baseShipData.cpuOutput;
        }
    }

    public remainingCpu(): number {
        var remaining = this.cpu();
        for (var i = 0; i < this.fittingSlots.length; i++) {
            remaining -= this.fittingSlots[i].cpuUsage();
        }
        return Wafle.Round(remaining, -2);
    }

    public remainingPowergrid(): number {
        var remaining = this.powergrid();
        for (var i = 0; i < this.fittingSlots.length; i++) {
            remaining -= this.fittingSlots[i].powergridUsage();
        }
        return Wafle.Round(remaining, -2);
    }


    public cpuString(): string {
        return this.cpu().toFixed(2);   //todo: remove this.
    }

    public shieldHP(): number {
        var baseShieldHP = this.baseShipData.shieldHP;
        for (var i = 0; i <= this.baseShipData.slotCount(); i++) {
            if (this.fittingSlots[i] && this.fittingSlots[i].baseShipEquipmentData) {
                baseShieldHP += this.fittingSlots[i].baseShipEquipmentData.shieldHPBonusAdd;
            }
        }
        if (this.pilot) {
            baseShieldHP *= this.pilot.skills.shieldHPMultiplier()
            }

        for (var i = 0; i <= this.baseShipData.slotCount(); i++) {
            if (this.fittingSlots[i] && this.fittingSlots[i].baseShipEquipmentData && this.fittingSlots[i].baseShipEquipmentData.shieldHPBonusPercent) {
                baseShieldHP *= (1 + (this.fittingSlots[i].baseShipEquipmentData.shieldHPBonusPercent(this) * 0.01));
            }
        }

        return Wafle.Round(baseShieldHP, 0);
    }

    public armorHP(): number {
        var baseArmorHP = this.baseShipData.armorHP;
        for (var i = 0; i <= this.baseShipData.slotCount(); i++) {
            if (this.fittingSlots[i] && this.fittingSlots[i].baseShipEquipmentData) {
                baseArmorHP += this.fittingSlots[i].baseShipEquipmentData.armorHPBonusAdd;
            }
        }
        if (this.pilot) {
            baseArmorHP *= this.pilot.skills.armorHPMultiplier();
        }

        for (var i = 0; i <= this.baseShipData.slotCount(); i++) {
            if (this.fittingSlots[i] && this.fittingSlots[i].baseShipEquipmentData && this.fittingSlots[i].baseShipEquipmentData.armorHPBonusPercent) {
                baseArmorHP *= (1 + (this.fittingSlots[i].baseShipEquipmentData.armorHPBonusPercent(this) * 0.01));
            }
        }
        return Wafle.Round(baseArmorHP, 0);
    }

    public structureHP(): number {
        if (this.pilot) {
            return Wafle.Round(this.baseShipData.structureHP * this.pilot.skills.structureHPMultiplier(), 0);
        }
        else {
            return this.baseShipData.structureHP;
        }
    }

    public totalHP(): number {
        return this.structureHP() + this.armorHP() + this.shieldHP();
    }

    public ShieldEMDamageReduction(): number {
        return this.ShieldSpecificDamageReduction("EM");
    }
    public ShieldExplosiveDamageReduction(): number {
        return this.ShieldSpecificDamageReduction("Explosive");
    }
    public ShieldKineticDamageReduction(): number {
        return this.ShieldSpecificDamageReduction("Kinetic");
    }
    public ShieldThermalDamageReduction(): number {
        return this.ShieldSpecificDamageReduction("Thermal");
    }

    private ShieldSpecificDamageReduction(damageTypeName: string): number {
        var damageTakenPercent = 1 - this.baseShipData.shieldResists[damageTypeName].baseDamageReductionPercentage();
        var damageTakenMultipliers: number[] = [];
        for (var i = 0; i <= this.baseShipData.slotCount(); i++) {
            if (this.fittingSlots[i] && this.fittingSlots[i].baseShipEquipmentData && this.fittingSlots[i].baseShipEquipmentData.shieldResists) {
                if (this.fittingSlots[i].baseShipEquipmentData.shieldResists.HasDiminishingReturns === true) {
                    var dtm = 1 - this.fittingSlots[i].baseShipEquipmentData.shieldResists[damageTypeName].baseDamageReductionPercentage();
                    if (dtm !== 1.0) {
                        damageTakenMultipliers.push(dtm);
                    }
                } else {
                    damageTakenPercent = damageTakenPercent * (1 - this.fittingSlots[i].baseShipEquipmentData.shieldResists[damageTypeName].baseDamageReductionPercentage());
                }
            }
        }
        return 1 - this.multiplyPercentages(damageTakenPercent, damageTakenMultipliers, true);
    }

    public ArmorEMDamageReduction(): number {
        return this.ArmorSpecificDamageReduction("EM");
    }

    public ArmorExplosiveDamageReduction(): number {
        return this.ArmorSpecificDamageReduction("Explosive");
    }

    public ArmorKineticDamageReduction(): number {
        return this.ArmorSpecificDamageReduction("Kinetic");
    }

    public ArmorThermalDamageReduction(): number {
        return this.ArmorSpecificDamageReduction("Thermal");
    }

    private ArmorSpecificDamageReduction(damageTypeName: string): number {
        var damageTakenPercent = 1 - this.baseShipData.armorResists[damageTypeName].baseDamageReductionPercentage();
        var damageTakenMultipliers: number[] = [];
        for (var i = 0; i <= this.baseShipData.slotCount(); i++) {
            if (this.fittingSlots[i] && this.fittingSlots[i].baseShipEquipmentData && this.fittingSlots[i].baseShipEquipmentData.armorResists) {
                if (this.fittingSlots[i].baseShipEquipmentData.armorResists.HasDiminishingReturns === true) {
                    var dtm = 1 - this.fittingSlots[i].baseShipEquipmentData.armorResists[damageTypeName].baseDamageReductionPercentage();
                    if (Wafle.Data.AffectedByArmorCompensationSkills(this.fittingSlots[i].baseShipEquipmentData.typeInfo())) {
                        var compensationSkillName = damageTypeName.replace("Thermal", "Thermic") + "ArmorCompensation";
                        dtm = 1 - ((1 - dtm) * (1 + (this.pilot.skills[compensationSkillName] * 0.05)))
                        }
                    if (dtm !== 1.0) {
                        damageTakenMultipliers.push(dtm);
                    }
                } else {
                    damageTakenPercent = damageTakenPercent * (1 - this.fittingSlots[i].baseShipEquipmentData.armorResists[damageTypeName].baseDamageReductionPercentage());
                }
            }
        }
        return 1 - this.multiplyPercentages(damageTakenPercent, damageTakenMultipliers, true);
    }


    //todo: refactor similarly to "ArmorSpecificDamageReduction"
    public HullEMDamageReduction(): number {
        var damageTakenPercent = 1 - this.baseShipData.hullResists.EM.baseDamageReductionPercentage();
        var damageTakenMultipliers: number[] = [];
        for (var i = 0; i <= this.baseShipData.slotCount(); i++) {
            if (this.fittingSlots[i] && this.fittingSlots[i].baseShipEquipmentData && this.fittingSlots[i].baseShipEquipmentData.hullResists) {
                if (this.fittingSlots[i].baseShipEquipmentData.hullResists.HasDiminishingReturns === true) {
                    damageTakenMultipliers.push(1 - this.fittingSlots[i].baseShipEquipmentData.hullResists.EM.baseDamageReductionPercentage());
                } else {
                    damageTakenPercent = damageTakenPercent * (1 - this.fittingSlots[i].baseShipEquipmentData.hullResists.EM.baseDamageReductionPercentage());
                }
            }
        }
        return 1 - this.multiplyPercentages(damageTakenPercent, damageTakenMultipliers, true);
    }

    //todo: refactor similarly to "ArmorSpecificDamageReduction"
    public HullExplosiveDamageReduction(): number {
        var damageTakenPercent = 1 - this.baseShipData.hullResists.Explosive.baseDamageReductionPercentage();
        var damageTakenMultipliers: number[] = [];
        for (var i = 0; i <= this.baseShipData.slotCount(); i++) {
            if (this.fittingSlots[i] && this.fittingSlots[i].baseShipEquipmentData && this.fittingSlots[i].baseShipEquipmentData.hullResists) {
                if (this.fittingSlots[i].baseShipEquipmentData.hullResists.HasDiminishingReturns === true) {
                    damageTakenMultipliers.push(1 - this.fittingSlots[i].baseShipEquipmentData.hullResists.Explosive.baseDamageReductionPercentage());
                } else {
                    damageTakenPercent = damageTakenPercent * (1 - this.fittingSlots[i].baseShipEquipmentData.hullResists.Explosive.baseDamageReductionPercentage());
                }
            }
        }
        return 1 - this.multiplyPercentages(damageTakenPercent, damageTakenMultipliers, true);
    }

    //todo: refactor similarly to "ArmorSpecificDamageReduction"
    public HullKineticDamageReduction(): number {
        var damageTakenPercent = 1 - this.baseShipData.hullResists.Kinetic.baseDamageReductionPercentage();
        var damageTakenMultipliers: number[] = [];
        for (var i = 0; i <= this.baseShipData.slotCount(); i++) {
            if (this.fittingSlots[i] && this.fittingSlots[i].baseShipEquipmentData && this.fittingSlots[i].baseShipEquipmentData.hullResists) {
                if (this.fittingSlots[i].baseShipEquipmentData.hullResists.HasDiminishingReturns === true) {
                    damageTakenMultipliers.push(1 - this.fittingSlots[i].baseShipEquipmentData.hullResists.Kinetic.baseDamageReductionPercentage());
                } else {
                    damageTakenPercent = damageTakenPercent * (1 - this.fittingSlots[i].baseShipEquipmentData.hullResists.Kinetic.baseDamageReductionPercentage());
                }
            }
        }
        return 1 - this.multiplyPercentages(damageTakenPercent, damageTakenMultipliers, true);
    }
    //todo: refactor similarly to "ArmorSpecificDamageReduction"
    public HullThermalDamageReduction(): number {
        var damageTakenPercent = 1 - this.baseShipData.hullResists.Thermal.baseDamageReductionPercentage();
        var damageTakenMultipliers: number[] = [];
        for (var i = 0; i <= this.baseShipData.slotCount(); i++) {
            if (this.fittingSlots[i] && this.fittingSlots[i].baseShipEquipmentData && this.fittingSlots[i].baseShipEquipmentData.hullResists) {
                if (this.fittingSlots[i].baseShipEquipmentData.hullResists.HasDiminishingReturns === true) {
                    damageTakenMultipliers.push(1 - this.fittingSlots[i].baseShipEquipmentData.hullResists.Thermal.baseDamageReductionPercentage());
                } else {
                    damageTakenPercent = damageTakenPercent * (1 - this.fittingSlots[i].baseShipEquipmentData.hullResists.Thermal.baseDamageReductionPercentage());
                }
            }
        }
        return 1 - this.multiplyPercentages(damageTakenPercent, damageTakenMultipliers, true);
    }

    public MaxVelocity(): number {
        var vel = this.baseShipData.maxVelocity;
        if (this.pilot) {
            vel = vel * this.pilot.skills.velocityMultiplier();
        }
        var percentages: number[] = [];
        for (var i = 0; i <= this.baseShipData.slotCount(); i++) {
            if (this.fittingSlots[i] && this.fittingSlots[i].baseShipEquipmentData && this.fittingSlots[i].baseShipEquipmentData.baseVelocityMultiplier) {
                if (this.fittingSlots[i].baseShipEquipmentData.actualVelocityMultiplier) {
                    percentages.push((1 + (this.fittingSlots[i].baseShipEquipmentData.actualVelocityMultiplier(this) / 100)));
                } else {
                    percentages.push((1 + (this.fittingSlots[i].baseShipEquipmentData.baseVelocityMultiplier / 100)));
                }
            }
        }
        return Wafle.Round(this.multiplyPercentages(vel, percentages), -2);
    }

    private multiplyPercentages(startValue: number, percentages: number[], closerToZeroIsMostSignificant = false): number {
        if (closerToZeroIsMostSignificant) {
            percentages = this.SortArrayByAscendingAbsoluteValue(percentages);
        } else {
            percentages = this.SortArrayByDescendingAbsoluteValue(percentages);
        }
        var growerCount = 0, shrinkerCount = 0;
        for (var i = 0; i < percentages.length; i++) {
            if (percentages[i] > 1) {
                startValue *= (1 + ((percentages[i] - 1) * Wafle.dimEffRatio(growerCount)));
                growerCount += 1;
            } else if (percentages[i] < 1) {
                startValue *= (1 - ((1 - percentages[i]) * Wafle.dimEffRatio(shrinkerCount)));
                shrinkerCount += 1;
            }
        }
        return startValue;
    }

    private SortArrayByAscendingAbsoluteValue(theArray: number[]): number[] {
        return theArray.sort(function (a, b) {return Math.abs(a) - Math.abs(b) });
    }

    private SortArrayByDescendingAbsoluteValue(theArray: number[]): number[] {
        return theArray.sort(function (a, b) {return Math.abs(b) - Math.abs(a) });
    }

    public emDamageMultiplier(attackingModule: Wafle.InventoryTypeAttributes, charge: Wafle.InventoryTypeAttributes): number {
        var multiplier = Wafle.Data.ShipOmniDamageMultiplier(this, attackingModule, charge);
        if (this.pilot) {
            multiplier *= this.pilot.OmniDamageMultiplier(attackingModule);
        }
        return multiplier;
    }
    public explosiveDamageMultiplier(attackingModule: Wafle.InventoryTypeAttributes, charge: Wafle.InventoryTypeAttributes): number {
        var multiplier = Wafle.Data.ShipOmniDamageMultiplier(this, attackingModule, charge);
        if (this.pilot) {
            multiplier *= this.pilot.OmniDamageMultiplier(attackingModule);
        }
        return multiplier;
    }
    public kineticDamageMultiplier(attackingModule: Wafle.InventoryTypeAttributes, charge: Wafle.InventoryTypeAttributes): number {
        var multiplier = Wafle.Data.ShipOmniDamageMultiplier(this, attackingModule, charge);
        if (this.pilot) {
            multiplier *= this.pilot.OmniDamageMultiplier(attackingModule);
        }
        return multiplier;
    }
    public thermalDamageMultiplier(attackingModule: Wafle.InventoryTypeAttributes, charge: Wafle.InventoryTypeAttributes): number {
        var multiplier = Wafle.Data.ShipOmniDamageMultiplier(this, attackingModule, charge);
        if (this.pilot) {
            multiplier *= this.pilot.OmniDamageMultiplier(attackingModule);
        }
        return multiplier;
    }



    public totalAlphaDamageActual(): number {
        var total = 0
            for (var i = 0; i < this.fittingSlots.length; i++) {
            total += this.fittingSlots[i].baseShipEquipmentData.totalAlphaDamageActual(this, this.fittingSlots[i].LoadedCharge());
        }
        return total;
    }

}

export = Ship;