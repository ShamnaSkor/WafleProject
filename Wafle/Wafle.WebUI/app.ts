/// <reference path="../Wafle/wafleInterfaces.ts" />
/// <reference path="../Wafle/wafleCore.ts" />
/// <reference path="Scripts/typings/jquery/jquery.d.ts" />
/// <reference path="Scripts/typings/angularjs/angular.d.ts" />


interface IWafleScope extends ng.IScope {
    ships: any;
    shipTypeId: number;
    selectedShipChange: () => void;
    setShip: (number) => void;
    theShip: Wafle.Ship;
}



function WafleController($scope: IWafleScope) {

    $scope.ships = Wafle.FindNamedTypesByGroup(25);

    $scope.shipTypeId = 593;

    $scope.selectedShipChange = () => {
        $scope.setShip($scope.shipTypeId);
    }

    $scope.setShip = (theShipTypeId: number) => {
        $scope.theShip = new Wafle.Ship(theShipTypeId);
    }

    $scope.setShip($scope.shipTypeId); //initial ship.
}



window.onload = () => {
    //var el = document.getElementById('content');
    //var greeter = new Greeter(el);
    //greeter.start();
};