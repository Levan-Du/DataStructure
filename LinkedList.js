class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }

    append(node) {
        if (!this.head) {
            this.head = node
        } else {
            var current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        this.length++
    }

    insertBefore(position, node) {
        var index = 0,
            preNode = null,
            current = this.head
        while (index < position) {
            preNode = current
            current = current.next
            index++
        }
        preNode.next = node
        node.next = current
        this.length++
    }

    removeAt(position) {
        var index = 0,
            preNode = null,
            current = this.head
        while (index < position) {
            preNode = current
            current = current.next
            index++
        }
        preNode.next = current.next
        this.length--
    }

    traverse() {
        var current = this.head
        while (current) {
            console.log(current.data)
            current = current.next
        }
    }
}

var list = new LinkedList(),
    node = new Node('aaa')

list.append(node)

node = new Node('bbb')
list.append(node)

node = new Node('ddd')
list.append(node)

node = new Node('ccc')
list.append(node)

node = new Node('123')
list.append(node)


node = new Node('hhh')
list.insertBefore(3, node)

list.traverse()

list.removeAt(3)

console.log('')

list.traverse()
