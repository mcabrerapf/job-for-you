angular.module("myApp", ['ngRoute'])
	.config( function($routeProvider) {

			$routeProvider
				.when('/', {
					templateUrl: 'view/home.html',
					controller: 'homeController'
				})
				.when('/sector', {
					templateUrl: 'view/sector.html',
					controller: 'searchBySalary'
				})
				.when('/region', {
					templateUrl: 'view/region.html',
					controller: 'searchBySalary'
				})
				.when('/companies', {
					templateUrl: 'view/companies.html',
					controller: 'searchBySalary'
				})
				.otherwise({redirectTo: '/'});

	})