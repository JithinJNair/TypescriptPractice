//create a function that prints welcome to typescript.
console.log("=====Task 1===============");
function greet(){
    console.log("Welcome");
}

greet()
console.log("----------------------------");

// create a function that accepts students name .call the function with three diffrrent names.-ie 3 diff values.
console.log("=====Task 2===============");
function greet2(name1:string, name2:string, name3:string){
    console.log("Welcome"+" "+name1);
    console.log("Welcome"+" "+name2);
    console.log("Welcome"+" "+name3);
}

greet2("Amar", "Akbar", "Antony");
console.log("--------------------------------");

// create a function that returns the square of a number.
console.log("=====Task 3=============");
function squareOfNum(x: number){
    return x*x;
}

let sq_num = squareOfNum(3);
console.log(sq_num);
console.log("--------------------------------");

// create a function that prints weather the number is even or odd.
console.log("===========Task4===============");
function oddOrEven(x : number){
    if(x%2 == 0){
        console.log(`${x} is an even Number`);
    }else{
        console.log(`${x} is an Odd number`);
    }
}

oddOrEven(5);

console.log("------------------------------");