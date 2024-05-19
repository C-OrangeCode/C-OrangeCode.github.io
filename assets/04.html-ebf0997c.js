import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,e as p}from"./app-a1fbcbb6.js";const e={},t=p(`<h1 id="_04-【sass语法介绍-运算】" tabindex="-1"><a class="header-anchor" href="#_04-【sass语法介绍-运算】" aria-hidden="true">#</a> 04 【Sass语法介绍-运算】</h1><h2 id="_1-前言" tabindex="-1"><a class="header-anchor" href="#_1-前言" aria-hidden="true">#</a> 1.前言</h2><p>运算是一种通过已知量可能的组合，获得新的量的行为。Sass 中也为我们提供了各种各样的运算，以便我们更好的处理样式代码。本节我们将学习 Sass 中的数字运算、关系运算、除法运算、颜色运算、字符串运算等等…</p><h2 id="_2-什么是-sass-运算" tabindex="-1"><a class="header-anchor" href="#_2-什么是-sass-运算" aria-hidden="true">#</a> 2.什么是 Sass 运算？</h2><p>运算从我们小时候就开始学习了，那在 Sass 中的运算是什么呢？<br> 在我们写样式的时候，很多场景我们是需要用到计算的，而一般我们都是通过 javascript 来计算，CSS3 中也提供了用于运算的函数 calc() ，可能在工作中你使用过这个函数用来计算长度值，能用到的地方也非常有限。而在 Sass 中，扩展出了很多计算方法，使得你不止是可以计算长度值，还能做一些关系运算甚至颜色值的运算等等。这使我们可以把运算应用于更多的场景，来解决更复杂的问题，<strong>运算</strong>也是 Sass 的基本特性之一，下面我们一起来学习它～</p><p>这部分我们将详细讲解 Sass 运算中的：</p><ul><li>数字运算</li><li>圆括号</li><li>除法运算</li><li>关系运算</li><li>颜色运算</li><li>字符串运算</li><li>布尔运算</li></ul><h2 id="_3-数字运算" tabindex="-1"><a class="header-anchor" href="#_3-数字运算" aria-hidden="true">#</a> 3.数字运算</h2><p>在 Sass 中我们可以对数字类型的值进行加减乘除、取整的运算。在使用运算的过程中，一定要注意<strong>不能使用不兼容的单位！</strong>（在除法运算中除外），什么意思呢？就是说两个数字相加，你不能一个数字单位是 px 另一个数字单位是 em 。还有一点需要注意的是，如果你使用乘法运算，你只需要为其中的一个数值写上单位就好。数值的运算包括加 (+)、减 (-)、乘 (*)、除 (/)、取模 (%)，乘法只需要有一个数值带单位即可，还有就是除法稍有特殊，后面会单独讲解，下面我来写一段代码看一下 Sass 的数字运算：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">p </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 10px <span class="token operator">+</span> 20px<span class="token punctuation">;</span> <span class="token comment">// 加法运算 (不能使用不兼容的单位)</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 500px +50<span class="token punctuation">;</span> <span class="token comment">// 加法运算无单位的数字可以与有单位的一起使用</span>
  <span class="token property">max-width</span><span class="token punctuation">:</span> 800px <span class="token operator">-</span> 100px<span class="token punctuation">;</span> <span class="token comment">// 减法</span>
  <span class="token property">max-height</span><span class="token punctuation">:</span> 400px <span class="token operator">*</span> 2<span class="token punctuation">;</span> <span class="token comment">// 乘法，一个数值带单位即可</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 30px <span class="token operator">%</span> 4<span class="token punctuation">;</span> <span class="token comment">// 模运算</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这段代码转换成 CSS 为：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 550px<span class="token punctuation">;</span>
  <span class="token property">max-width</span><span class="token punctuation">:</span> 700px<span class="token punctuation">;</span>
  <span class="token property">max-height</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 2px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面我们对 Sass 数值运算的加减乘和模运算做了演示，在 Sass 的数字运算中还有一个需要特别注意的：<strong>减法运算符两边需要加空格或者都不加空格</strong>，也就是说运算符的两边是<strong>对称</strong>的；为什么要这样呢？因为减法运算符 - 不仅仅表示减法，对于负数或者一元否定则只需要在其前面加空格就好，也就是说这个标识符还可以表示负数和一元否定；我们举个例子来看下：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">p </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 10px <span class="token operator">-</span> 5px<span class="token punctuation">;</span> <span class="token comment">// 前后都有空格</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 10px-5px<span class="token punctuation">;</span> <span class="token comment">// 前后都没有空格</span>
  <span class="token property">width</span><span class="token punctuation">:</span>10px -5px<span class="token punctuation">;</span> <span class="token comment">// 只有前面有空格</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这段 Sass 代码将会被编译成如下的 CSS :</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 10px -5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以看到上面的代码，如果你只在 - 标识符前面加了空格，其两边不对称是不会对数值进行运算的，所以这个在你写代码的过程中一定要注意！</p><h2 id="_4-除法运算" tabindex="-1"><a class="header-anchor" href="#_4-除法运算" aria-hidden="true">#</a> 4.除法运算</h2><p>在讲除法运算之前，一定要先讲一下这个圆括号 () ，圆括号和数学运算中一样，可以来控制运算顺序，这个我们从小就学过，在 Sass 运算中你同样可以使用它来控制运算顺序。</p><p>另外就是如果你直使用除法运算符， Sass 会把这当成一个分隔符来处理，但如果你是写在<strong>圆括号内</strong>就可以被当作除法操作处理了，这也是圆括号在 Sass 中的另外一个作用！</p><p>在 CSS 中，你要知道 <strong>/ 这个标识符并不是代表除法</strong>的，一些 CSS 的属性值是支持使用 / 来分隔的，所以在 Sass 中直接使用 / 也是会当成分隔符来处理。但是呢，在以下情况下，Sass 将会把 / 视为除法运算：</p><ul><li>运算符前后的值存储在变量中或由函数返回</li><li>运算符和前后的值被圆括号所包裹</li><li>值是另外一个表达式的一部分</li></ul><p>下面我们来举例看一下：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$one</span></span><span class="token punctuation">:</span> 20px <span class="token operator">/</span> 2<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$two</span></span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token selector">p </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px <span class="token operator">+</span> 100px <span class="token operator">/</span> 10<span class="token punctuation">;</span> <span class="token comment">// 值是另外一个运算表达式的一部分</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token variable">$one</span><span class="token punctuation">;</span> <span class="token comment">// 前后的值存储在变量中或由函数返回</span>
  <span class="token property">border-width</span><span class="token punctuation">:</span> <span class="token variable">$two</span> <span class="token operator">/</span> 5<span class="token punctuation">;</span> <span class="token comment">// 前后的值存储在变量中或由函数返回</span>
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>800px <span class="token operator">/</span> 2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 被圆括号所包裹</span>
  <span class="token property">max-width</span><span class="token punctuation">:</span> 800px <span class="token operator">/</span> 2<span class="token punctuation">;</span> <span class="token comment">// 会被当作分隔符来处理，而不是除法运算</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这段 Sass 代码我对使用 / 的情况进行了注释，那么它转换为 CSS 代码是：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 210px<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">border-width</span><span class="token punctuation">:</span> 2px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
  <span class="token property">max-width</span><span class="token punctuation">:</span> 800px/2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面我们看到了 Sass 除法运算的使用，还有一种情况是：假如我在两个变量之间使用 / 标识符，而且我又不想对这两个变量进行除法运算，我只是想对这两个变量的值进行分隔而已，那该怎么办呢？那我们需要使用<strong>插值</strong> #{} 来将两个变量包裹住即可，关于插值以后的章节会有讲解，这里我们先看一下如何做：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$one</span></span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$two</span></span><span class="token punctuation">:</span> 10<span class="token punctuation">;</span>
<span class="token selector">p </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">$one</span> <span class="token operator">/</span> <span class="token variable">$two</span><span class="token punctuation">;</span> <span class="token comment">// 没有使用插值，会对变量值进行除法运算</span>
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token variable">#{$one}</span> <span class="token operator">/</span> <span class="token variable">#{$two}</span><span class="token punctuation">;</span> <span class="token comment">// 使用插值，不会进行除法运算</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这段使用插值的代码将会转换为如下的 CSS 代码：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 2px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 20px/10<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>好了，除法运算讲完了，通过上面的讲解，是不是感觉 Sass 中的除法运算和你脑海中的还是有差别的，还有一个值得注意的是，如果你使用除法运算前后的值都带有相同的单位，那么最后的结果是一个不带单位的数值。在以后你使用除法运算的时候一定要知道在 Sass 中 <strong>/ 不仅仅代表除法运算</strong>，你要用正确的方式来使用它！</p><h2 id="_5-关系运算" tabindex="-1"><a class="header-anchor" href="#_5-关系运算" aria-hidden="true">#</a> 5.关系运算</h2><p>在 Sass 中关系运算来比较数字与数字间的大小，和数字运算一样，关系运算也是不能使用不兼容的单位。关系运算的返回值是布尔值（ true 或 false ），下面我们举个例子看下：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">p </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 10px <span class="token operator">&gt;</span> 5px<span class="token punctuation">;</span> <span class="token comment">// 大于</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 10 <span class="token operator">&lt;</span> 5px<span class="token punctuation">;</span> <span class="token comment">// 小于</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 10 <span class="token operator">&gt;=</span> 5<span class="token punctuation">;</span> <span class="token comment">// 大于等于</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 5 <span class="token operator">&lt;=</span> 5<span class="token punctuation">;</span> <span class="token comment">// 小于等于</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 5 <span class="token operator">==</span> 5<span class="token punctuation">;</span> <span class="token comment">// 等于</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面这个例子中，width 属性的值是没有布尔类型的，我这里这么举例子是为了让大家可以更直观的感受，一般关系运算不会直接应用于样式表中，在 Sass 的函数中应用的比较多。那么上面这段代码转换成 CSS 如下：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> true<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> false<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> true<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> true<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> true<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>到这里你应该了解 Sass 中的关系运算了，切记我这里的代码举例只是为了让大家直观的感受，实际情况下并不会这么写。另外在 Sass 中使用相等运算符去做比较的时候，对于数字类型，数字具有相同的值和相同的单位，或者在单位之间转换时它们的值相等，则它们是相等的；对于字符串类型，具有相同内容的未加引号和带引号的字符串被认为是相等的；对于颜色类型，具有相同的红色、绿色、蓝色和alpha值，则颜色是相等的；</p><h2 id="_6-颜色运算" tabindex="-1"><a class="header-anchor" href="#_6-颜色运算" aria-hidden="true">#</a> 6.颜色运算</h2><p>颜色要怎么运算呢？下面我们举个例子看一下：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">body </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #020304 <span class="token operator">+</span> #050203<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在进行颜色值计算的时候是分段计算的，也就是 02 + 05 、03 + 02 、04 + 03，我们知道十六进制颜色值是分为三组的（两个数字一组），分别代表红、绿、蓝，所以在做运算的时候也是按照这个来运算的，那么上面这段代码转换成 CSS 为：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #070507<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面我们讲了颜色运算，但是 Sass 官方给出了明确的说明：<strong>不推荐使用颜色运算，而使用颜色函数</strong>。什么原因呢？因为 Sass 颜色运算所产生出来的色值可能和你感知的并不一致，所以不推荐使用。如果你使用了的话， Sass 也是支持的，但是会给出警告，强烈建议用户避免使用颜色运算！所以我们的教程里只是做了个演示，你可以了解下，但在<strong>实际开发中不推荐使用颜色运算，可以使用颜色函数来实现你的需求！</strong></p><h2 id="_7-字符串运算" tabindex="-1"><a class="header-anchor" href="#_7-字符串运算" aria-hidden="true">#</a> 7.字符串运算</h2><p>在 Sass 中还允许对字符串进行运算，那对于字符串的运算都有哪些呢？我们先文字描述下：</p><ul><li>字符串1 + 字符串2：用于连接字符串，结果会返回包含两个字符串的新字符串，如果这其中一个字符串带引号，那么结果也会带引号，否则就不带引号（带引号的字符串要位于 + 号左侧）；</li><li>字符串1 / 字符串2：返回一个字符串，这里包含字符串 1 和 字符串 2 ，会用 / 分隔；</li><li>字符串1 - 字符串2：返回一个字符串，这里包含字符串 1 和 字符串 2 ，会用 - 分隔。</li></ul><p>下面我们使用代码来举例看下：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">p </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> r <span class="token operator">+</span> <span class="token string">&#39;ed&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 带引号的在加号右侧，返回一个不带引号的字符串</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token string">&#39;r&#39;</span> <span class="token operator">+</span> ed<span class="token punctuation">;</span> <span class="token comment">// 带引号的在加号左侧，返回一个带引号的字符串</span>
  <span class="token property">color</span><span class="token punctuation">:</span>r <span class="token operator">+</span> ed<span class="token punctuation">;</span> <span class="token comment">// 返回一个不带引号的字符串</span>
  <span class="token property">color</span><span class="token punctuation">:</span> r/ed<span class="token punctuation">;</span> <span class="token comment">// 返回一个使用 / 分隔的字符串</span>
  <span class="token property">color</span><span class="token punctuation">:</span> r-ed<span class="token punctuation">;</span> <span class="token comment">// 返回一个使用 - 分隔的字符串</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这段代码会转换为如下的 CSS 代码：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token string">&quot;red&quot;</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> r/ed<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> r-ed<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同样此处举的例子只是为了方便大家感受，实际应用时可能并不会写这么多 color 属性，字符串运算可以让你很方便的拼接一些字符串来使用。</p><h2 id="_8-布尔运算" tabindex="-1"><a class="header-anchor" href="#_8-布尔运算" aria-hidden="true">#</a> 8.布尔运算</h2><p>可能与其他的语言不太相同，Sass 中的布尔运算使用的<strong>不是运算符而是单词</strong>，所以 Sass 中的布尔运算是 not 、and 和 or，not 的意思是取反，and 的意思是两个都为真则返回真反之则返回假，or 的意思是其中一个为真则返回真。看到这你可能懂了，这不就是我们常说的逻辑非、逻辑与和逻辑或嘛，下面我们举个例子来看下：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token punctuation">{</span>
  <span class="token property">a</span><span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token operator">and</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token property">b</span><span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token operator">or</span> <span class="token boolean">false</span><span class="token punctuation">;</span> 
  <span class="token property">c</span><span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token operator">and</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token property">d</span><span class="token punctuation">:</span> <span class="token operator">not</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么上面这段代码在 Sass 中会转换为：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token punctuation">{</span>
  <span class="token property">a</span><span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token property">b</span><span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token property">c</span><span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token property">d</span><span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>布尔运算在实际写样式的时候基本是不会用到的，大家也不会直接在样式中应用，一般布尔运算会应用在 Sass 函数中。</p><h2 id="_9-实战经验" tabindex="-1"><a class="header-anchor" href="#_9-实战经验" aria-hidden="true">#</a> 9.实战经验</h2><p>上面讲了这么多，现在该说到实战了。在实际的项目开发中，可能最最常用的就是加减乘除的运算了，有时可能会用到字符串运算。在你写 CSS 的时候，相信你一定知道 rem 布局，这个简直太常用了。我们在做 rem 布局的时候经常会设置一个根元素的字体大小，然后其余所有的像素可能都根据这个去计算，所以为了便于维护，我把这个根元素的大小抽离出来作为一个变量，然后在每个元素的样式中对这个变量进行运算就可以了，同时呢，我们还可以在动画中运用一些运算，我们一起来看下：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$root</span></span><span class="token punctuation">:</span> 28<span class="token punctuation">;</span>

<span class="token selector">html </span><span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token variable">$root</span>+px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">p </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>460rem <span class="token operator">/</span> <span class="token variable">$root</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>320rem <span class="token operator">/</span> <span class="token variable">$root</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@keyframes</span> sacle</span> <span class="token punctuation">{</span>
  <span class="token selector">0% </span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>800px <span class="token operator">-</span> <span class="token variable">$root</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">50% </span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 800px <span class="token operator">-</span> <span class="token variable">$root</span> <span class="token operator">*</span> 2<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">100% </span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>800px <span class="token operator">/</span> <span class="token variable">$root</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这段代码我们动态的计算了 rem 还有动画中的一些需要的运算。而且这样做的好处是我们可以随时按需更改变量而不需要重新把没处样式都再手动进行更改，这样就让项目的代码更具有扩展性并且更易于维护。它将会被转换为如下的 CSS 代码：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">html</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 28px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 16.4285714286rem<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 11.4285714286rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@keyframes</span> sacle</span> <span class="token punctuation">{</span>
  <span class="token selector">0%</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 772px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">50%</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 744px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">100%</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 28.5714285714px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在我们的项目中，我们会把 $root 这个变量抽出来到专门维护变量的文件中，然后供项目中所有的页面做运算使用。</p><h2 id="_10-小结" tabindex="-1"><a class="header-anchor" href="#_10-小结" aria-hidden="true">#</a> 10.小结</h2><p>本节我们讲解了 Sass 中的运算以及运算的应用，我们回忆一下都有哪些运算：</p><figure><img src="https://i0.hdslb.com/bfs/album/2236be21044d373d08033c892a9e88dbe2dbd6ed.png" alt="image-20220823191110579" tabindex="0" loading="lazy"><figcaption>image-20220823191110579</figcaption></figure><p>在编写样式的时候加减乘除运算可能会应用的比较多，而字符串运算、布尔值运算、关系运算在 Sass 函数中应用比较多，后面的章节我们会讲解 Sass 函数，而颜色运算官方已经不推荐大家使用了，取而代之的是颜色函数，所以这里我们也尽量不要使用颜色运算了。</p><p>在 CSS 中的某些需要你自己计算的值你可以尝试使用 Sass 运算来提升你的开发效率，而且像一些经常使用到的运算完全可以抽离出来统一维护，这样项目会更加易于维护，管理起来也更清晰！Sass 的运算我个人认为是一个能特别提升开发 CSS 效率的扩展功能。</p>`,68),c=[t];function o(l,i){return n(),a("div",null,c)}const d=s(e,[["render",o],["__file","04.html.vue"]]);export{d as default};
