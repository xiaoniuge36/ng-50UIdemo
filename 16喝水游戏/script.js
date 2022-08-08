const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')
// 初始化
updateBigCup()

smallCups.forEach((cup, idx) => { // 给每个小杯子绑定事件
    cup.addEventListener('click', () => highlightCups(idx)) // 点击小杯子时触发事件
})
// 小杯子高亮
function highlightCups(idx) { // 高亮小杯子
    if (idx===7 && smallCups[idx].classList.contains("full")) idx--; // 如果是最后一个杯子，并且是满的，则减一
    else if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) { // 如果是满的，且下一个杯子不是满的，则减一
        idx--// 如果是满的，且下一个杯子不是满的，则减一
    }
    smallCups.forEach((cup, idx2) => {// 将所有杯子变为不高亮
        if(idx2 <= idx) {// 如果是当前杯子或者当前杯子的下一个杯子，则高亮
            cup.classList.add('full') // 高亮
        } else {
            cup.classList.remove('full') // 取消高亮
        }
    })
// 更新大杯子
    updateBigCup()
}
// 更新大杯子
function updateBigCup() { // 更新大杯子
    const fullCups = document.querySelectorAll('.cup-small.full').length // 获取满的杯子数量
    const totalCups = smallCups.length // 获取总杯子数量

    if(fullCups === 0) { // 如果没有满的杯子，则大杯子为空
        percentage.style.visibility = 'hidden' // 隐藏百分比
        percentage.style.height = 0 // 高度为0
    } else {
        percentage.style.visibility = 'visible' // 显示百分比
        percentage.style.height = `${fullCups / totalCups * 330}px` // 更新百分比高度
        percentage.innerText = `${fullCups / totalCups * 100}%` // 更新百分比文本
    }

    if(fullCups === totalCups) { // 如果满的杯子数量等于总杯子数量，则大杯子为满的
        remained.style.visibility = 'hidden' // 隐藏剩余水量
        remained.style.height = 0 // 高度为0
    } else {
        remained.style.visibility = 'visible' // 显示剩余水量
        liters.innerText = `${2 - (250 * fullCups / 1000)}L` // 更新剩余水量文本
    }
}