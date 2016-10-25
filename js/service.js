angular.module("myApp")
.factory('getInfoService', function($http) {

	function getOffers(fieldName) {
		return $http.get("https://boiling-plains-16324.herokuapp.com/offer?contractType=indefinido&salaryMin=2000&maxResults=50&q=" + fieldName);
	}

	function getRegion(regionName) {
		return $http.get("https://boiling-plains-16324.herokuapp.com/offer?contractType=indefinido&showPay=true&salaryMin=2000&maxResults=50&province=" + regionName)
	}
	function getCompany() {
		return $http.get("https://boiling-plains-16324.herokuapp.com/offer?contractType=indefinido&salaryMin=2000&maxResults=50&order=author")
	}
		function getCompanyOffers(companyName) {
		return $http.get("https://boiling-plains-16324.herokuapp.com/offer?contractType=indefinido&salaryMin=2000&maxResults=50&order=author&companyName=" + companyName)
	}


	return {
		getOffers: getOffers,
		getRegion: getRegion,
		getCompany: getCompany,
		getCompanyOffers: getCompanyOffers
		
	}
})


// "https://boiling-plains-16324.herokuapp.com/offer?contractType=indefinido&salaryMin=2000&maxResults=100&companyName=dialoga-groups"