class Node {
  constructor (element) {
    this.element = element
    this.next = null
  }
}

class LinkList {
  constructor() {
    this.head = new Node('head')
  }

  find = (element) => {
    let currentNode = this.head
    while (currentNode !== null && currentNode.element !== element) {
      currentNode = currentNode.next
    }
    return currentNode
  }

  findPre = (element) => {
    let currentNode = this.head
    while (currentNode.next !== null && currentNode.next.element !== element) {
      currentNode = currentNode.next
    }
    return currentNode
  }

  // element 为要插入的节点，item 数据插入到这个节点后面
  insert = (element, item) => {
    const newNode = new Node(element)
    const currentElement = this.find(item)
    newNode.next = currentElement.next
    currentNode.next = newNode
  }

  remove = (element) => {
    const preNode = this.findPre(element)
    if (preNode.next !== null) {
      preNode.next = preNode.next.next
    }
  }
}