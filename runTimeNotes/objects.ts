//* Objects
//& It is a real world entity which stores elements in the form of key value pairs.
let student = {
    name : "Jithin",
    age  : 23,
    course: "Playwright"
}
// console.log(student);
// console.log(student.name);

// student.name = "Vidhya";
// console.log(student);

//student.city = "Bangalore";//+ This is possible in Javascript,but type script irt will throw error.
//+ Typescripts inferred the type of student and understand that it has obly two properties.
//+ typescript is imposing type safety here.





//* Object Methods
//~ Object.keys(ObjectName)
// console.log(Object.keys(student));//+ [ 'name', 'age', 'course' ]

//~ Object.values(ObjectName)
// console.log(Object.values(student));//+ [ 'Vidhya', 23, 'Playwright' ]

//~ Onject.entries(ObjectName)  - To get properties as key-value pair
// console.log(Object.entries(student));//+ [ [ 'name', 'Vidhya' ], [ 'age', 23 ], [ 'course', 'Playwright' ] ]

//~ Object.assign- copies properties from one object to another
let college = {
    collegeName : "ABC",
    place :"Bangalore"
}

// console.log(student);
// console.log(college);
// Object.assign(college, student);
// console.log("After assignment");
// console.log(student);
// console.log(college);

//~ Object.freeze(objectname)- To freeze the object completely 
//& Once we freezed the object, we cannot modify the existing properties and 
//& we cannot add the new property and 
//& we cannot delete the properties.

Object.freeze(college);
// college.place = "Kottayam";//+ TypeError: Cannot assign to read only property 'place' of object '#<Object>'
// console.log(college);


//~ Object.isFozen(objectname)- to check if the object is freezed or not.
console.log(Object.isFrozen(college));

//~ Object.seal(objectname)- 
//& We can modify the existing object and properties.
//& we cannot add new properties.
//& We can delete the property only if the property is optional.

// let employee: {
//     name : string,
//     age? : number
// }={
//     name : "Jithin",
//     age : 35
// }

// console.log(employee);

// Object.seal(employee);
// employee.age =36;

// console.log(employee);


//~ Object.isSealed(objectname)
// // console.log(Object.isSealed(employee));

// //^ Destructuring---to be learned properly
// //& To extract value from object and directly store into variables.

// //~ Extract with destructuring
// let student1 = {
//     sname: "Rahul",
//     sage: 25,
//     scourse: "BCA"
// };

// //~ Extract without destrycturing
// let sname = student.name;
// let sage = student.age;
// let scourse = student.course;

// console.log(sname);
// console.log(sage);
// console.log(scourse);

// //~ with destructuring
// let { sname, sage, scourse } = student;

// console.log(name);
// console.log(age);
// console.log(course);


