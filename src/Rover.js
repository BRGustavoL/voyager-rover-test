class Rover {
  constructor (coordinates) {
    this.x = coordinates[0];
    this.y = coordinates[1];
    this.direction = coordinates[2];
  };

  isDirection = temp => !!(this.direction === temp);

  setDirection = (move) => {
    if (move === 'R' || move === 'L') {
      if (this.isDirection('N')) return north[move];
      if (this.isDirection('S')) return south[move];
      if (this.isDirection('W')) return west[move];
      if (this.isDirection('E')) return east[move];
    } else {
      return this.direction;
    }
  };

  getPosition (moves, xLimit, yLimit) {
    moves.forEach(move => {
      if (move === 'M') {
        if (this.isDirection('N')) this.y++;
        if (this.isDirection('S')) this.y--;
        if (this.isDirection('W')) this.x--;
        if (this.isDirection('E')) this.x++;
      }
      this.direction = this.setDirection(move);
    });

    if (this.x > xLimit) {
      this.x = xLimit;
      alert(HORIZONTALLIMIT_MESSAGE);
    }
    if (this.x < 0) {
      this.x = 0;
      alert(HORIZONTALLIMIT_MESSAGE);
    }
  
    if (this.y > yLimit) {
      this.y = yLimit;
      alert(VERTICAL_LIMIT_MESSAGE);
    }
    if (this.y < 0) {
      this.y = 0;
      alert(VERTICAL_LIMIT_MESSAGE);
    }

    return [this.x, this.y, this.direction];
  };
};