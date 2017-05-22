console.log("Welcome to main.js");


// init function

var app=angular.module('ASA',[]);
app.controller('loginCtrl',
function($scope){
		
	$scope.username='N';
	$scope.password='Z';
	console.log($scope.username+" - "+$scope.password);
}
);
