import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as p}from"./app-a1fbcbb6.js";const e={},t=p(`<h1 id="_05-【sass语法介绍-插值】" tabindex="-1"><a class="header-anchor" href="#_05-【sass语法介绍-插值】" aria-hidden="true">#</a> 05 【Sass语法介绍-插值】</h1><h2 id="_1-前言" tabindex="-1"><a class="header-anchor" href="#_1-前言" aria-hidden="true">#</a> 1.前言</h2><p>在很多编程器语言中都有插值这个概念，在 Sass 样式表的任何地方几乎都可以使用插值，你可以将这些包裹在 #{} 中来使用，所以记住在 Sass 中使用插值的方式是 <strong>#{}</strong> ，本节我们一起来看一下插值在 Sass 中的使用场景以及它的语法</p><h2 id="_2-什么是插值" tabindex="-1"><a class="header-anchor" href="#_2-什么是插值" aria-hidden="true">#</a> 2.什么是插值？</h2><p>插值也就是可以在<strong>特定的区域</strong>插入一段表达式或者插入一个变量，以此来实现内容动态变换的需求。</p><blockquote><p>类似 es6 中的插值表达，插值几乎可以用在任何地方。</p><p>Sass的插值写法为：<code>#{$variable_name}</code>。</p></blockquote><p>应用于以下的一些场景：</p><ul><li>在选择器中使用</li><li>在属性名中使用</li><li>在属性值中使用</li><li>在注释中使用</li></ul><p>这里我们暂且详细讲解这五种使用场景，在 Sass 指令和在 Sass 函数中也是可以使用的，不过我们会在其对应的章节再去做讲解。下面我们先看下这四种使用场景。</p><h2 id="_3-在选择器中使用" tabindex="-1"><a class="header-anchor" href="#_3-在选择器中使用" aria-hidden="true">#</a> 3.在选择器中使用</h2><p>我们一般在写页面的时候会为 DOM 元素定义一些 class 或 id ，当我们为其写样式的时候会用不同的选择器，那么在选择器中我们可以湿用插值来拼接一些类名等等，我们举个例子来看下：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$name</span></span><span class="token punctuation">:</span> item<span class="token punctuation">;</span>
<span class="token selector">.ul-<span class="token variable">#{$name}</span> </span><span class="token punctuation">{</span> <span class="token comment">// 使用插值</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token selector">.li-<span class="token variable">#{$name}</span> </span><span class="token punctuation">{</span> <span class="token comment">// 使用插值</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">.box-<span class="token variable">#{$name}</span> </span><span class="token punctuation">{</span> <span class="token comment">// 使用插值</span>
  <span class="token property">height</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
  <span class="token selector">.<span class="token variable">#{$name}</span> </span><span class="token punctuation">{</span> <span class="token comment">// 使用插值</span>
    <span class="token property">height</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到上面的代码，我制定了一个 DOM 层级结构，这种结构也是很常见的，可能很多子元素的类名我们都带有 item ，那么我们就可以把它提取为一个变量然后通过在选择器中应用插值来拼接，这样就很方便我们维护，我们想改子元素类名的时候就不需要逐一的去更改了。上面这段 Sasd 代码转换为 CSS 如下：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.ul-item</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.ul-item .li-item</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.box-item</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box-item .item</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-在属性名中使用" tabindex="-1"><a class="header-anchor" href="#_4-在属性名中使用" aria-hidden="true">#</a> 4.在属性名中使用</h2><p>除了在选择器中使用，在 Sass 属性名上也是可以使用插值的，也就是说你在写 CSS 属性名的时候你也是可以使用插值来拼接的，我们举个例子来看下：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$name</span></span><span class="token punctuation">:</span> color<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$position</span></span><span class="token punctuation">:</span> top<span class="token punctuation">;</span>
<span class="token selector">body </span><span class="token punctuation">{</span>
  <span class="token property">background-<span class="token variable">#{$name}</span></span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">border-<span class="token variable">#{$name}</span></span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
  <span class="token property">padding-<span class="token variable">#{$position}</span></span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
  <span class="token property">margin-<span class="token variable">#{$position}</span></span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property"><span class="token variable">#{$position}</span></span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到上面的代码中我对 CSS 的属性名使用了插值，可以用这种方式来拼接属性名，不过在实际项目中不是很常用，一般都是在指令里这么运用，就像在前面语法示例中举的例子一样。上面这段代码转换成 CSS 为：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
  <span class="token property">padding-top</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-在属性值中使用" tabindex="-1"><a class="header-anchor" href="#_5-在属性值中使用" aria-hidden="true">#</a> 5.在属性值中使用</h2><p>在属性值中使用插值应该算是比较常用的，插值使你在属性值中不仅可以插入值，还可以插入表达式来计算。除此之外我们在前面的运算章节中，不知道你是否还记得，我们对两个变量使用 / 标识符的时候，如果你不想对这两个变量进行除法运算而是进行分隔，那么就可以<strong>使用插值避免运算</strong>。</p><p>可以说插值在属性值中的应用很广泛也很实用，我们来举例看下：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$one</span></span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$two</span></span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$family</span></span><span class="token punctuation">:</span> <span class="token string">&quot;UaTy&quot;</span><span class="token punctuation">;</span>
<span class="token selector">div </span><span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token variable">$one</span> <span class="token operator">/</span> <span class="token variable">$two</span><span class="token punctuation">;</span> <span class="token comment">// 除法运算</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token variable">#{$one}</span> <span class="token operator">/</span> <span class="token variable">#{$two}</span><span class="token punctuation">;</span> <span class="token comment">// 分隔</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&quot;MyFo #{$family}&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 带引号的字符串会转换为不带引号</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% <span class="token operator">-</span> <span class="token variable">$one</span> <span class="token operator">*</span> 2 *<span class="token variable">$two</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// calc函数中内容会被当作字符串处理</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% <span class="token operator">-</span> #<span class="token punctuation">{</span><span class="token variable">$one</span> <span class="token operator">*</span> 2 *<span class="token variable">$two</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// calc函数中插值的内容会进行运算</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码中我对每一行都进行了标注，你要仔细看下，在属性值中你可以用这些方式来使用插值，上面的代码将会被转换为如下的 CSS 代码：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 20px/2<span class="token punctuation">;</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&quot;MyFo UaTy&quot;</span><span class="token punctuation">;</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>http://xxx.xxx.xxx/a.jpg<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% - $one * 2 *$two<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% - 80px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在属性值中应用插值的场景还蛮多的，你可以这么来使用以提高你的开发效率～</p><h2 id="_6-在注释中使用" tabindex="-1"><a class="header-anchor" href="#_6-在注释中使用" aria-hidden="true">#</a> 6.在注释中使用</h2><p>在 Sass 中的注释里也是可以使用插值的，而且如果插值中的内容是一段表达式，将会返回表达式的结果，举个例子来看下：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">/* 在注释中使用插值:
 * 2 + 2 = #{2 + 2} */</span>
<span class="token comment">/* #{9 + 8 * 2} */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以在注释中可以这么使用插值，具体什么时候需要使用看你的需求，你需要知道插值的这种使用方式，上面的代码将会被转换为如下的 CSS 代码：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 在注释中使用插值:
 * 2 + 2 = 4 */</span>
<span class="token comment">/* 25 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-实战经验" tabindex="-1"><a class="header-anchor" href="#_7-实战经验" aria-hidden="true">#</a> 7.实战经验</h2><p>在我的实际项目中，在函数和指令中使用插值比较多，在后面函数和指令的章节你会看到插值的更多运用，这里我列出在属性值以及选择器中的使用。在我项目中专门维护变量的文件中，定义了如下的几个变量：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$primary-dom-name</span></span><span class="token punctuation">:</span> <span class="token string">&quot;box&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 主要父级元素类名</span>
<span class="token property"><span class="token variable">$primary-child-name</span></span><span class="token punctuation">:</span> <span class="token string">&quot;item&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 主要子元素类名</span>
<span class="token property"><span class="token variable">$public-top</span></span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$public-bottom</span></span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$public-margin</span></span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$public-padding</span></span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在我项目中的导航样式中我使用了上面的这些变量，代码如下：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.menu-<span class="token variable">#{$primary-dom-name}</span> </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% <span class="token operator">-</span> #<span class="token punctuation">{</span>40px <span class="token operator">-</span> <span class="token variable">$public-bottom</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #cccccc<span class="token punctuation">;</span>
  <span class="token property">overflow-x</span><span class="token punctuation">:</span>hidden<span class="token punctuation">;</span>
  <span class="token property">overflow-y</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token variable">$public-padding</span><span class="token punctuation">;</span>
  <span class="token selector">.li-<span class="token variable">#{$primary-child-name}</span> </span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token variable">$public-margin</span><span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span>40px<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
    <span class="token selector">.txt-<span class="token variable">#{$primary-dom-name}</span> </span><span class="token punctuation">{</span>
      <span class="token property">border-bottom</span><span class="token punctuation">:</span> 2px solid #999999<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector"><span class="token parent important">&amp;</span>:hover </span><span class="token punctuation">{</span>
      <span class="token property">background</span><span class="token punctuation">:</span> #999999<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.logo-<span class="token variable">#{$primary-dom-name}</span> </span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，当有一天我们因为业务或者什么其他的需要，我们需要<strong>更换类名或者调整间距</strong>的时候，我们直接更改变量值就 ok 了，这样维护起来方便的多！不过一般在公司的项目中，这种公共的样式代码维护一般是由架构组或者专门的人来维护的，如果你不负责维护这些，你一定不要轻易去改动这些代码！</p><h2 id="_8-小结" tabindex="-1"><a class="header-anchor" href="#_8-小结" aria-hidden="true">#</a> 8.小结</h2><p>本节内容我们讲解了 Sass 中的插值以及它的使用场景，一般我们会在如下的场景使用：</p><ul><li>在函数和指令中使用</li><li>在选择器中使用</li><li>在属性名中使用</li><li>在属性值中使用</li><li>在注释中使用</li></ul><p>我们通过下图来更深地回忆下本节插值的使用场景：</p><figure><img src="https://i0.hdslb.com/bfs/album/d6890af7337563009618bc694bf160e233eb9c7a.png" alt="image-20220823192137071" tabindex="0" loading="lazy"><figcaption>image-20220823192137071</figcaption></figure><p>总体来说插值在 Sass 中用的还是比较多的，使用也比较简单不是那么复杂，后面在函数或指令中、在你项目的 Sass 中看见 <strong>#{}</strong> 要知道这是 Sass 的插值！</p>`,43),c=[t];function o(i,l){return s(),a("div",null,c)}const d=n(e,[["render",o],["__file","05.html.vue"]]);export{d as default};
