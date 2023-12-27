const getCount = (str) => {
	const vowels = 'aiueo';
	let count = 0;

	for (let char of str) {
		if (vowels.includes(char)) {
			count++;
		}
	}

	return count;
}