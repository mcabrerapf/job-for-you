angular.module("myApp")
//Filters by city
.controller("findBestSalaryRegion", function($scope, getInfoService ) {

	$scope.findBestSalaryByRegion = function(e) {
		e.preventDefault();
		console.log("yes")
		getInfoService.getRegion($scope.regionName)
		.then( function(response) {
			$scope.ofertas = response.data.offers
		})

	}
	$scope.findByBestCompanyOffers = function( companyName ) {
		getInfoService.getCompanyOffers(companyName)
		.then( function(response) {
			$scope.ofertasCC = response.data.offers
			console.log($scope.ofertasCC)
		})

	}
})

//Filters by work field
.controller("findBestSalaryField", function($scope, getInfoService ) {

	$scope.findBestSalaryByField = function(e) {
		e.preventDefault();
		getInfoService.getOffers($scope.fieldName)
		.then( function(response) {
			$scope.ofertas = response.data.offers
		})

	}
	$scope.findByBestCompanyOffers = function( companyName ) {
		getInfoService.getCompanyOffers(companyName)
		.then( function(response) {
			$scope.ofertasCC = response.data.offers
			console.log($scope.ofertasCC)
		})

	}

})
//Shows top paying companies
.controller("findBestSalaryCompany", function($scope, getInfoService ) {
	$scope.findBestSalaryByCompany = function(e) {
		e.preventDefault();
		getInfoService.getCompany()
		.then( function(response) {
			$scope.ofertas = response.data.offers
		})

	}
	$scope.findByBestCompanyOffers = function( companyName ) {
		getInfoService.getCompanyOffers(companyName)
		.then( function(response) {
			$scope.ofertasCC = response.data.offers
			console.log($scope.ofertasCC)
		})

	}

})
//Shows all offers by specific company
// .controller("findBestSalaryCompanyOffers", function($scope, getInfoService ) {
// 	$scope.findByBestCompanyOffers = function( companyName ) {
// 		getInfoService.getCompanyOffers(companyName)
// 		.then( function(response) {
// 			$scope.ofertasCC = response.data.offers
// 			console.log($scope.ofertasCC)
// 		})

// 	}
// })
.controller('homeController',function($scope){
	$scope.classController = 'home';
})