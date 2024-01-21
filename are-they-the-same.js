const comp = (array1, array2) => {
	if (array1 === null || array2 === null || array1 === undefined || array2 === undefined) {
		return false;
	}

	const elementCountMap = new Map();

	array1.forEach((num) => {
		const squaredNum = num * num;
		elementCountMap.set(squaredNum, (elementCountMap.get(squaredNum) || 0) + 1);
	});

	return array2.every((num) => {
		return elementCountMap.has(num) && elementCountMap.get(num) > 0 && elementCountMap.set(num, elementCountMap.get(num) - 1);
	});
};
