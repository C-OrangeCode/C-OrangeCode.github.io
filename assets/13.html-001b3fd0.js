import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-a1fbcbb6.js";const p={},e=t(`<h2 id="字符串常用方法" tabindex="-1"><a class="header-anchor" href="#字符串常用方法" aria-hidden="true">#</a> 字符串常用方法</h2><ul><li>C 语言中供了丰富的字符串处理函数,大致可分为字符串的输入、输出、合并、修改、比较、转 换、复制、搜索几类。</li></ul><ul><li>使用这些函数可大大减轻编程的负担。</li><li>使用输入输出的字符串函数,在使用前应包含头文件&quot;stdio.h&quot;</li><li>使用其它字符串函数则应包含头文件&quot;string.h&quot;</li></ul><hr><ul><li>字符串输出函数:puts</li><li>格式: puts(字符数组名)</li><li>功能:把字符数组中的字符串输出到显示器。即在屏幕上显示该字符串。</li><li>优点:</li></ul><ul><li>自动换行</li><li>可以是数组的任意元素地址</li></ul><ul><li>缺点</li></ul><ul><li>不能自定义输出格式, 例如 puts(&quot;hello %i&quot;);</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">char</span> ch<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;lnj&quot;</span><span class="token punctuation">;</span>
<span class="token function">puts</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//输出结果: lnj</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><ul><li>puts 函数完全可以由 printf 函数取代。当需要按一定格式输出时,通常使用 printf 函数</li></ul></blockquote><hr><ul><li>字符串输入函数:gets</li><li>格式: gets (字符数组名)</li><li>功能:从标准输入设备键盘上输入一个字符串。</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">char</span> ch<span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token function">gets</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输入:lnj</span>
<span class="token function">puts</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出:lnj</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><ul><li>可以看出当输入的字符串中含有空格时,输出仍为全部字符串。说明 gets 函数并不以空格作为字符串输入结束的标志,而只以回车作为输入结束。这是与 scanf 函数不同的。</li><li>注意 gets 很容易导致数组下标越界，是一个不安全的字符串操作函数</li></ul></blockquote><hr><ul><li>字符串长度</li><li>利用 sizeof 字符串长度</li></ul><ul><li>因为字符串在内存中是逐个字符存储的,一个字符占用一个字节,所以字符串的结束符长度也是占用的内存单元的字节数。</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>    <span class="token keyword">char</span> name<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;it666&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> size <span class="token operator">=</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 包含\\0</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;size = %d\\n&quot;</span><span class="token punctuation">,</span> size<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//输出结果:6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li>利用系统函数</li></ul><ul><li>格式: strlen(字符数组名)</li><li>功能:测字符串的实际长度(不含字符串结束标志‘\\0’)并作为函数返回值。</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>    <span class="token keyword">char</span> name<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;it666&quot;</span><span class="token punctuation">;</span>
    <span class="token class-name">size_t</span> len <span class="token operator">=</span> <span class="token function">strlen</span><span class="token punctuation">(</span>name2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;len = %lu\\n&quot;</span><span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//输出结果:5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li>以“\\0”为字符串结束条件进行统计</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/**
 *  自定义方法计算字符串的长度
 *  @param name 需要计算的字符串
 *  @return 不包含\\0的长度
 */</span>
<span class="token keyword">int</span> <span class="token function">myStrlen2</span><span class="token punctuation">(</span><span class="token keyword">char</span> str<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">//    1.定义变量保存字符串的长度</span>
    <span class="token keyword">int</span> length <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>str<span class="token punctuation">[</span>length<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token char">&#39;\\0&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        length<span class="token operator">++</span><span class="token punctuation">;</span><span class="token comment">//1 2 3 4</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> length<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/**
 *  自定义方法计算字符串的长度
 *  @param name  需要计算的字符串
 *  @param count 字符串的总长度
 *  @return 不包含\\0的长度
 */</span>
<span class="token keyword">int</span> <span class="token function">myStrlen</span><span class="token punctuation">(</span><span class="token keyword">char</span> str<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> count<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
<span class="token comment">//    1.定义变量保存字符串的长度</span>
    <span class="token keyword">int</span> length <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token comment">//    2.通过遍历取出字符串中的所有字符逐个比较</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> count<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">//        3.判断是否是字符串结尾</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>str<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">&#39;\\0&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> length<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        length<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> length<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li>字符串连接函数:strcat</li><li>格式: strcat(字符数组名 1,字符数组名 2)</li><li>功能:把字符数组 2 中的字符串连接到字符数组 1 中字符串的后面,并删去字符串 1 后的串标志 “\\0”。本函数返回值是字符数组 1 的首地址。</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">char</span> oldStr<span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;welcome to&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">char</span> newStr<span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot; lnj&quot;</span><span class="token punctuation">;</span>
<span class="token function">strcat</span><span class="token punctuation">(</span>oldStr<span class="token punctuation">,</span> newStr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">puts</span><span class="token punctuation">(</span>oldStr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//输出: welcome to lnj&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><ul><li>本程序把初始化赋值的字符数组与动态赋值的字符串连接起来。要注意的是,字符数组 1 应定义足 够的长度,否则不能全部装入被连接的字符串。</li></ul></blockquote><hr><ul><li>字符串拷贝函数:strcpy<br><code>- 格式: strcpy(字符数组名1,字符数组名2) </code>- 功能:把字符数组 2 中的字符串拷贝到字符数组 1 中。串结束标志“\\0”也一同拷贝。字符数名 2, 也可以是一个字符串常量。这时相当于把一个字符串赋予一个字符数组。</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">char</span> oldStr<span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;welcome to&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">char</span> newStr<span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot; lnj&quot;</span><span class="token punctuation">;</span>
<span class="token function">strcpy</span><span class="token punctuation">(</span>oldStr<span class="token punctuation">,</span> newStr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">puts</span><span class="token punctuation">(</span>oldStr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出结果:  lnj // 原有数据会被覆盖</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><ul><li>本函数要求字符数组 1 应有足够的长度,否则不能全部装入所拷贝的字符串。</li></ul></blockquote><hr><ul><li>字符串比较函数:strcmp</li><li>格式: strcmp(字符数组名 1,字符数组名 2)</li><li>功能:按照 ASCII 码顺序比较两个数组中的字符串,并由函数返回值返回比较结果。</li></ul><ul><li>字符串 1=字符串 2,返回值=0;</li><li>字符串 1&gt;字符串 2,返回值&gt;0;</li><li>字符串 1&lt;字符串 2,返回值&lt;0。</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>    <span class="token keyword">char</span> oldStr<span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">char</span> newStr<span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token function">strcmp</span><span class="token punctuation">(</span>oldStr<span class="token punctuation">,</span> newStr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//输出结果:-1</span>
    <span class="token keyword">char</span> oldStr<span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">char</span> newStr<span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token function">strcmp</span><span class="token punctuation">(</span>oldStr<span class="token punctuation">,</span> newStr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//输出结果:0</span>
    <span class="token keyword">char</span> oldStr<span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">char</span> newStr<span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token function">strcmp</span><span class="token punctuation">(</span>oldStr<span class="token punctuation">,</span> newStr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//输出结果:1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,37),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","13.html.vue"]]);export{k as default};
