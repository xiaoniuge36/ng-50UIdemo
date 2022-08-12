const fill = document.querySelector('.fill') // 填充的盒子
const empties = document.querySelectorAll('.empty') // 空盒子
console.log(fill);
console.log(empties);
fill.addEventListener('dragstart', dragStart) // 填充的盒子拖拽开始
//事件不能自己自定义，要是事件中有的参数，就要在事件中传入
fill.addEventListener('dragend', dragEnd111) // 填充的盒子拖拽结束

for(const empty of empties) { // 空盒子拖拽事件
    empty.addEventListener('dragover', dragOver) // 空盒子拖拽进入
    empty.addEventListener('dragenter', dragEnter) // 空盒子拖拽进入
    empty.addEventListener('dragleave', dragLeave) // 空盒子拖拽离开
    empty.addEventListener('drop', dragDrop) // 空盒子拖拽放下
}

function dragStart() { // 填充的盒子拖拽开始
    this.className += ' hold'  // 拖拽的时候，填充的盒子会变成拖拽的样子
    setTimeout(() => this.className = 'invisible', 0) // 延迟0毫秒，让填充的盒子变成不可见的样子
}

function dragEnd111() { // 填充的盒子拖拽结束
    this.className = 'fill' // 填充的盒子变成普通的样子
}

function dragOver(e) { // 空盒子拖拽进入
    e.preventDefault() // 阻止默认事件
}

function dragEnter(e) { // 空盒子拖拽进入
    e.preventDefault() // 阻止默认事件
    this.className += ' hovered' // 空盒子会变成拖拽的样子
}

function dragLeave() { // 空盒子拖拽离开
    this.className = 'empty'    // 空盒子变成普通的样子
}

function dragDrop() { // 空盒子拖拽放下
    this.className = 'empty' // 空盒子变成普通的样子
    this.append(fill) // 填充的盒子放到空盒子中
}