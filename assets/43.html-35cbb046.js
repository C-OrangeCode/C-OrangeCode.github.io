import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-a1fbcbb6.js";const e={},p=t(`<h2 id="calloc-函数" tabindex="-1"><a class="header-anchor" href="#calloc-函数" aria-hidden="true">#</a> calloc 函数</h2><table><thead><tr><th>函数声明</th><th>void *calloc(size_t nmemb, size_t size);</th></tr></thead><tbody><tr><td>所在文件</td><td>stdlib.h</td></tr><tr><td>函数功能</td><td>申请堆内存空间并返回，所申请的空间，自动清零</td></tr><tr><td>参数及返回解析</td><td></td></tr><tr><td>参数</td><td>size_t nmemb 所需内存单元数量</td></tr><tr><td>参数</td><td>size_t size 内存单元字节数量</td></tr><tr><td>返回值</td><td>void * 成功返回非空指针指向申请的空间 ，失败返回 NULL</td></tr></tbody></table><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">/*
    // 1.申请3块4个字节存储空间
    int *p = (int *)malloc(sizeof(int) * 3);
    // 2.使用申请好的3块存储空间
    p[0] = 1;
    p[1] = 3;
    p[2] = 5;
    printf(&quot;p[0] = %i\\n&quot;, p[0]);
    printf(&quot;p[1] = %i\\n&quot;, p[1]);
    printf(&quot;p[2] = %i\\n&quot;, p[2]);
    // 3.释放空间
    free(p);
    */</span>

    <span class="token comment">// 1.申请3块4个字节存储空间</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>p <span class="token operator">=</span> <span class="token function">calloc</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 2.使用申请好的3块存储空间</span>
    p<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    p<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
    p<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;p[0] = %i\\n&quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;p[1] = %i\\n&quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;p[2] = %i\\n&quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 3.释放空间</span>
    <span class="token function">free</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2>`,4),i=[p];function c(o,l){return s(),a("div",null,i)}const r=n(e,[["render",c],["__file","43.html.vue"]]);export{r as default};
