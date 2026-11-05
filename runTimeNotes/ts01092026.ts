//* Why Type script
//& ts is a strongly typed programming langugae.Means,It prpvides Type safety.
//& It is built on the existing functions and features of Javascript.
//& It is a superset of JavaScript.
//& It is a statically typed language
//& It is not for the browser,Its only for Development purpose.We cant run it directly in browser.Because browser doesnot have Typescript engine.
//& We have to convert Type Script file to Java Script file and then run on Browser.



//^ Javascript is Dyamically typed
// let age =35;
// console.log(age.upperCase());//+ This is not throwing any error at compile time.
//+ at run time it throws error- TypeError: age.upperCase is not a function.

//^ Installations
//~ npm install -g typescript- For global installation of typescript.
//+ global installation- installed in our System,so that whenever we wan to create one more folder to use TypeScript in it,i dont have to install typescript seperately.
//~ npm install typescript- Local installation.Specific for a Project.

//let d: number = 10;//+ This wont work in .js file ,because it works only in .ts files not in .js files.

//~ tsc filename.ts --> converts typescript file to javascript file
//~ then node filename.js to run file
//~ use npx filename.ts if typescript locally installed or env path not  configured properly.

//! We can write javascript code in Type script ,but not other way around.

//^ Typescript is Strongly Typed Programming language.
// let d: number = 10;
//     d = "string"; //+ It throws compile time error- string is not assignable to type number.Which is not possible with Javascript.

// let age: number = 30;
// console.log(age.toUpperCase());//+ It throws error- Property 'toUpperCase' does not exist on type 'number'.
//~ In both the above cases- We are gettig error at compile time itself.
//~ TypeScript is used to add Type Safety for Java script.

//* Data Types
//& premitive- int,string,boolean,bigint,null,undefined
//& non premitive- object,array,function,class,tuple
//& special types - any,unknown,void,never
//& custom types- type alias, interface, union, enum.

//* Premitive Data Types

//^ Number

// let c: number = 40;            
// console.log(c);
//~ c is the Identifier and number is the annotation.Annotation is used to explicitly specifying the type of Identifier.
//~ Identifier can be a variable or a function or a class.

//^ Bigint
// let b: bigint = 10n;//+ n represents very large integer.We cant assign a number to Bigint.We can assign only very large integer.
// console.log(b);

//^ String
// let s : string = "typescript";
// console.log(s);

//^ Boolean
// let d: boolean = true;
// console.log(d);

//^ null
// let n: null = null;
// console.log(n);
//~ We intentionally give no value.
//~ Usually given by developer.

//^ undefined
// let u: undefined;
// console.log(u);
//~ Only in case of undefined type, we can use the value without initialization.
//~ In case of other data types,if we try to access the value without initialization,we will get error.
//~ undefined- generally assigned by typescript.

//* special types - any,unknown,void,never

//^ any
//~ Whenever we dont know,what type of value it is,we use any.
//~ If we dont annotate any datatype to a variable,by default its any.
//~ any allows a variable to store any type of data without checking type.
//~ In effect any is not type safe
// let x : any = 30;
// console.log(x);
// console.log(typeof(x));

// let x1;
// console.log(typeof(x1));

// let x : any = 30;//+ You cnat do this ,because we have already declared and initialized x before.To do this comment the x above.
// console.log(x);
// console.log(typeof(x));

// let x : any = "Hello World";
// console.log(x);
// console.log(typeof(x));

//^ unknown
//~ It accepts any type of values,but before performing an operation should check type.

// let x2 : unknown = 30;
// x2 = "Hello";
// console.log(x2)  //+ output- Hello.

// let x3 : unknown = 30;
// console.log(x3.toUpperCase());//+ Throws error x3 is of type String.

// let x3 : unknown = "Hello";
// if(typeof x3 === "string"){
//     console.log(x3.toUpperCase());
// }

//^ void
//~ If we annotate a function with void,Function runs normally but cannot return anything.

//1
// function greet(): void{
//     console.log("Hello World")
// }

// greet() //+ output: Hello World

//2
// function greet():void{
//     return "Hello Worlld";  //+ compile time error:Type 'string' is not assignable to type 'void'
// }

//3
// function greet(): void{
//     console.log("Hello World");
//        return ;
// }

// greet();  //+ output: Hello World



//* custom types- type alias, interface, union, enum.
//& TypeScript allows us to create our own types.
//& Common custom types are Type Alias, Interface, Union and Enum.


//^ 1. UNION
//~ Union allows a variable to accept values of more than one specified type.
//~ Union types are created using the pipe | symbol
//! Only the types specified in the union are allowed.
//~ a = null; // Error if strictNullChecks is enabled

// let a : number | string | boolean = true;
// console.log(a) //+ output: true

// let b : number | string = 40;
// console.log(b) //+ output:40

// let c : undefined | number;
// console.log(c) //+ output:undefined.

//^ 2. TYPE ALIAS
//~ Type Alias allows us to create a custom name for a type.
//~ It is created using the 'type' keyword.
//~ It can represent primitive types, union types, objects, arrays, etc.

// type UserID = number | string;

// let userId1: UserID = 101;
// let userId2: UserID = "EMP101";

// console.log(userId1); //+ Output: 101
// console.log(userId2); //+ Output: EMP101

//*  TYPE INFERENCE

//& Type inference means TypeScript automatically determines the type
//& of a variable based on the value assigned to it.

//^ Explicit Type Annotation
//~ We manually tell TypeScript that age should be a number.

// let age: number = 35;


//^ Type Inference
//~ We don't specify the type.
//~ TypeScript sees 35 and automatically infers age as number.

// let age1 = 35;

//! TypeScript infers age1 as number.

//* KEYWORDS
//& Keywords are the reserved words in a programming language.
//& Each keyword is predefined and has its own meaning.
//& Keywords are always defined in lowercase.

//^ 1. VAR
//~ With var we can declare,initialize,redeclare and reinitialize a variable.

// var a : number = 40;
// console.log(a);
// var a: number = 50;
// console.log(a);
// a = 60;
// console.log(a);

//^ 2. LET

//~ 'let' is used to declare a variable in JavaScript and TypeScript.
//~ With let, we can declare, initialize and reinitialize a variable.
//! We CANNOT redeclare the same variable in the same scope.

// let a: number;//+ declaration-Creating a variable without assigning a value.
// a = 40; //+ Initialization- Assigning a value to the variable for the first time.
// console.log(a); //+ Output: 40


// let b: number = 50;//+ Declaration and Initialization together
// console.log(b); //+ Output: 50

// b = 60;//+Reinitialization / Reassignment.We can change the value of a let variable after initialization.

// console.log(b); //+ Output: 60

//! We CANNOT redeclare a let variable in the same scope.

// let c: number = 40;

// let c: number = 50;
//! Error: Cannot redeclare block-scoped variable 'c'.


//^ Block Scope
//~ let is block-scoped.
//~ A variable declared with let inside {} is available only inside that block.

// {
//     let marks: number = 90;

//     console.log(marks); //+ Output: 90
// }

// console.log(marks);
//! Error: Cannot find name 'marks'.


//^ Type Safety in TypeScript
//~ Once a type is assigned/inferred, we cannot assign an incompatible type.

// let age: number = 35;

// age = 40;        //+ Valid
// age = "Forty"; 
//! Error: Type 'string' is not assignable to type 'number'.

//^ 3.CONST

//~ 'const' is used to declare a variable whose value cannot be reassigned.
//~ const is block-scoped, just like let.
//! const MUST be initialized at the time of declaration.
//! const cannot be declared without assigning a value.
//! We CANNOT reassign a new value to a const variable.
//! We CANNOT redeclare a const variable in the same scope.

//~ With const, declaration and initialization must happen together.

// const a1: number = 40;
// console.log(a1); //+ Output: 40

// const b: number;
//! Error: 'const' declarations must be initialized.

// const marks: number = 90;

// marks = 100;
//! Error: Cannot assign to 'marks' because it is a constant.

// const age: number = 35;
// // const age: number = 40;
//! Error: Cannot redeclare block-scoped variable 'age'.


//^ Block Scope
//~ const is block-scoped.
//~ A const variable declared inside {} is available only inside that block.

// {
//     const place: string = "Bangalore";

//     console.log(place); //+ Output: Bangalore
// }

// console.log(place);
//! Error: Cannot find name 'place'.


//^ Type Inference with const
//~ TypeScript can automatically infer the type from the assigned value.

// const browser = "Chrome";

//~ TypeScript knows that browser contains the value "Chrome".


