var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter  = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    for (var i = counter; i > 0; i--) {
      storage[i] = storage[i-1];
    }
    storage[0] = value;
    counter++;
  };

  someInstance.dequeue = function(){
    if(counter<=0) {
      return 0;
    }
    counter--;
    return storage[counter];
  };

  someInstance.size = function(){
    return counter;
  };

  return someInstance;
};
