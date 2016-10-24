angular.module("myApp")
.controller("searchBySalary", function($scope, $rootScope, getInfoService) {
	$scope.findBestSalary = function(e) {

		getInfoService.getPopular()
		.then( function(response) {
			console.log(response)
			$scope.movie_titles = response.data.results
			
})

