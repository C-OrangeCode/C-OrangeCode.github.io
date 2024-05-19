import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-a1fbcbb6.js";const p={},c=e(`<h2 id="typedef关键字" tabindex="-1"><a class="header-anchor" href="#typedef关键字" aria-hidden="true">#</a> typedef关键字</h2><ul><li>C语言不仅􏰀供了丰富的数据类型,而且还允许由用户自己定义类型说明符,也就是说允许由用户为数据类型取“别名”。</li><li>格式: <code>typedef 原类型名 新类型名;</code></li></ul><ul><li>其中原类型名中含有定义部分,新类型名一般用大写表示,以便于区别。</li><li>有时也可用宏定义来代替typedef的功能,但是宏定义是由预处理完成的,而typedef则是在编译 时完成的,后者更为灵活方便。<br> ##typedef使用</li></ul><ul><li>基本数据类型</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">typedef</span> <span class="token keyword">int</span> INTEGER
INTEGER a<span class="token punctuation">;</span> <span class="token comment">// 等价于 int a;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>也可以在别名的基础上再起一个别名</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">typedef</span> <span class="token keyword">int</span> Integer<span class="token punctuation">;</span>

<span class="token keyword">typedef</span> Integer MyInteger<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>用typedef定义数组、指针、结构等类型将带来很大的方便,不仅使程序书写简单而且使意义更为 明确,因而增强了可读性。</p></li><li><p>数组类型</p></li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">typedef</span> <span class="token keyword">char</span> NAME<span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 表示NAME是字符数组类型,数组长度为20。然后可用NAME 说明变量,</span>
NAME a<span class="token punctuation">;</span> <span class="token comment">// 等价于 char a[20];</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>结构体类型</li></ul><ul><li>第一种形式:</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code> <span class="token keyword">struct</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token keyword">char</span> <span class="token operator">*</span>name<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">Person</span> PersonType<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>+ 第二种形式:
</code></pre><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token keyword">char</span> <span class="token operator">*</span>name<span class="token punctuation">;</span>
<span class="token punctuation">}</span> PersonType<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>+ 第三种形式:
</code></pre><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token keyword">char</span> <span class="token operator">*</span>name<span class="token punctuation">;</span>
<span class="token punctuation">}</span> PersonType<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>枚举</li></ul><ul><li>第一种形式:</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">enum</span> <span class="token class-name">Sex</span><span class="token punctuation">{</span>
    SexMan<span class="token punctuation">,</span>
    SexWoman<span class="token punctuation">,</span>
    SexOther
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">typedef</span> <span class="token keyword">enum</span> <span class="token class-name">Sex</span> SexType<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>+ 第二种形式:
</code></pre><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">typedef</span> <span class="token keyword">enum</span> <span class="token class-name">Sex</span><span class="token punctuation">{</span>
    SexMan<span class="token punctuation">,</span>
    SexWoman<span class="token punctuation">,</span>
    SexOther
<span class="token punctuation">}</span> SexType<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>+ 第三种形式:
</code></pre><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">typedef</span> <span class="token keyword">enum</span><span class="token punctuation">{</span>
    SexMan<span class="token punctuation">,</span>
    SexWoman<span class="token punctuation">,</span>
    SexOther
<span class="token punctuation">}</span> SexType<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>指针</li></ul><ul><li>typedef与指向结构体的指针</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code> <span class="token comment">// 定义一个结构体并起别名</span>
  <span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
      <span class="token keyword">float</span> x<span class="token punctuation">;</span>
      <span class="token keyword">float</span> y<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> Point<span class="token punctuation">;</span>

 <span class="token comment">// 起别名</span>
 <span class="token keyword">typedef</span> Point <span class="token operator">*</span>PP<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>typedef与指向函数的指针</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">// 定义一个sum函数，计算a跟b的和</span>
  <span class="token keyword">int</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">int</span> c <span class="token operator">=</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
      <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d + %d = %d&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> c<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">typedef</span> <span class="token keyword">int</span> <span class="token punctuation">(</span><span class="token operator">*</span>MySum<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 定义一个指向sum函数的指针变量p</span>
 MySum p <span class="token operator">=</span> sum<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2>`,29),t=[c];function l(i,o){return s(),a("div",null,t)}const r=n(p,[["render",l],["__file","37.html.vue"]]);export{r as default};
