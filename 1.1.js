// Declarative function
const mapArrayDeclarative = (arr, callback) => arr.map(callback);

const originalArray = [1, 2, 3, 4, 5];

const square = (num) => num * num;

const newArrayDeclarative = mapArrayDeclarative(originalArray, square);

console.log(newArrayDeclarative); // Output: [1, 4, 9, 16, 25]





// Imperative function
const mapArrayImperative = (arr, callback) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
};

const originalArray = [1, 2, 3, 4, 5];

const square = (num) => num * num;

const newArrayImperative = mapArrayImperative(originalArray, square);

console.log(newArrayImperative); // Output: [1, 4, 9, 16, 25]

