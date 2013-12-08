///<reference path="wafleInterfaces.ts"/>
///<reference path="wafleData.ts"/>
///<reference path="wafleCuratedData.ts"/>

/*

The MIT License (MIT)

Copyright (c) 2013 Shamna Skor

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

@license
*/

/* Todo:
. more rigs and other modules.
. modules that use capacitor - adjust stats for active or inactive.
. track capacitor usage of ship/cap stability
. cruisers, bc, bs, other
. align time, warp speed, other navigation concerns
. Offline Modules
. Overheating
. UI
. track calibration remaining for rigs.
*/



module Wafle {

    export var Version: string = "0.1.0-alpha.6";

    export enum RaceType {
        Unknown = 0, Caldari = 1, Minmatar = 2, Amarr = 4, Gallente = 8, ORE
    }

    export enum FittingSlotType {
        Unknown, High, Mid, Low, Rig
    }

    export enum RigSize {
        Unknown=0, Small=1, Medium=2, Large=3, Capital=4
    }

    export enum InventoryGroups {
        Unknown = -1, Frigate = 25, ShieldExtender = 38, Propulsion = 46, WarpScrambler = 52, EnergyWeapon= 53, ProjectileWeapon= 55,
        Gyrostabilizer=59, DamageControl= 60, ArmorRepairUnit = 62, StasisWeb= 65, EnergyVampire= 68, EnergyDestabilizer=71,
        HybridWeapon= 74, ShieldHardener=77, ProjectileAmmo = 83, HybridCharge=85, FrequencyCrystal=86,
        ArmorCoating= 98, CombatDrone=100, HeatSink= 205, MagneticFieldStabilizer= 302, ArmorRepairProjector = 325,
        ArmorPlatingEnergized = 326, ArmorPlate = 329, AuxiliaryPowerCore= 339, BallisticControlSystem= 367,
        AdvancedAutocannonAmmo= 372, AdvancedRailgunCharge= 373, AdvancedBeamLaserCrystal= 374, AdvancedPulseLaserCrystal= 375,
        AdvancedArtilleryAmmo=376, AdvancedBlasterCharge=377, TargetPainter=379, LightMissile= 384, HeavyMissile= 385, Rocket= 387,
        FoFHeavyMissile= 395, RocketLauncher= 507, LightMissileLauncher= 509, HeavyMissileLauncher= 510,
        RapidLightMissileLauncher= 511, AdvancedRocket= 648,AdvancedLightMissile= 653,
        AdvancedHeavyAssaultMissile=654, AdvancedHeavyMissile=655, Nanofiber= 763,
        HeavyAssaultMissileLauncher= 771, HeavyAssaultMissile=772, ArmorRig= 773, ShieldRig= 774, NavigationRig=782
    }

    

    export function Round(value: number, decimalPlace: number) {
        return Math.round(value * Math.pow(10, decimalPlace * -1)) * Math.pow(10, decimalPlace);
    }

    export function e() {
        return 2.718281828459;
    }

    /**
    ** Diminishing effectiveness ratio.  The most powerful modifier should be passed in with 0.
    **  The second most powerful modifier should be passed in with 1, etc.
    **/
    export function dimEffRatio(zeroBasedIndex: number) {
        return Math.pow(e(), (-0.140274 * Math.pow((zeroBasedIndex), 2)));
    }
    
    export class FittingSlot {
        private loadedCharge: BaseShipEquipmentData = null;
        public baseShipEquipmentData: BaseShipEquipmentData = null;
        public cpuUsage(): number {
            if (this.baseShipEquipmentData) {
                return this.baseShipEquipmentData.cpuUsageActual(this.ship);
            } else {
                return 0;
            }
        }
        public powergridUsage(): number {
            if (this.baseShipEquipmentData) {
                return this.baseShipEquipmentData.powergridUsageActual(this.ship);
            } else {
                return 0;
            }
        }

        
        constructor(public slotType: FittingSlotType, public ship: Ship) {
        }


        public SetModule(typeId: number, groupId?: number) {

            var calcGroupId: number;
            if (groupId) {
                calcGroupId = groupId;
            } else {
                calcGroupId = Wafle.Data.TypeToGroupIDMapping[typeId.toString()]; //todo: refactor to use TypeInfo
            }

            if (!calcGroupId) {
                throw "typeId " + typeId.toString() + ' is not a member of a known inventory group.';
            }
            this.baseShipEquipmentData = new BaseShipEquipmentData(calcGroupId, typeId);
            if (this.baseShipEquipmentData) {
                if (this.baseShipEquipmentData.slotUsed !== this.slotType) {
                    var errorMessage = "Module " + this.baseShipEquipmentData.name + ' only fits in a ' + FittingSlotType[this.baseShipEquipmentData.slotUsed] + ' slot.';
                    this.baseShipEquipmentData = null;
                    throw errorMessage;
                }
            }
        }

        public LoadedCharge() {
            return this.loadedCharge;
        }

        public LoadCharge(type: TypeInfo) {
            if (!Wafle.Data.IsLoadableCharge(type)) {
                throw "Type " + type.typeId + " in group " + type.groupId + " is not a loadable charge.";
            }
            var charge = new BaseShipEquipmentData(type);
            if (charge.launcherGroup !== this.baseShipEquipmentData.groupId) {
                throw "Type " + type.typeId + " is not compatible with a launcher of type " + this.baseShipEquipmentData.name + ".";
            }
            this.loadedCharge = charge;
        }

        public totalAlphaDamage(): number {
            if (this.baseShipEquipmentData) {
                return this.baseShipEquipmentData.totalAlphaDamageActual(this.ship, this.loadedCharge);
            } else {
                return 0;
            }
        }
    }

    export class Ship {
        public hullName: string;
        public baseShipData: BaseShipData;
        public pilot: Pilot = null;
        public fittingSlots: FittingSlot[] = [];
        public droneBay: BaseShipEquipmentData[] = [];
        public cargoHold: BaseShipEquipmentData[] = [];

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
        public LoadDrone(droneType: TypeInfo) {
            var drone = new BaseShipEquipmentData(droneType);
            if (drone.volume > this.DroneCapacityRemaining()) {
                throw "This drone will not fit in the drone bay.";
            }
            this.droneBay.push(drone);
        }
        public LoadDrones(droneType: TypeInfo, count: number) {
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
                var ti = new TypeInfo(<number>p1);
                ti.FindGroupId();
                this.hullName = Wafle.Data.Types[ti.groupId][ti.typeId].n;
            } else {
                throw "Ship must be created with valid string name of ship or typeId number.";
            }
            this.baseShipData = new BaseShipData(this.hullName);
            for (var hiSlot = 0; hiSlot < this.baseShipData.highSlotCount; hiSlot++) {
                this.fittingSlots.push(new FittingSlot(FittingSlotType.High, this));
            }
            for (var midSlot = 0; midSlot < this.baseShipData.midSlotCount; midSlot++) {
                this.fittingSlots.push(new FittingSlot(FittingSlotType.Mid, this));
            }
            for (var lowSlot = 0; lowSlot < this.baseShipData.lowSlotCount; lowSlot++) {
                this.fittingSlots.push(new FittingSlot(FittingSlotType.Low, this));
            }
            for (var rigSlot = 0; rigSlot < this.baseShipData.rigSlotCount; rigSlot++) {
                this.fittingSlots.push(new FittingSlot(FittingSlotType.Rig, this));
            }
        }

