;(function(){
	
	'use strict';
	
	angular.module('sandbox', ['ngRoute'])
	
	.config(function($routeProvider){
		$routeProvider
		.when('/', {
			template: '<h1>This is working!</h1>'
		})
		.otherwise({
			redirectTo: '/'
		})
		;
	})
	
	.controller('MainController', function($scope){
		$scope.stuff = 'working!';
	})
	;
})()