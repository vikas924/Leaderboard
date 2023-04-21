import './style.css';

import addData from '../modules/adddata.js';

import gameid from '../modules/createnewgame.js';

import getData from '../modules/getdata.js';

import display from '../modules/display.js';

getData(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameid}/scores`);

const button = document.querySelector('.submitbutton');
button.addEventListener('click', (e) => {
  e.preventDefault();
  const input1 = document.querySelector('#input1');
  const input2 = document.querySelector('#input2');
  addData(input1, input2);
  input1.value = '';
  input2.value = '';
});

const refresh = document.querySelector('.mainbutton');

refresh.addEventListener('click', display);

display();