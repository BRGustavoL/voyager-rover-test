const moveRover = () => {
  const xLanding = getElementValueFromHTML('landing-x');
  const yLanding = getElementValueFromHTML('landing-y');
  const xLimit = getElementValueFromHTML('limit-x');
  const yLimit = getElementValueFromHTML('limit-y');
  const direction = getElementValueFromHTML('direction');
  const instructions = getElementValueFromHTML('instructions');

  const validLanding = getValidLanding([xLanding, yLanding, direction]);
  const validMoves = getValidMoves(instructions);

  if (validLanding.length === 0 || validMoves.length === 0) {
    alert('Failed to move the rover!');
    return;
  }

  const rover = new Rover(validLanding);
  const result = rover.getPosition(validMoves, xLimit, yLimit);

  setElementValueToHTML('landing-result', renderCoordenates(validLanding[0], validLanding[1], validLanding[2]));
  setElementValueToHTML('final-result', renderCoordenates(result[0], result[1], result[2]));
};