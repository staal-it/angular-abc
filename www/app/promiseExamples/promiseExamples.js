;(function(){
	'use strict';
	
	angular.module('PromiseExamples', [])
	.controller('PromiseController', function($http){
		var vm = this;
		
		var p = $http.get('http://swapi.co/api/people/1/');
		
		p.then(function(response){
			return response.data;
		}).then(function(response){
			console.log(response);
		});
	});
})();