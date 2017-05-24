
app.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('index', {
      url: '/',
      templateUrl: 'templates/input/source_drug.html',
      controller: 'SourceDrugController'
    });
  $urlRouterProvider.otherwise('/');
});


angular.module("calculator.controllers", []).controller('SourceDrugController', function ($scope, drugsService) {

  $scope.data = {
    sourceDrugs: drugsService.getSourceDrugs()
  }
  
  $scope.setSourceDrug = function (drug) {
    drugsService.setSourceDrug(drug);
  };

});

