'use strict';

//alert(1);
// console.log(leftBorderWidth);
// var leftBorderWidth = 1;
// let second = 2;
// const pi = 3.14;
// console.log(leftBorderWidth);
// alert(1);
// let person1 = {
//     name: "Kevin",
//     age: 25
// };
// console.log(person1);
// var age =25;
// console.log(age);

let money;
let time;
money = prompt("Ваш бюджет на месяц?");
console.log(money);
time = prompt("Введите дату в формате YYYY-MM-DD");
let necessaryExpenses1 = prompt("Введите обязательную статью расходов в этом месяце");
let necessaryExpensesAmount2 = prompt("Во сколько обойдется?");
let necessaryExpenses2 = prompt("Введите обязательную статью расходов в этом месяце");
let necessaryExpensesAmount3 = prompt("Во сколько обойдется?");
let appData = {
    budget: money,
    timeData: time,
    expenses: {
    },
    optionalExpenses:{},
    income:[],
    savings: false

};
appData.expenses.necessaryExpenses1=necessaryExpensesAmount2;
appData.expenses.necessaryExpenses2=necessaryExpensesAmount3;

//alert(1);
alert("бюджет на 1 день : " +appData.budget/30);

