import isEven from "is-even";

const studentName: string = "John";
const age: number = 16;
const height: number = 1.82;
const isNice: boolean | null = null;

console.log(`${studentName} is ${age} years old and ${height}m tall. Is he nice? ${isNice}`);
console.log(isEven(2));
