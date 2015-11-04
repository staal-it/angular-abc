;(function(){
	
	'use strict';
	
	angular.module('sandbox', ['ngRoute'])
	
	.value('objectData', {
		count: '17'
	})
	
	.config(function($routeProvider){
		$routeProvider
		.when('/', {
			templateUrl: 'app/main/menu.html'
		})
		.when('/controllerExamples', {
			templateUrl: 'app/controllerExamples/controllerExamples.html'
		})
		.when('/watchExamples', {
			templateUrl: 'app/watchExamples/watchExamples.html'
		})
		.when('/serviceExamples', {
			templateUrl: 'app/serviceExamples/serviceExamples.html',
			controller: 'ServiceExamplesController',
			controllerAs: 'vm'
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
	.controller('ServiceExamplesController', function(objectData){
		var vm = this;
		
		vm.obj = objectData;
	})
	.controller('WatchController', function($scope){
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