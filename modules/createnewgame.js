import postData from './postdata.js';

const gameid = 'ZaUbloMcIaUnAY6Eq1Xk';

postData('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
  name: 'Poker Leaderboard',
});

export default gameid;