//^ const with Objects
//~ A const object cannot be reassigned to another object.
//~ But the properties inside the object can still be changed.

// const user = {
//     name: "John",
//     age: 30
// };

// user.age = 35; //+ Valid

// console.log(user); //+ { name: "John", age: 35 }

// // user = { name: "David", age: 40 };
//! Error: We cannot reassign the const variable.


//^ const with Arrays
//~ A const array cannot be reassigned to another array.
//~ But elements inside the array can be added, removed or modified.

// const skills: string[] = ["Java", "Selenium"];

// skills.push("Playwright"); //+ Valid

// skills[0] = "TypeScript"; //+ Valid

// console.log(skills);

// skills = ["JavaScript"];
//! Error: We cannot reassign the const variable.


//* IDENTIFIERS
//& These are the names given by the programmer like a variable name/ function name/ method name/ class name.

//^ Rules of Identifiers
//~ It should start with a alphabet or _ or $.
//~ It cannot start with digit.
//~ It can be a combination of letters,digits,_ and $.
//~ No spaces allowed between name of the identifier.
//~ No special characters are allowed in the Identifier except _ and $.
//~ Keywords cannot be used as Identifier.

//* Operators
// let a : number = 3;
// let b: number = 4;

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);

// let ans : number = a+b;
// console.log(ans);

//& classified into Unary, binary and Terinary operators.
//& Unary Operator - An operator that performs action on single operand.
//+ Increment operator- ++, Decrement Operator- --, logical NOT- !, typeof operator.
//& Binary  Operator - Performs operation on two operands.
//+ Arithmetic opertor, Assignment operator, Relational operator, Logical operator.
//& Ternary Operator - Performs operation on 3 operands.

//^ 1. UNARY OPERATOR
//~ Increment operator- ++, Decrement Operator- --, logical NOT- !, typeof operator.
//^ 1.1 Increment Operator- pre incrment and post increment
// let num :  number = 10;
// console.log(num);//+ 10

//~ Pre Increment
// let b = ++num;//+ first increment num and then use it.
// console.log(num);//+ 11
// console.log(b);//+ 11

//~ Post Increment
// let c= num++;//+ first assigns current value to c and then increments.
// console.log(num);//+ 12
// console.log(c);//+ 11

//^ 1.2 Decrement Operator- pre decrment and post decrement
// let num :  number = 10;
// console.log(num);//+ 10

//~ Pre decrement
// let b = --num;//+ first decrement num and then use it.
// console.log(num);//+ 9
// console.log(b);//+ 9

//~ Post decrement
// let c= num--;//+ first assigns current value to c and then decrements.
// console.log(num);//+ 8
// console.log(c);//+ 9

//^ 2. BINARY OPERATOR
//~ Arithmetic opertor, Assignment operator, Relational operator, Logical operator.

//^ 2.1 Arithmetic Operator. +(addition),-(subtraction),*(multiplication),/(division),%(modulus),**(exponentiation)
// let a : number = 3+5;
// console.log(a)

//^ 2.2 Assigment Operator . =, +=, -=, /=, *=

// let a : number = 10;
// console.log(a);
// a = a+5;
// console.log(a);
// a += 5;
// console.log(a);

// a -= 5;
// console.log(a);

// a /= 5;
// console.log(a);

// a **= 2;//+ a = a*a
// console.log(a);

// a *= 2;
// console.log(a) //+ a = a*2

//^ 2.3 Relational Operator - <,>,<=, >=, ==, ===

// let age : number = 10;
// console.log(age < 25); //true
// console.log(age >25);// false
// console.log(age <= 10 );// true
// console.log( age >= 10 );//true

//~ == and ====
// IN PLAIN JAVASCRIPT

//~ let a = 20;
//~ let b = "20";

//~ console.log(a == b);  
//+ Returns true because == performs type coercion before comparison.

//~ console.log(a === b); 
//+ Returns false because === performs strict comparison.
//+ It checks both value and type.

//IN TYPE SCRIPT
//! a == b is normally flagged by the TypeScript compiler.It says unintentional.

//^ 2.4 Logical Operator: &&(AND), ||(OR), !(NOT)
//^ 2.4.1 AND- &&
// let a : number = 30;
// let b : number = 30;
// let c: number = 20;
// //~ Both the expressions need to be true.
// console.log(a==b && a>c)//+ true
// console.log(a==b && a==c)//+ false

// //^ 2.4.2 OR- ||
// //~ The result is true ,if atleast one of the expression is true
// console.log(a==b || a==c)//+ true
// console.log(a<b || a==c)//+ false

//^ 2.4.3 NOT -! -Used to reverse a Boolean value.
// let d : number = 20;
// let res = !(d == 20);
// console.log(res)//+false

//^ 2.4.4 Nullish coalesing
//~ Used when we want to provide a default value if something is null or undefined.

// let userName1 : string | undefined;
// let name1 = userName1?? "GUEST";
// console.log(name1) //+ GUEST - because userName is undefined and default value given is GUEST.

// let userName2 : string | undefined = "Jithin";
// let name2 = userName2?? "GUEST";
// console.log(name2) //+ Jithin .

//^ 3. TERNARY OPERATOR
//~ Syntax- condition? expression1 : expression2
// let age : number = 23;
// let res = age >= 18 ? "adult" : "minor";
// console.log(res);

//^ CONCATENATION
//~ Anything that gets concatenated to String becomes String.
// console.log(10+20);
// console.log("10"+"20");
// console.log("Hello"+" "+"World");

// let s1 : string = "Hello";
// let s2 = "Typescript";
// console.log(s1+" "+s2);
// console.log("age is"+" "+20);
// console.log("Greet"+" "+s1);

//* Looping Statements - while, do while, for each, for in, for of

//^ 1. while
//~ It keeps executing the code until the condition is True.
//~ Sysntax

// initialization
//while(condition){
    //statements
    //updation
//}

// let i : number = 1;
// while(i <= 5){
//     console.log("hi");
//     i++;
// }

//^ 2. do while
//~ do while first runs the statements and checks the condition after after statement execution.
//~ Syntax
// initialization
//do{
    //statements
    //updation
//}while(condition)

// let i : number = 5;
// do{
//     console.log("Hi");
//     i++;
// }while(i<=5)

//^ 3. for loop
//~ Syntax
// for( initialization; condition; updation){
//      statements
//}

// for(let i=1; i<=5; i++){
//     console.log('Hi');
// }

//^ 4. Nested for loop
//~ Syntax

// for( initialization; condition; updation){
//      statements
    // for( initialization; condition; updation){
    //  statements
    //}
//}

// for(let i=1; i<=3; i++){
//     console.log(i);
//     for(let j=1; j<=3; j++){
//         console.log(j);
//     }
// }

//^ 5. Nested while loop
//~ Syntax

// initialization;
// while(condition){
// //     statement;
//        initialization;
//        while(condition){
//         statement;
//         updation;
//        }
//        updation;

// // }

//* break & continue
//^ break
//~ once the break statement is satisfied,it will brak the loop and will not execute other iterations.
// for(let i=1; i<=5;i++){
//     if(i==3){
//         break;
//     }
//     console.log("Hello"+" "+i);
// }

//^ continue
//~ continue will skip the iteration for which condition is true.
// for(let i=1; i<=5;i++){
//     if(i==3){
//         continue;
//     }
//     console.log("Hello"+" "+i);
// }

//* FUNCTIONS

//& In TypeScript, we can specify the data types of function parameters
//& and the return type of the function.

//~ x and y are parameters of type number.
//~ void indicates that the function does not return a value.
//! If a function does not return a value, its return type is void.
//~If a function returns a value, we can specify the type of the returned value.
//! The return type must match the type of the value being returned.
//~ TypeScript can automatically infer the return type from the returned value.
//~ Therefore, explicitly specifying the return type is optional in many cases.

// function add(x: number, y: number): void {
//      console.log(x + y);
// }

// add(10, 20); //+ Output: 30

//^ 1. Function with Return Value

// function sum(x: number, y: number): number {
//     return x + y;

// }

// let result: number = sum(10, 20);
// console.log(result); //+ Output: 30

//^ 2. Return Type Inference

// function multiply(x: number, y: number) {

//     return x * y;

// }

//& TypeScript infers the return type as number.

// let output = multiply(10, 5);
// console.log(output); //+ Output: 50

//^ 3. Function Syntax

//~ function functionName(parameter: type, parameter: type): returnType {
//~     // function body
//~     return value;
//~ }

