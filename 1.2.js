// Function that returns a Promise

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

console.log("Start");

delay(2000)
  .then(() => {
    console.log("First asynchronous operation completed");
    return delay(1000);
  })
  .then(() => {
    console.log("Second asynchronous operation completed");
    return delay(1500);
  })
  .then(() => {
    console.log("Third asynchronous operation completed");
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  })
  .finally(() => {
    console.log("All asynchronous operations finished");
  });

console.log("End");
