'use strict';

// Create variables to select html elements/classes
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

// Create functions to trigger reactions
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const checkKeyAndCloseModal = function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden'))
    closeModal();
};

// Add Event Listeners onto variables //
// Open modals
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

// Close modals
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', checkKeyAndCloseModal);
/*
notice that we have closeModal and not closeModal()
this is b/c closeModal() will run when line is read
we only want the function to execute when a click
event occurs
*/
