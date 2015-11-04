;(function(){
	
	'use strict';
	
	angular.module('sandbox', ['ngRoute'])
	
	.constant('API_CONFIG', {
		API_URL: 'http://google.nl'
	})
	
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
	
	.service('handyStringUtilsService', function () {
		this.makeUppercase = function (s){
			return s.toUpperCase();
		}
		
		this.makeLowercase = function (s){
			return s.toLowerCase();
		}
	})
	
	.factory('handyStringUtilsFactory' , function(){
		return {
			makeUppercase: function (s){
				return s.toUpperCase();
			},
			
			makeLowercase: function (s){
				return s.toLowerCase();
			}
		};
	})
	
	.factory('makeUppercase', function(){
		return function (s) {
			return s.toUpperCase();
		}
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
	.controller('ServiceExamplesController', 
		function(objectData, handyStringUtilsService, makeUppercase){
		var vm = this;
		
		vm.obj = objectData;
		
		console.log('Uppercase: ' + handyStringUtilsService.makeUppercase('test string'));
		
		console.log('Uppercase with fac: ' + makeUppercase('test string'));
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