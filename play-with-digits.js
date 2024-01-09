const digPow = (n, p) => {
  const digits = n.toString().split('');
  let sum = 0;

  for (let i = 0; i < digits.length; i++) {
    sum += Math.pow(Number(digits[i]), p + i);
  }

  const k = sum % n === 0 ? sum / n : -1;
  return k;
}
