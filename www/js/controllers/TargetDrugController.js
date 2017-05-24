app.config(function($stateProvider) {
  $stateProvider
  .state('target-drug', {
    url: '/target-drug',
    templateUrl: 'templates/input/target_drug.html',
    controller: 'TargetDrugController'
  });
});




app.controller('TargetDrugController', function($scope, drugsService){
  $scope.data = {
    targetDrugs: drugsService.getTargetDrugs()
  }
  
  $scope.setTargetDrug = function (drug) {
    drugsService.setTargetDrug(drug);
  };

});

