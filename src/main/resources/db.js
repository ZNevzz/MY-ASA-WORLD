/* MONGODB SCRIPTS */

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