//! IMPORTANT
//& Parameter types define what types of values the function can accept.
//& Return type defines what type of value the function returns.
//& If there is no returned value, the return type is void.
//& TypeScript can infer the return type when it is not explicitly mentioned.

//^ 4. Assignment
// create a function that prints welcome to typescript.
// create a function that accepts students name .call the function with three diffrrent names.-ie 3 diff values.
// create a function that returns the square of a number.
// create a function that prints weather thr function is even or odd.

//^ Optional Parameters
//&  Optional parameters allow us to call a function without providing values for all the parameters.
//&  Required parameter cannot follow the optional parameter.
//& Default parameters can follow optional parameters.
//& Optional parameter does not have to be passed when calling the function.
//& Its type effectively includes undefined.

//~ We use the ? symbol after the parameter name to make it optional.
//~ Syntax
//~ function functionName(parameter1: type, parameter2?: type): returnType {
//~     // function body
//~ }

// function studentDetails( name: string, course: string, age?: number, email?: string){
//     console.log("Student:"+" "+name);
//     console.log("Course:"+" "+course);
//     console.log("Age:"+" "+age);
//     console.log("Email:"+" "+email);
    
// }

// studentDetails("Jithin", "Playwright", 36);
// studentDetails("Vidhya", "Typescript");
// studentDetails("Sajin", "devops", undefined, "abc@gmail.com");

//~ Incorrect:
// function test2(age?: number, name: string): void { }
//! Error: A required parameter cannot follow an optional parameter.

//^ DFAULT PARAMETERS
//& Default parameter = parameter with a predefined value.
//& Default parameters allow us to assign a default value to a parameter.

//& If the caller does not provide a value for that parameter,
//& TypeScript uses the default value automatically.
//& Passing undefined also causes the default value to be used.
//& TypeScript can infer the parameter type from the default value.


//^ Syntax

//~ function functionName(parameter: type = defaultValue): returnType {
//~     // function body
//~ }

//^ Optional and Default Parameters Example

// function placeOrder( product: string, coupon?: boolean, quantity: number = 1){
//     if(coupon == true){
//         console.log(`ordered ${quantity} ${product} : Coupon Applied`);
//     }else{
//         console.log(`ordered ${quantity} ${product} : No Coupon Applied`);
//     }
// }

// placeOrder("Laptop");
// placeOrder("SmartPhone",undefined, 5);
// placeOrder("Mouse", false, 3);
// placeOrder("HeadPhones",true, 9);
// placeOrder("Adapter",true);
// placeOrder("Adapter",true);

//* EXECUTION CONTEXT

//& Execution Context is the environment in which JavaScript code is
//& evaluated and executed.

//& Whenever JavaScript code runs, JavaScript creates an Execution Context
//& to manage variables, functions and the execution of the code.


//^ Types of Execution Context

//~ 1. Global Execution Context (GEC)
//~ 2. Function Execution Context (FEC)


//^ 1. Global Execution Context

//& When a JavaScript program starts, a Global Execution Context is created.

//& There is only one Global Execution Context for a program.

//~ Variables and functions declared outside functions are handled
//~ inside the Global Execution Context.

// let a: number = 10;
// let b: number = 20;

// console.log(a + b); //+ 30


//^ 2. Function Execution Context

//& Whenever a function is called, a new Function Execution Context is created.

//& Each function call gets its own Execution Context.

// function add(x: number, y: number): number {

//     let result: number = x + y;

//     return result;
// }

// console.log(add(10, 20)); //+ 30


//! IMPORTANT
//& Function Execution Context is created when the function is CALLED,
//& not when the function is merely declared.


//^ Phases of Execution Context

//& An Execution Context can be understood in two main phases:

//~ 1. Memory Creation Phase
//~ 2. Execution Phase


//^ 1. Memory Creation Phase

//& JavaScript prepares memory for variables and function declarations
//& before executing the code.

//& This behavior is related to hoisting.

//~ var       → initialized with undefined.
//~ let/const → created but remain uninitialized (TDZ).
//~ function declaration → function is stored in memory.


//^ 2. Execution Phase

//& JavaScript executes the code line by line.

//& Values are assigned to variables.
//& Calculations are performed.
//& Functions are called.


//^ Example

// let num1: number = 10;

// function multiply(x: number, y: number): number {
//     let result: number = x * y;
//     return result;
// }

// let answer: number = multiply(num1, 5);

// console.log(answer); //+ 50

// Global Execution Context
//         │
//         ├── Memory Creation Phase
//         │      num1     → uninitialized
//         │      multiply → function
//         │      answer   → uninitialized
//         │
//         └── Execution Phase
//                │
//                num1 = 10
//                │
//                multiply(10, 5) called
//                        │
//                        ▼
//                Function Execution Context
//                        │
//                        x = 10
//                        y = 5
//                        result = 50
//                        return 50
//                        │
//                        ▼
//                Function context finishes
//                        │
//                        ▼
//                answer = 50
//                        │
//                        ▼
//                console.log(answer)
//                        │
//                        ▼
//                       50


//^ FUNCTION RETURN STATEMENT
// function add( x:number, y:number):number{
//     return x+y;
// }

// let res = add(10,5);
// console.log(res);

// console.log(add(10,6));

//^ FUNCTION CALLING ANOTHER FUNCTION

//Area of circle

// function areaOfCircle(radius: number): number{
//     let radSqr = squareOfRad(radius);
//     return 3.14*radSqr;
// }

// function squareOfRad(radius: number): number{
//     return radius*radius;
// }

// let area: number = areaOfCircle(10);
// console.log(`Area of circle with radius 10:${area}`);

//* FUNCTION TYPES

//^ 1. NORMAL FUNCTION / FUNCTION DECLARATION
//~ A function declared using the 'function' keyword with a function name.
//~ It can be called before its declaration because function declarations are hoisted.

// function add(a: number, b: number): number {
//     return a + b;
// }

// console.log(add(10, 20)); //+ Output: 30

//^ 2. FUNCTION EXPRESSION

//~ A function is created and assigned to a variable.
//~ The function itself can be anonymous (without a name).
//~ Unlike a function declaration, the variable cannot be safely used before its initialization.
//~ In case of Function expression,we cannot call the function using function name, but using the variable to which function is assigned to.

// //~ Function Expression + Normal Function

// let subtractResult = function subtract(a: number, b: number): number {
//     return a - b;
// };

// console.log(subtractResult(20, 10)); //+ Output: 10

// //~ Function Expression + Anonymous Function
//~ Anonymous function- Function without a name.

// let subtractResult2 = function (a: number, b: number): number {
//     return a - b;
// };

// console.log(subtractResult2(20, 10)); //+ Output: 10

//^ 4. IMMEDIATELY INVOKED FUNCTION EXPRESSION - IIFE

//~ IIFE is a function that executes immediately after it is created.
//~ We do not need to call it separately.
//~ ()() with the help of two pair of paranthesis we can declare and call the function.
//~ (First Paranthesis-  Wraps the function and makes it a function expression.)(Next Paranthesis-Immediately invokes/calls the function).

//^ 4.1 IIFE - Named Function Expression

//~ An IIFE can contain a named function.
//~ Here, f1 is the name of the function.
// (function f1(){
//     console.log("Hello");
// })();

//^ 4.2 IIFE - Anonymous Function Expression

//~ An IIFE does not require a function name.
// (function(){
//     console.log("Hello2");
// })();

//^ 4.3 IIFE with Parameters

//~ An IIFE can accept parameters just like a normal function.
//~ Values are passed through the second pair of parentheses.
// (function(name: string, course: string){
//     console.log(`Welcome ${name} to ${course} session`);
// })("Jithin","Typescript")


//^ 4.4 IIFE with Return Value

//~ An IIFE can return a value.
//~ The returned value can be stored in a variable.

// let z =(function(a: number, b: number){
//     console.log("HELLO");
//     return a+b;
// })(10,20)
// console.log(z);

//& Execution Flow:
//~ 1. The function expression is created.
//~ 2. Arguments 10 and 20 are passed immediately.
//~ 3. a = 10 and b = 20.
//~ 4. "HELLO" is printed.
//~ 5. Function returns 30.
//~ 6. Returned value 30 is assigned to z.
//~ 7. console.log(z) prints 30.

//^ 5. ARROW FUNCTION
//& Arrow function is a shorter way of writing a function expression.
//& It was introduced in ES6 (ECMAScript 2015).
//& Arrow functions use the => (fat arrow) symbol
//~ Used to reduce the syntax of normal function.
//~ Arrow function is always defined without any name.ie Arrow function will always be an anonymous function.
//~ To call arrow function,we have to store it into a variable.
//~ If the function contains only one expression,we can remove {} and the return keyword.

