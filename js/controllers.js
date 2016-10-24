angular.module("myApp")

.controller("searchBySalary", function($scope, getInfoService ) {
	$scope.findBestSalary = function(e) {
		e.preventDefault();
		console.log("hello")

		getInfoService.getCandidate()
			.then( function(response) {
				console.log("yes")
				console.log(response)

			})




	}
})
