const north = { L: 'W', R: 'E' };
const south = { L: 'E', R: 'W' };
const west = { L: 'S', R: 'N' };
const east = { L: 'N', R: 'S' };
const defaultDirections = { north, south, west, east };
const resultTranslation = {
  'N': 'North',
  'E': 'East',
  'S': 'South',
  'W': 'West'
};

const renderCoordenates = (x, y, direction) => `
  Horizontal: ${x}
  <br>
  Vertical: ${y}
  <br>
  Direction: ${resultTranslation[direction]}
  <br>
  <legend> (${x}, ${y}, ${direction})
`;

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

const setPosition = (coordinates, moves, horizontalLimit, verticalLimit) => {
  let [x, y, direction] = [coordinates[0], coordinates[1], coordinates[2]];

  const isDirection = temp => !!(direction === temp);

  const setDirection = (move) => {
    if (move === 'R' || move === 'L') {
      if (isDirection('N')) return defaultDirections.north[move];
      if (isDirection('S')) return defaultDirections.south[move];
      if (isDirection('W')) return defaultDirections.west[move];
      if (isDirection('E')) return defaultDirections.east[move];
    } else {
      return direction;
    }
  }

  moves.forEach(move => {
    if (move === 'M') {
      if (isDirection('N')) y++;
      if (isDirection('S')) y--;
      if (isDirection('W')) x--;
      if (isDirection('E')) x++;
    }
    direction = setDirection(move);
  });

  if (x > horizontalLimit) {
    x = horizontalLimit;
    alert('Horizontal plateau limit reached!');
  } else if (x < 0) {
    x = 0;
    alert('Bottom horizontal plateau limit reached!');
  }

  if (y > verticalLimit) {
    y = horizontalLimit;
    alert('Vertical plateau limit reached!');
  } else if (y < 0) {
    y = 0;
    alert('Bottom vertical plateau limit reached!');
  }

  return [x, y, direction];
};

const moveRover = () => {
  const landingx = document.getElementById('landing-x').value;
  const landingy = document.getElementById('landing-y').value;
  const limitx = document.getElementById('limit-x').value;
  const limity = document.getElementById('limit-y').value;
  const direction = document.getElementById('direction').value;
  const instructions = document.getElementById('instructions').value;

  const validLanding = getValidLanding([landingx, landingy, direction]);
  const validMoves = getValidMoves(instructions);

  if (validLanding.length === 0 || validMoves.length === 0) {
    alert('Failed to move the Rover!!');
    return;
  }

  const result = setPosition(validLanding, validMoves, limitx, limity);
  document.getElementById("landing-result").innerHTML = renderCoordenates(validLanding[0], validLanding[1], validLanding[2]);
  document.getElementById("final-result").innerHTML = renderCoordenates(result[0], result[1], result[2]);
};