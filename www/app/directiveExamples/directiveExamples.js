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
			templateUrl: 'app/directiveExamples/coloredblock.html'
		}
	});
})();