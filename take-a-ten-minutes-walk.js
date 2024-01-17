const isValidWalk = walk => {
	if (walk.length === 10) {
		let x = 0;
		let y = 0;

		for (const d of walk) {
			switch (d) {
				case 'n': y++; break;
				case 's': y--; break;
				case 'w': x++; break;
				case 'e': x--; break;
			}
		}

		return x === 0 && y === 0;
	}

	return false;
};
