let openButton = document.querySelector('.open-button');
let wrongOpen = document.querySelector('.bottom-information');
let wrongKey = document.querySelector('.middle-information');
let correctOpen = document.querySelector('.upper-information');
// 从本地获取数据并以数组形式展示
let informations = JSON.parse(localStorage.getItem('information'));
// 判断输入的密钥是否与存储的数据相同(返回密钥所在的对象在数组中的位置)
function keyJudge(inputKey) {
    let index = -1;
    for (let i = 0; i < (informations.length); i++) {
        index = index + 1;
        if (inputKey == informations[i].key) {
            return index;
        }
    }
    return -1;
}
// 判断打开胶囊时间是否在约定时间之前
function timeCheck(timeIn, sTime) {
    if (timeIn > sTime) {
        return true;
    }
    else {
        return false;
    }
}
// 更新剩余时间函数（每秒都更新距离打开胶囊还剩多少秒
function updateTime(sTime) {
    let nowT = new Date;
    let nowStime = nowT.getTime();
    // 每隔一秒进行一次更新
    if ((sTime - nowStime) > 0) {
        // 时间戳和秒的转换
        document.querySelector('.seconds').innerHTML = Math.round((sTime - nowStime) / 1000).toString();
        setTimeout(function () {
            updateTime(sTime);
        }, 1000);
    }
    else {
        document.querySelector('.seconds').innerHTML = '0';
    }
}
// 给打开按钮添加一个监听事件
openButton.addEventListener('click', event => {
    // 获取用户输入的密钥
    let openKey = document.querySelector('.key').value;
    let nowT = new Date;
    let nowStime = nowT.getTime();
    // 如果密钥正确
    if (keyJudge(openKey) != -1) {
        let theName = informations[keyJudge(openKey)].name;
        // let theEmail = information[keyJudge(openKey)].email
        let theTime = informations[keyJudge(openKey)].time;
        let theContent = informations[keyJudge(openKey)].content;
        let theHint = informations[keyJudge(openKey)].hint;
        let T = new Date(theTime);
        let sTime = T.getTime();
        // 进行剩余时间更新
        updateTime(sTime);
        document.querySelector('.name').innerHTML = theName;
        document.querySelector('.hint').innerHTML = theHint;
        document.querySelector('.output').innerHTML = theContent;
        document.querySelector('.time').innerHTML = theTime;
        // 如果现在时间晚于约定时间
        if (timeCheck(nowStime, sTime)) {
            correctOpen.setAttribute('style', 'display: block');
            wrongKey.setAttribute('style', 'display: none');
            wrongOpen.setAttribute('style', 'display: none');
        }
        // 如果现在时间早于约定时间
        else {
            correctOpen.setAttribute('style', 'display: none');
            wrongKey.setAttribute('style', 'display: none');
            wrongOpen.setAttribute('style', 'display: block');
        }
        // 如果密钥错误
    }
    else {
        correctOpen.setAttribute('style', 'display: none');
        wrongKey.setAttribute('style', 'display: block');
        wrongOpen.setAttribute('style', 'display: none');
    }
});
//# sourceMappingURL=open.js.map