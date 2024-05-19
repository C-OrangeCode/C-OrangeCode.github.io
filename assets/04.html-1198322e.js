import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-a1fbcbb6.js";const i={},l=e(`<h2 id="_1、模块" tabindex="-1"><a class="header-anchor" href="#_1、模块" aria-hidden="true">#</a> 1、模块</h2><ul><li>模块尽量使用小写命名，首字母保持小写，尽量不要用下划线(除非多个单词，且数量不多的情况)</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 正确的模块名</span>
<span class="token keyword">import</span> decoder
<span class="token keyword">import</span> html_parser

<span class="token comment"># 不推荐的模块名</span>
<span class="token keyword">import</span> Decoder
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2、类名" tabindex="-1"><a class="header-anchor" href="#_2、类名" aria-hidden="true">#</a> 2、类名</h2><ul><li>类名使用驼峰(CamelCase)命名风格，首字母大写，私有类可用一个下划线开头</li></ul><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>class Farm():
    pass

class AnimalFarm(Farm):
    pass

class _PrivateFarm(Farm):
    pass
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>将相关的类和顶级函数放在同一个模块里. 不像 Java, 没必要限制一个类一个模块.</li></ul><h2 id="_3、函数" tabindex="-1"><a class="header-anchor" href="#_3、函数" aria-hidden="true">#</a> 3、函数</h2><ul><li>函数名一律小写，如有多个单词，用下划线隔开</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

<span class="token keyword">def</span> <span class="token function">run_with_env</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>私有函数在函数前加一个下划线_</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">_private_func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4、变量名" tabindex="-1"><a class="header-anchor" href="#_4、变量名" aria-hidden="true">#</a> 4、变量名</h2><ul><li>变量名尽量小写, 如有多个单词，用下划线隔开</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    count <span class="token operator">=</span> <span class="token number">0</span>
    school_name <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>常量采用全大写，如有多个单词，使用下划线隔开</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>MAX_CLIENT <span class="token operator">=</span> <span class="token number">100</span>
MAX_CONNECTION <span class="token operator">=</span> <span class="token number">1000</span>
CONNECTION_TIMEOUT <span class="token operator">=</span> <span class="token number">600</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5、常量" tabindex="-1"><a class="header-anchor" href="#_5、常量" aria-hidden="true">#</a> 5、常量</h2><ul><li>常量使用以下划线分隔的大写命名</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>MAX_OVERFLOW <span class="token operator">=</span> <span class="token number">100</span>

Class <span class="token class-name">FooBar</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">foo_bar</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> print_<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>print_<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),d=[l];function c(p,t){return s(),a("div",null,d)}const u=n(i,[["render",c],["__file","04.html.vue"]]);export{u as default};
