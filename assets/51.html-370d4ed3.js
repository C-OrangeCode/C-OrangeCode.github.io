import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as p}from"./app-a1fbcbb6.js";const t={},e=p(`<h2 id="读写结构体" tabindex="-1"><a class="header-anchor" href="#读写结构体" aria-hidden="true">#</a> 读写结构体</h2><ul><li>结构体中的数据类型不统一，此时最适合用二进制的方式进行读写</li><li>读写单个结构体</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">typedef</span> <span class="token keyword">struct</span><span class="token punctuation">{</span>
    <span class="token keyword">char</span> <span class="token operator">*</span>name<span class="token punctuation">;</span>
    <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token keyword">double</span> height<span class="token punctuation">;</span>
<span class="token punctuation">}</span> Person<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    Person p1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;lnj&quot;</span><span class="token punctuation">,</span> <span class="token number">35</span><span class="token punctuation">,</span> <span class="token number">1.88</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">//    printf(&quot;name = %s\\n&quot;, p1.name);</span>
<span class="token comment">//    printf(&quot;age = %i\\n&quot;, p1.age);</span>
<span class="token comment">//    printf(&quot;height = %lf\\n&quot;, p1.height);</span>

    FILE <span class="token operator">*</span>fp <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string">&quot;person.stu&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;wb+&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">fwrite</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>p1<span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>p1<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> fp<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">rewind</span><span class="token punctuation">(</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span>
    Person p2<span class="token punctuation">;</span>
    <span class="token function">fread</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>p2<span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>p2<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> fp<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;name = %s\\n&quot;</span><span class="token punctuation">,</span> p2<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;age = %i\\n&quot;</span><span class="token punctuation">,</span> p2<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;height = %lf\\n&quot;</span><span class="token punctuation">,</span> p2<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>读写结构体数组</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">typedef</span> <span class="token keyword">struct</span><span class="token punctuation">{</span>
    <span class="token keyword">char</span> <span class="token operator">*</span>name<span class="token punctuation">;</span>
    <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token keyword">double</span> height<span class="token punctuation">;</span>
<span class="token punctuation">}</span> Person<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    Person ps<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token punctuation">{</span><span class="token string">&quot;zs&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token number">1.65</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span><span class="token string">&quot;ls&quot;</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">,</span> <span class="token number">1.88</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span><span class="token string">&quot;ww&quot;</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">1.9</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>


    FILE <span class="token operator">*</span>fp <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string">&quot;person.stu&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;wb+&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">fwrite</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>ps<span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>ps<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> fp<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">rewind</span><span class="token punctuation">(</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span>
    Person p<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token function">fread</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>p<span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> fp<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;name = %s\\n&quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;age = %i\\n&quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;height = %lf\\n&quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>读写结构体链表</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>

<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">person</span><span class="token punctuation">{</span>
    <span class="token keyword">char</span> <span class="token operator">*</span>name<span class="token punctuation">;</span>
    <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token keyword">double</span> height<span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">person</span><span class="token operator">*</span> next<span class="token punctuation">;</span>
<span class="token punctuation">}</span> Person<span class="token punctuation">;</span>
Person <span class="token operator">*</span><span class="token function">createEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">void</span>  <span class="token function">insertNode</span><span class="token punctuation">(</span>Person <span class="token operator">*</span>head<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span>name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">,</span> <span class="token keyword">double</span> height<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">printfList</span><span class="token punctuation">(</span>Person <span class="token operator">*</span>head<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">saveList</span><span class="token punctuation">(</span>Person <span class="token operator">*</span>head<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
Person <span class="token operator">*</span><span class="token function">loadList</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>

<span class="token comment">//    Person *head = createEmpty();</span>
<span class="token comment">//    insertNode(head, &quot;zs&quot;, 18, 1.9);</span>
<span class="token comment">//    insertNode(head, &quot;ls&quot;, 22, 1.65);</span>
<span class="token comment">//    insertNode(head, &quot;ws&quot;, 31, 1.78);</span>
<span class="token comment">//    printfList(head);</span>
<span class="token comment">//    saveList(head, &quot;person.list&quot;);</span>
    Person <span class="token operator">*</span>head <span class="token operator">=</span> <span class="token function">loadList</span><span class="token punctuation">(</span><span class="token string">&quot;person.list&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printfList</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * @brief loadList 从文件加载链表
 * @param name 文件名称
 * @return  加载好的链表头指针
 */</span>
Person <span class="token operator">*</span><span class="token function">loadList</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span>name<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 1.打开文件</span>
    FILE <span class="token operator">*</span>fp <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> <span class="token string">&quot;rb+&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>fp <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 2.创建一个空链表</span>
    Person <span class="token operator">*</span>head <span class="token operator">=</span> <span class="token function">createEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 3.创建一个节点</span>
    Person <span class="token operator">*</span>node <span class="token operator">=</span> <span class="token punctuation">(</span>Person <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>Person<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token function">fread</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>Person<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> fp<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 3.进行插入</span>
        <span class="token comment">// 3.1让新节点的下一个节点 等于 头节点的下一个节点</span>
        node<span class="token operator">-&gt;</span>next <span class="token operator">=</span> head<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
        <span class="token comment">// 3.2让头结点的下一个节点 等于 新节点</span>
        head<span class="token operator">-&gt;</span>next <span class="token operator">=</span> node<span class="token punctuation">;</span>

        <span class="token comment">// 给下一个节点申请空间</span>
        node <span class="token operator">=</span> <span class="token punctuation">(</span>Person <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>Person<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 释放多余的节点空间</span>
    <span class="token function">free</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">fclose</span><span class="token punctuation">(</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> head<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * @brief saveList 存储链表到文件
 * @param head 链表头指针
 * @param name 存储的文件名称
 * @return  是否存储成功 -1失败 0成功
 */</span>
<span class="token keyword">int</span> <span class="token function">saveList</span><span class="token punctuation">(</span>Person <span class="token operator">*</span>head<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span>name<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 1.打开文件</span>
    FILE <span class="token operator">*</span>fp <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> <span class="token string">&quot;wb+&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>fp <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 2.取出头节点的下一个节点</span>
    Person <span class="token operator">*</span>cur <span class="token operator">=</span> head<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token comment">// 3.将所有有效节点保存到文件中</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>cur <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">fwrite</span><span class="token punctuation">(</span>cur<span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>Person<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> fp<span class="token punctuation">)</span><span class="token punctuation">;</span>
        cur <span class="token operator">=</span> cur<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">fclose</span><span class="token punctuation">(</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/**
 * @brief printfList 遍历链表
 * @param head 链表的头指针
 */</span>
<span class="token keyword">void</span> <span class="token function">printfList</span><span class="token punctuation">(</span>Person <span class="token operator">*</span>head<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 1.取出头节点的下一个节点</span>
    Person <span class="token operator">*</span>cur <span class="token operator">=</span> head<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token comment">// 2.判断是否为NULL, 如果不为NULL就开始遍历</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>cur <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 2.1取出当前节点的数据, 打印</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;name = %s\\n&quot;</span><span class="token punctuation">,</span> cur<span class="token operator">-&gt;</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;age = %i\\n&quot;</span><span class="token punctuation">,</span> cur<span class="token operator">-&gt;</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;height = %lf\\n&quot;</span><span class="token punctuation">,</span> cur<span class="token operator">-&gt;</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;next = %x\\n&quot;</span><span class="token punctuation">,</span> cur<span class="token operator">-&gt;</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;-----------\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 2.2让当前节点往后移动</span>
        cur <span class="token operator">=</span> cur<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * @brief insertNode 插入新的节点
 * @param head 链表的头指针
 * @param p 需要插入的结构体
 */</span>
<span class="token keyword">void</span>  <span class="token function">insertNode</span><span class="token punctuation">(</span>Person <span class="token operator">*</span>head<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span>name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">,</span> <span class="token keyword">double</span> height<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 1.创建一个新的节点</span>
    Person <span class="token operator">*</span>node <span class="token operator">=</span> <span class="token punctuation">(</span>Person <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>Person<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 2.将数据保存到新节点中</span>
    node<span class="token operator">-&gt;</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    node<span class="token operator">-&gt;</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    node<span class="token operator">-&gt;</span>height <span class="token operator">=</span> height<span class="token punctuation">;</span>

    <span class="token comment">// 3.进行插入</span>
    <span class="token comment">// 3.1让新节点的下一个节点 等于 头节点的下一个节点</span>
    node<span class="token operator">-&gt;</span>next <span class="token operator">=</span> head<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token comment">// 3.2让头结点的下一个节点 等于 新节点</span>
    head<span class="token operator">-&gt;</span>next <span class="token operator">=</span> node<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/**
 * @brief createEmpty 创建一个空链表
 * @return 链表头指针, 创建失败返回NULL
 */</span>
Person <span class="token operator">*</span><span class="token function">createEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 1.定义头指针</span>
    Person <span class="token operator">*</span>head <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    <span class="token comment">// 2.创建一个空节点, 并且赋值给头指针</span>
    head <span class="token operator">=</span> <span class="token punctuation">(</span>Person <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>Person<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>head <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> head<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    head<span class="token operator">-&gt;</span>next <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    <span class="token comment">// 3.返回头指针</span>
    <span class="token keyword">return</span> head<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2>`,8),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","51.html.vue"]]);export{k as default};
