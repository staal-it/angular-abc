;(function(){
	
	'use strict';
	
	angular.module('sandbox', ['ngRoute'])
	
	.config(function($routeProvider){
		$routeProvider
		.when('/', {
			templateUrl: 'app/main/menu.html'
		})
		.when('/controllerExamples', {
			templateUrl: 'app/controllerExamples/controllerExamples.html'
		})
		.otherwise({
			redirectTo: '/'
		})
		;
	})
	
	.controller('MainController', function($scope){
		$scope.stuff = 'working!';
	})
	.controller('FirstController', function($scope){
		$scope.name = 'Darth';
	})
	.controller('SecondController', function($scope){
		$scope.name = 'Darth';
	})
	.controller('ThirdController', function($scope){
		$scope.$watch('person', function(newValue, oldValue){
			console.log('Person changed from ', oldValue , newValue);
		}, true) // true for deep watch
	})
	;
})()