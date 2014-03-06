
import Wafle = require('../Wafle/wafle');

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
                s().indexInType(i);
                s().slotType(Wafle.FittingSlotType[slotTypes[sti]]);
                s().isAvailableOnShip(false);
                slots.push(s);
            }
        }
        return slots;
    }
}

class FittingSlotDisplay {
    public slotType: KnockoutObservable<string> = ko.observable<string>();
    public indexInType: KnockoutObservable<number> = ko.observable<number>();
    public indexOnShip: KnockoutObservable<number> = ko.observable<number>();
    public isAvailableOnShip: KnockoutObservable<boolean> = ko.observable<boolean>();
    public UpdateInfoFromFittingSlot(theFittingSlot: Wafle.FittingSlot): void {
        this.fittedModuleName(theFittingSlot.baseShipEquipmentData.name);
    }
    public fittedModuleName: KnockoutObservable<string> = ko.observable<string>();
    public cssDisplay: KnockoutComputed<string> = ko.computed<string>((): string => {
        return this.slotType() + (this.isAvailableOnShip() == true ? " validSlot" : "");
    });
    public slotText: KnockoutComputed<string> = ko.computed<string>((): string => {
        return (this.slotType() || "") + (this.indexInType() || "");
    });
}

class EquipmentGroupSpike {
    constructor(public groupId: number, public name: string) { }
}

class WafleUIViewModel {
    private subscriptions : KnockoutSubscription[]= [];
    public AllShips: KnockoutObservableArray<Wafle.INamedType> = ko.observableArray<Wafle.INamedType>();
    public AllShipEquipmentGroups: KnockoutObservableArray<EquipmentGroupSpike> = ko.observableArray<EquipmentGroupSpike>(this.AllEquipmentGroupsSpike());
    public SelectedShipTypeId: KnockoutObservable<number> = ko.observable<number>();
    public SelectedShipEquipmentGroupId: KnockoutObservable<number> = ko.observable<number>();
    public AllPilotSkillLevelsSpike: number[] = [1, 2, 3, 4, 5];
    public SelectedPilotSkillLevelSpike: KnockoutObservable<number> = ko.observable<number>();
    public Ship: KnockoutObservable<ShipStatsModel> = ko.observable<ShipStatsModel>();
    private ship: Wafle.Ship;

    private AllEquipmentGroupsSpike(): EquipmentGroupSpike[]{
        //todo: refactor as proper data-driven module in Wafle.Data.
        return [new EquipmentGroupSpike(38, "Shield Extender"),
            new EquipmentGroupSpike(46, "Propulsion"),
            new EquipmentGroupSpike(59, "Gyrostabilizer"),
            new EquipmentGroupSpike(55, "Projectile Weapon")];
    }

    constructor() {
        this.QuickLoadShips();
        this.EstablishSubscriptions();
        this.SetUpShip();
        this.Ship(new ShipStatsModel());
    }

    private EstablishSubscriptions() : void {
        this.subscriptions.push(this.SelectedShipTypeId.subscribe(n => {
            this.SetUpShip();
            this.RefreshShipDisplay();
        }));
        this.subscriptions.push(this.SelectedPilotSkillLevelSpike.subscribe(n => {
            this.SetUpShip();
            this.RefreshShipDisplay();
        }));
        this.subscriptions.push(this.SelectedShipEquipmentGroupId.subscribe(n => {
            this.RefreshShipEquipmentList();
        }));
    }

    private QuickLoadShips(): void {
        ko.utils.arrayPushAll<Wafle.INamedType>(this.AllShips, Wafle.TypeInfo.FindNamedTypesByGroup(25));  //todo: just frigates for now.
        this.AllShips.valueHasMutated();
    }

    private RefreshShipEquipmentList(): void {
        if (!this.SelectedShipEquipmentGroupId()) {
            return;
        }

        var ul: HTMLUListElement = document.createElement("ul");
        ul.id = "shipEquipmentTypeList";

        var elements: Wafle.INamedType[] = Wafle.TypeInfo.FindNamedTypesByGroup(this.SelectedShipEquipmentGroupId());
        for (var i = 0; i < elements.length; i++) {
            var li: HTMLLIElement = document.createElement("li");
            if (!!li.setAttribute) {
                li.setAttribute("data-groupId", elements[i].groupId.toString())
                li.setAttribute("data-typeId", elements[i].typeId.toString())
            }
            li.innerHTML = elements[i].name;
            ul.appendChild(li);
        }
        var oldList = document.getElementById("shipEquipmentTypeList");
        oldList.parentNode.replaceChild(ul, oldList);
        this.makeShipEquipmentDraggable();
    }

    private SetUpShip(): void {
        if (!this.SelectedShipTypeId()) {
            return;
        }
        console.log("The selected ship type ID is " + this.SelectedShipTypeId().toString());
        if (!this.ship || !this.ship.baseShipData || this.ship.baseShipData.typeId != this.SelectedShipTypeId()) {
            this.ship = new Wafle.Ship(this.SelectedShipTypeId());
        }
        this.ship.pilot = new Wafle.Pilot("");
        this.ship.pilot.skills.SetAllSkills(this.SelectedPilotSkillLevelSpike());
    }

