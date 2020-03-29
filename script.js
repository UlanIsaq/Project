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
//alert(1);
let money;
let time;

function start () {
    money = +prompt("Ваш бюджет на месяц?");
   //console.log(money);
    time = prompt("Введите дату в формате YYYY-MM-DD");
    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц?");
    }
}

start();

let necessaryExpenses;
let necessaryExpensesAmount;
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true

};
//
function chooseExpenses() {
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

    
    if (typeof (necessaryExpenses) === 'string' && typeof (necessaryExpenses) != null && 
    typeof (necessaryExpensesAmount) != null && necessaryExpenses != "" && 
    necessaryExpensesAmount != "" && necessaryExpenses.length < 50) {
        appData.expenses[necessaryExpenses] = necessaryExpensesAmount;
        console.log('done');
    } else {
        k=k-1;
    }
    k++;
}
}
chooseExpenses();

function detectDayBudget(){
    appData.monerPerDay = (appData.budget / 30).toFixed(1);
    alert("бюджет на 1 день : " + appData.monerPerDay);
}
detectDayBudget();


function detectLevel(){
if(necessaryExpensesAmount <= 100){
    console.log('Min budget');

}else if(necessaryExpensesAmount > 100 && necessaryExpensesAmount <=200){
    console.log('Middle budget');
    }else if(necessaryExpensesAmount > 200){
        console.log('High budget');
    }else {
        console.log("smth wrong");
    }
}
detectLevel();

function checkSavings(){
    if(appData.savings == true){
        let save = +prompt("Какова сумма накоплений?"),
        percent = +prompt("Под каклй процент?");

        appData.monthIncome = save/100/12*percent;

        alert("Monthly income from saving deposite: "+appData.monthIncome);
    }
}
checkSavings();
let optionalEx;
function chooseOptExpenses(){
 for (let index = 0; index < 3; index++) {
    optionalEx = prompt("Статья необязательных расходов?");

    if(optionalEx !=null && optionalEx != "" && typeof(optionalEx) === 'string'){
    appData.optionalExpenses[index+1]=optionalEx;
    } else{
        index=index-1;
    }
 } 
}
chooseOptExpenses();