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
    percentValue = document.querySelector('.choose-percent'),
    buttons = document.getElementsByTagName('button'),
    savings = document.getElementById('savings');

	// console.log(optionalExpensesItem);
	// console.log(optionalExpensesItem);

let money,
    time;

    for (let i = 0; i < (buttons.length - 1); i++) {
        buttons[i].disabled = true;
        buttons[i].style.backgroundImage = 'none';
        buttons[i].style.backgroundColor = '#ffbd7585';
        savings.disabled = true;
        savings.style.backgroundColor = 'white';
    }
    
startBtn.addEventListener('click', function(event) {
	time = prompt("Введите дату в формате YYYY-MM-DD", "");
	money = +prompt("Ваш бюджет на месяц?", "");

    for (let i = 0; i < (buttons.length - 1); i++) {
        buttons[i].disabled = false;
        buttons[i].style.backgroundImage = 'linear-gradient(336deg,#ffbd75,#ff964b),linear-gradient(#fff,#fff)';
        buttons[i].style.backgroundColor = 'none';
        savings.disabled = false; 
    }
    

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
	for (let i = 0; i < optionalExpensesItem.length; i++) {
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

        let expensesSum = +expensesValue.textContent;


		appData.moneyPerDay =  ((appData.budget - expensesSum)/30).toFixed();
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

checkSavings.addEventListener('input', function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value;
            percent = +percentValue.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);

    }
});

percentValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value;
            percent = +percentValue.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);

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
