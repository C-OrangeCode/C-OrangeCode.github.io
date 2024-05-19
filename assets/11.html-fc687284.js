import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-a1fbcbb6.js";const p={},t=e(`<h2 id="_001-final关键字" tabindex="-1"><a class="header-anchor" href="#_001-final关键字" aria-hidden="true">#</a> 001.<code>final</code>关键字</h2><ul><li><p>最终的,代表不可变的</p></li><li><p>常见的四种用法,可以用来修饰</p><ul><li>1.类</li><li>2.方法</li><li>3.局部变量</li><li>4.成员变量</li></ul></li></ul><blockquote><p>修饰一个类</p></blockquote><ul><li>表示不可继承的</li><li>格式: <code>public final class 类名{}</code></li><li>代码演示</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>lxgzhw<span class="token punctuation">.</span>demo01</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">Final01</span> <span class="token punctuation">{</span>
    <span class="token comment">//用final修饰类,表示不可继承的</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>修饰一个方法</p></blockquote><ul><li><p>表示不可重写</p></li><li><p>代码演示</p></li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>lxgzhw<span class="token punctuation">.</span>demo01</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">Final01</span> <span class="token punctuation">{</span>
    <span class="token comment">//用final修饰类,表示不可继承的</span>

    <span class="token comment">//修饰方法表示不可被重写</span>
    <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;最终方法....&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>修饰局部变量</p></blockquote><ul><li><p>表示为最终变量,即就是常量</p></li><li><p>代码演示</p></li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>lxgzhw<span class="token punctuation">.</span>demo01</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">Final01</span> <span class="token punctuation">{</span>
    <span class="token comment">//用final修饰类,表示不可继承的</span>

    <span class="token comment">//修饰方法表示不可被重写</span>
    <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;最终方法....&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//修饰局部变量</span>
        <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">NUM</span> <span class="token operator">=</span> <span class="token number">300</span><span class="token punctuation">;</span>

        <span class="token comment">//错误写法,不可更改</span>
        <span class="token comment">//NUM=3000;</span>

        <span class="token comment">//使用</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;不可更改的final值NUM=&quot;</span> <span class="token operator">+</span> <span class="token constant">NUM</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>修饰实例</p></blockquote><ul><li>表示地址值不可变</li><li>代码演示</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>lxgzhw<span class="token punctuation">.</span>demo01</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">Final01</span> <span class="token punctuation">{</span>
    <span class="token comment">//用final修饰类,表示不可继承的</span>

    <span class="token comment">//修饰方法表示不可被重写</span>
    <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;最终方法....&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//修饰局部变量</span>
        <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">NUM</span> <span class="token operator">=</span> <span class="token number">300</span><span class="token punctuation">;</span>

        <span class="token comment">//错误写法,不可更改</span>
        <span class="token comment">//NUM=3000;</span>

        <span class="token comment">//使用</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;不可更改的final值NUM=&quot;</span> <span class="token operator">+</span> <span class="token constant">NUM</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token comment">//修饰实例</span>
        <span class="token comment">//表示其地址值不可变</span>
        <span class="token comment">//注意:内容仍然可以改变</span>
        <span class="token keyword">final</span> <span class="token class-name">Final01</span> final01 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Final01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_002-权限修饰符" tabindex="-1"><a class="header-anchor" href="#_002-权限修饰符" aria-hidden="true">#</a> 002.权限修饰符</h2><ul><li><p><code>java</code>中有四种权限修饰符</p><ul><li><code>public</code></li><li><code>protected</code></li><li><code>deafault</code></li><li><code>private</code></li></ul></li><li><p>类与类直接的关系</p><ul><li>同一个包 <ul><li>可以访问 <code>public</code> <code>protected</code> <code>default</code>修饰的内容</li></ul></li><li>同一个类 <ul><li>可以访问 <code>public</code> <code>protected</code> <code>default</code> <code>private</code>修饰的内容</li></ul></li><li>不同包不同类 <ul><li>子类 <ul><li>可以访问 <code>public</code> <code>protected</code></li></ul></li><li>非子类 <ul><li>可以访问 <code>public</code></li></ul></li></ul></li></ul></li></ul><h2 id="_003-内部类" tabindex="-1"><a class="header-anchor" href="#_003-内部类" aria-hidden="true">#</a> 003.内部类</h2><ul><li>一个类是用来描述一个事物的</li><li>如果一个事物包含另一个事物,那么就是一个类中包含另一个类</li><li>这种被包含的类,叫做内部类,可以简单的看出是类的嵌套</li><li>内部类分为 <ul><li>成员内部类</li><li>局部内部类(包含匿名内部类)</li></ul></li></ul><h2 id="_004-成员内部类" tabindex="-1"><a class="header-anchor" href="#_004-成员内部类" aria-hidden="true">#</a> 004.成员内部类</h2><ul><li>直接定义在一个类的顶层的新类,叫做成员内部类</li><li>成员内部类不能有<code>static</code>修饰的静态方法</li><li>代码演示</li></ul><blockquote><p>定义成员内部类</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>lxgzhw<span class="token punctuation">.</span>demo02</span><span class="token punctuation">;</span>

