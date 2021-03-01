
/*
Basic Types
*/

any
void

boolean
number
string

null
undefined

string[]          /* or Array<string> */
[string, number]  /* tuple */

string | null | undefined   /* union */

never  /* unreachable */




/*
Declarations
*/

let isDone: boolean
let isDone: boolean = false

function add (a: number, b: number): number {
  return a + b
}

// Return type is optional
function add (a: number, b: number) { ... }