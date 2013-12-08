/// <reference path="../Wafle/wafleInterfaces.ts" />
/// <reference path="../Wafle/wafleCore.ts" />
/// <reference path="Scripts/typings/jquery/jquery.d.ts" />
/// <reference path="Scripts/typings/angularjs/angular.d.ts" />

interface IWafleScope extends ng.IScope {
    AllShips: any;
    AllPilotSkillLevelsSpike : number[];
    selectedShipTypeId: number;
    selectedPilotSkillLevelSpike: number;
    selectedShipChange: () => void;
    selectedPilotSkillLevelSpikeChange: () => void;
    setShip: (number) => void;
    setPilotSkillLevelSpike: (number) => void;
    ship: Wafle.Ship;
    slotDisplayStyle: (string, number) => string;
}

function WafleController($scope: IWafleScope) {

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
    
    $scope.AllPilotSkillLevelsSpike = [0, 1, 2, 3, 4, 5];
    $scope.AllShips = Wafle.FindNamedTypesByGroup(25); //todo: just frigates for now.
    $scope.selectedShipTypeId = 593; //tristan = default ship.
    $scope.selectedPilotSkillLevelSpike = 0;
    $scope.setShip($scope.selectedShipTypeId);

    $scope.slotDisplayStyle = (slotType: string, slotIndex: number) => {
        var slotCount;
        if (slotType == "hi") {
            slotCount = $scope.ship.baseShipData.highSlotCount;
        } else if (slotType == "mid") {
            slotCount = $scope.ship.baseShipData.midSlotCount;
        } else if (slotType == "low") {
            slotCount = $scope.ship.baseShipData.lowSlotCount;
        } else if (slotType == "rig") {
            slotCount = $scope.ship.baseShipData.rigSlotCount;
        }
        return slotIndex <= slotCount - 1 ? "validSlot" : "";
    }
}



window.onload = () => {
};