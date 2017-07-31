var BiTree = require('./BiTree');

var SIZE = 100000,
    arr = []
for (var i = SIZE; i--;) {
    arr.push(i);
}

console.log(new Date())
var tmp = 0;
for (var i = 0; i < SIZE; i++) {
    for (var j = 0; j < SIZE - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            tmp = arr[j + 1]
            arr[j + 1] = arr[j]
            arr[j] = tmp
        }
    }
}
console.log(new Date())





console.log(new Date())
var bTree = new BiTree(),
    node = null;
arr.forEach(el => {
    node = new BiTree(el)
    bTree.append(node)
})

var newArr = [];
! function sort(bTree) {
    if (bTree.left) arguments.callee(bTree.left);
    newArr.push(bTree.data);
    if (bTree.right) arguments.callee(bTree.right);
}(bTree)

console.log(new Date())