const utils = require('./utils');
const setPosition = require('./setPosition');

const moveRover = (landing, moves) => {
  const validMoves = utils.getValidMoves(moves);

  if (landing.length === 0 || validMoves.length === 0) {
    return console.log('Failed to move the Rover!!');
  }

  const result = setPosition(landing, validMoves);

  console.log(result);
};

moveRover([3,3,'E'], 'MRRMMRMRRM');