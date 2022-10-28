const north = {
  'L': 'W',
  'R': 'E'
};

const south = {
  'L': 'E',
  'R': 'W'
};

const west = {
  'L': 'S',
  'R': 'N'
};

const east = {
  'L': 'N',
  'R': 'S'
};

const defaultDirections = {
  north,
  south,
  west,
  east
};

const getValidMoves = (moves) => {
  const possibleMovesRegex = new RegExp(/[R|L|M.]/);
  return moves.length > 0 ? moves.split('').filter(el => possibleMovesRegex.test(el)) : [];
};

module.exports = {
  defaultDirections,
  getValidMoves
};