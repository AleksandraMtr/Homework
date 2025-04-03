// ЗАДАНИЕ 1
// 1 вар
// function min(a, b) {
// 	if (a < b) {
// 		return a;
// } else {
// 	return b;
//     } 
// }

// 2 вар
// const min = (a,b) => (a < b) ? a : b;
    
// console.log(min(4, 4));
// console.log(min(9, 3));


// ЗАДАНИЕ 2
// 1 вар
// function isEven(number) {
//     if (number % 2 === 0) {
//         return "Число четное";
//     }
// 	else {
//         return "Число не четное"
//     }
// }
 
// 2 вар
// const isEven = (n) => (n % 2 === 0) ? "Число четное" : "Число не четное";
    
// console.log(isEven(4));
// console.log(isEven(5));



// ЗАДАНИЕ 3
// const printSquare = (num) => 
//     console.log (num ** 2);

// printSquare (23);

// let square = (n) => n ** 2;

// console.log(square(5));



// ЗАДАНИЕ 4
// function age() {
//     let age = prompt('Сколько вам лет?');

//     if (age < 0) {
//         alert ('Вы ввели неправильное значение');
//         }
//         else 
//         if ((age >= 0) && (age <= 12)) {
//             alert ('Привет, друг!')
//         }
//         else 
//         if (age >= 13) {
//             alert ('Добро пожаловать!')
//         }
//         else {
//             alert ('Вы ввели что-то не то')
//         }
// }   

// age ();

// ЗАДАНИЕ 5
// const calc = (a, b) => (isNaN(a) || isNaN(b)) ? 'Одно или оба значения не являются числом' : a * b;
    
// console.log(calc(4, 7));
    
// ЗАДАНИЕ 6
// function getMumber() {
//     let number = prompt('Введите любое число')
    
//     if (isNaN(number)) {
//         return "Переданный параметр не является числом";
//     } else {
//         return `${number} в кубе равняется ${number ** 3}`;
//     }
// } 

// console.log(getMumber())

// ЗАДАНИЕ 7
function getArea() {
        return Math.PI * this.radius ** 2;
    }

function getPerimeter() {
        return 2 * Math.PI * this.radius;
    }

const circle1 = {
    radius: 10,
    methodgetArea: getArea,
    methodgetPerimeter: getPerimeter,
}

const circle2 = {
    radius: 20,
    methodgetArea: getArea,
    methodgetPerimeter: getPerimeter,
}

console.log(circle1.methodgetArea());
console.log(circle2.methodgetArea());

