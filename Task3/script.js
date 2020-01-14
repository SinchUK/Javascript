'use strict';

let money,
    time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money =="" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();

 

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt("Во сколько обойдется?", "");
           
           if((typeof(a))=== "string" && (typeof(a)) != null && (typeof(b)) != null 
               && a != "" && b != "" && a.length < 50) {
               console.log("Done!");
               appData.expenses[a] = b;
           } else {
               console.log("Wrong !!!");
               i--;
           }
       
       //  console.log(appData.expenses);
       
       };
}
chooseExpenses();




// -----------------------------------------------------------------------------
// let i = 0;
        

// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");  

//    if((typeof(a))=== "string" && (typeof(a)) != null && (typeof(b)) != null 
//        && a != " " && b != " " && a.length < 50) {
//        console.log("Done!");
//        appData.expenses[a] = b;
       
//    } else {
//        console.log("wrong");
//        i--;
//    }

//    i++;

// } while (i < 2);
// -------------------------------------------------------------------------------

// let i = 0;

// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");  
    
//        if((typeof(a))=== "string" && (typeof(a)) != null && (typeof(b)) != null 
//            && a != " " && b != " " && a.length < 50) {
//            console.log("Done!");
//            appData.expenses[a] = b;
           
//        } else {
//            console.log("wrong");
//            i--;
//        }
    
//        i++;
// }
// --------------------------------------------------------------------------------

function detectDayBudget() {
    appData.moneyPerDay =  (appData.budget/30).toFixed();

    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100 ) {
        console.log("Минимальный уровень достатка!");
     } else if (appData.moneyPerDay > 100) {
        console.log("Средний уровень достатка!");
     } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка!");
     } else {
         console.log("Произошла ошибка!");
     };
}

detectLevel();



 function checkSavings() {
     if (appData.savings == true) {
         let save = +prompt("Какова сумма накоплений?", ""),
             percent = +prompt("Под какой процент?", "");

             appData.monthIncome = save/100/12*percent;
             alert("Доход в месяц с вашего дохода: "+ appData.monthIncome);


     }
 }
 checkSavings();

 function chooseOptExpenses() {
     
    for (var i = 1; i < 4; i++) {
        let opt = prompt("Статья необязательных расходов?", "");

        if((typeof(opt))=== "string" && (typeof(opt)) != null && opt != "" && opt.length < 50) {
            appData.optionalExpenses[i] = opt;
            console.log("Done for opt!");

        } else {
            i--;
            console.log("Wrong way for Opt");
        }
        
    } 
 }
 chooseOptExpenses();

