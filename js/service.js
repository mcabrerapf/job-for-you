angular.module("myApp")
.factory('getInfoService', function($http) {

	function getOfferts() {
		return $http.get("https://api.infojobs.net/api/1/offer?contractType=indefinido&salaryMin=500");
	}

	function getCandidate() {
		return $http.get("test.json");
	}
	function getRegion(Name) {
		return $http.get("https://api.infojobs.net/api/1/offer?contractType=indefinido&province=" + Name)
	}
	function getCompany(category) {
		return $http.get("https://api.infojobs.net/api/1/offer?contractType=indefinido&category=" + category)
	}


	return {
		getOfferts: getOfferts,
		getCandidate: getCandidate,
		getRegion: getRegion,
		getCompany: getCompany
		
	}
})


