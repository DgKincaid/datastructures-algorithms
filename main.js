const BinaryTree = require('./tree/binary-tree');
const Queue = require('./queue/queue');
const HashTable = require('./hashtable/hashtable');
const BinaryHeap = require('./tree/binary-heap');
const BinarySearchTree = require('./tree/binary-search-tree');

function main() {
   const tree = new BinarySearchTree();

   tree.insert(20);
   tree.insert(30);
   tree.insert(10);

   console.log(tree);
}

main();