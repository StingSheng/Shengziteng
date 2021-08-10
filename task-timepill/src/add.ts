

// 对一些元素的获取
let submit = document.querySelector('.add-button')
let nameWarning = document.querySelector('.name-warning')
let nameError = document.querySelector('.name-error')
let emailWaring = document.querySelector('.email-warning')
let emailError = document.querySelector('.email-error')
let timeWarning = document.querySelector('.time-warning')
let timeError = document.querySelector('.time-error')
let contentWaring = document.querySelector('.content-warning')
let contentError = document.querySelector('.content-error')
let nowTime = document.querySelector('.time')
let conditionMeet = 0

// 名字的判定，是否合格
function nameJudge(inputName:string){
    // 长度小于零（没有输入名字）
    if(inputName.length <= 0){
        nameWarning.setAttribute('style','display: block;');
        nameError.setAttribute('style','display: none;');
    // 长度大于20（名字长度超过20）
    }else if(inputName.length > 20){
        nameWarning.setAttribute('style','display: none;');
        nameError.setAttribute('style','display: block;');
    }else{
        nameWarning.setAttribute('style','display: none;');
        nameError.setAttribute('style','display: none;');
        // 条件满足了一个
        conditionMeet = conditionMeet + 1
    }
}

// email判定
function emailJudge(inputEmail:string){
    // email格式判定，是否同时包含@和.com或.cn
    if(((inputEmail.search('.com') != -1) || (inputEmail.search('.cn') != -1)) && (inputEmail.search('@') != -1)){
        emailWaring.setAttribute('style','display: none;');
        emailError.setAttribute('style','display: none;');
        // 条件满足了一个
        conditionMeet = conditionMeet + 1
    // email长度判定（是否输入了email）
    }else if(inputEmail.length <= 0){
        emailWaring.setAttribute('style','display: block;');
        emailError.setAttribute('style','display: none;');
    }else{
        emailWaring.setAttribute('style','display: none;');
        emailError.setAttribute('style','display: block;');
    }
}

// 时间判定
function timeJudge(inputTime:string){
    // 写出时间格式的正则表达式
    let reg = /^(\d{4})(-)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;
    // 判定时间是否与上面的正则表达式匹配
    if(inputTime.match(reg) != null){
        timeWarning.setAttribute('style','display: none;');
        timeError.setAttribute('style','display: none;');
        // 条件满足了一个
        conditionMeet = conditionMeet + 1
    // 判定是否输入了时间
    }else if(inputTime.length <=0){
        timeWarning.setAttribute('style','display: block;');
        timeError.setAttribute('style','display: none;');
    }else{
        timeWarning.setAttribute('style','display: none;');
        timeError.setAttribute('style','display: block;');
    }
}

// 判断内容是否符合要求
function contentJudge(inputContent:string){
    if(inputContent.length <= 0){
        contentWaring.setAttribute('style','display: block;');
        contentError.setAttribute('style','display: none;');
    }else if(inputContent.length > 5000){
        contentWaring.setAttribute('style','display: none;');
        contentError.setAttribute('style','display: block;');
    }else{
        contentWaring.setAttribute('style','display: none;');
        contentError.setAttribute('style','display: none;');
        // 条件满足了一个
        conditionMeet = conditionMeet + 1
    }
}

// 获取是当前时间函数（已经格式化）
function getNowDate() {
    let myDate = new Date;
    let year = myDate.getFullYear(); //获取当前年
    let mon = (myDate.getMonth() + 1).toString().padStart(2, '0'); //获取当前月
    let date = myDate.getDate().toString().padStart(2, '0'); //获取当前日
    let hours = myDate.getHours().toString().padStart(2, '0'); //获取当前小时
    let minutes = myDate.getMinutes().toString().padStart(2, '0'); //获取当前分钟
    let seconds = myDate.getSeconds().toString().padStart(2, '0'); //获取当前秒
    let now = year + "-" + mon + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
    return now;
}

// 获取打开网页的时间并将值给nowTime元素
nowTime.setAttribute('value',getNowDate())

// 密钥的字符库
let passArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u',
            'v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'];
// 产生密钥函数
function passWord(){
    let passWord = ''
    for(let i = 1;i<21;i++){
        let x = Math.floor(Math.random()*passArr.length)
        // 随机在字符库中选择字符组成密钥
        passWord += passArr[x]
        // 每隔四个字符往后插一个-
        if((i%4 == 0)&&(i !=20)){
            passWord += '-'
        }
    }
    return passWord
}

// 创建一个数组，类型为从type.js中引入的Information
let information = JSON.parse(localStorage.getItem('information'))||[]
// 将数据存入本地
function dump() {
    localStorage.setItem('information', JSON.stringify(information))
}


// 添加数据，使用push往数组最后面插入元素
function addItem(item) {
    dump()
    information = JSON.parse(localStorage.getItem('information'))
    information.push(item)
}

// 为按钮添加监听事件
submit.addEventListener('click',event=>{
    // 读取各个输入框里面的文本
    let inputName = (document.querySelector('.name') as HTMLInputElement).value
    let inputEmail = (document.querySelector('.email') as HTMLInputElement).value
    let inputTime = (document.querySelector('.time') as HTMLInputElement).value
    let inputContent = (document.querySelector('.content-input') as HTMLInputElement).value
    let inputHint = (document.querySelector('.hint-input') as HTMLInputElement).value
    
    // 进行四种判定
    nameJudge(inputName);
    emailJudge(inputEmail);
    timeJudge(inputTime);
    contentJudge(inputContent);

    // 如果满足四个条件则进行数据存储和网页跳转
    if(conditionMeet == 4){
        // 生成密钥
        let key = passWord()
        // 数据存储
        let information= {key:key,name:inputName,email:inputEmail,time:inputTime,content:inputContent,hint:inputHint}
        addItem(information)
        dump()
        // 网页跳转
        window.location.href = 'index-done.html'
    }else{
        window.location.href = '#'
        conditionMeet = 0
    }
})


