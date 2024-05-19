import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-a1fbcbb6.js";const t={},p=e(`<div class="hint-container note"><p class="hint-container-title">注</p><ul><li>链表实现了，内存零碎数据的有效组织。比如，当我们用 malloc 来进行内存申请的时候，当内存足够，但是由于碎片太多，没有连续内存时，只能以申请失败而告终，而用链表这种数据结构来组织数据，就可以解决上类问题。</li></ul></div><figure><img src="https://img-blog.csdnimg.cn/img_convert/eba20792779d9d9a99e7d4ff0d23ef13.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="静态链表" tabindex="-1"><a class="header-anchor" href="#静态链表" aria-hidden="true">#</a> 静态链表</h2><figure><img src="https://img-blog.csdnimg.cn/img_convert/44a5722c917071e937da435fe5695a26.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string.h&gt;</span></span>

<span class="token comment">// 1.定义链表节点</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">node</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> data<span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">node</span> <span class="token operator">*</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span>Node<span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>

    <span class="token comment">// 2.创建链表节点</span>
    Node a<span class="token punctuation">;</span>
    Node b<span class="token punctuation">;</span>
    Node c<span class="token punctuation">;</span>

    <span class="token comment">// 3.初始化节点数据</span>
    a<span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    b<span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
    c<span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>

    <span class="token comment">// 4.链接节点</span>
    a<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token operator">&amp;</span>b<span class="token punctuation">;</span>
    b<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token operator">&amp;</span>c<span class="token punctuation">;</span>
    c<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>

    <span class="token comment">// 5.创建链表头</span>
    Node <span class="token operator">*</span>head <span class="token operator">=</span> <span class="token operator">&amp;</span>a<span class="token punctuation">;</span>

    <span class="token comment">// 6.使用链表</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>head <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> currentData <span class="token operator">=</span> head<span class="token operator">-&gt;</span>data<span class="token punctuation">;</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;currentData = %i\\n&quot;</span><span class="token punctuation">,</span> currentData<span class="token punctuation">)</span><span class="token punctuation">;</span>
        head <span class="token operator">=</span> head<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2>`,6),c=[p];function i(o,l){return s(),a("div",null,c)}const u=n(t,[["render",i],["__file","45.html.vue"]]);export{u as default};
