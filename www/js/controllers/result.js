
app.config(function($stateProvider) {
  $stateProvider
  .state('results', {
    url: '/results',
    templateUrl: 'templates/results/results.html',
    controller: 'ResultsController'
  });
});



app.controller('ResultsController', function($scope){
		$scope.primaryDrug = null;
	$scope.secondaryDrug = null;
	$scope.drugs = {
		"list": [
			{
				"name": "Losartan"
			},
			{
				"name": "Valsartan"
			},
			{
				"name": "Irbesartan"
			},
			{
				"name": "Candesartan"
			},
			{
				"name": "Telmisartan"
			},
			{
				"name": "Olmesartan"
			}
		],
		"selected": "Valsartan"
	};
	
});