const uniqueInOrder = iterable => (
  (typeof iterable === 'string' ? iterable.split('') : iterable)
    .filter((value, index, array) => value !== array[index - 1])
);