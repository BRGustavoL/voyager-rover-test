const setPosition = (coordinates, moves) => {
  let [x, y, direction] = [coordinates[0], coordinates[1], coordinates[2]];

  const validMoves = moves.split('').filter(el => el === 'M');

  validMoves.forEach(() => {
    if (direction === 'N') y++;
    if (direction === 'S') y--;
    if (direction === 'W') x++;
    if (direction === 'E') x--;
  });

  return [x, y];
};

module.exports = setPosition;