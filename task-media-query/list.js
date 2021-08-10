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