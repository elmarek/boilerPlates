

200: Succesful response "ok"

300: Redirects

400: Client errors "Bad request"

500: Server errors "Not found by server"

requestType: get, post, put, delete

path: "/pathName"

description: "Description of what the Request does"

Headers:
`
General headers:
  apply to both requests and responses, but with no relation to the data transmitted in the body

Request headers:
  contain more information about the resource to be fetched, or about the client requesting the resource.

Response headers:
  hold additional information about the response, like its location or about the server providing it

  `

produces:
// What the request body contains
- "application/xml"
- "application/json"

parameters:
// What parameters does the request take?
  description: "Description of parameters"
  required: true
  type: "array"

responses:
// What will the response be?
// What will the data sent back look like?
// Error handling considerations
  "200":
    description: "successful operation"

  "400":
    description: "Invalid status value"


PostBodyExample:

//From swagger pet store:

{
  "id": 0,
  "category": {
    "id": 0,
    "name": "string"
  },
  "name": "doggie",
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available"
}