var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    // create new node
    var newNode = Node(value);
    // if list.head is null, then list.head equals this newest node
    if(list.head === null) {
      list.head = newNode;
    } else {
    // previous node.next equals this newest node
      list.tail.next = newNode;
    }
    // list.tail equals this newest node
    list.tail = newNode;
  };

  list.removeHead = function(){
    // list.head equals node after list.head
    var formerHead = list.head.value;
    list.head = list.head.next;
      // delete the previous head (?)

    return formerHead;
  };

  list.contains = function(target){
    // looks through all nodes and returns true if target value exists in a child
    var currentNode;
    if (!arguments[1]) {
      currentNode=list.head;
    } else {
      currentNode = arguments[1];
    }

    if(currentNode.value === target) { return true; }
    if(currentNode.next === null) { return false; }

    return list.contains(target,currentNode.next);
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
