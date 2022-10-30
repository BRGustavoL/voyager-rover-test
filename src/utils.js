const NORTH = { L: 'W', R: 'E' };
const SOUTH = { L: 'E', R: 'W' };
const WEST = { L: 'S', R: 'N' };
const EAST = { L: 'N', R: 'S' };

const directionTranslation = {
  'N': 'North',
  'E': 'East',
  'S': 'South',
  'W': 'West'
};

const getElementValueFromHTML = id => document.getElementById(id).value;
const setElementValueToHTML = (id, value) => document.getElementById(id).innerHTML = value;

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

const getValidMoves = (instructions) => {
  const possibleInstructions = new RegExp(/[R|L|M.]/);
  const moves = instructions.length > 0 ? instructions.split('').map(instruction => instruction.toUpperCase()) : [];
  return moves.length > 0 ? moves.filter(el => possibleInstructions.test(el)) : [];
};

const renderCoordenates = (x, y, direction) => `
  Horizontal: ${x}
  <br>
  Vertical: ${y}
  <br>
  Direction: ${directionTranslation[direction]}
  <br>
  <legend> (${x}, ${y}, ${direction})
`;
