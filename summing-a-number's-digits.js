const sumDigits = number => Math.abs(number).toString().split('').map(Number).reduce((a, b) => a + b);
