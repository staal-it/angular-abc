;(function(){
	'use strict';
	
	angular.module('PromiseExamples', [])
	
	.factory('SwapiFactory',  function($http){
		function getPerson(id){
			return $http.get('http://swapi.co/api/people/' + id + '/').then(function(response){
				return response.data;
			});
		}
		
		function getPlanet(uri){
			return $http.get(uri).then(function(response){
				return response.data;
			});
		}
		
		function getRichPerson(id){
			var person;
			return getPerson(id).then(function(data){
				person = data;
				
				return getPlanet(data.homeworld);
			})
			.then(function(data){
				person.homeworldData = data;
				
				return person;
			});
		}
		
		return {
			getPerson: getPerson,
			getPlanet: getPlanet,
			getRichPerson: getRichPerson
		};
	})
	
	.controller('PromiseController', function($http, SwapiFactory, $q, $timeout){
		var vm = this;
		/*
		var p = SwapiFactory.getPerson(1);
		
		p.then(function(response){
			console.log(response);
		});
		
		p.then(function(data){
			return SwapiFactory.getPlanet(data.homeworld);
		}).then(function(data){
			console.log(data);
		})
		
		
		SwapiFactory.getRichPerson(3).then(function(data){
			console.log(data);
			vm.data = data;
		});
		*/
		
		$timeout(function(){}, 3000).then(function(){
			console.log('Timer');
		});
		
		var lotsOfPeoplePromises = [
			SwapiFactory.getPerson(1),
			SwapiFactory.getPerson(2),
			SwapiFactory.getPerson(3),
			SwapiFactory.getPerson(4)
		];
		
		$q.all(lotsOfPeoplePromises).then(function(data){
			console.log(data);
			vm.data = data;
		});
	});
})();