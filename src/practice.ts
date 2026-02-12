let myName: string = "John Doe";
console.log(`Hello, ${myName}! Welcome to TypeScript.`);

let age: number = 30;
console.log(`You are ${age} years old.`);   

let isStudent: boolean = false;
console.log(`Are you a student? ${isStudent ? "Yes" : "No"}.`);

let works : string[] = ["Developer", "Designer", "Manager"];
console.log(`Your professions are: ${works.join(", ")}.`);

let salary : number[] = [50000, 60000, 70000];
console.log(`Your salary range is: $${Math.min(...salary)} - $${Math.max(...salary)}.`);

let person:[string,number] = ['veera',26];
console.log(`Name: ${person[0]}, Age: ${person[1]}.`);

const companies = {
    Google: "Google",
    Microsoft: "Microsoft",
    Apple: "Apple"
} as const;

type CompanyType = typeof companies[keyof typeof companies];
console.log(`You have worked at: ${companies.Google}, ${companies.Microsoft}, ${companies.Apple}.`);
let presentCompany: CompanyType = companies.Google;
console.log(`Your current company is: ${presentCompany}.`);
// working on git push to branch and pull request to main branch.
let isEmployed: boolean = true;
console.log(`Are you currently employed? ${isEmployed ? "Yes" : "No"}.`);
let hobbies: string[] = ["Reading", "Traveling", "Cooking"];
console.log(`Your hobbies are: ${hobbies.join(", ")}.`);   
let favoriteNumbers: number[] = [7, 14, 21];
console.log(`Your favorite numbers are: ${favoriteNumbers.join(", ")}.`);    