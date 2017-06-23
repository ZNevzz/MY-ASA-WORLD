// Login Controller : handles login ops

app.controller('loginCtrl',
function($scope,$http){
		
	$scope.loginObj={'status':true,'username':'','password':''};
	
	$scope.authenticate=function(){
		//check username and password
		console.log($scope.loginObj.username+" - "+$scope.loginObj.password);
		
		/* $http.get('/login').
        then(function(response) {
            //DO NOTHING
			
        });		 */	
		
		
		/* UI TEST */
		///*
		if($scope.loginObj.username=='zn' && $scope.loginObj.password=='zz')							
		{
			//hideAfterAuth
			$scope.auth=true;
			$scope.loginObj.status=false;
			
			success("authentication");
			
			
		}
		//*/
		
		/*
		$http.post('/login/auth',  { 'username' : $scope.username,'password': $scope.password}).
		then(function(response){
			//DO 
			success(response)
			success(response.data['result']);
			if(response.data['result']=='success'){				
				$scope.auth=true;
				$scope.hideAfterAuth=false;
				success("authentication");
			}
			else{
				
								
				error("authentication");
			}
		});
			
		*/
		
	}
	
}
);
