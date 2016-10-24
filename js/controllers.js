angular.module("myApp")
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
			
		// })
	}
})
