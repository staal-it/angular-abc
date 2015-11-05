;(function(){
	'use strict';
	
	angular.module('PromiseExamples', [])
	
	.factory('PokemonFactory', function($http, $q){
		function getPokemon(id){
			return $http.get('http://pokeapi.co/api/v1/pokemon/' + id + '/').then(function(response){
				console.log('Pokemon: ', response);
				return response.data;
			});
		}
		
		function getAbility(uri){
			return $http.get('http://pokeapi.co/' + uri).then(function(response){
				console.log('Ability: ', response.data);
				return response.data;
			});
		}
		
		function getFullPokemon(id){
			var pokemon;
			
			return getPokemon(id).then(function(data){
				pokemon = data;
				
				var abilityPromises = [];
				data.abilities.forEach(function(ability) {
					abilityPromises.push(getAbility(ability.resource_uri))
				}, this);
				
				return $q.all(abilityPromises).then(function(data){
					pokemon.abilities = data;
					return pokemon;
				});
			})
		}
		
		return {
				getFullPokemon: getFullPokemon
			};
	})
	
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
	
	.controller('PromiseController', function($http, SwapiFactory, $q, $timeout, PokemonFactory){
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
		
		
		var tp = $timeout(function(){}, 3000).then(function(){
			console.log('Timer');
			return 'bla';
		});
		
		var namedPromises = {
			personOne: SwapiFactory.getPerson(1),
			personTwo: SwapiFactory.getPerson(2)
		}
		
		var lotsOfPeoplePromises = [
			SwapiFactory.getPerson(1),
			SwapiFactory.getPerson(2),
			SwapiFactory.getPerson(3),
			SwapiFactory.getPerson(4),
			tp
		];
		
		$q.all(lotsOfPeoplePromises).then(function(data){
			console.log(data);
			vm.data = data;
		});
		
		$q.all(namedPromises).then(function(data){
			console.log(data);
		})
		*/
		
		PokemonFactory.getFullPokemon(1).then(function(data){
			vm.data = data;
			
			vm.name = data.name;
			vm.abilities = data.abilities;
		});
	});
})();