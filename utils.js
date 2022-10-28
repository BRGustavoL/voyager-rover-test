const north = { L: 'W', R: 'E' };
const south = { L: 'E', R: 'W' };
const west = { L: 'S', R: 'N' };
const east = { L: 'N', R: 'S' };
const defaultDirections = { north, south, west, east };

const getValidLanding = (landing) => {
  if (landing.length > 0) {
    const possibleDirections = new RegExp(/[N|E|S|W.]/);
    const horizontal = landing[0] || 0;
    const vertical = landing[1] || 0;
    const direction = possibleDirections.test(landing[2]) ? landing[2] : 'N';
    return [horizontal, vertical, direction];
  }
  return [];
};

const getValidMoves = (moves) => {
  const possibleInstructions = new RegExp(/[R|L|M.]/);
  return moves.length > 0 ? moves.split('').filter(el => possibleInstructions.test(el)) : [];
};

module.exports = {
  defaultDirections,
  getValidLanding,
  getValidMoves,
};