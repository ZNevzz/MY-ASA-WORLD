package asa.service.impl;

import asa.service.ConstantsInterface;
import asa.service.LoginService;
import asa.dao.UserDAO;
import asa.model.User;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

//import org.springframework.transaction.annotation.Transactional;


@Service("loginService")
//@Transactional(propagation = Propagation.SUPPORTS, readOnly = true)
public class LoginServiceImpl implements ConstantsInterface,LoginService{
	
	@Autowired
	private UserDAO userDAO;
	
	public String authenticate(String username, String password){
		/*
		// TEST FOR ADMIN LOGIN
		boolean usernameAuth=false;
		boolean passwordAuth=false;
		
		if(username.equals(ConstantsInterface.ADMIN_USR)){
			System.out.println("username authenticated");
			usernameAuth=true;
			
		}
		
		if(password.equals(ConstantsInterface.ADMIN_PWD)){
			System.out.println("password authenticated");
			passwordAuth=true;
		}
		
		if(usernameAuth && passwordAuth){
			return true;
		}
		else{
			return false;
		}				
		*/
		boolean usernameAuth=false;
		boolean passwordAuth=false;
				
		User user= userDAO.findByUsername(username);
		
		// username invalid
		if(user==null){
			System.out.println("No User Found");
			passwordAuth=true;
		}
		// username valid
		else{
			System.out.println("username authenticated");
			usernameAuth=true;
			
		}
		// password valid
		if(password.equals(user.getPassword())){
			System.out.println("password authenticated");
			passwordAuth=true;
		}
		else{
			System.out.println("password invalid");
			
		}
		
		// both valid
		if(usernameAuth && passwordAuth){
			return "success";
		}		
		// password invalid
		else if(usernameAuth){
			return "username";
		}
		// username invalid
		else if(passwordAuth){
			return "password";
		}
		// both invalid
		else{
			return "failed";
		}
		
	
	}
	
	
}
