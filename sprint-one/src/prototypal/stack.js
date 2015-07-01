var Stack = function() {
  var someInstance = Object.create(stackMethods);
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  someInstance.storage = {};
  someInstance.counter = 0;

  return someInstance;
};

var stackMethods = {};
stackMethods.push = function (value) {
  this.storage[this.counter]=value;
  this.counter++;
};
stackMethods.pop = function () {
  if (this.counter < 1) {
    return null;
  }
  this.counter--;
  return this.storage[this.counter];
};

stackMethods.size = function() {
  return this.counter;
};


