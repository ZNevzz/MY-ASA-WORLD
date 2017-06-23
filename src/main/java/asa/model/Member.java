package asa.model;

import org.springframework.data.annotation.Id;


public class Member {

@Id
private String id;

  public Member(){}
  
  
  
private String contact;

private String role;

private String gender;

private String dob;

private String addr;

private String school;

private String name;




public String getContact() {
return contact;
}


public void setContact(String contact) {
this.contact = contact;
}


public String getRole() {
return role;
}


public void setRole(String role) {
this.role = role;
}


public String getGender() {
return gender;
}


public void setGender(String gender) {
this.gender = gender;
}


public String getDob() {
return dob;
}


public void setDob(String dob) {
this.dob = dob;
}


public String getAddr() {
return addr;
}


public void setAddr(String addr) {
this.addr = addr;
}


public String getSchool() {
return school;
}


public void setSchool(String school) {
this.school = school;
}


public String getName() {
return name;
}


public void setName(String name) {
this.name = name;
}



}
