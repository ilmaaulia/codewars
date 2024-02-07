const howMuchILoveYou = nbPetals => {
	const phrases = {
		1: 'I love you',
		2: 'a little',
		3: 'a lot',
		4: 'passionately',
		5: 'madly',
		6: 'not at all',
	};

	return phrases[nbPetals % 6 || 6];
}
