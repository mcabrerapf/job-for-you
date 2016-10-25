angular.module("myApp")

.controller("searchBySalary", function($scope, getInfoService ) {
	$scope.findBestSalaryRegion = function(e) {
		e.preventDefault();
		getInfoService.getRegion($scope.regionName)
		.then( function(response) {
			$scope.ofertasR = response.data.offers
			console.log($scope.ofertasR)

		})

	}
	$scope.findBestSalaryField = function(e) {
		e.preventDefault();
		getInfoService.getOffers($scope.fieldName)
		.then( function(response) {
			$scope.ofertasF = response.data.offers
			console.log($scope.ofertasF)

		})

	}

	$scope.findBestSalaryCompany = function(e) {
		e.preventDefault();
		getInfoService.getCompany()
		.then( function(response) {
			$scope.ofertasC = response.data.offers
			console.log($scope.ofertasC)

		})

	}
	$scope.findBestCompanyOffers = function(e) {
		e.preventDefault();
		console.log($scope.companyName)
		getInfoService.getCompanyOffers($scope.companyName)
		.then( function(response) {
			$scope.ofertasCC = response.data.offers
			console.log($scope.ofertasCC)

		})

	}

})
.controller('homeController',function(){
	$scope.homeClass = home;
	
})