//^ 5.1 Arrow Function with Multiple Statements

//~ If an arrow function contains multiple statements,we use curly braces {} to define the function body
// let z = ():void => {
//     console.log("Hello")
//     console.log("World")
// }

// z();

//^ 5.2 Arrow Function with Single Statement

//~ If the function contains only one statement,curly braces {} can be omitted.
// let z1 = (): void => console.log("Hello World");
// z1();

//^ 5.3 Arrow Function with One Parameter
// let z2 = (x: string): void => {
//     console.log(`Hello ${x}`);
// }
// z2("World")

// let z3 = (a: number, b: number): number => a+b;
// console.log(z3(10,20));//+ When we have sungle statement or single expression,we dont have to write return statement.

//^ 6. CALLBACK FUNCTION

//& A callback is a function that is passed as an argument to another function.
//& The receiving function decides WHEN and WHERE to execute the callback.
//! Callback is not a different function syntax. It describes HOW a function is being used.
//& While passing a callback, we normally pass the function itself, without calling it.
//& A callback can be:
//~ Normal function
//~ Anonymous function
//~ Arrow function
//! We normally pass the function reference, not the result of calling it.

//^ 6.1 basic callback function
// function sayHello(){
//     console.log("Hello World");
// }

// function welcome(callback:()=> void){
//     callback();
// }
// welcome(sayHello);

//^ 6.2 basic callback function with return type

// function sayHello(name: string): string{
//     return "Hello "+name;
// }

// function welcome(callback:(name: string)=> string, name: string):void{
//     let greetMessage: string = callback(name);
//     console.log(greetMessage);
// }
// welcome(sayHello,"Jithin");

//^ 6.3 multiple callback functions

// function add(x:number, y:number): number{
//     return x+y;
// }

// function multiply(x:number, y:number): number{
//     return x*y;
// }

// function calculate(callback:(x: number, y:number)=> number, x:number, y: number): number{
//     let result = callback(x,y);
//     return result;
// }

// let addResult = calculate(add, 10,20);
// let productResult = calculate(multiply, 10,20);

// console.log(addResult);
// console.log(productResult);

//^ 6.4 callback using anonymous function
// function orderStatus(callback:(status: string)=>void,status: string){
//     callback(status);
// }

// orderStatus(function(status: string){
//     console.log(`Order ${status}`)},"Packed");

//^ 7. HIGHER ORDER FUNCTION
//& A function that accepts another function as argument is called Higher Order Function.
//& or A function that returns another function.

//^ 7.1 hof accepting another function as argument
// function sayHello(){
//     console.log("Hello World");
// }

// function welcome(callback:()=> void){
//     callback();
// }
// welcome(sayHello);
//+ sayHello is callback function and welcome is hof,because welcome accepts sayHello as an argument.

//^ 7.1 hof  returning another function whose return type is void.

// function outer():()=> void{
//     function inner(){
//         console.log("I am inner function");
//     }

//     return inner;
// }

// let r = outer();
// r();
//+ Here outer is higher order function.
//+ ()=> void means, okay outer is an higher order function,that returns another funtcion which will not return anything.
//+ outer returns inner function, that doesnot return anything.

//^ 7.1 hof  returning another function whose return type is a string.

// function outer():()=> string{
//     function inner(){
//         return "I am an inner function that returns a string";
//     }

//     return inner;
// }

// let r = outer();
// let message = r();
// console.log(message);
//+ Here outer is higher order function.
//+ ()=> string means, okay outer is an higher order function,that returns another funtcion which will return a string.
//+ outer returns inner function, that returns a string.

//^ 7.1 hof returning another function which accepts arguments.--need to complete

// function outer(status: string):()=> string{
//     function inner(){
//         return "Order "+status;
//     }

//     return inner;
// }

// let r = outer("Packed");
// let message = r();
// console.log(message);
//+ Here outer is higher order function.
//+ ()=> string means, okay outer is an higher order function,that returns another funtcion which will return a string.
//+ outer returns inner function, that returns a string.


//* SCOPE OF VARIABLES

//^ 1. GLOBAL SCOPE

// var a: number = 10;
// let b: number = 20;
// const c: number = 30;
// //+ a,b and c are declared globally.

// console.log("---global access-------")
// console.log(`var a:${a}`);
// console.log(`let b:${b}`);
// console.log(`const c:${c}`);
// //+ output
// //+var a:10
// //+let b:20
// //+ const c:30

// console.log("---block access-------")
// {
// console.log(`var a:${a}`);
// console.log(`let b:${b}`);
// console.log(`const c:${c}`);
// }

// //+ output
// //+var a:10
// //+let b:20
// //+ const c:30
// console.log("---function block access-------")
// function f1(){
//     console.log(`var a:${a}`);
//     console.log(`let b:${b}`);
//     console.log(`const c:${c}`);
// }
// f1();

// //+ output
// //+var a:10
// //+let b:20
// //+ const c:30

//^ 2. BLOCK SCOPE
// //! let and const cannot be accessed from outside the block in which its declared.
// //~ var can be accessed from outside the block in which its declared.

// {
//     var a: number = 10;
//     let b: number = 20;
//     const c: number = 30;
// //+ a,b and c are declared inside block.
// }

// console.log("---global access-------")
// console.log(`var a:${a}`);
// // console.log(`let b:${b}`); //! let and const cannot be accessed outside the block.
// // console.log(`const c:${c}`);

// console.log("---block access-------")
// {
//    console.log(`var a:${a}`); 
// //    console.log(`let b:${b}`); //! let and const cannot be accessed outside the block in which its declared.
// //    console.log(`const c:${c}`);
// }
// console.log("---function access-------")

// function f1(){
//     console.log(`var a:${a}`);
//     // console.log(`let b:${b}`);//! let and const cannot be accessed outside the block in which its declared.
//     // console.log(`const c:${c}`);
// }
// f1();

//^ 3. FUNCTION SCOPE
// function f1(){
//     var a: number = 10;
//     let b: number = 20;
//     const c: number = 30;
// }

// console.log("---global access-------")
// console.log(`var a:${a}`);//!var, let and const cannot be accessed outside the function in which its declared.
// // console.log(`let b:${b}`); 
// // console.log(`const c:${c}`);

// console.log("---block access-------")
// {
//    console.log(`var a:${a}`); //!var, let and const cannot be accessed outside the function in which its declared.
// //    console.log(`let b:${b}`); 
// //    console.log(`const c:${c}`);
// }

// GLOBAL SCOPE
// │
// ├── var
// ├── let
// ├── const
// │
// └── FUNCTION
//      │
//      ├── var   ← available throughout function
//      ├── let
//      ├── const
//      │
//      └── BLOCK { }
//           ├── var   ← escapes block, stays in function
//           ├── let   ← stays inside block
//           └── const ← stays inside block

// Memory trick: var respects function boundaries; let and const respect {} block boundaries
// Block can be anything like- for loop, if else block..


//* REST PARAMETER

//& Rest Parameter allows a function to accept any number of arguments.
//& It collects the remaining arguments passed to the function and stores them together in an array.
//& It is represented using three dots (...).
//! Rest parameter must always be the LAST parameter of a function.

//^ 1. Basic Rest Parameter

// function add(...numbers: number[]): void {
//     console.log(numbers);
// }
// add(10, 20);
// add(10, 20, 30);
// add(10, 20, 30, 40, 50);

// //+ [10, 20]
// //+ [10, 20, 30]
// //+ [10, 20, 30, 40, 50]

//^ 2. Rest Parameter with Normal Parameter

// function student(name: string, ...marks: number[]): void {

//     console.log(`Name: ${name}`);
//     console.log(marks);
// }

// student("Jithin", 80, 90, 75, 95);

// //+ name  = "Jithin"
// //+ marks = [80, 90, 75, 95]

//^ 3. Using Values Collected by Rest Parameter

// function calculateTotal(...numbers: number[]): number {
//     let total: number = 0;
//     for (let num of numbers) {
//         total += num;
//     }
//     return total;
// }
// console.log(calculateTotal(10, 20, 30, 40));

//+ Output: 100


//~IMPORTANT

// function test(a: number, ...numbers: number[]): void {
//     console.log(a);
//     console.log(numbers);
// }
// test(10, 20, 30, 40);

