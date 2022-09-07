const nums = document.querySelectorAll('.nums span')   // 获取所有数字
const counter = document.querySelector('.counter') // 获取计数器
const finalMessage = document.querySelector('.final') // 获取最终信息
const replay = document.querySelector('#replay') // 获取重播按钮

runAnimation() // 运行动画

function resetDOM() { // 重置DOM
  counter.classList.remove('hide') // 移除计数器隐藏样式
  finalMessage.classList.remove('show') // 移除最终信息显示样式

  nums.forEach((num) => { // 遍历所有数字
    num.classList.value = '' // 清空所有数字的样式
  })

  nums[0].classList.add('in') // 添加第一个数字的in样式
}

function runAnimation() { // 运行动画
  nums.forEach((num, idx) => { // 遍历所有数字
    const nextToLast = nums.length - 1 // 获取倒数第二个数字的索引

    num.addEventListener('animationend', (e) => { // 为每个数字添加动画结束事件
      if (e.animationName === 'goIn' && idx !== nextToLast) { // 如果动画名称为goIn并且不是最后一个数字
        num.classList.remove('in') // 移除数字的in样式
        num.classList.add('out') // 添加数字的out样式
      } else if (e.animationName === 'goOut' && num.nextElementSibling) { // 如果动画名称为goOut并且有下一个数字
        num.nextElementSibling.classList.add('in') // 添加下一个数字的in样式
      } else { // 如果是最后一个数字
        counter.classList.add('hide') // 添加计数器隐藏样式
        finalMessage.classList.add('show') // 添加最终信息显示样式
      }
    })
  })
}

replay.addEventListener('click', () => { // 为重播按钮添加点击事件
  resetDOM() // 重置DOM
  runAnimation() // 运行动画
})
