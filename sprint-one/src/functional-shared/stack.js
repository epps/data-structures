var Stack = function() {
  var someInstance = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  someInstance.storage = {};
  someInstance.counter = 0;

  someInstance.push = stackMethods.push;
  someInstance.pop = stackMethods.pop;
  someInstance.size = stackMethods.size;

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
}


