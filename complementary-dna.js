const DNAStrand = (dna) => {
	let result = '';

	for (let i = 0; i < dna.length; i++) {
		let char = dna[i];

		switch (char) {
			case 'A': result += 'T'; break;
			case 'T': result += 'A'; break;
			case 'C': result += 'G'; break;
			case 'G': result += 'C'; break;
		}
	}

	return result;
}