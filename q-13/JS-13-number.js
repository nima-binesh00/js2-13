/*
Create a sequence of numbers of length 10.
so that each number is created by the sum of the previous two numbers multiplied by 2.
- - The first two numbers must be a random number between 0 and 15.
for example :
num1 = 2
num2 = 3
2, 3, 10, 26,...
*/

//! Answer:

let num1 = Math.floor(Math.random() * 16);

let num2 = Math.floor(Math.random() * 16);
// let num1 = 2;
// let num2 = 3;
let num = [num1, num2];
for (let index = 2; index < 10; index++) {
  num[index] = (num1 + num2) * 2;
  num1 = num2;
  num2 = num[index];
}
console.log(num);
