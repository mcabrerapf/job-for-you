angular.module('myControllers')
	.controller('OffersByCompanyCtrl', function($scope, $rootScope, getInfoService, $routeParams ){

		$scope.companyName = $routeParams.companyName;
		$rootScope.sectionTitle = 'Ofertas de: ' + $scope.companyName;
		console.log("we're at OffersByCompanyCtrl")

		getInfoService.getCompanyOffers($scope.companyName)
			.then( function(response) {

				$scope.ofertas = response.data.offers
				console.log($scope.ofertas)
				for (i=0; i < $scope.ofertas.length; i++){
					$scope.sal = $scope.ofertas[i].salaryMax.value
					$scope.salari = $scope.sal.replace(".","")
					$scope.salario = $scope.salari.replace("€","")
					$scope.ofertas[i].salarioM = Number($scope.salario)
				}

			})


	})