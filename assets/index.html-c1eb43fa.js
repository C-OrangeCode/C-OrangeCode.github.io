import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as d,e as i}from"./app-a1fbcbb6.js";const n={},s=i(`<h1 id="css3-简介" tabindex="-1"><a class="header-anchor" href="#css3-简介" aria-hidden="true">#</a> CSS3 简介</h1><h2 id="_1-css3-概述" tabindex="-1"><a class="header-anchor" href="#_1-css3-概述" aria-hidden="true">#</a> 1.CSS3 概述</h2><h5 id="css3是css2的升级版本-它在css2的基础上-新增了很多强大的新功能-从而解决一些实际" tabindex="-1"><a class="header-anchor" href="#css3是css2的升级版本-它在css2的基础上-新增了很多强大的新功能-从而解决一些实际" aria-hidden="true">#</a> CSS3是CSS2的升级版本，它在CSS2的基础上，新增了很多强大的新功能，从而解决一些实际</h5><h5 id="面临的问题。" tabindex="-1"><a class="header-anchor" href="#面临的问题。" aria-hidden="true">#</a> 面临的问题。</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CSS3在未来会按照 模块化 的方式去发展： https://www.w3.org/Style/CSS/current-work.html
CSS3的新特性如下：
新增了 更加实用的选择器 ，例如：动态伪类选择器、目标伪类选择器、伪元素选择器等等。
新增了 更好的视觉效果 ，例如：圆角、阴影、渐变等。
新增了 丰富的背景效果 ，例如：支持多个背景图片，同时新增了若干个背景相关的属性。
新增了 全新的布局方案 —— 弹性盒子。
新增了Web 字体 ，可以显示用户电脑上没有安装的字体。
增强了 颜色 ，例如： HSL、HSLA、RGBA 几种新的颜色模式，新增 opacity属性来控制
透明度。
增加了2D 和 3D 变换 ，例如：旋转、扭曲、缩放、位移等。
增加 动画与过渡效果 ，让效果的变换更具流线性、平滑性。
......
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-css3私有前缀" tabindex="-1"><a class="header-anchor" href="#_2-css3私有前缀" aria-hidden="true">#</a> 2. CSS3私有前缀</h2><h2 id="_2-1-什么是私有前缀" tabindex="-1"><a class="header-anchor" href="#_2-1-什么是私有前缀" aria-hidden="true">#</a> 2.1 什么是私有前缀</h2><p>如下代码中的-webkit-就是私有前缀</p><h2 id="_2-2-为什么要有私有前缀" tabindex="-1"><a class="header-anchor" href="#_2-2-为什么要有私有前缀" aria-hidden="true">#</a> 2.2 为什么要有私有前缀</h2><h5 id="w3c标准所提出的某个css特性-在被浏览器正式支持之前-浏览器厂商会根据浏览器的内核" tabindex="-1"><a class="header-anchor" href="#w3c标准所提出的某个css特性-在被浏览器正式支持之前-浏览器厂商会根据浏览器的内核" aria-hidden="true">#</a> W3C标准所提出的某个CSS特性，在被浏览器正式支持之前，浏览器厂商会根据浏览器的内核，</h5><h5 id="使用私有前缀来测试该css特性-在浏览器正式支持该css特性后-就不需要私有前缀了。" tabindex="-1"><a class="header-anchor" href="#使用私有前缀来测试该css特性-在浏览器正式支持该css特性后-就不需要私有前缀了。" aria-hidden="true">#</a> 使用私有前缀来测试该CSS特性，在浏览器正式支持该CSS特性后，就不需要私有前缀了。</h5><h5 id="举个例子" tabindex="-1"><a class="header-anchor" href="#举个例子" aria-hidden="true">#</a> 举个例子：</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>查询CSS3兼容性的网站： https://caniuse.com/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>div {
width:400px;
height:400px;
-webkit-border-radius: 20px;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-webkit-border-radius: 20px;
-moz-border-radius: 20px;
-ms-border-radius: 20px;
-o-border-radius: 20px;
border-radius: 20px;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-3-常见浏览器私有前缀" tabindex="-1"><a class="header-anchor" href="#_2-3-常见浏览器私有前缀" aria-hidden="true">#</a> 2. 3 常见浏览器私有前缀</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Chrome 浏览器：- webkit -
Safari 浏览器： - webkit -
Firefox 浏览器：- moz -
Edge 浏览器：- webkit -
旧 Opera 浏览器：-o-
旧 IE 浏览器：-ms-
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>我们在编码时，不用过于关注浏览器私有前缀，不用绞尽脑汁的去记忆，也不用每个都去查询，因
为常用的CSS3新特性，主流浏览器都是支持的，即便是为了老浏览器而加前缀，我们也可以借助
现代的构建工具，去帮我们添加私有前缀。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="二、css-3-基本语法" tabindex="-1"><a class="header-anchor" href="#二、css-3-基本语法" aria-hidden="true">#</a> 二、CSS 3 基本语法</h1><h2 id="_1-css-3-新增长度单位" tabindex="-1"><a class="header-anchor" href="#_1-css-3-新增长度单位" aria-hidden="true">#</a> 1. CSS 3 新增长度单位</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. rem根元素字体大小的倍数，只与根元素字体大小有关。
2. vw 视口宽度的百分之多少 10vw 就是视口宽度的10%。
3. vh 视口高度的百分之多少 10vh 就是视口高度的10%。
4. vmax 视口宽高中大的那个的百分之多少。（了解即可）
5. vmin 视口宽高中小的那个的百分之多少。（了解即可）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-css-3-新增颜色设置方式" tabindex="-1"><a class="header-anchor" href="#_2-css-3-新增颜色设置方式" aria-hidden="true">#</a> 2. CSS 3 新增颜色设置方式</h2><p>CSS3新增了三种颜色设置方式，分别是：rgba、hsl、hsla，由于之前已经详细讲解，此处略<br> 过。</p><h2 id="_3-css-3-新增选择器" tabindex="-1"><a class="header-anchor" href="#_3-css-3-新增选择器" aria-hidden="true">#</a> 3. CSS 3 新增选择器</h2><h5 id="css3新增的选择器有-动态伪类、目标伪类、语言伪类、ui伪类、结构伪类、否定伪类、伪元素-这" tabindex="-1"><a class="header-anchor" href="#css3新增的选择器有-动态伪类、目标伪类、语言伪类、ui伪类、结构伪类、否定伪类、伪元素-这" aria-hidden="true">#</a> CSS3新增的选择器有：动态伪类、目标伪类、语言伪类、UI伪类、结构伪类、否定伪类、伪元素；这</h5><h5 id="些在css2中已经详细讲解-此处略过。" tabindex="-1"><a class="header-anchor" href="#些在css2中已经详细讲解-此处略过。" aria-hidden="true">#</a> 些在CSS2中已经详细讲解，此处略过。</h5><h2 id="_4-css-3-新增盒模型相关属性" tabindex="-1"><a class="header-anchor" href="#_4-css-3-新增盒模型相关属性" aria-hidden="true">#</a> 4. CSS 3 新增盒模型相关属性</h2><h5 id="可选值-含义" tabindex="-1"><a class="header-anchor" href="#可选值-含义" aria-hidden="true">#</a> 可选值 含义</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>content-box width 和 height 设置的是盒子内容区的大小。（默认值）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>border-box width 和 height 设置的是盒子总大小。（怪异盒模型）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="值-含义" tabindex="-1"><a class="header-anchor" href="#值-含义" aria-hidden="true">#</a> 值 含义</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>none 不允许用户调整元素大小。^ (默认)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>both 用户可以调节元素的宽度和高度。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>horizontal 用户可以调节元素的宽度^ 。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vertical 用户可以调节元素的高度。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-1-box-sizing-怪异盒模型" tabindex="-1"><a class="header-anchor" href="#_4-1-box-sizing-怪异盒模型" aria-hidden="true">#</a> 4. 1. box - sizing 怪异盒模型^</h3><p>使用box-sizing属性可以设置盒模型的两种类型</p><h3 id="_4-2-resize-调整盒子大小" tabindex="-1"><a class="header-anchor" href="#_4-2-resize-调整盒子大小" aria-hidden="true">#</a> 4. 2. resize 调整盒子大小^</h3><p>使用resize属性可以控制是否允许用户调节元素尺寸。</p><h3 id="_4-3-box-shadow-盒子阴影" tabindex="-1"><a class="header-anchor" href="#_4-3-box-shadow-盒子阴影" aria-hidden="true">#</a> 4. 3. box - shadow 盒子阴影^</h3><p>使用 box-shadow 属性为盒子添加阴影。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>语法：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="值-含义-1" tabindex="-1"><a class="header-anchor" href="#值-含义-1" aria-hidden="true">#</a> 值 含义</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>h-shadow 水平阴影的位置，必须填写，可以为负值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>v-shadow 垂直阴影的位置，必须填写，可以为负值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>blur 可选，模糊距离
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>spread 可选，阴影的外延值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>color 可选，阴影的颜色
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>inset 可选，将外部阴影改为内部阴影
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="各个值的含义" tabindex="-1"><a class="header-anchor" href="#各个值的含义" aria-hidden="true">#</a> 各个值的含义：</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>默认值：box-shadow:none表示没有阴影
示例：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>box-shadow: h-shadow v-shadow blur spread color inset;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/* 写两个值，含义：水平位置、垂直位置 */
box-shadow: 10px 10px;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/* 写三个值，含义：水平位置、垂直位置、颜色 */
box-shadow: 10px 10px red;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-opacity-不透明度" tabindex="-1"><a class="header-anchor" href="#_4-4-opacity-不透明度" aria-hidden="true">#</a> 4. 4. opacity 不透明度^</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>opacity属性能为整个元素添加透明效果， 值是 0 到 1 之间的小数， 0 是完全透明， 1 表示完
全不透明。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>opacity 与 rgba 的区别？
opacity 是一个属性，设置的是整个元素（包括元素里的内容）的不透明度。
rgba 是颜色的设置方式，用于设置颜色，它的透明度，仅仅是调整颜色的透明度。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-css-3-新增背景属性" tabindex="-1"><a class="header-anchor" href="#_5-css-3-新增背景属性" aria-hidden="true">#</a> 5. CSS 3 新增背景属性</h2><h3 id="_5-1-background-origin" tabindex="-1"><a class="header-anchor" href="#_5-1-background-origin" aria-hidden="true">#</a> 5. 1. background-origin</h3><h5 id="作用-设置背景图的原点。" tabindex="-1"><a class="header-anchor" href="#作用-设置背景图的原点。" aria-hidden="true">#</a> 作用：设置背景图的原点。</h5><h5 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. padding-box：从padding区域开始显示背景图像。—— 默认值
2. border-box： 从border区域开始显示背景图像。
3. content-box： 从content区域开始显示背景图像。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-background-clip" tabindex="-1"><a class="header-anchor" href="#_5-2-background-clip" aria-hidden="true">#</a> 5. 2. background-clip</h3><h5 id="作用-设置背景图的向外裁剪的区域。" tabindex="-1"><a class="header-anchor" href="#作用-设置背景图的向外裁剪的区域。" aria-hidden="true">#</a> 作用：设置背景图的向外裁剪的区域。</h5><h5 id="语法-1" tabindex="-1"><a class="header-anchor" href="#语法-1" aria-hidden="true">#</a> 语法</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. border-box： 从border区域开始向外裁剪背景。 —— 默认值
2. padding-box： 从padding区域开始向外裁剪背景。
3. content-box： 从content区域开始向外裁剪背景。
4. text：背景图只呈现在文字上。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>注意：若值为text，那么backgroun-clip要加上-webkit-前缀。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/* 写三个值，含义：水平位置、垂直位置、模糊值 */
box-shadow: 10px 10px 10px;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/* 写四个值，含义：水平位置、垂直位置、模糊值、颜色 */
box-shadow: 10px 10px 10px red;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/* 写五个值，含义：水平位置、垂直位置、模糊值、外延值、颜色 */
box-shadow: 10px 10px 10px 10px blue;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/* 写六个值，含义：水平位置、垂直位置、模糊值、外延值、颜色、内阴影 */
box-shadow: 10px 10px 20px 3px blue inset;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-background-size" tabindex="-1"><a class="header-anchor" href="#_5-3-background-size" aria-hidden="true">#</a> 5.3. background-size</h3><h5 id="作用-设置背景图的尺寸。" tabindex="-1"><a class="header-anchor" href="#作用-设置背景图的尺寸。" aria-hidden="true">#</a> 作用：设置背景图的尺寸。</h5><h5 id="语法-2" tabindex="-1"><a class="header-anchor" href="#语法-2" aria-hidden="true">#</a> 语法：</h5><h5 id="_1-用长度值指定背景图片大小-不允许负值。" tabindex="-1"><a class="header-anchor" href="#_1-用长度值指定背景图片大小-不允许负值。" aria-hidden="true">#</a> 1. 用长度值指定背景图片大小，不允许负值。</h5><h5 id="_2-用百分比指定背景图片大小-不允许负值。" tabindex="-1"><a class="header-anchor" href="#_2-用百分比指定背景图片大小-不允许负值。" aria-hidden="true">#</a> 2. 用百分比指定背景图片大小，不允许负值。</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>3. auto： 背景图片的真实大小。 —— 默认值
4. contain： 将背景图片等比缩放，使背景图片的宽或高，与容器的宽或高相等，再将完整
背景图片包含在容器内，但要注意：可能会造成容器里部分区域没有背景图片。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>5. cover：将背景图片等比缩放，直到完全覆盖容器，图片会尽可能全的显示在元素上，但要
注意：背景图片有可能显示不完整。—— 相对比较好的选择
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-4-backgorund-复合属性" tabindex="-1"><a class="header-anchor" href="#_5-4-backgorund-复合属性" aria-hidden="true">#</a> 5.4. backgorund 复合属性</h3><h5 id="语法-3" tabindex="-1"><a class="header-anchor" href="#语法-3" aria-hidden="true">#</a> 语法：</h5><h5 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意：</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. origin 和 clip的值如果一样，如果只写一个值，则origin 和 clip 都设置；如
果设置了两个值，前面的是origin，后面的clip。
2. size 的值必须写在 position 值的后面，并且用 / 分开。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-5-多背景图" tabindex="-1"><a class="header-anchor" href="#_5-5-多背景图" aria-hidden="true">#</a> 5.5. 多背景图</h3><h5 id="css3-允许元素设置多个背景图片" tabindex="-1"><a class="header-anchor" href="#css3-允许元素设置多个背景图片" aria-hidden="true">#</a> CSS3 允许元素设置多个背景图片</h5><h2 id="_6-css3新增边框属性" tabindex="-1"><a class="header-anchor" href="#_6-css3新增边框属性" aria-hidden="true">#</a> 6. CSS3新增边框属性</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>background-size: 300px 200px;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>background-size: 100% 100%;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>background-size: contain;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>background-size: cover;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>background: color url repeat position / size origin clip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/* 添加多个背景图 */
background: url(../images/bg-lt.png) no-repeat,
url(../images/bg-rt.png) no-repeat right top,
url(../images/bg-lb.png) no-repeat left bottom,
url(../images/bg-rb.png) no-repeat right bottom;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-1-边框圆角" tabindex="-1"><a class="header-anchor" href="#_6-1-边框圆角" aria-hidden="true">#</a> 6. 1 边框圆角</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在 CSS3 中，使用border-radius属性可以将盒子变为圆角。
同时设置四个角的圆角：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="属性名-作用" tabindex="-1"><a class="header-anchor" href="#属性名-作用" aria-hidden="true">#</a> 属性名 作用</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>border-top-left-radius
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="设置左上角圆角半径" tabindex="-1"><a class="header-anchor" href="#设置左上角圆角半径" aria-hidden="true">#</a> 设置左上角圆角半径：</h5><h5 id="_1-一个值是正圆半径" tabindex="-1"><a class="header-anchor" href="#_1-一个值是正圆半径" aria-hidden="true">#</a> 1. 一个值是正圆半径，</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>2. 两个值分别是椭圆的x半径、y半径。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>border-top-right-radius
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="设置右上角圆角半径" tabindex="-1"><a class="header-anchor" href="#设置右上角圆角半径" aria-hidden="true">#</a> 设置右上角圆角半径：</h5><h5 id="_1-一个值是正圆半径-1" tabindex="-1"><a class="header-anchor" href="#_1-一个值是正圆半径-1" aria-hidden="true">#</a> 1. 一个值是正圆半径，</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>2. 两个值分别是椭圆的x半径、y半径。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>border-bottom-right-radius
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="设置右下角圆角半径" tabindex="-1"><a class="header-anchor" href="#设置右下角圆角半径" aria-hidden="true">#</a> 设置右下角圆角半径：</h5><h5 id="_1-一个值是正圆半径-2" tabindex="-1"><a class="header-anchor" href="#_1-一个值是正圆半径-2" aria-hidden="true">#</a> 1. 一个值是正圆半径，</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>2. 两个值分别是椭圆的x半径、y半径。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>border-bottom-left-radius
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="设置左下角圆角半径" tabindex="-1"><a class="header-anchor" href="#设置左下角圆角半径" aria-hidden="true">#</a> 设置左下角圆角半径：</h5><h5 id="_1-一个值是正圆半径-3" tabindex="-1"><a class="header-anchor" href="#_1-一个值是正圆半径-3" aria-hidden="true">#</a> 1. 一个值是正圆半径，</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>2. 两个值分别是椭圆的x半径、y半径。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="分开设置每个角的圆角-几乎不用" tabindex="-1"><a class="header-anchor" href="#分开设置每个角的圆角-几乎不用" aria-hidden="true">#</a> 分开设置每个角的圆角（几乎不用）：</h5><h5 id="分开设置每个角的圆角-综合写法-几乎不用" tabindex="-1"><a class="header-anchor" href="#分开设置每个角的圆角-综合写法-几乎不用" aria-hidden="true">#</a> 分开设置每个角的圆角，综合写法（几乎不用）：</h5><h3 id="_6-2-边框外轮廓-了解" tabindex="-1"><a class="header-anchor" href="#_6-2-边框外轮廓-了解" aria-hidden="true">#</a> 6. 2 边框外轮廓（了解）</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>outline-width ：外轮廓的宽度。
outline-color ：外轮廓的颜色。
outline-style ：外轮廓的风格。
none： 无轮廓
dotted： 点状轮廓
dashed： 虚线轮廓
solid： 实线轮廓
double： 双线轮廓
outline-offset 设置外轮廓与边框的距离，正负值都可以设置。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>注意：outline-offset不是outline的子属性，是一个独立的属性。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>outline 复合属性
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>border-radius:10px;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>border-raidus: 左上角x 右上角x 右下角x 左下角x / 左上y 右上y 右下y 左下y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>outline:50px solid blue;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_7-css-3-新增文本属性" tabindex="-1"><a class="header-anchor" href="#_7-css-3-新增文本属性" aria-hidden="true">#</a> 7. CSS 3 新增文本属性</h2><h3 id="_7-1-文本阴影" tabindex="-1"><a class="header-anchor" href="#_7-1-文本阴影" aria-hidden="true">#</a> 7. 1 文本阴影</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在 CSS3 中，我们可以使用 text-shadow 属性给文本添加阴影。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="值-描述" tabindex="-1"><a class="header-anchor" href="#值-描述" aria-hidden="true">#</a> 值 描述</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>h-shadow 必需写，水平阴影的位置。允许负值。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>v-shadow 必需写，垂直阴影的位置。允许负值。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>blur 可选，模糊的距离。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>color 可选，阴影的颜色
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="语法-4" tabindex="-1"><a class="header-anchor" href="#语法-4" aria-hidden="true">#</a> 语法：</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>默认值：text-shadow:none 表示没有阴影。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_7-2-文本换行" tabindex="-1"><a class="header-anchor" href="#_7-2-文本换行" aria-hidden="true">#</a> 7. 2 文本换行</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在 CSS3 中，我们可以使用 white-space 属性设置文本换行方式。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="值-含义-2" tabindex="-1"><a class="header-anchor" href="#值-含义-2" aria-hidden="true">#</a> 值 含义</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>normal 文本超出边界自动换行，文本中的换行被浏览器识别为一个空格。（默认值）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pre 原样输出，与pre标签的效果相同。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pre-wrap 在pre效果的基础上，超出元素边界自动换行。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pre-line
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在pre效果的基础上，超出元素边界自动换行，且只识别文本中的换行，空格
会忽略。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nowrap 强制不换行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="常用值如下" tabindex="-1"><a class="header-anchor" href="#常用值如下" aria-hidden="true">#</a> 常用值如下：</h5><h3 id="_7-3-文本溢出" tabindex="-1"><a class="header-anchor" href="#_7-3-文本溢出" aria-hidden="true">#</a> 7. 3 文本溢出</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在 CSS3 中，我们可以使用 text-overflow 属性设置文本内容溢出时的呈现模式。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="值-含义-3" tabindex="-1"><a class="header-anchor" href="#值-含义-3" aria-hidden="true">#</a> 值 含义</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>clip 当内联内容溢出时，将溢出部分裁切掉。^ （默认值）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ellipsis 当内联内容溢出块容器时，将溢出部分替换为^ ...^ 。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="常用值如下-1" tabindex="-1"><a class="header-anchor" href="#常用值如下-1" aria-hidden="true">#</a> 常用值如下：</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>注意：要使得 text-overflow 属性生效，块容器必须显式定义 overflow 为非 visible
值， white-space 为 nowrap 值。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>text-shadow: h-shadow v-shadow blur color;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_7-4-文本修饰" tabindex="-1"><a class="header-anchor" href="#_7-4-文本修饰" aria-hidden="true">#</a> 7. 4 文本修饰</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CSS3升级了text-decoration属性，让其变成了复合属性。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="子属性及其含义" tabindex="-1"><a class="header-anchor" href="#子属性及其含义" aria-hidden="true">#</a> 子属性及其含义：</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>text-decoration-line 设置文本装饰线的位置
none： 指定文字无装饰 （默认值）
underline： 指定文字的装饰是下划线
overline： 指定文字的装饰是上划线
line-through： 指定文字的装饰是贯穿线
text-decoration-style 文本装饰线条的形状
solid： 实线 （默认）
double： 双线
dotted： 点状线条
dashed： 虚线
wavy： 波浪线
text-decoration-color 文本装饰线条的颜色
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-5-文本描边" tabindex="-1"><a class="header-anchor" href="#_7-5-文本描边" aria-hidden="true">#</a> 7. 5 文本描边</h3><p>注意：文字描边功能仅 webkit 内核浏览器支持。</p><ul><li>webkit-text-stroke-width：设置文字描边的宽度，写长度值。</li><li>webkit-text-stroke-color：设置文字描边的颜色，写颜色值。</li><li>webkit-text-stroke：复合属性，设置文字描边宽度和颜色。</li></ul><h2 id="_8-css-3-新增渐变" tabindex="-1"><a class="header-anchor" href="#_8-css-3-新增渐变" aria-hidden="true">#</a> 8. CSS 3 新增渐变</h2><h3 id="_8-1-线性渐变" tabindex="-1"><a class="header-anchor" href="#_8-1-线性渐变" aria-hidden="true">#</a> 8. 1 线性渐变</h3><h5 id="多个颜色之间的渐变-默认-从上到下-渐变。" tabindex="-1"><a class="header-anchor" href="#多个颜色之间的渐变-默认-从上到下-渐变。" aria-hidden="true">#</a> 多个颜色之间的渐变， 默认 从上到下 渐变。</h5><h5 id="使用关键词设置线性-渐变的方向-。" tabindex="-1"><a class="header-anchor" href="#使用关键词设置线性-渐变的方向-。" aria-hidden="true">#</a> 使用关键词设置线性 渐变的方向 。</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>text-decoration: text-decoration-line || text-decoration-style || text-decoration-
color
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>background-image: linear-gradient(red,yellow,green);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="使用角度设置线性-渐变的方向-。" tabindex="-1"><a class="header-anchor" href="#使用角度设置线性-渐变的方向-。" aria-hidden="true">#</a> 使用角度设置线性 渐变的方向 。</h5><h5 id="调整开始-渐变的位置-。" tabindex="-1"><a class="header-anchor" href="#调整开始-渐变的位置-。" aria-hidden="true">#</a> 调整开始 渐变的位置 。</h5><h3 id="_8-2-径向渐变" tabindex="-1"><a class="header-anchor" href="#_8-2-径向渐变" aria-hidden="true">#</a> 8. 2 径向渐变</h3><h5 id="多个颜色之间的渐变-默认从圆心四散。-注意-不一定是正圆-要看容器本身宽高比" tabindex="-1"><a class="header-anchor" href="#多个颜色之间的渐变-默认从圆心四散。-注意-不一定是正圆-要看容器本身宽高比" aria-hidden="true">#</a> 多个颜色之间的渐变， 默认从圆心四散。（注意：不一定是正圆，要看容器本身宽高比）</h5><h5 id="使用关键词调整渐变圆的圆心位置。" tabindex="-1"><a class="header-anchor" href="#使用关键词调整渐变圆的圆心位置。" aria-hidden="true">#</a> 使用关键词调整渐变圆的圆心位置。</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>background-image: linear-gradient(to top,red,yellow,green);
background-image: linear-gradient(to right top,red,yellow,green);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>background-image: linear-gradient(30deg,red,yellow,green);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>background-image: linear-gradient(red 50px,yellow 100px ,green 150px);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>background-image: radial-gradient(red,yellow,green);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="使用像素值调整渐变圆的圆心位置。" tabindex="-1"><a class="header-anchor" href="#使用像素值调整渐变圆的圆心位置。" aria-hidden="true">#</a> 使用像素值调整渐变圆的圆心位置。</h5><h5 id="调整渐变形状为正圆-。" tabindex="-1"><a class="header-anchor" href="#调整渐变形状为正圆-。" aria-hidden="true">#</a> 调整渐变形状为正圆 。</h5><h5 id="调整形状的半径-。" tabindex="-1"><a class="header-anchor" href="#调整形状的半径-。" aria-hidden="true">#</a> 调整形状的半径 。</h5><h5 id="调整开始渐变的位置。" tabindex="-1"><a class="header-anchor" href="#调整开始渐变的位置。" aria-hidden="true">#</a> 调整开始渐变的位置。</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>background-image: radial-gradient(at right top,red,yellow,green);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>background-image: radial-gradient(at 100px 50px,red,yellow,green);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>background-image: radial-gradient(circle,red,yellow,green);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>background-image: radial-gradient(100px,red,yellow,green);
background-image: radial-gradient(50px 100px,red,yellow,green);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>background-image: radial-gradient(red 50px,yellow 100px,green 150px);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_8-3-重复渐变" tabindex="-1"><a class="header-anchor" href="#_8-3-重复渐变" aria-hidden="true">#</a> 8.3 重复渐变</h3><h5 id="无论线性渐变-还是径向渐变-在没有发生渐变的位置-继续进行渐变-就为重复渐变。" tabindex="-1"><a class="header-anchor" href="#无论线性渐变-还是径向渐变-在没有发生渐变的位置-继续进行渐变-就为重复渐变。" aria-hidden="true">#</a> 无论线性渐变，还是径向渐变，在没有发生渐变的位置，继续进行渐变，就为重复渐变。</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>使用repeating-linear-gradient进行重复线性渐变，具体参数同linear-gradient。
使用repeating-radial-gradient进行重复径向渐变，具体参数同radial-gradient。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>我们可以利用渐变，做出很多有意思的效果：例如：横格纸、立体球等等。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_9-web-字体" tabindex="-1"><a class="header-anchor" href="#_9-web-字体" aria-hidden="true">#</a> 9. web 字体</h2><h3 id="_9-1-基本用法" tabindex="-1"><a class="header-anchor" href="#_9-1-基本用法" aria-hidden="true">#</a> 9.1 基本用法</h3><p>可以通过@font-face指定字体的具体地址，浏览器会自动下载该字体，这样就不依赖用户电脑上的字<br> 体了。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>语法（简写方式）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="语法-高兼容性写法" tabindex="-1"><a class="header-anchor" href="#语法-高兼容性写法" aria-hidden="true">#</a> 语法（高兼容性写法）</h5><h3 id="_9-2-定制字体" tabindex="-1"><a class="header-anchor" href="#_9-2-定制字体" aria-hidden="true">#</a> 9.2 定制字体</h3><h5 id="中文的字体文件很大-使用完整的字体文件不现实-通常针对某几个文字进行单独定制。" tabindex="-1"><a class="header-anchor" href="#中文的字体文件很大-使用完整的字体文件不现实-通常针对某几个文字进行单独定制。" aria-hidden="true">#</a> 中文的字体文件很大，使用完整的字体文件不现实，通常针对某几个文字进行单独定制。</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>可使用阿里Web字体定制工具： https://www.iconfont.cn/webfont
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_9-3-字体图标" tabindex="-1"><a class="header-anchor" href="#_9-3-字体图标" aria-hidden="true">#</a> 9.3 字体图标</h3><h5 id="相比图片更加清晰。" tabindex="-1"><a class="header-anchor" href="#相比图片更加清晰。" aria-hidden="true">#</a> 相比图片更加清晰。</h5><h5 id="灵活性高-更方便改变大小、颜色、风格等。" tabindex="-1"><a class="header-anchor" href="#灵活性高-更方便改变大小、颜色、风格等。" aria-hidden="true">#</a> 灵活性高，更方便改变大小、颜色、风格等。</h5><h5 id="兼容性好-ie也能支持。" tabindex="-1"><a class="header-anchor" href="#兼容性好-ie也能支持。" aria-hidden="true">#</a> 兼容性好，IE也能支持。</h5><h5 id="字体图标的具体使用方式-每个平台不尽相同-最好参考平台使用指南-视频中我们是以使用最多" tabindex="-1"><a class="header-anchor" href="#字体图标的具体使用方式-每个平台不尽相同-最好参考平台使用指南-视频中我们是以使用最多" aria-hidden="true">#</a> 字体图标的具体使用方式，每个平台不尽相同，最好参考平台使用指南，视频中我们是以使用最多</h5><h5 id="的阿里图标库作为演示。" tabindex="-1"><a class="header-anchor" href="#的阿里图标库作为演示。" aria-hidden="true">#</a> 的阿里图标库作为演示。</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>阿里图标官网地址： https://www.iconfont.cn/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@font-face {
font-family: &quot;情书字体&quot;;
src: url(&#39;./方正手迹.ttf&#39;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@font-face {
font-family: &quot;atguigu&quot;;
font-display: swap;
src: url(&#39;webfont.eot&#39;); /* IE9 */
src: url(&#39;webfont.eot?#iefix&#39;) format(&#39;embedded-opentype&#39;), /* IE6-IE8 */
url(&#39;webfont.woff2&#39;) format(&#39;woff2&#39;),
url(&#39;webfont.woff&#39;) format(&#39;woff&#39;), /* chrome、firefox */
url(&#39;webfont.ttf&#39;) format(&#39;truetype&#39;), /* chrome、firefox、opera、Safari,
Android*/
url(&#39;webfont.svg#webfont&#39;) format(&#39;svg&#39;); /* iOS 4.1- */
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-2-d变换" tabindex="-1"><a class="header-anchor" href="#_10-2-d变换" aria-hidden="true">#</a> 10. 2 D变换</h2><h5 id="前提-二维坐标系如下图所示" tabindex="-1"><a class="header-anchor" href="#前提-二维坐标系如下图所示" aria-hidden="true">#</a> 前提：二维坐标系如下图所示</h5><h3 id="_10-1-2-d位移" tabindex="-1"><a class="header-anchor" href="#_10-1-2-d位移" aria-hidden="true">#</a> 10. 1. 2 D位移</h3><h5 id="_2d位移可以改变元素的位置-具体使用方式如下" tabindex="-1"><a class="header-anchor" href="#_2d位移可以改变元素的位置-具体使用方式如下" aria-hidden="true">#</a> 2D位移可以改变元素的位置，具体使用方式如下：</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. 先给元素添加 转换属性 transform
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="值-含义-4" tabindex="-1"><a class="header-anchor" href="#值-含义-4" aria-hidden="true">#</a> 值 含义</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>translateX 设置水平方向位移，需指定长度值；若指定的是百分比，是参考自身宽度
的百分比。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>translateY
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="设置垂直方向位移-需指定长度值-若指定的是百分比-是参考自身高度" tabindex="-1"><a class="header-anchor" href="#设置垂直方向位移-需指定长度值-若指定的是百分比-是参考自身高度" aria-hidden="true">#</a> 设置垂直方向位移，需指定长度值；若指定的是百分比，是参考自身高度</h5><h5 id="的百分比。" tabindex="-1"><a class="header-anchor" href="#的百分比。" aria-hidden="true">#</a> 的百分比。</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>translate 一个值代表水平方向，两个值代表：水平和垂直方向。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>2. 编写transform的具体值，相关可选值如下：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_3-注意点" tabindex="-1"><a class="header-anchor" href="#_3-注意点" aria-hidden="true">#</a> 3. 注意点：</h5><h5 id="_1-位移与相对定位很相似-都不脱离文档流-不会影响到其它元素。" tabindex="-1"><a class="header-anchor" href="#_1-位移与相对定位很相似-都不脱离文档流-不会影响到其它元素。" aria-hidden="true">#</a> 1. 位移与相对定位很相似，都不脱离文档流，不会影响到其它元素。</h5><h5 id="_2-与相对定位的区别-相对定位的百分比值-参考的是其父元素-定位的百分比值-参考的是" tabindex="-1"><a class="header-anchor" href="#_2-与相对定位的区别-相对定位的百分比值-参考的是其父元素-定位的百分比值-参考的是" aria-hidden="true">#</a> 2. 与相对定位的区别：相对定位的百分比值，参考的是其父元素；定位的百分比值，参考的是</h5><h5 id="其自身。" tabindex="-1"><a class="header-anchor" href="#其自身。" aria-hidden="true">#</a> 其自身。</h5><h5 id="_3-浏览器针对位移有优化-与定位相比-浏览器处理位移的效率更高。" tabindex="-1"><a class="header-anchor" href="#_3-浏览器针对位移有优化-与定位相比-浏览器处理位移的效率更高。" aria-hidden="true">#</a> 3. 浏览器针对位移有优化，与定位相比，浏览器处理位移的效率更高。</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>4. transform可以链式编写，例如：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_5-位移对行内元素无效。" tabindex="-1"><a class="header-anchor" href="#_5-位移对行内元素无效。" aria-hidden="true">#</a> 5. 位移对行内元素无效。</h5><h5 id="_6-位移配合定位-可实现元素水平垂直居中" tabindex="-1"><a class="header-anchor" href="#_6-位移配合定位-可实现元素水平垂直居中" aria-hidden="true">#</a> 6. 位移配合定位，可实现元素水平垂直居中</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>transform: translateX(30px) translateY(40px);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_10-2-2-d缩放" tabindex="-1"><a class="header-anchor" href="#_10-2-2-d缩放" aria-hidden="true">#</a> 10. 2. 2 D缩放</h3><h5 id="_2d缩放是指-让元素放大或缩小-具体使用方式如下" tabindex="-1"><a class="header-anchor" href="#_2d缩放是指-让元素放大或缩小-具体使用方式如下" aria-hidden="true">#</a> 2D缩放是指：让元素放大或缩小，具体使用方式如下：</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. 先给元素添加 转换属性 transform
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="值-含义-5" tabindex="-1"><a class="header-anchor" href="#值-含义-5" aria-hidden="true">#</a> 值 含义</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>scaleX
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="设置水平方向的缩放比例-值为一个数字-1-表示不缩放-大于-1-放大-小" tabindex="-1"><a class="header-anchor" href="#设置水平方向的缩放比例-值为一个数字-1-表示不缩放-大于-1-放大-小" aria-hidden="true">#</a> 设置水平方向的缩放比例，值为一个数字， 1 表示不缩放，大于 1 放大，小</h5><h5 id="于-1-缩小。" tabindex="-1"><a class="header-anchor" href="#于-1-缩小。" aria-hidden="true">#</a> 于 1 缩小。</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>scaleY 设置垂直方向的缩放比例，值为一个数字，^1 表示不缩放，大于^1 放大，小
于 1 缩小。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>scale
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="同时设置水平方向、垂直方向的缩放比例-一个值代表同时设置水平和垂直缩" tabindex="-1"><a class="header-anchor" href="#同时设置水平方向、垂直方向的缩放比例-一个值代表同时设置水平和垂直缩" aria-hidden="true">#</a> 同时设置水平方向、垂直方向的缩放比例，一个值代表同时设置水平和垂直缩</h5><h5 id="放-两个值分别代表-水平缩放、垂直缩放。" tabindex="-1"><a class="header-anchor" href="#放-两个值分别代表-水平缩放、垂直缩放。" aria-hidden="true">#</a> 放；两个值分别代表：水平缩放、垂直缩放。</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>2. 编写transform的具体值，相关可选值如下：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_3-注意点-1" tabindex="-1"><a class="header-anchor" href="#_3-注意点-1" aria-hidden="true">#</a> 3. 注意点：</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. scale的值，是支持写负数的，但几乎不用，因为容易让人产生误解。
2. 借助缩放，可实现小于12px的文字。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-3-2-d旋转" tabindex="-1"><a class="header-anchor" href="#_10-3-2-d旋转" aria-hidden="true">#</a> 10. 3. 2 D旋转</h3><h5 id="_2d旋转是指-让元素在二维平面内-顺时针旋转或逆时针旋转-具体使用方式如下" tabindex="-1"><a class="header-anchor" href="#_2d旋转是指-让元素在二维平面内-顺时针旋转或逆时针旋转-具体使用方式如下" aria-hidden="true">#</a> 2D旋转是指：让元素在二维平面内，顺时针旋转或逆时针旋转，具体使用方式如下：</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. 先给元素添加 转换属性 transform
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="值-含义-6" tabindex="-1"><a class="header-anchor" href="#值-含义-6" aria-hidden="true">#</a> 值 含义</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rotate 设置旋转角度，需指定一个角度值(deg)，正值顺时针，负值逆时针。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>2. 编写transform的具体值，相关可选值如下：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>注意：rotateZ(20deg) 相当于 rotate(20deg)，当然到了3D变换的时候，还能写：
rotate(x,x,x)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.box {
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-4-2-d扭曲-了解" tabindex="-1"><a class="header-anchor" href="#_10-4-2-d扭曲-了解" aria-hidden="true">#</a> 10. 4. 2 D扭曲（了解）</h3><h5 id="_2d扭曲是指-让元素在二维平面内被-拉扯-进而-走形-实际开发几乎不用-了解即可-具体使用方" tabindex="-1"><a class="header-anchor" href="#_2d扭曲是指-让元素在二维平面内被-拉扯-进而-走形-实际开发几乎不用-了解即可-具体使用方" aria-hidden="true">#</a> 2D扭曲是指：让元素在二维平面内被“拉扯”，进而“走形”，实际开发几乎不用，了解即可，具体使用方</h5><h5 id="式如下" tabindex="-1"><a class="header-anchor" href="#式如下" aria-hidden="true">#</a> 式如下：</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. 先给元素添加 转换属性 transform
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="值-含义-7" tabindex="-1"><a class="header-anchor" href="#值-含义-7" aria-hidden="true">#</a> 值 含义</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>skewX 设置元素在水平方向扭曲，值为角度值，会将元素的左上角、右下角拉扯。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>skewY 设置元素在垂直方向扭曲，值为角度值，会将元素的左上角、右下角拉扯。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>skew 一个值代表skewX，两个值分别代表：skewX、skewY
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>2. 编写transform的具体值，相关可选值如下：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_10-5-多重变换" tabindex="-1"><a class="header-anchor" href="#_10-5-多重变换" aria-hidden="true">#</a> 10. 5. 多重变换</h3><p>多个变换，可以同时使用一个transform来编写。</p><h5 id="注意点-多重变换时-建议最后旋转。" tabindex="-1"><a class="header-anchor" href="#注意点-多重变换时-建议最后旋转。" aria-hidden="true">#</a> 注意点：多重变换时，建议最后旋转。</h5><h3 id="_10-6-变换原点" tabindex="-1"><a class="header-anchor" href="#_10-6-变换原点" aria-hidden="true">#</a> 10. 6. 变换原点</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>元素变换时，默认的原点是元素的中心，使用transform-origin可以设置变换的原点。
修改变换原点对位移没有影响， 对旋转和缩放会产生影响。
如果提供两个值，第一个用于横坐标，第二个用于纵坐标。
如果只提供一个，若是像素值，表示横坐标，纵坐标取50%；若是关键词，则另一个坐标取50%
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. transform-origin: 50% 50%， 变换原点在元素的中心位置，百分比是相对于自
身。—— 默认值
2. transform-origin: left top，变换原点在元素的左上角 。
3. transform-origin: 50px 50px， 变换原点距离元素左上角 50px 50px 的位置。
4. transform-origin: 0，只写一个值的时候，第二个值默认为 50%。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-3-d变换" tabindex="-1"><a class="header-anchor" href="#_11-3-d变换" aria-hidden="true">#</a> 11. 3 D变换</h2><h3 id="_11-1-开启-3-d空间" tabindex="-1"><a class="header-anchor" href="#_11-1-开启-3-d空间" aria-hidden="true">#</a> 11. 1. 开启 3 D空间</h3><h5 id="重要原则-元素进行3d变换的首要操作-父元素-必须开启3d空间" tabindex="-1"><a class="header-anchor" href="#重要原则-元素进行3d变换的首要操作-父元素-必须开启3d空间" aria-hidden="true">#</a> 重要原则：元素进行3D变换的首要操作： 父元素 必须开启3D空间！</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>使用transform-style开启3D空间，可选值如下：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>flat： 让子元素位于此元素的二维平面内（2D空间）—— 默认值
preserve-3d： 让子元素位于此元素的三维空间内（3D空间）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>transform: translate(-50%, -50%) rotate(45deg);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_11-2-设置景深" tabindex="-1"><a class="header-anchor" href="#_11-2-设置景深" aria-hidden="true">#</a> 11. 2. 设置景深</h3><p>何为景深？—— 指定观察者与z=0平面的距离，能让发生3D变换的元素，产生透视效果，看来更加立<br> 体。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>使用perspective设置景深，可选值如下：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>none： 不指定透视 ——（默认值）
长度值 ： 指定观察者距离z=0平面的距离，不允许负值。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>注意：perspective设置给发生3D变换元素的父元素！
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_11-3-透视点位置" tabindex="-1"><a class="header-anchor" href="#_11-3-透视点位置" aria-hidden="true">#</a> 11. 3. 透视点位置</h3><h5 id="所谓透视点位置-就是观察者位置-默认的透视点在元素的中心。" tabindex="-1"><a class="header-anchor" href="#所谓透视点位置-就是观察者位置-默认的透视点在元素的中心。" aria-hidden="true">#</a> 所谓透视点位置，就是观察者位置；默认的透视点在元素的中心。</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>使用perspective-origin设置观察者位置（透视点的位置），例如：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="注意-通常情况下-我们不需要调整透视点位置。" tabindex="-1"><a class="header-anchor" href="#注意-通常情况下-我们不需要调整透视点位置。" aria-hidden="true">#</a> 注意：通常情况下，我们不需要调整透视点位置。</h5><h3 id="_11-4-3-d-位移" tabindex="-1"><a class="header-anchor" href="#_11-4-3-d-位移" aria-hidden="true">#</a> 11. 4. 3 D 位移</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>3D位移是在2D位移的基础上，可以让元素沿z轴位移，具体使用方式如下：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. 先给元素添加 转换属性 transform
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="值-含义-8" tabindex="-1"><a class="header-anchor" href="#值-含义-8" aria-hidden="true">#</a> 值 含义</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>translateZ
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>设置z轴位移，需指定长度值，正值向屏幕外，负值向屏幕里，且不能
写百分比。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>translate3d 第^1 个参数对应x轴，第^2 个参数对应y轴，第^3 个参数对应z轴，且均
不能省略。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>2. 编写transform的具体值，3D相关可选值如下：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_11-5-3-d-旋转" tabindex="-1"><a class="header-anchor" href="#_11-5-3-d-旋转" aria-hidden="true">#</a> 11. 5. 3 D 旋转</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>3D旋转是在2D旋转的基础上，可以让元素沿x轴和y轴旋转，具体使用方式如下：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. 先给元素添加 转换属性 transform
2. 编写transform的具体值，3D相关可选值如下：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/* 相对坐标轴往右偏移400px， 往下偏移300px（相当于人蹲下 300 像素，然后向右移动 400 像素看元素）
*/
perspective-origin: 400px 300px;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="值-含义-9" tabindex="-1"><a class="header-anchor" href="#值-含义-9" aria-hidden="true">#</a> 值 含义</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rotateX
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>设置x轴旋转角度，需指定一个角度值(deg)，面对x轴正方向：正值顺时针，负
值逆时针。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rotateY 设置y轴旋转角度，需指定一个角度值(deg)，面对y轴正方向：正值顺时针，负
值逆时针。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rotate3d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>前 3 个参数分别表示坐标轴：x,y,z，第 4 个参数表示旋转的角度，参数不允
许省略。
例如：transform: rotate3d(1,1,1,30deg)，意思是：x、y、z分别旋转
30 度。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-6-3-d-缩放" tabindex="-1"><a class="header-anchor" href="#_11-6-3-d-缩放" aria-hidden="true">#</a> 11. 6. 3 D 缩放</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>3D缩放是在2D缩放的基础上，可以让元素沿z轴缩放，具体使用方式如下：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. 先给元素添加 转换属性 transform
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="值-含义-10" tabindex="-1"><a class="header-anchor" href="#值-含义-10" aria-hidden="true">#</a> 值 含义</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>scaleZ
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>设置z轴方向的缩放比例，值为一个数字， 1 表示不缩放，大于 1 放大，小
于 1 缩小。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>scale3d 第^1 个参数对应x轴，第^2 个参数对应y轴，第^3 个参数对应z轴，参数不允许
省略。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>2. 编写transform的具体值，3D相关可选值如下：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_11-7-多重变换" tabindex="-1"><a class="header-anchor" href="#_11-7-多重变换" aria-hidden="true">#</a> 11. 7. 多重变换</h3><p>多个变换，可以同时使用一个transform来编写。</p><h5 id="注意点-多重变换时-建议最后旋转。-1" tabindex="-1"><a class="header-anchor" href="#注意点-多重变换时-建议最后旋转。-1" aria-hidden="true">#</a> 注意点：多重变换时，建议最后旋转。</h5><h3 id="_11-8-背部可见性" tabindex="-1"><a class="header-anchor" href="#_11-8-背部可见性" aria-hidden="true">#</a> 11. 8. 背部可见性</h3><p>使用backface-visibility指定元素背面，在面向用户时是否可见，常用值如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>visible： 指定元素背面可见，允许显示正面的镜像。—— 默认值
hidden： 指定元素背面不可见
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>注意：backface-visibility需要加在发生3D变换元素的自身上。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_12-过渡" tabindex="-1"><a class="header-anchor" href="#_12-过渡" aria-hidden="true">#</a> 12. 过渡</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>transform: translateZ(100px) scaleZ( 3 ) rotateY(40deg);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>过渡可以在不使用 Flash 动画，不使用 JavaScript 的情况下，让元素从一种样式，平滑过渡为另一<br> 种样式。</p><h3 id="_12-1-transition-property" tabindex="-1"><a class="header-anchor" href="#_12-1-transition-property" aria-hidden="true">#</a> 12.1. transition-property</h3><h5 id="作用-定义哪个属性需要过渡-只有在该属性中定义的属性-比如宽、高、颜色等-才会以有过渡" tabindex="-1"><a class="header-anchor" href="#作用-定义哪个属性需要过渡-只有在该属性中定义的属性-比如宽、高、颜色等-才会以有过渡" aria-hidden="true">#</a> 作用：定义哪个属性需要过渡，只有在该属性中定义的属性（比如宽、高、颜色等）才会以有过渡</h5><h5 id="效果。" tabindex="-1"><a class="header-anchor" href="#效果。" aria-hidden="true">#</a> 效果。</h5><h5 id="常用值" tabindex="-1"><a class="header-anchor" href="#常用值" aria-hidden="true">#</a> 常用值：</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. none：不过渡任何属性。
2. all：过渡所有能过渡的属性。
3. 具体某个属性名，例如：width、heigth，若有多个以逗号分隔。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="不是所有的属性都能过渡-值为数字-或者值能转为数字的属性-都支持过渡-否则不支持" tabindex="-1"><a class="header-anchor" href="#不是所有的属性都能过渡-值为数字-或者值能转为数字的属性-都支持过渡-否则不支持" aria-hidden="true">#</a> 不是所有的属性都能过渡，值为数字，或者值能转为数字的属性，都支持过渡，否则不支持</h5><h5 id="过渡。" tabindex="-1"><a class="header-anchor" href="#过渡。" aria-hidden="true">#</a> 过渡。</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>常见的支持过渡的属性有：颜色、长度值、百分比、z-index、opacity、2D变换属
性、3D变换属性、阴影。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_12-2-transition-duration" tabindex="-1"><a class="header-anchor" href="#_12-2-transition-duration" aria-hidden="true">#</a> 12.2. transition-duration</h3><h5 id="作用-设置过渡的持续时间-即-一个状态过渡到另外一个状态耗时多久。" tabindex="-1"><a class="header-anchor" href="#作用-设置过渡的持续时间-即-一个状态过渡到另外一个状态耗时多久。" aria-hidden="true">#</a> 作用：设置过渡的持续时间，即：一个状态过渡到另外一个状态耗时多久。</h5><h5 id="常用值-1" tabindex="-1"><a class="header-anchor" href="#常用值-1" aria-hidden="true">#</a> 常用值：</h5><h5 id="_1-0-没有任何过渡时间-——-默认值。" tabindex="-1"><a class="header-anchor" href="#_1-0-没有任何过渡时间-——-默认值。" aria-hidden="true">#</a> 1. 0 ：没有任何过渡时间 —— 默认值。</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>2. s或ms：秒或毫秒。
3. 列表：
如果想让所有属性都持续一个时间，那就写一个值。
如果想让每个属性持续不同的时间那就写一个时间的列表。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_12-3-transition-delay" tabindex="-1"><a class="header-anchor" href="#_12-3-transition-delay" aria-hidden="true">#</a> 12.3. transition-delay</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>作用：指定开始过渡的延迟时间，单位：s或ms
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_12-4-transition-timing-function" tabindex="-1"><a class="header-anchor" href="#_12-4-transition-timing-function" aria-hidden="true">#</a> 12.4. transition-timing-function</h3><h5 id="作用-设置过渡的类型" tabindex="-1"><a class="header-anchor" href="#作用-设置过渡的类型" aria-hidden="true">#</a> 作用：设置过渡的类型</h5><h5 id="常用值-2" tabindex="-1"><a class="header-anchor" href="#常用值-2" aria-hidden="true">#</a> 常用值：</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. ease： 平滑过渡 —— 默认值
2. linear： 线性过渡
3. ease-in： 慢 → 快
4. ease-out： 快 → 慢
5. ease-in-out： 慢 → 快 → 慢
6. step-start： 等同于 steps(1, start)
7. step-end： 等同于 steps(1, end)
8. steps( integer,?)： 接受两个参数的步进函数。第一个参数必须为正整数，指定函数的
步数。第二个参数取值可以是start或end，指定每一步的值发生变化的时间点。第二个
参数默认值为end。
9. cubic-bezie( number, number, number, number)： 特定的贝塞尔曲线类型。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在线制作贝赛尔曲线： https://cubic-bezier.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_12-5-transition-复合属性" tabindex="-1"><a class="header-anchor" href="#_12-5-transition-复合属性" aria-hidden="true">#</a> 12. 5. transition 复合属性</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>如果设置了一个时间，表示duration；如果设置了两个时间，第一是duration，第二个是
delay；其他值没有顺序要求。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_13-动画" tabindex="-1"><a class="header-anchor" href="#_13-动画" aria-hidden="true">#</a> 13. 动画</h2><h3 id="_13-1-什么是帧" tabindex="-1"><a class="header-anchor" href="#_13-1-什么是帧" aria-hidden="true">#</a> 13. 1. 什么是帧</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>一段动画，就是一段时间内连续播放n个画面。每一张画面，我们管它叫做“帧”。一定时间内连续
快速播放若干个帧，就成了人眼中所看到的动画。同样时间内，播放的帧数越多，画面看起来越流
畅。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_13-2-什么是关键帧" tabindex="-1"><a class="header-anchor" href="#_13-2-什么是关键帧" aria-hidden="true">#</a> 13. 2. 什么是关键帧</h3><h5 id="关键帧指的是-在构成一段动画的若干帧中-起到决定性作用的-2-3-帧。" tabindex="-1"><a class="header-anchor" href="#关键帧指的是-在构成一段动画的若干帧中-起到决定性作用的-2-3-帧。" aria-hidden="true">#</a> 关键帧指的是，在构成一段动画的若干帧中，起到决定性作用的 2 - 3 帧。</h5><h3 id="_13-3-动画的基本使用" tabindex="-1"><a class="header-anchor" href="#_13-3-动画的基本使用" aria-hidden="true">#</a> 13. 3. 动画的基本使用</h3><h5 id="第一步-定义关键帧-定义动画" tabindex="-1"><a class="header-anchor" href="#第一步-定义关键帧-定义动画" aria-hidden="true">#</a> 第一步：定义关键帧（定义动画）</h5><h5 id="_1-简单方式定义" tabindex="-1"><a class="header-anchor" href="#_1-简单方式定义" aria-hidden="true">#</a> 1. 简单方式定义：</h5><h5 id="_2-完整方式定义" tabindex="-1"><a class="header-anchor" href="#_2-完整方式定义" aria-hidden="true">#</a> 2. 完整方式定义：</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>transition:1s 1s linear all;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/*写法一*/
@keyframes 动画名 {
from {
/*property1:value1*/
/*property2:value2*/
}
to {
/*property1:value1*/
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="第二步-给元素应用动画-用到的属性如下" tabindex="-1"><a class="header-anchor" href="#第二步-给元素应用动画-用到的属性如下" aria-hidden="true">#</a> 第二步：给元素应用动画，用到的属性如下：</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. animation-name：给元素指定具体的动画（具体的关键帧）
2. animation-duration：设置动画所需时间
3. animation-delay：设置动画延迟
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-动画的其他属性" tabindex="-1"><a class="header-anchor" href="#_4-动画的其他属性" aria-hidden="true">#</a> 4. 动画的其他属性</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>animation-timing-function，设置动画的类型，常用值如下：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. ease： 平滑动画 —— 默认值
2. linear： 线性过渡
3. ease-in： 慢 → 快
4. ease-out： 快 → 慢
5. ease-in-out： 慢 → 快 → 慢
6. step-start： 等同于 steps(1, start)
7. step-end： 等同于 steps(1, end)
8. steps( integer,?)： 接受两个参数的步进函数。第一个参数必须为正整数，指定
函数的步数。第二个参数取值可以是start或end，指定每一步的值发生变化的时间
点。第二个参数默认值为end。
9. cubic-bezie( number, number, number, number)： 特定的贝塞尔曲线类型。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>animation-iteration-count，指定动画的播放次数，常用值如下：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@keyframes 动画名 {
0% {
/*property1:value1*/
}
20% {
/*property1:value1*/
}
40% {
/*property1:value1*/
}
60% {
/*property1:value1*/
}
80% {
/*property1:value1*/
}
100% {
/*property1:value1*/
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.box {
/* 指定动画 */
animation-name: testKey;
/* 设置动画所需时间 */
animation-duration: 5s;
/* 设置动画延迟 */
animation-delay: 0.5s;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. number：动画循环次数
2. infinite： 无限循环
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>animation-direction，指定动画方向，常用值如下：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. normal： 正常方向 (默认)
2. reverse： 反方向运行
3. alternate： 动画先正常运行再反方向运行，并持续交替运行
4. alternate-reverse： 动画先反运行再正方向运行，并持续交替运行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>animation-fill-mode，设置动画之外的状态
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. forwards： 设置对象状态为动画结束时的状态
2. backwards： 设置对象状态为动画开始时的状态
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>animation-play-state，设置动画的播放状态，常用值如下：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. running： 运动 (默认)
2. paused： 暂停
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-动画复合属性" tabindex="-1"><a class="header-anchor" href="#_5-动画复合属性" aria-hidden="true">#</a> 5. 动画复合属性</h3><p>只设置一个时间表示duration，设置两个时间分别是： duration和 delay，其他属性没有数量和<br> 顺序要求。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>备注：animation-play-state一般单独使用。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_14-多列布局" tabindex="-1"><a class="header-anchor" href="#_14-多列布局" aria-hidden="true">#</a> 14. 多列布局</h2><h5 id="作用-专门用于实现类似于报纸的布局。" tabindex="-1"><a class="header-anchor" href="#作用-专门用于实现类似于报纸的布局。" aria-hidden="true">#</a> 作用：专门用于实现类似于报纸的布局。</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.inner {
animation: atguigu 3s 0.5s linear 2 alternate-reverse forwards;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="常用属性如下" tabindex="-1"><a class="header-anchor" href="#常用属性如下" aria-hidden="true">#</a> 常用属性如下：</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>column-count ：指定列数，值是数字。
column-width ：指定列宽，值是长度。
columns ：同时指定列宽和列数，复合属性；值没有数量和顺序要求。
column-gap ：设置列边距，值是长度。
column-rule-style ：设置列与列之间边框的风格，值与 border-style 一致。
column-rule-width ：设置列与列之间边框的宽度，值是长度。
column-rule-color ：设置列与列之间边框的颜色。
coumn-rule ：设置列边框，复合属性。
column-span 指定是否跨列；值: none、all。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_15-伸缩盒模型" tabindex="-1"><a class="header-anchor" href="#_15-伸缩盒模型" aria-hidden="true">#</a> 15 .伸缩盒模型</h2><h3 id="_1-伸缩盒模型简介" tabindex="-1"><a class="header-anchor" href="#_1-伸缩盒模型简介" aria-hidden="true">#</a> 1. 伸缩盒模型简介</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>2009 年，W3C 提出了一种新的盒子模型 —— Flexible Box （伸缩盒模型，又称：弹性盒
子）。
它可以轻松的控制：元素分布方式、元素对齐方式、元素视觉顺序 .......
截止目前，除了在部分IE浏览器不支持，其他浏览器均已全部支持。
伸缩盒模型的出现，逐渐演变出了一套新的布局方案 —— flex布局。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>小贴士：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. 传统布局是指：基于传统盒状模型，主要靠： display 属性 + position 属性 + float
属性。
2. flex布局目前在移动端应用比较广泛，因为传统布局不能很好的呈现在移动设备上。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-伸缩容器、伸缩项目" tabindex="-1"><a class="header-anchor" href="#_2-伸缩容器、伸缩项目" aria-hidden="true">#</a> 2. 伸缩容器、伸缩项目</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>伸缩容器 ： 开启了 flex 的元素，就是：伸缩容器。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. 给元素设置： display:flex 或 display:inline-flex，该元素就变为了伸缩容
器。
2. display:inline-flex很少使用，因为可以给多个伸缩容器的父容器，也设置为伸缩
容器。
3. 一个元素可以同时是：伸缩容器、伸缩项目。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="伸缩项目-伸缩容器所有-子元素-自动成为了-伸缩项目。" tabindex="-1"><a class="header-anchor" href="#伸缩项目-伸缩容器所有-子元素-自动成为了-伸缩项目。" aria-hidden="true">#</a> 伸缩项目 ：伸缩容器所有 子元素 自动成为了：伸缩项目。</h5><h5 id="_1-仅伸缩容器的-子元素-成为了伸缩项目-孙子元素、重孙子元素等后代-不是伸缩项" tabindex="-1"><a class="header-anchor" href="#_1-仅伸缩容器的-子元素-成为了伸缩项目-孙子元素、重孙子元素等后代-不是伸缩项" aria-hidden="true">#</a> 1. 仅伸缩容器的 子元素 成为了伸缩项目，孙子元素、重孙子元素等后代，不是伸缩项</h5><h5 id="目。" tabindex="-1"><a class="header-anchor" href="#目。" aria-hidden="true">#</a> 目。</h5><h5 id="_2-无论原来是哪种元素-块、行内块、行内-一旦成为了伸缩项目-全都会-块状化-。" tabindex="-1"><a class="header-anchor" href="#_2-无论原来是哪种元素-块、行内块、行内-一旦成为了伸缩项目-全都会-块状化-。" aria-hidden="true">#</a> 2. 无论原来是哪种元素（块、行内块、行内），一旦成为了伸缩项目，全都会“块状化”。</h5><h3 id="_3-主轴与侧轴" tabindex="-1"><a class="header-anchor" href="#_3-主轴与侧轴" aria-hidden="true">#</a> 3. 主轴与侧轴</h3><h5 id="主轴-伸缩项目沿着主轴排列-主轴默认是水平的-默认方向是-从左到右-左边是起点-右边" tabindex="-1"><a class="header-anchor" href="#主轴-伸缩项目沿着主轴排列-主轴默认是水平的-默认方向是-从左到右-左边是起点-右边" aria-hidden="true">#</a> 主轴： 伸缩项目沿着主轴排列，主轴默认是水平的，默认方向是：从左到右（左边是起点，右边</h5><h5 id="是终点-。" tabindex="-1"><a class="header-anchor" href="#是终点-。" aria-hidden="true">#</a> 是终点）。</h5><h5 id="侧轴-与主轴垂直的就是侧轴-侧轴默认是垂直的-默认方向是-从上到下-上边是起点-下边" tabindex="-1"><a class="header-anchor" href="#侧轴-与主轴垂直的就是侧轴-侧轴默认是垂直的-默认方向是-从上到下-上边是起点-下边" aria-hidden="true">#</a> 侧轴： 与主轴垂直的就是侧轴，侧轴默认是垂直的，默认方向是：从上到下（上边是起点，下边</h5><h5 id="是终点-。-1" tabindex="-1"><a class="header-anchor" href="#是终点-。-1" aria-hidden="true">#</a> 是终点）。</h5><h3 id="_4-主轴方向" tabindex="-1"><a class="header-anchor" href="#_4-主轴方向" aria-hidden="true">#</a> 4. 主轴方向</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>属性名：flex-direction
常用值如下：
1. row ：主轴方向水平从左到右 —— 默认值
2. row-reverse ：主轴方向水平从右到左。
3. column：主轴方向垂直从上到下。
4. column-reverse：主轴方向垂直从下到上。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="注意-改变了主轴的方向-侧轴方向也随之改变。" tabindex="-1"><a class="header-anchor" href="#注意-改变了主轴的方向-侧轴方向也随之改变。" aria-hidden="true">#</a> 注意：改变了主轴的方向，侧轴方向也随之改变。</h5><h3 id="_5-主轴换行方式" tabindex="-1"><a class="header-anchor" href="#_5-主轴换行方式" aria-hidden="true">#</a> 5. 主轴换行方式</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>属性名：flex-wrap
常用值如下：
1. nowrap：默认值，不换行。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>2. wrap：自动换行，伸缩容器不够自动换行。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>3. wrap-reverse：反向换行。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_6-flex-flow" tabindex="-1"><a class="header-anchor" href="#_6-flex-flow" aria-hidden="true">#</a> 6. flex-flow</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>flex-flow是一个复合属性，复合了 flex-direction 和 flex-wrap 两个属性。 值没有顺序要
求。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-主轴对齐方式" tabindex="-1"><a class="header-anchor" href="#_7-主轴对齐方式" aria-hidden="true">#</a> 7. 主轴对齐方式</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>属性名：justify-content
常用值如下：
1. flex-start：主轴起点对齐。—— 默认值
2. flex-end：主轴终点对齐。
3. center：居中对齐
4. space-between：均匀分布，两端对齐（最常用）。
5. space-around：均匀分布，两端距离是中间距离的一半。
6. space-evenly ：均匀分布，两端距离与中间距离一致。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>flex-flow: row wrap;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_8-侧轴对齐方式" tabindex="-1"><a class="header-anchor" href="#_8-侧轴对齐方式" aria-hidden="true">#</a> 8. 侧轴对齐方式</h3><h4 id="_8-1-一行的情况" tabindex="-1"><a class="header-anchor" href="#_8-1-一行的情况" aria-hidden="true">#</a> 8. 1 一行的情况</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>所需属性：align-items
常用值如下：
1. flex-start：侧轴的起点对齐。
2. flex-end：侧轴的终点对齐。
3. center：侧轴的中点对齐。
4. baseline: 伸缩项目的第一行文字的基线对齐。
5. stretch：如果伸缩项目未设置高度，将占满整个容器的高度。—— （默认值）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-2-多行的情况" tabindex="-1"><a class="header-anchor" href="#_8-2-多行的情况" aria-hidden="true">#</a> 8. 2 多行的情况</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>所需属性：align-content
常用值如下：
1. flex-start：与侧轴的起点对齐。
2. flex-end：与侧轴的终点对齐。
3. center：与侧轴的中点对齐。
4. space-between：与侧轴两端对齐，中间平均分布。
5. space-around：伸缩项目间的距离相等，比距边缘大一倍。
6. space-evenly: 在侧轴上完全平分。
7. stretch：占满整个侧轴。—— 默认值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-flex-实现水平垂直居中" tabindex="-1"><a class="header-anchor" href="#_9-flex-实现水平垂直居中" aria-hidden="true">#</a> 9.flex 实现水平垂直居中</h3><p>方法一：父容器开启flex布局，随后使用justify-content和align-items实现水平垂直居中</p><p>方法二：父容器开启flex布局，随后子元素margin: auto</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.outer {
width: 400px;
height: 400px;
background-color: #888;
display: flex;
justify-content: center;
align-items: center;
}
.inner {
width: 100px;
height: 100px;
background-color: orange;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-伸缩性" tabindex="-1"><a class="header-anchor" href="#_10-伸缩性" aria-hidden="true">#</a> 10. 伸缩性</h3><h4 id="_1-flex-basis" tabindex="-1"><a class="header-anchor" href="#_1-flex-basis" aria-hidden="true">#</a> 1. flex-basis</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>概念：flex-basis设置的是主轴方向的 基准长度 ，会让宽度或高度失效。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="备注-主轴横向-宽度失效-主轴纵向-高度失效" tabindex="-1"><a class="header-anchor" href="#备注-主轴横向-宽度失效-主轴纵向-高度失效" aria-hidden="true">#</a> 备注：主轴横向：宽度失效；主轴纵向：高度失效</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>作用：浏览器根据这个属性设置的值，计算主轴上是否有多余空间，默认值auto，即：伸缩项目
的宽或高。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-flex-grow-伸" tabindex="-1"><a class="header-anchor" href="#_2-flex-grow-伸" aria-hidden="true">#</a> 2. flex-grow（伸）</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>概念：flex-grow 定义伸缩项目的放大比例，默认为 0 ，即：纵使主轴存在剩余空间，也不拉伸
（放大）。
规则：
1. 若所有伸缩项目的 flex-grow 值都为 1 ，则：它们将等分剩余空间（如果有空间的话）。
2. 若三个伸缩项目的flex-grow值分别为： 1 、 2 、 3 ，则：分别瓜分到：1/6、2/6、
3/6的空间。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-flex-shrink-缩" tabindex="-1"><a class="header-anchor" href="#_3-flex-shrink-缩" aria-hidden="true">#</a> 3. flex-shrink（缩）</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>概念：flex-shrink定义了项目的压缩比例，默认为 1 ，即：如果空间不足，该项目将会缩小。
收缩项目的计算，略微复杂一点，我们拿一个场景举例：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="例如" tabindex="-1"><a class="header-anchor" href="#例如" aria-hidden="true">#</a> 例如：</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>三个收缩项目，宽度分别为：200px、300px、200px，它们的flex-shrink值分别
为： 1 、 2 、 3
若想刚好容纳下三个项目，需要总宽度为700px，但目前容器只有400px，还差300px
所以每个人都要收缩一下才可以放下，具体收缩的值，这样计算：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. 计算分母：(200×1) + (300×2) + (200×3) = 1400
2. 计算比例：
项目一：(200×1) / 1400 = 比例值 1
项目二：(300×2) / 1400 = 比例值 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.outer {
width: 400px;
height: 400px;
background-color: #888;
display: flex;
}
.inner {
width: 100px;
height: 100px;
background-color: orange;
margin: auto;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="值-含义-11" tabindex="-1"><a class="header-anchor" href="#值-含义-11" aria-hidden="true">#</a> 值 含义</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>all 检测所有设备。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>screen 检测电子屏幕，包括：电脑屏幕、平板屏幕、手机屏幕等。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>print 检测打印机。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>aural 已废弃，用于语音和声音合成器。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>braille 已废弃，应用于盲文触摸式反馈设备。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>embossed 已废弃， 用于打印的盲人印刷设备。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>handheld 已废弃， 用于掌上设备或更小的装置，如PDA和小型电话。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>projection 已废弃， 用于投影设备。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tty 已废弃， 用于固定的字符网格，如电报、终端设备和对字符有限制的便携设备。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tv 已废弃， 用于电视和网络电视。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="项目三-200×3-1400-比例值-3" tabindex="-1"><a class="header-anchor" href="#项目三-200×3-1400-比例值-3" aria-hidden="true">#</a> 项目三：(200×3) / 1400 = 比例值 3</h5><h5 id="_3-计算最终收缩大小" tabindex="-1"><a class="header-anchor" href="#_3-计算最终收缩大小" aria-hidden="true">#</a> 3. 计算最终收缩大小：</h5><h5 id="项目一需要收缩-比例值1-×-300" tabindex="-1"><a class="header-anchor" href="#项目一需要收缩-比例值1-×-300" aria-hidden="true">#</a> 项目一需要收缩：比例值1 × 300</h5><h5 id="项目二需要收缩-比例值2-×-300" tabindex="-1"><a class="header-anchor" href="#项目二需要收缩-比例值2-×-300" aria-hidden="true">#</a> 项目二需要收缩：比例值2 × 300</h5><h5 id="项目三需要收缩-比例值3-×-300" tabindex="-1"><a class="header-anchor" href="#项目三需要收缩-比例值3-×-300" aria-hidden="true">#</a> 项目三需要收缩：比例值3 × 300</h5><h3 id="_11-flex复合属性" tabindex="-1"><a class="header-anchor" href="#_11-flex复合属性" aria-hidden="true">#</a> 11. flex复合属性</h3><p>flex 是复合属性，复合了： flex-grow 、 flex-shrink 、flex-basis 三个属性，默认值为 0 1<br> auto。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>如果写 flex:1 1 auto ，则可简写为： flex:auto
如果写 flex:1 1 0 ，则可简写为： flex:1
如果写 flex:0 0 auto ，则可简写为：flex:none
如果写 flex:0 1 auto ，则可简写为： flex:0 auto —— 即 flex 初始值。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_12-项目排序" tabindex="-1"><a class="header-anchor" href="#_12-项目排序" aria-hidden="true">#</a> 12. 项目排序</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>order属性定义项目的排列顺序。数值越小，排列越靠前，默认为 0 。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_13-单独对齐" tabindex="-1"><a class="header-anchor" href="#_13-单独对齐" aria-hidden="true">#</a> 13. 单独对齐</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>通过align-self 属性，可以单独调整某个伸缩项目的对齐方式
默认值为 auto，表示继承父元素的 align-items 属性。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_16-响应式布局" tabindex="-1"><a class="header-anchor" href="#_16-响应式布局" aria-hidden="true">#</a> 16. 响应式布局</h2><h3 id="媒体查询" tabindex="-1"><a class="header-anchor" href="#媒体查询" aria-hidden="true">#</a> 媒体查询</h3><h4 id="_1-1-媒体类型" tabindex="-1"><a class="header-anchor" href="#_1-1-媒体类型" aria-hidden="true">#</a> 1.1 媒体类型</h4><h5 id="值-含义-12" tabindex="-1"><a class="header-anchor" href="#值-含义-12" aria-hidden="true">#</a> 值 含义</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>width 检测视口 宽度 。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>max-width 检测视口 最大宽度 。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>min-width 检测视口 最小宽度 。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>height 检测视口 高度 。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>max-height 检测视口 最大高度 。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>min-height 检测视口 最小高度 。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>device-width 检测设备 屏幕的宽度 。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>max-device-width 检测设备 屏幕的最大宽度 。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>min-device-width 检测设备 屏幕的最小宽度 。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>orientation
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="检测-视口的旋转方向-是否横屏-。" tabindex="-1"><a class="header-anchor" href="#检测-视口的旋转方向-是否横屏-。" aria-hidden="true">#</a> 检测 视口的旋转方向 （是否横屏）。</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. portrait：视口处于纵向，即高度大于等于宽度。
2. landscape：视口处于横向，即宽度大于高度。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="值-含义-13" tabindex="-1"><a class="header-anchor" href="#值-含义-13" aria-hidden="true">#</a> 值 含义</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>and 并且
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>, 或 or 或
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>not 否定
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>only 肯定
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>完整列表请参考： https://developer.mozilla.org/zh-CN/docs/Web/CSS/@media
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_1-2-媒体特性" tabindex="-1"><a class="header-anchor" href="#_1-2-媒体特性" aria-hidden="true">#</a> 1.2 媒体特性</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>完整列表请参考： https://developer.mozilla.org/zh-CN/docs/Web/CSS/@media
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_1-3-运算符" tabindex="-1"><a class="header-anchor" href="#_1-3-运算符" aria-hidden="true">#</a> 1.3 运算符</h4><h4 id="_1-4-常用阈值" tabindex="-1"><a class="header-anchor" href="#_1-4-常用阈值" aria-hidden="true">#</a> 1.4 常用阈值</h4><h5 id="在实际开发中-会将屏幕划分成几个区间-例如" tabindex="-1"><a class="header-anchor" href="#在实际开发中-会将屏幕划分成几个区间-例如" aria-hidden="true">#</a> 在实际开发中，会将屏幕划分成几个区间，例如：</h5><h4 id="_1-5-结合外部样式的用法" tabindex="-1"><a class="header-anchor" href="#_1-5-结合外部样式的用法" aria-hidden="true">#</a> 1.5 结合外部样式的用法</h4><h5 id="用法一" tabindex="-1"><a class="header-anchor" href="#用法一" aria-hidden="true">#</a> 用法一 ：</h5><h5 id="用法二" tabindex="-1"><a class="header-anchor" href="#用法二" aria-hidden="true">#</a> 用法二：</h5><h2 id="_17-bfc" tabindex="-1"><a class="header-anchor" href="#_17-bfc" aria-hidden="true">#</a> 17. BFC</h2><h3 id="_1-什么是bfc" tabindex="-1"><a class="header-anchor" href="#_1-什么是bfc" aria-hidden="true">#</a> 1. 什么是BFC</h3><h5 id="w3c-上对-bfc-的定义" tabindex="-1"><a class="header-anchor" href="#w3c-上对-bfc-的定义" aria-hidden="true">#</a> W3C 上对 BFC 的定义：</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>原文：Floats, absolutely positioned elements, block containers (such as inline-blocks, table-
cells, and table-captions) that are not block boxes, and block boxes with &#39;overflow&#39; other than
&#39;visible&#39; (except when that value has been propagated to the viewport) establish new block
formatting contexts for their contents.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>译文：浮动、绝对定位元素、不是块盒子的块容器（如inline-blocks、table-cells和
table-captions），以及overflow属性的值除visible以外的块盒，将为其内容建立新
的块格式化上下文。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="mdn-上对-bfc-的描述" tabindex="-1"><a class="header-anchor" href="#mdn-上对-bfc-的描述" aria-hidden="true">#</a> MDN 上对 BFC 的描述：</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>块格式化上下文（Block Formatting Context，BFC） 是Web页面的可视CSS渲染的一部分，
是块盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="更加通俗的描述" tabindex="-1"><a class="header-anchor" href="#更加通俗的描述" aria-hidden="true">#</a> 更加通俗的描述：</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. BFC 是 Block Formatting Context（ 块级格式上下文 ），可以理解成元素的一个
“特异功能”。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;link rel=&quot;stylesheet&quot; media=&quot;具体的媒体查询&quot; href=&quot;mystylesheet.css&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@media screen and (max-width:768px) {
/*CSS-Code;*/
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@media screen and (min-width:768px) and (max-width:1200px) {
/*CSS-Code;*/
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-该-特异功能-在默认的情况下处于关闭状态-当元素满足了某些条件后-该-特异功" tabindex="-1"><a class="header-anchor" href="#_2-该-特异功能-在默认的情况下处于关闭状态-当元素满足了某些条件后-该-特异功" aria-hidden="true">#</a> 2. 该 “特异功能”，在默认的情况下处于关闭状态；当元素满足了某些条件后，该“特异功</h5><h5 id="能-被激活。" tabindex="-1"><a class="header-anchor" href="#能-被激活。" aria-hidden="true">#</a> 能”被激活。</h5><h5 id="_3-所谓激活-特异功能-专业点说就是-该元素创建了-bfc-又称-开启了-bfc-。" tabindex="-1"><a class="header-anchor" href="#_3-所谓激活-特异功能-专业点说就是-该元素创建了-bfc-又称-开启了-bfc-。" aria-hidden="true">#</a> 3. 所谓激活“特异功能”，专业点说就是：该元素创建了 BFC（又称：开启了 BFC）。</h5><h3 id="_2-开启了bfc能解决什么问题" tabindex="-1"><a class="header-anchor" href="#_2-开启了bfc能解决什么问题" aria-hidden="true">#</a> 2. 开启了BFC能解决什么问题</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. 元素开启BFC后，其子元素不会再产生margin塌陷问题。
2. 元素开启BFC后，自己不会被其他浮动元素所覆盖。
3. 元素开启BFC后，就算其子元素浮动，元素自身高度也不会塌陷。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-如何开启bfc" tabindex="-1"><a class="header-anchor" href="#_3-如何开启bfc" aria-hidden="true">#</a> 3. 如何开启BFC</h3><h5 id="根元素" tabindex="-1"><a class="header-anchor" href="#根元素" aria-hidden="true">#</a> 根元素</h5><h5 id="浮动元素" tabindex="-1"><a class="header-anchor" href="#浮动元素" aria-hidden="true">#</a> 浮动元素</h5><h5 id="绝对定位、固定定位的元素" tabindex="-1"><a class="header-anchor" href="#绝对定位、固定定位的元素" aria-hidden="true">#</a> 绝对定位、固定定位的元素</h5><h5 id="行内块元素" tabindex="-1"><a class="header-anchor" href="#行内块元素" aria-hidden="true">#</a> 行内块元素</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>表格单元格：table、thead、tbody、tfoot、th、td、tr、caption
overflow 的值不为 visible 的块元素
伸缩项目
多列容器
column-span 为 all 的元素（即使该元素没有包裹在多列容器中）
display的值，设置为flow-root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,492),r=[s];function l(t,c){return a(),d("div",null,r)}const h=e(n,[["render",l],["__file","index.html.vue"]]);export{h as default};
