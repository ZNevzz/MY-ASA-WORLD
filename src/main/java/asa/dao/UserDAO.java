
package asa.dao;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import asa.mondel.User;

public interface UserDAO extends MongoRepository<User, String> {

    public User findByFirstName(String username);    

}