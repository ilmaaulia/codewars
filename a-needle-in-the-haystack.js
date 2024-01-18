const findNeedle = haystack => {
	const i = haystack.indexOf('needle');

	if (i !== -1) {
		return `found the needle at position ${i}`
	}
}
