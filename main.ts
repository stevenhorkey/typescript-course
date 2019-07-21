export {};

let message = "Hello World";
console.log(message);

let x = 10;
const y = 20;

let sum;
const title = "Codevolution";

let isBeginner: boolean = true;

let total: number = 0;

let name: string = "Steven";

let sentence: string = `My name is ${name}
I am a beginner in Typescript`;

console.log(sentence);

let n: null = null;
let u: undefined = undefined;
// THese are subtypes


let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

let person1: [string, number] = ["Chris", 22];

enum Color {Red, Green, Blue};

let c: Color = Color.Green;
console.log(c);

let randomValue: any = 10;
randomValue = true;
randomValue = "Vishwas";

let myVariable: any = "test";
(myVariable as string).toUpperCase();

let a;
a = 10;
a = true;

let b = 20;

let multType: number | boolean;
multType = 20;
multType = true;

let anyType: any;
anyType = 20;
anyType = 20;

function add(num1: number, num2?: number): number {
    // return num1 + num2;
    if (num2)
        return num1 + num2;
    else
        return num1;
}
add(5, 10);

add(5);

function subtract(num1: number, num2: number = 10): number {
    // return num1 + num2;
    if (num2)
        return num1 - num2;
    else
        return num1;
}

// function fullName(person: {firstName: string, lastName: string}) {
//     console.log(`${person.firstName} ${person.lastName}`);
// }

let p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
}

interface Person {
    firstName: string;
    lastName?: string;
}

function fullName(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`);
}

fullName(p);

class Employee {
    // public employeeName: string; available outside
    // private employeeName: string; available only in this class
    protected employeeName: string;
    // available in this class, and extended classes

    constructor(name: string) {
        this.employeeName = name;
    }

    greet() {
        console.log(`Good Morning ${this.employeeName}`);
    }
}
// console.log(emp1.employeeName);
let emp1 = new Employee("Steven");

emp1.greet();

class  Manager extends Employee {
    constructor(managerName: string) {
        super(managerName);
    }

    delegateWork() {
        console.log("Manager delegating tasks");
    }
}

let m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
