angular.module('myApp', ['ngRoute','ngAnimate','ui.bootstrap']).config(function($routeProvider) {

	$routeProvider.when('/employers',{
		templateUrl: "employers.html",
		controller: "employer"
	})
	
	.when('/employer/:employerId/employees',{
		templateUrl: "employerEmployees.html",
		controller: "employee"
	})
	
	.when('/employees',{
		templateUrl: "employees.html",
		controller: "employee"
	})
	
	.otherwise ({
		templateUrl: "employers.html",
		controller: "employer"
	})
	
});
