const utils = require('./utils');

const setPosition = (coordinates, moves, horizontalLimit, verticalLimit) => {
  let [x, y, direction] = [coordinates[0], coordinates[1], coordinates[2]];

  const isDirection = temp => !!(direction === temp);

  moves.forEach(move => {
    if (move === 'M') {
      if (isDirection('N')) y++;
      if (isDirection('S')) y--;
      if (isDirection('W')) x++;
      if (isDirection('E')) x--;
    } else {
      if (isDirection('N')) direction = utils.defaultDirections.north[move];
      if (isDirection('S')) direction = utils.defaultDirections.south[move];
      if (isDirection('W')) direction = utils.defaultDirections.west[move];
      if (isDirection('E')) direction = utils.defaultDirections.east[move];
    }
  });

  if (x > horizontalLimit) {
    console.log('Horizontal plateau limit reached!');
    x = horizontalLimit;
  } else if (x < 0) {
    x = 0;
    console.log('Bottom horizontal plateau limit reached!');
  }
  if (y > verticalLimit) {
    console.log('Vertical plateau limit reached!');
    y = horizontalLimit;
  } else if (y < 0) {
    y = 0;
    console.log('Bottom vertical plateau limit reached!');
  }

  return [x, y, direction];
};

module.exports = setPosition;