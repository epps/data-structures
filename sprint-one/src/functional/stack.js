var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter=0;

  // Implement the methods below
  someInstance.push = function(value){
    storage[counter]= value;
    counter++;
    return storage[counter];
  };

  someInstance.pop = function(){
    if(counter<1){
      return null;
    }
    counter--;
    return storage[counter];
  };

  someInstance.size = function(){
    return counter;
  };

  return someInstance;
};
