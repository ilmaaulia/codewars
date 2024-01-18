const solution = string => string.split('').map(s => s === s.toUpperCase() ? ` ${s}` : s).join('');
