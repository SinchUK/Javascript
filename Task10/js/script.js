window.addEventListener('DOMContentLoaded', function () {
    'use strict';
console.log('Dom is ready');

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
            console.log('first function in action');
        }
    }
    hideTabContent(1);

    function showTabContent (b) {
        if (tabContent[b].classList.contains('hide')) {
                tabContent[b].classList.add('show');
                tabContent[b].classList.remove('hide');
            
        }
    }

    info.addEventListener('click', function (event) {
        console.log('click is working');
        let target = event.target;
        console.log(target);
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    console.log("in cikle");
                    break;
                }
            }
        }
    });

    //Timer

    let deadline = '2020-02-23';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            // ___________________________________________
            // if need only hours
            hours = Math.floor((t/(1000*60*60)));
            // ___________________________________________
            //If need days when
            // hours = Math.floor((t/1000/60/60) % 24),
            // days = Math.floor((t/(1000*60*60*24)));

            if (t <= 0) {
                seconds = '0';
                minutes = '0';
                hours = '0';
            }
            

            return {
                'total': t,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);
            

        function updateClock() {
            let t = getTimeRemaining(endtime);

            
        for (let key in t) { 
            if ( t[key] < 10 ) {
                t[key] = '0' + t[key];      
            }
        }    

        
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }

        }    
    }

    setClock('timer', deadline);


});