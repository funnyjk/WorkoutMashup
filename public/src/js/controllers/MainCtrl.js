angular.module('MainCtl', ['ui.router'])
	.controller('mainController',['$scope', '$state',  function($scope, $state) {
		$scope.head = "Workout Mashup";
}]);