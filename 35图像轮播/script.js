const imgs = document.getElementById('imgs') // 图片容器
const leftBtn = document.getElementById('left') // 左按钮
const rightBtn = document.getElementById('right') // 右按钮

const img = document.querySelectorAll('#imgs img') // 图片数组

let idx = 0 // 图片索引

let interval = setInterval(run, 2000) // 定时器

function run() { // 图片轮播
    idx++ // 图片索引加1
    changeImage() // 改变图片
}

function changeImage() { // 改变图片
    if(idx > img.length - 1) { // 当图片索引大于图片数组长度 - 1时
        idx = 0 // 图片索引置为0
    } else if(idx < 0) { // 当图片索引小于0时
        idx = img.length - 1 // 图片索引置为图片数组长度 - 1
    }

    imgs.style.transform = `translateX(${-idx * 500}px)` // 图片容器移动
}

function resetInterval() { // 重置定时器
    clearInterval(interval) // 清除定时器
    interval = setInterval(run, 2000) // 重置定时器
}

rightBtn.addEventListener('click', () => { // 右按钮点击事件
    idx++ // 图片索引加1
    changeImage() // 改变图片
    resetInterval() // 重置定时器
})

leftBtn.addEventListener('click', () => {
    idx--
    changeImage()
    resetInterval()
})