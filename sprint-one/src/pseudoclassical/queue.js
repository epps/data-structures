var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage= {};
  this.counter= 0;
};

Queue.prototype.enqueue = function(value) {
  for (var i = this.counter; i>0; i--){
    this.storage[i]=this.storage[i-1];
  }
  this.storage[0]=value;
  this.counter++;
}

Queue.prototype.dequeue = function(){
  if(this.counter<1) {
    return 0;
  }
  this.counter--;
  return this.storage[this.counter];
}

Queue.prototype.size = function() {
  return this.counter;
}


