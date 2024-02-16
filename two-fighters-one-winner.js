const declareWinner = (fighter1, fighter2, firstAttacker) => {
	while (fighter1.health > 0 && fighter2.health > 0) {
		const [attacker, defender] = firstAttacker === fighter1.name ? [fighter1, fighter2] : [fighter2, fighter1];
		defender.health -= attacker.damagePerAttack;
		if (defender.health <= 0) return attacker.name;
		firstAttacker = defender.name;
	}
};