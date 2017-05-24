app.config(function($stateProvider) {
  $stateProvider
  .state('results', {
    url: '/results',
    templateUrl: 'templates/results/target_drug_desc.html',
    controller: 'ResultController'
  });
});


app.controller('ResultController', function($scope, drugsService){
  $scope.sourceDrug = drugsService.getSourceDrug();
  $scope.targetDrug = drugsService.getTargetDrug();
  $scope.sourceDrugDosage = drugsService.getSourceDrugDosage();
  $scope.targetDrugDosage = drugsService.getTargetDrugDosage();

});

