import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as p}from"./app-a1fbcbb6.js";const t={},e=p(`<h2 id="数组的越界问题" tabindex="-1"><a class="header-anchor" href="#数组的越界问题" aria-hidden="true">#</a> 数组的越界问题</h2><ul><li>数组越界导致的问题</li></ul><ul><li>约错对象</li><li>程序崩溃</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>    <span class="token keyword">char</span> cs1<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">char</span> cs2<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    cs2<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">88</span><span class="token punctuation">;</span> <span class="token comment">// 注意:这句访问到了不属于cs1的内存</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;cs1[0] = %d\\n&quot;</span><span class="token punctuation">,</span> cs1<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
    输出结果<span class="token operator">:</span> <span class="token number">88</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>为什么上述会输出88, 自己按照&quot;数组内部存储细节&quot;画图脑补</p></blockquote><hr><h2 id="数组注意事项" tabindex="-1"><a class="header-anchor" href="#数组注意事项" aria-hidden="true">#</a> 数组注意事项</h2><ul><li>在定义数组的时候[]里面只能写整型常量或者是返回整型常量的表达式</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code> <span class="token keyword">int</span> ages4<span class="token punctuation">[</span><span class="token char">&#39;A&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">19</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
 <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;ages4[0] = %d\\n&quot;</span><span class="token punctuation">,</span> ages4<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">int</span> ages5<span class="token punctuation">[</span><span class="token number">5</span> <span class="token operator">+</span> <span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">19</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;ages5[0] = %d\\n&quot;</span><span class="token punctuation">,</span> ages5<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">int</span> ages5<span class="token punctuation">[</span><span class="token char">&#39;A&#39;</span> <span class="token operator">+</span> <span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">19</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;ages5[0] = %d\\n&quot;</span><span class="token punctuation">,</span> ages5<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>错误写法</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">// 没有指定元素个数，错误</span>
<span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// []中不能放变量</span>
<span class="token keyword">int</span> number <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> ages<span class="token punctuation">[</span>number<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 老版本的C语言规范不支持</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> ages<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> number <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> ages2<span class="token punctuation">[</span>number<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">19</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">}</span> <span class="token comment">// 直接报错</span>

<span class="token comment">// 只能在定义数组的时候进行一次性（全部赋值）的初始化</span>
<span class="token keyword">int</span> ages3<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
ages10 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">19</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 一个长度为n的数组,最大下标为n-1, 下标范围:0~n-1</span>
<span class="token keyword">int</span> ages4<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">19</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">}</span>
ages4<span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 数组角标越界</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>练习</li></ul><ul><li>从键盘录入当天出售BTC的价格并计算出售的BTC的总价和平均价(比如说一天出售了10个比特币)</li></ul><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2>`,14),c=[e];function o(u,l){return s(),a("div",null,c)}const r=n(t,[["render",o],["__file","19.html.vue"]]);export{r as default};
