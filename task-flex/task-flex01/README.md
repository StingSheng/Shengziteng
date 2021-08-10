1、首先将整个页面分块，分为头部和主题部分，头部包括了三部分："排行榜"，"好文精选；热门资讯"和"文章"这三层，自然而然地价格头部又分为三个板块去写，然后主体部分由五个重复的布局构成，整个布局为纵向布局。另外阴影属性的设置也是能够体现出头部与主题部分的分界。

```
box-shadow: 0 20px 30px 0 rgba(0,0,0,0.3); /*设置页面浏览的阴影*/
```

2、头部的排行榜部分为简单的居中布局，注意的是字体和大小。

3、头部的导航部分我使用列表的形式进行布局，将"好文精选"和"热门资讯"及其对应图标放入一个列表中，然后让列表布局变为横向布局，两部分使用flex属性进行平均分块。这个过程中用到了一个重要的属性去掩盖列表的表头符号，代码如下：

```
list-style: none;
```

4、头部的"文章"部分同样使用列表制作，与上面的不同之处为这里给列表设置了padding，以此来对各个列表进行分割，达到每个按钮都单独存在的效果，不同于上一个部分：

```
.choice-item{
    line-height: 40px;
    background-color: #f7f7f7;
    font-size: 30px;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 50px;
    padding-right: 50px;
    border-radius: 10px;
    list-style: none;
}
```

5、主体部分，为了能让主要内容部分能与背景有所区分将背景的颜色进行了设置，另外为了一开始就能进行主题开头内容的浏览，还设定了主题在整个屏幕上的定位。为了能够在有限的屏幕范围内显示一部分内容，另一部分滚动展示，使用了overflow属性：

```
.list {
    position: relative;
    width: 100%;
    flex: 1;
    top: 450px;
    overflow: auto;
    padding: 30px;
}
```

6、单个文章内容的设计又可以将内容分为上中下三部分，上部分的两张图片使用相对于父元素的绝对定位进行重叠显示。中间的文字部分使用了新的样式，对溢出的文字进行省略号代替：

```
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
```

7、内容的下半部分为两张图片与两个数字，独占一行，没有使用绝对定位，而是直接进行margin设置去将四部分推到整行的末端。