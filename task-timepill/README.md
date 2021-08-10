1、将工程分为四个页面去书写，分别写出主页面，添加页面，打开页面和添加成功页面的`html`和对应的`css`文件，将页面进行布局和`css`，`js`导入。

2、插入页面跳转功能，比如在主页面的两个跳转，一个添加胶囊，一个打开胶囊。

3、写添加胶囊的`ts`部分，首先添加胶囊是否成功要对输入数据进行判定，判定通过才能成功添加，过程需要四个判定函数，分别判定名字，邮箱，时间和内容，姓名和内容仅为输入数据的长度的判断，邮箱要判断输入数据里面是否同时包含`@`和`.com`或者同时包含`@`和`.cn`（使用`search`函数进行判断）还是说输入为空，时间判断包括是否填写和格式是否正确，格式判断我选择使用正则表达式和`match`函数进行匹配。

4、要读取打开网页的时间，并对其进行格式化处理，然后显示在时间输入框内，使用`getAttribute`函数进行元素属性的更改，此处更改元素的`value`值即可。

5、对添加胶囊按钮进行事件监听，只有当所有的判定都通过时，页面才会跳转，同时将数据以键值对的形式都存入到名为`information`的数组当之中，存入`localstorage`。

6、写添加完成页面的`ts`，从本地获取`information`数组的第一个元素，将其`key`赋值给输入框的`value`属性，即完成了生成的密钥的展示。

7、写打开胶囊的`ts`，首先将三种结果都写出来，使用`display`设置三种情况都不可见。然后根据输入的密钥去决定哪一种情况展示，过程中有两个判断，一个是判断密钥是否正确，密钥对应的胶囊是否存在，如果存在那么进行时间判定，判定当前时间是否晚于约定打开时间，如果晚于，那么就能够打开胶囊，显示胶囊里面的内容，如果早于，那么展示留下来的提示并显示实时剩余时间。如果密钥不存在，直接展示胶囊不存在即可。

8、展示实时剩余时间需要进行一个内部调用，设置函数为更新剩余时间，在里面设置一个`setimeout`去再次执行更新剩余时间函数，时间间隔设置为1000意为一秒，这样就能实时显示剩余时间。

9、关于在此次项目中学到的东西：`localstorage`获取得到的数据为字符串，要进行数据类型转换才便于操作：

```ts
let key = JSON.parse(localStorage.getItem('information'))[0].key
```

获取`input`标签里面的输入文本内容要使用如下代码：；

```ts
let inputName = (document.querySelector('.name') as HTMLInputElement).value
```

密钥产生一般使用随机数方法（是虽然都是伪随机）：

```ts
let passArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'];
function passWord(){
  let passWord = ''
  for(let i = 1;i<21;i++){
    let x = Math.floor(Math.random()*passArr.length)
    passWord += passArr[x]
    if((i%4 == 0)&&(i !=20)){
      passWord += '-'
    }
  }
  return passWord
}
```

时间戳的最小位为毫秒，所以在进行秒转换的时候要使用到/1000和`round`进行四舍五入

`.innerHTML`应该放入的为字符串，再放入其他类型数据之前要进行类型的转换：

```ts
document.querySelector('.seconds').innerHTML = Math.round((sTime - nowStime)/1000).toString()
```

直接而进行网页跳转或者其他HTML文件的跳转：

```ts
window.location.href = 'index-done.html'
```

使用`padStart(num,'string')`进行格式化操作：

```ts
let seconds = myDate.getSeconds().toString().padStart(2, '0'); //获取当前秒
```

判断字符串中是否含有某个字符或字符串：

```ts
 if(((inputEmail.search('.com') != -1) || (inputEmail.search('.cn') != -1)) && (inputEmail.search('@') != -1))
```

如果不包含，则`search`函数会返回`-1`.

`setTimeout`函数在引用执行函数的时候，最好在该函数外面写一层函数体，不然可能会报错，原因是调用的函数是在全局变量之下的，而上下文的变量是在函数内部的局部变量，于是会发生冲突，如果在外面添加一层`function`函数体，那么调用的就是`function`，而`function`调用的函数没有局部变量，所以不会报错。见此次任务中的如下代码：

```ts
// 更新剩余时间函数（每秒都更新距离打开胶囊还剩多少秒

function updateTime(sTime:number){

  let nowT = new Date

  let nowStime = nowT.getTime()

  // 时间戳和秒的转换

  document.querySelector('.seconds').innerHTML = Math.round((sTime - nowStime)/1000).toString()

  // 每隔一秒进行一次更新

  setTimeout(function(){

    updateTime(sTime)

  },1000)

}
```

10、此次任务中还存在的问题：

（1）代码看起来比较冗杂，可读性较低

（2）代码的组织性比较差，可能需要进一步进行组织

（3）代码导入的时间是以字符串的方式导入的，这一点如果要和参考中一样的话还需要进行修改。

以上几点时代码中依然存在的问题，这需要我后期对其进行修改和调试，然后更新上传内容