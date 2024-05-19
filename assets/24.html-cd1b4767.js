import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-a1fbcbb6.js";const e={},p=t(`<h2 id="结构体指针" tabindex="-1"><a class="header-anchor" href="#结构体指针" aria-hidden="true">#</a> 结构体指针</h2><ul><li>一个指针变量当用来指向一个结构体变量时,称之为结构体指针变量</li><li>格式: <code>struct 结构名 *结构指针变量名</code></li><li>示例:</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>      <span class="token comment">// 定义一个结构体类型</span>
      <span class="token keyword">struct</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
          <span class="token keyword">char</span> <span class="token operator">*</span>name<span class="token punctuation">;</span>
          <span class="token keyword">int</span> age<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>

     <span class="token comment">// 定义一个结构体变量</span>
     <span class="token keyword">struct</span> <span class="token class-name">Student</span> stu <span class="token operator">=</span> <span class="token punctuation">{</span>“lnj&quot;<span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

     <span class="token comment">// 定义一个指向结构体的指针变量</span>
     <span class="token keyword">struct</span> <span class="token class-name">Student</span> <span class="token operator">*</span>p<span class="token punctuation">;</span>

    <span class="token comment">// 指向结构体变量stu</span>
    p <span class="token operator">=</span> <span class="token operator">&amp;</span>stu<span class="token punctuation">;</span>

     <span class="token comment">/*
      这时候可以用3种方式访问结构体的成员
      */</span>
     <span class="token comment">// 方式1：结构体变量名.成员名</span>
     <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;name=%s, age = %d \\n&quot;</span><span class="token punctuation">,</span> stu<span class="token punctuation">.</span>name<span class="token punctuation">,</span> stu<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>

     <span class="token comment">// 方式2：(*指针变量名).成员名</span>
     <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;name=%s, age = %d \\n&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token operator">*</span>p<span class="token punctuation">)</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token operator">*</span>p<span class="token punctuation">)</span><span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>

     <span class="token comment">// 方式3：指针变量名-&gt;成员名</span>
     <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;name=%s, age = %d \\n&quot;</span><span class="token punctuation">,</span> p<span class="token operator">-&gt;</span>name<span class="token punctuation">,</span> p<span class="token operator">-&gt;</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>

     <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>通过结构体指针访问结构体成员, 可以通过以下两种方式</li></ul><ul><li>(*结构指针变量).成员名</li><li>结构指针变量-&gt;成员名(用熟)</li></ul><blockquote><ul><li>(pstu)两侧的括号不可少,因为成员符“.”的优先级高于“”。</li><li>如去掉括号写作pstu.num则等效于(pstu.num),这样,意义就完全不对了。</li></ul></blockquote><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2>`,7),c=[p];function o(l,i){return s(),a("div",null,c)}const r=n(e,[["render",o],["__file","24.html.vue"]]);export{r as default};
