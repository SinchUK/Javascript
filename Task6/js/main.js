let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0],
	
	
    yearValue = document.getElementsByClassName('year-value')[0],
    monthValue = document.getElementsByClassName('month-value')[0],
    dayValue = document.getElementsByClassName('day-value')[0],
    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesItemBtn = document.getElementsByTagName('button')[0],
	optionalExpensesBtn = document.getElementsByTagName('button')[1],
	countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent');

	// console.log(optionalExpensesItem);
	// console.log(optionalExpensesItem);

let money,
    time;


startBtn.addEventListener('click', function(event) {
	time = prompt("Введите дату в формате YYYY-MM-DD", "");
	money = +prompt("Ваш бюджет на месяц?", "");

    while(isNaN(money) || money =="" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
	}
	appData.budget = money;
	appData.timeData = time;
	budgetValue.textContent = money.toFixed();
	yearValue.value = new Date(Date.parse(time)).getFullYear();
	monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});


expensesItemBtn.addEventListener('click',function() {
	let sum = 0;

	for (let i = 0; i < expensesItem.length; i++) {
		let a = expensesItem[i].value,
			b = expensesItem[++i].value;
		   
		   if((typeof(a))=== "string" && (typeof(a)) != null && (typeof(b)) != null 
			   && a != "" && b != "" && a.length < 50) {
			   console.log("Done!");
			   appData.expenses[a] = b;
			   sum += +b;
		   } else {
			   console.log("Wrong !!!");
			   i = i - 1;
		   }   
	   
	   }
	   expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function() {
	for (var i = 0; i < optionalExpensesItem.length; i++) {
		let opt = optionalExpensesItem[i].value;
		appData.optionalExpenses[i] = opt;
		optionalexpensesValue.textContent += appData.optionalExpenses[i] + ' '; 

		// if((typeof(opt))=== "string" && (typeof(opt)) != null && opt != "" && opt.length < 50) {
		// 	appData.optionalExpenses[i] = opt;
		// 	console.log("Done for opt!");

		// } else {
		// 	i--;
		// 	console.log("Wrong way for Opt");
		// }
		
	} 
});

countBtn.addEventListener('click', function(){
	if (appData.budget != undefined) {
		appData.moneyPerDay =  (appData.budget/30).toFixed();
		daybudgetValue.textContent = appData.moneyPerDay;
		
		if (appData.moneyPerDay <= 100 ) {
            levelValue.textContent = "Минимальный уровень достатка!";
         } else if (appData.moneyPerDay > 100) {
            levelValue.textContent = "Средний уровень достатка!";
         } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Высокий уровень достатка!";
         } else {
			levelValue.textContent = "Произошла ошибка!";
         }

	} else {
		daybudgetValue.textContent = "Произошла ошибка!";
	}
});

incomeItem.addEventListener('input', function() {
    let items = income.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        
    },
  
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?", ""),
                percent = +prompt("Под какой процент?", "");
   
                appData.monthIncome = save/100/12*percent;
                alert("Доход в месяц с вашего дохода: "+ appData.monthIncome);
   
   
        }
    },
	
	
    showObj: function() {
        for (var key in appData) {
            console.log("Наша программа включает в себя данные : " + key + ": " + appData[key]);
        }
        
    }
};
