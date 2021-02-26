A document schema is a JSON object that allows you to define the shape and content of documents and embedded documents in a collection. You can use a schema to require a specific set of fields, configure the content of a field, or to validate changes to a document based on its beginning and ending states.

Document schemas follow the same JSON schema specification as document validation in the MongoDB server. In addition to standard JSON schema, document schemas can represent any of the BSON types supported by the $type operator. This page describes schemas for the following common types:

_________________________________________________________________________________________

Document Schema Configuration
_________________________________________________________________________________________

Documents in MongoDB are objects stored in a format called BSON, a binary-encoded superset of JSON that supports additional data types. The root of every document schema in Realm is a BSON Object schema that applies to each document in a collection.

{
  "bsonType": "object",
  "title": "<Type Name>",
  "required": ["<Required Field Name>", ...],
  "properties": {
    "<Field Name>": <Schema Document>
  }
}