// Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let array = ['java','hello','ua',101,[3,7,9],[789,987],'objects',{skills:'js'},'users','html','react'];
console.log(array);
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);
console.log(array[7]);
console.log(array[8]);
console.log(array[9]);
console.log(array[10]);

//Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

//const book1={
   // title: 'title',
    //pageCount: 112,
    //genre:'genre'

//}
//const book2={
   // title: 'title',
   // pageCount: 112,
   // genre:'genre'

//}
//const book3= {
   // title: 'title',
   // pageCount: 112,
    //genre: 'genre'
//  }
//console.log(book1,book2,book3);
//Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age

const booc1 = {
    title: 'Hary Poter',
    pageCount: 400,
    genre:comedy,
    authors:[
        {name: 'Yuliia',
            age:21}
    ]
}

const booc2 = {
    title: 'Harry Poter',
    pageCount: 900,
    genre:comedy,
    authors: [
        {name: 'yulia',
            age: 21}
    ]
}

const booc3 = {
    title: 'Hary Poter',
    pageCount: 600,
    genre: comedy,
    authors: [
        {name:'Yuliia',
            age: 21}
    ]
}
console.log(booc1, booc2, booc3);




// Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let app = [
    {
        name: 'Yuliia',
        username: 'Garbych',
        password: 2001
    },

    {
        name: 'Yuliia',
        username: 'Garbych',
        password: 2002
    },

    {
        name: 'Yuliia',
        username: 'Garbych',
        password: 2003
    },

    {
        name: 'Yuliia',
        username: 'Garbych',
        password: 2004
    },

    {
        name: 'Yuliia',
        username: 'Garbych',
        password: 2005
    },
    {
        name: 'Yuliia',
        username: 'Garbych',
        password: 2006
    },
    {
        name: 'Yuliia',
        username: 'Garbych',
        password: 2007
    },
    {
        name: 'Yuliia',
        username: 'Garbych',
        password: 2008
    },
    {
        name: 'Yuliia',
        username: 'Garbych',
        password: 2009
    }
]

console.log(app[0].password);
console.append(app[1] ["password"]);
console.append(app[2] ["password"]);
console.append(app[3] ["password"]);
console.append(app[4] ["password"]);
console.append(app[5] ["password"]);
console.append(app[6] ["password"]);
console.append(app[7] ["password"]);
console.append(app[8] ["password"]);
console.append(app[9] ["password"]);

