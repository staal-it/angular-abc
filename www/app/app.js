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
		var vm = this;
		
		$scope.$watch(
			function() { return vm.person.name; }, 
			function(newValue, oldValue){
			console.log('Name is now ', vm.person.name);
		})
		/*
		
		$scope.$watchGroup(['person.name', 'person.title'], function (){
			console.log('Name or title changed');
		});
		
		$scope.$watchCollection('person', function(newValue, oldValue){
			console.log('Person changed from ', oldValue , newValue);
		}) 
		*/
	})
	;
})()