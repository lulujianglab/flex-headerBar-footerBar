# flex-headerBar_footerBar

通过flex弹性布局实现移动端“头尾固定，中间滚的页面

相信大家在移动端项目中会经常遇到这样的需求，要求页面的“头尾固定，中间可滚动”，类似于

![image](https://user-images.githubusercontent.com/26807227/44567616-cfa5eb80-a7a5-11e8-920e-d616ea38b0bf.png)

这是我之前做过得一个比较简单的[H5页面](https://lulujianglab.github.io/flex-headerBar_footerBar/demo/)，具体代码可查看该文件下的demo文件下的内容

现在我们把中间的内容块抠出来，主要分析下“头尾固定，中间滚动”这种结构在flex布局下是怎么实现的

整个页面结构超级简单，由外向里分别是头部(header)、中间内容块(section)、脚部(footer),然后被一个.container包裹就实现了满屏

首先是整个页面骨架(html)

```
<!-- 整个页面结构 -->
<section class="container flex direction-column">
   <!-- 头部固定栏 -->
   <header class="headerBox flex content-space-between items-center">
      <div class="left flex items-center"><i class="icon one"></i>我是头部</div>
      <i class="icon two"></i>
   </header>
       <!-- 内容区-->
       <section class="content flex-col">

       <!-- 把内容区代码粘贴到这块 -->

       </section>
    <footer class="footerBox">
			 <nav class="foot-nav flex">
          <b class="flex-col">首页</b>
          <b class="flex-col">应用</b>
				  <b class="flex-col">其他</b>
				  <b class="flex-col">我的</b>
			 </nav>
	  </footer>
</section>
```

然后是flex弹性布局样式可以查看该文件夹下static文件下的global.css(flex样式)，main.css(头尾固定页面基本样式)

flex弹性布局超赞了有木有！！是不是整个结构简单明了，通俗易懂，比以往基于fixed定位,CSS2+HTML4的方法简直好用太多，省去了解决手机上一些奇葩问题的麻烦，也不用去计算一堆margin、padding以及position等等

虽然会有兼容性的问题，但flex至少在手机浏览器中都是支持的，虽然写法上可能为了考虑老版本要多写一些兼容性的无用CSS

为了免去每次都写重复的这些兼容性，避免css代码混乱的情况出现

我把有关于flex弹性布局的方法都放进了global.css这个公共文件中，之后直接在其他html页面引用即可

[头部固定，中间滚动基本样式](https://lulujianglab.github.io/flex-headerBar_footerBar/)


