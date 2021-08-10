1、开始按照最窄屏幕的布局对网页元素进行罗列和设计，设置头部固定，内容布局等。头部固定分为左中右三个部分，主体内容分为上层内容和下层内容部分，上层内容纵向排列，一张图片和一部分文字内容，下层部分为多个项目的一列展示。底部为一个红色`logo`和一部分文本，纵向排列。

2、每个项目又分为上面的图片部分和下面的项目信息部分，项目信息部分分为作者部分的列表和喜欢浏览部分的列表，两个列表平分宽度，然后将作者列表靠左，喜欢浏览列表靠右，每个列表都横向布局，对里面的元素进行细节设计

3、对比每次检测设备宽度增加到下一级别和之前级别网页布局的差异，找出差异点在哪，然后针对差异进行样式的更新，去覆盖原来的样式，以达到响应式布局的效果。例如下面的对项目的网格布局进行重新编写：

```css
/* 当设备宽度大于1024px时的布局 */
@media screen and (min-width: 1024px){
    /* 内容采用三列布局 */
    .content-page{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 20px 20px;
    }
}
```

4、完成每种宽度屏幕的适配之后，进行下拉菜单的设计，首先在`header`里面创建一个盒子，盒子里面写下拉菜单里面的内容，将盒子的初始状态设置为`display: none;`为不显示。然后使用`js`对menu进行监听，如果又点击事件产生，那么就会触发`DOM`操作，将下拉菜单的界面display设置为`block`盒子显示，同时将原来的界面的`display`设置为`none`不显示，此时下拉菜单将会覆盖整个窗口。同理给`close`进行监听，对上述两个页面的`display`进行中修改就能实现取消下拉菜单的效果：

```js
// 获取开启下拉菜单的元素
let openPage = document.querySelector(".menu");
// 获取关闭菜单的元素
let closePage = document.querySelector(".close")
// 获取菜单页面

let pageView = document.querySelector(".page-view")
// 获取原来的菜单位置的元素
let originView = document.querySelector(".origin-view")

// 点击menu按钮，打开菜单页面，隐藏原来的页面
openPage.addEventListener('click', event => {
    pageView.style.display = "block"
    originView.style.display = "none"
})

// 点击close按钮，关闭菜单界面，恢复原来页面的显示
closePage.addEventListener('click', event => {
    pageView.style.display = "none"
    originView.style.display = "block"
})
```

5、此次任务首次使用了部分`js`知识，也是首次`HTML`，`CSS`和`JS`三者结合完成一个小项目，这将会给我之后的学习带来一个比较好的学习自信和学习动力。

6、如果在头部已经设置了`fixed`，那么在之后的元素设置中出现`absolute`定位的话，该元素会浮在头部`fixed`元素上面，这是滑动滚轮会出现类似“穿模”的现象。

