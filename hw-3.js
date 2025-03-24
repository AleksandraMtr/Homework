// Задание 1
// let password = "Sasha";
// let password2 = prompt("Введите пароль");
// if (password2 === password) {
//       alert("Пароль введён верно.");
// }
// else {
//     alert("Пароль введён не верно.");
// }


// Задание 2
// let c = -3;
// if (c >= 0 && c <= 10) {
//    console.log("Верно.");
// } else {
//    console.log("Не верно.");
// }

// Задание 3
// let b = 156;
// let e = 77;
// if (b >= 100 || e >= 100) {
//    console.log ("Верно.");
// } else {
//    console.log ("Не верно");
// }

// Задание 4
// let a = '2';
// let b = '3';
// // Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
// alert(+a + +b);

// Задание 5
// let monthNumber = prompt('Введите номер месяца');
// switch (monthNumber) {  
//    case "1":
//    case "2":
//    case "12":
//       alert('Зима');
//       break;
//    case "3":
//    case "4":     
//    case "5":  
//       alert('Весна');
//       break;
//    case "6":
//    case "7":      
//    case "8":      
//       alert('Лето');
//       break;
//    case "9":
//    case "10":    
//    case "11":   
//       alert('Осень');
//       break;   
//    default:
//       alert('ввели что-то не то');
//       break;
// }

// Доп.задание 1
// let fg = prompt('Пожалуйста, введите любое число');
// let result = Number(fg);

// if (isNaN(result)) {
//     alert("Не является числом");
// } else 
//    if (result % 2 === 0) {
//       alert("Четное число");
//    } else {
//       alert("Нечетное число");
//    }
  
// Доп.задание 2
// let clientOS = Number(prompt("Введите 0, если вы пользуетесь iOS иkи 1 - если вы пользуетесь Android"));
// if (clientOS === 0) {
//     alert ("Установите версию приложения для iOS по ссылке");
// } else {
//     alert ("Установите версию приложения для Android по ссылке");
// } 

// Доп.задание 3
let clientOS = prompt("Введите 0, если вы пользуетесь iOS иkи 1 - если вы пользуетесь Android");
let clientDeviceYear = prompt("Какого года выпуска ваш телефон");


if (clientOS === 0) {
    if (clientDeviceYear <= 2015) {
        alert("Установите облегченную версию приложения для iOS по ссылке");
    }
    else {
    alert("Установите версию приложения для iOS по ссылке");
    }
} else 
    if (clientDeviceYear <= 2015) {
    alert("Установите облегченную версию приложения для Android по ссылке");
    }
    else {
    alert("Установите версию приложения для Android по ссылке");
    }



