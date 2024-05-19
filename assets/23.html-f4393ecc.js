import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-a1fbcbb6.js";const p="/assets/1566957631468-99dea6f0.png",e="/assets/1566961685825-07a126cc.png",c={},o=t(`<h2 id="_001-函数式接口" tabindex="-1"><a class="header-anchor" href="#_001-函数式接口" aria-hidden="true">#</a> 001.函数式接口</h2><ul><li>接口类</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>lxgzhw<span class="token punctuation">.</span>demo01<span class="token punctuation">.</span></span><span class="token class-name">FunctionalInterface</span><span class="token punctuation">;</span>

<span class="token comment">/*
函数式接口:
    1.有且只有一个抽象方法的接口
    2.添加@FunctionalInterface注解
    3.可以包含其他方法(默认,静态,私有)
 */</span>
<span class="token annotation punctuation">@FunctionalInterface</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">FunctionInterface</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>测试类</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>lxgzhw<span class="token punctuation">.</span>demo01<span class="token punctuation">.</span></span><span class="token class-name">FunctionalInterface</span><span class="token punctuation">;</span>

<span class="token comment">/*
使用方法:
    1.作为方法的参数
    2.作为方法的返回值
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo01</span> <span class="token punctuation">{</span>
    <span class="token comment">//方法1:参数</span>
    <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token class-name">FunctionInterface</span> functionalInterface<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        functionalInterface<span class="token punctuation">.</span><span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//入口测试方法</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//函数式接口可以用Lambda表达式优化</span>
        <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;这是函数式接口的好处.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_002-supplier生产型" tabindex="-1"><a class="header-anchor" href="#_002-supplier生产型" aria-hidden="true">#</a> 002.<code>Supplier</code>生产型</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>lxgzhw<span class="token punctuation">.</span>demo02<span class="token punctuation">.</span></span><span class="token class-name">Supplier</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>function<span class="token punctuation">.</span></span><span class="token class-name">Supplier</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo01</span> <span class="token punctuation">{</span>
    <span class="token comment">//定义接口方法</span>
    <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">getString</span><span class="token punctuation">(</span><span class="token class-name">Supplier</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> supplier<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> supplier<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//生产型函数式接口:Supplier&lt;T&gt;</span>
        <span class="token comment">//作用:传什么类型,就得到什么类型</span>

        <span class="token comment">//使用接口方法</span>
        <span class="token class-name">String</span> cuFeng <span class="token operator">=</span> <span class="token function">getString</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token string">&quot;楚枫&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>cuFeng<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_003-练习-1" tabindex="-1"><a class="header-anchor" href="#_003-练习-1" aria-hidden="true">#</a> 003.练习 1</h2><ul><li>函数式接口方法的基本使用步骤 <ul><li>1.定义接口方法</li><li>2.使用接口方法</li><li>3.重写接口方法 <ul><li>3.1 参数必须保持一致</li><li>3.2 返回值类型必须保持一致</li></ul></li></ul></li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>lxgzhw<span class="token punctuation">.</span>demo02<span class="token punctuation">.</span></span><span class="token class-name">Supplier</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>function<span class="token punctuation">.</span></span><span class="token class-name">Supplier</span></span><span class="token punctuation">;</span>

<span class="token comment">/*
使用Supplier接口方法作为参数类型,
通过Lambda表达式求出int数组的最大值
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo02</span> <span class="token punctuation">{</span>
    <span class="token comment">//定义接口方法</span>
    <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">getMax</span><span class="token punctuation">(</span><span class="token class-name">Supplier</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> supplier<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> supplier<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//1.定义一个int类型的数组</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">2222</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">33333</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">3333</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">111</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token comment">//2.调用getMax接口方法</span>
        <span class="token keyword">int</span> max <span class="token operator">=</span> <span class="token function">getMax</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token comment">//3.定义数组的最大值</span>
            <span class="token keyword">int</span> maxValue <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token comment">//4.遍历数组,求最大值</span>
            <span class="token comment">//注意:java数组也支持迭代器</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">:</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>maxValue <span class="token operator">&lt;</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    maxValue <span class="token operator">=</span> i<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token comment">//5.返回最大值</span>
            <span class="token keyword">return</span> maxValue<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//6.打印最大值</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;-------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;该数组的最大值是:&quot;</span> <span class="token operator">+</span> max<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_004-consumer消费型" tabindex="-1"><a class="header-anchor" href="#_004-consumer消费型" aria-hidden="true">#</a> 004.<code>Consumer</code>消费型</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>lxgzhw<span class="token punctuation">.</span>demo03<span class="token punctuation">.</span></span><span class="token class-name">Consumer</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>function<span class="token punctuation">.</span></span><span class="token class-name">Consumer</span></span><span class="token punctuation">;</span>

<span class="token comment">/*
消费型函数式接口Consumer&lt;T&gt;:
    1.特点:给什么类型的数据,就消费什么类型的数据
    2.抽象方法:accept(T t)
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo01</span> <span class="token punctuation">{</span>
    <span class="token comment">//定义接口方法</span>
    <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">Consumer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> con<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//对姓名进行消费</span>
        con<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//入口:主方法</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//案例:反转字符串</span>
        <span class="token function">method</span><span class="token punctuation">(</span><span class="token string">&quot;楚枫&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> reName <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuffer</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;反转后的名字:&quot;</span> <span class="token operator">+</span> reName<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_005-函数式接口默认方法" tabindex="-1"><a class="header-anchor" href="#_005-函数式接口默认方法" aria-hidden="true">#</a> 005.函数式接口默认方法</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>lxgzhw<span class="token punctuation">.</span>demo03<span class="token punctuation">.</span></span><span class="token class-name">Consumer</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>function<span class="token punctuation">.</span></span><span class="token class-name">Consumer</span></span><span class="token punctuation">;</span>

<span class="token comment">/*
Consumer接口的默认方法:andThen
    作用:
        1.可以把两个Consumer接口组合在一起
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo02</span> <span class="token punctuation">{</span>
    <span class="token comment">//定义接口方法</span>
    <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">,</span> <span class="token class-name">Consumer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> con1<span class="token punctuation">,</span>
                       <span class="token class-name">Consumer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> con2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        con1<span class="token punctuation">.</span><span class="token function">andThen</span><span class="token punctuation">(</span>con2<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//主方法</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//会先执行con1,再执行con2</span>
        <span class="token comment">//案例:将验证码全小写,然后全大写</span>
        <span class="token function">method</span><span class="token punctuation">(</span><span class="token string">&quot;As4k&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>captcha<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>captcha<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>captcha<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>captcha<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_006-练习-2" tabindex="-1"><a class="header-anchor" href="#_006-练习-2" aria-hidden="true">#</a> 006.练习 2</h2><ul><li>注意: <ul><li>1.<code>andThen</code>拼接的是两个步骤</li><li>2.第一步的结果不会传到第二步</li><li>3.所以,这里的<code>arr</code>在第二步中还是原来的<code>arr</code></li></ul></li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>lxgzhw<span class="token punctuation">.</span>demo03<span class="token punctuation">.</span></span><span class="token class-name">Consumer</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>function<span class="token punctuation">.</span></span><span class="token class-name">Consumer</span></span><span class="token punctuation">;</span>

<span class="token comment">/*
练习:
    要求用函数式接口拼接两个步骤
    1.定义一个整型数组
    2.将数组中的所有数都乘上2输出
    3.将数组中的所有数都除上2输出
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo03</span> <span class="token punctuation">{</span>
    <span class="token comment">//接口方法</span>
    <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">operatorNum</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">,</span>
                            <span class="token class-name">Consumer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> con1<span class="token punctuation">,</span>
                            <span class="token class-name">Consumer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> con2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//遍历数组,消费每一个数</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">:</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            con1<span class="token punctuation">.</span><span class="token function">andThen</span><span class="token punctuation">(</span>con2<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//主方法</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//1.定义一个数组</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">111</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">222</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">333</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">555</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token comment">//1.1 定义两个集合,用来存储计算后的结果</span>
        <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> arr1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> arr2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//2.调用接口方法</span>
        <span class="token function">operatorNum</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            i <span class="token operator">*=</span> <span class="token number">2</span><span class="token punctuation">;</span>
            arr1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            i <span class="token operator">=</span> i <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
            arr2<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//3.打印</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;原数组:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;-------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;数组中每个数乘2的结果为:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>arr1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;-------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;数组中每个数除以2的结果为:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>打印结果</li></ul><figure><img src="`+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_007-predicate断言" tabindex="-1"><a class="header-anchor" href="#_007-predicate断言" aria-hidden="true">#</a> 007.<code>Predicate</code>断言</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>lxgzhw<span class="token punctuation">.</span>demo04<span class="token punctuation">.</span></span><span class="token class-name">Predicate</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>function<span class="token punctuation">.</span></span><span class="token class-name">Predicate</span></span><span class="token punctuation">;</span>

<span class="token comment">/*
Predicate:断言
该接口包含一个test方法,用来判断
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo01</span> <span class="token punctuation">{</span>
    <span class="token comment">//接口方法</span>
    <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">checkString</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">,</span> <span class="token class-name">Predicate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> predicate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> predicate<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//主方法</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//判断字符串的长度是否大于等于6:密码常用判断</span>
        <span class="token comment">//1.定义一个字符串</span>
        <span class="token class-name">String</span> password <span class="token operator">=</span> <span class="token string">&quot;aaabbb&quot;</span><span class="token punctuation">;</span>
        <span class="token comment">//2.调用方法检查</span>
        <span class="token comment">//注意:接口参数不能与已有参数冲突</span>
        <span class="token keyword">boolean</span> b <span class="token operator">=</span> <span class="token function">checkString</span><span class="token punctuation">(</span>password<span class="token punctuation">,</span> str <span class="token operator">-&gt;</span> str<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;=</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;该密码可用.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_008-练习-3" tabindex="-1"><a class="header-anchor" href="#_008-练习-3" aria-hidden="true">#</a> 008.练习 3</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>有密码 Abc123
使用Predicate断言接口的and方法进行以下判断,如果满足则符合规则
	1.密码长度大于5
	2.密码包含大写
	3.密码包含小写
	4.密码包含数字
判断该密码是否可用.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>参考答案</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>lxgzhw<span class="token punctuation">.</span>demo04<span class="token punctuation">.</span></span><span class="token class-name">Predicate</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>function<span class="token punctuation">.</span></span><span class="token class-name">Predicate</span></span><span class="token punctuation">;</span>

<span class="token comment">/*
Predicate断言接口能够判断:
    1.支持使用and进行与的判断
    2.可用同时判断两个以上的条件

 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo02</span> <span class="token punctuation">{</span>
    <span class="token comment">//接口方法</span>
    <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">checkPassword</span><span class="token punctuation">(</span><span class="token class-name">String</span> password<span class="token punctuation">,</span>
                                 <span class="token class-name">Predicate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> length<span class="token punctuation">,</span>
                                 <span class="token class-name">Predicate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> upper<span class="token punctuation">,</span>
                                 <span class="token class-name">Predicate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> lower<span class="token punctuation">,</span>
                                 <span class="token class-name">Predicate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> number
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">/*
        密码要求:
            1.长度大于5
            2.必须包含大写
            3.必须包含小写
            4.必须包含数字
         */</span>
        <span class="token keyword">return</span> length<span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span>upper<span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span>lower<span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>password<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token comment">//主方法</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//1.设置密码</span>
        <span class="token class-name">String</span> password <span class="token operator">=</span> <span class="token string">&quot;Abc111&quot;</span><span class="token punctuation">;</span>
        <span class="token comment">//2.调用方法</span>
        <span class="token keyword">boolean</span> isPassword <span class="token operator">=</span> <span class="token function">checkPassword</span><span class="token punctuation">(</span>password<span class="token punctuation">,</span>
                <span class="token comment">//判断长度</span>
                <span class="token punctuation">(</span>length<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> password<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token comment">//判断大写</span>
                <span class="token punctuation">(</span>upper<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
                    <span class="token keyword">boolean</span> flag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
                    <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> chars <span class="token operator">=</span> password<span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">char</span> aChar <span class="token operator">:</span> chars<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token keyword">boolean</span> upperCase <span class="token operator">=</span> <span class="token class-name">Character</span><span class="token punctuation">.</span><span class="token function">isUpperCase</span><span class="token punctuation">(</span>aChar<span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token keyword">if</span> <span class="token punctuation">(</span>upperCase<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                            flag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                    <span class="token keyword">return</span> flag<span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token comment">//判断小写</span>
                <span class="token punctuation">(</span>lower<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
                    <span class="token keyword">boolean</span> flag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
                    <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> chars <span class="token operator">=</span> password<span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">char</span> aChar <span class="token operator">:</span> chars<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token keyword">boolean</span> lowerCase <span class="token operator">=</span> <span class="token class-name">Character</span><span class="token punctuation">.</span><span class="token function">isLowerCase</span><span class="token punctuation">(</span>aChar<span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token keyword">if</span> <span class="token punctuation">(</span>lowerCase<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                            flag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                    <span class="token keyword">return</span> flag<span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token comment">//判断数字</span>
                <span class="token punctuation">(</span>number<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
                    <span class="token keyword">boolean</span> flag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
                    <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> chars <span class="token operator">=</span> password<span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">char</span> aChar <span class="token operator">:</span> chars<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token keyword">boolean</span> isNum <span class="token operator">=</span> <span class="token class-name">Character</span><span class="token punctuation">.</span><span class="token function">isDigit</span><span class="token punctuation">(</span>aChar<span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token keyword">if</span> <span class="token punctuation">(</span>isNum<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                            flag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                    <span class="token keyword">return</span> flag<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>isPassword<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;该密码可用.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_009-练习-4" tabindex="-1"><a class="header-anchor" href="#_009-练习-4" aria-hidden="true">#</a> 009.练习 4</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>已知公司数据库中存在某人,
该人信息中包含&quot;张大鹏:项目负责人...&quot;

目前项目需求需要发生修改,需要找到该公司的项目负责人或者CEO,
判断该人是否满足需求,如果满足,提取出他的名字
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>参考答案</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>lxgzhw<span class="token punctuation">.</span>demo04<span class="token punctuation">.</span></span><span class="token class-name">Predicate</span><span class="token punctuation">;</span>

<span class="token comment">/*
已知公司数据库中存在某人,
该人信息中包含&quot;张大鹏:项目负责人...&quot;

目前项目需求需要发生修改,需要找到该公司的项目负责人或者CEO,
判断该人是否满足需求,如果满足,提取出他的名字
 */</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>function<span class="token punctuation">.</span></span><span class="token class-name">Predicate</span></span><span class="token punctuation">;</span>

<span class="token comment">/*
分析:
    1.或者的关系,用or
    2.判断用Predicate断言
    3.提取用split(&quot;:&quot;)
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo03</span> <span class="token punctuation">{</span>
    <span class="token comment">//1.定义接口方法</span>
    <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">isHim</span><span class="token punctuation">(</span><span class="token class-name">String</span> info<span class="token punctuation">,</span>
                         <span class="token class-name">Predicate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> isPrincipal<span class="token punctuation">,</span>
                         <span class="token class-name">Predicate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> isCEO<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> isCEO<span class="token punctuation">.</span><span class="token function">or</span><span class="token punctuation">(</span>isPrincipal<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//2.定义测试方法</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//3.定义信息</span>
        <span class="token class-name">String</span> info <span class="token operator">=</span> <span class="token string">&quot;张大鹏:项目负责人...&quot;</span><span class="token punctuation">;</span>
        <span class="token comment">//4.调用断言方法</span>
        <span class="token keyword">boolean</span> isHim <span class="token operator">=</span> <span class="token function">isHim</span><span class="token punctuation">(</span>info<span class="token punctuation">,</span>
                <span class="token comment">//5.判断是否是负责人</span>
                principal <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
                    <span class="token comment">//5.1 判断是否包含&quot;项目负责人&quot;</span>
                    <span class="token keyword">return</span> principal<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">&quot;项目负责人&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token comment">//6.判断是否是CEO</span>
                ceo <span class="token operator">-&gt;</span> ceo<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">&quot;CEO&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//7.提取信息,打印结果</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>isHim<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> name <span class="token operator">=</span> info<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我们要找的人就是他.名字叫:&quot;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_010-练习-5" tabindex="-1"><a class="header-anchor" href="#_010-练习-5" aria-hidden="true">#</a> 010.练习 5</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>现在有个项目,急需要有人开发.
经过团队商量,只要不找&quot;皮包公司&quot;就可以,
现在有个叫&quot;理想国真恵玩&quot;的人毛遂自荐,
请写一个java程序,用Predicate断言方法,判断他是否满足要求
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>参考答案</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>lxgzhw<span class="token punctuation">.</span>demo04<span class="token punctuation">.</span></span><span class="token class-name">Predicate</span><span class="token punctuation">;</span>
<span class="token comment">/*
现在有个项目,急需要有人开发.
经过团队商量,只要不找&quot;皮包公司&quot;就可以,
现在有个叫&quot;理想国真恵玩&quot;的人毛遂自荐,
请写一个java程序,用Predicate断言方法,判断
他是否满足要求.
 */</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>function<span class="token punctuation">.</span></span><span class="token class-name">Predicate</span></span><span class="token punctuation">;</span>

<span class="token comment">/*
分析:
    1.Predicate断言
    2.只要不,即就是非,使用negate否定
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo04</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">whether</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">Predicate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> isSkin<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> isSkin<span class="token punctuation">.</span><span class="token function">negate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token string">&quot;理想国真恵玩&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">boolean</span> whether <span class="token operator">=</span> <span class="token function">whether</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> skin <span class="token operator">-&gt;</span> skin<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;皮包公司&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>whether<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;满足要求.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_011-练习-6" tabindex="-1"><a class="header-anchor" href="#_011-练习-6" aria-hidden="true">#</a> 011.练习 6</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>现在有数组
String[] roles={
    &quot;公孙离,女&quot;,
    &quot;上官婉儿,女&quot;,
    &quot;貂蝉,女&quot;,
    &quot;阿珂,女&quot;,
    &quot;大乔,女&quot;,
    &quot;小乔,女&quot;,
    &quot;诸葛亮,男&quot;,
    &quot;司马懿,男&quot;
}
筛选出所有复姓的女性角色
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>参考答案</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>lxgzhw<span class="token punctuation">.</span>demo04<span class="token punctuation">.</span></span><span class="token class-name">Predicate</span><span class="token punctuation">;</span>

<span class="token comment">/*
现在有数组
String[] roles={
    &quot;公孙离,女&quot;,
    &quot;上官婉儿,女&quot;,
    &quot;貂蝉,女&quot;,
    &quot;阿珂,女&quot;,
    &quot;大乔,女&quot;,
    &quot;小乔,女&quot;,
    &quot;诸葛亮,男&quot;,
    &quot;司马懿,男&quot;
}
筛选出所有复姓的女性角色
 */</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>function<span class="token punctuation">.</span></span><span class="token class-name">Predicate</span></span><span class="token punctuation">;</span>

<span class="token comment">/*
分析:
    1.复姓有&quot;公孙&quot;和&quot;上官&quot;,&quot;诸葛&quot;,&quot;司马&quot;
    2.遍历roles数组,以split(&quot;,&quot;)进行切割,得到姓名和性别
    3.只要姓名包含复姓中任何一个就继续判断性别是否为女
        1.可以把复姓抽出来形成新的ArrayList集合
        2.如果满足复姓且为女,放到新集合中
    4.遍历新集合,打印出所有的满足要求的角色
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo05</span> <span class="token punctuation">{</span>
    <span class="token comment">/*
    1.有判断就用断言Predicate
    2.都满足是且的关系,用and
    3.数组需要遍历,遍历后的字符串作为参数
     */</span>
    <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">isCompoundFemale</span><span class="token punctuation">(</span>
            <span class="token class-name">String</span> info<span class="token punctuation">,</span>
            <span class="token class-name">Predicate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> name<span class="token punctuation">,</span>
            <span class="token class-name">Predicate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> gender
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">return</span> name<span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span>gender<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token punctuation">;</span>

    <span class="token comment">//入口主方法</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//1.定义数组</span>
        <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> roles <span class="token operator">=</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;公孙离,女&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;上官婉儿,女&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;貂蝉,女&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;阿珂,女&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;大乔,女&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;小乔,女&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;诸葛亮,男&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;司马懿,男&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token comment">//1.1 定义复姓集合(便于扩展)</span>
        <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> compounds <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        compounds<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;公孙&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        compounds<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;上官&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        compounds<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;诸葛&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        compounds<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;司马&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//2.定义新集合,存储符合的角色</span>
        <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> compoundFemale <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//3.遍历数组</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> role <span class="token operator">:</span> roles<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//4.调用方法</span>
            <span class="token keyword">boolean</span> isCompoundFemale <span class="token operator">=</span> <span class="token function">isCompoundFemale</span><span class="token punctuation">(</span>role<span class="token punctuation">,</span>
                    <span class="token comment">//4.1判断是否为复姓</span>
                    compound <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
                        <span class="token keyword">boolean</span> flag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
                        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> s <span class="token operator">:</span> compounds<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                            <span class="token comment">//4.1.1 如果compound包含s,则是复姓</span>
                            <span class="token keyword">if</span> <span class="token punctuation">(</span>compound<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                                flag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
                            <span class="token punctuation">}</span>
                        <span class="token punctuation">}</span>
                        <span class="token keyword">return</span> flag<span class="token punctuation">;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token comment">//4.2判断是否为女性</span>
                    female <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
                        <span class="token comment">//4.2.1先拆分字符串</span>
                        <span class="token class-name">String</span> gender <span class="token operator">=</span> female<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                        <span class="token comment">//4.2.2判断是否为女</span>
                        <span class="token keyword">return</span> gender<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;女&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
            <span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//5.将满足条件的角色加到新集合</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>isCompoundFemale<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                compoundFemale<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>role<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//6.打印满足条件的角色</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>compoundFemale<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>打印结果</li></ul><figure><img src="`+e+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_012-function类型转换接口" tabindex="-1"><a class="header-anchor" href="#_012-function类型转换接口" aria-hidden="true">#</a> 012.<code>Function</code>类型转换接口</h2><ul><li>注意:<code>Lambda</code>的参数是接口函数的参数</li><li>主要看接口函数调用的时候是否传了参数</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>lxgzhw<span class="token punctuation">.</span>demo05<span class="token punctuation">.</span></span><span class="token class-name">Function</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>function<span class="token punctuation">.</span></span><span class="token class-name">Function</span></span><span class="token punctuation">;</span>

<span class="token comment">/*
数据类型转换接口:Function
    1.方法为apply(T t)
    2.泛型接收两个参数
        2.1 第一个参数是转换前的类型
        2.2 第二个参数是转换后的类型

案例:将字符串转换为整数
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo01</span> <span class="token punctuation">{</span>
    <span class="token comment">/*
    接口函数:
        1.接收字符串
        2.返回整数
     */</span>
    <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">stringToInteger</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">,</span>
                               <span class="token class-name">Function</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> fun<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> fun<span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//入口方法</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//1.定义字符串</span>
        <span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token string">&quot;1222&quot;</span><span class="token punctuation">;</span>
        <span class="token comment">//2.调用方法</span>
        <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token function">stringToInteger</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> <span class="token punctuation">(</span>str<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//3.打印</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_013-练习" tabindex="-1"><a class="header-anchor" href="#_013-练习" aria-hidden="true">#</a> 013.练习</h2><ul><li>注意:这里的<code>andThen</code>能将前面的操作结果传给后面</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>需求:
    有一个字符串&quot;111&quot;,将其转换为整数类型,
    然后乘100,再将结果转换为字符串类型
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>参考答案</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>lxgzhw<span class="token punctuation">.</span>demo05<span class="token punctuation">.</span></span><span class="token class-name">Function</span><span class="token punctuation">;</span>

<span class="token comment">/*
依赖于Function默认方法andThen,拼接步骤
需求:
    有一个字符串&quot;111&quot;,将其转换为整数类型,
    然后乘100,再将结果转换为字符串类型
 */</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>function<span class="token punctuation">.</span></span><span class="token class-name">Function</span></span><span class="token punctuation">;</span>

<span class="token comment">/*
分析:
    1.转换用Function接口
    2.转换两次用andThen
    3.参数是字符串
    4.返回值是字符串
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo02</span> <span class="token punctuation">{</span>
    <span class="token comment">/*
    接口方法:参数是字符串,返回值是字符串
     */</span>
    <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">getNewString</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">,</span>
                               <span class="token class-name">Function</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> fun1<span class="token punctuation">,</span>
                               <span class="token class-name">Function</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> fun2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> fun1<span class="token punctuation">.</span><span class="token function">andThen</span><span class="token punctuation">(</span>fun2<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//入口方法</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//1.定义字符串</span>
        <span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token string">&quot;111&quot;</span><span class="token punctuation">;</span>
        <span class="token comment">//2.调用方法</span>
        <span class="token class-name">String</span> newString <span class="token operator">=</span> <span class="token function">getNewString</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> str <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
            i <span class="token operator">*=</span> <span class="token number">100</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> i <span class="token operator">-&gt;</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//3.打印测试</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>newString<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,47),i=[o];function l(u,k){return s(),a("div",null,i)}const v=n(c,[["render",l],["__file","23.html.vue"]]);export{v as default};
