const gimme = triplet => triplet.indexOf(triplet.filter(n => n !== Math.max(...triplet) && n !== Math.min(...triplet))[0]);
