'use strict';
//Получить кнопку "Начать расчет" через id
let start = document.body.querySelector('.start');
console.log(start);
/*Получить все блоки в правой части программы через классы 
//(которые имеют класс название-value,
// начиная с <div class="budget-value"></div>
// и заканчивая <div class="yearsavings-value"></div>)*/
let budgetValue = document.body.querySelector('.budget-value'),
    dayBudgetValue = document.body.querySelector('.daybudget-value'),
    levelValue = document.body.querySelector('.level-value'),
    expensesValue = document.body.querySelector('.expenses-value'),
    optionalExpensesValue = document.body.querySelector('.optionalexpenses-value'),
    incomeValue = document.body.querySelector('.income-value'),
    monthSavingsValue = document.body.querySelector('.monthsavings-value'),
    yearSavingsValue = document.body.querySelector('.yearsavings-value');

    console.log(budgetValue, dayBudgetValue, levelValue, expensesValue, optionalExpensesValue, 
        incomeValue, monthSavingsValue, yearSavingsValue);
/*Получить поля(input)
 c обязательными расходами через класс. (class=”expenses-item”)*/
        let nameExpensesInput = document.body.querySelectorAll('.expenses-item');
        console.log(nameExpensesInput);
        //Получить кнопки “Утвердить” и “Рассчитать” через Tag, 
        //каждую в своей переменной. 
        let expenseBtns = document.body.getElementsByTagName('button');
        console.log(expenseBtns);

        let expensesBtn = expenseBtns[0];
        let optionalExpensesBtn = expenseBtns[1];
        let countBydgetBtn = expenseBtns[2];
        let startBtn = expenseBtns[3];

        console.log(expensesBtn, optionalExpensesBtn, countBydgetBtn, startBtn);

        /*Получить поля для ввода необязательных расходов
         (optionalexpenses-item) при помощи querySelectorAll*/
         let optionalExpensesItem = document.body.querySelectorAll('.optionalexpenses-item');
         console.log(optionalExpensesItem);
/*Получить оставшиеся поля через querySelector 
(статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)*/

let possibleChooseIncome = document.body.querySelector('.choose-income'),
checkBox = document.body.querySelector('.checkbox'),
chooseSum = document.body.querySelector('.choose-sum'),
chooseProcent = document.body.querySelector('.choose-percent'),
yearValue = document.body.querySelector('.year-value'),
monthValue = document.body.querySelector('.month-value'),
dayValue = document.body.querySelector('.day-value');
console.log(possibleChooseIncome);



        

