// const container = document.getElementById('container')
// const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
// const SQUARES = 500

// for(let i = 0; i < SQUARES; i++) {
//     const square = document.createElement('div')
//     square.classList.add('square')

//     square.addEventListener('mouseover', () => setColor(square))

//     square.addEventListener('mouseout', () => removeColor(square))

//     container.appendChild(square)
// }

// function setColor(element) {
//    const color = getRandomColor()
//    element.style.background = color
//    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
// }

// function removeColor(element) {
//    element.style.background = '#1d1d1d'
//    element.style.boxShadow = '0 0 2px #000'
// }

// function getRandomColor() {
//     return colors[Math.floor(Math.random() * colors.length)]
// }

const container = document.getElementsByClassName('container'); // 容器
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']; // 颜色数组
const SQUARES = 500; // 总数

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div'); // 创建div
    square.classList.add('square'); // 添加class
    square.addEventListener('mouseover', () => setColor(square)); // 绑定事件
    square.addEventListener('mouseout', () => removeColor(square)); // 绑定事件
    container[0].appendChild(square); // 将div添加到容器中
}

function setColor(element) {
    const color = getRandomColor(); // 获取随机颜色
    element.style.background = color; // 设置背景颜色
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`; // 设置阴影
}

function removeColor(element) {
    element.style.background = '#1d1d1d'; // 设置背景颜色
    element.style.boxShadow = '0 0 2px #000'; // 设置阴影
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]; // 获取随机颜色
    return colors[Math.floor(Math.random()*colors.length)]; // 获取随机颜色
}
