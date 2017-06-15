/* MONGODB SCRIPTS */

//switch database
- use asa

// check current db
- db

// create collection
- db.createCollection(“test”)

// insert document into test collection
- db.collection_name.insert(
{'name':'ADMIN','stress':'high'}
)


