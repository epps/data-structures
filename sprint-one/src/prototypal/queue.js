var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage= {};
  someInstance.counter=0;

  return someInstance;
};

var queueMethods = {};
queueMethods.enqueue= function(value) {
  for (var i = this.counter; i>0; i--){
    this.storage[i]=this.storage[i-1];
  }
  this.storage[0]=value;
  this.counter++;
};
queueMethods.dequeue= function(){
  if(this.counter <1) {
    return 0;
  }
  this.counter--;
  return this.storage[this.counter];
};
queueMethods.size = function (){
  return this.counter;
};


