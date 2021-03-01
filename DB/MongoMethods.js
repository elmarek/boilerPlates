
_________________________________________________________________________________________

Create Operations
_________________________________________________________________________________________

//  Create or insert operations add new documents to a collection. If the collection does not currently exist, insert operations will create the collection.

//  MongoDB provides the following methods to insert documents into a collection:

db.collection.insertOne() //New in version 3.2
db.collection.insertMany() //New in version 3.2

//In MongoDB, insert operations target a single collection. All write operations in MongoDB are atomic on the level of a single document.

// Exampls:

db.collection.insertOne(
  {
    name: "sue",
    age: 26,
    status: "pending"
  }
)


_________________________________________________________________________________________

Read Operations
_________________________________________________________________________________________

//Read operations retrieve documents from a collection; i.e. query a collection for documents. MongoDB provides the following methods to read documents from a collection:

db.collection.find()

//You can specify query filters or criteria that identify the documents to return.

db.users.find (
  {
    {age: {$gt: 19}},  // Query Criteria
    {name: 1, address: 1}  // Projection
  }
).limit(5)

db.inventory.find( { status: "D" })

__________________________

Specify Equality Condition

//To specify equality conditions, use <field>:<value> expressions in the query filter document:

db.collection.find({ <field1>: "value", ... })

// The following example selects from the inventory collection all documents where the status equals "D":

db.inventory.find( { status: "D" })

__________________________

Specify OR Conditions

// Using the $or operator, you can specify a compound query that joins each clause with a logical OR conjunction so that the query selects the documents in the collection that match at least one condition.

// The following example retrieves all documents in the collection where the status equals "A" or qty is less than ($lt) 30:

db.inventory.find( { $or: [ { status: "A" }, { qty: { $lt: 30 } } ] } )


__________________________

Specify AND Conditions

// A compound query can specify conditions for more than one field in the collection’s documents. Implicitly, a logical AND conjunction connects the clauses of a compound query so that the query selects the documents in the collection that match all the conditions.

// The following example retrieves all documents in the inventory collection where the status equals "A" and qty is less than ($lt) 30:

db.inventory.find( { status: "A", qty: { $lt: 30 } } )


_________________________________________________________________________________________

Update Operations
_________________________________________________________________________________________

Update operations modify existing documents in a collection. MongoDB provides the following methods to update documents of a collection:

db.collection.updateOne() New in version 3.2
db.collection.updateMany() New in version 3.2
db.collection.replaceOne() New in version 3.2


//  In MongoDB, update operations target a single collection. All write operations in MongoDB are atomic on the level of a single document.

// You can specify criteria, or filters, that identify the documents to update. These filters use the same syntax as read operations.

// Example:

db.users.updateMany( //collection
  {age: {$lt: 18}},  // update filter
  {$set: {status: "reject"}} // update action
)


_________________________________________________________________________________________

Delete Operations
_________________________________________________________________________________________


// Delete operations remove documents from a collection. MongoDB provides the following methods to delete documents of a collection:

db.collection.deleteOne() New in version 3.2
db.collection.deleteMany() New in version 3.2

//In MongoDB, delete operations target a single collection. All write operations in MongoDB are atomic on the level of a single document.

// You can specify criteria, or filters, that identify the documents to remove. These filters use the same syntax as read operations.

// Example:

db.user.deleteMany(  //collection
  {status: "reject"} // delete filter
)