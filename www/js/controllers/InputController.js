
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
  $scope.dosage = drugsService.getSourceDrugDosage

  $scope.setSourceDrug = function (drug) {
    drugsService.setSourceDrug(drug);
    $scope.dosages = drugsService.getDrugDosages(drug);
    console.log(drugsService.getSourceDrug());
  };

  $scope.setTargetDrug = function (drug) {
    drugsService.setTargetDrug(drug);
    console.log(drugsService.getTargetDrug());
  };

  $scope.setDrugDosage = function(dosage){
    drugsService.setSourceDrugDosage(dosage);
  }




  /*  $scope.primaryDrugDosage = {
      options: $scope.primaryDrug.selected.dosages,
      selected: $scope.primaryDrug.selected.dosages[0]
    }
  
    $scope.secondaryDrug = {
    options : drugsService.getTargetDrugs(),
    selected : drugsService.getTargetDrugs()[1]
    }
  
  
    
  
  
      $scope.onSecondaryDrugChange = function() {
       
    };*/

});

