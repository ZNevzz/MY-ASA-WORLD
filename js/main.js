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

app.controller('apptCtrl',
function($scope){
		
	$scope.apptSuccess=false;
	
	var date=$scope.apptDate;
	var time=$scope.apptTime;
	var names=$scope.apptNames;
	var sign=$scope.apptSign;
	//var usr=$scope.username;
		
	$scope.setAppt=function(){
		//check username and password
		var status=addAppointment();
		//true then set auth to true
		if(status==true){
			$scope.apptSuccess=true;
			success("appt");
		}
		else{
			error("appt");
		}
	}
		
}
);



/* angular.module('ASA', ['ngMaterial', 'ngMessages']).controller('apptCtrl', function() {
  this.myDate = new Date();
  this.isOpen = false;
}); */

function auth(){return true;}
function addAppointment(){return true;}
function success(mod){console.log("Successfully executed!! #"+mod);}
function error(mod){console.log("Oops...Something went wrong!! #"+mod);}