var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  var newChild = Tree(value);
  this.children.push(newChild);

};

// treeMethods.contains = function(target){
//   var currentNode;
//     if (!arguments[1]) {
//       currentNode=this;
//     } else {
//       currentNode = arguments[1];
//     }
//   // console.log("currentNode is ", currentNode);

//   if (currentNode.value===target) { return true; }
//   for (var i = 0; i<currentNode.children.length; i++){
//     console.log("currentNode children i is ", currentNode.children[i]);
//     return currentNode.contains(target, currentNode.children[i]);
//   }
//   // console.log("currentNode at bottom is ", currentNode);
//   return false;

// };

treeMethods.contains = function(target){
  var wasFound = false;

  var test = function(target, node){
    if (node.value===target) { wasFound = true; }
    for (var i = 0; i<node.children.length; i++){
      test(target, node.children[i]);
    }
  };
  test(target, this)
  return wasFound;

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
