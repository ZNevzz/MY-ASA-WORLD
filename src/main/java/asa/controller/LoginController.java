package asa.controller;

import asa.bean.Login;
import asa.service.LoginService;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.MediaType;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
@RequestMapping("/login")
public class LoginController {

	@Autowired
	private LoginService loginService;
	
	@RequestMapping(method = RequestMethod.GET)
	public void test(){
		System.out.println("Inside LoginController");
	}
	
    @RequestMapping(value="/auth",method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody String authenticateUser(@RequestBody Login login){
        System.out.println(login.getUsername());
		if(loginService.authenticate(login.getUsername(),login.getPassword())){
			return "{'result':'success'}";
		}
		else{
			return "{'result':'failure'}";
		}
		
    }
	
	

}
