angular.module("myApp")
.controller("searchBySalary", function($scope, $rootScope, getInfoService) {
	$scope.findBestSalary = function(e) {

		getInfoService.getCompany($scope.fieldName)
		.then( function(response) {
			console.log(response)
			$scope.ofertas = response.data.offers
			
})

