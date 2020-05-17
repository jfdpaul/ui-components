## How to use 

### Code samples

```
const nodeFactory = require('./nodeLib');

let head = undefined;

const cell1 = nodeFactory.build(1);
const cell2 = nodeFactory.build(2);
const cell3 = nodeFactory.build(3);
const cell4 = nodeFactory.build(4);

cell1.setRight(cell2);
cell1.setDown(cell3);
cell2.setLeft(cell1);
cell2.setDown(cell4);
cell3.setRight(cell4);
cell3.setUp(cell1);
cell4.setLeft(cell3);
cell4.setUp(cell2);

head = cell1;

function print(cell) {
  let odd = true;
  let arr = [];
  let currNode = cell;
  console.log('--------------------');
  for (; currNode !== undefined;) {
    while (odd ? currNode.right !== undefined : currNode.left !== undefined) {
      if (odd) {
        arr = [...arr, currNode.value];
        if (currNode.right !== undefined) {
          currNode = currNode.right;
        }
      } else {
        arr = [currNode.value, ...arr];
        if (currNode.left !== undefined) {
          currNode = currNode.left;
        }
      }
    }
    if (odd) {
      arr = [...arr, currNode.value];
    } else {
      arr = [currNode.value, ...arr];
    }
    odd = !odd;
    console.log(arr);
    arr = [];
    currNode = currNode.down;
  }
}

print(head);

nodeFactory.addColumnAfter(cell1);
print(head);

// cell1.forEachRight((v) => console.log(v));
head = cell1.right;
nodeFactory.removeColumn(cell1);
print(head);

nodeFactory.addRowAfter(cell3);
print(head);

nodeFactory.removeRow(cell3);
print(head);

```