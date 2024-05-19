import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-a1fbcbb6.js";const e={},p=t(`<h2 id="共用体" tabindex="-1"><a class="header-anchor" href="#共用体" aria-hidden="true">#</a> 共用体</h2><ul><li>和结构体不同的是, 结构体的每个成员都是占用一块独立的存储空间, 而共用体所有的成员都占用同一块存储空间</li><li>和结构体一样, 共用体在使用之前必须先定义共用体类型, 再定义共用体变量</li><li>定义共用体类型格式:</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">union</span> 共用体名<span class="token punctuation">{</span>
    数据类型 属性名称<span class="token punctuation">;</span>
    数据类型 属性名称<span class="token punctuation">;</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>定义共用体类型变量格式:</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">union</span> 共用体名 共用体变量名称<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>特点: 由于所有属性共享同一块内存空间, 所以只要其中一个属性发生了改变, 其它的属性都会受到影响</li><li>示例:</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>    <span class="token keyword">union</span> Test<span class="token punctuation">{</span>
        <span class="token keyword">int</span> age<span class="token punctuation">;</span>
        <span class="token keyword">char</span> ch<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">union</span> Test t<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;sizeof(p) = %i\\n&quot;</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    t<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">33</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;t.age = %i\\n&quot;</span><span class="token punctuation">,</span> t<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 33</span>
    t<span class="token punctuation">.</span>ch <span class="token operator">=</span> <span class="token char">&#39;a&#39;</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;t.ch = %c\\n&quot;</span><span class="token punctuation">,</span> t<span class="token punctuation">.</span>ch<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// a</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;t.age = %i\\n&quot;</span><span class="token punctuation">,</span> t<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 97</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>共用体的应用场景 <ul><li>（1）通信中的数据包会用到共用体，因为不知道对方会发送什么样的数据包过来，用共用体的话就简单了，定义几种格式的包，收到包之后就可以根据包的格式取出数据。</li><li>（2）节约内存。如果有2个很长的数据结构，但不会同时使用，比如一个表示老师，一个表示学生，要统计老师和学生的情况，用结构体就比较浪费内存，这时就可以考虑用共用体来设计。<br> +（3）某些应用需要大量的临时变量，这些变量类型不同，而且会随时更换。而你的堆栈空间有限，不能同时分配那么多临时变量。这时可以使用共用体让这些变量共享同一个内存空间，这些临时变量不用长期保存，用完即丢，和寄存器差不多，不用维护。</li></ul></li></ul><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2>`,9),c=[p];function i(o,l){return s(),a("div",null,c)}const r=n(e,[["render",i],["__file","28.html.vue"]]);export{r as default};
