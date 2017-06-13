
package asa.model;

import org.springframework.data.annotation.Id;

public class User {
	@Id
	private String id;
	private String username;
	private String password;

	public Login(){}
	
	public Login(String username, String password) {
		super();
		this.username = username;
		this.password = password;
	}
	
	

	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}
	
	@Override
    public String toString() {
        return String.format(
                "User[id=%s, firstName='%s', lastName='****']",
                id, username);
    }

}

