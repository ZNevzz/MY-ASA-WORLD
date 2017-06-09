package asa.controller;

import asa.bean.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.MediaType;

@RestController
@RequestMapping("/login")
public class LoginController {
	
	@RequestMapping(method = RequestMethod.GET)
	public void test(){
		System.out.println("Inside LoginController");
	}
	
    @RequestMapping(value="/auth",method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public void authenticateUser(@RequestBody Login login){
        System.out.println(login.getUsername());
		
    }
	
	

}