//+ a       = 10
//+ numbers = [20, 30, 40]
//! Rest parameter must be last.
// function test(...numbers: number[], name: string) {}
//! ERROR

//* ARRAYS IN TYPESCRIPT
//& An array is a collection of multiple values stored under one variable.
//& TypeScript allows us to specify what type of values an array can contain.
//& Arrays are zero-indexed. First element is at index 0.
//~ Syntax- arrayname: type[] = [ele1,ele2,...,eleN];

// let numbers: number[] = [1,2,3,4,5,6];
// console.log(numbers);

//^ Homogeneous Array 
//& Array that contain element of only one type.
//~ Syntax- arrayname: type[] = [ele1,ele2,...,eleN];

//^ Heterogeneous Array
//& Array that can contain elements of differrent types.
//& Union type allows the array to contain differrent type of values.
//~ Syntax- arrayname: (type1 | type2 | type3)[] = [ele1,ele2,...,eleN];

// let data: (number | string | boolean)[] = [1,2,3,"Hello",true];
// console.log(data);

//^ Accessing Array Elements

// let fruits: string[] = [
//     "Apple",
//     "Mango",
//     "Grapes",
//     "Guava"
// ];
// console.log(fruits[0]); //+ Apple
// console.log(fruits[2]); //+ Grapes

//^ Length of an Array- arrayname.length
// console.log(fruits.length); //+ 4

//^ Loops with Array
//^ 1. for Loop with Array

// let marks: number[] = [80, 90, 70, 85];
// for (let i = 0; i < marks.length; i++) {
//     console.log(marks[i]);
// }

//^ 2.for...of with Array
//& for...of directly gives the values.
// for (let mark of marks) {
//     console.log(mark);
// }

//^ 10. for...in with Array
//& for...in gives the indexes.
// for (let index in marks) {
//     console.log(index);
// }

//* Array Methods -to be done 

//* writes notes of Objetcs,type-alias,interface,enum.

//*OOps ---- object oriented programming based on classes and object rather than functions  and logic
//& easier debugging   // reuse the code // effective problem solving
//^ core principles of oops
//~ encapsulation // abstraction // inheritence // polymorphism

//* Class
//& It gives a blue print to create an Object.
//& Properties in Class are called as fields- eg- name,age..

// class Student{
//     name : string="";
//     age : number = 0;
// }
// let s1 = new Student();
// s1.name = "John";
// s1.age = 23;
// console.log(s1);

// let s2 = new Student();
// s2.name = "Sameer";
// s2.age = 28;
// console.log(s2);

//* Methods
//& Methods perform actions or behavior.
//& Its a function declared inside a class.

//& fields- What the Object has.
//& Methods -What the Object does.

// class Student{
//     name : string ="";

//     study(){
//         console.log("Student is studying");
//     }
// }
// let s1 = new Student();
// console.log(s1);//+ Student { name: '' }.
// s1.study();//+ Student is studying.

// class Calculator{
//     add(a: number, b: number): number{
//         return a+b;
//     }
// }

// let c1 = new Calculator();
// console.log(c1.add(10,20));//+ 30

//* Constructor
//& Special type of methods that gets called automatically during Object creation.
//& Its used to initialize the value when an Object is created.


// class Student{

//     name : string;
//     age: number;

//     constructor(name: string, age: number){
//         this.name = name;
//         this.age = age;
//     }

// }

// let s1 = new Student("Rahul",22);
// console.log(s1);

//& this keyword- refers to the current object.

//* Access modifiers
//& controls the access and visibility of class members(Properties and methods).
//~ 1.Public 2.Private 3.Protected

//^ 1.Public
//~ We can access Public members from anywhere.-Inside the class and outside the class.
//~ If we dont assign any access specifier,the member is public by default.
// class Student{

//     public name : string = "John";
//     public age: number = 0;

//     public display(){
//         console.log(this.name);
//     }
    
// }
// let s1 = new Student();
// s1.display()
// s1.name = "Rahul";
// console.log(s1.name);

//^ 2.Private
//~  We can access Private members inside only those class in which they are declared.


// class Student{

//     public name : string = "John";
//     public age: number = 25;
//     private gender: string = "M";

//     public display(){
//         console.log(this.name);
//         console.group(this.age);
//         console.log(this.gender);
//     }
    
// }
// let s1 = new Student();
// s1.display()
// s1.gender = "Male";//+ error- Property 'gender' is private and only accessible within class 'Student'
// console.log(s1.gender);//+ error- Property 'name' is private and only accessible within class 'Student'.

// class collegeStudent {

//     public collegeName: string = "ABC";

//     public display(){
//         console.log(this.collegeName);
//         let s2 = new Student();
//         console
//         console.log(s2.gender);
//     }
// }

//^ 3.Protected
//~ Protected members can be accessed inside the class, they cannot be accessed outside the class directly,
//~ They can be accessed outside class through child class.


//* Static members in TypeScript.
//& Members that are defined using static keyword is called Static members.
//& Class level members are called Static members-They belongs to the class itself.
//& Inside the class they can be accessed directly or by using class name.Outside the class Static members are accessed using Class name.

//& Outside the class:Access static members using the class name.
// console.log(Student.collegeName);

//& Inside the class — from a STATIC method:Access static members using either the class name or this.
// static display2() {
//     console.log(Student.collegeName); 
//     console.log(this.collegeName);    
// }
//& Inside the class — from a NON-STATIC/INSTANCE method: Access static members using the class name.
// display() {
//     console.log(Student.collegeName); 
// }

// class Student{
//    static  collegeName : string = "ABC";
//    place: string = "Bangalore";
// //    console.log(collegeName);//+Error -cant write executable statement directly inside the classbody.
// //    console.log(Student.collegeName);//+Error -cant write executable statement directly inside the classbody.
// display(){
//     //console.log(collegeName);//+annot find name 'collegeName'. Did you mean the static member 'Student.collegeName'
//     console.log(Student.collegeName);
// }

// static display2(){
//     console.log(collegeName);
// }

// }

// let s1 = new Student();
// //console.log(s1.collegeName); //+Property 'collegeName' does not exist on type 'Student'. Did you mean to access the static member 'Student.collegeName' instead?ts(2576)
// //+ static members are supposed to access using class name.not using object name.
// console.log(Student.collegeName);//+ ABC
// s1.display();

//* Getters and Setters
//~ used to write and read value

//^  why do we need getter and setter ,when we can read value directly?
//& we use getters and setters to access private and protected members.

// class Student{
//     protected name: string = "John";
//     private age: number = 28;

//     get  getName(): string{
//         return this.name;
//     }

//     get  getAge(): number{
//         return this.age;
//     }

// }
// let s1 = new Student();
// console.log(s1.getName);//+ getter letting us access protected member directly  outside the class.Witout getter we cannot access protected member without child class.
// console.log(s1.getAge);//+ getter letting us access private member  outside the class.

//& setter - controlled change/modify.

// class UserAccount{
//     public name: string = "John";
//     protected age: number = 28;
//     private gender: string = "M";

//     get  getAge(): number{
//         return this.age;
//     }

//     set setAge(age: number){
//         if((age < 0)||(age>120)){
//             console.log("Enter a valid age")
//         }
//         this.age = age;
//     }

//     get getGender(): string{
//         return this.gender;
//     }

//     set setGender(gender: string){
//         this.gender = gender;
//     }

// }
// let u1 = new UserAccount();
// u1.name = "Rahul";
// u1.setAge = 28;
// u1.setGender = "Male";

// console.log(u1.name);
// console.log(u1.getAge);
// console.log(u1.getGender);
// console.log("--------------");
// u1.setAge = -1;

// console.log(u1.name);
// console.log(u1.getAge);
// console.log(u1.getGender);
// console.log("--------------");
// u1.setAge = 130;

// console.log(u1.name);
// console.log(u1.getAge);
// console.log(u1.getGender);
// console.log("--------------");
// u1.setAge = 30;

// console.log(u1.name);
// console.log(u1.getAge);
// console.log(u1.getGender);


//* Inheritance
//& Its the property by which one class derives properties and behaviours of another class.
//& class whose members are inherited are called base class or parent class.
//& class which gets inherits are called child class or derived class.
//& child class inherits parent class using extends keyword
//~ class B extends A{}

//^ Notes- recall static and non static before Inheritance
//^ 1.Static Members
//~Can be accessed using the class name.
//~ Inside a static method, static members can be accessed using:The class name,The this keyword
//~ Inside a non-static (instance) method, static members can still be accessed using the class name.
//~ Inside a static method, this refers to the class itself.
//~ Static methods cannot directly access non-static/instance members, because there is no specific object instance associated with a static method.

