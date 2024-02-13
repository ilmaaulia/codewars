const domainName = url => {
	let domain = url.replace('http://', '').replace('https://', '');

	const pathIndex = domain.indexOf('/');
	if (pathIndex !== -1) {
		domain = domain.slice(0, pathIndex);
	}

	if (domain.startsWith('www.')) {
		domain = domain.slice(4);
	}

	return domain.split('.')[0];
}