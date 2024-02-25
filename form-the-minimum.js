const minValue = values => Number([...new Set(values.sort((a, b) => a - b))].join(''));
