const duplicateEncode = word => {
	return word
		.toLowerCase()
		.split('')
		.map((c, _, arr) => arr.indexOf(c) === arr.lastIndexOf(c) ? '(' : ')')
		.join('');
}
