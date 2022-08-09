const smallCups = document.querySelectorAll('.cup-small') // 小杯子
const listers = document.getElementById('liters') // 剩余的升数
const percentage = document.getElementById('percentage') // 百分比
const remained = document.getElementById('remained') // 剩余的升数

updateBigCup() // 初始化

smallCups.forEach((cup, idx) => { // 给每个杯子绑定事件
    cup.addEventListener('click', () => highlightCups(idx)) // 点击事件
})

function highlightCups(idx) { // 高亮杯子
    if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) { // 如果是满的杯子，且下一个杯子没有满的，则不能点击 
        idx-- // 回退一个
    }

    smallCups.forEach((cup, idx2) => { // 高亮所有杯子
        if(idx2 <= idx) { // 如果是点击的杯子之前的杯子，则高亮
            cup.classList.add('full') // 高亮
        } else { // 否则，不高亮
            cup.classList.remove('full') // 不高亮
        }
    })

    updateBigCup()   // 更新大杯子
}

function updateBigCup() { // 更新大杯子
    const fullCups = document.querySelectorAll('.cup-small.full').length // 满的杯子数量
    const totalCups = smallCups.length // 总杯子数量

    if(fullCups === 0) { // 如果没有满的杯子，则大杯子没有满的
        percentage.style.visibility = 'hidden' // 隐藏百分比
        percentage.style.height = 0 // 高度为0
    } else {
        percentage.style.visibility = 'visible' // 显示百分比
        percentage.style.height = `${fullCups / totalCups * 330}px` // 高度为满的杯子数量 / 总杯子数量 * 330px
        percentage.innerText = `${fullCups / totalCups * 100}%` // 百分比为满的杯子数量 / 总杯子数量 * 100%
    }

    if(fullCups === totalCups) { // 如果满的杯子数量等于总杯子数量，则大杯子满的
        remained.style.visibility = 'hidden' // 隐藏剩余的升数
        remained.style.height = 0 // 高度为0
    } else {  
        remained.style.visibility = 'visible' // 显示剩余的升数 
        listers.innerText = `${2 - (250 * fullCups / 1000)}L` 
    }
}