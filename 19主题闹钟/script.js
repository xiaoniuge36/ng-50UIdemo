const hourEl = document.querySelector('.hour') // 时钟的小时
const minuteEl = document.querySelector('.minute') // 时钟的分钟
const secondEl = document.querySelector('.second') // 时钟的秒钟
const timeEl = document.querySelector('.time') // 时钟的时间
const dateEl = document.querySelector('.date') // 时钟的日期
const toggle = document.querySelector('.toggle') // 开关

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; // StackOverflow https://stackoverflow.com/questions/10073699/pad-a-number-with-leading-zeros-in-javascript
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]; // StackOverflow https://stackoverflow.com/questions/10073699/pad-a-number-with-leading-zeros-in-javascript

toggle.addEventListener('click', (e) => { // 开关
    const html = document.querySelector('html') // html
    if(html.classList.contains('dark')) { // 如果html有dark类
        html.classList.remove('dark') // 删除dark类
        e.target.innerHTML = 'Dark mode' // 开关的内容变为Dark mode
    } else {
        html.classList.add('dark') // 添加dark类
        e.target.innerHTML = 'Light mode' // 开关的内容变为Light mode
    }
})

function setTime() {     // 设置时间
    const time = new Date(); // 新建时间
    const month = time.getMonth() ; // 获取月份
    const day = time.getDay() ; // 获取星期
    const date = time.getDate() ; // 获取日期
    const hours = time.getHours() ; // 获取小时
    const hoursForClock = hours % 24 ||12 ; // 获取小时
    const minutes = time.getMinutes() + 1; // 获取分钟
    const seconds = time.getSeconds() + 1; // 获取秒钟
    const ampm = hours >= 12 ? 'PM' : 'AM' // 获取上午下午

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)` // 设置小时的旋转角度
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)` // 设置分钟的旋转角度
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)` // 设置秒钟的旋转角度

    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}` // 设置时间
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>` // 设置日期
}

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => { // 比例尺
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min; // 返回比例尺
  }

setTime() // 设置时间

setInterval(setTime, 1000) // 每秒设置时间