const LinkedList = require('./single-linked-list');

function main() {
    const linkedList = new LinkedList();

    linkedList.push_front(3);
    linkedList.push_front(4);


    console.log(linkedList.pop_back());
    console.log(linkedList.size());
}

main();