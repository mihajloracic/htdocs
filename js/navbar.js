app.controller('navbarController', function($scope, $http) {
    $scope.asd = 'mihajlo'
    $scope.menuItems = [
        { id: 'fmiPrometPokupcima.html', name: 'Promet po kupcima' },
        { id: 'banke.html', name: 'Sifranik banka' },
        { id: 'index.html', name: 'Pocetna' },
        { id: 'pregledkupacadobavljaca.html', name: 'pregled kupaca  i dobavljaca' },
        { id: 'IzvestajTroskova.html', name: 'Izvestaj troskova' }
    ];
    $scope.level1Options = {
        onSelect: function (item) {
            window.location = item.id
        },
        displayText : "Pretraga menija...",
        emptySearchResultText : "nema rezultata za $0"
    };
});