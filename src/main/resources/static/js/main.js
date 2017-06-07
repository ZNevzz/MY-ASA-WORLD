console.log("Welcome to main.js");


// init function

var app=angular.module('ASA',[]);

app.controller('mainCtrl',
function($scope){
	$scope.clickLogin=function(){		
		$scope.loginShow=true;
		$scope.navShow=false;
	}
	$scope.clickNav=function(){
		$scope.navShow=true;
		$scope.loginShow=false;
	}
	
}
);

app.controller('loginCtrl',
function($scope,$http){
		
	var usr=$scope.username;
	var pas=$scope.password;
	
	
	console.log($scope.username+" - "+$scope.password);

	$scope.authenticate=function(){
		//check username and password
		
		/* $http.get('http://rest-service.guides.spring.io/greeting').
        then(function(response) {
            $scope.greeting = response.data;
        }) */
		
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
	
	var date=$scope.apptDate;
	var time=$scope.apptTime;
	var names=$scope.apptNames;
	var sign=$scope.apptSign;
	//var usr=$scope.username;
	
	$scope.setAppt=function(data,time,names,sign){
		//check username and password
		console.log(date);console.log(time);console.log(names);console.log(sign);
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

app.controller('navCtrl',
function($scope){
 		
	
	
	$scope.clickAppt= function(){
		$scope.navigation=true;
		$scope.option = {'name':'Appointment','options':['add','eval','score']};
	} 
}
); 

function auth(){return true;}
function addAppointment(){return true;}
function success(mod){console.log("Successfully executed!! #"+mod);}
function error(mod){console.log("Oops...Something went wrong!! #"+mod);}