    private RefreshShipDisplay(): void {
        if (!this.SelectedShipTypeId()) {
            return;
        }
        var model = this.Ship();
        this.RecalculateFittingSlots(this.ship,model);
        model.cpu(this.ship.cpuString());
        model.remainingCpu(this.ship.remainingCpu().toFixed(2));
        model.powergrid(this.ship.powergridString());
        model.remainingPowergrid(this.ship.remainingPowergrid().toFixed(2));
        model.shieldHP(this.ship.shieldHP().toFixed(0));
        model.shieldEMDamageReduction((this.ship.ShieldEMDamageReduction() * 100).toFixed(2));
        model.shieldExplosiveDamageReduction((this.ship.ShieldExplosiveDamageReduction() * 100).toFixed(2));
        model.shieldKineticDamageReduction((this.ship.ShieldKineticDamageReduction() * 100).toFixed(2));
        model.shieldThermalDamageReduction((this.ship.ShieldThermalDamageReduction() * 100).toFixed(2));
        model.armorHP(this.ship.armorHP().toFixed(0));
        model.armorEMDamageReduction((this.ship.ArmorEMDamageReduction() * 100).toFixed(2));
        model.armorExplosiveDamageReduction((this.ship.ArmorExplosiveDamageReduction() * 100).toFixed(2));
        model.armorKineticDamageReduction((this.ship.ArmorKineticDamageReduction() * 100).toFixed(2));
        model.armorThermalDamageReduction((this.ship.ArmorThermalDamageReduction() * 100).toFixed(2));
        model.structureHP(this.ship.structureHP().toFixed(0));
        model.structureEMDamageReduction((this.ship.HullEMDamageReduction() * 100).toFixed(2));
        model.structureExplosiveDamageReduction((this.ship.HullExplosiveDamageReduction() * 100).toFixed(2));
        model.structureKineticDamageReduction((this.ship.HullKineticDamageReduction() * 100).toFixed(2));
        model.structureThermalDamageReduction((this.ship.HullThermalDamageReduction() * 100).toFixed(2));
        this.makeFittingSlotsDroppable();
    }

    private RecalculateFittingSlots(ship: Wafle.Ship, m: ShipStatsModel): void {
        if (!ship || !ship.baseShipData) {
            return;
        }
        var RegularSlotCount = 8;
        var RigSlotCount = 3;
        var modelSlotIndex = 0;
        var indexOnShip = 0;
        
        //todo: refactor to remove duplicate code.
        for (var i = 0; i < RegularSlotCount; i++) {
            m.fittingSlots()[modelSlotIndex]().isAvailableOnShip((i < ship.baseShipData.highSlotCount));
            if (m.fittingSlots()[modelSlotIndex]().isAvailableOnShip()) {
                m.fittingSlots()[modelSlotIndex]().indexOnShip(indexOnShip);
                indexOnShip++;
            } else {
                m.fittingSlots()[modelSlotIndex]().indexOnShip(null);
            }
            modelSlotIndex += 1;
        }
        for (var i = 0; i < RegularSlotCount; i++) {
            m.fittingSlots()[modelSlotIndex]().isAvailableOnShip((i < ship.baseShipData.midSlotCount));
            if (m.fittingSlots()[modelSlotIndex]().isAvailableOnShip()) {
                m.fittingSlots()[modelSlotIndex]().indexOnShip(indexOnShip);
                indexOnShip++;
            } else {
                m.fittingSlots()[modelSlotIndex]().indexOnShip(null);
            }
            modelSlotIndex += 1;
        }
        for (var i = 0; i < RegularSlotCount; i++) {
            m.fittingSlots()[modelSlotIndex]().isAvailableOnShip((i < ship.baseShipData.lowSlotCount));
            if (m.fittingSlots()[modelSlotIndex]().isAvailableOnShip()) {
                m.fittingSlots()[modelSlotIndex]().indexOnShip(indexOnShip);
                indexOnShip++;
            } else {
                m.fittingSlots()[modelSlotIndex]().indexOnShip(null);
            }
            modelSlotIndex += 1;
        }
        for (var i = 0; i < RigSlotCount; i++) {
            m.fittingSlots()[modelSlotIndex]().isAvailableOnShip((i < ship.baseShipData.rigSlotCount));
            if (m.fittingSlots()[modelSlotIndex]().isAvailableOnShip()) {
                m.fittingSlots()[modelSlotIndex]().indexOnShip(indexOnShip);
                indexOnShip++;
            } else {
                m.fittingSlots()[modelSlotIndex]().indexOnShip(null);
            }
            modelSlotIndex += 1;
        }
    }

    private makeShipEquipmentDraggable(): void {
        $(".ShipEquipmentSelect ul > li").draggable({
            appendTo: document.body,
            forcePlaceholderSize: true,
            scope: "shipEquipSlot",
            helper: "clone"//,
            //start: function (event: Event, ui: JQueryUI.DraggableEventUIParams) { }
        });
    }

    private makeFittingSlotsDroppable(): void {
        var that = this;
        $(".fittingSlots > div").droppable({
            scope: "shipEquipSlot",
            drop: function (event: Event, ui: JQueryUI.DroppableEventUIParam) {
                if (!(<any>event).originalEvent) {
                    if (console) {
                        console.log("originalEvent not found");
                    }
                }
                var shipEquipmentElement: HTMLLIElement = (<any>event).originalEvent.target;
                var fittingSlotElement: HTMLLIElement = (<any>event).target;
                var groupId : string = shipEquipmentElement.getAttribute("data-groupId");
                var typeId : string = shipEquipmentElement.getAttribute("data-typeId");
                var indexOnShip : string = fittingSlotElement.getAttribute("data-shipSlotIndex");

                if (console) {
                    console.log("dropped groupId " + groupId + ", typeId " + typeId + " on ship slot index " + indexOnShip);
                }
                that.SetModule(parseInt(groupId), parseInt(typeId), parseInt(indexOnShip));
            }
        });
    }

    private SetModule(groupId: number, typeId: number, indexOnShip: number): void {
        this.ship.fittingSlots[indexOnShip].SetModule(typeId, groupId);
        this.RefreshShipDisplay();
    }


    

}

var wvm = new WafleUIViewModel();
ko.applyBindings(wvm);

