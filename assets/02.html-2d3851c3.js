import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,e}from"./app-a1fbcbb6.js";const t={},p=e(`<h1 id="_02-【js表达式与操作符】" tabindex="-1"><a class="header-anchor" href="#_02-【js表达式与操作符】" aria-hidden="true">#</a> 02 【JS表达式与操作符】</h1><p><strong>什么是表达式和运算符？</strong></p><p>表达式：由 操作数 和 运算符 组成的式子。</p><p>表达式的分类：算术、关系、逻辑、赋值、综合。</p><h2 id="_1-算术表达式" tabindex="-1"><a class="header-anchor" href="#_1-算术表达式" aria-hidden="true">#</a> 1.算术表达式</h2><h3 id="_1-1-算术运算符" tabindex="-1"><a class="header-anchor" href="#_1-1-算术运算符" aria-hidden="true">#</a> 1.1 算术运算符</h3><table><thead><tr><th>意义</th><th>运算符</th></tr></thead><tbody><tr><td>加</td><td><code>+</code></td></tr><tr><td>减</td><td><code>-</code></td></tr><tr><td>乘</td><td><code>*</code></td></tr><tr><td>除</td><td><code>/</code></td></tr><tr><td>取余</td><td><code>%</code></td></tr></tbody></table><blockquote><p>推荐一律使用 <code>()</code> 来强制规定优先级！</p></blockquote><p><code>+</code> 有 “加法” 和 “连字符” 两种作用，如果 <code>+</code> 的某一边是字符串那么就为 ”连字符“，否则为 ”加法“。</p><h3 id="_1-2-隐式类型转换" tabindex="-1"><a class="header-anchor" href="#_1-2-隐式类型转换" aria-hidden="true">#</a> 1.2 隐式类型转换</h3><p>如果参与数学运算的某操作数不是数字类型，那么 JS 会自动将此操作数转换为数字型。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token number">3</span> <span class="token operator">*</span> <span class="token string">&#39;4&#39;</span><span class="token punctuation">;</span>        <span class="token comment">// 12</span>
 <span class="token boolean">true</span> <span class="token operator">+</span> <span class="token boolean">true</span><span class="token punctuation">;</span>    <span class="token comment">// 2</span>
 <span class="token boolean">false</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>      <span class="token comment">// 2</span>
 <span class="token number">3</span> <span class="token operator">*</span> <span class="token string">&#39;2天&#39;</span><span class="token punctuation">;</span>      <span class="token comment">// NaN</span>
 <span class="token string">&quot;z&quot;</span> <span class="token operator">*</span> <span class="token string">&quot;j&quot;</span><span class="token punctuation">;</span>      <span class="token comment">// NaN</span>
 <span class="token number">3</span> <span class="token operator">+</span> <span class="token string">&#39;2天&#39;</span><span class="token punctuation">;</span>      <span class="token comment">// &#39;32天&#39;</span>
 <span class="token number">3</span> <span class="token operator">+</span> <span class="token keyword">null</span><span class="token punctuation">;</span>       <span class="token comment">// 0</span>
 <span class="token number">3</span> <span class="token operator">*</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>         <span class="token comment">// 0</span>
 <span class="token number">3</span> <span class="token operator">*</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">;</span>        <span class="token comment">// 0</span>
 <span class="token number">3</span> <span class="token operator">+</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>         <span class="token comment">// &#39;3&#39;</span>
 <span class="token number">3</span> <span class="token operator">+</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">;</span>        <span class="token comment">// &#39;3 &#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>隐式转换的本质是 JS 内部自动调用 Number() 函数</p></blockquote><h3 id="_1-3-有关ieee754" tabindex="-1"><a class="header-anchor" href="#_1-3-有关ieee754" aria-hidden="true">#</a> 1.3 有关IEEE754</h3><p>在 JS 中，有些小数的数学运算不是很精准。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token number">0.1</span> <span class="token operator">+</span> <span class="token number">0.2</span><span class="token punctuation">;</span>  <span class="token comment">// 0.30000000000000004</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>JS 使用了 IEEE754 二进制浮点数算术标准，这会使一些个别的小数运算产生 “丢失精度” 问题。</p><p>注意：不是所有的小数运算都会出现精度问题，只是少数部分。</p><blockquote><p>几乎所有的高级语言都使用了 IEEE754 二进制浮点数算术标准。</p><p>IEEE754 二进制浮点数算术标准是计算机底层编译标准，了解即可！</p></blockquote><p>【解决办法】</p><p>在进行小数运算时，要调用数字的 <code>toFixed()</code> 方法保留指定的小数位数。</p><blockquote><p><code>toFixed()</code> 括号内接受一个保留小数位数的参数。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token punctuation">(</span><span class="token number">0.1</span> <span class="token operator">+</span> <span class="token number">0.2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>             <span class="token comment">// &#39;0.30&#39;，默认得到一个字符串值</span>
 <span class="token function">Number</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">0.1</span> <span class="token operator">+</span> <span class="token number">0.2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">// 0.3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>toFixed()</code> 遵循 “四舍五入” 原则。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token punctuation">(</span><span class="token number">0.9945</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// &quot;0.995&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><blockquote><p>最后要注意浮点数的相等比较：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token number">1</span> <span class="token operator">/</span> <span class="token number">3</span> <span class="token operator">===</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">-</span> <span class="token number">2</span> <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这不是 JavaScript 的设计缺陷。浮点数在运算过程中会产生误差，因为计算机无法精确表示无限循环小数。要比较两个浮点数是否相等，只能计算它们之差的绝对值，看是否小于某个阈值：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">/</span> <span class="token number">3</span> <span class="token operator">-</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">-</span> <span class="token number">2</span> <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0.0000001</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><blockquote><p>还有一种解决技巧，就是将浮点数转换为整数进行计算：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token number">0.1</span> <span class="token operator">+</span> <span class="token number">0.2</span><span class="token punctuation">;</span>  <span class="token comment">// 0.30000000000000004</span>
 <span class="token punctuation">(</span><span class="token number">0.1</span> <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> <span class="token number">0.2</span> <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">// 0.3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_1-4-幂和开根号" tabindex="-1"><a class="header-anchor" href="#_1-4-幂和开根号" aria-hidden="true">#</a> 1.4 幂和开根号</h3><p>JS 中没有提供幂运算、开根号的运算符，需要使用 Math 对象的相关方法进行计算。</p><p><code>Math.pow(a, b)</code>：求 a 的 b 次方。</p><p><code>Math.sqrt(a)</code>：求 a 的平方根。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// 8</span>
 Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// 9</span>
 Math<span class="token punctuation">.</span><span class="token function">sqrt</span><span class="token punctuation">(</span><span class="token number">81</span><span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">// 9</span>
 Math<span class="token punctuation">.</span><span class="token function">sqrt</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">81</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// NaN</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-5-向上取整和向下取整" tabindex="-1"><a class="header-anchor" href="#_1-5-向上取整和向下取整" aria-hidden="true">#</a> 1.5 向上取整和向下取整</h3><p><code>Math.ceil()</code>：向上取整。</p><p><code>Math.floor()</code>：向下取整。</p><p><code>Math.round()</code>：把一个数字舍入为最接近的整数（“四舍六入”，“五不一定”）</p><blockquote><p>注意：向上、向下的标准是：X轴正方向为上！</p><p>负 ———— 0 ————&gt; 正</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span><span class="token number">2.4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>			<span class="token comment">// 3</span>
Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token number">2.4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>		<span class="token comment">// 2</span>

Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">2.4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>		<span class="token comment">// -2</span>
Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">2.4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>		<span class="token comment">// -3</span>

Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>			<span class="token comment">// 2</span>
Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>			<span class="token comment">// 2		</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2系表达式" tabindex="-1"><a class="header-anchor" href="#_2系表达式" aria-hidden="true">#</a> 2系表达式</h2><h3 id="_2-1-关系运算符" tabindex="-1"><a class="header-anchor" href="#_2-1-关系运算符" aria-hidden="true">#</a> 2.1 关系运算符</h3><table><thead><tr><th>意义</th><th>运算符</th></tr></thead><tbody><tr><td>大于</td><td><code>&gt;</code></td></tr><tr><td>小于</td><td><code>&lt;</code></td></tr><tr><td>大于或等于</td><td><code>&gt;=</code></td></tr><tr><td>小于或等于</td><td><code>&lt;=</code></td></tr><tr><td>等于</td><td><code>==</code></td></tr><tr><td>不等于</td><td><code>!=</code></td></tr><tr><td>全等于</td><td><code>===</code></td></tr><tr><td>不全等于</td><td><code>!==</code></td></tr></tbody></table><h3 id="_2-2-相等和全等" tabindex="-1"><a class="header-anchor" href="#_2-2-相等和全等" aria-hidden="true">#</a> 2.2 相等和全等</h3><p>两个等号 <code>==</code> 运算符，不考虑值的类型，它会进行隐式转换后比较值的字面量是否相等。</p><p>三个等号 <code>===</code> 运算符，不仅比较值是否相同，也比较类型是否相同。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">5</span> <span class="token operator">==</span> <span class="token string">&#39;5&#39;</span><span class="token punctuation">;</span>		<span class="token comment">// true</span>
<span class="token number">5</span> <span class="token operator">===</span> <span class="token string">&#39;5&#39;</span><span class="token punctuation">;</span>		<span class="token comment">// false</span>
<span class="token number">1</span> <span class="token operator">==</span> <span class="token boolean">true</span><span class="token punctuation">;</span>			<span class="token comment">// true</span>
<span class="token number">1</span> <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">;</span>			<span class="token comment">// false</span>

<span class="token number">0</span> <span class="token operator">==</span> <span class="token boolean">false</span><span class="token punctuation">;</span>			<span class="token comment">// true</span>
<span class="token number">0</span> <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">;</span> 		<span class="token comment">// false</span>

<span class="token number">0</span> <span class="token operator">==</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>		<span class="token comment">// false</span>
<span class="token number">0</span> <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>	<span class="token comment">// false</span>

<span class="token keyword">undefined</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">;</span>	<span class="token comment">// true</span>
<span class="token keyword">undefined</span> <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">;</span>	<span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>null 和 undefined 用 == 进行比较涉及隐式强制类型转换，ES5 规范中规定。</p><p>=== 比较为 false，是因为 null 与 undefined 类型不同。</p><p>建议没有特殊情况请一律使用 ===</p></blockquote><h3 id="_2-3-nan不自等" tabindex="-1"><a class="header-anchor" href="#_2-3-nan不自等" aria-hidden="true">#</a> 2.3 NaN不自等</h3><p>NaN 作为一个特殊的数字类型值，它在用 <code>==</code> 比较的时候也有特殊的结果。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">NaN</span> <span class="token operator">==</span> <span class="token number">NaN</span><span class="token punctuation">;</span>			<span class="token comment">// false</span>
<span class="token number">NaN</span>	<span class="token operator">===</span> <span class="token number">NaN</span><span class="token punctuation">;</span>		<span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>【如何判断某变量值为 NaN】</p><p><code>isNaN()</code> 函数可以用来判断变量值是否为 NaN。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">)</span><span class="token punctuation">;</span>		<span class="token comment">// true</span>
<span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>		<span class="token comment">// false</span>
<span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token string">&quot;5&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>		<span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>但 isNaN() 也不好用，它的机理是：只要该变量传入 Number() 的执行结果是 NaN，则 isNaN() 函数都会得到 true。</p><p>对于，undefined 和 null，这种情况一般来说需要先进行单独判断，再进行 isNaN 判断。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// true</span>
<span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token string">&#39;3天&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	   <span class="token comment">// true</span>
<span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>		<span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_2-4-js中没有连比" tabindex="-1"><a class="header-anchor" href="#_2-4-js中没有连比" aria-hidden="true">#</a> 2.4 JS中没有连比</h3><p>例如：<code>3 &lt;= a &lt;= 15</code> 的写法是错误的，应该为：<code>a &gt;= 3 &amp;&amp; a &lt;= 15</code>。</p><h2 id="_3-逻辑表达式" tabindex="-1"><a class="header-anchor" href="#_3-逻辑表达式" aria-hidden="true">#</a> 3.逻辑表达式</h2><h3 id="_3-1-逻辑运算符" tabindex="-1"><a class="header-anchor" href="#_3-1-逻辑运算符" aria-hidden="true">#</a> 3.1 逻辑运算符</h3><table><thead><tr><th>意义</th><th>运算符</th></tr></thead><tbody><tr><td>非</td><td><code>!</code></td></tr><tr><td>与</td><td><code>&amp;&amp;</code></td></tr><tr><td>或</td><td>\`</td></tr></tbody></table><h3 id="_3-2-非运算" tabindex="-1"><a class="header-anchor" href="#_3-2-非运算" aria-hidden="true">#</a> 3.2 非运算</h3><p><code>!</code> 表示 “非”，也可以称为 “置反运算”。</p><p><code>!</code> 是一个 “单目运算符”，只需要一个操作数。</p><p>置反运算的结果一定是布尔值。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">!</span><span class="token boolean">true</span><span class="token punctuation">;</span>			<span class="token comment">// false</span>
<span class="token operator">!</span><span class="token boolean">false</span><span class="token punctuation">;</span>			<span class="token comment">// true</span>
<span class="token operator">!</span><span class="token number">0</span><span class="token punctuation">;</span>				<span class="token comment">// true</span>
<span class="token operator">!</span><span class="token keyword">undefined</span><span class="token punctuation">;</span>		<span class="token comment">// true</span>
<span class="token operator">!</span><span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>			<span class="token comment">// true</span>
<span class="token operator">!</span><span class="token string">&#39; &#39;</span><span class="token punctuation">;</span>			<span class="token comment">// false</span>
<span class="token operator">!</span><span class="token keyword">null</span><span class="token punctuation">;</span>			<span class="token comment">// true</span>
<span class="token operator">!</span><span class="token string">&#39;imooc&#39;</span><span class="token punctuation">;</span>		<span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>!!</code> 常用于确定一个值的布尔属性。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">!</span><span class="token operator">!</span><span class="token boolean">true</span><span class="token punctuation">;</span>		<span class="token comment">// true</span>
<span class="token operator">!</span><span class="token operator">!</span><span class="token number">0</span><span class="token punctuation">;</span>		<span class="token comment">// false</span>
<span class="token operator">!</span><span class="token operator">!</span><span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>		<span class="token comment">// false</span>
<span class="token operator">!</span><span class="token operator">!</span><span class="token string">&#39; &#39;</span><span class="token punctuation">;</span>		<span class="token comment">// true</span>
<span class="token operator">!</span><span class="token operator">!</span><span class="token string">&#39;imooc&#39;</span><span class="token punctuation">;</span>	<span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_3-3-与运算" tabindex="-1"><a class="header-anchor" href="#_3-3-与运算" aria-hidden="true">#</a> 3.3 与运算</h3><p><code>&amp;&amp;</code> 是 “双目运算符”。</p><p>核心：<code>全真为真、有假即假</code>。</p><h3 id="_3-4-或运算" tabindex="-1"><a class="header-anchor" href="#_3-4-或运算" aria-hidden="true">#</a> 3.4 或运算</h3><p><code>||</code> 是 “双目运算符”。</p><p>核心：<code>全假为假、有真即真</code>。</p><h3 id="_3-5-短路运算" tabindex="-1"><a class="header-anchor" href="#_3-5-短路运算" aria-hidden="true">#</a> 3.5 短路运算</h3><p><code>&amp;&amp;</code> 与 <code>||</code>，都属于 “短路运算符”。</p><p>（1）<code>&amp;&amp;</code> 短路运算</p><p>由于 <code>&amp;&amp;</code> 运算的核心是：“全真为真、有假即假”，所以：</p><ul><li>如果 <code>a &amp;&amp; b</code> 中 <code>a</code> 为真，那么该表达式的值由 <code>b</code> 决定（计算 a 又计算 b）</li><li>如果 <code>a &amp;&amp; b</code> 中 <code>a</code> 为假，那么该表达式的值由 <code>a</code> 决定（只计算 a）</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">3</span> <span class="token operator">&amp;&amp;</span> <span class="token number">6</span><span class="token punctuation">;</span>				<span class="token comment">// 6</span>
<span class="token keyword">undefined</span> <span class="token operator">&amp;&amp;</span> <span class="token number">15</span><span class="token punctuation">;</span>	<span class="token comment">// undefined</span>
<span class="token number">15</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>	<span class="token comment">// undefined</span>
<span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> <span class="token number">2</span><span class="token punctuation">;</span>			<span class="token comment">// null</span>
<span class="token string">&#39;&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token number">16</span><span class="token punctuation">;</span>			<span class="token comment">// &#39;&#39;</span>
<span class="token number">NaN</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>	<span class="token comment">// NaN</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）<code>||</code> 短路运算</p><p>由于 <code>||</code> 运算的核心是：“全假为假、有真即真”，所以：</p><ul><li>如果 <code>a || b</code> 中 <code>a</code> 为真，那么该表达式的值由 <code>a</code> 决定（只计算 a）</li><li>如果 <code>a || b</code> 中 <code>a</code> 为假，那么该表达式的值由 <code>b</code> 决定（计算 a 又计算 b）</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">3</span> <span class="token operator">||</span> <span class="token number">6</span><span class="token punctuation">;</span>				<span class="token comment">// 3</span>
<span class="token number">0</span> <span class="token operator">||</span> <span class="token number">6</span><span class="token punctuation">;</span>				<span class="token comment">// 6</span>
<span class="token keyword">null</span> <span class="token operator">||</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>	<span class="token comment">// undefined</span>
<span class="token string">&#39;a&#39;</span> <span class="token operator">||</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">;</span>			<span class="token comment">// &#39;a&#39;</span>
<span class="token number">NaN</span> <span class="token operator">||</span> <span class="token keyword">null</span><span class="token punctuation">;</span>		<span class="token comment">// null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-6-逻辑运算的优先级" tabindex="-1"><a class="header-anchor" href="#_3-6-逻辑运算的优先级" aria-hidden="true">#</a> 3.6 逻辑运算的优先级</h3><p>优先级：<code>!</code> &gt; <code>&amp;&amp;</code> &gt; <code>||</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">!</span><span class="token boolean">true</span> <span class="token operator">||</span> <span class="token boolean">true</span><span class="token punctuation">;</span>		<span class="token comment">// true</span>
<span class="token number">3</span> <span class="token operator">&amp;&amp;</span> <span class="token number">4</span> <span class="token operator">||</span> <span class="token number">5</span> <span class="token operator">&amp;&amp;</span> <span class="token number">6</span>；  <span class="token comment">// 4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>推荐使用 <code>()</code> 来规定优先级。</p></blockquote><h2 id="_4-赋值表达式" tabindex="-1"><a class="header-anchor" href="#_4-赋值表达式" aria-hidden="true">#</a> 4.赋值表达式</h2><h3 id="_4-1-赋值运算符" tabindex="-1"><a class="header-anchor" href="#_4-1-赋值运算符" aria-hidden="true">#</a> 4.1 赋值运算符</h3><table><thead><tr><th>意义</th><th>运算符</th></tr></thead><tbody><tr><td>赋值</td><td><code>=</code></td></tr><tr><td>快捷赋值</td><td><code>+=</code>、<code>-=</code>、<code>*=</code>、<code>/=</code>、<code>%=</code></td></tr><tr><td>自增运算</td><td><code>++</code></td></tr><tr><td>自减运算</td><td><code>--</code></td></tr></tbody></table><h3 id="_4-2-赋值运算产生值" tabindex="-1"><a class="header-anchor" href="#_4-2-赋值运算产生值" aria-hidden="true">#</a> 4.2 赋值运算产生值</h3><p>赋值运算也产生值，等号后面的值将作为 “赋值运算的值”。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> a<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>		<span class="token comment">// 4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这就意味着，可以连续使用赋值运算符。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">;</span>
a <span class="token operator">=</span> b <span class="token operator">=</span> c <span class="token operator">=</span> <span class="token number">15</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>		<span class="token comment">// 15</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>		<span class="token comment">// 15</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span> 	<span class="token comment">// 15</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>在实际开发中不建议使用连续赋值！</p></blockquote><h3 id="_4-3-自增自减运算" tabindex="-1"><a class="header-anchor" href="#_4-3-自增自减运算" aria-hidden="true">#</a> 4.3 自增自减运算</h3><p><code>a++</code>：先用再加；<code>++a</code>：先加再用。</p><p>自增可以使变量在原值的基础上自增1<br> 自增使用 ++<br> 自增可以使用 前++（++a）后++(a++)<br> 无论是++a 还是 a++都会立即使原变量自增1<br> 不同的是++a和a++的值是不同的，<br> ++a的值是变量的新值（自增后的值）<br> a++的值是变量的原值（自增前的值）</p><p><code>a--</code>：先用再减；<code>--a</code>：先减再用。</p><p>自减可以使变量在原值的基础上自减1<br> 自减使用<br> 自减可以使用 前（a）后(a)<br> 无论是a 还是 a都会立即使原变量自减1<br> 不同的是a和a的值是不同的，<br> a的值是变量的新值（自减后的值）<br> a的值是变量的原值（自减前的值）</p><h2 id="_5-三元运算符" tabindex="-1"><a class="header-anchor" href="#_5-三元运算符" aria-hidden="true">#</a> 5.三元运算符</h2><p><code>条件表达式 ? 表达式1 : 表达式2;</code></p><p>当条件表达式为真时执行表达式1并返回结果，否则执行表达式2并返回结果。</p><p>【三元运算符的用途】</p><p>根据某个条件是否成立，在两个不同值中选择变量的值。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> age <span class="token operator">=</span> <span class="token number">24</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> type <span class="token operator">=</span> age <span class="token operator">&gt;=</span> <span class="token number">18</span> <span class="token operator">?</span> <span class="token string">&#39;成年人&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;未成年人&#39;</span><span class="token punctuation">;</span>
<span class="token function">alert</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-综合运算的运算顺序" tabindex="-1"><a class="header-anchor" href="#_6-综合运算的运算顺序" aria-hidden="true">#</a> 6.综合运算的运算顺序</h2><p>和数学中一样，JS中的运算符也是具有优先级的，<br> 比如 先乘除 后加减 先与 后或<br> 具体的优先级可以参考优先级的表格，在表格中越靠上的优先级越高，<br> 优先级越高的越优先计算，优先级相同的，从左往右计算。</p><p>非运算 &gt; 数学运算 &gt; 关系运算 &gt; 逻辑运算</p><blockquote><p>优先级不需要记忆，如果越到拿不准的，使用()来改变优先级。</p></blockquote>`,107),o=[p];function c(l,i){return a(),s("div",null,o)}const u=n(t,[["render",c],["__file","02.html.vue"]]);export{u as default};
