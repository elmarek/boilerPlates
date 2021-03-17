

2.  import java.io.*: Means all the classes of io package can be imported. Java io package provides a set of input and output streams for reading and writing data to files or other input or output sources

3.  'class': The class contains the data and methods to be used in the program. Methods define the behaviour of the class. Class GFG has only one method Main in JAVA.

4.  'static void Main()': static keyword tells us that this method is accessible without instantiating the class.

5.  'void': keywords tells that this method will not return anything. The main() method is the entry point of our application.

6. ' System.in': This is the standard input stream that is used to read characters from the keyboard or any other standard input device.

7.  'System.out': This is the standard output stream that is used to produce the result of a program on an output device like the computer screen.

8.  println(): This method in Java is also used to display a text on the console. It prints the text on the console and the cursor moves to the start of the next line at the console. The next printing takes place from the next line.


// SYNTAX

3. Case Sensitivity

Java is a case-sensitive language, which means that the identifiers AB, Ab, aB, and ab are different in Java.

System.out.println("Alice"); // valid syntax
system.out.println("Alice"); // invalid syntax

4. Class Names

i. The first letter of the 'class' should be in Uppercase

ii. If several words are used to form a name of the class, each inner word’s first letter should be in Upper Case, Underscore are allowed.

'class' MyJavaProgram    // valid syntax
'class' myJavaProgram    // invalid syntax

5. public static void main(String [] args)

Java program processing starts with the method main().

6. Method Names
i. All the method names should start with a Lower Case letter.

ii. If several words are used to form the name of the method, then each first letter of the inner word should be in Upper Case, Underscore are allowed.

public void employeeRecords() // valid syntax
public void EmployeeRecords() // invalid syntax


// MAIN METHOD:

main method: In Java programming language, every application must contain a main method whose signature is:
public static void main(String[] args)

public: So that JVM can execute the method from anywhere.
static: Main method is to be called without object.
The modifiers public and static can be written in either order.
void: The main method doesn't return anything....
main(){}: Name configured in the JVM
`String[]: The main method accepts a single argument:
          an array of elements of type String.`
// Like in C/C++, main method is the entry point for your application and will subsequently invoke all the other methods required by your program.


`Java Identifiers`
All Java components require names. Names used for classes, variables, and methods are called identifiers.

In Java, there are several points to remember about identifiers. They are as follows −

All identifiers should begin with a letter (A to Z or a to z), currency character ($) or an underscore (_).

After the first character, identifiers can have any combination of characters.

A key word cannot be used as an identifier.

Most importantly, identifiers are case sensitive.

Examples of legal identifiers: age, $salary, _value, __1_value.

Examples of illegal identifiers: 123abc, -salary.

'Java Modifiers'
Like other languages, it is possible to modify classes, methods, etc., by using modifiers. There are two categories of modifiers −

Access Modifiers − default, public , protected, private

Non-access Modifiers − final, abstract, strictfp

We will be looking into more details about modifiers in the next section.

'Java Variables'
Following are the types of variables in Java −

'Local Variables'
Class Variables (Static Variables)
Instance Variables (Non-static Variables)
Java Arrays
Arrays are objects that store multiple variables of the same type. However, an array itself is an object on the heap. We will look into how to declare, construct, and initialize in the upcoming chapters.

'Java Enums'
Enums were introduced in Java 5.0. Enums restrict a variable to have one of only a few predefined values. The values in this enumerated list are called enums.

With the use of enums it is possible to reduce the number of bugs in your code.

For example, if we consider an application for a fresh juice shop, it would be possible to restrict the glass size to small, medium, and large. This would make sure that it would not allow anyone to order any size other than small, medium, or large.