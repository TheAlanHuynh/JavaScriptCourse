'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// NEW COUNTRIES API URL
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL
// https://api.bigdatacould.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

/*
Lesson 256 - Asynchronous JavaScript, AJAX, and APIs
- Synchronous Code:
- Executed line by line in Sequence
- Problem: 
- Blocking Code- code takes too long to excute and 
dowmstream code cannot be excuted
Ex: alert statements

- Asynchronous Code:
    - Executed only after a task that runs in the "background" finishes
    - Non-blocking code
    - EventListener does not automatically make code asynchronous

- AJAX Calls: (Asynchronous Javascript And XML)
    - Allows for communication with remote webservers in a async way
    - Therefore, AJAX calls can request data from web servers dynamically

- JSON:
    - javascript code returned as a string
Lesson 257 - IMPORTANT URL Change:
- https://countries-api-836d.onrender.com/countries/
*/
///////////////////////////////////////

/* Lesson 258 - Our first AJAX Call: XMLHttpRequest */

const renderCountry = function(data, className = '') {
    const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(+data.population/ 1000000).toFixed(1)}M people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
}

const getCountryAndNeighbour = function(country) {
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v2/name/${country}`);
    request.send();
    
    request.addEventListener('load', function() {
        const [data] = JSON.parse(this.responseText);
        console.log(data);
        
        // Render Country 1
        renderCountry(data);

        // Get Neighbour Country (2)
        const [neighbour] = data.borders

        if(!neighbour) return;

        //AJAX call country 2
        const request2 = new XMLHttpRequest();
        request2.open('GET', `https://restcountries.com/v2/name/${neighbour}`);
        request2.send();

        request2.addEventListener('load', function() {
            const [data2] = JSON.parse(this.responseText);
            console.log(data2)

            renderCountry(data2, 'neighbour');
        })
    })
};

// getCountryAndNeighbour('portugal');

setTimeout(() => {
    console.log('1 second passed');
    setTimeout(() => {
        console.log('2 second passed');
        setTimeout(() => {
            console.log('3 second passed');
            setTimeout(() => {
                console.log('4 second passed');
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);