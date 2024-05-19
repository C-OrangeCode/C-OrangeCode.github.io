import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-a1fbcbb6.js";const t={},i=e(`<h2 id="auto-和-register-关键字" tabindex="-1"><a class="header-anchor" href="#auto-和-register-关键字" aria-hidden="true">#</a> auto 和 register 关键字</h2><ul><li>auto 关键字(忘记)</li></ul><ul><li>只能修饰局部变量, 局部变量如果没有其它修饰符, 默认就是 auto 的</li><li>特点: 随用随开, 用完即销</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">auto</span> <span class="token keyword">int</span> num<span class="token punctuation">;</span> <span class="token comment">// 等价于 int num;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>register 关键字(忘记)</li></ul><ul><li>只能修饰局部变量, 原则上将内存中变量提升到 CPU 寄存器中存储, 这样访问速度会更快</li><li>但是由于 CPU 寄存器数量相当有限, 通常不同平台和编译器在优化阶段会自动转换为 auto</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">register</span> <span class="token keyword">int</span> num<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="static-关键字" tabindex="-1"><a class="header-anchor" href="#static-关键字" aria-hidden="true">#</a> static 关键字</h2><ul><li><strong>对局部变量的作用</strong></li></ul><ul><li>延长局部变量的生命周期,从程序启动到程序退出,但是它并没有改变变量的作用域</li><li>定义变量的代码在整个程序运行期间仅仅会执行一次</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 局部变量</span>
    num<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token comment">// 如果不加static输出 1 1 1</span>
    <span class="token comment">// 如果添加static输出 1 2 3</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;num = %i\\n&quot;</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>对全局变量的作用</strong></li><li>全局变量分类：</li></ul><ul><li>内部变量:只能在本文件中访问的变量</li><li>外部变量:可以在其他文件中访问的变量,默认所有全局变量都是外部变量</li></ul><ul><li>默认情况下多个同名的全局变量共享一块空间, 这样会导致全局变量污染问题</li><li>如果想让某个全局变量只在某个文件中使用, 并且不和其他文件中同名全局变量共享同一块存储空间, 那么就可以使用 static</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">// A文件中的代码</span>
<span class="token keyword">int</span> num<span class="token punctuation">;</span> <span class="token comment">// 和B文件中的num共享</span>
<span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;ds.c中的 num = %i\\n&quot;</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">// B文件中的代码</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;ds.h&quot;</span></span>

<span class="token keyword">int</span> num<span class="token punctuation">;</span> <span class="token comment">// 和A文件中的num共享</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    num <span class="token operator">=</span> <span class="token number">666</span><span class="token punctuation">;</span>
    <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// test中输出666</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">// A文件中的代码</span>
<span class="token keyword">static</span> <span class="token keyword">int</span> num<span class="token punctuation">;</span> <span class="token comment">// 不和B文件中的num共享</span>
<span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;ds.c中的 num = %i\\n&quot;</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">// B文件中的代码</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;ds.h&quot;</span></span>

<span class="token keyword">int</span> num<span class="token punctuation">;</span> <span class="token comment">// 不和A文件中的num共享</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    num <span class="token operator">=</span> <span class="token number">666</span><span class="token punctuation">;</span>
    <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// test中输出0</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="extern-关键字" tabindex="-1"><a class="header-anchor" href="#extern-关键字" aria-hidden="true">#</a> extern 关键字</h2><ul><li>对局部变量的作用</li></ul><ul><li>extern 不能用于局部变量</li><li>extern 代表声明一个变量, 而不是定义一个变量, 变量只有定义才会开辟存储空间</li><li>所以如果是局部变量, 虽然提前声明有某个局部变量, 但是局部变量只有执行到才会分配存储空间</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">extern</span> <span class="token keyword">int</span> num<span class="token punctuation">;</span>
    num <span class="token operator">=</span> <span class="token number">998</span><span class="token punctuation">;</span> <span class="token comment">// 使用时并没有存储空间可用, 所以声明了也没用</span>
    <span class="token keyword">int</span> num<span class="token punctuation">;</span> <span class="token comment">// 这里才会开辟</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;num = %i\\n&quot;</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>对全局变量的作用</li></ul><ul><li>声明一个全局变量, 代表告诉编译器我在其它地方定义了这个变量, 你可以放心使用</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">extern</span> <span class="token keyword">int</span> num<span class="token punctuation">;</span> <span class="token comment">// 声明我们有名称叫做num变量</span>
    num <span class="token operator">=</span> <span class="token number">998</span><span class="token punctuation">;</span> <span class="token comment">// 使用时已经有对应的存储空间</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;num = %i\\n&quot;</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> num<span class="token punctuation">;</span> <span class="token comment">// 全局变量, 程序启动就会分配存储空间</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2>`,27),p=[i];function c(l,o){return s(),a("div",null,p)}const r=n(t,[["render",c],["__file","31.html.vue"]]);export{r as default};
