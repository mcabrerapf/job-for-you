angular.module("myApp")
//Filters by city
.controller("findBestSalaryRegion", function($scope, getInfoService ) {

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

//Filters by work field
.controller("findBestSalaryField", function($scope, getInfoService ) {

	$scope.findBestSalaryByField = function(e) {
		e.preventDefault();
		getInfoService.getOffers($scope.fieldName)
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
					$scope.ofertas[i].descripti = "No hay requerimientos minimos para aplicar a este trabajo. APLICA AHORA!!!"
				}
			}
			console.log($scope.ofertas)
		})

	}
	$scope.findByBestCompanyOffers = function( companyName ) {
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
//Shows top paying companies
.controller("findBestSalaryCompany", function($scope, getInfoService ) {
	$scope.findBestSalaryByCompany = function(e) {
		e.preventDefault();
		getInfoService.getCompany()
		.then( function(response) {
			$scope.ofertas = response.data.offers
			console.log($scope.ofertas)
			$scope.ofertasFinal = []
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
				$scope.ofertasFinal[i] = {name: $scope.ofertas[i].author.name, value: $scope.ofertas[i].salarioM}

				//
				//Ofertas con nombre de compañia
				$scope.authorName = $scope.ofertas[i].author.name

				if($scope.authorName.length < 2){
					
					$scope.ofertas[i].author.val = 'false'
				}else{
					$scope.ofertas[i].author.val = 'true'
				}
			}
			console.log($scope.ofertasFinal)
			console.log($scope.ofertasFinal[1].name)
			for(j=0; j < $scope.ofertasFinal.length; j++){
				console.log($scope.ofertasFinal[j].name)
				for(k=1; k < $scope.ofertasFinal.length - 1; k++){
					if($scope.ofertasFinal[j].name == "."){
						$scope.ofertasFinal.splice(j, 1)
					}else if ($scope.ofertasFinal[j].name == $scope.ofertasFinal[k + 1].name){
						$scope.ofertasFinal.splice((k+1), 1)
					}
				}
			}
			console.log($scope.ofertasFinal)
			
			console.log($scope.ofertas)
		})

	}
	$scope.findByBestCompanyOffers = function( companyName ) {
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
.controller('homeController',function($scope){
	$scope.classController = 'home';
})