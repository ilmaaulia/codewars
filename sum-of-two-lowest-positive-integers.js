const sumTwoSmallestNumbers = (numbers) => {
	const sortedArray = numbers.slice().sort((a, b) => a - b);
	const twoSmallestNumbers = sortedArray.slice(0, 2);
	return twoSmallestNumbers.reduce((sum, value) => sum + value, 0);
}