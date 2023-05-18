(() => {
  // src/sum.js
  function sum(a, b) {
    return a + b;
  }
  var sum_default = sum;

  // src/main.js
  var result = sum_default(2, 5);
  console.log(result);
})();
