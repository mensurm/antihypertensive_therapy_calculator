
app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('index', {
    url: '/',
    templateUrl: 'templates/input/input.html',
    controller: 'InputController'
  });
  $urlRouterProvider.otherwise('/');
});


app.controller('InputController', function($scope){
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

