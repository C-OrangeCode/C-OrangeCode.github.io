import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as p}from"./app-a1fbcbb6.js";const t={},e=p(`<h2 id="_001-接口概述" tabindex="-1"><a class="header-anchor" href="#_001-接口概述" aria-hidden="true">#</a> 001.接口概述</h2><ul><li>生活中的接口举例 <ul><li>电源插座当中的电源接口</li><li>电脑的<code>USB</code>接口 <ul><li>只要符合<code>USB</code>规范的设备都可以使用 <ul><li><code>U</code>盘</li><li>硬盘</li><li>打印机</li><li>夜读灯</li><li><code>USB</code>小风扇</li></ul></li></ul></li></ul></li><li>接口就是一种公共的规范标准,只要符合规范标准,就可以大家通用</li></ul><h2 id="_002-定义接口" tabindex="-1"><a class="header-anchor" href="#_002-定义接口" aria-hidden="true">#</a> 002.定义接口</h2><ul><li>接口是一种公共规范</li><li>接口时一种引用数据类型,最重要的内容就是其中的抽象方法</li><li>定义</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public interface 接口名称{
	//接口内容
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意:接口生成的字节码文件还是<code>.class</code></p></blockquote><ul><li>接口中可以包含的内容有<code>java8+</code><ul><li>常量</li><li>抽象方法</li><li>默认方法</li><li>静态方法</li><li>私有方法 <code>java9+</code></li></ul></li><li>代码演示</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>lxgzhw<span class="token punctuation">.</span>demo01</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Interface01</span> <span class="token punctuation">{</span>
    <span class="token comment">//定义一个抽象方法</span>
    <span class="token comment">//接口当中的抽象方法,必须是两个固定的关键字</span>
    <span class="token comment">//public abstract 所以可以省略</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">methodAbs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">methodAbs2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">methodAbs3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">methodAbs4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_003-接口使用" tabindex="-1"><a class="header-anchor" href="#_003-接口使用" aria-hidden="true">#</a> 003.接口使用</h2><ul><li>使用步骤 <ul><li>1.接口不能直接使用,必须有一个实现类来实现接口 <ul><li>格式:<code>public class 类名称 impements 接口名称{}</code></li><li>注意:这里是<code>implements</code>而不是<code>extend</code></li></ul></li><li>2.接口的实现类必须覆盖重写/实现接口中的所有抽象方法</li><li>3.创建实现类的对象,进行使用</li></ul></li><li>代码演示</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>lxgzhw<span class="token punctuation">.</span>demo01</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Interface02</span> <span class="token keyword">implements</span> <span class="token class-name">Interface01</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">methodAbs</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;方法1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">methodAbs2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;方法2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">methodAbs3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;方法3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">methodAbs4</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;方法4&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//测试方法</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Interface02</span> interface02 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Interface02</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//调用其方法</span>
        interface02<span class="token punctuation">.</span><span class="token function">methodAbs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        interface02<span class="token punctuation">.</span><span class="token function">methodAbs2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        interface02<span class="token punctuation">.</span><span class="token function">methodAbs3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        interface02<span class="token punctuation">.</span><span class="token function">methodAbs4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_004-默认方法" tabindex="-1"><a class="header-anchor" href="#_004-默认方法" aria-hidden="true">#</a> 004.默认方法</h2><ul><li><code>jdk8</code>以上支持默认方法 <ul><li>用来解决接口升级的问题</li></ul></li><li>可以被接口实现类直接调用</li><li>可以被接口实现类重写覆盖</li><li>代码演示</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>lxgzhw<span class="token punctuation">.</span>demo01</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Interface03</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">methodA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//定义默认方法</span>
    <span class="token comment">//默认方法可以不被重写</span>
    <span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">methodB</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//默认方法可以有自己的方法体</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;默认方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token keyword">implements</span> <span class="token class-name">Interface03</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">methodA</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;抽象方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//测试</span>
<span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Test</span> test <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//调用方法</span>
        test<span class="token punctuation">.</span><span class="token function">methodA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        test<span class="token punctuation">.</span><span class="token function">methodB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_005-接口静态方法" tabindex="-1"><a class="header-anchor" href="#_005-接口静态方法" aria-hidden="true">#</a> 005.接口静态方法</h2><blockquote><p><code>jdk8+</code>支持静态方法</p></blockquote><ul><li>格式: <ul><li><code>public static 返回值类型 方法名称(参数列表){方法体}</code></li><li>就是将<code>abstract</code>或者<code>default</code>换成<code>static</code>即可</li></ul></li><li>代码演示</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>lxgzhw<span class="token punctuation">.</span>demo01</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Interface04</span> <span class="token punctuation">{</span>
    <span class="token comment">//定义抽象方法</span>
    <span class="token keyword">void</span> <span class="token function">methodA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//定义默认方法</span>
    <span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">methodB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;默认方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//定义静态方法</span>
    <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">methodC</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;静态方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//实现类</span>
<span class="token keyword">class</span> <span class="token class-name">Test01</span> <span class="token keyword">implements</span> <span class="token class-name">Interface04</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">methodA</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;抽象方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//测试</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Test01</span> test01 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//调用</span>
        test01<span class="token punctuation">.</span><span class="token function">methodA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        test01<span class="token punctuation">.</span><span class="token function">methodB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//调用静态方法</span>
        <span class="token comment">//接口的静态方法不能够通过实现类对象调用</span>
        <span class="token class-name">Interface04</span><span class="token punctuation">.</span><span class="token function">methodC</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_006-接口常量" tabindex="-1"><a class="header-anchor" href="#_006-接口常量" aria-hidden="true">#</a> 006.接口常量</h2><ul><li>接口当中也可以定义成员变量,这个成员变量必须使用<code>public static final</code>修饰</li><li>从效果上看,这其实就是接口的常量</li><li>格式 <ul><li><code>public static final 数据类型 常量名称=数据值;</code></li><li>可以省略三个关键字 <code>数据类型 常量名称=数据值;</code></li></ul></li><li>代码演示</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>lxgzhw<span class="token punctuation">.</span>demo01</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Interface05</span> <span class="token punctuation">{</span>
    <span class="token comment">//省略了public static final</span>
    <span class="token comment">//定义的实际上就是常量</span>
    <span class="token keyword">int</span> <span class="token constant">NUM</span> <span class="token operator">=</span> <span class="token number">333</span><span class="token punctuation">;</span>

    <span class="token comment">//定义抽象方法</span>
    <span class="token keyword">void</span> <span class="token function">methodA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//定义默认方法</span>
    <span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">methodB</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;默认方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//定义静态方法</span>
    <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">methodC</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;静态方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//测试2</span>
<span class="token keyword">class</span> <span class="token class-name">Test03</span> <span class="token keyword">implements</span> <span class="token class-name">Interface05</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">methodA</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;抽象方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//测试方法</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//调用常量</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Interface05</span><span class="token punctuation">.</span><span class="token constant">NUM</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意事项:</p><p>1.常量名称用全大写,下划线分割</p></blockquote><h2 id="_007-接口实现类的多实现" tabindex="-1"><a class="header-anchor" href="#_007-接口实现类的多实现" aria-hidden="true">#</a> 007.接口实现类的多实现</h2><ul><li>接口注意事项 <ul><li>1.接口没有静态代码块</li><li>2.接口没有构造方法</li><li>3.一个类的直接父类是唯一的,但是一个类可以同时实现多个接口</li><li>4.如果实现类所实现的多个接口当中,存在重复的抽象方法,那么只需要重写一次即可</li><li>5.如果存在多个同名默认方法,需要重写该默认方法,解决冲突问题</li><li>6.如果直接类方法与接口类默认方法重名,优先使用直接类方法</li></ul></li><li>实现多个接口的代码演示</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>lxgzhw<span class="token punctuation">.</span>demo02</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">Interface01</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">methodA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Interface02</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">methodB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//测试类实现两个接口</span>
<span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token keyword">implements</span> <span class="token class-name">Interface01</span><span class="token punctuation">,</span> <span class="token class-name">Interface02</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">methodA</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;第一个接口的方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">methodB</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;第二个接口的方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>接口方法重名代码演示</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>lxgzhw<span class="token punctuation">.</span>demo02</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">Interface03</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Interface04</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//测试类</span>
<span class="token keyword">class</span> <span class="token class-name">Test02</span> <span class="token keyword">implements</span> <span class="token class-name">Interface03</span><span class="token punctuation">,</span><span class="token class-name">Interface04</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;重名方法只需实现一个.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_008-接口本身多继承" tabindex="-1"><a class="header-anchor" href="#_008-接口本身多继承" aria-hidden="true">#</a> 008.接口本身多继承</h2><ul><li>接口是可以继承多个接口的</li><li>代码演示</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>lxgzhw<span class="token punctuation">.</span>demo03</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">D1</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">D2</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">//一个接口可以同时继承多个接口</span>
<span class="token keyword">interface</span> <span class="token class-name">D3</span> <span class="token keyword">extends</span> <span class="token class-name">D1</span><span class="token punctuation">,</span> <span class="token constant">D2</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意:这里是继承,而不是实现</p></blockquote><ul><li>注意 <ul><li>如果多个接口的默认方法重复,需要重写该方法</li></ul></li></ul><h2 id="_009-多态性" tabindex="-1"><a class="header-anchor" href="#_009-多态性" aria-hidden="true">#</a> 009.多态性</h2><ul><li>面向对象的三大特性 <ul><li>封装性</li><li>继承性 <ul><li><code>extends</code>或者<code>implements</code>是多态性的前提</li></ul></li><li><strong>多态性</strong></li></ul></li><li>多态性的生活举例 <ul><li>楚枫是一个老师,也是一个魔法师,更是一个召唤师</li></ul></li><li>多态性的代码举例 <ul><li>父类引用指向子类对象</li><li>接口引用指向实现类对象</li></ul></li><li>代码演示</li></ul><blockquote><p>父类引用指向子类对象</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>lxgzhw<span class="token punctuation">.</span>demo04</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token keyword">extends</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;你好啊&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Multi01</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//父类引用指向子类</span>
        <span class="token class-name">A</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//调用子类方法是,需要向下转型为子类</span>
        <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">B</span><span class="token punctuation">)</span> a<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>接口类指向实现类</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>lxgzhw<span class="token punctuation">.</span>demo04</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">A1</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">B1</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">C1</span> <span class="token keyword">extends</span> <span class="token class-name">A1</span><span class="token punctuation">,</span> <span class="token constant">B1</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//实现接口</span>
<span class="token keyword">class</span> <span class="token class-name">D1</span> <span class="token keyword">implements</span> <span class="token class-name">C1</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;接口多继承方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//测试类</span>
<span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//接口指向实现类</span>
        <span class="token class-name">A1</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">D1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">B1</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">D1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">C1</span> c <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">D1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//调用实现类的方法</span>
        <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token constant">D1</span><span class="token punctuation">)</span> a<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token constant">D1</span><span class="token punctuation">)</span> b<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        c<span class="token punctuation">.</span><span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>成员变量: 编译看左边,运行看左边</li><li>成员方法:编译看左边,运行看右边 <ul><li>如果子类与父类同名方法,优先使用子类</li></ul></li></ul><h2 id="_010-使用多态的好处" tabindex="-1"><a class="header-anchor" href="#_010-使用多态的好处" aria-hidden="true">#</a> 010.使用多态的好处</h2><ul><li>无论右边<code>new</code>的时候换成哪个子类对象,等号左边调用方法都不会发生变化</li></ul><h2 id="_011-向上转型" tabindex="-1"><a class="header-anchor" href="#_011-向上转型" aria-hidden="true">#</a> 011.向上转型</h2><ul><li><p>对象的向上转型,其实就是多态写法</p><ul><li><code>父类名称 对象名=new 子类名称()</code></li></ul></li><li><p>含义:右侧创建一个子类对象,把它当做父类来看待使用</p></li><li><p>举例</p><ul><li><code>Animal animal=new Cat()</code></li><li>创建了一只猫,当成动物来看待</li></ul></li><li><p>注意:<strong>向上转型,一定是安全的</strong></p><ul><li>原因:从小范围转换到大范围</li><li>类似于基本数据类型的自动类型转换</li></ul></li><li><p>代码演示</p></li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>lxgzhw<span class="token punctuation">.</span>demo05</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;动物吃东西&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;猫吃鱼&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo01</span> <span class="token punctuation">{</span>
    <span class="token comment">//向上转型</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Animal</span> animal <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        animal<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_012-向下转型" tabindex="-1"><a class="header-anchor" href="#_012-向下转型" aria-hidden="true">#</a> 012.向下转型</h2><ul><li><p>一旦向上转型,就无法使用子类的特有方法</p></li><li><p>这时候就需要用到向下转型,还原为本类</p></li><li><p>代码演示</p></li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>lxgzhw<span class="token punctuation">.</span>demo05</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;动物吃东西&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;猫吃鱼&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//子类特有方法</span>
    <span class="token keyword">void</span> <span class="token function">catchMouse</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;猫抓老鼠.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo01</span> <span class="token punctuation">{</span>
    <span class="token comment">//向上转型</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Animal</span> animal <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        animal<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//使用向下转型调用子类特有方法</span>
        <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">Cat</span><span class="token punctuation">)</span> animal<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catchMouse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>注意事项 <ul><li>1.必须保证本来创建的就是猫,才能向下转型为猫</li><li>2.如果不是,就会报错</li></ul></li></ul><h2 id="_013-instanceof用法" tabindex="-1"><a class="header-anchor" href="#_013-instanceof用法" aria-hidden="true">#</a> 013.<code>instanceof</code>用法</h2><ul><li>使用<code>instanceof</code>可以判断一个对象属于什么类的</li><li>源码演示</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>lxgzhw<span class="token punctuation">.</span>demo05</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;AAA&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">B</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">C</span> <span class="token keyword">extends</span> <span class="token class-name">A</span> <span class="token keyword">implements</span> <span class="token class-name">B</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;C在吃东西...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo02</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//判断对象是否是什么的实例</span>
        <span class="token class-name">A</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">C</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">B</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">C</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//判断a是不是C的实例</span>
        <span class="token comment">//可以发现,a不仅是C的实例,也是A的实例</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token keyword">instanceof</span> <span class="token class-name">C</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token keyword">instanceof</span> <span class="token class-name">A</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//可以发现,b不仅是C的实例,同时也是B的实例</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>b <span class="token keyword">instanceof</span> <span class="token class-name">C</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>b <span class="token keyword">instanceof</span> <span class="token class-name">B</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_014-综合案例" tabindex="-1"><a class="header-anchor" href="#_014-综合案例" aria-hidden="true">#</a> 014.综合案例</h2><ul><li><code>USB</code>接口,包含打开设备功能,关闭设备功能</li><li>笔记本类,包含开机功能,关机功能,使用<code>usb</code>的功能</li><li>鼠标类,实现<code>usb</code>接口,具备点击的方法</li><li>键盘类,实现<code>usb</code>接口,具备敲击的方法</li></ul>`,53),c=[e];function l(o,i){return s(),a("div",null,c)}const d=n(t,[["render",l],["__file","10.html.vue"]]);export{d as default};
