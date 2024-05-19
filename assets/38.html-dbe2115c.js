import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-a1fbcbb6.js";const t={},p=e(`<h2 id="宏定义与函数以及-typedef-区别" tabindex="-1"><a class="header-anchor" href="#宏定义与函数以及-typedef-区别" aria-hidden="true">#</a> 宏定义与函数以及 typedef 区别</h2><ul><li>与函数的区别</li></ul><ul><li>从整个使用过程可以发现，带参数的宏定义，在源程序中出现的形式与函数很像。但是两者是有本质区别的： <blockquote><ul><li>宏定义不涉及存储空间的分配、参数类型匹配、参数传递、返回值问题</li><li>函数调用在程序运行时执行，而宏替换只在编译预处理阶段进行。所以带参数的宏比函数具有更高的执行效率</li></ul></blockquote></li></ul><ul><li>typedef 和#define 的区别</li></ul><ul><li>用宏定义表示数据类型和用 typedef 定义数据说明符的区别。</li><li>宏定义只是简单的字符串替换,￼ 是在预处理完成的</li><li>typedef 是在编译时处理的,它不是作简单的代换,而是对类型说明符 ￼ 重新命名。被命名的标识符具有类型定义说明的功能</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">typedef</span> <span class="token keyword">char</span> <span class="token operator">*</span>String<span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span> argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
     String str <span class="token operator">=</span> <span class="token string">&quot;This is a string!&quot;</span><span class="token punctuation">;</span>
     <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">String</span> <span class="token expression"><span class="token keyword">char</span> <span class="token operator">*</span></span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span> argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    String str <span class="token operator">=</span> <span class="token string">&quot;This is a string!&quot;</span><span class="token punctuation">;</span>
     <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">typedef</span> <span class="token keyword">char</span> <span class="token operator">*</span>String1<span class="token punctuation">;</span> <span class="token comment">// 给char *起了个别名String1</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">String2</span> <span class="token expression"><span class="token keyword">char</span> <span class="token operator">*</span> </span><span class="token comment">// 定义了宏String2</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span> argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">/*
        只有str1、str2、str3才是指向char类型的指针变量
        由于String1就是char *，所以上面的两行代码等于:
        char *str1;
        char *str2;
        */</span>
      String1 str1<span class="token punctuation">,</span> str2<span class="token punctuation">;</span>
        <span class="token comment">/*
        宏定义只是简单替换, 所以相当于
        char *str3, str4;
        *号只对最近的一个有效, 所以相当于
        char *str3;
        char str4;
        */</span>
      String2 str3<span class="token punctuation">,</span> str4<span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2>`,8),i=[p];function c(o,l){return s(),a("div",null,i)}const u=n(t,[["render",c],["__file","38.html.vue"]]);export{u as default};
