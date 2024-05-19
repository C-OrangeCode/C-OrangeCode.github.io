import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-a1fbcbb6.js";const p={},e=t(`<h2 id="动态链表" tabindex="-1"><a class="header-anchor" href="#动态链表" aria-hidden="true">#</a> 动态链表</h2><ul><li><p>静态链表的意义不是很大，主要原因，数据存储在栈上，栈的存储空间有限，不能动态分配。所以链表要实现存储的自由，要动态的申请堆里的空间。</p></li><li><p>有一个点要说清楚，我们的实现的链表是带头节点。至于，为什么带头节点，需等大家对链表有个整体的的认知以后，再来体会，会更有意义。</p></li><li><p>空链表</p></li></ul><ul><li>头指针带了一个空链表节点, 空链表节点中的 next 指向 NULL<br><img src="https://img-blog.csdnimg.cn/img_convert/21a038cfb75cce739e0f1d333126db74.png" alt="" loading="lazy"></li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>

<span class="token comment">// 1.定义链表节点</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">node</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> data<span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">node</span> <span class="token operator">*</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span>Node<span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    Node <span class="token operator">*</span>head <span class="token operator">=</span> <span class="token function">createList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 创建空链表</span>
Node <span class="token operator">*</span><span class="token function">createList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 1.创建一个节点</span>
    Node <span class="token operator">*</span>node <span class="token operator">=</span> <span class="token punctuation">(</span>Node <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>Node<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>node <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">exit</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 2.设置下一个节点为NULL</span>
    node<span class="token operator">-&gt;</span>next <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    <span class="token comment">// 3.返回创建好的节点</span>
    <span class="token keyword">return</span> node<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>非空链表</li></ul><ul><li>头指针带了一个非空节点, 最后一个节点中的 next 指向 NULL<br><img src="https://img-blog.csdnimg.cn/img_convert/4f238221615ee2ef930526bd53cdc0ef.png" alt="" loading="lazy"></li></ul><h2 id="动态链表头插法" tabindex="-1"><a class="header-anchor" href="#动态链表头插法" aria-hidden="true">#</a> 动态链表头插法</h2><ul><li>1.让新节点的下一个节点等于头结点的下一个节点</li><li>2.让头节点的下一个节点等于新节点</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>

<span class="token comment">// 1.定义链表节点</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">node</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> data<span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">node</span> <span class="token operator">*</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span>Node<span class="token punctuation">;</span>
Node <span class="token operator">*</span><span class="token function">createList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">printNodeList</span><span class="token punctuation">(</span>Node <span class="token operator">*</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    Node <span class="token operator">*</span>head <span class="token operator">=</span> <span class="token function">createList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printNodeList</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/**
 * @brief createList 创建链表
 * @return  创建好的链表
 */</span>
Node <span class="token operator">*</span><span class="token function">createList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 1.创建头节点</span>
    Node <span class="token operator">*</span>head <span class="token operator">=</span> <span class="token punctuation">(</span>Node <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>Node<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>head <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    head<span class="token operator">-&gt;</span>next <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>

    <span class="token comment">// 2.接收用户输入数据</span>
    <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入节点数据\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%i&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 3.通过循环创建其它节点</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>num <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 3.1创建一个新的节点</span>
        Node <span class="token operator">*</span>cur <span class="token operator">=</span> <span class="token punctuation">(</span>Node <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>Node<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        cur<span class="token operator">-&gt;</span>data <span class="token operator">=</span> num<span class="token punctuation">;</span>

        <span class="token comment">// 3.2让新节点的下一个节点指向头节点的下一个节点</span>
        cur<span class="token operator">-&gt;</span>next <span class="token operator">=</span> head<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
        <span class="token comment">// 3.3让头节点的下一个节点指向新节点</span>
        head<span class="token operator">-&gt;</span>next <span class="token operator">=</span> cur<span class="token punctuation">;</span>

        <span class="token comment">// 3.4再次接收用户输入数据</span>
        <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%i&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 3.返回创建好的节点</span>
    <span class="token keyword">return</span> head<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/**
 * @brief printNodeList 遍历链表
 * @param node 链表指针头
 */</span>
<span class="token keyword">void</span> <span class="token function">printNodeList</span><span class="token punctuation">(</span>Node <span class="token operator">*</span>node<span class="token punctuation">)</span><span class="token punctuation">{</span>
    Node <span class="token operator">*</span>head <span class="token operator">=</span> node<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>head <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> currentData <span class="token operator">=</span> head<span class="token operator">-&gt;</span>data<span class="token punctuation">;</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;currentData = %i\\n&quot;</span><span class="token punctuation">,</span> currentData<span class="token punctuation">)</span><span class="token punctuation">;</span>
        head <span class="token operator">=</span> head<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="动态链表尾插法" tabindex="-1"><a class="header-anchor" href="#动态链表尾插法" aria-hidden="true">#</a> 动态链表尾插法</h2><ul><li>1.定义变量记录新节点的上一个节点</li><li>2.将新节点添加到上一个节点后面</li><li>3.让新节点成为下一个节点的上一个节点</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>

<span class="token comment">// 1.定义链表节点</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">node</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> data<span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">node</span> <span class="token operator">*</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span>Node<span class="token punctuation">;</span>
Node <span class="token operator">*</span><span class="token function">createList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">printNodeList</span><span class="token punctuation">(</span>Node <span class="token operator">*</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    Node <span class="token operator">*</span>head <span class="token operator">=</span> <span class="token function">createList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printNodeList</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/**
 * @brief createList 创建链表
 * @return  创建好的链表
 */</span>
Node <span class="token operator">*</span><span class="token function">createList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 1.创建头节点</span>
    Node <span class="token operator">*</span>head <span class="token operator">=</span> <span class="token punctuation">(</span>Node <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>Node<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>head <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    head<span class="token operator">-&gt;</span>next <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>

    <span class="token comment">// 2.接收用户输入数据</span>
    <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入节点数据\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%i&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 3.通过循环创建其它节点</span>
    <span class="token comment">// 定义变量记录上一个节点</span>
    Node <span class="token operator">*</span>pre <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>num <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 3.1创建一个新的节点</span>
        Node <span class="token operator">*</span>cur <span class="token operator">=</span> <span class="token punctuation">(</span>Node <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>Node<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        cur<span class="token operator">-&gt;</span>data <span class="token operator">=</span> num<span class="token punctuation">;</span>

        <span class="token comment">// 3.2让新节点链接到上一个节点后面</span>
        pre<span class="token operator">-&gt;</span>next <span class="token operator">=</span> cur<span class="token punctuation">;</span>
        <span class="token comment">// 3.3当前节点下一个节点等于NULL</span>
        cur<span class="token operator">-&gt;</span>next <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
        <span class="token comment">// 3.4让当前节点编程下一个节点的上一个节点</span>
        pre <span class="token operator">=</span> cur<span class="token punctuation">;</span>

        <span class="token comment">// 3.5再次接收用户输入数据</span>
        <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%i&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 3.返回创建好的节点</span>
    <span class="token keyword">return</span> head<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/**
 * @brief printNodeList 遍历链表
 * @param node 链表指针头
 */</span>
<span class="token keyword">void</span> <span class="token function">printNodeList</span><span class="token punctuation">(</span>Node <span class="token operator">*</span>node<span class="token punctuation">)</span><span class="token punctuation">{</span>
    Node <span class="token operator">*</span>head <span class="token operator">=</span> node<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>head <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> currentData <span class="token operator">=</span> head<span class="token operator">-&gt;</span>data<span class="token punctuation">;</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;currentData = %i\\n&quot;</span><span class="token punctuation">,</span> currentData<span class="token punctuation">)</span><span class="token punctuation">;</span>
        head <span class="token operator">=</span> head<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="动态链优化" tabindex="-1"><a class="header-anchor" href="#动态链优化" aria-hidden="true">#</a> 动态链优化</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>

<span class="token comment">// 1.定义链表节点</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">node</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> data<span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">node</span> <span class="token operator">*</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span>Node<span class="token punctuation">;</span>
Node <span class="token operator">*</span><span class="token function">createList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">printNodeList</span><span class="token punctuation">(</span>Node <span class="token operator">*</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">insertNode1</span><span class="token punctuation">(</span>Node <span class="token operator">*</span>head<span class="token punctuation">,</span> <span class="token keyword">int</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">insertNode2</span><span class="token punctuation">(</span>Node <span class="token operator">*</span>head<span class="token punctuation">,</span> <span class="token keyword">int</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 1.创建一个空链表</span>
    Node <span class="token operator">*</span>head <span class="token operator">=</span> <span class="token function">createList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 2.往空链表中插入数据</span>
    <span class="token function">insertNode1</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">insertNode1</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">insertNode1</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printNodeList</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/**
 * @brief createList 创建空链表
 * @return  创建好的空链表
 */</span>
Node <span class="token operator">*</span><span class="token function">createList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 1.创建头节点</span>
    Node <span class="token operator">*</span>head <span class="token operator">=</span> <span class="token punctuation">(</span>Node <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>Node<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>head <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    head<span class="token operator">-&gt;</span>next <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    <span class="token comment">// 3.返回创建好的节点</span>
    <span class="token keyword">return</span> head<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/**
 * @brief insertNode1 尾插法插入节点
 * @param head 需要插入的头指针
 * @param data 需要插入的数据
 * @return  插入之后的链表
 */</span>
<span class="token keyword">void</span> <span class="token function">insertNode1</span><span class="token punctuation">(</span>Node <span class="token operator">*</span>head<span class="token punctuation">,</span> <span class="token keyword">int</span> data<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 1.定义变量记录最后一个节点</span>
    Node <span class="token operator">*</span>pre <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>pre <span class="token operator">!=</span> <span class="token constant">NULL</span> <span class="token operator">&amp;&amp;</span> pre<span class="token operator">-&gt;</span>next <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        pre <span class="token operator">=</span> pre<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 2.创建一个新的节点</span>
    Node <span class="token operator">*</span>cur <span class="token operator">=</span> <span class="token punctuation">(</span>Node <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>Node<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cur<span class="token operator">-&gt;</span>data <span class="token operator">=</span> data<span class="token punctuation">;</span>

    <span class="token comment">// 3.让新节点链接到上一个节点后面</span>
    pre<span class="token operator">-&gt;</span>next <span class="token operator">=</span> cur<span class="token punctuation">;</span>
    <span class="token comment">// 4.当前节点下一个节点等于NULL</span>
    cur<span class="token operator">-&gt;</span>next <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    <span class="token comment">// 5.让当前节点编程下一个节点的上一个节点</span>
    pre <span class="token operator">=</span> cur<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/**
 * @brief insertNode1 头插法插入节点
 * @param head 需要插入的头指针
 * @param data 需要插入的数据
 * @return  插入之后的链表
 */</span>
<span class="token keyword">void</span> <span class="token function">insertNode2</span><span class="token punctuation">(</span>Node <span class="token operator">*</span>head<span class="token punctuation">,</span> <span class="token keyword">int</span> data<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 1.创建一个新的节点</span>
    Node <span class="token operator">*</span>cur <span class="token operator">=</span> <span class="token punctuation">(</span>Node <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>Node<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cur<span class="token operator">-&gt;</span>data <span class="token operator">=</span> data<span class="token punctuation">;</span>

    <span class="token comment">// 2.让新节点的下一个节点指向头节点的下一个节点</span>
    cur<span class="token operator">-&gt;</span>next <span class="token operator">=</span> head<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token comment">// 3.让头节点的下一个节点指向新节点</span>
    head<span class="token operator">-&gt;</span>next <span class="token operator">=</span> cur<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/**
 * @brief printNodeList 遍历链表
 * @param node 链表指针头
 */</span>
<span class="token keyword">void</span> <span class="token function">printNodeList</span><span class="token punctuation">(</span>Node <span class="token operator">*</span>node<span class="token punctuation">)</span><span class="token punctuation">{</span>
    Node <span class="token operator">*</span>head <span class="token operator">=</span> node<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>head <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> currentData <span class="token operator">=</span> head<span class="token operator">-&gt;</span>data<span class="token punctuation">;</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;currentData = %i\\n&quot;</span><span class="token punctuation">,</span> currentData<span class="token punctuation">)</span><span class="token punctuation">;</span>
        head <span class="token operator">=</span> head<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2>`,15),o=[e];function c(i,l){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","46.html.vue"]]);export{d as default};
