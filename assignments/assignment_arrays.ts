//* TypeScript Assignments – Arrays
//* Array Declaration
//^ 1. Create an array called marks that stores 5 numbers. Print all the elements.

// let marks: number[] = [60,70,80,90,10];
// console.log(`Marks array ${marks}`);//+ Marks array 60,70,80,90,10
// console.log(marks)//+ [ 60, 70, 80, 90, 10 ]

//^  2. Create an array called names that stores 5 strings. Print the first and last element.

// let names: string[] = ["Sachin","Sehwag","Ganguly","Dravid","Laxman"];
// console.log(names[0]);//+ Sachin
// console.log(names[names.length-1]);//+ Laxman

//^ 3. Create an array of boolean values containing true, false, true, true.

// let boolVals: boolean[] = [true, false, true, true];
// console.log(boolVals);//+ [ true, false, true, true ]

//^ 4. Create a TypeScript array to store the names of 5 cities and print each city using a loop.

// //~for loop
// let cities: string[] = ["Delhi","Mumbai","Kolkata","Chennai","Bangalore"];
// for(let i=0;i< cities.length; i++){
//     console.log(cities[i]);
// }

// //~for ...Of
// for(let city of cities){
//     console.log(city);
// }

// //~ for ..Each
// cities.forEach((city) => {
//     console.log(city)
// });
// //+ Delhi
// //+ Mumbai
// //+ Kolkata
// //+ Chennai
// //+ Bangalore

//^ 5. Create an array called prices that can store only numbers. Add 5 prices and calculate their total.
// let prices: number[] = [];
// prices[0] = 100;
// prices[1] = 200;
// prices[2] = 300;
// prices[3] = 400;
// prices[4] = 500;

// let sum: number = 0;
// for(let i=0;i<prices.length;i++){
//     sum = sum+prices[i];
// }
// console.log(`Total price:${sum}`);//+ Total price:1500

//* Readonly Arrays
//^ 6. Create a readonly array of 5 student names and print the names.

// let students: readonly string[] = ["Sachin","Sehwag","Ganguly","Dravid","Laxman"];
// students.forEach((student) => {
//     console.log(student);
// })

//+ Sachin
//+ Sehwag
//+ Ganguly
//+ Dravid
//+ Laxman

//^ 7. Create a ReadonlyArray containing 5 numbers.

// let nums: readonly number[] = [1,2,3,4,5];
// console.log(nums);
//+ [1,2,3,4,5]

//^ 8. Try to change the first element of a readonly array. Observe the TypeScript error.

//nums[0] = 100;//+ Index signature in type 'readonly number[]' only permits reading

//^  9. Try to use push() on a readonly array. Explain why TypeScript doesn't allow it.

// nums.push(100);//+ Property 'push' does not exist on type 'readonly number[]'

//^  10. Create a readonly array of marks and calculate the highest mark without modifying the array.

// let marks: readonly number[] = [50,60,70,80,90];
// let largest: number = marks[0];
// let secondLargest: number = 0;
// for(let mark of marks){
//     if(mark > largest){
//         secondLargest = largest;
//         largest = mark;
//     }else if((mark !== largest)&&(mark > secondLargest)){
//         secondLargest = mark;
//     }
// }
// console.log(`Highest:${largest}`);//+ Highest: 90


//* Multidimensional Arrays
//^ 11. Create a 2D array containing the marks of 3 students in 3 subjects.

// let marks: number[][] = [[80,90,100],[85,95,95],[90,100,90]];
// console.log(marks);//+ [ [ 80, 90, 100 ], [ 85, 95, 95 ], [ 90, 100, 90 ] ]

//^ 12. Create a 2D array representing a 3 × 3 matrix and print all elements.
// for(let i=0; i<marks.length; i++){
//     let row = "";
//     for(let j=0; j< marks[i].length; j++){
//         row = row+marks[i][j]+" "
//     }
//     console.log(row.trim());
// }
// //+ 80 90 100
// //+ 85 95 95
// //+ 90 100 90

//! 13. Create a 2D array representing a classroom seating arrangement and print each seat.


//^ 14. Find the sum of all numbers in a 2D array.
// let marks: number[][] = [[10,20,30],[30,20,10],[20,10,30]];
// let sum = 0;
// for(let student of marks){
//     for(let mark of student){
//         sum = sum+mark;
//     }
// }
// console.log(`Sum:${sum}`);//+ Sum:180

//^ 15. Find and print the largest number from a 2D array.
// let studentMarks: number[][] = [[10,20,30],[50,20,40],[20,10,30]];
// let largest: number = studentMarks[0][0];
// let secondLargest = 0;

