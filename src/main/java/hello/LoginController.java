package hello;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/login")
public class LoginController {
	/*
    @RequestMapping(value="/auth",method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public void authenticateUser(@RequestBody Login login){
        System.out.println(login.getUsername());
		
    }*/
	
	@RequestMapping(method = RequestMethod.GET)
	public void test(){
		System.out.println("Inside LoginController");
	}

}
