
app.config(function($stateProvider) {
  $stateProvider
  .state('results', {
    url: '/results',
    templateUrl: 'templates/results/results.html',
    controller: 'ResultsController'
  });
});



app.controller('ResultsController', function($scope, drugsService){
		$scope.sourceDrug = drugsService.getSourceDrug();
		$scope.targetDrug = drugsService.getTargetDrug();
	
	
});