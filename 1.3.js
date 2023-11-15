function flattenArray(nestedArray) {
  const result = [];

  function flatten(arr) {
    arr.forEach((item) => {
      if (Array.isArray(item)) {
        flatten(item);
      } else {
        result.push(item);
      }
    });
  }

  flatten(nestedArray);
  return result;
}

const nestedArray = [4, [[5], [6, [7], 8], 9, 10]];
const flattenedArray = flattenArray(nestedArray);

console.log(flattenedArray); // Output: [4, 5, 6, 7, 8, 9, 10]
