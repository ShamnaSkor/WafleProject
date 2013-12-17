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
        var s = this.Ship();
        s.cpu(ship.cpuString());
        s.remainingCpu(ship.remainingCpu().toFixed(2));
        s.powergrid(ship.powergridString());
        s.remainingPowergrid(ship.remainingPowergrid().toFixed(2));
        s.shieldHP(ship.shieldHP().toFixed(0));
        s.shieldEMDamageReduction((ship.ShieldEMDamageReduction() * 100).toFixed(2));
        s.shieldExplosiveDamageReduction((ship.ShieldExplosiveDamageReduction() * 100).toFixed(2));
        s.shieldKineticDamageReduction((ship.ShieldKineticDamageReduction() * 100).toFixed(2));
        s.shieldThermalDamageReduction((ship.ShieldThermalDamageReduction() * 100).toFixed(2));
        s.armorHP(ship.armorHP().toFixed(0));
        s.armorEMDamageReduction((ship.ArmorEMDamageReduction() * 100).toFixed(2));
        s.armorExplosiveDamageReduction((ship.ArmorExplosiveDamageReduction() * 100).toFixed(2));
        s.armorKineticDamageReduction((ship.ArmorKineticDamageReduction() * 100).toFixed(2));
        s.armorThermalDamageReduction((ship.ArmorThermalDamageReduction() * 100).toFixed(2));
        s.structureHP(ship.structureHP().toFixed(0));
        s.structureEMDamageReduction((ship.HullEMDamageReduction() * 100).toFixed(2));
        s.structureExplosiveDamageReduction((ship.HullExplosiveDamageReduction() * 100).toFixed(2));
        s.structureKineticDamageReduction((ship.HullKineticDamageReduction() * 100).toFixed(2));
        s.structureThermalDamageReduction((ship.HullThermalDamageReduction() * 100).toFixed(2));
    }


    

}



var wvm = new WafleUIViewModel();
ko.applyBindings(wvm);

