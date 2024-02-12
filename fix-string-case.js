const solve = s => {
	const upper = s.split('').filter(c => c === c.toUpperCase()).length;
	const lower = s.split('').filter(c => c === c.toLowerCase()).length;

	return upper > lower ? s.toUpperCase() : s.toLowerCase();
}
