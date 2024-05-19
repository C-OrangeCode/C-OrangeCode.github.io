import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-a1fbcbb6.js";const t={},c=e(`<h2 id="结构体变量占用存储空间大小" tabindex="-1"><a class="header-anchor" href="#结构体变量占用存储空间大小" aria-hidden="true">#</a> 结构体变量占用存储空间大小</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>    <span class="token keyword">struct</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> age<span class="token punctuation">;</span> <span class="token comment">// 4</span>
        <span class="token keyword">char</span> ch<span class="token punctuation">;</span> <span class="token comment">// 1</span>
        <span class="token keyword">double</span> score<span class="token punctuation">;</span> <span class="token comment">// 8</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">Person</span> p<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;sizeof = %i\\n&quot;</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 16</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>占用内存最大属性是score, 占8个字节, 所以第一次会分配8个字节</li><li>将第一次分配的8个字节分配给age4个,分配给ch1个, 还剩下3个字节</li><li>当需要分配给score时, 发现只剩下3个字节, 所以会再次开辟8个字节存储空间</li><li>一共开辟了两次8个字节空间, 所以最终p占用16个字节</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>    <span class="token keyword">struct</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> age<span class="token punctuation">;</span> <span class="token comment">// 4</span>
        <span class="token keyword">double</span> score<span class="token punctuation">;</span> <span class="token comment">// 8</span>
        <span class="token keyword">char</span> ch<span class="token punctuation">;</span> <span class="token comment">// 1</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">Person</span> p<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;sizeof = %i\\n&quot;</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 24</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>占用内存最大属性是score, 占8个字节, 所以第一次会分配8个字节</li><li>将第一次分配的8个字节分配给age4个,还剩下4个字节</li><li>当需要分配给score时, 发现只剩下4个字节, 所以会再次开辟8个字节存储空间</li><li>将新分配的8个字节分配给score, 还剩下0个字节</li><li>当需要分配给ch时, 发现上一次分配的已经没有了, 所以会再次开辟8个字节存储空间</li><li>一共开辟了3次8个字节空间, 所以最终p占用24个字节</li></ul><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2>`,6),p=[c];function o(l,i){return s(),a("div",null,p)}const d=n(t,[["render",o],["__file","26.html.vue"]]);export{d as default};