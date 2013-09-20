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
. Fix requiring both Wafle and WafleData to be referenced in the HTML page.
. lasers and hybrids
. more rigs and other modules.
. modules that use capacitor - adjust stats for active or inactive.
. track capacitor usage of ship/cap stability
. missiles
. drone stuff
. Ammo
. cruisers, bc, bs, other
. align time, warp speed, other navigation concerns
. Offline Modules
. Overheating
. UI
. track calibration remaining for rigs.
*/



module Wafle {

    export var Version: string = "0.1.0-alpha.2";

    
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
        ArmorCoating=98, HeatSink=205, MagneticFieldStabilizer=302, ArmorRepairProjector = 325, ArmorPlate = 329,AuxiliaryPowerCore=339, BallisticControlSystem=367,
        AdvancedAutocannonAmmo= 372, AdvancedRailgunCharge= 373, AdvancedBeamLaserCrystal= 374, AdvancedPulseLaserCrystal= 375,
        AdvancedArtilleryAmmo=376, AdvancedBlasterCharge=377, TargetPainter=379,
        LightMissile= 384, HeavyMissile= 385, Rocket= 387,
        FoFHeavyMissile= 395, RocketLauncher= 507,
        LightMissileLauncher= 509, HeavyMissileLauncher= 510, RapidLightMissileLauncher= 511, AdvancedRocket= 648,
        AdvancedLightMissile= 653,
        AdvancedHeavyAssaultMissile=654, AdvancedHeavyMissile=655, Nanofiber= 763,
        HeavyAssaultMissileLauncher= 771, HeavyAssaultMissile=772, ArmorRig= 773, ShieldRig= 774, NavigationRig=782
    }
    /*
    --Adding on 9/19: 38: Shield Extender, 
--367 (Ballistic Control System), 339 (Auxiliary Power Core)
-- 59: Gyrostabilizer, 205 "Heat Sink", 302 "Magnetic Field Stabilizer"
-- 379 Target Painter, 782 Rig Navigation
    */
    

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
            var charge = new BaseShipEquipmentData(type.groupId, type.typeId);
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
        public baseShipData: BaseShipData;
        public pilot: Pilot = null;
        public fittingSlots: FittingSlot[] = [];

        constructor(public hullName: string) {
            this.baseShipData = new BaseShipData(hullName);
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
            if (this.pilot) {
                return Round(this.baseShipData.powergridOutput * this.pilot.skills.powergridMultiplier(), -2);
            }
            else {
                return this.baseShipData.powergridOutput;
            }
        }

        public powergridString() {
            return this.powergrid().toFixed(2);
        }

        public cpu() {
            if (this.pilot) {
                return Round(this.baseShipData.cpuOutput * this.pilot.skills.cpuMultiplier(), -2);
            }
            else {
                return this.baseShipData.cpuOutput;
            }
        }

        public remainingCpu() {
            var remaining = this.cpu();
            for (var i = 0; i < this.fittingSlots.length; i++) {
                remaining -= this.fittingSlots[i].cpuUsage();
            }
            return Round(remaining, -2);
        }

        public remainingPowergrid() {
            var remaining = this.powergrid();
            for (var i = 0; i < this.fittingSlots.length; i++) {
                remaining -= this.fittingSlots[i].powergridUsage();
            }
            return Round(remaining, -2);
        }


        public cpuString() {
            return this.cpu().toFixed(2);
        }

        public shieldHP() {
            if (this.pilot) {
                return Round(this.baseShipData.shieldHP * this.pilot.skills.shieldHPMultiplier(), 0);
            }
            else {
                return this.baseShipData.shieldHP;
            }
        }

        public armorHP() {
            var baseArmorHP = this.baseShipData.armorHP;
            for (var i = 0; i <= this.baseShipData.slotCount(); i++) {
                if (this.fittingSlots[i] && this.fittingSlots[i].baseShipEquipmentData) {
                    baseArmorHP += this.fittingSlots[i].baseShipEquipmentData.armorHPBonusAdd;
                }
            }
            if (this.pilot) {
                baseArmorHP = baseArmorHP * this.pilot.skills.armorHPMultiplier();
            }

            for (var i = 0; i <= this.baseShipData.slotCount(); i++) {
                if (this.fittingSlots[i] && this.fittingSlots[i].baseShipEquipmentData) {
                    baseArmorHP *= (1 + (this.fittingSlots[i].baseShipEquipmentData.armorHPBonusPercent * 0.01));
                }
            }
            return Round(baseArmorHP,0);
        }

        public structureHP() {
            if (this.pilot) {
                return Round(this.baseShipData.structureHP * this.pilot.skills.structureHPMultiplier(), 0);
            }
            else {
                return this.baseShipData.structureHP;
            }
        }

        public totalHP() {
            return this.structureHP() + this.armorHP() + this.shieldHP();
        }

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
            var damageTakenPercent = 1 - this.baseShipData.armorResists.EM.baseDamageReductionPercentage();
            var damageTakenMultipliers: number[] = [];
            for (var i = 0; i <= this.baseShipData.slotCount(); i++) {
                if (this.fittingSlots[i] && this.fittingSlots[i].baseShipEquipmentData && this.fittingSlots[i].baseShipEquipmentData.armorResists) {
                    if (this.fittingSlots[i].baseShipEquipmentData.armorResists.HasDiminishingReturns === true) {
                        damageTakenMultipliers.push(1 - this.fittingSlots[i].baseShipEquipmentData.armorResists.EM.baseDamageReductionPercentage());
                    } else {
                        damageTakenPercent = damageTakenPercent * (1 - this.fittingSlots[i].baseShipEquipmentData.armorResists.EM.baseDamageReductionPercentage());
                    }
                }
            }
            return 1 - this.multiplyPercentages(damageTakenPercent, damageTakenMultipliers, true);
        }

        public ArmorExplosiveDamageReduction(): number {
            var damageTakenPercent = 1 - this.baseShipData.armorResists.Explosive.baseDamageReductionPercentage();
            var damageTakenMultipliers: number[] = [];
            for (var i = 0; i <= this.baseShipData.slotCount(); i++) {
                if (this.fittingSlots[i] && this.fittingSlots[i].baseShipEquipmentData && this.fittingSlots[i].baseShipEquipmentData.armorResists) {
                    if (this.fittingSlots[i].baseShipEquipmentData.armorResists.HasDiminishingReturns === true) {
                        damageTakenMultipliers.push(1 - this.fittingSlots[i].baseShipEquipmentData.armorResists.Explosive.baseDamageReductionPercentage());
                    } else {
                        damageTakenPercent = damageTakenPercent * (1 - this.fittingSlots[i].baseShipEquipmentData.armorResists.Explosive.baseDamageReductionPercentage()) ;
                    }
                }
            }
            return 1 - this.multiplyPercentages(damageTakenPercent,damageTakenMultipliers,true);
        }


        public ArmorKineticDamageReduction(): number {
            var damageTakenPercent = 1 - this.baseShipData.armorResists.Kinetic.baseDamageReductionPercentage();
            var damageTakenMultipliers: number[] = [];
            for (var i = 0; i <= this.baseShipData.slotCount(); i++) {
                if (this.fittingSlots[i] && this.fittingSlots[i].baseShipEquipmentData && this.fittingSlots[i].baseShipEquipmentData.armorResists) {
                    if (this.fittingSlots[i].baseShipEquipmentData.armorResists.HasDiminishingReturns === true) {
                        damageTakenMultipliers.push(1 - this.fittingSlots[i].baseShipEquipmentData.armorResists.Kinetic.baseDamageReductionPercentage());
                    } else {
                        damageTakenPercent = damageTakenPercent * (1 - this.fittingSlots[i].baseShipEquipmentData.armorResists.Kinetic.baseDamageReductionPercentage());
                    }
                }
            }
            return 1 - this.multiplyPercentages(damageTakenPercent, damageTakenMultipliers, true);
        }

        public ArmorThermalDamageReduction(): number {
            var damageTakenPercent = 1 - this.baseShipData.armorResists.Thermal.baseDamageReductionPercentage();
            var damageTakenMultipliers: number[] = [];
            for (var i = 0; i <= this.baseShipData.slotCount(); i++) {
                if (this.fittingSlots[i] && this.fittingSlots[i].baseShipEquipmentData && this.fittingSlots[i].baseShipEquipmentData.armorResists) {
                    if (this.fittingSlots[i].baseShipEquipmentData.armorResists.HasDiminishingReturns === true) {
                        damageTakenMultipliers.push(1 - this.fittingSlots[i].baseShipEquipmentData.armorResists.Thermal.baseDamageReductionPercentage());
                    } else {
                        damageTakenPercent = damageTakenPercent * (1 - this.fittingSlots[i].baseShipEquipmentData.armorResists.Thermal.baseDamageReductionPercentage());
                    }
                }
            }
            return 1 - this.multiplyPercentages(damageTakenPercent, damageTakenMultipliers, true);
        }

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
                    startValue *= percentages[i] * dimEffRatio(growerCount);
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

        public emDamageModifier(attackingModule: BaseShipEquipmentData, charge: BaseShipEquipmentData): number {
            return Wafle.Data.ShipOmniDamageMultiplier(this, attackingModule, charge) * this.pilot.OmniDamageMultiplier(attackingModule);
        }
        public explosiveDamageModifier(attackingModule: BaseShipEquipmentData, charge: BaseShipEquipmentData): number{
            return Wafle.Data.ShipOmniDamageMultiplier(this, attackingModule, charge) * this.pilot.OmniDamageMultiplier(attackingModule);
        }
        public kineticDamageModifier(attackingModule: BaseShipEquipmentData, charge: BaseShipEquipmentData): number {
            return Wafle.Data.ShipOmniDamageMultiplier(this, attackingModule, charge) * this.pilot.OmniDamageMultiplier(attackingModule);
        }
        public thermalDamageModifier(attackingModule: BaseShipEquipmentData, charge: BaseShipEquipmentData): number {
            return Wafle.Data.ShipOmniDamageMultiplier(this, attackingModule, charge) * this.pilot.OmniDamageMultiplier(attackingModule);
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
            } else if (attackingModule.groupId === InventoryGroups.RocketLauncher) {
                mult *= this.skills.rocketsDamageMultiplier() * this.skills.warheadDamageMultiplier();
            } else if (attackingModule.groupId === InventoryGroups.LightMissileLauncher) {
                mult *= this.skills.lightMissilesDamageMultiplier() * this.skills.warheadDamageMultiplier();
            }
            return mult;
        }

    }

    export class Skills {
        Engineering: number = 0;
        Electronics: number = 0;
        HullUpgrades: number = 0;
        Mechanics: number = 0;
        ShieldManagement: number = 0;
        WeaponUpgrades: number = 0;
        AdvancedWeaponUpgrades: number = 0;
        Navigation: number = 0;
        ArmorRigging: number = 0;
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

        public SetAllSkills(level: number) {
            this.Engineering = level;
            this.Electronics = level;
            this.HullUpgrades = level;
            this.Mechanics = level;
            this.ShieldManagement = level;
            this.WeaponUpgrades = level;
            this.AdvancedWeaponUpgrades = level;
            this.Navigation = level;
            this.ArmorRigging = level;
            this.GallenteFrigate = level;
            this.MinmatarFrigate = level;
            this.CaldariFrigate = level;
            this.AmarrFrigate = level;
            this.GallenteCruiser = level;
            this.MinmatarCruiser = level;
            this.CaldariCruiser = level;
            this.AmarrCruiser = level;
            this.SmallProjectileTurret = level;
            this.SurgicalStrike = level;
            this.Rockets = level;
            this.LightMissiles = level;
            this.WarheadUpgrades = level;
        }

        public cpuMultiplier(): number {
            return 1.0 + (this.Electronics * 0.05);
        }
        public powergridMultiplier(): number {
            return 1.0 + (this.Engineering * 0.05);
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
    }

    
    function ShipEquipmentLoader(data: IEveInventoryTypeAttributes, target: BaseShipEquipmentData) {
        target.name = data.n;
        target.description = data.d;
        target.cpuUsage = (data.cpu || 0);
        target.powergridUsage = (data.pg || 0);
        target.metaLevel = data.mta;
        target.marketGroup = data.mg;
        target.parentMarketGroup = data.pmg;
    }

    function TurretLoader(data: IEveInventoryTypeAttributes, target: BaseShipEquipmentData) {
        target.optimalRange = data.opt;
        target.accuracyFalloff = data.acc;
        target.rateOfFire = data.rof;
        target.trackingSpeed = data.trk;
        target.damageModifier = data.dmg;
        target.slotUsed = FittingSlotType.High;
        target.launcherGroup = data.lg;
        target.chargeSize = data.cs;
        target.cpuUsageActual = (ship: Ship) => CpuFormulas.standardWeapon(ship, target.cpuUsage);
        target.powergridUsageActual = (ship: Ship) => PowergridFormulas.standardWeapon(ship, target.powergridUsage);
        target.emAlphaDamageActual = (ship: Ship, charge: BaseShipEquipmentData) => {
            return charge.emBaseDamage * target.damageModifier * ship.emDamageModifier(target, charge);
        };
        target.explosiveAlphaDamageActual = (ship: Ship, charge: BaseShipEquipmentData) => {
            return charge.explosiveBaseDamage * target.damageModifier * ship.explosiveDamageModifier(target, charge);
        };
        target.kineticAlphaDamageActual = (ship: Ship, charge: BaseShipEquipmentData) => {
            return charge.kineticBaseDamage * target.damageModifier * ship.kineticDamageModifier(target, charge);
        };
        target.thermalAlphaDamageActual = (ship: Ship, charge: BaseShipEquipmentData) => {
            return charge.thermalBaseDamage * target.damageModifier * ship.thermalDamageModifier(target, charge);
        };
    }


    function LauncherLoader(data: IEveInventoryTypeAttributes, target: BaseShipEquipmentData) {
        target.rateOfFire = data.rof;
        target.slotUsed = FittingSlotType.High;
        target.cpuUsageActual = (ship: Ship) => CpuFormulas.standardWeapon(ship, target.cpuUsage);
        target.powergridUsageActual = (ship: Ship) => PowergridFormulas.standardWeapon(ship, target.powergridUsage);
        target.launcherGroup = data.lg;
        target.emAlphaDamageActual = (ship: Ship, charge: BaseShipEquipmentData) => {
            return charge.emBaseDamage * ship.emDamageModifier(target, charge);
        };
        target.explosiveAlphaDamageActual = (ship: Ship, charge: BaseShipEquipmentData) => {
            return charge.explosiveBaseDamage * ship.explosiveDamageModifier(target, charge);
        };
        target.kineticAlphaDamageActual = (ship: Ship, charge: BaseShipEquipmentData) => {
            return charge.kineticBaseDamage * ship.kineticDamageModifier(target, charge);
        };
        target.thermalAlphaDamageActual = (ship: Ship, charge: BaseShipEquipmentData) => {
            return charge.thermalBaseDamage * ship.thermalDamageModifier(target, charge);
        };
    }

    function MidProjectedEffectLoader(data: IEveInventoryTypeAttributes, target: BaseShipEquipmentData) {
        target.optimalRange = data.opt;
        target.accuracyFalloff = data.acc;
        target.slotUsed = FittingSlotType.Mid;
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
            return PowergridFormulas.standardModule(ship, this.powergridUsage);
        }
    }


    function ArmorPlateAndCoatingLoader(data: IEveInventoryTypeAttributes, target: BaseShipEquipmentData) {
        if (data.ahp) {
            target.armorHPBonusAdd = data.ahp;
        }
        if (data.ahpbp) {
            target.armorHPBonusPercent = data.ahpbp;
        }
        target.slotUsed = FittingSlotType.Low;
        target.cpuUsageActual = function (ship: Ship) {
            return CpuFormulas.standardModule(ship, this.cpuUsage)
        }
        target.powergridUsageActual = function (ship: Ship) {
            return PowergridFormulas.standardModule(ship, this.powergridUsage);
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
        target.cpuUsageActual = (ship: Ship) => {
            return CpuFormulas.standardModule(ship, target.cpuUsage)
        }
        target.powergridUsageActual = (ship: Ship) => {
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
                        m = m * (1 - (ship.pilot.skills.ArmorRigging * 0.1))
                }
                    return m;
                }
            }

            if (data.ahpbp) {
                target.armorHPBonusPercent = data.ahpbp;
            }
        } else if (target.groupId == InventoryGroups.ShieldRig) {
            target.shieldResists = new ResistSet((100 + data.emdrb) * 0.01 || 1, (100 + data.exdrb) * 0.01 || 1, (100 + data.kidrb) * 0.01 || 1, (100 + data.thdrb) * 0.01 || 1);
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
            this.groupId = Wafle.Data.TypeToGroupIDMapping[this.typeId.toString()]
        }
    }
   


    //todo: consider rename to BaseModuleData.
    export class BaseShipEquipmentData {
        public name: string = '';
        public description: string = '';
        public accuracyFalloff: number = 0;
        public trackingSpeed: number = 0;
        public cpuUsage: number = 0;
        public rateOfFire: number = 0;
        public powergridUsage: number = 0;
        public optimalRange: number = 0;
        public metaLevel: number = 0;
        public damageModifier: number = 0;
        public marketGroup: number = 0;
        public parentMarketGroup: number = 0;
        public speedFactor: number = 0;
        public signatureRadiusBonus: number = 0;
        /** Signature Radius Add - represented in meters (10 = 10 additional meters) */
        public signatureRadiusAdd: number = 0;
        /** Shield HP added - represented as a flat addition (10 = 10 additional HP) */
        public shieldHPBonusAdd: number = 0;
        /** Armor HP added - represented as a flat addition (10 = 10 additional HP) */
        public armorHPBonusAdd: number = 0;
        /** Armor HP Bonus Percent - represented in whole numbers (20% bonus as 20). */
        public armorHPBonusPercent: number = 0;
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

        /** total alpha damage of all types at optimal including ship bonuses, pilot skill, and ammunition used. */
        public totalAlphaDamageActual(ship: Ship, charge: BaseShipEquipmentData): number {
            return (this.emAlphaDamageActual(ship, charge) +
                this.explosiveAlphaDamageActual(ship, charge) +
                this.kineticAlphaDamageActual(ship, charge) +
                this.thermalAlphaDamageActual(ship, charge) || 0);
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




        constructor(public groupId: number, public typeId: number) {
            if (!Wafle.Data.Types[groupId.toString()]) {
                throw "groupId " + groupId.toString() + " is not known.";
            }
            var data: IEveInventoryTypeAttributes = Wafle.Data.Types[groupId.toString()][typeId.toString()];
            if (!data) {
                throw "typeId " + typeId.toString() + " in groupId " + groupId.toString() + " is not known.";
            }
            ShipEquipmentLoader(data, this);
            switch (this.groupId) {
                case InventoryGroups.ProjectileWeapon: //fall through
                case InventoryGroups.HybridWeapon: //fall through
                case InventoryGroups.EnergyWeapon: 
                    TurretLoader(data, this);
                    break;
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
                case InventoryGroups.StasisWeb:
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
                case InventoryGroups.ShieldRig: 
                    RigLoader(data, this);
                    break;
                case InventoryGroups.DamageControl:
                    DamageControlLoader(data, this);
                    break;
                default:
                    break;
            }
        }
    }

    export class Resistance {
        constructor(private baseResistRatio: number) {
        }
        /**
        * Base damage reduction percentage.  50% damage reduction expressed as 0.5 .
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
                var data: Wafle.IEveInventoryTypeAttributes = Wafle.Data.Types[_groupId.toString()][_typeId.toString()]; //TODO: implement IShip interface
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
    
}
