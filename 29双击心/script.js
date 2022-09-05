const loveMe = document.querySelector('.loveMe') // 获取父元素
const times = document.querySelector('#times') // 获取点击次数元素

let clickTime = 0 // 记录点击次数
let timesClicked = 0 // 记录点击次数

loveMe.addEventListener('click', (e) => { // 事件监听
    if(clickTime === 0) { // 第一次点击
        clickTime = new Date().getTime() // 记录当前时间
    } else {
        if((new Date().getTime() - clickTime) < 800) { // 两次点击时间间隔小于800ms
            createHeart(e) // 创建心形
            clickTime = 0 // 重置点击时间
        } else { // 两次点击时间间隔大于800ms
            clickTime = new Date().getTime() // 重置点击时间
        }
    }
})

const createHeart = (e) => { // 创建心形
    const heart = document.createElement('i') // 创建i元素
    heart.classList.add('fas') // 添加类名
    heart.classList.add('fa-heart') // 添加类名

    const x = e.clientX // 获取鼠标点击位置的x坐标
    const y = e.clientY // 获取鼠标点击位置的y坐标

    const leftOffset = e.target.offsetLeft // 获取父元素的左偏移量
    const topOffset = e.target.offsetTop // 获取父元素的上偏移量

    const xInside = x - leftOffset // 获取鼠标点击位置相对于父元素的x坐标
    const yInside = y - topOffset // 获取鼠标点击位置相对于父元素的y坐标

    heart.style.top = `${yInside}px` // 设置心形的top值
    heart.style.left = `${xInside}px` // 设置心形的left值

    loveMe.appendChild(heart) // 将心形添加到父元素中

    times.innerHTML = ++timesClicked // 点击次数加1

    setTimeout(() => heart.remove(), 1000) // 1秒后删除心形
}