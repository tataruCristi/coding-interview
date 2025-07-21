class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  traverseToIndex(index) {
    let currentNode = this.head;
    let counter = 0;
    while (currentNode) {
      if (counter === index) {
        return currentNode;
      }
      counter++;
      currentNode = currentNode.next;
    }
    return null;
  }

  printValues() {
    let currentNode = this.head;
    let values = [];

    while (currentNode) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return values;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = new Node(value);

    const prevNode = this.traverseToIndex(index - 1);
    const followingNode = prevNode.next;
    prevNode.next = newNode;
    newNode.next = followingNode;
    this.length++;
    return this;
  }

  remove(index) {
    if (index >= this.length) {
      return -1;
    }

    const prevNode = this.traverseToIndex(index - 1);
    const nodeToRemove = prevNode.next;
    prevNode.next = nodeToRemove.next;
    this.length--;
    return this;
  }
}

const linkedList = new LinkedList(3);
linkedList.append(4);
linkedList.append(5);
// linkedList.prepend(2);
// linkedList.insert(1, 5);
// linkedList.remove(2);

console.log(linkedList.printValues());
console.log(linkedList);
