import postData from './postdata.js';

import gameid from './createnewgame.js';

const addData = (input1, input2) => {
  const value1 = input1.value.trim();
  const value2 = input2.value.trim();
  if ((value1.length !== 0) && (value2.length !== 0)) {
    postData(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameid}/scores`, {
      user: input1.value,
      score: input2.valueAsNumber,
    });
  }
};

export default addData;