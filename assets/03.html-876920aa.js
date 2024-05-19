import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-a1fbcbb6.js";const p={},e=t(`<h2 id="冒泡排序" tabindex="-1"><a class="header-anchor" href="#冒泡排序" aria-hidden="true">#</a> 冒泡排序</h2><ul><li>冒泡排序(Bubble Sort)是一种简单的排序算法。它重复 地走访过要排序的数列,一次比较两个元素,如果他们的顺序错误就把他们交换过来。走访数列的工作是重复地进行直到没有再需要交换,也就是说该数列已经排序完成。这个算法的名字由来是因为越小的元素会经由交换慢慢“浮”到数列的顶端。<br><img src="https://img-blog.csdnimg.cn/img_convert/020ed41347b2d78bde3cfa328867ccdb.gif" alt="" loading="lazy"></li><li>排序思路:</li></ul><ul><li>假设按照升序排序</li><li>1.从第0个元素开始, 每次都用相邻两个元素进行比较</li><li>2.一旦发现后面一个元素小于前面一个元素就交换位置</li><li>3.经过一轮比较之后最后一个元素就是最大值</li><li>4.排除最后一个元素, 以此类推, 每次比较完成之后最大值都会出现再被比较所有元素的最后</li><li>直到当前元素没有可比较的元素, 排序完成</li></ul><ul><li>代码实现:</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">// 冒泡排序</span>
<span class="token keyword">void</span> <span class="token function">bubbleSort</span><span class="token punctuation">(</span><span class="token keyword">int</span> numbers<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// -1防止\`角标越界\`: 访问到了不属于自己的索引</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> length <span class="token operator">-</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
           <span class="token comment">//  1.用当前元素和相邻元素比较</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>numbers<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&lt;</span> numbers<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">//  2.一旦发现小于就交换位置</span>
                <span class="token function">swapEle</span><span class="token punctuation">(</span>numbers<span class="token punctuation">,</span> j<span class="token punctuation">,</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 交换两个元素的值, i/j需要交换的索引</span>
<span class="token keyword">void</span> <span class="token function">swapEle</span><span class="token punctuation">(</span><span class="token keyword">int</span> array<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> temp <span class="token operator">=</span> array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    array<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> array<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
    array<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2>`,6),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","03.html.vue"]]);export{k as default};