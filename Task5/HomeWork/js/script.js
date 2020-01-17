let menuItem = document.getElementsByClassName('menu-item'),
    menu = document.querySelector('.menu'),
    li = document.createElement('li'),
    text = li.textContent,
    item1 = menuItem[1],
    item2 = menuItem[2],
    titleText = document.getElementById('title'),
    advBanner = document.querySelector('.adv'),
    columns = document.getElementsByClassName('column'),
    promptBlock = document.getElementById('prompt');


menu.removeChild(item1);
menu.insertBefore(item1, menuItem[2]);

li.classList.add('menu-item');
menu.appendChild(li);
menuItem[4].textContent = "Пятый пункт";


console.log(columns);
columns[1].removeChild(advBanner);

let answer; 

document.body.style.background = "url(../img/apple_true.jpg) center no-repeat";
titleText.innerHTML = "Мы продаем только <b>подлинную</b> технику Apple";
  
function takeAnswer() {
    answer = prompt("Ваше отношение к технике Apple?");

    promptBlock.textContent = answer;
    promptBlock.classList.add('title');
}

setTimeout(takeAnswer, 1000);