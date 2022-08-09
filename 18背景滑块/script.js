const body = document.body;
const sides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let activeSlide = 0;
setBgToBody();
leftBtn.addEventListener('click', () => { //点击左按钮，activeSlide的值减1
    activeSlide--;
    if (activeSlide < 0) { //如果activeSlide的值小于0，则将其设置为最后一张图片的索引值
        activeSlide = sides.length - 1;
    }
    setBgToBody(); //设置body的背景图片
    setActiveSlide(); //设置activeSlide的值
});
rightBtn.addEventListener('click', () => { //点击右按钮，activeSlide的值加1
    activeSlide++;
    if (activeSlide > sides.length - 1) { //如果activeSlide的值大于最后一张图片的索引值，则将其设置为第一张图片的索引值
        activeSlide = 0;
    }
    setBgToBody(); //设置body的背景图片
    setActiveSlide(); //设置activeSlide的值
});

function setBgToBody() {
    body.style.backgroundImage = sides[activeSlide].style.backgroundImage; //设置body的背景图片
}

function setActiveSlide() {
    sides.forEach((side, index) => { //遍历sides数组，设置每个side的class为slide，并且把activeSlide的值设置为0
        side.classList.remove('active');
    }) //移除所有的slide class
    sides[activeSlide].classList.add('active'); //添加active类
}