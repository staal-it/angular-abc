;(function(){
	'use strict';
	
	angular.module('PromiseExamples', [])
	
	.factory('SwapiFactory',  function($http){
		function getPerson(id){
			return $http.get('http://swapi.co/api/people/' + id + '/').then(function(response){
				return response.data;
			});
		}
		
		return {
			getPerson: getPerson
		};
	})
	
	.controller('PromiseController', function($http, SwapiFactory){
		var vm = this;
		
		var p = SwapiFactory.getPerson(1);
		
		p.then(function(response){
			console.log(response);
		});
		
		p.then(function(data){
			return $http.get(data.homeworld);
		}).then(function(response){
			console.log(response.data);
		})
	});
})();