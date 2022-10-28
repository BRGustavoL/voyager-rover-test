const setDirection = require('./setDirection');
const setPosition = require('./setPosition');

const moveRover = (landing, instructions) => {
  if (landing.length === 0 || instructions.length === 0) {
    return console.log('You did not move!!');
  }

  const destiny = setPosition(landing, instructions);
  destiny[2] = setDirection(landing[2], instructions);

  console.log(destiny)
};

moveRover([3,3,'E'], 'MRRMMRMRRM');