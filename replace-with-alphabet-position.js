const alphabetPosition = (text) => {
	const result = [];

	for (const letter of text.toLowerCase()) {
		if (/^[a-z]$/.test(letter)) {
			const position = letter.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
			result.push(position.toString());
		}
	}

	return result.join(' ');
};