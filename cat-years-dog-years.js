const humanYearsCatYearsDogYears = humanYears => {
	switch (humanYears) {
		case 1: return [humanYears, 15, 15];
		case 2: return [humanYears, 15 + 9, 15 + 9];
		default: return [humanYears, 15 + 9 + 4 * (humanYears - 2), 15 + 9 + 5 * (humanYears - 2)];
	}
}
