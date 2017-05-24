
app.config(function($stateProvider) {
  $stateProvider
  .state('source-dosage', {
    url: '/source-dosage',
    templateUrl: 'templates/input/source_dosage.html',
    controller: 'SourceDosageController'
  });
});



app.controller('SourceDosageController', function($scope, drugsService){
		
    $scope.data = {
      dosages: drugsService.getSourceDrugDosages()
    }

    $scope.setSourceDrugDosage = function(dosage){
      drugsService.setSourceDrugDosage(dosage);
    }


	
});