const utils = require('./utils');

const setPosition = (coordinates, moves) => {
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

  return [x, y, direction];
};

module.exports = setPosition;