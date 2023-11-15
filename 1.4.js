const notFoundObject = new Proxy({}, {
  get: function(target, prop) {
    return "404";
  },
});
console.log(notFoundObject.someProperty);
console.log(notFoundObject.anotherProperty);
console.log(notFoundObject.anyPropertyYouAccess);
