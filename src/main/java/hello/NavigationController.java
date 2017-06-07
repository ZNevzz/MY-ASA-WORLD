package hello;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class NavigationController {

	
	@GetMapping("/")
	public String index(){
		return "index";
	}
	
	@GetMapping("/index.html")
	public String index(){
		return "index";
	}

}
