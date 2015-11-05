;(function(){
	'use strict';
	
	angular.module('DirectiveExamples', [])
	
	.directive('logo', function(){
		return {
			template: '<h1>Sandbox App</h1>'
		}
	});
})();