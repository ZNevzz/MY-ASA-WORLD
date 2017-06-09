package asa.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class NavigationController {

	
	@RequestMapping("/")
	public String root(){
		return "index";
	}
	
	@RequestMapping("/index.html")
	public String index(){
		return "index";
	}

}
