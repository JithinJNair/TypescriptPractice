
//* Optional Parameters
//^ Write a TypeScript function greetUser() that accepts a required name parameter and an optional age parameter. Display the appropriate message depending on whether the age is provided.
// function greet(name: string, age?: number){
//     if(age){
//         console.log(`Name:${name}, Age:${age}`);
//     }else{
//         console.log(`Name: ${name}`);
//     }
// }
// greet("Ameya");
// greet("Ameya", 3);
//^ Write a TypeScript function calculateTotal() that accepts price as a required parameter and quantity as an optional parameter. Display the total amount.
// function calculate(price: number, quantity?: number){
//     if((quantity)&&(quantity>0)){
//         console.log(`Purchased Qunatity:${quantity},Total Price:${quantity*price}`);
//     }else{
//         console.log(`Total Price:${price}`);
//     }
// }

// calculate(100,5);
// calculate(1000,undefined);
// calculate(10000)
//^ Write a TypeScript function displayStudent() that accepts name as a required parameter and course and college as optional parameters. Display the available details.
// function displayStudent(name: string, course?: string, college?: string){
//     console.log(`Student Name:${name}`);

//     if(course != undefined){
//         console.log(`Course:${course}`);
//     }

//    if(college != undefined){
//         console.log(`College:${college}`);
//     }
// }

// displayStudent("Rahul");
// displayStudent("Rahul", "BCA");
// displayStudent("Rahul", "BCA", "ABC College");
//^ Write a TypeScript function printMessage() that accepts a required message parameter and an optional repeatCount parameter. Print the message according to the repeat count.
function printMessage(message: string, count?: number){
    if((count != undefined) && (count>0)){
        for(let i=0; i < count; i++){
             console.log(message);
        }     
    }else{
        console.log(message);
    }
}

printMessage("hello");
printMessage("hello",3)


// Write a TypeScript function createUser() that accepts username and email as required parameters and phone as an optional parameter. Display the user details.
