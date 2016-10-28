angular.module("myApp", ['ngRoute', 'myControllers'])
	.config( function($routeProvider) {

			$routeProvider
				.when('/', {
					templateUrl: 'view/home.html',
					controller: 'homeController'
				})
				.when('/sector', {
					templateUrl: 'view/sector.html',
					controller: 'findBestSalaryField'
				})
				.when('/region', {
					templateUrl: 'view/region.html',
					controller: 'findBestSalaryRegion'
				})
				.when('/companies', {
					templateUrl: 'view/companies.html',
					controller: 'findBestSalaryCompany'
				})
				.when('/companies/:companyName', {
					templateUrl: 'view/offersByCompany.html',
					controller: 'OffersByCompanyCtrl'
				})
				.otherwise({redirectTo: '/'});

	})