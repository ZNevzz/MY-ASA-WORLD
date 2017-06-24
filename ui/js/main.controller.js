// Main Controller : has widest scope compared to other controllers

app.controller('mainCtrl',
function($scope){
	
	//$scope.sessionRole=-1;
	
	$scope.clickLogin=function(){		
		$scope.loginShow=true;
		$scope.navShow=false;
		$scope.addAppt=false;
		
	}
	$scope.clickNav=function(){
		$scope.navShow=true;
		$scope.loginShow=false;
	}
	
	$scope.clickAddAppt= function(){
		$scope.addAppt=true;		
		$scope.loginShow=false;
	} 
}
);