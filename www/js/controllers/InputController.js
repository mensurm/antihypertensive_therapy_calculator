
app.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('index', {
      url: '/',
      templateUrl: 'templates/input/input.html',
      controller: 'InputController'
    });
  $urlRouterProvider.otherwise('/');
});


angular.module("calculator.controllers", []).controller('InputController', function ($scope, drugsService) {

  $scope.data = {
    sourceDrugs: drugsService.getSourceDrugs(),
    targetDrugs: drugsService.getTargetDrugs(),
    dosages: drugsService.getSourceDrugDosages()
  }

  $scope.sourceDrug = drugsService.getSourceDrug();
  $scope.targetDrug = drugsService.getTargetDrug();
  $scope.dosage = drugsService.getSourceDrugDosage();

  $scope.setSourceDrug = function (drug) {
    drugsService.setSourceDrug(drug);
    
    // repopulate the select box with the available dosages 
    $scope.data.dosages = drugsService.getDrugDosages(drug);

    // set defualt choice     
    $scope.setDrugDosage($scope.data.dosages[0]);
    $scope.dosage = drugsService.getSourceDrugDosage();
  };

  $scope.setTargetDrug = function (drug) {
    drugsService.setTargetDrug(drug);
  };

  $scope.setDrugDosage = function(dosage){
    drugsService.setSourceDrugDosage(dosage);
  }

});

