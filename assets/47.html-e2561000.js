import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-a1fbcbb6.js";const t={},p=e(`<h2 id="链表销毁" tabindex="-1"><a class="header-anchor" href="#链表销毁" aria-hidden="true">#</a> 链表销毁</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/**
 * @brief destroyList 销毁链表
 * @param head 链表头指针
 */</span>
<span class="token keyword">void</span> <span class="token function">destroyList</span><span class="token punctuation">(</span>Node <span class="token operator">*</span>head<span class="token punctuation">)</span><span class="token punctuation">{</span>
    Node <span class="token operator">*</span>cur <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>head <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        cur <span class="token operator">=</span> head<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
        <span class="token function">free</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">;</span>
        head <span class="token operator">=</span> cur<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="链表长度计算" tabindex="-1"><a class="header-anchor" href="#链表长度计算" aria-hidden="true">#</a> 链表长度计算</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/**
 * @brief listLength 计算链表长度
 * @param head 链表头指针
 * @return 链表长度
 */</span>
<span class="token keyword">int</span> <span class="token function">listLength</span><span class="token punctuation">(</span>Node <span class="token operator">*</span>head<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    head <span class="token operator">=</span> head<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">{</span>
       count<span class="token operator">++</span><span class="token punctuation">;</span>
       head <span class="token operator">=</span> head<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> count<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2>`,5),c=[p];function o(i,l){return s(),a("div",null,c)}const u=n(t,[["render",o],["__file","47.html.vue"]]);export{u as default};
