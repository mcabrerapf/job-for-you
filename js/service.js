angular.module("myApp")
	.factory('getInfoService', function($http) {

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
	})