//^ 2.Non-Static / Instance Members
//~ Can be accessed through the object/instance.
//~ Inside a non-static (instance) method, non-static members can be accessed using the this keyword.
//~ Inside a non-static method, this refers to the current object/instance.
//~ Inside a non-static method, static members can be accessed using the class name.
//~ Non-static members cannot be accessed directly from a static method, because this in a static method refers to the class, not to an object.
//~ Non-static members are associated with the instance, while static members are associated with the class.


//^ super()
//& It is used to access the parent class constructor from child class
//& It should be the first line inside child class constructor.

//nor

// class Person{
//     firstName: string;
//     lastName : string;

//     constructor(firstName:string, lastName:string){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     displayPersonDetails(){
//         console.log(`Name:${this.firstName} ${this.lastName}`)
//     }
// }

// class Employee extends Person{
//     age: number;

//     constructor(firstName:string, lastName:string, age: number){
//         super(firstName,lastName);
//         this.age = age;
//     }

//     displayEmployeeDetails(){
//         console.log(`EmployeeName:${this.firstName} ${this.lastName}, EmployeeAge:${this.age}`)
//     }

//     //+method overriding
//     displayPersonDetails(){
//          console.log(`EmployeeName:${this.firstName} ${this.lastName}, EmployeeAge:${this.age}`)
//     }
// }

// let emp =new Employee("Abdul","Kalam",70);
// emp.displayEmployeeDetails();


//* Method Overriding
//& Method overriding happens between Parent and Child classes.
//& The child class must extend the parent class.
//& The child class provides a new implementation of the parent method.
//& Use the "override" keyword to explicitly indicate overriding.
//& "super.methodName()" is used to call the parent class method.
//& Method overriding is an important concept of Polymorphism.

// class RBI {
//     rateOfIntrest: number = 7;

//     roi() {
//         return this.rateOfIntrest;
//     }
// }

// class SBI extends RBI {
//     roi() {
//         return this.rateOfIntrest + 3;
//     }
// }

// class ICICI extends RBI {
//     roi() {
//         return this.rateOfIntrest + 4;
//     }
// }

// let sbiObj = new SBI();
// console.log(`SBI rate of Interest: ${sbiObj.roi()}`);

// let iciciObj = new ICICI();
// console.log(`ICICI rate of Interest: ${iciciObj.roi()}`);

//* Encapsulation

//^ 1. What is Encapsulation?
//& Encapsulation means wrapping data (properties) and methods together inside a class.
//& It also controls how the data can be accessed from outside the class.
//& Java script achieve encapsulation using Access modifiers-Public,Private,Protected and Getter & Setter methods.

// class Student{
//     public name: string = 'Rahul';
//     private age: number = 28;
//     protected marks: number = 90;

//     get getAge(): number{
//         return this.age;
//     }

//     get getMarks(): number{
//         return this.marks;
//     }

//      set setMarks(marks: number){
//         this.marks = marks;
//     }

// }

// let s1 = new Student();
// // s1.marks =95- Note allowed.cant access private member directly.
// s1.setMarks = 95;
// console.log(s1.getMarks);//+ output-95

//~ Here we are controlling security and visibility using Access Modifiers.
//+ public - Accessible from anywhere.
//+ private - Accessible only inside the same class.
//+ protected - Accessible inside the class and child classes.
//~ And giving controlled access to private and protected members through getters and setters.

//* Polymorphism
//& same method or operation can behave differrent in differrent situations.

//^ Types of Polymorphism
//~ 1.Compile time polymorphism 2.Runtime Polymorphism

//~ 1.Compile Time Polymorphism- Method Overloading
//& We will be using same method name but differrent parameter signature.

//~ Java — In Java, you can have multiple methods with the same name and different parameter lists, and each has its own implementation
//~ In TypeScript, you cannot write two implementations with the same method name. You need overload signatures + one implementation.

// class Calculator {

//     add(a: number, b: number): number;//+ In TypeScript, you cannot write two implementations with the same method name. 
//     add(a: string, b: string): string;//+ You need overload signatures 

//     add(a: any, b: any): any {//++ one implementation.
//         return a + b;
//     }
// }

// let obj = new Calculator();
// console.log(obj.add(10, 20));//+ 30
// console.log(obj.add("Hello", "World"));//+ HelloWorld

//~ 2.RunTime Polymorphism-Method overriding
// class Animal{
//     sound(){
//         console.log("Makes Sound");
//     }
// }
// class Dog extends Animal{
//     sound(){
//         console.log("Makes Bark Sound");
//     }
// }
// class Cat extends Animal{
//     sound(){
//         console.log("Makes Meoww Sound");
//     }
// }


// let a = new Animal();
// a.sound();
// let d = new Dog();
// let c = new Cat();
// d.sound();
// c.sound();

// let pet: string = "cat";
// let obj: Animal;
// if (pet === "cat") {
//     obj = new Cat();
// }
// else {
//     obj = new Dog();
// }

// obj.sound();

//* Abstraction.
//& Shows only the necessary information and hides the unnecessery information.
//& Javascript achieves it through abstract class.
//& abstract class is a class that is designed to act as base class.
//& It is a class that is designed to be act as base classs fot other classes.
//& abstract class is defined using abtract keyword.
//& A class that contain abtract method should be defined as abtract class.
//& An abstract class can have constructor,but we cannot create object of abstract class.
//~ syntax: abstract class className{}

//^. abstract methods-
//& Abstract methods are mthods with only declaration but no implimentation inside abstract class.
//& Abstract methods should be implimented by child classes.
//& Abstract method is defined using abstract keyword.
//& If a normal classs inherits an abstract class- It must impliment all the abstract methods of parent class.
//& If an abstract class inherits an abstract class-It is not necessery to impliment all the abstract methods of parent class.
//& A method cannot be abstract and private-Because abstract methods are supposed to be overridden ,but private methods cannot be overridden.


// abstract class Payment{

//     abstract pay(): void;
//     showMessage(): void{
//         console.log("Payment processing");
//     }
// }

// class UPI extends Payment{
//     pay(): void{
//         console.log("Payment doen using UPI");
//     }
// }

// class CreditCard extends Payment{
//     pay(): void{
//         console.log("Payment done using Credit card");
//     }
// }

// // class HdfcBank extends Payment{//+ error-Non-abstract class 'BankAcc' does not implement inherited abstract member pay from class 'Payment'.
// //     credit(): void{//+ if child class is a normal class,it must impliment all abstract methods in parent class.
// //         console.log("Credit recieved")
// //     }
// // }

// abstract class SbiBank extends Payment{//+ it is not necessary for a child abstract class to impliment abstract methods og parent class.
//     credit(): void{
//         console.log("Credit recieved")
//     }
// }

// //let payObj = new Payment();//+ Error-Cannot create an instance of an abstract class.
// let upiObj =new UPI();
// upiObj.pay();//+Payment done using UPI

// let creditObj= new CreditCard();
// creditObj.pay();//+Payment doen using Credit card

// //let bankObj = new SbiBank();//+Cannot create an instance of an abstract class

//^ Important Points

//~ Abstract class cannot be instantiated directly.
//~ Abstract classes can have constructors in TypeScript, just like normal classes.
//~ Cannot create an object directly from the abstract class, but its constructor is called when a child class object is created.
//~ Abstract class can have normal methods and abstract methods.
//~ Abstract method has only declaration, not implementation.
//~ Child class must implement the abstract method.
//~ Abstract class is used as a base class.
//~ Abstract class supports inheritance and polymorphism.

//^ Normal Class vs Abstract Class
//^ Normal Class                                                      // ^ Abstract Class
//+ Cac craete object of Normal class directly.                       //+ Cannot create object of Abstract class directly.
//+ Can containg only normal class                                    //+ Can contain both abstract methods and normal methods.
//+ Can be used as a base class and directly.                         //+ Designed to be used as a base class.

//* Composition
// cas -- has engine, wheels, music system,gas.
// car itself an engine- no?
// car has an engine

//& Composition means creating a class by using Objects of another class inside it.
//& Composition will be having has - a- relationship.

// class Engine {
//     start(): void {
//         console.log("Engine started");
//     }
// }

// class Car {
//     engine: Engine;
//     constructor() {
//         this.engine = new Engine();
//     }
//     startCar(): void {
//         this.engine.start();
//         console.log("Car started");
//     }
// }

// let carObj = new Car();
// carObj.startCar();

//+ Engine started
//+ Car started

