package asa.service.impl;

import asa.service.ConstantsInterface;
import asa.service.LoginInterface;

public class LoginServiceImpl implements ConstantsInterface,LoginInterface{
	
	public boolean authenticate(String username, String password){
		
		// TEST FOR ADMIN LOGIN
		boolean usernameAuth=false;
		boolean passwordAuth=false;
		if(username.equals(ConstantsInterface.ADMIN_USR){
			System.out.println("username authenticated");
			usernameAuth=true;
			
		}
		
		if(password.equals(ConstantsInterface.ADMIN_PWD){
			System.out.println("password authenticated");
			passwordAuth=true;
		}
		
		if(usernameAuth && passwordAuth){
			return true;
		}
		else{
			return false;
		}
	
	}
	
	
}