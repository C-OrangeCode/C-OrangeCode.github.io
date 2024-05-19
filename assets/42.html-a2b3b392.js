import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-a1fbcbb6.js";const e={},p=t(`<h2 id="free-函数" tabindex="-1"><a class="header-anchor" href="#free-函数" aria-hidden="true">#</a> free 函数</h2><ul><li>注意: 通过 malloc 申请的存储空间一定要释放, 所以 malloc 和 free 函数总是成对出现</li></ul><table><thead><tr><th>函数声明</th><th>void free(void *p);</th></tr></thead><tbody><tr><td>所在文件</td><td>stdlib.h</td></tr><tr><td>函数功能</td><td>释放申请的堆内存</td></tr><tr><td>参数及返回解析</td><td></td></tr><tr><td>参数</td><td>void* p 指向手动申请的空间</td></tr><tr><td>返回值</td><td>void 无返回</td></tr></tbody></table><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 1.申请4个字节存储空间</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>p <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 2.初始化4个字节存储空间为0</span>
    <span class="token function">memset</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 3.释放申请的存储空间</span>
    <span class="token function">free</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2>`,5),c=[p];function o(i,l){return s(),a("div",null,c)}const u=n(e,[["render",o],["__file","42.html.vue"]]);export{u as default};