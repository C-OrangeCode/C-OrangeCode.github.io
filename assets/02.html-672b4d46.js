import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-a1fbcbb6.js";const t={},p=e(`<h2 id="_1、编码" tabindex="-1"><a class="header-anchor" href="#_1、编码" aria-hidden="true">#</a> 1、编码</h2><ul><li>如无特殊情况, 文件一律使用 UTF-8 编码</li><li>如无特殊情况, 文件头部必须加入<code>#-*-coding:utf-8-*-</code>标识</li></ul><h2 id="_2、代码格式" tabindex="-1"><a class="header-anchor" href="#_2、代码格式" aria-hidden="true">#</a> 2、代码格式</h2><h3 id="_2-1、缩进" tabindex="-1"><a class="header-anchor" href="#_2-1、缩进" aria-hidden="true">#</a> 2.1、缩进</h3><ul><li>统一使用 4 个空格进行缩进</li></ul><h3 id="_2-2、行宽" tabindex="-1"><a class="header-anchor" href="#_2-2、行宽" aria-hidden="true">#</a> 2.2、行宽</h3><p>每行代码尽量不超过 80 个字符(在特殊情况下可以略微超过 80 ，但最长不得超过 120)</p><p>理由：</p><ul><li>这在查看 side-by-side 的 diff 时很有帮助</li><li>方便在控制台下查看代码</li><li>太长可能是设计有缺陷</li></ul><h3 id="_2-3、引号" tabindex="-1"><a class="header-anchor" href="#_2-3、引号" aria-hidden="true">#</a> 2.3、引号</h3><p>简单说，自然语言使用双引号，机器标示使用单引号，因此 <strong>代码里</strong> 多数应该使用 <strong>单引号</strong></p><ul><li><strong><em>自然语言</em></strong> <strong>使用双引号</strong> <code>&quot;...&quot;</code><br> 例如错误信息；很多情况还是 unicode，使用<code>u&quot;你好世界&quot;</code></li><li><strong><em>机器标识</em></strong> <strong>使用单引号</strong> <code>&#39;...&#39;</code><br> 例如 dict 里的 key</li><li><strong><em>正则表达式</em></strong> <strong>使用原生的双引号</strong> <code>r&quot;...&quot;</code></li><li><strong><em>文档字符串 (docstring)</em></strong> <strong>使用三个双引号</strong> <code>&quot;&quot;&quot;......&quot;&quot;&quot;</code></li></ul><h3 id="_2-4、空行" tabindex="-1"><a class="header-anchor" href="#_2-4、空行" aria-hidden="true">#</a> 2.4、空行</h3><ul><li>模块级函数和类定义之间空两行；</li><li>类成员函数之间空一行；</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">A</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>

    <span class="token keyword">def</span> <span class="token function">hello</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>可以使用多个空行分隔多组相关的函数</li><li>函数中可以使用空行分隔出逻辑相关的代码</li></ul><h2 id="_3、import-语句" tabindex="-1"><a class="header-anchor" href="#_3、import-语句" aria-hidden="true">#</a> 3、import 语句</h2><ul><li>import 语句应该分行书写</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 正确的写法</span>
<span class="token keyword">import</span> os
<span class="token keyword">import</span> sys

<span class="token comment"># 不推荐的写法</span>
<span class="token keyword">import</span> sys<span class="token punctuation">,</span>os

<span class="token comment"># 正确的写法</span>
<span class="token keyword">from</span> subprocess <span class="token keyword">import</span> Popen<span class="token punctuation">,</span> PIPE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>import 语句应该使用 <strong>absolute</strong> import</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 正确的写法</span>
<span class="token keyword">from</span> foo<span class="token punctuation">.</span>bar <span class="token keyword">import</span> Bar

<span class="token comment"># 不推荐的写法</span>
<span class="token keyword">from</span> <span class="token punctuation">.</span><span class="token punctuation">.</span>bar <span class="token keyword">import</span> Bar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>import 语句应该放在文件头部，置于模块说明及 docstring 之后，于全局变量之前；</li><li>import 语句应该按照顺序排列，每组之间用一个空行分隔</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os
<span class="token keyword">import</span> sys

<span class="token keyword">import</span> msgpack
<span class="token keyword">import</span> zmq

<span class="token keyword">import</span> foo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>导入其他模块的类定义时，可以使用相对导入</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> myclass <span class="token keyword">import</span> MyClass
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>如果发生命名冲突，则可使用命名空间</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> bar
<span class="token keyword">import</span> foo<span class="token punctuation">.</span>bar

bar<span class="token punctuation">.</span>Bar<span class="token punctuation">(</span><span class="token punctuation">)</span>
foo<span class="token punctuation">.</span>bar<span class="token punctuation">.</span>Bar<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4、空格" tabindex="-1"><a class="header-anchor" href="#_4、空格" aria-hidden="true">#</a> 4、空格</h2><ul><li>在二元运算符两边各空一格<code>[=,-,+=,==,&gt;,in,is not, and]</code>:</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 正确的写法</span>
i <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span>
submitted <span class="token operator">+=</span> <span class="token number">1</span>
x <span class="token operator">=</span> x <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">-</span> <span class="token number">1</span>
hypot2 <span class="token operator">=</span> x <span class="token operator">*</span> x <span class="token operator">+</span> y <span class="token operator">*</span> y
c <span class="token operator">=</span> <span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>a <span class="token operator">-</span> b<span class="token punctuation">)</span>

