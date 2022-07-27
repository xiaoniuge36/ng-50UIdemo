//跟css一样 找到对应的id 就可以操作
const labels = document.querySelectorAll('.form-control label');

console.log(labels);

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
})