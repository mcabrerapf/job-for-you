angular.module("myApp")

.controller("searchBySalary", function($scope) {
	$scope.findBestSalary = function(e) {
		e.preventDefault();
		console.log("hello")

	}
})
