console.log("Welcome to main.js");


// init function

var app=angular.module('ASA',[]);
app.controller('loginCtrl',
function($scope){
		
	//$scope.username='N';
	//$scope.password='Z';
	
	var usr=$scope.username;
	var pas=$scope.password;
	
	$scope.auth=false;
	console.log($scope.username+" - "+$scope.password);
	$scope.authenticate=function(){
		//check username and password
		var status=auth();
		//true then set auth to true
		if(status==true){
		$scope.auth=true;
		}
		else{
		
		}
	}
}
);

function auth(){return true;}