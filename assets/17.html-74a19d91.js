import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-a1fbcbb6.js";const t={},p=e(`<h2 id="什么是变量" tabindex="-1"><a class="header-anchor" href="#什么是变量" aria-hidden="true">#</a> 什么是变量?</h2><ul><li>&quot;量&quot;表示数据。变量，则表示一些不固定的数据，也就是可以改变的数据</li><li>就好比现实生活中人的身高、体重一样, 随着年龄的增长会不断发生改变, 所以身高、体重就是现实生活中变量的一种体现</li><li>就好比现实生活中超市的储物格一样, 同一个格子在不同时期不同人使用,格子中存储的物品是可以变化的。张三使用这个格子的时候里面放的可能是尿不湿, 但是李四使用这个格子的时候里面放的可能是面包</li></ul><hr><h2 id="如何定义变量" tabindex="-1"><a class="header-anchor" href="#如何定义变量" aria-hidden="true">#</a> 如何定义变量</h2><ul><li>格式1: 变量类型 变量名称 ; <ul><li>为什么要定义变量?</li><li>任何变量在使用之前，必须先进行定义, 只有定义了变量才会分配存储空间, 才有空间存储数据</li><li>为什么要限定类型?</li><li>用来约束变量所存放数据的类型。一旦给变量指明了类型，那么这个变量就只能存储这种类型的数据</li><li>内存空间极其有限,不同类型的变量占用不同大小的存储空间</li><li>为什么要指定变量名称?</li><li>存储数据的空间对于我们没有任何意义, 我们需要的是空间中存储的值</li><li>只有有了名称, 我们才能获取到空间中的值</li></ul></li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> a<span class="token punctuation">;</span>
<span class="token keyword">float</span> b<span class="token punctuation">;</span>
<span class="token keyword">char</span> ch<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>格式2:变量类型 变量名称,变量名称; <ul><li>连续定义, 多个变量之间用逗号(,)号隔开</li></ul></li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>变量名的命名的规范 <ul><li>变量名属于标识符,所以必须严格遵守标识符的命名原则</li></ul></li></ul><hr><h2 id="如何使用变量" tabindex="-1"><a class="header-anchor" href="#如何使用变量" aria-hidden="true">#</a> 如何使用变量？</h2><ul><li>可以利用=号往变量里面存储数据 <ul><li>在C语言中,利用=号往变量里面存储数据, 我们称之为给变量赋值</li></ul></li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> value<span class="token punctuation">;</span>
value <span class="token operator">=</span> <span class="token number">998</span><span class="token punctuation">;</span> <span class="token comment">// 赋值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>注意: <ul><li>这里的=号，并不是数学中的“相等”，而是C语言中的<em><strong>赋值运算符</strong></em>，作用是将右边的整型常量998赋值给左边的整型变量value</li><li>赋值的时候,= 号的左侧必须是变量 (10=b,错误)</li><li>为了方便阅读代码, 习惯在 = 的两侧 各加上一个 空格</li></ul></li></ul><hr><h2 id="变量的初始化" tabindex="-1"><a class="header-anchor" href="#变量的初始化" aria-hidden="true">#</a> 变量的初始化</h2><ul><li>C语言中, 变量的第一次赋值，我们称为“初始化”</li><li>初始化的两种形式 <ul><li>先定义,后初始化</li><li><code>int value; value = 998; // 初始化</code></li><li>定义时同时初始化</li><li><code>int a = 10; int b = 4, c = 2;</code></li><li>其它表现形式(不推荐)</li></ul></li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> a<span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">//部分初始化</span>
<span class="token keyword">int</span> c<span class="token punctuation">,</span> d<span class="token punctuation">,</span> e<span class="token punctuation">;</span>
c <span class="token operator">=</span> d <span class="token operator">=</span> e <span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>不初始化里面存储什么? <ul><li>随机数</li><li>上次程序分配的存储空间,存数一些 内容,“垃圾”</li><li>系统正在用的一些数据</li></ul></li></ul><hr><h2 id="如何修改变量值" tabindex="-1"><a class="header-anchor" href="#如何修改变量值" aria-hidden="true">#</a> 如何修改变量值?</h2><ul><li>多次赋值即可 <ul><li>每次赋值都会覆盖原来的值</li></ul></li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
i <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span> <span class="token comment">// 修改变量的值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="变量之间的值传递" tabindex="-1"><a class="header-anchor" href="#变量之间的值传递" aria-hidden="true">#</a> 变量之间的值传递</h2><ul><li>可以将一个变量存储的值赋值给另一个变量</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code> <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
 <span class="token keyword">int</span> b <span class="token operator">=</span> a<span class="token punctuation">;</span> <span class="token comment">// 相当于把a中存储的10拷贝了一份给b</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="如何查看变量的值" tabindex="-1"><a class="header-anchor" href="#如何查看变量的值" aria-hidden="true">#</a> 如何查看变量的值?</h2><ul><li>使用printf输出一个或多个变量的值</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span> c <span class="token operator">=</span> <span class="token number">11</span><span class="token punctuation">;</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a=%d, c=%d&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>输出其它类型变量的值</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">double</span> height <span class="token operator">=</span> <span class="token number">1.75</span><span class="token punctuation">;</span>
