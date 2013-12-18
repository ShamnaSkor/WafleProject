/// <reference path="../Wafle/wafleInterfaces.ts" />
/// <reference path="../Wafle/wafleCore.ts" />
/// <reference path="Scripts/typings/jquery/jquery.d.ts" />
/// <reference path="Scripts/typings/jqueryui/jqueryui.d.ts" />
/// <reference path="Scripts/typings/knockout/knockout.d.ts" />
"use strict";

//Thanks to: http://www.strathweb.com/2012/07/knockout-js-pro-tips-working-with-observable-arrays/
//Thanks to: http://stackoverflow.com/questions/13168051/knockout-observablearray-in-typescript

class ShipStatsModel {
    public cpu: KnockoutObservable<string> = ko.observable<string>("");
    public remainingCpu: KnockoutObservable<string> = ko.observable<string>("");
    public powergrid: KnockoutObservable<string> = ko.observable<string>("");
    public remainingPowergrid: KnockoutObservable<string> = ko.observable<string>("");
    public shieldHP: KnockoutObservable<string> = ko.observable<string>("");
    public shieldEMDamageReduction: KnockoutObservable<string> = ko.observable<string>("");
    public shieldExplosiveDamageReduction: KnockoutObservable<string> = ko.observable<string>("");
    public shieldKineticDamageReduction: KnockoutObservable<string> = ko.observable<string>("");
    public shieldThermalDamageReduction: KnockoutObservable<string> = ko.observable<string>("");
    public armorHP: KnockoutObservable<string> = ko.observable<string>("");
    public armorEMDamageReduction: KnockoutObservable<string> = ko.observable<string>("");
    public armorExplosiveDamageReduction: KnockoutObservable<string> = ko.observable<string>("");
    public armorKineticDamageReduction: KnockoutObservable<string> = ko.observable<string>("");
    public armorThermalDamageReduction: KnockoutObservable<string> = ko.observable<string>("");
    public structureHP: KnockoutObservable<string> = ko.observable<string>("");
    public structureEMDamageReduction: KnockoutObservable<string> = ko.observable<string>("");
    public structureExplosiveDamageReduction: KnockoutObservable<string> = ko.observable<string>("");
    public structureKineticDamageReduction: KnockoutObservable<string> = ko.observable<string>("");
    public structureThermalDamageReduction: KnockoutObservable<string> = ko.observable<string>("");
    public fittingSlots: KnockoutObservableArray<KnockoutObservable<FittingSlotDisplay>> = ko.observableArray<KnockoutObservable<FittingSlotDisplay>>(this.SetUpFittingSlots());

    private SetUpFittingSlots(): KnockoutObservable<FittingSlotDisplay>[] {
        var slots: KnockoutObservable<FittingSlotDisplay>[] = [];
        var slotTypes = [Wafle.FittingSlotType.High, Wafle.FittingSlotType.Mid, Wafle.FittingSlotType.Low, Wafle.FittingSlotType.Rig];
        for (var sti = 0; sti < slotTypes.length; sti++) {
            var count = slotTypes[sti] == Wafle.FittingSlotType.Rig ? 3 : 8;
            for (var i = 0; i < count; i++) {
                var s = ko.observable<FittingSlotDisplay>(new FittingSlotDisplay());
                s().indexInType = i;
                s().slotType = Wafle.FittingSlotType[slotTypes[sti]];
                s().isAvailableOnShip(false);
                slots.push(s);
            }
        }
        return slots;
    }
}

class FittingSlotDisplay {
    public slotType: string;
    public indexInType: number;
    public isAvailableOnShip: KnockoutObservable<boolean> = ko.observable<boolean>();
    public cssDisplay: KnockoutComputed<string> = ko.computed<string>((): string => {
        return this.slotType + (this.isAvailableOnShip() == true ? " validSlot" : "");
    });
    public slotName(): string {
        return this.slotType + this.indexInType.toString();
    }
}

class WafleUIViewModel {
    private subscriptions : KnockoutSubscription[]= [];
    public AllShips: KnockoutObservableArray<Wafle.INamedType> = ko.observableArray<Wafle.INamedType>();
    public SelectedShipTypeId: KnockoutObservable<number> = ko.observable<number>();
    public AllPilotSkillLevelsSpike: number[] = [1, 2, 3, 4, 5];
    public SelectedPilotSkillLevelSpike: KnockoutObservable<number> = ko.observable<number>();
    public Ship: KnockoutObservable<ShipStatsModel> = ko.observable<ShipStatsModel>(new ShipStatsModel());


