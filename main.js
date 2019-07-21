"use strict";
exports.__esModule = true;
var message = "Hello World";
console.log(message);
var x = 10;
var y = 20;
var sum;
var title = "Codevolution";
var isBeginner = true;
var total = 0;
var name = "Steven";
var sentence = "My name is " + name + "\nI am a beginner in Typescript";
console.log(sentence);
var n = null;
var u = undefined;
// THese are subtypes
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ["Chris", 22];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
var randomValue = 10;
randomValue = true;
randomValue = "Vishwas";
var myVariable = "test";
myVariable.toUpperCase();
var a;
a = 10;
a = true;
var b = 20;
var multType;
multType = 20;
multType = true;
var anyType;
anyType = 20;
anyType = 20;
function add(num1, num2) {
    // return num1 + num2;
    if (num2)
        return num1 + num2;
    else
        return num1;
}
add(5, 10);
add(5);
function subtract(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    // return num1 + num2;
    if (num2)
        return num1 - num2;
    else
        return num1;
}
// function fullName(person: {firstName: string, lastName: string}) {
//     console.log(`${person.firstName} ${person.lastName}`);
// }
var p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
fullName(p);
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee("Steven");
emp1.greet();