<span class="token comment">//身体</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Body</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token comment">//内部类 心脏</span>
    <span class="token keyword">class</span> <span class="token class-name">Heart</span><span class="token punctuation">{</span>
        <span class="token comment">//内部类的方法</span>
        <span class="token keyword">void</span> <span class="token function">beat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;心脏跳动.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//调用外部类的变量</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我叫&quot;</span><span class="token operator">+</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Body</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Body</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Body{&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;name=&#39;&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token string">&quot;, age=&quot;</span> <span class="token operator">+</span> age <span class="token operator">+</span>
                <span class="token char">&#39;}&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_005-使用成员内部类" tabindex="-1"><a class="header-anchor" href="#_005-使用成员内部类" aria-hidden="true">#</a> 005.使用成员内部类</h2><ul><li>1.间接访问: 通过外部类的方法调用内部类的方法</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>lxgzhw<span class="token punctuation">.</span>demo02</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo01</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Body</span> body <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Body</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        body<span class="token punctuation">.</span><span class="token function">useHeart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>2.直接访问:<code>外部类名称.内部类名称 对象名=new 外部类名称().new 内部类名称()</code></li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>lxgzhw<span class="token punctuation">.</span>demo02</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo02</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Body<span class="token punctuation">.</span>Heart</span> heart <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Body</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">new</span> <span class="token class-name">Heart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        heart<span class="token punctuation">.</span><span class="token function">beat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_006-内部类的同名变量访问" tabindex="-1"><a class="header-anchor" href="#_006-内部类的同名变量访问" aria-hidden="true">#</a> 006.内部类的同名变量访问</h2><ul><li>代码演示</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>lxgzhw<span class="token punctuation">.</span>demo02</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Outer</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> outNum<span class="token operator">=</span><span class="token number">33</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> name<span class="token operator">=</span><span class="token string">&quot;变量名相同.&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">class</span> <span class="token class-name">Inner</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> innerNum<span class="token operator">=</span><span class="token number">33</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> name<span class="token operator">=</span><span class="token string">&quot;变量名相同.&quot;</span><span class="token punctuation">;</span>
        <span class="token comment">//使用重名变量,就近原则</span>
        <span class="token keyword">void</span> <span class="token function">userVariable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;就近原则:&quot;</span><span class="token operator">+</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;使用外部类的同名变量:&quot;</span><span class="token operator">+</span><span class="token keyword">new</span> <span class="token class-name">Outer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_007-局部内部类" tabindex="-1"><a class="header-anchor" href="#_007-局部内部类" aria-hidden="true">#</a> 007.局部内部类</h2><ul><li>如果一个类定义在方法内部,则这个类就是局部内部类</li><li>局部内部类只能在方法内部使用</li><li>如果要访问所在方法的局部变量,那么这个局部变量必须是有效 final 的 <ul><li><code>JDK8+可以省略final</code></li><li>跟生命周期有关 <ul><li><code>new</code>出来的对象在堆内存中</li><li>局部变量是跟着方法走的,在栈内存中</li><li>方法运行结束以后,立刻出栈,局部变量会立刻消失</li><li><code>new</code>出来的对象会持续在堆内存中,直到垃圾回收</li><li>所以,有可能局部变量消失了,而对象还在,而对象需要引用局部变量</li><li>局部变量添加<code>final</code>关键字解决这个问题</li></ul></li></ul></li><li>代码演示</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>lxgzhw<span class="token punctuation">.</span>demo03</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo01</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token comment">//调用方法</span>
        <span class="token function">testClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token comment">//定义一个方法,方法中有一个类,就是局部内部类</span>
    <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">testClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> name<span class="token punctuation">;</span>

            <span class="token keyword">public</span> <span class="token class-name">Test</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">Test</span> test <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Test</span><span class="token punctuation">(</span><span class="token string">&quot;测试&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;方法内部的类:&quot;</span> <span class="token operator">+</span> test<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_008-匿名内部类" tabindex="-1"><a class="header-anchor" href="#_008-匿名内部类" aria-hidden="true">#</a> 008.匿名内部类</h2><ul><li>如果接口实现类,或者子类,只需要使用唯一的一次,就推荐使用匿名内部类</li><li>格式: <code>接口名称 对象名=new 接口名称(){}</code></li><li>代码演示</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>lxgzhw<span class="token punctuation">.</span>demo04</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//如果接口的实现类,或者父类的子类,只需要使用唯一的一次</span>
        <span class="token comment">//定义</span>
        <span class="token class-name">Interface01</span> interface01 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Interface01</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;接口方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token comment">//调用方法</span>
        interface01<span class="token punctuation">.</span><span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,36),c=[t];function l(o,i){return s(),a("div",null,c)}const k=n(p,[["render",l],["__file","11.html.vue"]]);export{k as default};
