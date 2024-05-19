import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-a1fbcbb6.js";const t={},p=e(`<h2 id="什么是结构体" tabindex="-1"><a class="header-anchor" href="#什么是结构体" aria-hidden="true">#</a> 什么是结构体</h2><ul><li>结构体和数组一样属于构造类型</li><li>数组是用于保存一组相同类型数据的, 而结构体是用于保存一组不同类型数组的</li><li>例如,在学生登记表中,姓名应为字符型;学号可为整型或字符型;年龄应为整型;性别应为字符型;成绩可为整型或实型。</li><li>显然这组数据不能用数组来存放, 为了解决这个问题,C语言中给出了另一种构造数据类型——“结构(structure)”或叫“结构体”。</li></ul><hr><h2 id="定义结构体类型" tabindex="-1"><a class="header-anchor" href="#定义结构体类型" aria-hidden="true">#</a> 定义结构体类型</h2><ul><li>在使用结构体之前必须先定义结构体类型, 因为C语言不知道你的结构体中需要存储哪些类型数据, 我们必须通过定义结构体类型来告诉C语言, 我们的结构体中需要存储哪些类型的数据</li><li>格式:</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span>　结构体名<span class="token punctuation">{</span>
     类型名<span class="token number">1</span>　成员名<span class="token number">1</span><span class="token punctuation">;</span>
     类型名<span class="token number">2</span>　成员名<span class="token number">2</span><span class="token punctuation">;</span>
     ……
     类型名n　成员名n<span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>示例:</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
    <span class="token keyword">char</span> <span class="token operator">*</span>name<span class="token punctuation">;</span> <span class="token comment">// 姓名</span>
    <span class="token keyword">int</span> age<span class="token punctuation">;</span> <span class="token comment">// 年龄</span>
    <span class="token keyword">float</span> height<span class="token punctuation">;</span> <span class="token comment">// 身高</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="定义结构体变量" tabindex="-1"><a class="header-anchor" href="#定义结构体变量" aria-hidden="true">#</a> 定义结构体变量</h2><ul><li><p>定好好结构体类型之后, 我们就可以利用我们定义的结构体类型来定义结构体变量</p></li><li><p>格式: <code>struct 结构体名 结构体变量名;</code><br><img src="https://img-blog.csdnimg.cn/img_convert/a19ef99bede1b3b0d689959881390bd0.png" alt="" loading="lazy"></p></li><li><p>先定义结构体类型，再定义变量</p></li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
     <span class="token keyword">char</span> <span class="token operator">*</span>name<span class="token punctuation">;</span>
     <span class="token keyword">int</span> age<span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token punctuation">;</span>

 <span class="token keyword">struct</span> <span class="token class-name">Student</span> stu<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>定义结构体类型的同时定义变量</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
    <span class="token keyword">char</span> <span class="token operator">*</span>name<span class="token punctuation">;</span>
    <span class="token keyword">int</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span> stu<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>匿名结构体定义结构体变量</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token keyword">char</span> <span class="token operator">*</span>name<span class="token punctuation">;</span>
    <span class="token keyword">int</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span> stu<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><ul><li>第三种方法与第二种方法的区别在于,第三种方法中省去了结构体类型名称,而直接给出结构变量,这种结构体最大的问题是结构体类型不能复用</li></ul></blockquote><hr><h2 id="结构体成员访问" tabindex="-1"><a class="header-anchor" href="#结构体成员访问" aria-hidden="true">#</a> 结构体成员访问</h2><ul><li>一般对结构体变量的操作是以成员为单位进行的，引用的一般形式为：<code>结构体变量名.成员名</code></li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
     <span class="token keyword">char</span> <span class="token operator">*</span>name<span class="token punctuation">;</span>
     <span class="token keyword">int</span> age<span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token punctuation">;</span>
 <span class="token keyword">struct</span> <span class="token class-name">Student</span> stu<span class="token punctuation">;</span>
 <span class="token comment">// 访问stu的age成员</span>
 stu<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">27</span><span class="token punctuation">;</span>
 <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;age = %d&quot;</span><span class="token punctuation">,</span> stu<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="结构体变量的初始化" tabindex="-1"><a class="header-anchor" href="#结构体变量的初始化" aria-hidden="true">#</a> 结构体变量的初始化</h2><ul><li>定义的同时按顺序初始化</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
     <span class="token keyword">char</span> <span class="token operator">*</span>name<span class="token punctuation">;</span>
     <span class="token keyword">int</span> age<span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">struct</span> <span class="token class-name">Student</span> stu <span class="token operator">=</span> <span class="token punctuation">{</span>“lnj&quot;<span class="token punctuation">,</span> <span class="token number">27</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>定义的同时不按顺序初始化</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
     <span class="token keyword">char</span> <span class="token operator">*</span>name<span class="token punctuation">;</span>
     <span class="token keyword">int</span> age<span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">struct</span> <span class="token class-name">Student</span> stu <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">35</span><span class="token punctuation">,</span> <span class="token punctuation">.</span>name <span class="token operator">=</span> “lnj&quot;<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>先定义后逐个初始化</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
     <span class="token keyword">char</span> <span class="token operator">*</span>name<span class="token punctuation">;</span>
     <span class="token keyword">int</span> age<span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token punctuation">;</span>
 <span class="token keyword">struct</span> <span class="token class-name">Student</span> stu<span class="token punctuation">;</span>
stu<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;lnj&quot;</span><span class="token punctuation">;</span>
stu<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">35</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>先定义后一次性初始化</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
     <span class="token keyword">char</span> <span class="token operator">*</span>name<span class="token punctuation">;</span>
     <span class="token keyword">int</span> age<span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">struct</span> <span class="token class-name">Student</span> stu<span class="token punctuation">;</span>
stu2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Student</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token string">&quot;lnj&quot;</span><span class="token punctuation">,</span> <span class="token number">35</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="结构体类型作用域" tabindex="-1"><a class="header-anchor" href="#结构体类型作用域" aria-hidden="true">#</a> 结构体类型作用域</h2><ul><li>结构类型定义在函数内部的作用域与局部变量的作用域是相同的</li></ul><ul><li>从定义的那一行开始, 直到遇到return或者大括号结束为止</li></ul><ul><li>结构类型定义在函数外部的作用域与全局变量的作用域是相同的</li></ul><ul><li>从定义的那一行开始,直到本文件结束为止</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">//定义一个全局结构体,作用域到文件末尾</span>
<span class="token keyword">struct</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token keyword">char</span> <span class="token operator">*</span>name<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span> argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">//定义局部结构体名为Person,会屏蔽全局结构体</span>
    <span class="token comment">//局部结构体作用域,从定义开始到“}”块结束</span>
    <span class="token keyword">struct</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">// 使用局部结构体类型</span>
    <span class="token keyword">struct</span> <span class="token class-name">Person</span> pp<span class="token punctuation">;</span>
    pp<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">50</span><span class="token punctuation">;</span>
    pp<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;zbz&quot;</span><span class="token punctuation">;</span>

    <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">//使用全局的结构体定义结构体变量p</span>
    <span class="token keyword">struct</span> <span class="token class-name">Person</span> p <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token string">&quot;sb&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d,%s\\n&quot;</span><span class="token punctuation">,</span>p<span class="token punctuation">.</span>age<span class="token punctuation">,</span>p<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2>`,39),c=[p];function l(i,o){return s(),a("div",null,c)}const r=n(t,[["render",l],["__file","22.html.vue"]]);export{r as default};
