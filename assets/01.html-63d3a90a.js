import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-a1fbcbb6.js";const t={},p=e(`<h2 id="计数排序-counting-sort" tabindex="-1"><a class="header-anchor" href="#计数排序-counting-sort" aria-hidden="true">#</a> 计数排序（Counting Sort）</h2><ul><li>计数排序是一个非基于比较的排序算法，该算法于1954年由 Harold H. Seward 提出。它的优势在于在<code>对一定范围内的整数排序</code>时，快于任何比较排序算法。</li><li>排序思路:</li></ul><ul><li>1.找出待排序数组最大值</li><li>2.定义一个索引最大值为待排序数组最大值的数组</li><li>3.遍历待排序数组, 将待排序数组遍历到的值作新数组索引</li><li>4.在新数组对应索引存储值原有基础上+1<br><img src="https://img-blog.csdnimg.cn/img_convert/eaed8e0890b2a50353ec24850941e789.png" alt="" loading="lazy"></li></ul><ul><li>简单代码实现:</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 待排序数组</span>
    <span class="token keyword">int</span> nums<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">// 用于排序数组</span>
    <span class="token keyword">int</span> newNums<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">// 计算待排序数组长度</span>
    <span class="token keyword">int</span> len <span class="token operator">=</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 遍历待排序数组</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 取出待排序数组当前值</span>
        <span class="token keyword">int</span> index <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">// 将待排序数组当前值作为排序数组索引</span>
        <span class="token comment">// 将用于排序数组对应索引原有值+1</span>
        newNums<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> newNums<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 计算待排序数组长度</span>
    <span class="token keyword">int</span> len2 <span class="token operator">=</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>newNums<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>newNums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 输出排序数组索引, 就是排序之后结果</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len2<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> newNums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%i\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">/*
    // 计算待排序数组长度
    int len2 = sizeof(newNums) / sizeof(newNums[0]);
    // 还原排序结果到待排序数组
    for(int i = 0; i &lt; len2; i++){
        int index = 0;
        for(int i = 0; i &lt; len; i++){
            for(int j = 0; j &lt; newNums[i]; j++){
                nums[index++] = i;
            }
        }
    }
    */</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2>`,6),o=[p];function c(i,l){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","01.html.vue"]]);export{k as default};
