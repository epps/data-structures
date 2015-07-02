var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    // if list.head is null, then list.head equals this newest node
    // list.tail equals this newest node
    // previous node.next equals this newest node
    // newest node.value to equal the value
  };

  list.removeHead = function(){
    // list.head equals node after list.head
      // delete the previous head (?)
  };

  list.contains = function(target){
    // looks through all nodes and returns true if target value exists in a child
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
