import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-a1fbcbb6.js";const i={},t=e(`<h2 id="_1、注释" tabindex="-1"><a class="header-anchor" href="#_1、注释" aria-hidden="true">#</a> 1、注释</h2><h3 id="_1-1、块注释" tabindex="-1"><a class="header-anchor" href="#_1-1、块注释" aria-hidden="true">#</a> 1.1、块注释</h3><p>“#”号后空一格，段落件用空行分开（同样需要“#”号）</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 块注释</span>
<span class="token comment"># 块注释</span>
<span class="token comment">#</span>
<span class="token comment"># 块注释</span>
<span class="token comment"># 块注释</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2、行注释" tabindex="-1"><a class="header-anchor" href="#_1-2、行注释" aria-hidden="true">#</a> 1.2、行注释</h3><p>至少使用两个空格和语句分开，注意不要使用无意义的注释</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 正确的写法</span>
x <span class="token operator">=</span> x <span class="token operator">+</span> <span class="token number">1</span>  <span class="token comment"># 边框加粗一个像素</span>

<span class="token comment"># 不推荐的写法(无意义的注释)</span>
x <span class="token operator">=</span> x <span class="token operator">+</span> <span class="token number">1</span> <span class="token comment"># x加1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3、建议" tabindex="-1"><a class="header-anchor" href="#_1-3、建议" aria-hidden="true">#</a> 1.3、建议</h3><ul><li><p>在代码的关键部分(或比较复杂的地方), 能写注释的要尽量写注释</p></li><li><p>比较重要的注释段, 使用多个等号隔开, 可以更加醒目, 突出重要性</p></li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>app <span class="token operator">=</span> create_app<span class="token punctuation">(</span>name<span class="token punctuation">,</span> options<span class="token punctuation">)</span>


<span class="token comment"># =====================================</span>
<span class="token comment"># 请勿在此处添加 get post等app路由行为 !!!</span>
<span class="token comment"># =====================================</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    app<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2、文档注释-docstring" tabindex="-1"><a class="header-anchor" href="#_2、文档注释-docstring" aria-hidden="true">#</a> 2、文档注释（Docstring）</h2><p>作为文档的 Docstring 一般出现在模块头部、函数和类的头部，这样在 python 中可以通过对象的__doc__对象获取文档.<br> 编辑器和 IDE 也可以根据 Docstring 给出自动提示.</p><ul><li>文档注释以 &quot;&quot;&quot; 开头和结尾, 首行不换行, 如有多行, 末行必需换行, 以下是 Google 的 docstring 风格示例</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;Example docstrings.

This module demonstrates documentation as specified by the \`Google Python
Style Guide\`_. Docstrings may extend over multiple lines. Sections are created
with a section header and a colon followed by a block of indented text.

Example:
    Examples can be given using either the \`\`Example\`\` or \`\`Examples\`\`
    sections. Sections support any reStructuredText formatting, including
    literal blocks::

        $ python example_google.py

Section breaks are created by resuming unindented text. Section breaks
are also implicitly created anytime a new section starts.
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>不要在文档注释复制函数定义原型, 而是具体描述其具体内容, 解释具体参数和返回值等</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#  不推荐的写法(不要写函数原型等废话)</span>
<span class="token keyword">def</span> <span class="token function">function</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;function(a, b) -&gt; list&quot;&quot;&quot;</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>


<span class="token comment">#  正确的写法</span>
<span class="token keyword">def</span> <span class="token function">function</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;计算并返回a到b范围内数据的平均值&quot;&quot;&quot;</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>对函数参数、返回值等的说明采用 numpy 标准, 如下所示</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span>arg1<span class="token punctuation">,</span> arg2<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;在这里写函数的一句话总结(如: 计算平均值).

    这里是具体描述.

    参数
    ----------
    arg1 : int
        arg1的具体描述
    arg2 : int
        arg2的具体描述

    返回值
    -------
    int
        返回值的具体描述

    参看
    --------
    otherfunc : 其它关联函数等...

    示例
    --------
    示例使用doctest格式, 在\`&gt;&gt;&gt;\`后的代码可以被文档测试工具作为测试用例自动运行

    &gt;&gt;&gt; a=[1,2,3]
    &gt;&gt;&gt; print [x + 3 for x in a]
    [4, 5, 6]
    &quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>文档注释不限于中英文, 但不要中英文混用</p></li><li><p>文档注释不是越长越好, 通常一两句话能把情况说清楚即可</p></li><li><p>模块、公有类、公有方法, 能写文档注释的, 应该尽量写文档注释</p></li></ul>`,19),l=[t];function c(d,o){return s(),a("div",null,l)}const r=n(i,[["render",c],["__file","03.html.vue"]]);export{r as default};
