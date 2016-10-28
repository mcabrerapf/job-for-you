angular.module("myControllers")
	.controller("findBestSalaryRegion", function($scope, $rootScope, getInfoService ) {

		$rootScope.section = 'region';
		$rootScope.sectionIcon = 'briefcase';
		$rootScope.sectionTitle = 'Region';
		$rootScope.sectionDescription = 'Busca el mejor trabajo según tu ciudad o provincia.';

		$scope.findBestSalaryByRegion = function(e) {
			e.preventDefault();
			console.log("yes")
			getInfoService.getRegion($scope.regionName)
			.then( function(response) {
				$scope.ofertas = response.data.offers
				//ofertas con precio real
				for (i=0; i < $scope.ofertas.length; i++){
					$scope.sal = $scope.ofertas[i].salaryMax.value
					$scope.salari = $scope.sal.replace(".","")
					$scope.salario = $scope.salari.replace("€","")
					$scope.ofertas[i].salarioM = Number($scope.salario)
					$scope.descrip = $scope.ofertas[i].requirementMin
					$scope.descripti = $scope.descrip.split(" ")
					$scope.descripti.length = 25
					$scope.descripti = $scope.descripti.join(" ")
					if ($scope.descripti.length > 24){
						$scope.ofertas[i].descripti = $scope.descripti + "..."
					}else{
						$scope.ofertas[i].descripti = "No hay requerimientos minimos para aplicar a este trabajo."
					}
				}
				console.log($scope.ofertas)
			})

		}
		$scope.findByBestCompanyOffers = function( companyName ) {
			console.log(companyName)
			getInfoService.getCompanyOffers(companyName)
			.then( function(response) {
				$scope.ofertasCC = response.data.offers
				console.log($scope.ofertasCC)
				for (i=0; i < $scope.ofertasCC.length; i++){
					$scope.sal = $scope.ofertasCC[i].salaryMax.value
					$scope.salari = $scope.sal.replace(".","")
					$scope.salario = $scope.salari.replace("€","")
					$scope.ofertasCC[i].salarioM = Number($scope.salario)
				}
			})

		}
	})