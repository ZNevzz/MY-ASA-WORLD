// Login Controller : handles login ops

app.controller('loginCtrl',
function($scope,$http){
		

	$scope.authenticate=function(){
		//check username and password
		console.log($scope.username+" - "+$scope.password);
		
		/* $http.get('/login').
        then(function(response) {
            //DO NOTHING
			
        });		 */	
		
		
		/* UI TEST */
		///*
		if($scope.username=='zn' && $scope.password=='zz')							
		{
			//hideAfterAuth
			$scope.auth=true;
			$scope.hideAfterAuth=false;
			
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
