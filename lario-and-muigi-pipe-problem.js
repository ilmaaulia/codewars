const pipeFix = numbers => {
	const result = [];

	for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
		result.push(i);
	}

	return result;
}
