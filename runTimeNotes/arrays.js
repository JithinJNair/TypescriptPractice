"use strict";
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
//^ Alternative Array Syntax- Differrent ways to declare Array.
// let numbers1: number[] = [10, 20, 30];
// let numbers2: Array<number> = [10, 20, 30];
//^ Type Inference with Arrays
// let marks = [80, 90, 75, 95];
//+ TypeScript automatically infers:
//+ marks → number[]
//! marks.push("100"); // Error
//! Because marks is inferred as number[]
//^ Accessing Array Elements
// let fruits: string[] = [
//     "Apple",
//     "Mango",
//     "Grapes",
//     "Guava"
// ];
// console.log(fruits);//+ [ 'Apple', 'Mango', 'Grapes', 'Guava' ]
// console.log(fruits[0]); //+ Apple
// console.log(fruits[2]); //+ Grapes
//^ Modify Array Element
// fruits[0] = "Jackfruit";
// console.log(fruits);//+ [ 'Jackfruit', 'Mango', 'Grapes', 'Guava' ]
//^ Add element to Array
// fruits.push("Chikku");
// console.log(fruits); //+ [ 'Jackfruit', 'Mango', 'Grapes', 'Guava', 'Chikku' ]
//^ Removing Elements
// fruits.pop();
// console.log(fruits);//+ [ 'Jackfruit', 'Mango', 'Grapes', 'Guava' ]
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
//^ 3. for...in with Array
//& for...in gives the indexes.
// for (let index in marks) {
//     console.log(index);
// }
//^ Readonly Array
//& readonly prevents modification of the array through this variable
// let numbers3: readonly number[] = [10, 20, 30];
// numbers3.push(40);
//! Error - readonly array cannot be modified.
// numbers3[0] = 100;
//! Error - readonly array cannot be modified.
//^ Multidimensional Array
//& Array insde another array.
// let numbers: number[][] = [[1,3,5],[2,4,6]];
// console.log(numbers);
//^ Array Methods
let nums = [10, 20, 30, 40, 50];
nums.push(60); //+ Add at end -[10, 20, 30, 40, 50,60]
console.log("Push:" + nums);
nums.pop(); //+ Remove from end-[10, 20, 30, 40, 50]
console.log("Pop:" + nums);
nums.unshift(5); //+ Add at beginning - [5,10, 20, 30, 40, 50]
console.log("unshift:" + nums);
nums.shift(); //+ Remove from beginning- [10, 20, 30, 40, 50]
console.log("shift:" + nums);
//~ slice
// let numsSlice = nums.slice(1,3); 
// console.log(nums); //+ [ 10, 20, 30, 40, 50 ]
// console.log(numsSlice); //+ [ 20, 30 ]
//& start index is included.
//& end index is excluded.
//& Original array is NOT modified.
//~splice()
// let arr2: number[] = [10, 20, 30, 40, 50];
// arr2.splice(1, 2);
// console.log(arr2);
//+ [10, 40, 50]
//& splice() modifies the original array.
//& First argument → starting index
//& Second argument → number of elements to remove
//^ TUPLE
//& A tuple is a special type of array where:
//& 1. The number of elements is fixed.
//& 2. The type of each element is fixed based on its position.
//& Syntax:
//& let variableName: [type1, type2, type3] = [value1, value2, value3];
//^ 1. Basic Tuple
// let student: [string, number, string] = [
//     "Jithin",
//     35,
//     "Bangalore"
// ];
// console.log(student[0]); //+ Jithin
// console.log(student[1]); //+ 35
// console.log(student[2]); //+ Bangalore
let x = ["abc", 40, "efg"];
console.log(x);
