// ЗАДАЧКА 1
// const js = 'js';
// console.log(js.toUpperCase());



// // ЗАДАЧКА 2
// function filterStringsByPrefix(array, prefix) {
//     const lowerPrefix = prefix.toLowerCase();
    
//     return array.filter(str => 
//         str.toLowerCase().startsWith(lowerPrefix)
//     );
// }
// const words = ["Apple", "Banana", "apple", "Grape", "apricot"];
// const prefix = "ap";

// const filteredWords = filterStringsByPrefix(words, prefix);
// console.log(filteredWords); 



// Задание 3
// const number = (543.28502);
// console.log(Math.floor(number));
// console.log(Math.ceil(number));
// console.log(Math.round(number));



// ЗАДАЧКА 4
// Вариант 1
// function MinMax(array) {
//     return {
//        min: Math.min(...array),
//        max: Math.max(...array) 
//     };
// }

// const number = ['52', '53', '49', '77', '21', '32'];
// console.log(MinMax(number));

// Вариант 2
// const number = ['52', '53', '49', '77', '21', '32'];
// console.log(Math.min(...number));
// console.log(Math.max(...number));



// ЗАДАЧКА 5
// function printRandomNumber() {
//     const randomNumber = Math.floor(Math.random() * 10) + 1;
//     console.log(randomNumber);
//   }
// printRandomNumber();



// ЗАДАЧКА 6
// function getRandomNumbers(num) {
//     return Array.from(
//       { length: Math.floor(num / 2) }, 
//       () => Math.floor(Math.random() * (num + 1))
//     );
//   }
//   console.log(getRandomNumbers(10));



// ЗАДАЧКА 7
// function randomNumber(max,min) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(randomNumber(12,7));



// ЗАДАЧА 8
// const currentDate = new Date();
// console.log(currentDate);


// ЗАДАЧКА 9
// const currentDate = new Date();

// const futureDate = new Date(currentDate);
// futureDate.setDate(futureDate.getDate() + 73);

// console.log(futureDate);



// ЗАДАЧКА 10
// function fullDate(date) {
//    const dayWeeks = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг",
//     "Пятница", "Суббота"];
//     const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
//     "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]; 

//     const day = date.getDate();
//     const month = months[date.getMonth()];
//     const year = date.getFullYear();
//     const dayWeek = dayWeeks[date.getDay()];

//     const hours = String(date.getHours()).padStart(2, '0');
//     const minutes = String(date.getMinutes()).padStart(2, '0');
//     const seconds = String(date.getSeconds()).padStart(2, '0');

//     return `Дата: ${day} ${month} ${year} ${dayWeek}.\nВремя: ${hours}:${minutes}:${seconds}`
// }

// let now = new Date;
// console.log(fullDate(now));