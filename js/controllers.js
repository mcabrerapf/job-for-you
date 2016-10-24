angular.module("myApp")
.controller("nowPlayingController", function($scope, $rootScope) {
	$rootScope.activetab = 'nowPlaying';
	$scope.intro = 'Now Playing'

})

