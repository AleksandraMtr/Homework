// // ЗАДАНИЕ 1
// const numbs = [1, 5, 4, 10, 0, 3];
// for (let i = 0; i < numbs.length; i++) {
//     console.log(numbs[i]);
//     if (numbs[i] == 10) break;
// }

// ЗАДАНИЕ 2
// const array = [1, 5, 4, 10, 0, 3];
// const index = array.indexOf(4);
// console.log(index);

// ЗАДАНИЕ 3
// const numbs = [1, 3, 5, 10, 20];
// let joinedNumbs = numbs.join(" ");
// console.log(joinedNumbs);

// ЗАДАНИЕ 4
// const result = [];
// for (let i = 0; i < 3; i++) {
//     result.push(Array(3).fill(1));
// }
// console.log(result);

// ЗАДАНИЕ 5
// let numbers = [1, 1, 1];

// numbers.push(2, 2, 2);
// console.log(numbers);

// ЗАДАНИЕ 6
// const prod = [9, 8, 7, 'a', 6, 5];

// prod.sort();
// prod.pop();
// console.log(prod);

// ЗАДАНИЕ 7
// const numbers = [9, 8, 7, 6, 5]
// let userGuess = prompt('Угадай число?');

// if (numbers.includes(Number(userGuess))) {
//     alert ("Угадал")
// } else {
//     alert ('Не угадал')
// }

// ЗАДАНИЕ 8
// let abc = 'abcdef';

// let splitAbc = abc.split("");
// console.log(splitAbc);

// splitAbc.reverse();
// console.log(splitAbc);

// let joinedAbc = splitAbc.join("");
// console.log(joinedAbc);

// ЗАДАНИЕ 9
// const nestedArray = [[1, 2, 3],[4, 5, 6]];

// const flatArray = [...nestedArray[0],...nestedArray[1]];
// console.log(flatArray);

// ЗАДАНИЕ 10
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < array.length; i++) {
//     if (array[i + 1]) {
//         console.log(array[i] + array[i + 1]);
//     }
// }

// ЗАДАНИЕ 11
// function square(arr) {
//     return arr.map(item => item ** 2);
// }
// console.log(square([1,2,3]));

// ЗАДАНИЕ 12
// function getLength(arr) {
//     return arr.map(str => str.length);
// }
// console.log(getLength(['ap', 'hello']));

// ЗАДАНИЕ 13
// function numbers(arr) {
//     return arr.filter(item => item <= 0);
// }
// console.log(numbers([3,7,-5,-9,10]));

// ЗАДАНИЕ 14
// function randomNumb() {
//     return Math.floor(Math.random() * 10);
// }
// const arr = [];
// for (let i = 0; i < 10; i++) {
//     arr.push(randomNumb());
// }
// console.log(arr);

// const evenArr = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         evenArr.push(arr[i]);
//     }
// }
// console.log(evenArr);

// ЗАДАНИЕ 15
// function randomNumb() {
//   return Math.floor(Math.random() * 10);
// }
// const arr = [];
// for (let i = 0; i < 6; i++) {
//   arr.push(randomNumb());
// }
// console.log(arr);

// const sum = arr.reduce((total, arr) => total + arr, 0);
// console.log(sum / 2);