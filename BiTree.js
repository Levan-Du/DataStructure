class BiTree {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }

    append(node) {
        if (!this.data) {
            this.data = node.data
        } else {
            this._appendNode(this, node)
        }
    }

    _appendNode(current, node) {
        // if (node.data < current.data) {
        //     if (current.left) {
        //         this._appendNode(current.left, node)
        //     } else {
        //         current.left = node
        //     }
        // } else {
        //     if (current.right) {
        //         this._appendNode(current.right, node)
        //     } else {
        //         current.right = node
        //     }
        // }

        while (current) {
            if (node.data < current.data) {
                if (!current.left) {
                    current.left = node
                    break
                }
                current = current.left
            } else {
                if (!current.right) {
                    current.right = node
                    break
                }
                current = current.right
            }
        }
    }

    traverse() {
        this._traverse(this)
    }

    _traverse(root) {
        if (root.left) {
            this._traverse(root.left)
        }
        console.log(root.data)
        if (root.right) {
            this._traverse(root.right)
        }
    }
}

// var bTree = new BiTree(),
//     node = null;
// [55, 32, 19, 27, 66, 15, 48, 81, 37, 28, 77, 92].forEach(el => {
//     node = new BiTree(el)
//     bTree.append(node)
// })

// bTree.traverse()
    // console.log(bTree)

module.exports = BiTree
