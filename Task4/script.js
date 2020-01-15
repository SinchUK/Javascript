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
    savings: true,
    chooseExpenses: function() {
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
           
           }
    },
    detectDayBudget: function() {
        appData.moneyPerDay =  (appData.budget/30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100 ) {
            console.log("Минимальный уровень достатка!");
         } else if (appData.moneyPerDay > 100) {
            console.log("Средний уровень достатка!");
         } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка!");
         } else {
             console.log("Произошла ошибка!");
         }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?", ""),
                percent = +prompt("Под какой процент?", "");
   
                appData.monthIncome = save/100/12*percent;
                alert("Доход в месяц с вашего дохода: "+ appData.monthIncome);
   
   
        }
    },
    chooseOptExpenses: function() {
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
    },
    chooseIncome: function() {
        let items; 
        
        while((typeof(items)) === "number" || items == "" || items == null) {
            items = prompt("Что принесет дополнительный доход? (Перечислите через запятую", "");
        }
            appData.income = items.split(', ');
            appData.income.push(prompt("Может что-то еще?"));
            appData.income.sort(); 
                  
        
        appData.income.forEach(function(item, index) {
            document.write("<h1>Способы доп. заработка : " + (index+1) +" "+ item + "</h1>");
        });    
    },
    showObj: function() {
        for (var key in appData) {
            console.log("Наша программа включает в себя данные : " + key + ": " + appData[key]);
        }
        
    }
};








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

 
