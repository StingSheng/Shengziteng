1、首先将页面充满整个屏幕，将要设计的主体内容放在页面的正中心，使用以下代码即可做到：

```css
    display: flex;      /*以下三行将主题内容水平垂直居中*/
    justify-content: center;
    align-items: center;
```

2、之后设计主体内容，主体内容使用grid三列布局，每个部分的背景都是白色，有圆角设置。使用a标签包裹整个icon包以进行点击跳转。每个icon包中又能分为上中下三部分，此部分纵向排列与默认相同，所以按照原网站的边距和大小进行设定，头像通过控制圆角半径与图片宽度大小的关系去进行圆形展示，作者名字同样进行居中等。

3、icon部分同样使用grid布局，上面半部分使用五列布局，下面半部分使用三列布局，通过计算去设定每一个网格的高度宽度，然后去更改网格内icon的大小（按照原网站中的大小去改变）。

4、过渡动画，与grid01任务中方法相同，分别设计transition（过渡时间）和transform
（过度类型）然后利用.hover去进行一个监控，控制过度的开始。

5、关于过度选择的问题，在过度选择的时候，变换元素为选中元素的时候，hover后面不跟该选择元素，正误代码如下：

```css
/* 正确代码 */
.upper-icon-bag:hover{         
    transform: scale(1.07);
}

/* 错误代码 */
.upper-icon-bag:hover .uppwe-icon-bag{         
    transform: scale(1.07);
}
```

6、关于a标签里面文本会出现下划线问题，在a标签下添加如下属性即可：

```css
	text-decoration: none;
```

该属性为文本装饰，可以选择下划线，中划线等等形式。

7、在进行svg标签icon大小更改时，应该改动其父元素的ifont-size大小。