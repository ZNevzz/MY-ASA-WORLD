
package asa.dao;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import asa.model.User;

@Repository("userDAO")
public interface UserDAO extends MongoRepository<User, String> {

    public User findByUsername(String username);  
    public List<User> findByRole(String role);

}
