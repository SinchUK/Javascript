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

        }
    }
    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.add('show');
            tabContent[b].classList.remove('hide');

        }
    }

    info.addEventListener('click', function (event) {

        let target = event.target;

        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    //Timer

    let deadline = '2020-02-23';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            // ___________________________________________
            // if need only hours
            hours = Math.floor((t / (1000 * 60 * 60)));
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
                if (t[key] < 10) {
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


    // Modal window

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function () {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';

    });

    close.addEventListener('click', function () {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });



    let descriptionBtn = document.querySelectorAll('.description-btn'),
        description = document.querySelectorAll('.description');

    for (let i = 0; i < description.length; i++) {
        description[i].addEventListener('click', function (event) {
            let target = event.target;

            if (target && target.classList.contains('description-btn')) {

                for (let i = 0; i < descriptionBtn.length; i++) {

                    if (target == descriptionBtn[i]) {
                        showMoodal();
                        break;
                    }

                }

            }
        });
    }



    function showMoodal() {
        overlay.style.display = 'block';
        overlay.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    }


    let forms = document.getElementsByTagName('form');

    for (let i = 0; i < forms.length; i++) {

        // Send Form to server
        let message = {
            loading: 'Dovnloading...',
            success: 'Done! Your form is sent. :)',
            failure: 'Somthing go wrong...'
        };

        let form = document.querySelector('.main-form'),
            input = forms[i].getElementsByTagName('input'),
            statusMessage = document.createElement('div');
        console.log(forms + ' forms');


        statusMessage.classList.add('status');

        forms[i].addEventListener('submit', function (event) {
            let sentBtn = forms[i].querySelector('button');


            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            }

            event.preventDefault();
            forms[i].appendChild(statusMessage);

            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

            let formData = new FormData(form),
                img = document.createElement('img');

            request.send(formData);
            request.addEventListener('readystatechange', function () {

                function animateSuccess() {
                    let pos = 0,

                        id = setInterval(frame, 100);

                    sentBtn.setAttribute('disabled', 'true');

                    function frame(id) {
                        if (pos == 30) {
                            clearInterval(id);

                            sentBtn.removeAttribute("disabled");
                        } else {
                            pos++;
                            img.style.top = -pos + "px";
                            img.style.maxWidth = 10 - (pos / 0.75) + '%';
                            img.style.maxHeight = 10 - (pos / 0.75) + '%';
                            if (img.style.maxWidth && img.style.maxHeight == '2%') {
                                img.remove();

                                statusMessage.innerHTML = message.success;
                                setTimeout(() => {
                                    statusMessage.innerHTML = '';
                                }, 2000);
                            }

                        }
                    }

                }


                if (request.readyState < 4) {
                    statusMessage.innerHTML = message.loading;
                } else if (request.readyState === 4 && request.status === 200) {




                    img.setAttribute('src', 'img/sent.png');
                    img.style.cssText = 'max-height: 10%; max-width: 10%; position: relative; display: block; margin-left: auto; margin-right: auto;';
                    forms[i].appendChild(img);
                    animateSuccess();


                } else {
                    statusMessage.innerHTML = message.failure;
                }
            });

        });
    }

    // statusMessage.classList.add('status');

    // form.addEventListener('submit', function(event) {
    //     let sentBtn = document.querySelector('#modal-submit');
    //             console.log(sentBtn);


    //     for (let i = 0; i < input.length; i++) {
    //         input[i].value = '';
    //     }

    //     event.preventDefault();
    //     form.appendChild(statusMessage);

    //     let request = new XMLHttpRequest();
    //     request.open('POST','server.php');
    //     request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    //     let formData = new FormData(form),
    //         img = document.createElement('img');

    //     request.send(formData);
    //     request.addEventListener('readystatechange', function() {

    //         function animateSuccess () {
    //             let pos = 0,
    //                 id = setInterval(frame, 0.2);

    //                 sentBtn.setAttribute('disabled','true');

    //             function frame(id) {
    //                 if (pos == 350) {
    //                     clearInterval(id);
    //                     img.remove();
    //                     sentBtn.removeAttribute("disabled");
    //                 } else {
    //                     pos++; 
    //                     img.style.left = pos +"px";
    //                 }
    //             }

    //         }


    //         if (request.readyState < 4 ) {
    //             statusMessage.innerHTML = message.loading;
    //         } else if (request.readyState === 4 && request.status === 200) {
    //             statusMessage.innerHTML = message.success;

    //             setTimeout(() => {
    //                 statusMessage.innerHTML = '';
    //             }, 2000);

    //                 img.setAttribute('src', 'img/sent.png');
    //                 form.appendChild(img);
    //                 img.style.cssText = 'position: absolute; margin-top: 15px; height: 50px; left: 0px';

    //                 animateSuccess();


    //         } else {
    //             statusMessage.innerHTML = message.failure;
    //         }
    //     });

    // });






});