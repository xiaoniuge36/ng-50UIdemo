// const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

// sounds.forEach(sound => {
//     const btn = document.createElement('button')
//     btn.classList.add('btn')

//     btn.innerText = sound

//     btn.addEventListener('click', () => {
//         stopSongs()

//         document.getElementById(sound).play()
//     })

//     document.getElementById('buttons').appendChild(btn)
// })

// function stopSongs() {
//     sounds.forEach(sound => {
//         const song = document.getElementById(sound)

//         song.pause()
//         song.currentTime = 0;
//     })
// }


const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']; // 声音数组

sounds.forEach(sound => {
    const btn = document.createElement('button'); // 创建一个按钮
    btn.classList.add('btn'); // 给按钮添加一个类
    btn.innerText = sound; // 给按钮添加文本
    btn.addEventListener('click', () => { // 给按钮添加一个点击事件
        stopSongs(); // 停止所有音乐
        document.getElementById(sound).play(); // 播放当前音乐

    });
    document.getElementById('buttons').appendChild(btn); // 将按钮添加到页面中
});
function stopSongs() { // 停止所有音乐
    sounds.forEach(sound => { // 遍历所有音乐
        const song = document.getElementById(sound); // 获取每个音乐
        song.pause(); // 暂停每个音乐
        song.currentTime = 0; // 将每个音乐的播放时间设置为0
    } // end of forEach
    ); // end of sounds.forEach
} // end of stopSongs
