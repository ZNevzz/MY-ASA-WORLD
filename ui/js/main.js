console.log("Welcome to main.js");


// init function

var app=angular.module('ASA',['ngMaterial', 'ngMessages']);

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
	
	$scope.clickAddAppt= function(){
		$scope.addAppt=true;
		success($scope.addAppt);
		
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
		
		$http.get('/login').
        then(function(response) {
            //DO NOTHING
			
        });			
		
		$http.post('/login/auth',  { 'username' : $scope.username,'password': $scope.password}).
		then(function(response){
			//DO NOTHING
		});
		
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
	
	//$scope.apptDate;
	//ar time=$scope.apptTime;
	//ar names=$scope.apptNames;
	//var sign=$scope.apptSign;
	
	$scope.names=[];
	$scope.progress='Adding';
	$scope.times=false;
	
	this.isOpen = false;
	//$scope.apptDate=new Date().toLocaleString();
	
	//$scope.days=dayList();
	
	$scope.massTimes=["Mon","Tue","Wed"];
	
	$scope.showTimes=function(){
		$scope.times=true;
		$scope.apptTime=$scope.selectedTime;
		
	}
	
	$scope.addNames=function(){
		$scope.names.push($scope.apptName);
		$scope.apptName='';
	}
	
	$scope.removeName=function(name){
		success(name);
		
		for (var i=$scope.names.length-1; i>=0; i--) {
			if ($scope.names[i] === name) {
			$scope.names.splice(i, 1);
			break;
		}
}
		
	}
	
	
	
	$scope.setAppt=function(){
		//check username and password
		
		var status=addAppointment();
		
		//true then set auth to true
		if(status==true){
			
			$scope.names=[];
			success("appt");
			$scope.progress='Added';
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
/* 
app.controller('dateCtrl',
function(){
	this.myDate = new Date().toLocaleString();
	this.isOpen = false;
}
); */

function auth(){return true;}
function addAppointment(){return true;}
function success(mod){console.log("Successfully executed!! #"+mod);}
function error(mod){console.log("Oops...Something went wrong!! #"+mod);}
function dayList(){
	var list=[];
	for(var i=0;i<31;i++){
		list.push(i+1);
	}
	return list;
}