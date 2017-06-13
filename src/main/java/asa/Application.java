package asa;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import asa.model.*;
import asa.dao.*;


@SpringBootApplication
public class Application  implements CommandLineRunner {
	
	@Autowired
	private UserDAO userDAO;

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
	
	@Override
	public void run(String... args) throws Exception {
		userDAO.deleteAll();
		
		userDAO.save(new User("Nevil","ZNevzz"));
		
		System.out.println(userDAO.findByFirstName("Nevil"));
		
		
	}

}
