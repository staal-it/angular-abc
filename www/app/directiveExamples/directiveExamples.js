;(function(){
	'use strict';
	
	angular.module('DirectiveExamples', [])
	
	.directive('abcLogo', function(){
		return {
			templateUrl: 'app/directiveExamples/abclogo.html'
		}
	})
	.directive('coloredBlock', function(){
		return {
			templateUrl: 'app/directiveExamples/coloredblock.html',
			transclude: true
		}
	})
	.directive('abcNametag', function(){
		return {
			templateUrl: 'app/directiveExamples/abcnametag.html',
			controller: function($scope){
				$scope.toggleExpanded = function(){
					$scope.expanded = !$scope.expanded;
				}
			},
			scope: {
				person: '=',
				label: '@'
			}
		}
	})
	.directive('abcCalc', function(){
		return {
			templateUrl: 'app/directiveExamples/abccalc.html',
			scope: {
				first: '=',
				second: '=',
				label: '@'
			}
		}
	})
	.controller('DirectiveController', function(SwapiFactory){
		var vm = this;
		
		SwapiFactory.getPerson(1).then(function(data){
			console.log(data);
			vm.person = data;
		})
	});
})();