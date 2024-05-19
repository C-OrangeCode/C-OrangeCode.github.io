import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-a1fbcbb6.js";const p={},t=e(`<h2 id="链表查找" tabindex="-1"><a class="header-anchor" href="#链表查找" aria-hidden="true">#</a> 链表查找</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/**
 * @brief searchList 查找指定节点
 * @param head 链表头指针
 * @param key 需要查找的值
 * @return
 */</span>
Node <span class="token operator">*</span><span class="token function">searchList</span><span class="token punctuation">(</span>Node <span class="token operator">*</span>head<span class="token punctuation">,</span> <span class="token keyword">int</span> key<span class="token punctuation">)</span><span class="token punctuation">{</span>
    head <span class="token operator">=</span> head<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>head<span class="token operator">-&gt;</span>data <span class="token operator">==</span> key<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            head <span class="token operator">=</span> head<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> head<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="链表删除" tabindex="-1"><a class="header-anchor" href="#链表删除" aria-hidden="true">#</a> 链表删除</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">deleteNodeList</span><span class="token punctuation">(</span>Node <span class="token operator">*</span>head<span class="token punctuation">,</span> Node <span class="token operator">*</span>find<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>head<span class="token operator">-&gt;</span>next <span class="token operator">!=</span> find<span class="token punctuation">)</span><span class="token punctuation">{</span>
        head <span class="token operator">=</span> head<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    head<span class="token operator">-&gt;</span>next <span class="token operator">=</span> find<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token function">free</span><span class="token punctuation">(</span>find<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="作业" tabindex="-1"><a class="header-anchor" href="#作业" aria-hidden="true">#</a> 作业</h2><ul><li>给链表排序</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/**
 * @brief bubbleSort 对链表进行排序
 * @param head 链表头指针
 */</span>
<span class="token keyword">void</span> <span class="token function">bubbleSort</span><span class="token punctuation">(</span>Node <span class="token operator">*</span>head<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 1.计算链表长度</span>
    <span class="token keyword">int</span> len <span class="token operator">=</span> <span class="token function">listLength</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 2.定义变量记录前后节点</span>
    Node <span class="token operator">*</span>cur <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
   <span class="token comment">// 3.相邻元素进行比较, 进行冒泡排序</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        cur <span class="token operator">=</span> head<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> len <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%i, %i\\n&quot;</span><span class="token punctuation">,</span> cur<span class="token operator">-&gt;</span>data<span class="token punctuation">,</span> cur<span class="token operator">-&gt;</span>next<span class="token operator">-&gt;</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>cur<span class="token operator">-&gt;</span>data<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token punctuation">(</span>cur<span class="token operator">-&gt;</span>next<span class="token operator">-&gt;</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">int</span> temp <span class="token operator">=</span> cur<span class="token operator">-&gt;</span>data<span class="token punctuation">;</span>
                cur<span class="token operator">-&gt;</span>data <span class="token operator">=</span> cur<span class="token operator">-&gt;</span>next<span class="token operator">-&gt;</span>data<span class="token punctuation">;</span>
                cur<span class="token operator">-&gt;</span>next<span class="token operator">-&gt;</span>data <span class="token operator">=</span> temp<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            cur <span class="token operator">=</span> cur<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/**
 * @brief sortList 对链表进行排序
 * @param head 链表头指针
 */</span>
<span class="token keyword">void</span> <span class="token function">sortList</span><span class="token punctuation">(</span>Node <span class="token operator">*</span>head<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 0.计算链表长度</span>
    <span class="token keyword">int</span> len <span class="token operator">=</span> <span class="token function">listLength</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 1.定义变量保存前后两个节点</span>
    Node <span class="token operator">*</span>sh<span class="token punctuation">,</span> <span class="token operator">*</span>pre<span class="token punctuation">,</span> <span class="token operator">*</span>cur<span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        sh <span class="token operator">=</span> head<span class="token punctuation">;</span> <span class="token comment">// 头节点</span>
        pre <span class="token operator">=</span> sh<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span> <span class="token comment">// 第一个节点</span>
        cur <span class="token operator">=</span> pre<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span> <span class="token comment">// 第二个节点</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> len <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>pre<span class="token operator">-&gt;</span>data <span class="token operator">&gt;</span> cur<span class="token operator">-&gt;</span>data<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">// 交换节点位置</span>
                sh<span class="token operator">-&gt;</span>next <span class="token operator">=</span> cur<span class="token punctuation">;</span>
                pre<span class="token operator">-&gt;</span>next <span class="token operator">=</span> cur<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
                cur<span class="token operator">-&gt;</span>next <span class="token operator">=</span> pre<span class="token punctuation">;</span>
                <span class="token comment">// 恢复节点名称</span>
                Node <span class="token operator">*</span>temp <span class="token operator">=</span> pre<span class="token punctuation">;</span>
                pre <span class="token operator">=</span> cur<span class="token punctuation">;</span>
                cur <span class="token operator">=</span> temp<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 让所有节点往后移动</span>
            sh <span class="token operator">=</span> sh<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
            pre <span class="token operator">=</span> pre<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
            cur <span class="token operator">=</span> cur<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>链表反转</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/**
 * @brief reverseList 反转链表
 * @param head 链表头指针
 */</span>
<span class="token keyword">void</span> <span class="token function">reverseList</span><span class="token punctuation">(</span>Node <span class="token operator">*</span>head<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 1.将链表一分为二</span>
    Node <span class="token operator">*</span>pre<span class="token punctuation">,</span> <span class="token operator">*</span>cur<span class="token punctuation">;</span>
    pre <span class="token operator">=</span> head<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    head<span class="token operator">-&gt;</span>next <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    <span class="token comment">// 2.重新插入节点</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>pre<span class="token punctuation">)</span><span class="token punctuation">{</span>
        cur <span class="token operator">=</span> pre<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
        pre<span class="token operator">-&gt;</span>next <span class="token operator">=</span> head<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
        head<span class="token operator">-&gt;</span>next <span class="token operator">=</span> pre<span class="token punctuation">;</span>

        pre <span class="token operator">=</span> cur<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2>`,11),o=[t];function c(l,i){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","48.html.vue"]]);export{d as default};
