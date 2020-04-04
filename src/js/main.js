'use strict';
//Получить кнопку "Начать расчет" через id
let startBtn = document.getElementById('start');

/*Получить все блоки в правой части программы через классы 
//(которые имеют класс название-value,
// начиная с <div class="budget-value"></div>
// и заканчивая <div class="yearsavings-value"></div>)*/
let budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0];


/*Получить поля(input)
 c обязательными расходами через класс. (class=”expenses-item”)*/
let expensesItem = document.getElementsByClassName('expenses-item');

//Получить кнопки “Утвердить” и “Рассчитать” через Tag, 
//каждую в своей переменной. 
let expenseBtns = document.body.getElementsByTagName('button');
console.log(expenseBtns);

let expensesBtn = expenseBtns[0];
let optionalExpensesBtn = expenseBtns[1];
let countBtn = expenseBtns[2];
//let startBtn = expenseBtns[3];
/*Получить поля для ввода необязательных расходов
 (optionalexpenses-item) при помощи querySelectorAll*/
let optionalExpensesItem = document.body.querySelectorAll('.optionalexpenses-item');

/*Получить оставшиеся поля через querySelector 
(статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)*/

let incomeItem = document.body.querySelector('.choose-income'),
    checkSavings = document.body.querySelector('#savings'),
    sumValue = document.body.querySelector('.choose-sum'),
    procentValue = document.body.querySelector('.choose-percent'),
    yearValue = document.body.querySelector('.year-value'),
    monthValue = document.body.querySelector('.month-value'),
    dayValue = document.body.querySelector('.day-value');

let money;
let time;

startBtn.addEventListener('click', function () {
    time = prompt("Введите дату в формате YYYY-MM-DD");

    money = +prompt("Ваш бюджет на месяц?");
    //console.log(money);

    while (isNaN(money) || money == "" || money == null) {
        money = prompt("Ваш бюджет?");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});



expensesBtn.addEventListener('click', function () {
    let necessaryExpenses;
    let necessaryExpensesAmount;
    let sum = 0;
    for (let i = 0; i < expensesItem.length; i++) {

        necessaryExpenses = expensesItem[i].value;
        necessaryExpensesAmount = expensesItem[++i].value;



        if ( typeof (necessaryExpenses) != null && typeof (necessaryExpensesAmount) != null 
        && necessaryExpenses != "" && necessaryExpensesAmount != "" 
        && necessaryExpenses.length < 50) {
            console.log('done');
            appData.expenses[necessaryExpenses] = necessaryExpensesAmount;
            sum += +necessaryExpensesAmount;
        } else {
            i = i - 1;
        }


    }
    expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function() {
    
    console.log(optionalExpensesItem.length);
    for (let i = 0; i < optionalExpensesItem.length; i++) {
     
        appData.optionalExpenses[i] = optionalExpensesItem[i].value;
        optionalExpensesValue.textContent += appData.optionalExpenses[i]+" ";
    }

   
});

countBtn.addEventListener('click', function () {

    if(appData.budget != undefined){
    appData.monerPerDay = (appData.budget / 30).toFixed(1);
     dayBudgetValue.textContent = appData.monerPerDay;

     if (appData.monerPerDay <= 100) {
        levelValue.textContent = 'Min budget';

    } else if (appData.monerPerDay > 100 && appData.monerPerDay <= 200) {
        levelValue.textContent = 'Middle budget';
    } else if (appData.monerPerDay > 200) {
        levelValue.textContent = 'High budget';
    } else {
        levelValue.textContent = "smth wrong";
    }
    }else{
        dayBudgetValue.textContent = "smth wrong";
    }
});


incomeItem.addEventListener('input', function(){
let items = incomeItem.value;
appData.income = items.split(',');
incomeValue.textContent = appData.income;

});

checkSavings.addEventListener('click', function() {
if(appData.savings == true){
appData.savings = false;
}else{
appData.savings = true;
}
});
sumValue.addEventListener('input', function (){
if(appData.savings == true){
    let sum = +sumValue.value;
    let percent = +procentValue.value;
    appData.monthIncome = sum/ 100 / 12 * percent;
    appData.yearIncome = sum/ 100 * percent;
    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
}
});
procentValue.addEventListener('input', function (){
    if(appData.savings == true){
        let sum = +sumValue.value;
    let percent = +procentValue.value;
    appData.monthIncome = sum/ 100 / 12 * percent;
    appData.yearIncome = sum/ 100 * percent;
    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
    });

let appData = {
    budget: money,
    timeData: time,
    expenses: {},

    optionalExpenses: {},
    income: [],
    savings: false
};
expenseBtns[0].style.display = 'none';
expenseBtns[1].style.display = 'none';
expenseBtns[2].style.display = 'none';
expenseBtns[3].style.display = 'none';