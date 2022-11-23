// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

//    const sguare = (a,b) => a * b ;
//    console.log(sguare(23,32));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// const square = (r) => Math.Pi * Math.pow(r,4);
// console.log(square(5));
//

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// const x = (r ,h) => Math.PI * Math.pow(r,6);
// console.log(x(3, 6));


// - створити функцію яка приймає масив та виводить кожен його елемент

// function arrayPrinter(arr) {
//      for (const item of arr) {
//          console.log(item);
//
//      }
//
//  }
//  arrayPrinter([34,56,76,87,9765,'box']);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function par(text) {
//
//     document.write(`<p>${text}</p>`);
// }
//     par('good morning');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function foo(text) {
//     document.write(`
// // <ul>
// // <li>${text}</li>
//   <li>${text}</li>\
//   <li>${text}</li>
// // </ul>`);
//
// }
// foo('nice too meet you');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function foo(text,num) {
//     document.write(`<ul>`)
//
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${text}</li>`);
//
//     }
//
//     document.write(`<ul>`)
// }
//
// foo('you look nice', 5);
//
//

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//  let array = [2,true,'hello',false];
// const foo = function (arr) {
//     document.write(`<ul>`)
//     for (const arrElement of arr) {
//         document.write(`<li>${arrElement}</li>`)
//
//     }
//     document.write(`<ul>`)
//
// }
// foo(array);
//

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//  const array = [
//     {
//         id: true,
//         name : 'natali',
//         age: 32
//
//     },
//
//     {
//         id: false,
//         name: 'igor',
//         age: 45
//
//     }
// ]
//   const users = function (arr){
//       for (const user of arr) {
//           document.write(`<div>${user.name}--${user.name}--${user.age}</div>`)
//
//       }
//   }
//
//   users(array);

// - створити функцію яка повертає найменьше число з масиву

// let arr = [1,3,5,6,77,8,89];
// function num(array) {
//     let min = array[0];
//     for (const minElement of array) {
//        if (minElement<min){
//            min=minElement
//        }
//
//     }
// return min;
// }
//
// let num1 = num(arr);
// console.log(num1);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let arr = [3,5,7];
// function foo(array) {
//     let sum = 0
//     for (const item of array) {
//         sum += item;
//
//     }
//     return sum;
//
// }
//
// console.log(foo(arr));
//