//^ Why do we need composition?
//~ Let say our Car is Car-it has behaviours of engine, music system etc...
//~ If any of the behaviours/methods are having error-it impact entire class of Class.
//~ So we create seperate class for engine,music system etc...use the object inside class Car.
//~ It allows a class to use functionality of another class.
//~ Composition is different from inheritance. Inheritance represents IS-A.Composition represents HAS-A.

//* Type Narrowing
//& reducing a type of value from wider set of possible types to a specific type after checking the conditions.

//^ 1. What is Type Narrowing?

//& Type narrowing is the process of reducing a variable from a broader type to a more specific type.
//& TypeScript uses conditions to determine the exact type of a variable inside a particular block.

//^ 2. Example

// let value: string|number;
// function printValue(value: string|number){
//     console.log(value);
//     console.log(value.toUpperCase());//+ here it throws error-toUpperCase() cant be used for number
// }

// printValue("ts");
// printValue(20);

//&  We can use typeguard to resolve this.
//&  A type guard is a condition that helps TypeScript determine the specific type of a variable.
//&  differrent typeguards are: typeof......

//^ 3.Differrent types of TypeNarrowing

//^ 3.1 typeof Narrowing
//& helps identify the type of a variable.typeof is commonly used to narrow primitive types.
// let value: string|number;
// function printValue(value: string|number){
//     if(typeof value === "string"){
//         console.log(value.toUpperCase());
//     }else{
//         if(typeof value === "number"){
//             console.log(value*value);
//         }
//     }
// }

// printValue("ts");//+ TS
// printValue(20);//+ 400

//^ 3.1 instanceof narrowing
//& instanceof is used to check whether an object belongs to a particular class.
//& instance- it is the actual Object created from a class.
//~ syntax- object instanceof ClassName

// class Student{
//     study(){
//         console.log("Student is learning");
//     }
// }

// class Teacher{
//     teach(){
//         console.log("Teacher is teaching");
//     }
// }

// let s = new Student();
// console.log(s instanceof Student);//+ true
// console.log(s instanceof Teacher);//+ false

// function performaction(person: Student|Teacher){
//     if(person instanceof Student){
//         person.study();
//     }else{
//         person.teach();
//     }
// }

// let personObj = new Student();
// performaction(personObj);//+Student is learning

//^ 3.3 in Operator Narrowing
//& "in" checks whether a property exists in an object.
//~ syntax- "property name" in Object

//~example1- how to check poperty exists in Object
// let student = {
//     name : "Rahul",
//     age : 30
// }

// console.log("marks" in student);//+ false
// console.log("age" in student);//+ true

//~ example2- When to use in operator narrowing

// type Student={
//     name : string,
//     marks: number
// }

// type Employee={
//     name : string,
//     salary: number
// }

// let s: Student={
//     name : "Rahul",
//     marks: 90
// }

// let emp: Employee = {
//     name : "Rahul",
//     salary : 40000
// }

// function printDetails(person: Student|Employee){
//     if("marks" in person){
//         console.log(`marks: ${person.marks}`);
//     }else{
//         console.log(`salary: ${person.salary}`);
//     }
// }

// printDetails(s);//+ marks: 90
// printDetails(emp);//+ salary: 40000

//~ Use the "in" operator when we have a union of object types and we need to identify the object type based on a
//~ property that exists only in one of the types.

//+ Example:
//+ Student has "marks"
//+ Employee has "salary"

//+ "marks" in person
//+ person is narrowed to Student

//+ Otherwise
//+ person is narrowed to Employee

//^ 3.4 Truthiness Narrowing
//& TypeScript can narrow a value based on whether it is truthy or falsy.
//& Truthy values-true,non zero numbers, non empty string, Objects
//& Falsy values- false,0,NaN,Undefined,empty string

// function printName(name: string|number|undefined){
//     if(name){
//         console.log(`Hello ${name}`);
//     }else{
//         console.log("Name is missing");
//     }
// }

// printName("Rahul");//+ Hello Rahul
// printName(0);//+ Name is missing

//^ 4.Important points

//~ type operator narrowing
//~ Type narrowing is the process of reducing a variable from a broader type to a more specific type.
//~ helps identify the type of a variable.typeof is commonly used to narrow primitive types.

//~ instance narrowing
//~ instanceof is used to check whether an object belongs to a particular class.
//~ instance- it is the actual Object created from a class.
//~ syntax- object instanceof ClassName

//~ In operator narrowing
//~ "in" checks whether a property exists in an object.
//~ Use the "in" operator when we have a union of object types and we need to identify the object type based on a
//~ property that exists only in one of the types.
//~ syntax- "property name" in Object

//~ Truthiness narrowing
//~ TypeScript can narrow a value based on whether it is truthy or falsy.
//~ Truthy values-true,non zero numbers, non empty string, Objects
//~ Falsy values- false,0,NaN,Undefined,empty string

//* 28/09/2026-Promises

//* 29/09/2026

//* 29/09/2026-Late join

//^ Advanced Types- Template literal,keyof,Indexed Access,typeof,utility types.

//^ keyof- is used to get the property name of a type

// type Student = {
//     name: "Rahul",
//     age:   30,

// }

// function getProperty(key: keyof Student){//+ This restricts property of any other Objects to be passed as argument.
//     console.log(key);
// }

// getProperty("name");
// getProperty("age");

//^ Indexed Access- allows us to access the type of a particular property from another type.
// type Student = {
//     name: string;
//     age: number;
// };

// type StudentName = Student["name"];
// type StudentAge = Student["age"];

// const Student: Student = {
//     name: "Rahul",
//     age: 25
// };

// console.log(student.name);
// console.log(typeof student.name);

//^ allows us to take the typeof existing value
// let student1 = {
//     name: "Rahul",
//     age: 25
// };

// type Student = typeof student1;

// let s1: Student = {
//      name: "Rahul",
//     age: 25
// }

//* ADVANCED TYPES

//^ 1. TEMPLATE LITERAL TYPES

//& Template Literal Types are used to create new string literal types
//& by combining existing string literal types.

// type Field = "name" | "age" | "course";

// type StudentEvent = `student-${Field}`;

//+ StudentEvent becomes:
//+ "student-name" | "student-age" | "student-course"

// let event: StudentEvent;

// event = "student-name";     //+ valid
// event = "student-age";      //+ valid
// event = "student-course";   //+ valid

// event = "student-place";  //! Error


//^ 2. keyof

//& keyof is used to get the keys/property names of an object type.

// type Student = {
//     name: string;
//     age: number;
//     course: string;
// };

// type StudentKeys = keyof Student;

// //+ StudentKeys becomes:
// //+ "name" | "age" | "course"

// let key: StudentKeys;

// key = "name";       //+ valid
// key = "age";        //+ valid
// key = "course";     //+ valid

// key = "place";   //! Error


//^ 3. INDEXED ACCESS TYPES

//& Indexed Access Type is used to get the type of a specific property
//& from another type.

//& Syntax:
//& Type["property"]

// type StudentName = Student["name"];
// //+ string

// type StudentAge = Student["age"];
// //+ number

// type StudentCourse = Student["course"];
// //+ string


//^ keyof + Indexed Access

// //& keyof gets all the keys.
// //& Indexed Access gets the types of those keys.

// type StudentKeys1 = keyof Student;
// //+ "name" | "age" | "course"

// type StudentValues = Student[StudentKeys1];
// //+ string | number


//^ 4. typeof

//& In a TypeScript type position, typeof is used to get the type
//& of an existing variable.

// const student = {
//     name: "Jithin",
//     age: 35,
//     course: "TypeScript"
// };

// type StudentInfo = typeof student;

//+ StudentInfo becomes:
//+ {
//+     name: string;
//+     age: number;
//+     course: string;
//+ }


//^ Combining typeof + keyof + Indexed Access

// const student1 = {
//     name: "Jithin",
//     age: 35,
//     course: "TypeScript"
// };

// //& typeof → gets the type of student1
// type StudentType = typeof student1;

// //& keyof → gets the keys of StudentType
// type StudentKeys2 = keyof StudentType;

// //& Indexed Access → gets the value types of those keys
// type StudentValues2 = StudentType[StudentKeys2];

// //+ StudentKeys2:
// //+ "name" | "age" | "course"

// //+ StudentValues2:
// //+ string | number


//^ Combining Template Literal + keyof

// type StudentEvent1 = `student-${keyof Student}`;

// //+ StudentEvent1 becomes:
// //+ "student-name"
// //+ "student-age"
// //+ "student-course"


