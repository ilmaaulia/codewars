let points = (games) => {
	return games.reduce((totalPoints, game) => {
		const [x, y] = game.split(':').map(Number);

		if (x > y) {
			return totalPoints + 3;
		} else if (x < y) {
			return totalPoints;
		} else {
			return totalPoints + 1;
		}
	}, 0);
};