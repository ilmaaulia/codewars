const sumStr = (a, b) => {
	a = a === '' ? '0' : a;
	b = b === '' ? '0' : b;

	return (parseInt(a) + parseInt(b)).toString();
}
