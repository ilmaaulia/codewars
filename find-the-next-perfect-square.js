const findNextSquare = (sq) => Number.isInteger(Math.sqrt(sq)) ? Math.pow(Math.sqrt(sq) + 1, 2) : -1;