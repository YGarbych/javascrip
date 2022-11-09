//- //Є змінна х, якій ви надаєте довільне числове значення.
    //Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//let x = 0;
//if (x !==0 ) {
   // console.log('True');
//}else {
    //console.log('False');
//}

//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//(в першу, другу, третю или четверту частину години).

// let time = 34;
// if (time >=0 && time <=15) {
//     console.log('part first');
// } else if (time >= 16 && time <= 30) {
//     console.log('part second');
// } else if (time >= 31 && time <= 45 ) {
//     console.log('part third');
// }else if (time >= 46 && time <=59 ){
//     console.log('part forth');
// } else {
//     console.log('erroooorrrrr');
// }


//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let day = 23;
// if (day >0 && day<= 10) {
//     console.log('first');
// }else if (day >= 11 && day <=20) {
//     console.log('second');
// }else if (day >=21 && day <=31){
//     console.log('third');
// }else ('erorrrr');
//


//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// let week = 3 ;
//     switch (week) {
//         case 1 :
//             console.log('monday');
//             break;
//         case 2 :
//             console.log('tuesday');
//             break;
//         case 3 :
//             console.log('wednesday');
//             break;
//         case 4 :
//             console.log('thurday');
//             break;
//         case 5 :
//             console.log('friday');
//             break ;
//         default:
//             console.log('eror');
//
//
//     }


//- Користувач вводить або має два числа.//Потрібно знайти та вивести максимальне число з тих двох .//Також потрібно врахувати коли введені рівні числа.

// let x = 3;
// let y = 9;
// if (x>y){
//     console.log(x);
//
// }else if (y>x){
//     console.log(y);
//
// }else if (x===y) {
//     console.log('true');
// }else {
//     console.log('eroor');
//
// }




//- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
      //  за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
let x = +prompt() || 'default';
console.log(x);