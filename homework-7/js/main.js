'use strict';

let start = document.getElementById('start'),
    budget = document.getElementsByClassName('budget-value')[0],
    dayBudget = document.getElementsByClassName('daybudget-value')[0],
    level = document.getElementsByClassName('level-value')[0],
    expenses = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    income = document.getElementsByClassName('income-value')[0],
    monthSavings = document.getElementsByClassName('monthsavings-value')[0],
    yearSavings = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],

    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    savings = document.querySelector('#savings'),
    sum = document.querySelector('#sum'),
    percent = document.querySelector('#percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');

    let money, time;
    
expensesBtn.disabled = true;
optionalExpensesBtn.disabled = true;
countBtn.disabled = true;


start.addEventListener('click' , function(){
    time = prompt ("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt ("Ваш бюджет на месяц?", "");
    
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt ("Ваш бюджет на месяц?", ""); 
    }
    appData.timeData = time;
    appData.budget = money;
    budget.textContent = money.toFixed();
    year.value = new Date( Date.parse( time ) ).getFullYear();
    month.value = new Date( Date.parse( time ) ).getMonth() + 1;
    day.value = new Date( Date.parse( time ) ).getDate();

    expensesBtn.disabled = false;
    optionalExpensesBtn.disabled = false;
});
expensesBtn.addEventListener('click' , function(){
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;

        if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i--;
        }   
    }
    expenses.textContent = sum;
    countBtn.disabled = false;
});

optionalExpensesBtn.addEventListener('click', function() {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
		let opt = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
	}
});

countBtn.addEventListener('click' , function(){
    if(appData.budget != undefined) {
        appData.moneyPerDay = ( (appData.budget - +expenses.textContent) / 30).toFixed();
        dayBudget.textContent = appData.moneyPerDay;
        if (appData.moneyPerDay < 100) {
            level.textContent = "Это минимальный уровень достатка!";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            level.textContent = "Это средний уровень достатка!";
        } else if (appData.moneyPerDay > 2000) {
            level.textContent = "Это высокий уровень достатка!";
        } else {
            level.textContent = "Ошибочка...!";
        }
    } else{
        dayBudget.textContent = "Произошла ошибка!"
    }
});

chooseIncome.addEventListener('input' , function(){

    let items = chooseIncome.value;

    appData.income = items.split(", ");
    income.textContent = appData.income;

});

savings.addEventListener('click' , function(){

    if(appData.savings == true){
        appData.savings = false;
    } else{
        appData.savings = true;
    }

});

sum.addEventListener('input', function(){

    if( appData.savings == true){
        let sumV = +sum.value,
            percentV = +percent.value;

        appData.monthIncome = sumV/100/12*percentV;
        appData.yearIncome = sumV/100*percentV;

        monthSavings.textContent = appData.monthIncome.toFixed(1);
        yearSavings.textContent = appData.yearIncome.toFixed(1);
    }

});

percent.addEventListener('input', function(){

    if( appData.savings == true){
        let sumV = +sum.value,
            percentV = +percent.value;

        appData.monthIncome = sumV/100/12*percentV.toFixed(1);
        appData.yearIncome = sumV/100*percentV.toFixed(1);

        monthSavings.textContent = appData.monthIncome.toFixed(1);
        yearSavings.textContent = appData.yearIncome.toFixed(1);
    }

});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};