/// <reference path="../Wafle/wafleInterfaces.ts" />
/// <reference path="../Wafle/wafleCore.ts" />
/// <reference path="Scripts/typings/jquery/jquery.d.ts" />
/// <reference path="Scripts/typings/jqueryui/jqueryui.d.ts" />
/// <reference path="Scripts/typings/angularjs/angular.d.ts" />

interface IWafleScope extends ng.IScope {
    AllShips: any;
    AllPilotSkillLevelsSpike: number[];
    selectedShipTypeId: number;
    selectedPilotSkillLevelSpike: number;
    selectedShipChange: () => void;
    selectedPilotSkillLevelSpikeChange: () => void;
    selectedEquipmentGroupChange: () => void;
    setShip: (number) => void;
    setPilotSkillLevelSpike: (number) => void;
    ship: Wafle.Ship;
    slotDisplayStyle: (string, number) => string;
    slotDisplayStyle2: (HTMLDivElement) => string;
    slotDescription: (sd: Wafle.FittingSlotType) => string;
    AllShipEquipmentGroups: () => IGroupInfo[];
    AllFittingSlots: IFittingSlot[];
    selectedGroupId: number;
    selectedTypeId: number;
    ShipEquipmentTypeInfo: () => Wafle.INamedType[] ;
    OnLoad: () => void;
    Loaded: boolean;
}

interface IGroupInfo {
    groupId: number;
    groupName: string;
}
interface IFittingSlot {
    slotType: Wafle.FittingSlotType;
    indexInType: number;
}


function WafleController($scope: IWafleScope) {

    $scope.AllShipEquipmentGroups = () => {
        var g = [{ groupId: 0, groupName: "None" },
            { groupId: 38, groupName: "Shield Extender" },
            { groupId: 46, groupName: "Propulsion" },
            { groupId: 59, groupName: "Gyrostabilizer" },
            { groupId: 55, groupName: "Projectile Weapon" }];
        return g;
    }

    $scope.AllFittingSlots = [];


    var calculateFittingSlots = ():void  => {
        //Enumerate all possible fitting slots
        var slots: IFittingSlot[] = [];
        var slotTypes = [Wafle.FittingSlotType.High, Wafle.FittingSlotType.Mid, Wafle.FittingSlotType.Low, Wafle.FittingSlotType.Rig];
        for (var sti = 0; sti < slotTypes.length; sti++) {
            var count = slotTypes[sti] == Wafle.FittingSlotType.Rig ? 3 : 8;
            for (var i = 0; i < count; i++) {
                var s = { slotType: slotTypes[sti], indexInType: i };
                slots.push(s);
            }
        }
        $scope.AllFittingSlots = slots;
    }


    $scope.slotDescription = (s: Wafle.FittingSlotType) : string => {
        return Wafle.FittingSlotType[s];
    }


    $scope.selectedEquipmentGroupChange = () => {

        var ul: HTMLUListElement = document.createElement("ul");
        ul.id = "shipEquipmentTypeList";

        var elements: Wafle.INamedType[] = [];
        if ($scope.selectedGroupId != 0) {
            elements = Wafle.FindNamedTypesByGroup($scope.selectedGroupId);
        }

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
        makeDraggable();
    }

    $scope.selectedShipChange = () => {
        $scope.setShip($scope.selectedShipTypeId);
    }

    $scope.selectedPilotSkillLevelSpikeChange = () => {
        $scope.setPilotSkillLevelSpike($scope.selectedPilotSkillLevelSpike);
    }

    $scope.setShip = (theShipTypeId: number) => {
        $scope.ship = new Wafle.Ship(theShipTypeId);
        $scope.ship.pilot = new Wafle.Pilot("not specified");
        $scope.ship.pilot.skills.SetAllSkills($scope.selectedPilotSkillLevelSpike);
    }

    $scope.setPilotSkillLevelSpike = (theSkillLevel: number) => {
        if (!$scope.ship.pilot) {
            $scope.ship.pilot = new Wafle.Pilot("not specified");
        }
        $scope.ship.pilot.skills.SetAllSkills(theSkillLevel);
    }

    $scope.slotDisplayStyle = (slotType: Wafle.FittingSlotType, slotIndex: number) => {
        var slotCount: number;
        if (slotType == Wafle.FittingSlotType.High) {
            slotCount = $scope.ship.baseShipData.highSlotCount;
        } else if (slotType == Wafle.FittingSlotType.Mid) {
            slotCount = $scope.ship.baseShipData.midSlotCount;
        } else if (slotType == Wafle.FittingSlotType.Low) {
            slotCount = $scope.ship.baseShipData.lowSlotCount;
        } else if (slotType == Wafle.FittingSlotType.Rig) {
            slotCount = $scope.ship.baseShipData.rigSlotCount;
        }
        var isValid: string = slotIndex <= slotCount - 1 ? "validSlot " : "";
        return isValid + Wafle.FittingSlotType[slotType]
    }


 
    $scope.OnLoad = () => {
        calculateFittingSlots();
        $scope.selectedShipTypeId = 593; //tristan = default ship.
        $scope.selectedGroupId = 38;
        $scope.AllPilotSkillLevelsSpike = [0, 1, 2, 3, 4, 5];
        $scope.AllShips = Wafle.FindNamedTypesByGroup(25); //todo: just frigates for now.
        $scope.selectedPilotSkillLevelSpike = 0;
        $scope.selectedGroupId = 0;
        $scope.selectedTypeId = 0;
        $scope.setShip($scope.selectedShipTypeId);
        makeDraggable();
        makeDroppable();
        $scope.Loaded = true;
    }
    
    $scope.OnLoad(); //start
     
}


function makeDraggable(): void {
    $(".ShipEquipmentSelect ul > li").draggable({
        appendTo: document.body,
        forcePlaceholderSize: true,
        scope: "shipEquipSlot",
        scroll: true,
        helper: "clone",
        drag: function (event: Event, ui: JQueryUI.DraggableEventUIParams) {
            if (console) {
                console.log("initiating drag..");
            }
        }
    });
}

function makeDroppable(): void {
    $(".fittingSlots > div").droppable({
        scope: "shipEquipSlot",
        drop: function (event: Event, ui: JQueryUI.DroppableEventUIParam) {
            var orig: HTMLLIElement = (<any>event).originalEvent.target;
            if (!(<any>event).originalEvent) {
                if (console) {
                    console.log("originalEvent not found");
                }
            }
            var groupId = orig.getAttribute("data-groupId");
            var typeId = orig.getAttribute("data-typeId");
            if (console) {
                console.log("dropped groupId " + groupId + ", typeId " + typeId);
            }
        }
    });
}

window.onload = () => {
};