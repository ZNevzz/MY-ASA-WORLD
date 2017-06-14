// Login Controller : handles login ops

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
			//DO 
			success(response)
			success(response.data['result']);
			if(response.data['result']=='success'){
				$scope.auth=true;
				
			}
			else{
				error("authentication");
			}
		});
		
		
		
	}
	
}
);
