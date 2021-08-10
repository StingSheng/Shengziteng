1、将布局分为三部分，<header></header>,<div(文字显示部分)></div>和<footer></footer>。<header></header>里面放“详情”，居中显示；<div></div>中放文字部分及文字框显示；<footer></footer>中放最下面的加入购物车和购买两个按钮


2、首先将整个画面撑开，令<body></body>将整个界面撑开，达到占满整个屏幕的效果，以防滑动界面的时候，不会有部分内容消失。

3、<header></heeader>部分存放“详情”这个标题，使用fixed位置参数将其固定在界面的顶部。将宽度设置为100%，则能够达到文字水平居中的效果，同时用参数更改背景颜色

```
background-color: white;
```

4、在“详情”文本标签的属性中，设定字体大小，是否加粗等属性

5、设定内容部分的背景，让它能与<header></header>背景产生区别。设定overflow为auto让溢出的内容能够在滚动的情况下显示，同时设定位置，不然会盖住<header></header>的内容

6、设定字体大小，颜色，是否加粗等。

7、以同样的方法，将<footer></footer>固定在显示屏幕的底部。在里面添加一个块元素，在里面存放两个按钮。

8、两个按钮的设计为三个<div></div>在一行显示，其中中间斜线部分由一个三角形构成，连接“加入购物车”和“购买”两个按钮。其中三角形的纯css设计如下：

```
.block{
    position: absolute;
    border-style: solid;
    border-right-width: 50px;
    border-top-width: 50px;
    border-left-width: 50px;
    border-bottom-width: 50px;
    border-bottom-color: red;
    border-right-color: red;
    border-left-color:rgba(255, 255, 255,0);
    border-top-color: rgba(255, 255, 255,0);
}
```

该程序过于臃肿，其实可以精简，可以直接给border-color赋四个值，分别设定四个边框的演的，border-width也是，由于边框宽度相同，附一个值即可，若边界不同也可以赋四个值分别设定。

该程序过于臃肿，其实可以精简，可以直接给border-color赋四个值，分别设定四个边框的演的，border-width也是，由于边框宽度相同，附一个值即可，若边界不同也可以赋四个值分别设定。

9、此次任务学到的：
    三角形绘制方式，代码见8

​    fixed固定位置，头和尾的固定能让头和尾不受页面其他元素影响。