        public SetPilot(pilot: Pilot) {
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

        public powergridString() : string {
            return this.powergrid().toFixed(2);
        }

        public cpu() : number {
            if (this.pilot) {
                return Round(this.baseShipData.cpuOutput * this.pilot.skills.cpuMultiplier(), -2);
            }
            else {
                return this.baseShipData.cpuOutput;
            }
        }

        public remainingCpu() : number {
            var remaining = this.cpu();
            for (var i = 0; i < this.fittingSlots.length; i++) {
                remaining -= this.fittingSlots[i].cpuUsage();
            }
            return Round(remaining, -2);
        }

        public remainingPowergrid() : number {
            var remaining = this.powergrid();
            for (var i = 0; i < this.fittingSlots.length; i++) {
                remaining -= this.fittingSlots[i].powergridUsage();
            }
            return Round(remaining, -2);
        }


        public cpuString() : string {
            return this.cpu().toFixed(2);
        }

        public shieldHP() : number {
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

            return Round(baseShieldHP,0);
        }

        public armorHP() : number {
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
            return Round(baseArmorHP,0);
        }

        public structureHP() : number {
            if (this.pilot) {
                return Round(this.baseShipData.structureHP * this.pilot.skills.structureHPMultiplier(), 0);
            }
            else {
                return this.baseShipData.structureHP;
            }
        }

        public totalHP() : number {
            return this.structureHP() + this.armorHP() + this.shieldHP();
        }
        //todo: refactor similarly to "ArmorSpecificDamageReduction"
        public ShieldEMDamageReduction(): number {
            var damageTakenPercent = 1 - this.baseShipData.shieldResists.EM.baseDamageReductionPercentage();
            var damageTakenMultipliers: number[] = [];
            for (var i = 0; i <= this.baseShipData.slotCount(); i++) {
                if (this.fittingSlots[i] && this.fittingSlots[i].baseShipEquipmentData && this.fittingSlots[i].baseShipEquipmentData.shieldResists) {
                    if (this.fittingSlots[i].baseShipEquipmentData.shieldResists.HasDiminishingReturns === true) {
                        damageTakenMultipliers.push(1 - this.fittingSlots[i].baseShipEquipmentData.shieldResists.EM.baseDamageReductionPercentage());
                    } else {
                        damageTakenPercent = damageTakenPercent * (1 - this.fittingSlots[i].baseShipEquipmentData.shieldResists.EM.baseDamageReductionPercentage());
                    }
                }
            }
            return 1 - this.multiplyPercentages(damageTakenPercent, damageTakenMultipliers, true);
        }
        //todo: refactor similarly to "ArmorSpecificDamageReduction"
        public ShieldExplosiveDamageReduction(): number {
            var damageTakenPercent = 1 - this.baseShipData.shieldResists.Explosive.baseDamageReductionPercentage();
            var damageTakenMultipliers: number[] = [];
            for (var i = 0; i <= this.baseShipData.slotCount(); i++) {
                if (this.fittingSlots[i] && this.fittingSlots[i].baseShipEquipmentData && this.fittingSlots[i].baseShipEquipmentData.shieldResists) {
                    if (this.fittingSlots[i].baseShipEquipmentData.shieldResists.HasDiminishingReturns === true) {
                        damageTakenMultipliers.push(1 - this.fittingSlots[i].baseShipEquipmentData.shieldResists.Explosive.baseDamageReductionPercentage());
                    } else {
                        damageTakenPercent = damageTakenPercent * (1 - this.fittingSlots[i].baseShipEquipmentData.shieldResists.Explosive.baseDamageReductionPercentage());
                    }
                }
            }
            return 1 - this.multiplyPercentages(damageTakenPercent, damageTakenMultipliers, true);
        }

        //todo: refactor similarly to "ArmorSpecificDamageReduction"
        public ShieldKineticDamageReduction(): number {
            var damageTakenPercent = 1 - this.baseShipData.shieldResists.Kinetic.baseDamageReductionPercentage();
            var damageTakenMultipliers: number[] = [];
            for (var i = 0; i <= this.baseShipData.slotCount(); i++) {
                if (this.fittingSlots[i] && this.fittingSlots[i].baseShipEquipmentData && this.fittingSlots[i].baseShipEquipmentData.shieldResists) {
                    if (this.fittingSlots[i].baseShipEquipmentData.shieldResists.HasDiminishingReturns === true) {
                        damageTakenMultipliers.push(1 - this.fittingSlots[i].baseShipEquipmentData.shieldResists.Kinetic.baseDamageReductionPercentage());
                    } else {
                        damageTakenPercent = damageTakenPercent * (1 - this.fittingSlots[i].baseShipEquipmentData.shieldResists.Kinetic.baseDamageReductionPercentage());
                    }
                }
            }
            return 1 - this.multiplyPercentages(damageTakenPercent, damageTakenMultipliers, true);
        }
        //todo: refactor similarly to "ArmorSpecificDamageReduction"
        public ShieldThermalDamageReduction(): number {
            var damageTakenPercent = 1 - this.baseShipData.shieldResists.Thermal.baseDamageReductionPercentage();
            var damageTakenMultipliers: number[] = [];
            for (var i = 0; i <= this.baseShipData.slotCount(); i++) {
                if (this.fittingSlots[i] && this.fittingSlots[i].baseShipEquipmentData && this.fittingSlots[i].baseShipEquipmentData.shieldResists) {
                    if (this.fittingSlots[i].baseShipEquipmentData.shieldResists.HasDiminishingReturns === true) {
                        damageTakenMultipliers.push(1 - this.fittingSlots[i].baseShipEquipmentData.shieldResists.Thermal.baseDamageReductionPercentage());
                    } else {
                        damageTakenPercent = damageTakenPercent * (1 - this.fittingSlots[i].baseShipEquipmentData.shieldResists.Thermal.baseDamageReductionPercentage());
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
                            var compensationSkillName = damageTypeName.replace("Thermal","Thermic") + "ArmorCompensation";
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
            return Round(this.multiplyPercentages(vel,percentages),-2);
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
                    startValue *= (1 + ((percentages[i]-1) * dimEffRatio(growerCount)));
                    growerCount += 1;
                } else if (percentages[i] < 1) {
                    startValue *= (1 - ((1 - percentages[i]) * dimEffRatio(shrinkerCount)));
                    shrinkerCount += 1;
                }
            }
            return startValue;
        }

        private SortArrayByAscendingAbsoluteValue(theArray: number[]) : number[] {
            return theArray.sort(function (a, b) {return Math.abs(a) - Math.abs(b) });
        }

        private SortArrayByDescendingAbsoluteValue(theArray: number[]) : number[] {
            return theArray.sort(function (a, b) {return Math.abs(b) - Math.abs(a) });
        }

        public emDamageMultiplier(attackingModule: BaseShipEquipmentData, charge: BaseShipEquipmentData): number {
            var multiplier = Wafle.Data.ShipOmniDamageMultiplier(this, attackingModule, charge);
            if (this.pilot) {
                multiplier *= this.pilot.OmniDamageMultiplier(attackingModule);
            }
            return multiplier;
        }
        public explosiveDamageMultiplier(attackingModule: BaseShipEquipmentData, charge: BaseShipEquipmentData): number{
            var multiplier = Wafle.Data.ShipOmniDamageMultiplier(this, attackingModule, charge);
            if (this.pilot) {
                multiplier *= this.pilot.OmniDamageMultiplier(attackingModule);
            }
            return multiplier;
        }
        public kineticDamageMultiplier(attackingModule: BaseShipEquipmentData, charge: BaseShipEquipmentData): number {
            var multiplier = Wafle.Data.ShipOmniDamageMultiplier(this, attackingModule, charge);
            if (this.pilot) {
                multiplier *= this.pilot.OmniDamageMultiplier(attackingModule);
            }
            return multiplier;
        }
        public thermalDamageMultiplier(attackingModule: BaseShipEquipmentData, charge: BaseShipEquipmentData): number {
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

    export class Pilot {
        public skills: Skills;
        constructor(public name: string) {
            this.skills = new Skills;
        }

        public OmniDamageMultiplier(attackingModule: BaseShipEquipmentData): number {
            var mult = 1.0;
            if (attackingModule.groupId === InventoryGroups.ProjectileWeapon) {
                mult *= this.skills.surgicalStrikeDamageMultiplier();
                switch (attackingModule.chargeSize) {
                    case 1:
                        mult *= this.skills.smallProjectileTurretDamageMultiplier();
                        break;
                }
            } else if (attackingModule.groupId === InventoryGroups.HybridWeapon) {
                mult *= this.skills.surgicalStrikeDamageMultiplier();
                switch (attackingModule.chargeSize) {
                    case 1:
                        mult *= this.skills.smallHybridTurretDamageMultiplier();
                        if (attackingModule.techLevel == 2) {
                            if (Wafle.Data.IsBlaster(attackingModule)) {
                                mult *= this.skills.smallT2BlasterDamageMultiplier();
                            } else if (Wafle.Data.IsRailgun(attackingModule)) {
                                mult *= this.skills.smallT2RailgunDamageMultiplier();
                            }
                        }
                        break;
                }
            } else if (attackingModule.groupId === InventoryGroups.RocketLauncher) {
                mult *= this.skills.rocketsDamageMultiplier() * this.skills.warheadDamageMultiplier();
            } else if (attackingModule.groupId === InventoryGroups.LightMissileLauncher) {
                mult *= this.skills.lightMissilesDamageMultiplier() * this.skills.warheadDamageMultiplier();
            }
            return mult;
        }

    }

    export class Skills {
        PowerGridManagement: number = 0;
        CPUManagement: number = 0;
        HullUpgrades: number = 0;
        Mechanics: number = 0;
        ShieldManagement: number = 0;
        ShieldUpgrades: number = 0;
        WeaponUpgrades: number = 0;
        AdvancedWeaponUpgrades: number = 0;
        Navigation: number = 0;
        ArmorRigging: number = 0;
        AstronauticsRigging: number = 0;
        EMArmorCompensation: number = 0;
        ExplosiveArmorCompensation: number = 0;
        KineticArmorCompensation: number = 0;
        ThermicArmorCompensation: number = 0;
        GallenteFrigate: number = 0;
        MinmatarFrigate: number = 0;
        CaldariFrigate: number = 0;
        AmarrFrigate: number = 0;
        GallenteCruiser: number = 0;
        MinmatarCruiser: number = 0;
        CaldariCruiser: number = 0;
        AmarrCruiser: number = 0;
        SmallProjectileTurret: number = 0;
        SurgicalStrike: number = 0;
        Rockets: number = 0;
        LightMissiles: number = 0;
        WarheadUpgrades: number = 0;
        SmallHybridTurret: number = 0;
        SmallRailgunSpecialization: number = 0;
        SmallBlasterSpecialization: number = 0;
        Drones: number = 0;
        DroneInterfacing: number = 0;
        CombatDroneOperation: number = 0;
        GallenteDroneSpecialization: number = 0;
        MinmatarDroneSpecialization: number = 0;
        CaldariDroneSpecialization: number = 0;
        AmarrDroneSpecialization: number = 0;



        public SetAllSkills(level: number) {
            this.PowerGridManagement = level;
            this.CPUManagement = level;
            this.HullUpgrades = level;
            this.Mechanics = level;
            this.ShieldManagement = level;
            this.ShieldUpgrades = level;
            this.WeaponUpgrades = level;
            this.AdvancedWeaponUpgrades = level;
            this.Navigation = level;
            this.ArmorRigging = level;
            this.AstronauticsRigging = level;
            this.GallenteFrigate = level;
            this.MinmatarFrigate = level;
            this.CaldariFrigate = level;
            this.AmarrFrigate = level;
            this.GallenteCruiser = level;
            this.MinmatarCruiser = level;
            this.CaldariCruiser = level;
            this.AmarrCruiser = level;
            this.SmallProjectileTurret = level;
            this.SmallHybridTurret = level;
            this.SmallRailgunSpecialization = level;
            this.SmallBlasterSpecialization = level;
            this.SurgicalStrike = level;
            this.Rockets = level;
            this.LightMissiles = level;
            this.WarheadUpgrades = level;
            this.EMArmorCompensation = level;
            this.ExplosiveArmorCompensation = level;
            this.KineticArmorCompensation = level;
            this.ThermicArmorCompensation = level;
            this.Drones = level;
            this.DroneInterfacing = level;
            this.CombatDroneOperation = level;
            this.GallenteDroneSpecialization = level;
            this.MinmatarDroneSpecialization = level;
            this.CaldariDroneSpecialization = level;
            this.AmarrDroneSpecialization = level;
        }

        public cpuMultiplier(): number {
            return 1.0 + (this.CPUManagement * 0.05);
        }
        public powergridMultiplier(): number {
            return 1.0 + (this.PowerGridManagement * 0.05);
        }
        public shieldHPMultiplier(): number {
            return 1.0 + (this.ShieldManagement * 0.05);
        }
        public armorHPMultiplier(): number {
            return 1.0 + (this.HullUpgrades * 0.05);
        }
        public structureHPMultiplier(): number {
            return 1.0 + (this.Mechanics * 0.05);
        }
        public velocityMultiplier(): number {
            return 1.0 + (this.Navigation * 0.05);
        }
        public smallProjectileTurretDamageMultiplier(): number {
            return 1.0 + (this.SmallProjectileTurret * 0.05);
        }
        public smallHybridTurretDamageMultiplier(): number {
            return 1.0 + (this.SmallHybridTurret * 0.05);
        }
        public smallT2BlasterDamageMultiplier(): number {
            return 1.0 + (this.SmallBlasterSpecialization * 0.02);
        }
        public smallT2RailgunDamageMultiplier(): number {
            return 1.0 + (this.SmallRailgunSpecialization * 0.02);
        }
        public surgicalStrikeDamageMultiplier(): number {
            return 1.0 + (this.SurgicalStrike * 0.03);
        }
        public rocketsDamageMultiplier(): number {
            return 1.0 + (this.Rockets * 0.05);
        }
        public lightMissilesDamageMultiplier(): number {
            return 1.0 + (this.LightMissiles * 0.05);
        }
        public warheadDamageMultiplier(): number {
            return 1.0 + (this.WarheadUpgrades * 0.02);
        }


    }

    export class CpuFormulas {
        public static standardWeapon(ship: Ship, baseCpu: number) {
            if (ship && ship.pilot) {
                return baseCpu - (ship.pilot.skills.WeaponUpgrades * 0.05 * baseCpu);
            } else {
                return baseCpu;
            }
        }

        public static standardModule(ship: Ship, baseCpu: number) {
            if (baseCpu) {
                return baseCpu;
            } else {
                return 0;
            }
        }
    }

    export class PowergridFormulas {
        public static standardWeapon(ship: Ship, basePowergrid: number) {
            if (ship && ship.pilot) {
                return basePowergrid - (ship.pilot.skills.AdvancedWeaponUpgrades * 0.02 * basePowergrid);
            } else {
                return basePowergrid;
            }
        }

        public static standardModule(ship: Ship, basePowergrid: number) {
            if (basePowergrid) {
                return basePowergrid;
            } else {
                return 0;
            }
        }
        public static shieldUpgradeModule(ship: Ship, basePowergrid: number) {
            if (basePowergrid) {
                if (ship.pilot) {
                    return basePowergrid * (1 - (0.05 * ship.pilot.skills.ShieldUpgrades));
                } else {
                    return basePowergrid;
                }
            } else {
                return 0;
            }
        }
    }

    
    function ShipEquipmentLoader(data: IEveInventoryTypeAttributes, target: BaseShipEquipmentData) {
        target.name = data.n;
        target.description = data.d;
        target.cpuUsage = (data.cpu || 0);
        target.powergridUsage = (data.pg || 0);
        target.metaLevel = data.mta;
        target.marketGroup = data.mg;
        target.parentMarketGroup = data.pmg;
        target.volume = data.v;
        target.techLevel = data.tl;
        target.race = data.r;
    }

    function TurretLoader(data: IEveInventoryTypeAttributes, target: BaseShipEquipmentData) {
        target.optimalRange = data.opt;
        target.accuracyFalloff = data.acc;
        target.rateOfFire = data.rof;
        target.trackingSpeed = data.trk;
        target.damageMultiplier = data.dmg;
        target.slotUsed = FittingSlotType.High;
        target.launcherGroup = data.lg;
        target.chargeSize = data.cs;
        target.cpuUsageActual = (ship: Ship) => CpuFormulas.standardWeapon(ship, target.cpuUsage);
        target.powergridUsageActual = (ship: Ship) => PowergridFormulas.standardWeapon(ship, target.powergridUsage);
        target.emAlphaDamageActual = (ship: Ship, charge: BaseShipEquipmentData) => {
            return charge.emBaseDamage * target.damageMultiplier * ship.emDamageMultiplier(target, charge);
        };
        target.explosiveAlphaDamageActual = (ship: Ship, charge: BaseShipEquipmentData) => {
            return charge.explosiveBaseDamage * target.damageMultiplier * ship.explosiveDamageMultiplier(target, charge);
        };
        target.kineticAlphaDamageActual = (ship: Ship, charge: BaseShipEquipmentData) => {
            return charge.kineticBaseDamage * target.damageMultiplier * ship.kineticDamageMultiplier(target, charge);
        };
        target.thermalAlphaDamageActual = (ship: Ship, charge: BaseShipEquipmentData) => {
            return charge.thermalBaseDamage * target.damageMultiplier * ship.thermalDamageMultiplier(target, charge);
        };
    }


    function LauncherLoader(data: IEveInventoryTypeAttributes, target: BaseShipEquipmentData) {
        target.rateOfFire = data.rof;
        target.slotUsed = FittingSlotType.High;
        target.cpuUsageActual = (ship: Ship) => CpuFormulas.standardWeapon(ship, target.cpuUsage);
        target.powergridUsageActual = (ship: Ship) => PowergridFormulas.standardWeapon(ship, target.powergridUsage);
        target.launcherGroup = data.lg;
        target.emAlphaDamageActual = (ship: Ship, charge: BaseShipEquipmentData) => {
            return charge.emBaseDamage * ship.emDamageMultiplier(target, charge);
        };
        target.explosiveAlphaDamageActual = (ship: Ship, charge: BaseShipEquipmentData) => {
            return charge.explosiveBaseDamage * ship.explosiveDamageMultiplier(target, charge);
        };
        target.kineticAlphaDamageActual = (ship: Ship, charge: BaseShipEquipmentData) => {
            return charge.kineticBaseDamage * ship.kineticDamageMultiplier(target, charge);
        };
        target.thermalAlphaDamageActual = (ship: Ship, charge: BaseShipEquipmentData) => {
            return charge.thermalBaseDamage * ship.thermalDamageMultiplier(target, charge);
        };
    }

    function MidProjectedEffectLoader(data: IEveInventoryTypeAttributes, target: BaseShipEquipmentData) {
        target.optimalRange = data.opt;
        target.accuracyFalloff = data.acc;
        target.slotUsed = FittingSlotType.Mid;
        if (data.srb) {
            target.signatureRadiusBonusOfTarget = data.srb;
        }
        if (data.ad) {
            target.activationDuration = data.ad;
        }
        target.cpuUsageActual = function (ship: Ship) {
            return CpuFormulas.standardModule(ship, this.cpuUsage)
        }
        target.powergridUsageActual = function (ship: Ship) {
            return PowergridFormulas.standardModule(ship, this.powergridUsage);
        }
    }

    function PropulsionLoader(data: IEveInventoryTypeAttributes, target: BaseShipEquipmentData) {
        target.speedFactor = data.spd;
        if (data.srb) {
            target.signatureRadiusBonus = data.srb;
        }
        target.slotUsed = FittingSlotType.Mid;
        target.cpuUsageActual = function (ship: Ship) {
            return CpuFormulas.standardModule(ship, this.cpuUsage)
        }
        target.powergridUsageActual = function (ship: Ship) {
            return PowergridFormulas.standardModule(ship, this.powergridUsage);
        }
    }

    function ShieldExtenderLoader(data: IEveInventoryTypeAttributes, target: BaseShipEquipmentData) {
        target.slotUsed = FittingSlotType.Mid;
        target.shieldHPBonusAdd = data.shp;
        target.signatureRadiusBonus = data.sra;
        target.cpuUsageActual = function (ship: Ship) {
            return CpuFormulas.standardModule(ship, this.cpuUsage)
        }
        target.powergridUsageActual = function (ship: Ship) {
            return PowergridFormulas.shieldUpgradeModule(ship, this.powergridUsage);
        }
    }

    function DroneLoader(data: IEveInventoryTypeAttributes, target: BaseShipEquipmentData) {
        target.droneBandwidthUsed = data.dbu;
        target.optimalRange = data.opt;
        target.accuracyFalloff = data.acc;
        target.rateOfFire = data.rof;
        target.trackingSpeed = data.trk;
        target.damageMultiplier = data.dmg;
        target.emBaseDamage = data.emd;
        target.explosiveBaseDamage = data.exd;
        target.kineticBaseDamage = data.kid;
        target.thermalBaseDamage = data.thd;
        target.emAlphaDamageActual = (ship: Ship) => {
            return target.emBaseDamage * target.damageMultiplier * ship.emDamageMultiplier(target, null);
        };
        target.explosiveAlphaDamageActual = (ship: Ship) => {
            return target.explosiveBaseDamage * target.damageMultiplier * ship.explosiveDamageMultiplier(target, null);
        };
        target.kineticAlphaDamageActual = (ship: Ship) => {
            return target.kineticBaseDamage * target.damageMultiplier * ship.kineticDamageMultiplier(target, null);
        };
        target.thermalAlphaDamageActual = (ship: Ship) => {
            return target.thermalBaseDamage * target.damageMultiplier * ship.thermalDamageMultiplier(target, null);
        };

    }

    function LowWeaponEnhancementLoader(data: IEveInventoryTypeAttributes, target: BaseShipEquipmentData) {
        target.slotUsed = FittingSlotType.Low;
        if (data.rofm) {
            target.rateOfFireMultiplier = data.rofm;
        }
        if (data.dmg) {
            target.damageMultiplier = data.dmg;
        }
        if (data.midm) {
            target.missileDamageMultiplier = data.midm;
        }
        target.cpuUsageActual = function (ship: Ship) {
            return CpuFormulas.standardModule(ship, this.cpuUsage)
        }
        target.powergridUsageActual = function (ship: Ship) {
            return PowergridFormulas.standardModule(ship, this.powergridUsage);
        }
    }

    function ArmorPlateAndCoatingLoader(data: IEveInventoryTypeAttributes, target: BaseShipEquipmentData) {
        if (data.ahp) {
            target.armorHPBonusAdd = data.ahp;
        }
        if (data.ahpbp) {
            target.armorHPBonusPercent = (ship: Ship): number => {
                return data.ahpbp;
            }
        }
        if (data.emdrb || data.exdrb || data.kidrb || data.thdrb) {
            target.armorResists = new ResistSet(
                new Resistance((100 + (data.emdrb || 0)) / 100),
                new Resistance((100 + (data.exdrb || 0)) / 100),
                new Resistance((100 + (data.kidrb || 0)) / 100),
                new Resistance((100 + (data.thdrb || 0)) / 100), true);
        }
        target.slotUsed = FittingSlotType.Low;
        target.cpuUsageActual = function (ship: Ship) {
            return CpuFormulas.standardModule(ship, this.cpuUsage)
        }
        target.powergridUsageActual = function (ship: Ship) {
            return PowergridFormulas.standardModule(ship, this.powergridUsage);
        }
    }

    function PowerModuleLoader(data: IEveInventoryTypeAttributes, target: BaseShipEquipmentData) {
        target.slotUsed = FittingSlotType.Low;
        target.powerGridIncrease = data.pginc;
        target.cpuUsageActual = function (ship: Ship) { 
            return CpuFormulas.standardModule(ship, this.cpuUsage)
        }
        target.powergridUsageActual = function (ship: Ship) {
            return 0;
        }
    }

    function DamageControlLoader(data: IEveInventoryTypeAttributes, target: BaseShipEquipmentData) {
        
        target.hullResists = new ResistSet(data.hemr, data.hexr, data.hkir, data.hthr, false);
        target.armorResists = new ResistSet(data.aemr, data.aexr, data.akir, data.athr, false);
        target.shieldResists = new ResistSet(data.semr, data.sexr, data.skir, data.sthr, false);
        
        target.slotUsed = FittingSlotType.Low;
        target.cpuUsageActual = function (ship: Ship) { 
            return CpuFormulas.standardModule(ship, this.cpuUsage)
        }
        target.powergridUsageActual = function (ship: Ship) {
            return PowergridFormulas.standardModule(ship, this.powergridUsage);
        }
    }

    function ChargeLoader(data: IEveInventoryTypeAttributes, target: BaseShipEquipmentData) {
        target.emBaseDamage = data.emd;
        target.explosiveBaseDamage = data.exd;
        target.kineticBaseDamage = data.kid;
        target.thermalBaseDamage = data.thd;
        target.weaponsRangeModifier = data.wrm;
        target.chargeSize = data.cs;
        target.launcherGroup = data.lg; //todo: fix up so this works with all types of charges
        target.trackingSpeedModifier = data.tsm;
    }

    function NanofiberLoader(data: IEveInventoryTypeAttributes, target: BaseShipEquipmentData) {
        
        target.shipHullHPMultiplier = data.sshpm;
        target.agilityMultiplier = data.agim;
        target.baseVelocityMultiplier = data.velm;
        target.slotUsed = FittingSlotType.Low;
        target.cpuUsageActual = (ship: Ship): number => {
            return CpuFormulas.standardModule(ship, target.cpuUsage)
        }
        target.powergridUsageActual = (ship: Ship) : number => {
            return PowergridFormulas.standardModule(ship, target.powergridUsage);
        }
    }

    function NosNeutLoader(data: IEveInventoryTypeAttributes, target: BaseShipEquipmentData) {
        target.slotUsed = FittingSlotType.High;
        target.optimalRange = data.opt;
        target.capacitorNeed = data.capn;
        target.activationDuration = data.ad;
        target.powerTransferAmount = data.pta;
        target.energyDestabilizationAmount = data.eda;
        target.cpuUsageActual = (ship: Ship) => {
            return CpuFormulas.standardModule(ship, target.cpuUsage)
        }
        target.powergridUsageActual = (ship: Ship) => {
            return PowergridFormulas.standardModule(ship, target.powergridUsage);
        }
    }

    function RigLoader(data: IEveInventoryTypeAttributes, target: BaseShipEquipmentData):void {
        target.cpuUsageActual = () => {return 0};
        target.powergridUsageActual = () => {return 0};
        target.slotUsed = FittingSlotType.Rig;
        target.drawback = data.drwbk;
        var typeInfo = new TypeInfo(target.typeId, target.groupId);

        if (target.groupId == InventoryGroups.ArmorRig) {
            target.armorResists = new ResistSet((100 + data.emdrb) * 0.01 || 1, (100 + data.exdrb) * 0.01 || 1, (100 + data.kidrb) * 0.01 || 1, (100 + data.thdrb) * 0.01 || 1);
            if (Wafle.Data.DrawbackIsArmorRepairPowergridPenalty(typeInfo)) {
                //todo: implement me once armor repair modules are supported.
            } else if (Wafle.Data.DrawbackIsMaxVelocityPenalty(typeInfo)) {
                target.baseVelocityMultiplier = target.drawback;
                target.actualVelocityMultiplier = (ship: Ship) => {
                    var m: number = target.drawback;
                    if (ship.pilot) {
                        m = m * (1 - (ship.pilot.skills.ArmorRigging * 0.1));
                    }
                        return m;
                    }
            }

            if (data.ahpbp) {
                target.armorHPBonusPercent = (ship: Ship): number => {
                    return data.ahpbp;
                }
            }
        } else if (target.groupId == InventoryGroups.ShieldRig) {
            target.shieldResists = new ResistSet((100 + data.emdrb) * 0.01 || 1, (100 + data.exdrb) * 0.01 || 1, (100 + data.kidrb) * 0.01 || 1, (100 + data.thdrb) * 0.01 || 1);
        } else if (target.groupId == InventoryGroups.NavigationRig) {
            if (data.agim) {
                target.agilityMultiplier = data.agim;
            }
            if (data.velm) {
                target.baseVelocityMultiplier = data.velm;
            }
            target.armorHPBonusPercent = (ship: Ship) => {
                return target.drawback * (1 - (ship.pilot.skills.AstronauticsRigging * 0.1));
            }
        }

    }

    export class TypeInfo implements ITypeInfo {
        public typeId: number;
        public groupId: number;
        constructor(typeId: number, groupId?: number) {
            this.typeId = typeId;
            if (groupId === undefined) {
                this.FindGroupId();
            } else {
                this.groupId = groupId;
            }
        }
        public FindGroupId(): void {
            this.groupId = Wafle.Data.TypeToGroupIDMapping[this.typeId.toString()];
        }
    }
   


    //todo: rename to InventoryTypeData during the refactoring initiative.
    export class BaseShipEquipmentData {
        public groupId: number;
        public typeId: number;
        public isActive: boolean = false;  //try to move this out into an actualized inventoryItem class that uses BaseTypeData as a "has a".  Also need to support "canActivate" to distinguish passive modules, etc.  Quite a bit of refactoring required here.
        public name: string = '';
        public techLevel: number = 1;
        public description: string = '';
        public race: RaceType = RaceType.Unknown;
        /** volume of the item in m3 */
        public volume: number = 0;
        public accuracyFalloff: number = 0;
        public trackingSpeed: number = 0;
        public cpuUsage: number = 0;
        public rateOfFire: number = 0;
        /** Rate of fire multiplier - Rate is measured in ms between firing, so lower is faster: 0.9 would be a 10% faster rate of fire.*/
        public rateOfFireMultiplier: number = 0;
        public powergridUsage: number = 0;
        /** Base powergrid increase amount (for modules that create powergrid capacity) in MW, such as 12 = 12 MW powergrid increase.*/
        public powerGridIncrease: number = 0;
        public optimalRange: number = 0;
        public metaLevel: number = 0;
        public damageMultiplier: number = 1;
        public missileDamageMultiplier: number = 1;
        public marketGroup: number = 0;
        public parentMarketGroup: number = 0;
        public speedFactor: number = 0;
        /** Signature Radius bonus - expressed as a whole percentage increase, such as 10 = 10% increase to signature radius */
        public signatureRadiusBonus: number = 0;
        /** Signature Radius bonus (of target) - expressed as a whole percentage increase, such as 10 = 10% increase to signature radius of a targeted ship */
        public signatureRadiusBonusOfTarget: number = 0;
        /** Signature Radius Add - represented in meters (10 = 10 additional meters) */
        public signatureRadiusAdd: number = 0;
        /** Shield HP added - represented as a flat addition (10 = 10 additional HP) */
        public shieldHPBonusAdd: number = 0;
        /** Armor HP added - represented as a flat addition (10 = 10 additional HP) */
        public armorHPBonusAdd: number = 0;
        /** Armor HP Bonus Percent - represented in whole numbers (20% bonus as 20). */
        public armorHPBonusPercent: (ship: Ship) => number; //todo: refactor to eliminate requirement to pass ship to the module on the ship.
        /** Shield HP Bonus Percent - represented in whole numbers (20% bonus as 20). */
        public shieldHPBonusPercent: (ship: Ship) => number; //todo: refactor to eliminate requirement to pass ship to the module on the ship.
        public slotUsed: FittingSlotType = FittingSlotType.Unknown;
        public cpuUsageActual: (ship: Ship) => number;
        public powergridUsageActual: (ship: Ship) => number;
        public hullResists: ResistSet = null;
        public armorResists: ResistSet = null;
        public shieldResists: ResistSet = null;
        public shipHullHPMultiplier: number= 0;
        public agilityMultiplier: number = 0;
        /** Base Velocity Multiplier - As defined on the module with no skills applied - percentage represented in whole numbers (20% bonus as 20). */
        public baseVelocityMultiplier: number = 0;
        /** Actual Velocity Multiplier - considers the pilot and ship - percentage represented in whole numbers (20% bonus as 20). */
        public actualVelocityMultiplier: (ship: Ship) => number;
        /** Drawback if this is a rig */
        public drawback: number = 0;
        /** Module activation duration in ms */
        public activationDuration: number = 0;
        /** Armor repair amount in HP */
        public armorHPRepaired: number = 0; 
        /** Flat capacitor amount needed to activate the module */
        public capacitorNeed: number = 0;
        /** powerTransferAmount in "not specified" units (probably GJ) - ex: 8 */
        public powerTransferAmount: number = 0;
        /** energyDestabilizationAmount in Giga Joule - ex: 45 = 45GJ */
        public energyDestabilizationAmount: number = 0;
        /** drone bandwidth used in Mbits/sec ex: 5 = 5 Mbits/sec */
        public droneBandwidthUsed: number = 0;

        /** total alpha damage of all types at optimal including ship bonuses, pilot skill, and ammunition used. */
        public totalAlphaDamageActual(ship: Ship, charge: BaseShipEquipmentData): number {
            var total = 0;
            if (this.emAlphaDamageActual) {
                total += this.emAlphaDamageActual(ship, charge)
            }
            if (this.explosiveAlphaDamageActual) {
                total += this.explosiveAlphaDamageActual(ship, charge)
            }
            if (this.kineticAlphaDamageActual) {
                total += this.kineticAlphaDamageActual(ship, charge)
            }
            if (this.thermalAlphaDamageActual) {
                total += this.thermalAlphaDamageActual(ship, charge)
            }
            return total;
        }
        public emAlphaDamageActual: (ship: Ship, charge: BaseShipEquipmentData) => number;
        public explosiveAlphaDamageActual: (ship: Ship, charge: BaseShipEquipmentData) => number;
        public kineticAlphaDamageActual: (ship: Ship, charge: BaseShipEquipmentData) => number;
        public thermalAlphaDamageActual: (ship: Ship, charge: BaseShipEquipmentData) => number;
        /** EM damage in HP */
        public emBaseDamage: number;
        /** Explosive damage in HP */
        public explosiveBaseDamage: number;
        /** Kinetic damage in HP */
        public kineticBaseDamage: number;
        /** Thermal damage in HP */
        public thermalBaseDamage: number;
        /** Weapons Range Modifier as fraction of base range (example: 0.5 means the range is half of normal) */
        public weaponsRangeModifier: number;
        /** Charge size: 1=small, 2=medium, 3=large, etc... */
        public chargeSize: number;
        /** Launcher Group (Group ID number of compatible Launchers) */
        public launcherGroup: number;
        /** Tracking Speed modifier as fraction of base (example: 1.2 means 20% faster tracking than normal) */
        public trackingSpeedModifier: number;



        constructor(typeInfo: TypeInfo)
        constructor(groupId: number, typeId: number)
        constructor(p1: any, p2?: any) {
            if (p1.typeId) {
                if (!<TypeInfo>p1.groupId) {
                    <TypeInfo>p1.FindGroupId();
                }
                this.typeId = (<TypeInfo>p1).typeId;
                this.groupId = (<TypeInfo>p1).groupId;
            } else {
                this.typeId = p2;
                this.groupId = p1;
            }

            if (!Wafle.Data.Types[this.groupId.toString()]) {
                throw "groupId " + this.groupId.toString() + " is not known.";
            }
            var data: IEveInventoryTypeAttributes = Wafle.Data.Types[this.groupId.toString()][this.typeId.toString()];
            if (!data) {
                throw "typeId " + this.typeId.toString() + " in groupId " + this.groupId.toString() + " is not known.";
            }
            ShipEquipmentLoader(data, this);
            switch (this.groupId) {
                case InventoryGroups.ProjectileWeapon: //fall through
                case InventoryGroups.HybridWeapon: //fall through
                case InventoryGroups.EnergyWeapon: 
                    TurretLoader(data, this);
                    break;
                case InventoryGroups.HybridCharge: //fall through
                case InventoryGroups.FrequencyCrystal: //fall through
                case InventoryGroups.AdvancedRailgunCharge: //fall through
                case InventoryGroups.AdvancedBlasterCharge: //fall through
                case InventoryGroups.AdvancedBeamLaserCrystal: //fall through
                case InventoryGroups.AdvancedPulseLaserCrystal: //fall through
                case InventoryGroups.AdvancedArtilleryAmmo: //fall through
                case InventoryGroups.ProjectileAmmo: //fall through
                case InventoryGroups.Rocket: //fall through
                case InventoryGroups.AdvancedRocket: //fall through
                case InventoryGroups.LightMissile:  //fall through
                case InventoryGroups.AdvancedLightMissile:
                    ChargeLoader(data, this);
                    break;
                case InventoryGroups.RocketLauncher: //fall through
                case InventoryGroups.LightMissileLauncher: //fall through
                case InventoryGroups.HeavyAssaultMissileLauncher: //fall through
                case InventoryGroups.HeavyMissileLauncher: // fall through
                    LauncherLoader(data, this);
                    break;
                case InventoryGroups.StasisWeb: // fall through
                case InventoryGroups.TargetPainter:
                    MidProjectedEffectLoader(data, this);
                    break;
                case InventoryGroups.Propulsion:
                    PropulsionLoader(data, this);
                    break;
                case InventoryGroups.ShieldExtender:
                    ShieldExtenderLoader(data, this);
                    break;
                case InventoryGroups.WarpScrambler:
                    MidProjectedEffectLoader(data, this);
                    break;
                case InventoryGroups.ArmorPlate: //fall through
                case InventoryGroups.ArmorCoating:
                    ArmorPlateAndCoatingLoader(data, this);
                    break;
                case InventoryGroups.Nanofiber:
                    NanofiberLoader(data, this);
                    break;
                case InventoryGroups.EnergyDestabilizer: //fall through
                case InventoryGroups.EnergyVampire: 
                    NosNeutLoader(data, this);
                    break;
                case InventoryGroups.ArmorRig: //fall through
                case InventoryGroups.ShieldRig: //fall through
                case InventoryGroups.NavigationRig:
                    RigLoader(data, this);
                    break;
                case InventoryGroups.DamageControl:
                    DamageControlLoader(data, this);
                    break;
                case InventoryGroups.AuxiliaryPowerCore:
                    PowerModuleLoader(data, this);
                case InventoryGroups.BallisticControlSystem: //fall through
                case InventoryGroups.Gyrostabilizer: //fall through
                case InventoryGroups.HeatSink: //fall through
                case InventoryGroups.MagneticFieldStabilizer:
                    LowWeaponEnhancementLoader(data, this);
                case InventoryGroups.CombatDrone:
                    DroneLoader(data, this);
                default:
                    break;
            }
        }

        public Activate(): void {
            this.isActive = true;
        }
        public Deactivate(): void {
            this.isActive = false;
        }
        
        public typeInfo(): Wafle.TypeInfo {
            return new TypeInfo(this.typeId, this.groupId);
        }

        public damageMultiplierForModule(theAttackingModule: BaseShipEquipmentData): number {
            if (this.damageMultiplier == 0 && this.missileDamageMultiplier == 0) {
                return 1;
            }

            var ti = theAttackingModule.typeInfo();
            if (Wafle.Data.IsLauncher(ti)){
                return this.missileDamageMultiplier;
            } else if (ti.groupId == InventoryGroups.ProjectileWeapon) {
                if (this.groupId == InventoryGroups.Gyrostabilizer) {
                    return this.damageMultiplier;
                }
            } else if (ti.groupId == InventoryGroups.HybridWeapon) {
                if (this.groupId == InventoryGroups.MagneticFieldStabilizer) {
                    return this.damageMultiplier;
                }
            } else if (ti.groupId == InventoryGroups.EnergyWeapon) {
                if (this.groupId == InventoryGroups.HeatSink) {
                    return this.damageMultiplier;
                }
            }
            return 1;
        }

        
    }

    export class Resistance {
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
    export class ResistSet {
        public EM: Resistance;
        public Explosive: Resistance;
        public Kinetic: Resistance;
        public Thermal: Resistance;
        public HasDiminishingReturns: boolean = true;        

        constructor(EM: Resistance, Explosive: Resistance, Kinetic: Resistance, Thermal: Resistance, HasDiminishingReturns?:boolean);
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
                return new Resistance(theValue);
            }
        }
    }

    export class BaseShipData {
        public typeId: number;
        public groupId: number;
        public marketGroupId: number;
        public parentMarketGroupId: number;
        public metaLevel: number;
        public hullName: string;
        public techLevel: number;
        public race: RaceType = RaceType.Unknown;
        public cpuOutput: number;
        public powergridOutput: number;
        public structureHP: number;
        public armorHP: number;
        public shieldHP: number;
        /** in m3 */
        public droneBayCapacity: number;
        /** in Mbit/sec */
        public droneBandwidth: number;
        /** in m3 */
        public cargoHoldCapacity: number;

        public hullResists: ResistSet = null;
        public armorResists: ResistSet = null;
        public shieldResists: ResistSet = null;

        public lowSlotCount: number;
        public midSlotCount: number;
        public highSlotCount: number;
        public rigSlotCount: number;
        public rigSize: RigSize = RigSize.Unknown;
        public calibration: number;
        public turretCount: number;
        public launcherCount: number;
        public maxVelocity: number;

        public slotCount() {
            return this.highSlotCount + this.midSlotCount + this.lowSlotCount + this.rigSlotCount;
        }

        constructor(hullName: string);
        constructor(groupId: number, typeId: number);
        constructor(typeInfo: TypeInfo);
        constructor(param1?: any, param2: number= -1) {
            
            var _groupId: number, _typeId: number, _hullname: string;
            if (param1 === null) {
                throw "BaseShipData does not accept a null parameter.";
            }
            if (param2 === -1 && !(param1.typeId)) {
                //we are searching for a ship by name.
                _hullname = param1;
                
                var typeInfo: TypeInfo = FindTypeByName(_hullname);
                if (typeInfo === null) {
                    throw 'Could not find ship with name "' + _hullname + '".';
                }
                _groupId = typeInfo.groupId;
                _typeId = typeInfo.typeId;
            } else {
                if (param1.typeId) {
                    _groupId = (<TypeInfo>param1).groupId;
                    _typeId = (<TypeInfo>param1).typeId;
                } else {
                    _groupId = param1;
                    _typeId = param2;
                }
            }

            try {
                var data: Wafle.IEveInventoryTypeAttributes = Wafle.Data.Types[_groupId.toString()][_typeId.toString()];
            }
            catch (ex) {
                throw "Ship not found with typeId " + _typeId.toString() + ", groupId " + _groupId.toString() + ".";
            }
            
            this.typeId = _typeId;
            this.groupId = _groupId;
            this.marketGroupId = data.mg;
            this.parentMarketGroupId = data.pmg;
            this.metaLevel = data.mta;
            this.techLevel = data.tl;
            this.hullName = data.n;
            this.race = data.r;
            this.cpuOutput = data.cpuo;
            this.powergridOutput = data.pgo;
            this.structureHP = data.shhp;
            this.armorHP = data.sahp;
            this.shieldHP = data.sshp;
            this.hullResists = new ResistSet(data.hemr, data.hexr, data.hkir, data.hthr, false);
            this.armorResists = new ResistSet(data.aemr, data.aexr, data.akir, data.athr, false);
            this.shieldResists = new ResistSet(data.semr, data.sexr, data.skir, data.sthr, false);
            
            this.lowSlotCount = data.lsc;
            this.midSlotCount = data.msc;
            this.highSlotCount = data.hsc;
            this.rigSlotCount = data.rsc;
            this.rigSize = data.rgsz;
            this.calibration = data.calb;
            this.turretCount = data.tusc;
            this.launcherCount = data.lasc;
            this.maxVelocity = data.vel;
            this.droneBayCapacity = data.dc;
            this.droneBandwidth = data.db;
            this.cargoHoldCapacity = data.c;

        }


    }

    //shim for getOwnPropertyNames (not supported in EVE IGB as of Odyssey 1.1) http://stackoverflow.com/questions/8240802/is-it-possible-to-simulated-object-getownpropertynames-in-ie8
    if (typeof Object.getOwnPropertyNames !== "function") {
        Object.getOwnPropertyNames = function (obj) {
            var keys = [];

            // Only iterate the keys if we were given an object, and
            // a special check for null, as typeof null == "object"
            if (typeof obj === "object" && obj !== null) {
                // Use a standard for in loop
                for (var x in obj) {
                    // A for in will iterate over members on the prototype
                    // chain as well, but Object.getOwnPropertyNames returns
                    // only those directly on the object, so use hasOwnProperty.
                    if (obj.hasOwnProperty(x)) {
                        keys.push(x);
                    }
                }
            }

            return keys;
        }
    }

    export function FindTypeByName(theName: string): TypeInfo  {
        var groupCount = Object.getOwnPropertyNames(Wafle.Data.Types).length;
        for (var groupIndex = 0; groupIndex < groupCount; groupIndex++) {
            var groupId = Object.getOwnPropertyNames(Wafle.Data.Types)[groupIndex];
            var typeCount = Object.getOwnPropertyNames(Wafle.Data.Types[groupId]).length;
            for (var typeIndex = 0; typeIndex < typeCount; typeIndex++) {
                var typeId = Object.getOwnPropertyNames(Wafle.Data.Types[groupId])[typeIndex];
                if (Wafle.Data.Types[groupId][typeId].n === theName) {
                    return new TypeInfo(parseInt(typeId), parseInt(groupId));
                }
            }
        }
        return null;
    }
    
    export function FindNamedTypesByGroup(theGroupId: number): INamedType[] {
        var types: Wafle.INamedType[] = [];
        var typeCount = Object.getOwnPropertyNames(Wafle.Data.Types[theGroupId]).length;
        for (var typeIndex = 0; typeIndex < typeCount; typeIndex++) {
            var typeId = Object.getOwnPropertyNames(Wafle.Data.Types[theGroupId])[typeIndex];
            var theItem: Wafle.INamedType = {
                name: Wafle.Data.Types[theGroupId][typeId].n,
                groupId: theGroupId,
                typeId: parseInt(typeId, 10)
            };
            types.push(theItem);
        }
        return types;
    }

}
