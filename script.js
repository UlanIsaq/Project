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
////
alert(1);
let money;
let time;
money = +prompt("Ваш бюджет на месяц?");
console.log(money);
time = prompt("Введите дату в формате YYYY-MM-DD");
let necessaryExpenses;
let necessaryExpensesAmount;
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false

};

// for (let i = 0; i < 2; i++) {
//     necessaryExpenses = prompt("Введите обязательную статью расходов в этом месяце");
//     necessaryExpensesAmount = prompt("Во сколько обойдется?");
//     if (typeof (necessaryExpenses) === 'string' && typeof (necessaryExpenses) != null && typeof (necessaryExpensesAmount) != null && necessaryExpenses != "" && necessaryExpensesAmount != "" && necessaryExpenses.length < 50 && typeof (necessaryExpensesAmount) === 'number') {
//         appData.expenses[necessaryExpenses] = necessaryExpensesAmount;
//         console.log('done');
//     } else {
//         console.log("Its not valid input info");
//     }
// }
let k=0;
while(k<2){
    necessaryExpenses = prompt("Введите обязательную статью расходов в этом месяце");
    necessaryExpensesAmount = prompt("Во сколько обойдется?");
    if (typeof (necessaryExpenses) === 'string' && typeof (necessaryExpenses) != null && typeof (necessaryExpensesAmount) != null && necessaryExpenses != "" && necessaryExpensesAmount != "" && necessaryExpenses.length < 50 && typeof (necessaryExpensesAmount) === 'number') {
        appData.expenses[necessaryExpenses] = necessaryExpensesAmount;
        console.log('done');
    } else {
        console.log("Its not valid input info");
    }
    k++;
}


appData.monerPerDay = appData.budget / 30;
alert("бюджет на 1 день : " + appData.monerPerDay);

if(necessaryExpensesAmount <= 100){
    console.log('Min budget');

}else if(necessaryExpensesAmount > 100 && necessaryExpensesAmount <=200){
    console.log('Middle budget');
    }else if(necessaryExpensesAmount > 200){
        console.log('High budget');
    }else {
        console.log("smth wrong");
    }

