import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-a1fbcbb6.js";const e={},p=t(`<h2 id="结构体嵌套定义" tabindex="-1"><a class="header-anchor" href="#结构体嵌套定义" aria-hidden="true">#</a> 结构体嵌套定义</h2><ul><li>成员也可以又是一个结构,即构成了嵌套的结构</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">Date</span><span class="token punctuation">{</span>
     <span class="token keyword">int</span> month<span class="token punctuation">;</span>
     <span class="token keyword">int</span> day<span class="token punctuation">;</span>
     <span class="token keyword">int</span> year<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">struct</span>  <span class="token class-name">stu</span><span class="token punctuation">{</span>
     <span class="token keyword">int</span> num<span class="token punctuation">;</span>
    <span class="token keyword">char</span> <span class="token operator">*</span>name<span class="token punctuation">;</span>
    <span class="token keyword">char</span> sex<span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">Date</span> birthday<span class="token punctuation">;</span>
    Float score<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在stu中嵌套存储Date结构体内容<br><img src="https://img-blog.csdnimg.cn/img_convert/de4aedd768012888dc7b2e70a744c86d.png" alt="" loading="lazy"></li></ul><blockquote><ul><li>注意:</li><li>结构体不可以嵌套自己变量,可以嵌套指向自己这种类型的指针</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
 <span class="token keyword">int</span> age<span class="token punctuation">;</span>
 <span class="token keyword">struct</span> <span class="token class-name">Student</span> stu<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><ul><li>对嵌套结构体成员的访问 <ul><li>如果某个成员也是结构体变量，可以连续使用成员运算符&quot;.&quot;访问最低一级成员</li></ul></li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">Date</span> <span class="token punctuation">{</span>
       <span class="token keyword">int</span> year<span class="token punctuation">;</span>
       <span class="token keyword">int</span> month<span class="token punctuation">;</span>
       <span class="token keyword">int</span> day<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">struct</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
      <span class="token keyword">char</span> <span class="token operator">*</span>name<span class="token punctuation">;</span>
      <span class="token keyword">struct</span> <span class="token class-name">Date</span> birthday<span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token punctuation">;</span>

 <span class="token keyword">struct</span> <span class="token class-name">Student</span> stu<span class="token punctuation">;</span>
 stu<span class="token punctuation">.</span>birthday<span class="token punctuation">.</span>year <span class="token operator">=</span> <span class="token number">1986</span><span class="token punctuation">;</span>
 stu<span class="token punctuation">.</span>birthday<span class="token punctuation">.</span>month <span class="token operator">=</span> <span class="token number">9</span><span class="token punctuation">;</span>
 stu<span class="token punctuation">.</span>birthday<span class="token punctuation">.</span>day <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="结构体和函数" tabindex="-1"><a class="header-anchor" href="#结构体和函数" aria-hidden="true">#</a> 结构体和函数</h2><ul><li>结构体虽然是构造类型, 但是结构体之间赋值是值拷贝, 而不是地址传递</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>    <span class="token keyword">struct</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
        <span class="token keyword">char</span> <span class="token operator">*</span>name<span class="token punctuation">;</span>
        <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">Person</span> p1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;lnj&quot;</span><span class="token punctuation">,</span> <span class="token number">35</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">Person</span> p2<span class="token punctuation">;</span>
    p2 <span class="token operator">=</span> p1<span class="token punctuation">;</span>
    p2<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;zs&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 修改p2不会影响p1</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;p1.name = %s\\n&quot;</span><span class="token punctuation">,</span> p1<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// lnj</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;p2.name = %s\\n&quot;</span><span class="token punctuation">,</span> p2<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//  zs</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>所以结构体变量作为函数形参时也是值传递, 在函数内修改形参, 不会影响外界实参</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">struct</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
    <span class="token keyword">char</span> <span class="token operator">*</span>name<span class="token punctuation">;</span>
    <span class="token keyword">int</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Person</span> per<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">struct</span> <span class="token class-name">Person</span> p1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;lnj&quot;</span><span class="token punctuation">,</span> <span class="token number">35</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;p1.name = %s\\n&quot;</span><span class="token punctuation">,</span> p1<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// lnj</span>
    <span class="token function">test</span><span class="token punctuation">(</span>p1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;p1.name = %s\\n&quot;</span><span class="token punctuation">,</span> p1<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// lnj</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Person</span> per<span class="token punctuation">)</span><span class="token punctuation">{</span>
    per<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;zs&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2>`,14),c=[p];function o(l,i){return s(),a("div",null,c)}const r=n(e,[["render",o],["__file","27.html.vue"]]);export{r as default};
