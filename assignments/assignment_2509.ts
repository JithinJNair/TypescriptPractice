//* Part 2: Encapsulation
//^ Question 1
//~ Create a BankAccount class with a private balance. Create methods to deposit money, withdraw
//~money, and display the balance. Make sure the balance cannot be accessed directly from outside the class.

// class BankAccount{
//     private balance: number = 0;
    
//     constructor(initialBalance: number){
//         this.balance = initialBalance;
//     }

//     get getBalance(): number{
//         return this.balance;
//     }

//     public depositMoney(depositAmount: number): void{
//         this.balance = this.balance + depositAmount;
//     }

//     public withdrawMoney(debitAmount: number): void{
//         if(debitAmount > this.balance){
//             console.log("Insufficcient Balance");
//         }else if(debitAmount <= this.balance){
//             this.balance = this.balance - debitAmount;
//         }
//     }

// }

// let customer1 = new BankAccount(1000);
// let customer2 = new BankAccount(500);
// console.log(`Customer 1 initial balance:${customer1.getBalance}`);
// console.log(`Customer 2 initial balance:${customer2.getBalance}`);

// customer1.depositMoney(1000);
// customer2.depositMoney(500);

// console.log(`Customer 1 balance after depositing 1000:${customer1.getBalance}`);
// console.log(`Customer 2 balance after depositing 500:${customer2.getBalance}`);

// customer1.withdrawMoney(500);
// customer2.withdrawMoney(500);

// console.log(`Customer 1 balance after withrawing 1000:${customer1.getBalance}`);
// console.log(`Customer 2 balance after withdrawing 500:${customer2.getBalance}`);

// customer2.withdrawMoney(600);

//+ Customer 1 initial balance:1000
//+ Customer 2 initial balance:500
//+ Customer 1 balance after depositing 1000:2000
//+ Customer 2 balance after depositing 500:1000
//+ Customer 1 balance after withrawing 1000:1500
//+ Customer 2 balance after withdrawing 500:500
//+ Insufficcient Balance- //+ Customer 2 tries to withdraw 600 when actual balance is 500.


//^  Question 2
//~ Create a Student class with private marks. Create methods to set the marks and display the marks.
//~ Make sure the marks cannot be directly modified from outside the class.

// class Student{
//     private marks: number;

//     constructor(marks: number){
//         this.marks = marks;
//     }

//     get getMarks(): number{
//         return this.marks;
//     }

//     set setMarks(marks: number){
//         this.marks = marks;
//     }
// }

// let student1 = new Student(80);
// console.log(`Marks:${student1.getMarks}`);

// student1.setMarks = 90;
// console.log(`Marks after updation:${student1.getMarks}`);

//+ Marks:80
//+ Marks after updation:90

//^ Question 3
//~ Create an Employee class with a private salary. Create a method updateSalary() to change the salary
//~ and another method to display the salary.

// class Employee{
//     private salary: number;

//     constructor(salary: number){
//         this.salary = salary;
//     }

//     get getSalary(): number{
//         return this.salary;
//     }

//     set updateSalary(salary: number){
//         this.salary = salary;
//     }
// }

// let emp = new Employee(10000);
// console.log(`Salary:${emp.getSalary}`);

// emp.updateSalary = 100000;
// console.log(`Updated Salary:${emp.getSalary}`);
//+ Salary:10000
//+ Updated Salary:100000

//^ Question 4
//~ Create a MobilePhone class with a private password. Create methods to change the password and
//~ verify the password. The password should not be directly accessible from outside the class.

class MobilePhone{
    
    private password: string;

    constructor(password: string){
        this.password = password;
    }

    public set  changePassword(password: string){
        this.password = password;
    }

    public verifyPassword(password: string){
        if(this.password === password){
            console.log("Password matches")
        }else{
            console.log("Incorrect password");
        }
    }

}

let phone1 = new MobilePhone("12345");
phone1.changePassword = "hello12345";
phone1.verifyPassword("hello12345");
phone1.verifyPassword("hello1234");
// Question 5
// Create a Product class with a private price. Create getter and setter methods to get the product price
// and update the product price.