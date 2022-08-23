const resultEl = document.getElementById('result') // 存放生成的密码
const lengthEl = document.getElementById('length') // 密码长度
const uppercaseEl = document.getElementById('uppercase') // 大写字母
const lowercaseEl = document.getElementById('lowercase') // 小写字母
const numbersEl = document.getElementById('numbers') // 数字
const symbolsEl = document.getElementById('symbols') // 符号
const generateEl = document.getElementById('generate') // 生成按钮
const clipboardEl = document.getElementById('clipboard') // 复制按钮

const randomFunc = { // 存放生成随机字符的函数                                                                 
    lower: getRandomLower, // 存放生成随机小写字符的函数
    upper: getRandomUpper, // 存放生成随机大写字符的函数
    number: getRandomNumber, // 存放生成随机数字的函数
    symbol: getRandomSymbol // 存放生成随机符号的函数
}

clipboardEl.addEventListener('click', () => { // 复制按钮点击事件
    const textarea = document.createElement('textarea') // 创建一个textarea元素
    const password = resultEl.innerText // 获取密码

    if(!password) { return } // 如果没有密码，则返回

    textarea.value = password // 将密码赋值给textarea
    document.body.appendChild(textarea) // 将textarea添加到body中
    textarea.select() // 选中textarea
    document.execCommand('copy') // 复制
    textarea.remove() // 移除textarea
    alert('Password copied to clipboard!')  // 提示复制成功
})

generateEl.addEventListener('click', () => {    
    const length = +lengthEl.value // 密码长度
    const hasLower = lowercaseEl.checked // 大写字母
    const hasUpper = uppercaseEl.checked // 小写字母
    const hasNumber = numbersEl.checked // 数字
    const hasSymbol = symbolsEl.checked // 符号

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length) // 生成密码
})

function generatePassword(lower, upper, number, symbol, length) { // 生成密码函数
    let generatedPassword = '' // 初始化密码
    const typesCount = lower + upper + number + symbol // 字符种类数量
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]) // 存放字符种类的数组
    
    if(typesCount === 0) {  // 如果没有选择任何字符种类，则提示错误
        return '' // 返回空字符串
    }

    for(let i = 0; i < length; i += typesCount) { // 循环，每次循环生成一个字符
        typesArr.forEach(type => { // 循环字符种类数组
            const funcName = Object.keys(type)[0] // 获取字符种类的函数名
            generatedPassword += randomFunc[funcName]() // 调用字符种类的函数，生成一个字符
        })
    }

    const finalPassword = generatedPassword.slice(0, length) // 取前length个字符

    return finalPassword // 返回密码
}

function getRandomLower() { // 生成随机小写字符的函数
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97) // 返回随机小写字符
}

function getRandomUpper() { // 生成随机大写字符的函数
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65) // 返回随机大写字符
}

function getRandomNumber() { // 生成随机数字的函数
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48) // 返回随机数字
}

function getRandomSymbol() { // 生成随机符号的函数
    const symbols = '!@#$%^&*(){}[]=<>/,.' // 符号字符串
    return symbols[Math.floor(Math.random() * symbols.length)] // 返回随机符号
}