    constructor() {
        this.QuickLoadShips();
        this.EstablishSubscriptions();
    }

    private EstablishSubscriptions() : void {
        this.subscriptions.push(this.SelectedShipTypeId.subscribe(n => {
            this.RefreshAll();
        }));
        this.subscriptions.push(this.SelectedPilotSkillLevelSpike.subscribe(n => {
            this.RefreshAll();
        }));
        this.subscriptions.push(this.Ship().fittingSlots()[3]().isAvailableOnShip.subscribe(n=> {
            console.log("fitting slot zero was updated.  New value = " + n);
        }));
    }

    private QuickLoadShips(): void {
        ko.utils.arrayPushAll<Wafle.INamedType>(this.AllShips, Wafle.FindNamedTypesByGroup(25));  //todo: just frigates for now.
        this.AllShips.valueHasMutated();
    }



    private RefreshAll(): void {
        console.log("Refresh called.");
        if (!this.SelectedShipTypeId()) {
            return;
        }
        console.log("The selected ship type ID is " + this.SelectedShipTypeId().toString());
        var ship = new Wafle.Ship(this.SelectedShipTypeId());
        ship.pilot = new Wafle.Pilot("");
        ship.pilot.skills.SetAllSkills(this.SelectedPilotSkillLevelSpike());
        var m = this.Ship();
        this.RecalculateFittingSlots(ship,m);
        m.cpu(ship.cpuString());
        m.remainingCpu(ship.remainingCpu().toFixed(2));
        m.powergrid(ship.powergridString());
        m.remainingPowergrid(ship.remainingPowergrid().toFixed(2));
        m.shieldHP(ship.shieldHP().toFixed(0));
        m.shieldEMDamageReduction((ship.ShieldEMDamageReduction() * 100).toFixed(2));
        m.shieldExplosiveDamageReduction((ship.ShieldExplosiveDamageReduction() * 100).toFixed(2));
        m.shieldKineticDamageReduction((ship.ShieldKineticDamageReduction() * 100).toFixed(2));
        m.shieldThermalDamageReduction((ship.ShieldThermalDamageReduction() * 100).toFixed(2));
        m.armorHP(ship.armorHP().toFixed(0));
        m.armorEMDamageReduction((ship.ArmorEMDamageReduction() * 100).toFixed(2));
        m.armorExplosiveDamageReduction((ship.ArmorExplosiveDamageReduction() * 100).toFixed(2));
        m.armorKineticDamageReduction((ship.ArmorKineticDamageReduction() * 100).toFixed(2));
        m.armorThermalDamageReduction((ship.ArmorThermalDamageReduction() * 100).toFixed(2));
        m.structureHP(ship.structureHP().toFixed(0));
        m.structureEMDamageReduction((ship.HullEMDamageReduction() * 100).toFixed(2));
        m.structureExplosiveDamageReduction((ship.HullExplosiveDamageReduction() * 100).toFixed(2));
        m.structureKineticDamageReduction((ship.HullKineticDamageReduction() * 100).toFixed(2));
        m.structureThermalDamageReduction((ship.HullThermalDamageReduction() * 100).toFixed(2));
        
    }
    private RecalculateFittingSlots(ship: Wafle.Ship, m: ShipStatsModel): void {
        var RegularSlotCount = 8;
        var RigSlotCount = 3;
        var modelSlotIndex = 0;
        for (var i = 0; i < RegularSlotCount; i++) {
            m.fittingSlots()[modelSlotIndex]().isAvailableOnShip((i < ship.baseShipData.highSlotCount));
            modelSlotIndex += 1;
        }
        for (var i = 0; i < RegularSlotCount; i++) {
            m.fittingSlots()[modelSlotIndex]().isAvailableOnShip((i < ship.baseShipData.midSlotCount));
            modelSlotIndex += 1;
        }
        for (var i = 0; i < RegularSlotCount; i++) {
            m.fittingSlots()[modelSlotIndex]().isAvailableOnShip((i < ship.baseShipData.lowSlotCount));
            modelSlotIndex += 1;
        }
        for (var i = 0; i < RigSlotCount; i++) {
            m.fittingSlots()[modelSlotIndex]().isAvailableOnShip((i < ship.baseShipData.rigSlotCount));
            modelSlotIndex += 1;
        }
    }


    

}



var wvm = new WafleUIViewModel();
ko.applyBindings(wvm);