<span class="token comment"># 不推荐的写法</span>
i<span class="token operator">=</span>i<span class="token operator">+</span><span class="token number">1</span>
submitted <span class="token operator">+=</span><span class="token number">1</span>
x <span class="token operator">=</span> x<span class="token operator">*</span><span class="token number">2</span> <span class="token operator">-</span> <span class="token number">1</span>
hypot2 <span class="token operator">=</span> x<span class="token operator">*</span>x <span class="token operator">+</span> y<span class="token operator">*</span>y
c <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token operator">+</span>b<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>a<span class="token operator">-</span>b<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>函数的参数列表中，<code>,</code>之后要有空格</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 正确的写法</span>
<span class="token keyword">def</span> <span class="token function">complex</span><span class="token punctuation">(</span>real<span class="token punctuation">,</span> imag<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

<span class="token comment"># 不推荐的写法</span>
<span class="token keyword">def</span> <span class="token function">complex</span><span class="token punctuation">(</span>real<span class="token punctuation">,</span>imag<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>函数的参数列表中，默认值等号两边不要添加空格</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 正确的写法</span>
<span class="token keyword">def</span> <span class="token function">complex</span><span class="token punctuation">(</span>real<span class="token punctuation">,</span> imag<span class="token operator">=</span><span class="token number">0.0</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

<span class="token comment"># 不推荐的写法</span>
<span class="token keyword">def</span> <span class="token function">complex</span><span class="token punctuation">(</span>real<span class="token punctuation">,</span> imag <span class="token operator">=</span> <span class="token number">0.0</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>左括号之后，右括号之前不要加多余的空格</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 正确的写法</span>
spam<span class="token punctuation">(</span>ham<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>eggs<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment"># 不推荐的写法</span>
spam<span class="token punctuation">(</span> ham<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> eggs <span class="token punctuation">:</span> <span class="token number">2</span> <span class="token punctuation">}</span> <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>字典对象的左括号之前不要多余的空格</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 正确的写法</span>
<span class="token builtin">dict</span><span class="token punctuation">[</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">[</span>index<span class="token punctuation">]</span>

<span class="token comment"># 不推荐的写法</span>
<span class="token builtin">dict</span> <span class="token punctuation">[</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token builtin">list</span> <span class="token punctuation">[</span>index<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>不要为对齐赋值语句而使用的额外空格</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 正确的写法</span>
x <span class="token operator">=</span> <span class="token number">1</span>
y <span class="token operator">=</span> <span class="token number">2</span>
long_variable <span class="token operator">=</span> <span class="token number">3</span>

<span class="token comment"># 不推荐的写法</span>
x             <span class="token operator">=</span> <span class="token number">1</span>
y             <span class="token operator">=</span> <span class="token number">2</span>
long_variable <span class="token operator">=</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5、换行" tabindex="-1"><a class="header-anchor" href="#_5、换行" aria-hidden="true">#</a> 5、换行</h2><p>Python 支持括号内的换行。这时有两种情况。</p><ol><li>第二行缩进到括号的起始处</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>foo <span class="token operator">=</span> long_function_name<span class="token punctuation">(</span>var_one<span class="token punctuation">,</span> var_two<span class="token punctuation">,</span>
                         var_three<span class="token punctuation">,</span> var_four<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>第二行缩进 4 个空格，适用于起始括号就换行的情形</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">long_function_name</span><span class="token punctuation">(</span>
        var_one<span class="token punctuation">,</span> var_two<span class="token punctuation">,</span> var_three<span class="token punctuation">,</span>
        var_four<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>var_one<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用反斜杠<code>\\</code>换行，二元运算符<code>+</code> <code>.</code>等应出现在行末；长字符串也可以用此法换行</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>session<span class="token punctuation">.</span>query<span class="token punctuation">(</span>MyTable<span class="token punctuation">)</span><span class="token punctuation">.</span>\\
        filter_by<span class="token punctuation">(</span><span class="token builtin">id</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>\\
        one<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">print</span> <span class="token string">&#39;Hello, &#39;</span>\\
      <span class="token string">&#39;%s %s!&#39;</span> <span class="token operator">%</span>\\
      <span class="token punctuation">(</span><span class="token string">&#39;Harry&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Potter&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>禁止复合语句，即一行中包含多个语句：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 正确的写法</span>
do_first<span class="token punctuation">(</span><span class="token punctuation">)</span>
do_second<span class="token punctuation">(</span><span class="token punctuation">)</span>
do_third<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 不推荐的写法</span>
do_first<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>do_second<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>do_third<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>if/for/while</code>一定要换行：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 正确的写法</span>
<span class="token keyword">if</span> foo <span class="token operator">==</span> <span class="token string">&#39;blah&#39;</span><span class="token punctuation">:</span>
    do_blah_thing<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 不推荐的写法</span>
<span class="token keyword">if</span> foo <span class="token operator">==</span> <span class="token string">&#39;blah&#39;</span><span class="token punctuation">:</span> do_blash_thing<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6、docstring" tabindex="-1"><a class="header-anchor" href="#_6、docstring" aria-hidden="true">#</a> 6、docstring</h2><p>docstring 的规范中最其本的两点：</p><ol><li>所有的公共模块、函数、类、方法，都应该写 docstring 。私有方法不一定需要，但应该在 def 后提供一个块注释来说明。</li><li>docstring 的结束&quot;&quot;&quot;应该独占一行，除非此 docstring 只有一行。</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;Return a foobar
Optional plotz says to frobnicate the bizbaz first.
&quot;&quot;&quot;</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot;Oneline docstring&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,56),o=[p];function i(l,c){return s(),a("div",null,o)}const r=n(t,[["render",i],["__file","02.html.vue"]]);export{r as default};
