import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.MongoDbFactory;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.SimpleMongoDbFactory;
 
import com.mongodb.MongoClient;

@Configuration
@EnableMongoRepositories("asa.dao")
public class SpringMongoConfig extends AbstractMongoConfiguration {

	static class OptionsConfig {

		@Bean
		public MongoClientOptions mongoOptions() {
			return MongoClientOptions.builder().socketTimeout(50000).build();
		}
	}

}