import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-a1fbcbb6.js";const i={},l=e(`<h2 id="枚举" tabindex="-1"><a class="header-anchor" href="#枚举" aria-hidden="true">#</a> 枚举</h2><ul><li>什么是枚举类型?</li></ul><ul><li>在实际问题中,有些变量的取值被限定在一个有限的范围内。例如,一个星期内只有七天,一年只有十二个月,一个班每周有六门课程等等。如果把这些量说明为整型,字符型或其它类型 显然是不妥当的。</li><li>C 语言提供了一种称为“枚举”的类型。在“枚举”类型的定义中列举出所有可能的取值, 被说明为该“枚举”类型的变量取值不能超过定义的范围。</li><li>该说明的是,枚举类型是一种基本数据类型,而不是一种构造类型,因为它不能再分解为任何基本类型。<br><img src="https://img-blog.csdnimg.cn/img_convert/d475ee4ee2d87374bd67b5f25152548c.png" alt="" loading="lazy"></li></ul><ul><li>枚举类型的定义</li></ul><ul><li>格式:</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">enum</span>　枚举名　<span class="token punctuation">{</span>
    枚举元素<span class="token number">1</span><span class="token punctuation">,</span>
    枚举元素<span class="token number">2</span><span class="token punctuation">,</span>
    ……
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>示例:</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">// 表示一年四季</span>
<span class="token keyword">enum</span> <span class="token class-name">Season</span> <span class="token punctuation">{</span>
    Spring<span class="token punctuation">,</span>
    Summer<span class="token punctuation">,</span>
    Autumn<span class="token punctuation">,</span>
    Winter
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>枚举变量</li></ul><ul><li>先定义枚举类型，再定义枚举变量</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">enum</span> <span class="token class-name">Season</span> <span class="token punctuation">{</span>
    Spring<span class="token punctuation">,</span>
    Summer<span class="token punctuation">,</span>
    Autumn<span class="token punctuation">,</span>
    Winter
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">enum</span> <span class="token class-name">Season</span> s<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>定义枚举类型的同时定义枚举变量</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">enum</span> <span class="token class-name">Season</span> <span class="token punctuation">{</span>
    Spring<span class="token punctuation">,</span>
    Summer<span class="token punctuation">,</span>
    Autumn<span class="token punctuation">,</span>
    Winter
<span class="token punctuation">}</span> s<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>省略枚举名称，直接定义枚举变量</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">enum</span> <span class="token punctuation">{</span>
    Spring<span class="token punctuation">,</span>
    Summer<span class="token punctuation">,</span>
    Autumn<span class="token punctuation">,</span>
    Winter
<span class="token punctuation">}</span> s<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>枚举类型变量的赋值和使用</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">enum</span> <span class="token class-name">Season</span> <span class="token punctuation">{</span>
    Spring<span class="token punctuation">,</span>
    Summer<span class="token punctuation">,</span>
    Autumn<span class="token punctuation">,</span>
    Winter
<span class="token punctuation">}</span> s<span class="token punctuation">;</span>
s <span class="token operator">=</span> Spring<span class="token punctuation">;</span> <span class="token comment">// 等价于 s = 0;</span>
s <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">// 等价于 s = winter;</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>枚举使用的注意</li></ul><ul><li>C 语言编译器会将枚举元素(spring、summer 等)作为整型常量处理，称为枚举常量。</li><li>枚举元素的值取决于定义时各枚举元素排列的先后顺序。默认情况下，第一个枚举元素的值为 0，第二个为 1，依次顺序加 1。</li><li>也可以在定义枚举类型时改变枚举元素的值</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">enum</span> <span class="token class-name">Season</span> <span class="token punctuation">{</span>
    Spring<span class="token punctuation">,</span>
    Summer<span class="token punctuation">,</span>
    Autumn<span class="token punctuation">,</span>
    Winter
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 也就是说spring的值为0，summer的值为1，autumn的值为2，winter的值为3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">enum</span> <span class="token class-name">Season</span> <span class="token punctuation">{</span>
    Spring <span class="token operator">=</span> <span class="token number">9</span><span class="token punctuation">,</span>
    Summer<span class="token punctuation">,</span>
    Autumn<span class="token punctuation">,</span>
    Winter
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 也就是说spring的值为9，summer的值为10，autumn的值为11，winter的值为12</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),c=[l];function u(t,p){return s(),a("div",null,c)}const r=n(i,[["render",u],["__file","29.html.vue"]]);export{r as default};
