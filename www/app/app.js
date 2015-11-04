angular.module('sandbox', ['ngRoute'])

.config(function($routeProvider){
	$routeProvider.when('/', {
		template: '<h1>This is working!</h1>'
	})
})

.controller('MainController', function($scope){
	$scope.stuff = 'working!';
});