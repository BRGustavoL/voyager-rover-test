const utils = require('./utils');

const setDiretion = (direction, moves) => {
  let result = [];

  const validMoves = moves.split('').filter(el => el !== 'M');

  validMoves.forEach(move => {
    if (direction === 'N') result.push(utils.defaultDirections.north[move]);
    if (direction === 'S') result.push(utils.defaultDirections.south[move]);
    if (direction === 'W') result.push(utils.defaultDirections.west[move]);
    if (direction === 'E') result.push(utils.defaultDirections.east[move]);
  });

  return result[result.length - 1];
};

module.exports = setDiretion;