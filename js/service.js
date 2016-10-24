angular.module("myApp")
.factory('getInfoService', function($http) {

<<<<<<< HEAD
			function getOfferts() {
				return $http.get("https://api.infojobs.net/api/1/offer?contractType=indefinido&salaryMin=500");
			}

			function getCandidate() {
				return url=("test.json");
			}
			function getRegion(Name) {
				return $http.get("https://api.infojobs.net/api/1/offer?contractType=indefinido&province=" + Name)
			}
			function getCompany(category) {
				return $http.get("https://api.infojobs.net/api/1/offer?contractType=indefinido&category=" + category)
			}
=======
	function getOfferts() {
		/*return $http.get("https://api.themoviedb.org/3/movie/popular?api_key=12438eee72e6338cb7859c302ec82c09&language=en-US%20Add%20Comment");*/
	}

	function getCandidate() {
		return /*$http.get("https://api.themoviedb.org/3/movie/popular?api_key=12438eee72e6338cb7859c302ec82c09&language=en-US%20Add%20Comment");*/
	}
	function getRegion(Name) {
		return $http.get("https://api.infojobs.net/api/1/offer?contractType=indefinido&province=" + Name)

		function getCompany(category) {
			return $http.get("https://api.infojobs.net/api/1/offer?contractType=indefinido&category=" + category)
		}

		return {
			getOfferts: getOfferts,
			getCandidate: getCandidate,
			getRegion: getRegion,
			getCompany: getCompany
		}
	}
})
>>>>>>> 3bef568d704cb1ccb07937ee1b18b9c3bf7b4602

