const XO = (str) => {
  const lowerStr = str.toLowerCase();
  return lowerStr.split('x').length - 1 === lowerStr.split('o').length - 1;
}