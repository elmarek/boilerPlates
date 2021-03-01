
Reasons to Use a SQL Database
`
Not every database fits every business need. That’s why many companies rely on both relational and non-relational databases for different tasks. Although NoSQL databases have gained popularity for their speed and scalability, there are still situations in which a highly structured SQL database might be preferable.
`
Two reasons why you might consider a SQL database are:
`
You need ACID compliancy (Atomicity, Consistency, Isolation, Durability). ACID compliancy reduces anomalies and protects the integrity of your database. It does this by defining exactly how transactions interact with the database, which is not the case with NoSQL databases, which have a primary goal of flexibility and speed, rather than 100% data integrity.

Your data is structured and unchanging:If your business is not growing exponentially, there may be no reason to use a system designed to support a variety of data types and high traffic volume.
`
Reasons to Use a NoSQL Database
`
To prevent the database from becoming a system-wide bottleneck, especially in high volume environments, NoSQL databases perform in a way that relational databases cannot.

Storing large volumes of data without structure.

A NoSQL database doesn’t limit storable data types. Plus, you can add new types as business needs change.

Using cloud computing and storage. Cloud-based storage is a great solution, but it requires data to be easily spread across multiple servers for scaling. Using affordable hardware on-site for testing and then for production in the cloud is what NoSQL databases are designed for.

Rapid development. If you are developing using modern agile methodologies, a relational database will slow you down. A NoSQL database doesn’t require the level of preparation typically needed for relational databases.
`

Biggest difference of SQL vs NoSQL DBs is how data is stored
`
The major difference between MongoDB and SQL Databases is the way they handle data. In SQL databases, data is stored in form of traditional 2 dimensional row-column structure while in MongoDB rich data document model is followed, which allows storage of any type of data.
`

Advantages of MongoDB
`
Having seen the good features of MongoDB, now every developer should be able to understand why it is better to use NoSQL based database for big data transactions and for implementing a scalable model. Now, its time to leave behind the schema definitions of RDBMS and get an advantage of using schema-less databases like MongoDB. Let us see some of the vital advantages of MongoDB :
`
Advantages of MongoDB
`
First and foremost, it is very easy to install and setup the MongoDB.
The very basic feature of MongoDB is that it is a schema-less database. No schema migrations anymore. Since MongoDB is schema-free, your code defines your schema.
The ability to derive a document-based data model is one of the most attractive advantages of MongoDB. Because, the way it stores the data in the form of BSON (Binary JSON), ruby hashes etc, helps to store the data in a very rich way while being capable of holding arrays and other documents.


The document query language supported by MongoDB plays a vital role in supporting dynamic queries.

Very easy to scale.

Due to the structuring (BSON format - key value pair) way of the data in MongoDB, no complex joins are needed.

Performance tuning is absolutely easy compared to any relational databases.

No need of mapping the application objects to the data objects.

Enables faster access of the data due to its nature of using the internal memory for the storage.

Since, it is a NOSQL database, then it is obviously secure because no sql injection can be made.

MongoDB can also be used as a file system, which helps in easier way of load balancing.

MongoDB supports, the search by regex and fields as well.

MongoDB can be run as windows service as well.

Good amount of documentation is available.

MongoDB does not require a VM to be run.

MongoDB follows regular release cycle of its newer versions.

The support for Sharding is one of its key feature. Sharding is the process of storing the data in different machines and MongoDB's ability to process the data, as and when the size of the data grows. This results in the horizontal scaling. With sharding, more amount of data can be written and read back as and when there is an increase in the data growth.

`
