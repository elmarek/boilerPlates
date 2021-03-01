
/*
Interfaces
*/


An interface is a syntactical contract that an entity should conform to. In other words, an interface defines the syntax that any entity must adhere to.

Interfaces define properties, methods, and events, which are the members of the interface. Interfaces contain only the declaration of the members. It is the responsibility of the deriving class to define the members. It often helps in providing a standard structure that the deriving classes would follow.

Let’s consider an object −

var person = {
   FirstName:"Tom",
   LastName:"Hanks",
   sayHi: ()=>{ return "Hi"}
};

If we consider the signature of the object, it could be −

{
   FirstName:string,
   LastName:string,
   sayHi()=>string
}


// Declaring Interfaces:

Inline:

function printLabel (options: { label: string }) {
  console.log(options.label)
}

// Note the semicolon
function getUser (): { name: string; age?: number } {
}


Explicit:

interface LabelOptions {
  label: string
}

function printLabel(options: LabelOptions) { ... }


OptionalProperties:

interface User {
  name: string,
  age?: number
}


ReadOnly:

interface User {
  readonly name: string
}


DynamicKeys:

{
  [key: string]: Object[]
}
