angular.module("myApp")
.factory('getInfoService', function($http) {

	function getOffers(fieldName) {
		return $http.get("https://boiling-plains-16324.herokuapp.com/offer?contractType=indefinido&salaryMin=2000&maxResults=500&q=" + fieldName);
	}

	function getRegion(regionName) {
		return $http.get("https://boiling-plains-16324.herokuapp.com/offer?contractType=indefinido&showPay=true&salaryMin=2000&maxResults=500&province=" + regionName)
	}
	function getCompany() {
		return $http.get("https://boiling-plains-16324.herokuapp.com/offer?contractType=indefinido&salaryMin=2000&maxResults=500&order=author")
	}


	return {
		getOffers: getOffers,
		getRegion: getRegion,
		getCompany: getCompany
		
	}
})


// "https://boiling-plains-16324.herokuapp.com/offer?contractType=indefinido&salaryMin=2000&maxResults=100&companyName=dialoga-groups"