

200: Succesful response "ok"

300: Redirects

400: Client errors "Bad request"

500: Server errors "Not found by server"

requestType: get, post, put, delete

path: "/pathName"

description: "Description of what the Request does"

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