//! MEMORY TRICK

//& typeof   → GET TYPE
//& keyof    → GET KEYS
//& Indexed Access → GET VALUE TYPE
//& Template Literal → BUILD STRING TYPE


//? INTERVIEW QUESTION

//? What is keyof in TypeScript?
//& keyof is an operator that produces a union of the property names
//& (keys) of an object type.


//? What is Indexed Access Type?
//& Indexed Access Type allows us to access the type of a property
//& from another type using Type["property"].


//? What is typeof in TypeScript?
//& typeof can be used in a type position to obtain the type of
//& an existing variable.

//? What are Template Literal Types?
//& Template Literal Types allow us to create new string literal types
//& by combining existing string literal types using template syntax.

//^ Utility Types- These are built in types that helps us create new types by modifying,selecting,removing or extracting information
//^ from existing types.

//^ Partil<T>

// 30/09/2026
//^ Required<>   
//& When a type has optional properties and but a particular point we need every property to be mandatory.
// interface Student{
//     name? : string,
//     age? : number,
//     course? : string
// }

// let s1: Required<Student>={
//     name: "Rahul",
//     age: 26,
//     course: "TS"
// }

//^ Pick<T,K>- 
//& An existing type may contain many properties,but we may need only a few properties.
// interface Student{
//     name? : string,
//     age? : number,
//     course? : string,
//     marks? : number
// }

// type studentInfo = Pick<Student, "name"|"age">;

// let s1: studentInfo={
//     name : "Rahul",
//     age: 26
// }

//^ Omit<T,K>
//& It is used when we want almost all the properties  except on or two.

// interface Student{
//     name : string,
//     age : number,
//     course : string,
//     marks: number
// }

// type studentInfo = Omit<Student, "marks">;

// let s1: studentInfo={
//     name : "Rahul",
//     age: 26,
//     course: "TS"
// }

//^ RECORD

//& Record is a TypeScript utility type used to create an object
//& with a defined key type and a defined value type.

//& Syntax:
//& Record<KeyType, ValueType>

// type StudentInfo = Record<string, number>;

//+ Any string key is allowed.
//+ Every value must be a number.

//+ Example:
// let student: StudentInfo = {
//     age: 35,
//     marks: 90,
//     rank: 1
// };

//! Record<string, number> does NOT mean fixed keys.
//! It means any string key with number values.

//& Record can also be used with union types to define fixed keys.

// type Subject = "Java" | "TypeScript" | "Playwright";

// type SubjectMarks = Record<Subject, number>;

// let marks: SubjectMarks = {
//     Java: 90,
//     TypeScript: 85,
//     Playwright: 95
// };

//^ EXCLUDE

//& Exclude is a TypeScript utility type used to remove
//& specific types from a union.

//& Syntax:
//& Exclude<UnionType, TypeToRemove>

// type Role = "admin" | "manager" | "user";

// type UserRole = Exclude<Role, "user">;

//! Exclude works with UNION TYPES.
//! It removes the specified type from the union.

//^ Extract
//& to keep only the matching members

// type Role = "admin" | "manager" | "user";

// type UserRole = Extract<Role, "admin"|"manager">;

//^ NonNullable
//& A type may contain null or undefined and sometimes we need a version without these possibilities

// type value = string| number| undefined;

// type val = NonNullable<value>;



// Utility	Purpose	Mental model
// Pick<T, K>-Keep selected properties- //+ Keep these
// Omit<T, K>-Remove selected properties-//+ Remove these
// Partial<T>-Make properties optional-//+ Everything optional
// Required<T>	Make properties require-//+ Everything required
// Record<K, T>	Create an object type from keys	Map these -//+keys to this type
// Exclude<T, U>	Remove values from a union- //+ Remove these values
// Extract<T, U>	Keep matching values from a union- //+ Keep these values

//* 01/10/2026

//* async programming
//& async allows a programm to start a time consuming operation 
//& without unnecesserly stopping other work,while waiting for that Operation to finish.

//^sync- task 1 is finished first and then tassk 2 is done.
// console.log("Task 1");
// console.log("Task 2");

//^ async
// console.log("Request data from db");// process goes on
// console.log("Fill a form with known data")//+ we should be able to do this ,even when unknown data is being fixed.
// console.log("fill the form with fetched data");

// console.log("start");

// setTimeout(()=>{
//     console.log("Task completed");
// }, 3000);

// console.log("end");

//+ output:
//+ start- end- Task completed

//* Promises
//& Promise ia an Object which represents the eventual completion of an asynchrobous task.
//& We use promisees to handle asynchronous programming

// function getPromise(): Promise<string>{
//     return Promise.resolve("john");
// }//+ declaring getPromise as a Promise that return a string once resolved.

// let r = getPromise();
// console.log(r)

//& A promise represents the future result of an asynchronous operation.

//^ 1. Three states of promises- Pending ,fulfilled,rejected
//& Pending- It is the initial state when Promise is neither Rejected or nor fulfilled.
                                                    //pending
//~ The operation is still running---request sent -------- waiting for response


//& Rejected: It is the satte when asynchronous operation is rejected or fails to execute.
//~ Operation failed- request send --------- something went wrong- failure

//& Fulfilled:It is the state when asynchronous operation is fulfilled and executed successfully.
//~ Operation completed successfully- request send --------- response got- success

//^ then: Its  a method used to handle Promise when its fullfilled.It will run resolve() is called.
//^ catch: Its a method used to handle Promise when its Rejected.It will run when reject() is called.

// const p = new Promise<string>((resolve,reject)=>{
//     let success:boolean = false;

//     if(success){
//         resolve("Operation executed");
//     }else{
//         reject("Operation failed");
//     }
// })

// p.then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error);
// })

// //+ Operation failed

//^ 2.1 example1

// function getUser():Promise<string>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("John")
//         },3000)
//     })
// }

// function getOrders(user: string):Promise<string>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(user+ "has 2 orders")
//         },3000)
//     })
// }

// getUser().then((user)=>{
//     return getOrders(user);
// })
// .then((orders)=>{
//     console.log(orders);
// })
// .catch((error)=>{
//     console.log(error);
// })

//^ 2.2 example 2- async/await  let us work with Promises using code that looks more like normal synchronous code.
// function getUser():Promise<string>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("John")
//         },3000)
//     })
// }

// function getOrders(user: string):Promise<string>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(user+ "has 2 orders")
//         },3000)
//     })
// }

// async  function displayOrder(){
//     let user = await getUser();

//     let orders = await getOrders(user);

//     console.log(orders);
// }

// displayOrder();

//+ output: Johnhas 2 orders

//^ 2.3 example 3
// function getUser():Promise<string>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("John")
//         },3000)
//     })
// }

// console.log("Check Restaurants");
// console.log("Check Menu");

// function getOrders(user: string):Promise<string>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(user+ "has 2 orders")
//         },3000)
//     })
// }

// async  function displayOrder(){
//     let user = await getUser();

//     let orders = await getOrders(user);

//     console.log(orders);
// }


// console.log("Place Order");
// displayOrder();
// console.log("Check other restaurants");
//+ Check Restaurants
//+ Check Menu
//+ Place Order
//+ Check other restaurants
//+ Johnhas 2 orders

//^ 2.4 example 4

//^ 3. promise.all()
//& Used when we want to wait for multiple promises to complete successfully.
//& It returns a new promise and the new Promise is fulfilled only when all the input promises are fulfilled.
//& It waits for all promises to fulfill and gives us all their results together.
//& If any of the promise rejected,it will send error reason of first rejected promise.
//& Promise.all() rejects as soon as any input promise rejects; it doesn't wait for the remaining promises to finish before rejecting.

// function getUser():Promise<string>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("John")
//         },3000)
//     })
// }

// console.log("Check Restaurants");
// console.log("Check Menu");

// function getOrders():Promise<string>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("Order data")
//         },3000)
//     })
// }

// async function displayData():Promise<string[]>{
//    let res: string[] = await Promise.all([getUser(),getOrders()]);
//    return res;
// }

//^ 3. promise.race()
//& Used when we want results of first Promise to settle.


//^ Promise.all
//~ Wait for all Promises to resolve or one gets rejected.
//~ if all resolved,it returns array of results/fulfilled values.
//~ if any promise gets rejected,it returns the rejection reason.
//~ of one promise fails,all Promise fails.

//^ Promise.race
//~ settles as soon as the first promise settles.
//~ If resolved,it returns values of first settled Promise.
//~ If rejected ,it return rejection reason.










