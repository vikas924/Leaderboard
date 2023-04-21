import getData from './getdata.js';

import gameid from './createnewgame.js';

const display = () => {
  const scores = document.querySelector('.scores');
  getData(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameid}/scores`).then((json) => {
    const data = json.result;
    let items = '';
    data.forEach((element) => {
      items += `<li class="list"><p class="para1">${element.user}:</p><p class="para1">${element.score}</p></li>`;
    });
    scores.innerHTML = items;
    const change = document.querySelectorAll('.list');
    for (let i = 0; i < change.length; i += 1) {
      if (i % 2 === 0) {
        change[i].classList.add('background');
      }
    }
  });
};

export default display;