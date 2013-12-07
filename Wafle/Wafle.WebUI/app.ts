/// <reference path="Scripts/typings/jquery/jquery.d.ts" />
/// <reference path="Scripts/typings/angularjs/angular.d.ts" />

interface IWafleScope extends ng.IScope {
    ships: any;
    shipTypeId: number;
}



function WafleController($scope : IWafleScope) {
    $scope.ships = [{ typeId: 587, name: 'Rifter' },
        { typeId: 585, name: 'Slasher' }, { typeId: 593, name: 'Tristan' }, ];

    $scope.shipTypeId = 593;
}



window.onload = () => {
    //var el = document.getElementById('content');
    //var greeter = new Greeter(el);
    //greeter.start();
};