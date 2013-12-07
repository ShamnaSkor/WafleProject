/// <reference path="../Wafle/wafleInterfaces.ts" />
/// <reference path="../Wafle/wafleCore.ts" />
/// <reference path="Scripts/typings/jquery/jquery.d.ts" />
/// <reference path="Scripts/typings/angularjs/angular.d.ts" />


interface IWafleScope extends ng.IScope {
    ships: any;
    shipTypeId: number;
}



function WafleController($scope: IWafleScope) {

    $scope.ships = Wafle.FindNamedTypesByGroup(25);

    $scope.shipTypeId = 593;
}



window.onload = () => {
    //var el = document.getElementById('content');
    //var greeter = new Greeter(el);
    //greeter.start();
};