// for(let student of studentMarks){
//     for(let mark of student){
//         if(mark > largest){
//             secondLargest = largest;
//             largest = mark;
//         }else if(mark !== largest && mark > secondLargest){
//             secondLargest = mark;
//         }
//     }
// }

// console.log(`Highest Mark:${largest}`);
// console.log(`Second Highest Mark:${secondLargest}`);

// //+ Highest Mark:50
// //+ Second Highest Mark:40

//* push()
//^ 16. Create an array of 3 fruits and add one more fruit using push().

// 17. Add 3 numbers to an empty array using push().
// 18. Create an array of student names and add two new students using push().
// 19. Add multiple products to an existing product array using a single push().
// 20. Create an array of tasks. Add a new task using push() and print the updated array.
// pop()
// 21. Create an array of 5 numbers and remove the last element using pop().
// 22. Create an array of fruits and remove the last fruit.
// 23. Store 5 student names and remove the last student.
// 24. Store 5 products and use pop() to remove the last product. Print the removed product.
// 25. Create an array of browser tabs. Remove the last opened tab using pop().
// shift()
// 26. Create an array of 5 numbers and remove the first number.
// 27. Create an array of fruits and remove the first fruit using shift().
// 28. Create an array of student names and remove the first student.
// 29. Create a queue of 5 customers and remove the first customer using shift().
// 30. Create an array of tasks and remove the first task from the list using shift().
// unshift()
// 31. Create an array of 3 fruits and add a new fruit at the beginning.
// 32. Add two new student names to the beginning of an existing array.
// 33. Create an array of numbers and add 100 as the first element.
// 34. Create a list of tasks and add a high-priority task at the beginning.
// 35. Create a list of messages and add a new message at the beginning of the array.
// slice()
// 36. Create an array of 5 numbers and extract the first 3 elements using slice().
// 37. Create an array of 6 fruits and extract elements from index 2 to index 5.
// 38. Create an array of student names and create a new array containing the first 3 students without
// modifying the original array.
// 39. Given [10, 20, 30, 40, 50, 60], extract [30, 40, 50] using slice().
// 40. Create an array of 10 numbers and create a new array containing the last 4 elements using slice().
// splice()
// 41. Create an array of 5 numbers and remove the third element using splice().
// 42. Create an array of fruits and replace one fruit with another using splice().
// 43. Create an array of student names and insert a new student at index 2.
// 44. Given [10, 20, 30, 40, 50], remove 30 and 40 using splice().
// 45. Create a product list and replace two existing products with two new products using splice().
// map()
// 46. Given [1, 2, 3, 4, 5], create a new array containing double of every number.
// 47. Given [10, 20, 30, 40], create a new array containing each number increased by 5.
// 48. Given an array of names, create a new array containing the names in uppercase.
// 49. Given an array of prices, create a new array where each price has 18% GST added
// 50. Given an array of student marks, create a new array containing "Pass" or "Fail" based on each mark.
// filter()
// 51. Given [10, 15, 20, 25, 30], create a new array containing only even numbers.
// 52. Given an array of ages, create a new array containing only people aged 18 or above.
// 53. Given an array of marks, filter students who scored more than 60.
// 54. Given an array of product prices, filter products costing more than n1,000.
// 55. Given an array of names, filter names whose length is greater than 5 characters.
// reduce()
// 56. Find the sum of [10, 20, 30, 40, 50] using reduce().
// 57. Find the product of [1, 2, 3, 4, 5] using reduce().
// 58. Find the total price of an array containing product prices.
// 59. Find the highest number from an array using reduce().
// 60. Given an array of marks, calculate the average mark using reduce().
// find()
// 61. Given [10, 20, 30, 40, 50], find the first number greater than 25.
// 62. Given an array of student names, find the first name starting with "A".
// 63. Given an array of marks, find the first mark greater than 80.
// 64. Given an array of products with id and name, find the product whose id is 103.
// 65. Given an array of employees with name and salary, find the first employee whose salary is greater
// than n50,000.
// every()
// 66. Check whether every number in [2, 4, 6, 8] is even.
// 67. Check whether every number in an array is greater than 10.
// 68. Check whether every student has scored at least 35.
// 69. Check whether every product price is greater than n100.
// 70. Given an array of employees, check whether every employee has an age of 18 or above.
// some()
// 71. Check whether an array contains at least one even number.
// 72. Check whether an array contains at least one number greater than 100.
// 73. Check whether at least one student scored more than 90.
// 74. Check whether at least one product costs more than n50,000
// 75. Given an array of employees, check whether at least one employee has the role "Manager".