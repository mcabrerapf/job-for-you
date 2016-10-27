angular.module("myApp")
.factory('getInfoService', function($http) {

	function getOffers(fieldName) {
		return $http.get("https://boiling-plains-16324.herokuapp.com/offer?contractType=indefinido&salaryMin=1000&maxResults=60&q=" + fieldName);
	}

	function getRegion(regionName) {
		return $http.get("https://boiling-plains-16324.herokuapp.com/offer?contractType=indefinido&salaryMin=1000&maxResults=60&province=" + regionName)
	}
	function getCompany() {
		return $http.get("https://boiling-plains-16324.herokuapp.com/offer?contractType=indefinido&salaryMin=60000&maxResults=500&order=author")
	}
		function getCompanyOffers(companyName) {
		return $http.get("https://boiling-plains-16324.herokuapp.com/offer?contractType=indefinido&salaryMin=2000&maxResults=60&order=author&companyName=" + companyName)
	}


	return {
		getOffers: getOffers,
		getRegion: getRegion,
		getCompany: getCompany,
		getCompanyOffers: getCompanyOffers
		
	}
})


// "https://boiling-plains-16324.herokuapp.com/offer?contractType=indefinido&salaryMin=2000&maxResults=100&companyName=dialoga-groups"