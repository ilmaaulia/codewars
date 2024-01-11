const SeriesSum = n => {
  let sum = 0;
  let denominator = 1;

  for (let i = 0; i < n; i++) {
    sum += 1 / denominator;
    denominator += 3;
  }

  return n === 0 ? "0.00" : sum.toFixed(2);
}