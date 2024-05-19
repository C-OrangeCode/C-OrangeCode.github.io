import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as p}from"./app-a1fbcbb6.js";const e={},t=p(`<h2 id="选择结构" tabindex="-1"><a class="header-anchor" href="#选择结构" aria-hidden="true">#</a> 选择结构</h2><ul><li><p>C语言中提供了两大选择结构, 分别是if和switch</p><h2 id="选择结构if" tabindex="-1"><a class="header-anchor" href="#选择结构if" aria-hidden="true">#</a> 选择结构if</h2></li><li><p>if第一种形式</p><ul><li>表示如果表达式为真,执行语句块1,否则不执行</li></ul></li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">if</span><span class="token punctuation">(</span>表达式<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  语句块<span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
后续语句<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">if</span><span class="token punctuation">(</span>age <span class="token operator">&gt;=</span> <span class="token number">18</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;开网卡\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;买烟\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>if第二种形式 <ul><li>如果表达式为真,则执行语句块1,否则执行语句块2</li><li>else不能脱离if单独使用</li></ul></li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">if</span><span class="token punctuation">(</span>表达式<span class="token punctuation">)</span><span class="token punctuation">{</span>
  语句块<span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
  语句块<span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
后续语句<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">if</span><span class="token punctuation">(</span>age <span class="token operator">&gt;</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;开网卡\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;喊家长来开\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;买烟\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>if第三种形式 <ul><li>如果&quot;表达式1&quot;为真,则执行&quot;语句块1&quot;,否则判断&quot;表达式2&quot;,如果为真执行&quot;语句块2&quot;,否则再判断&quot;表达式3&quot;,如果真执行&quot;语句块3&quot;, 当表达式1、2、3都不满足,会执行最后一个else语句</li><li>众多大括号中,只有一个大括号中的内容会被执行</li><li>只有前面所有添加都不满足, 才会执行else大括号中的内容</li></ul></li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">if</span><span class="token punctuation">(</span>表达式<span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  语句块<span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>表达式<span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  语句块<span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>表达式<span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  语句块<span class="token number">3</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
  语句块<span class="token number">4</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
后续语句<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">if</span><span class="token punctuation">(</span>age<span class="token operator">&gt;</span><span class="token number">40</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;给房卡&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>age<span class="token operator">&gt;</span><span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;给名片&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>age<span class="token operator">&gt;</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;给网卡&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;给好人卡&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;买烟\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>if嵌套 <ul><li>if中可以继续嵌套if, else中也可以继续嵌套if</li></ul></li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">if</span><span class="token punctuation">(</span>表达式<span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    语句块<span class="token number">1</span><span class="token punctuation">;</span>
   <span class="token keyword">if</span><span class="token punctuation">(</span>表达式<span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      语句块<span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
   <span class="token keyword">if</span><span class="token punctuation">(</span>表达式<span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      语句块<span class="token number">3</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
      语句块<span class="token number">4</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li><em><strong>if注意点</strong></em><ul><li>任何数值都有真假性</li></ul></li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;执行了if&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;执行了else&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 被执行</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>当if else后面只有一条语句时, if else后面的大括号可以省略</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>    <span class="token comment">// 极其不推荐写法</span>
    <span class="token keyword">int</span> age <span class="token operator">=</span> <span class="token number">17</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>age <span class="token operator">&gt;=</span> <span class="token number">18</span><span class="token punctuation">)</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;开网卡\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;喊家长来开\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>当if else后面的大括号被省略时, else会自动和距离最近的一个if匹配</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;A\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span> <span class="token comment">// 和if(1)匹配</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;B\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span> <span class="token comment">// 和if(0)匹配, 因为if(1)已经被匹配过了</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;C\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出C</span>
    <span class="token keyword">else</span> <span class="token comment">// 和if(1)匹配</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;D\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><ul><li>如果if else省略了大括号, 那么后面不能定义变量</li></ul></li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token keyword">int</span> number <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">// 系统会报错</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;number = %i\\n&quot;</span><span class="token punctuation">,</span> number<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> number <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span> 
    <span class="token punctuation">}</span><span class="token keyword">else</span>
        <span class="token keyword">int</span> value <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span> <span class="token comment">// 系统会报错</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;value = %i\\n&quot;</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>C语言中分号(;)也是一条语句, 称之为空语句</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">// 因为if(10 &gt; 2)后面有一个分号, 所以系统会认为if省略了大括号</span>
<span class="token comment">// if省略大括号时只能管控紧随其后的那条语句, 所以只能管控分号</span>
<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token number">10</span> <span class="token operator">&gt;</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">{</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;10 &gt; 2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 输出结果: 10 &gt; 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>但凡遇到比较一个变量等于或者不等于某一个常量的时候，把常量写在前面</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">;</span>
<span class="token comment">//    if(a = 10){// 错误写法, 但不会报错</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">10</span> <span class="token operator">==</span> a<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a的值是10\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
     <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a的值不是10\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li><p>if练习</p><ul><li>从键盘输入一个整数，判断其是否是偶数，如果是偶数就输出YES，否则输出NO；</li><li>接收用户输入的1～7的整数，根据用户输入的整数，输出对应的星期几</li><li>接收用户输入的一个整数month代表月份，根据月份输出对应的季节</li><li>接收用户输入的两个整数，判断大小后输出较大的那个数</li><li>接收用户输入的三个整数，判断大小后输出较大的那个数</li><li>接收用户输入的三个整数，排序后输出</li></ul></li><li><p>实现石头剪刀布</p></li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>剪刀石头布游戏<span class="token operator">:</span>
<span class="token number">1</span><span class="token punctuation">)</span>定义游戏规则
  剪刀 干掉 布
  石头 干掉 剪刀
  布 干掉石头
<span class="token number">2</span><span class="token punctuation">)</span>显示玩家开始猜拳
<span class="token number">3</span><span class="token punctuation">)</span>接收玩家输入的内容
<span class="token number">4</span><span class="token punctuation">)</span>让电脑随机产生一种拳
<span class="token number">5</span><span class="token punctuation">)</span>判断比较
<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>玩家赢的情况<span class="token punctuation">(</span>显示玩家赢了<span class="token punctuation">)</span>
<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>电脑赢的情况<span class="token punctuation">(</span>显示电脑赢了<span class="token punctuation">)</span>
<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>平局<span class="token punctuation">(</span>显示平局<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img-blog.csdnimg.cn/img_convert/672ff35609edd25e6aa45a8adf1a6225.png" alt="" loading="lazy"><br><img src="https://img-blog.csdnimg.cn/img_convert/cb273336e304bc40948bfacebbdf01ed.png" alt="" loading="lazy"><br><img src="https://img-blog.csdnimg.cn/img_convert/a44287edc332fab3fc13d7da196899a9.png" alt="" loading="lazy"></p><hr><h2 id="选择结构switch" tabindex="-1"><a class="header-anchor" href="#选择结构switch" aria-hidden="true">#</a> 选择结构switch</h2><ul><li>由于 if else if 还是不够简洁，所以switch 就应运而生了，他跟 if else if 互为补充关系。switch 提供了点的多路选择</li><li>格式:</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">switch</span><span class="token punctuation">(</span>表达式<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">case</span> 常量表达式<span class="token number">1</span><span class="token operator">:</span>
        语句<span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> 常量表达式<span class="token number">2</span><span class="token operator">:</span>
        语句<span class="token number">2</span><span class="token punctuation">;</span> 
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> 常量表达式n<span class="token operator">:</span>
        语句n<span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
        语句n<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>语义: <ul><li>计算&quot;表达式&quot;的值, 逐个与其后的&quot;常量表达式&quot;值相比较,当&quot;表达式&quot;的值与某个&quot;常量表达式&quot;的值相等时, 即执行其后的语句, 然后跳出switch语句</li><li>如果&quot;表达式&quot;的值与所有case后的&quot;常量表达式&quot;均不相同时,则执行default后的语句</li></ul></li><li>示例:</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
    <span class="token keyword">switch</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;星期一\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;星期二\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">3</span><span class="token operator">:</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;星期三\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">4</span><span class="token operator">:</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;星期四\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">5</span><span class="token operator">:</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;星期五\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">6</span><span class="token operator">:</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;星期六\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">7</span><span class="token operator">:</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;星期日\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;回火星去\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li>switch注意点</li></ul><ul><li>switch条件表达式的类型必须是整型, 或者可以被提升为整型的值(char、short)</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">switch</span><span class="token punctuation">(</span><span class="token number">1.1</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// 报错</span>
    <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;星期一\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;星期二\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;回火星去\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>+case的值只能是常量, 并且还必须是整型, 或者可以被提升为整型的值(char、short)</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
    <span class="token keyword">switch</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span> 
    <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;星期一\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token char">&#39;a&#39;</span><span class="token operator">:</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;星期二\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> num<span class="token operator">:</span> <span class="token comment">// 报错</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;星期三\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">4.0</span><span class="token operator">:</span> <span class="token comment">// 报错</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;星期四\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;回火星去\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>case后面常量表达式的值不能相同</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">switch</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span> 
    <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span> <span class="token comment">// 报错</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;星期一\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span> <span class="token comment">// 报错</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;星期一\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;回火星去\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>case后面要想定义变量,必须给case加上大括号</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">switch</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;num = %i\\n&quot;</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;星期一\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;星期一\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;回火星去\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>switch中只要任意一个case匹配, 其它所有的case和default都会失效. 所以如果case和default后面没有break就会出现穿透问题</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token keyword">switch</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;星期一\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;星期二\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 被输出</span>
    <span class="token keyword">case</span> <span class="token number">3</span><span class="token operator">:</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;星期三\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 被输出</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;回火星去\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 被输出</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>switch中default可以省略</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">switch</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;星期一\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;星期一\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>switch中default的位置不一定要写到最后, 无论放到哪都会等到所有case都不匹配才会执行(穿透问题除外)</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">switch</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;星期一\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Other,,,\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;星期一\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li><em><strong>if和Switch转换</strong></em></li><li>看上去if和switch都可以实现同样的功能, 那么在企业开发中我们什么时候使用if, 什么时候使用switch呢? <ul><li>if else if 针对于范围的多路选择</li><li>switch 是针对点的多路选择</li></ul></li><li>判断用户输入的数据是否大于100</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>a <span class="token operator">&gt;</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;用户输入的数据大于100&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;用户输入的数据不大于100&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 挺(T)萌(M)的(D)搞不定啊</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token number">101</span><span class="token operator">:</span>
        <span class="token keyword">case</span> <span class="token number">102</span><span class="token operator">:</span>
        <span class="token keyword">case</span> <span class="token number">103</span><span class="token operator">:</span>
        <span class="token keyword">case</span> <span class="token number">104</span><span class="token operator">:</span>
        <span class="token keyword">case</span> <span class="token number">105</span><span class="token operator">:</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;大于\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">default</span><span class="token operator">:</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;不大于\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li>练习 <ul><li>实现分数等级判定</li></ul></li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>要求用户输入一个分数，根据输入的分数输出对应的等级
A <span class="token number">90</span>～<span class="token number">100</span>  
B <span class="token number">80</span>～<span class="token number">89</span>
C <span class="token number">70</span>～<span class="token number">79</span>
D <span class="token number">60</span>～<span class="token number">69</span>
E <span class="token number">0</span>～<span class="token number">59</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>实现+ - * / 简单计算器</li></ul>`,60),c=[t];function i(o,l){return s(),a("div",null,c)}const d=n(e,[["render",i],["__file","02.html.vue"]]);export{d as default};
