"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let myName = "John Doe";
console.log(`Hello, ${myName}! Welcome to TypeScript.`);
let age = 30;
console.log(`You are ${age} years old.`);
let isStudent = false;
console.log(`Are you a student? ${isStudent ? "Yes" : "No"}.`);
let works = ["Developer", "Designer", "Manager"];
console.log(`Your professions are: ${works.join(", ")}.`);
let salary = [50000, 60000, 70000];
console.log(`Your salary range is: $${Math.min(...salary)} - $${Math.max(...salary)}.`);
let person = ['veera', 26];
console.log(`Name: ${person[0]}, Age: ${person[1]}.`);
var companies;
(function (companies) {
    companies[companies["Google"] = 0] = "Google";
    companies[companies["Microsoft"] = 1] = "Microsoft";
    companies[companies["Apple"] = 2] = "Apple";
})(companies || (companies = {}));
console.log(`You have worked at: ${companies[0]}, ${companies[1]}, ${companies[2]}.`);
let presentCompany = companies.Google;
console.log(`Your current company is: ${companies[presentCompany]}.`);
//# sourceMappingURL=practice.js.map