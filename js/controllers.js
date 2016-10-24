angular.module("myApp")
<<<<<<< HEAD
.controller("searchBySalary", function($scope, $rootScope, getInfoService) {
	$scope.findBestSalary = function() {
		console.log($scope.algo);
		/*getInfoService.getCompany($scope.fieldName)
		.then( function(response) {
			console.log(response)
			$scope.ofertas = response.data.offers*/
	}
=======
.controller("searchBySalary", function($scope, $rootScope) {
	$scope.findBestSalary = function(e) {
		e.preventDefault();
		console.log("hello")
		// var name = $scope.fieldName;
		
		// console.log(name)
		// getInfoService.getCompany($scope.fieldName)
		// .then( function(response) {
		// 	console.log(response)
		// 	$scope.ofertas = response.data.offers
>>>>>>> 3bef568d704cb1ccb07937ee1b18b9c3bf7b4602
			
		// })
	}
})
