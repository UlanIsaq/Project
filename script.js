'use strict';




let money;
let time;
function start() {
  
    money = +prompt("Ваш бюджет на месяц?");
    //console.log(money);
    time = prompt("Введите дату в формате YYYY-MM-DD");
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
}
//
start();


let necessaryExpenses;
let necessaryExpensesAmount;
let appData = {
    budget: money,
    timeData: time,
    expenses: {},

    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
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
        let k = 0;
        while (k < 2) {
            necessaryExpenses = prompt("Введите обязательную статью расходов в этом месяце");
            necessaryExpensesAmount = prompt("Во сколько обойдется?");


            if (typeof (necessaryExpenses) === 'string' && typeof (necessaryExpenses) != null &&
                typeof (necessaryExpensesAmount) != null && necessaryExpenses != "" &&
                necessaryExpensesAmount != "" && necessaryExpenses.length < 50) {
                appData.expenses[necessaryExpenses] = necessaryExpensesAmount;
                console.log('done');
            } else {
                k = k - 1;
            }
            k++;
        }
    },
    detectDayBudget: function () {
        appData.monerPerDay = (appData.budget / 30).toFixed(1);
        alert("бюджет на 1 день : " + appData.monerPerDay);

    },

    detectLevel: function () {
        if (necessaryExpensesAmount <= 100) {
            console.log('Min budget');

        } else if (necessaryExpensesAmount > 100 && necessaryExpensesAmount <= 200) {
            console.log('Middle budget');
        } else if (necessaryExpensesAmount > 200) {
            console.log('High budget');
        } else {
            console.log("smth wrong");
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под каклй процент?");

            appData.monthIncome = save / 100 / 12 * percent;

            alert("Monthly income from saving deposite: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        let optionalEx;
        for (let index = 0; index < 3; index++) {
            optionalEx = prompt("Статья необязательных расходов?");

            if (optionalEx != null && optionalEx != "" && typeof (optionalEx) === 'string') {
                appData.optionalExpenses[index + 1] = optionalEx;
            } else {
                index = index - 1;
            }
        }
    },
    chooseIncome: function () {
        let terms;
        do {
            terms = prompt("Какие дополнительные доходы?", '');
            
        }while(terms == null || terms == "");
        appData.income = terms.split(', ');
        appData.income.push(prompt('May be smth else?', ''));
        appData.income.sort();

        appData.income.forEach(function(terms, i, mass){
console.log(i+1 + ": "+terms+ " massiv: "+mass);
        });
        }  
};
for(let key of appData){
    console.log("Our project include such data as: "+key + " value: "+appData[key]);
}