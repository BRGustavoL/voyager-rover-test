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

module.exports = { defaultDirections };