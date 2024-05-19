import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as e,c as p,a as n,b as o,d as c,e as l}from"./app-a1fbcbb6.js";const i={},u=l(`<h2 id="递归函数" tabindex="-1"><a class="header-anchor" href="#递归函数" aria-hidden="true">#</a> 递归函数</h2><ul><li>什么是递归函数?</li></ul><ul><li><p>一个函数在它的函数体内调用它自身称为递归调用</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">function</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">function</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><ul><li>递归函数构成条件</li></ul><ul><li>自己搞自己</li><li>存在一个条件能够让递归结束</li><li>问题的规模能够缩小</li></ul><ul><li>示例:</li></ul><ul><li>获取用户输入的数字, 直到用户输入一个正数为止</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">getNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> number <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>number <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入一个正数\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;number = %d\\n&quot;</span><span class="token punctuation">,</span> number<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">getNumber2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> number <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入一个正数abc\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>number <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">//        负数</span>
        <span class="token function">getNumber2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
<span class="token comment">//        正数</span>
       <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;number = %d\\n&quot;</span><span class="token punctuation">,</span> number<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>递归和循环区别</li></ul><ul><li>能用循环实现的功能,用递归都可以实现</li><li>递归常用于&quot;回溯&quot;, &quot;树的遍历&quot;,&quot;图的搜索&quot;等问题</li><li>但代码理解难度大，内存消耗大(易导致栈溢出), 所以考虑到代码理解难度和内存消耗问题, 在企业开发中一般能用循环都不会使用递归</li></ul><ul><li>递归练习</li></ul><ul><li>有5个人坐在一起,问第5个人多少岁?他说比第4个人大两岁。问 第4个人岁数,他说比第3个人大两岁。问第3个人,又说比第2个 人大两岁。问第2个人,说比第1个人大两岁。最后问第1个人, 他说是10岁。请问第5个人多大?</li><li>用递归法求N的阶乘</li><li>设计一个函数用来计算B的n次方</li></ul><h3 id="捐赠支持" tabindex="-1"><a class="header-anchor" href="#捐赠支持" aria-hidden="true">#</a> 捐赠支持</h3><p>项目的发展离不开你的支持，如果 <strong>CNote</strong> 帮助到你打开编程的大门，请作者喝杯咖啡吧 ☕ 后续我们会继续完善更新！加油！</p>`,15),r={href:"https://www.yuque.com/docs/share/25942927-f732-4f94-a670-154a9c7b06d3",target:"_blank",rel:"noopener noreferrer"};function d(k,m){const s=t("ExternalLinkIcon");return e(),p("div",null,[u,n("p",null,[n("a",r,[o("点击捐赠支持作者"),c(s)])])])}const f=a(i,[["render",d],["__file","09.html.vue"]]);export{f as default};
