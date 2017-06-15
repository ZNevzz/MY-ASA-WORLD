/* MONGODB SCRIPTS */

//connect to host
mongo "mongodb://myasaworld-shard-00-00-zadym.mongodb.net:27017,myasaworld-shard-00-01-zadym.mongodb.net:27017,myasaworld-shard-00-02-zadym.mongodb.net:27017/test?replicaSet=myasaworld-shard-0" --authenticationDatabase admin --ssl --username <USERNAME> --password <PASSWORD>

//switch database
use asa

// check current db
db

// create collection
db.createCollection(“test”)

// insert document into test collection
db.test.insert(
{'name':'ADMIN','stress':'high'}
)

// check result of operation OR show collection
db.test.find().pretty()
