'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

/* Lesson 241 - How to Plan a Web Project */
/*
Planning Steps:
    1. User Stories: 
        - High level overview of application
        - Description of the application functionality from the user perspective
        - Putting together the stories with describe the functionality of entire app
        - Stories allow developers to determine the features required for the app
        - Common Format: As a [Who: type of User], I want [What: an Action] so that [Why: a benefit]

    2. Features:
        - Can be thought of as the implementation for the user stories in action

    3. Flow Chart:
        - Flow charts are used to visualize different actions the user can take
        - Flow charts shows the developer WHAT they will build
    
    4. Architecture:
        - The architecture displays HOW the developer will build the app
        - Give the structure in which the we can develop the app's functionality

Development:
    - Implementation of plan using code

*/

/* Lesson 242 - Using Geolocation API */
/* */

// Function takes two callback functions as input:
// 1. Callback func on success
// 2. Callback func on failure of getting coord
if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
    function(position) {
        const {latitude} = position.coords;
        const {longitude} = position.coords;
        console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

        const coords = [latitude, longitude];

        const map = L.map('map').setView([coords], 13);

        L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([coords]).addTo(map)
            .bindPopup('A pretty CSS popup.<br> Easily customizable.')
            .openPopup();
    }, function() {
        alert('Could not get your position.')
    });   
} else {
    console.log('navigator.geoloaction does not work');
};
