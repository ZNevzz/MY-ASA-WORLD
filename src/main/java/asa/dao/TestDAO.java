package asa.dao;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import asa.model.Test;

public interface TestDAO extends MongoRepository<Test, String> {

    public List<Test> findAll();    

}
