import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as p}from"./app-a1fbcbb6.js";const t={},e=p(`<h2 id="希尔排序" tabindex="-1"><a class="header-anchor" href="#希尔排序" aria-hidden="true">#</a> 希尔排序</h2><ul><li>1959年Shell发明，第一个突破O(n2)的排序算法，是简单插入排序的改进版。它与插入排序的不同之处在于，它会优先比较距离较远的元素。希尔排序又叫缩小增量排序。<br><img src="https://img-blog.csdnimg.cn/img_convert/385a1371f2859fbd2943203730eb3ba1.gif" alt="" loading="lazy"></li><li>排序思路:</li></ul><ul><li>1.希尔排序可以理解为插入排序的升级版, 先将待排序数组按照指定步长划分为几个小数组</li><li>2.利用插入排序对小数组进行排序, 然后将几个排序的小数组重新合并为原始数组</li><li>3.重复上述操作, 直到步长为1时,再利用插入排序排序即可</li></ul><ul><li>代码实现:</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 待排序数组</span>
    <span class="token keyword">int</span> nums<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">// 0.计算待排序数组长度</span>
    <span class="token keyword">int</span> len <span class="token operator">=</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 2.计算步长</span>
    <span class="token keyword">int</span> gap <span class="token operator">=</span> len <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token keyword">do</span><span class="token punctuation">{</span>
        <span class="token comment">//  1.从第一个元素开始依次取出所有用于比较元素</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> gap<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token comment">// 2.遍历取出前面元素进行比较</span>
            <span class="token keyword">int</span> j <span class="token operator">=</span> i<span class="token punctuation">;</span>
            <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token punctuation">(</span>j <span class="token operator">-</span> gap<span class="token punctuation">)</span> <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%i &gt; %i\\n&quot;</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>j <span class="token operator">-</span> gap<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// 3.如果前面一个元素大于当前元素,就交换位置</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>j <span class="token operator">-</span> gap<span class="token punctuation">]</span> <span class="token operator">&gt;</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token keyword">int</span> temp <span class="token operator">=</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
                    nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>j <span class="token operator">-</span> gap<span class="token punctuation">]</span><span class="token punctuation">;</span>
                    nums<span class="token punctuation">[</span>j <span class="token operator">-</span> gap<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                j<span class="token operator">--</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 每个小数组排序完成, 重新计算步长</span>
        gap <span class="token operator">=</span> gap <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">while</span><span class="token punctuation">(</span>gap <span class="token operator">&gt;=</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>江哥提示:<br> 对于初学者而言, 排序算法一次不易于学习太多, 咋们先来5个玩一玩, 后续继续讲解其它5个</p></blockquote>`,6),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","05.html.vue"]]);export{r as default};