<span class="token keyword">char</span> blood <span class="token operator">=</span> <span class="token char">&#39;A&#39;</span><span class="token punctuation">;</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;height=%.2f, 血型是%c&quot;</span><span class="token punctuation">,</span> height<span class="token punctuation">,</span>  blood<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="变量的作用域" tabindex="-1"><a class="header-anchor" href="#变量的作用域" aria-hidden="true">#</a> 变量的作用域</h2><ul><li>C语言中所有变量都有自己的作用域</li><li>变量定义的位置不同,其作用域也不同</li><li>按照作用域的范围可分为两种, 即局部变量和全局变量</li></ul><hr><ul><li>局部变量 <ul><li>局部变量也称为内部变量</li><li>局部变量是在<em><strong>代码块内</strong></em>定义的, 其作用域仅限于代码块内, 离开该代码块后无法使用</li></ul></li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">998</span><span class="token punctuation">;</span> <span class="token comment">// 作用域开始</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span><span class="token comment">// 作用域结束</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">998</span><span class="token punctuation">;</span> <span class="token comment">// 作用域开始</span>
    <span class="token punctuation">}</span><span class="token comment">// 作用域结束</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;i = %d\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 不能使用</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token punctuation">{</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">998</span><span class="token punctuation">;</span><span class="token comment">// 作用域开始</span>
        <span class="token punctuation">}</span><span class="token comment">// 作用域结束</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;i = %d\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 不能使用</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li>全局变量 <ul><li>全局变量也称为外部变量,它是在代码块外部定义的变量</li></ul></li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">666</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;i = %d\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 可以使用</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token comment">// 作用域结束</span>
<span class="token keyword">int</span> <span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;i = %d\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 可以使用</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li>注意点: <ul><li>同一作用域范围内不能有相同名称的变量</li></ul></li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">998</span><span class="token punctuation">;</span> <span class="token comment">// 作用域开始</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">666</span><span class="token punctuation">;</span> <span class="token comment">// 报错, 重复定义</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token comment">// 作用域结束</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">666</span><span class="token punctuation">;</span> 
<span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">998</span><span class="token punctuation">;</span> <span class="token comment">// 报错, 重复定义</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>不同作用域范围内可以有相同名称的变量</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">666</span><span class="token punctuation">;</span> 
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">998</span><span class="token punctuation">;</span> <span class="token comment">// 不会报错</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">998</span><span class="token punctuation">;</span> <span class="token comment">// 不会报错</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">666</span><span class="token punctuation">;</span>  <span class="token comment">// 不会报错</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="变量内存分析-简单版" tabindex="-1"><a class="header-anchor" href="#变量内存分析-简单版" aria-hidden="true">#</a> 变量内存分析（简单版）</h2><ul><li>字节和地址 <ul><li>为了更好地理解变量在内存中的存储细节，先来认识一下内存中的“字节”和“地址”</li><li><strong>每一个小格子代表一个字节</strong></li><li><strong>每个字节都有自己的内存地址</strong></li><li><strong>内存地址是连续的</strong></li></ul></li></ul><figure><img src="https://img-blog.csdnimg.cn/img_convert/5515a7f3bbb5194db1f67b4f98de31c5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>变量存储占用的空间</li><li>一个变量所占用的存储空间，和<em><strong>定义变量时声明的类型</strong></em>以及<em><strong>当前编译环境</strong></em>有关</li></ul><table><thead><tr><th>类型</th><th>16位编译器</th><th>32位编译器</th><th>64位编译器</th></tr></thead><tbody><tr><td>char</td><td>1</td><td>1</td><td>1</td></tr><tr><td>int</td><td>2</td><td>4</td><td>4</td></tr><tr><td>float</td><td>4</td><td>4</td><td>4</td></tr><tr><td>double</td><td>8</td><td>8</td><td>8</td></tr><tr><td>short</td><td>2</td><td>2</td><td>2</td></tr><tr><td>long</td><td>4</td><td>4</td><td>8</td></tr><tr><td>long long</td><td>8</td><td>8</td><td>8</td></tr><tr><td>void*</td><td>2</td><td>4</td><td>8</td></tr></tbody></table><ul><li><p>变量存储的过程</p><ul><li>根据定义变量时声明的类型和当前编译环境确定需要开辟多大存储空间</li><li>在内存中开辟一块存储空间，开辟时从内存地址大的开始开辟（内存寻址从大到小）</li><li>将数据保存到已经开辟好的对应内存空间中</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">int</span> number<span class="token punctuation">;</span>
  <span class="token keyword">int</span> value<span class="token punctuation">;</span>
  number <span class="token operator">=</span> <span class="token number">22</span><span class="token punctuation">;</span>
  value <span class="token operator">=</span> <span class="token number">666</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> number<span class="token punctuation">;</span>
    <span class="token keyword">int</span> value<span class="token punctuation">;</span>
    number <span class="token operator">=</span> <span class="token number">22</span><span class="token punctuation">;</span>
    value <span class="token operator">=</span> <span class="token number">666</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;&amp;number = %p\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0060FEAC</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;&amp;value = %p\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// 0060FEA8</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><figure><img src="https://img-blog.csdnimg.cn/img_convert/3ac2c92b7d317d38441f3948865d98d0.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>先不要着急, 刚开始接触C语言, 我先了解这么多就够了. 后面会再次更深入的讲解存储的各种细节。</p></blockquote>`,60),l=[p];function i(c,o){return s(),a("div",null,l)}const r=n(t,[["render",i],["__file","17.html.vue"]]);export{r as default};
