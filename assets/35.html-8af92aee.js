import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as s,e as i}from"./app-a1fbcbb6.js";const a="/assets/1567386040254-7a1876f3.png",t="/assets/1567386708596-f62030cc.png",l="/assets/1567388691131-1187b21b.png",d={},c=i(`<h2 id="_001-jsp指令" tabindex="-1"><a class="header-anchor" href="#_001-jsp指令" aria-hidden="true">#</a> 001.<code>JSP</code>指令</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>作用：用于配置JSP页面，导入资源文件
格式：
	&lt;%@ 指令名称 属性名1=属性值1 属性名2=属性值2 ... %&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>指令分类</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. page： 配置JSP页面的
	contentType：等同于response.setContentType()
		1. 设置响应体的mime类型以及字符集
		2. 设置当前jsp页面的编码（只能是高级的IDE才能生效，如果使用低级工具，则需要设置pageEncoding属性设置当前页面的字符集）
    import：导包
    errorPage：当前页面发生异常后，会自动跳转到指定的错误页面
    isErrorPage：标识当前也是是否是错误页面。
    	true：是，可以使用内置对象exception
    	false：否。默认值。不可以使用内置对象exception

2. include： 页面包含的。导入页面的资源文件
	&lt;%@include file=&quot;top.jsp&quot;%&gt;

3. taglib： 导入资源
	 &lt;%@ taglib prefix=&quot;c&quot; uri=&quot;http://java.sun.com/jsp/jstl/core&quot; %&gt;
	 prefix：前缀，自定义的
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_002-注释" tabindex="-1"><a class="header-anchor" href="#_002-注释" aria-hidden="true">#</a> 002.注释</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. html注释：
	&lt;!-- --&gt;:只能注释html代码片段
2. jsp注释：推荐使用
	&lt;%-- --%&gt;：可以注释所有
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_003-内置对象" tabindex="-1"><a class="header-anchor" href="#_003-内置对象" aria-hidden="true">#</a> 003.内置对象</h2><blockquote><p>在<code>jsp</code>页面中不需要创建，直接使用的对象</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> 一共有9个：
			变量名					真实类型						作用
		* pageContext				PageContext					当前页面共享数据，还可以获取其他八个内置对象
		* request					HttpServletRequest			一次请求访问的多个资源(转发)
		* session					HttpSession					一次会话的多个请求间
		* application				ServletContext				所有用户间共享数据
		* response					HttpServletResponse			响应对象
		* page						Object						当前页面(Servlet)的对象  this
		* out						JspWriter					输出对象，数据输出到页面上
		* config					ServletConfig				Servlet的配置对象
		* exception					Throwable					异常对象
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_004-mvc开发模式" tabindex="-1"><a class="header-anchor" href="#_004-mvc开发模式" aria-hidden="true">#</a> 004.<code>MVC</code>开发模式</h2><p>1.<code>jsp</code>演变历史</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. 早期只有servlet，只能使用response输出标签数据，非常麻烦
2. 后来有了jsp，简化了Servlet的开发，如果过度使用jsp，在jsp中即写大量的java代码，又写html，造成难于维护，难于分工协作
3. 再后来，java的web开发，借鉴mvc开发模式，使得程序的设计更加合理性
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.<code>MVC</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. M：Model，模型。JavaBean
	* 完成具体的业务操作，如：查询数据库，封装对象
2. V：View，视图。JSP
	* 展示数据
3. C：Controller，控制器。Servlet
	* 获取用户的输入
	* 调用模型
	* 将数据交给视图进行展示
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.优缺点</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. 优点：
	1. 耦合性低，方便维护，可以利于分工协作
	2. 重用性高

2. 缺点：
	1. 使得项目架构变得复杂，对开发人员要求高
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_005-el表达式" tabindex="-1"><a class="header-anchor" href="#_005-el表达式" aria-hidden="true">#</a> 005.<code>EL</code>表达式</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. 概念：Expression Language 表达式语言
2. 作用：替换和简化jsp页面中java代码的编写
3. 语法：\${表达式}
4. 注意：
	* jsp默认支持el表达式的。如果要忽略el表达式
		1. 设置jsp中page指令中：isELIgnored=&quot;true&quot; 忽略当前jsp页面中所有的el表达式
		2. \\\${表达式} ：忽略当前这个el表达式
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_006-运算" tabindex="-1"><a class="header-anchor" href="#_006-运算" aria-hidden="true">#</a> 006.运算</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>运算符：
     1. 算数运算符： + - * /(div) %(mod)
     2. 比较运算符： &gt; &lt; &gt;= &lt;= == !=
     3. 逻辑运算符： &amp;&amp;(and) ||(or) !(not)
     4. 空运算符： empty
         * 功能：用于判断字符串、集合、数组对象是否为null或者长度是否为0
         * \${empty list}:判断字符串、集合、数组对象是否为null或者长度为0
         * \${not empty str}:表示判断字符串、集合、数组对象是否不为null 并且 长度&gt;0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%--
  编辑器: IntelliJ IDEA.
  作者: 18010
  日期: 2019/9/2
  时间: 8:50
--%&gt;
&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h3&gt;算术运算符&lt;/h3&gt;
&lt;p&gt;\${3+33}&lt;/p&gt;
&lt;p&gt;\${3-33}&lt;/p&gt;
&lt;p&gt;\${3*33}&lt;/p&gt;
&lt;p&gt;\${3/33}&lt;/p&gt;
&lt;p&gt;\${3%33}&lt;/p&gt;

&lt;h3&gt;比较运算符&lt;/h3&gt;
&lt;p&gt;\${4&gt;44}&lt;/p&gt;
&lt;p&gt;\${4&lt;44}&lt;/p&gt;
&lt;p&gt;\${4==44}&lt;/p&gt;


&lt;h3&gt;empty运算符&lt;/h3&gt;
&lt;p&gt;\${empty &quot;&quot;}&lt;/p&gt;
&lt;p&gt;\${empty 0}&lt;/p&gt;
&lt;p&gt;\${empty []}&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_007-获取值" tabindex="-1"><a class="header-anchor" href="#_007-获取值" aria-hidden="true">#</a> 007.获取值</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. el表达式只能从域对象中获取值
2. 语法：
	1. \${域名称.键名}：从指定域中获取指定键的值
        * 域名称：
            1. pageScope		--&gt; pageContext
            2. requestScope 	--&gt; request
            3. sessionScope 	--&gt; session
            4. applicationScope --&gt; application（ServletContext）
        * 举例：在request域中存储了name=张三
        * 获取：\${requestScope.name}

	2. \${键名}：表示依次从最小的域中查找是否有该键对应的值，直到找到为止。
    3. 获取对象、List集合、Map集合的值
        1. 对象：\${域名称.键名.属性名}
        	* 本质上会去调用对象的getter方法

        2. List集合：\${域名称.键名[索引]}

        3. Map集合：
            * \${域名称.键名.key名称}
            * \${域名称.键名[&quot;key名称&quot;]}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%--
  编辑器: IntelliJ IDEA.
  作者: 18010
  日期: 2019/9/2
  时间: 8:54
--%&gt;
&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;%
    //1.存储数据
    session.setAttribute(&quot;name&quot;, &quot;张大鹏&quot;);
    request.setAttribute(&quot;name&quot;, &quot;萃萃&quot;);
%&gt;
&lt;h3&gt;获取值&lt;/h3&gt;
&lt;p&gt;\${requestScope.name}&lt;/p&gt;
&lt;p&gt;\${sessionScope.name}&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_008-隐式对象" tabindex="-1"><a class="header-anchor" href="#_008-隐式对象" aria-hidden="true">#</a> 008.隐式对象</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>* el表达式中有11个隐式对象
    * pageContext：
    * 获取jsp其他八个内置对象
    * \${pageContext.request.contextPath}：动态获取虚拟目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_009-jstl" tabindex="-1"><a class="header-anchor" href="#_009-jstl" aria-hidden="true">#</a> 009.<code>JSTL</code></h2><blockquote><p><code>概念：JavaServer Pages Tag Library JSP标准标签库</code></p><p><code>是由Apache组织提供的开源的免费的jsp标签 &lt;标签&gt;</code></p><p><code>作用：用于简化和替换jsp页面上的java代码</code></p></blockquote><p>使用步骤</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. 导入jstl相关jar包
2. 引入标签库：taglib指令：  &lt;%@ taglib %&gt;
3. 使用标签
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_010-常用jstl标签" tabindex="-1"><a class="header-anchor" href="#_010-常用jstl标签" aria-hidden="true">#</a> 010.常用<code>JSTL</code>标签</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. if:相当于java代码的if语句
	1. 属性：
        * test 必须属性，接受boolean表达式
        * 如果表达式为true，则显示if标签体内容，如果为false，则不显示标签体内容
        * 一般情况下，test属性值会结合el表达式一起使用
	2. 注意：
		* c:if标签没有else情况，想要else情况，则可以在定义一个c:if标签
2. choose:相当于java代码的switch语句
    1. 使用choose标签声明         			相当于switch声明
    2. 使用when标签做判断         			相当于case
    3. 使用otherwise标签做其他情况的声明    	相当于default

3. foreach:相当于java代码的for语句
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_011-定义服务器-500-错误页面" tabindex="-1"><a class="header-anchor" href="#_011-定义服务器-500-错误页面" aria-hidden="true">#</a> 011.定义服务器 500 错误页面</h2><p>1.出错页面</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%--
  编辑器: IntelliJ IDEA.
  作者: 18010
  日期: 2019/9/2
  时间: 8:39
--%&gt;
&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot;
         errorPage=&quot;500.jsp&quot;
%&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;定义服务器500错误页面&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;%
    //制造服务器错误
    int num = 4 / 0;
%&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.处理 500 错误页面</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%--
  编辑器: IntelliJ IDEA.
  作者: 18010
  日期: 2019/9/2
  时间: 8:40
--%&gt;
&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot;
         isErrorPage=&quot;true&quot;
%&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;理想国真恵玩&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1&gt;服务器正忙,请稍后.....&lt;/h1&gt;
&lt;%
    //错误页面可以使用exception内置对象
    String message = exception.getMessage();
    out.print(message);
%&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_012-idea不提示内置域对象解决方案" tabindex="-1"><a class="header-anchor" href="#_012-idea不提示内置域对象解决方案" aria-hidden="true">#</a> 012.<code>IDEA</code>不提示内置域对象解决方案</h2><p>1.打开<code>project structrue-&gt;Libraries</code></p><p>2.点加号,找到<code>tomcat</code>文件夹下的<code>lib</code>目录,添加进来即可</p><figure><img src="`+a+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_013-if标签的使用" tabindex="-1"><a class="header-anchor" href="#_013-if标签的使用" aria-hidden="true">#</a> 013.<code>if</code>标签的使用</h2><p>1.导入<code>jstl</code>包</p><figure><img src="'+t+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>2.导入<code>taglib</code></p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%@ taglib prefix=&quot;c&quot; uri=&quot;http://java.sun.com/jsp/jstl/core&quot; %&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3.写代码</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;c:if test=&quot;true&quot;&gt;
    会显示出来
&lt;/c:if&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完整源码</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%--
  编辑器: IntelliJ IDEA.
  作者: 18010
  日期: 2019/9/2
  时间: 9:03
--%&gt;
&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;%@ taglib prefix=&quot;c&quot; uri=&quot;http://java.sun.com/jsp/jstl/core&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;if&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;c:if test=&quot;true&quot;&gt;
    会显示出来
&lt;/c:if&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_014-choose标签的使用" tabindex="-1"><a class="header-anchor" href="#_014-choose标签的使用" aria-hidden="true">#</a> 014.<code>choose</code>标签的使用</h2><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%--
  编辑器: IntelliJ IDEA.
  作者: 18010
  日期: 2019/9/2
  时间: 9:15
--%&gt;
&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;%@ taglib prefix=&quot;c&quot; uri=&quot;http://java.sun.com/jsp/jstl/core&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;choose&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;%
    //判断今天是星期几
    request.setAttribute(&quot;n&quot;, 3);
%&gt;
&lt;c:choose&gt;
    &lt;c:when test=&quot;\${n==1}&quot;&gt;星期一&lt;/c:when&gt;
    &lt;c:when test=&quot;\${n==2}&quot;&gt;星期二&lt;/c:when&gt;
    &lt;c:when test=&quot;\${n==3}&quot;&gt;星期三&lt;/c:when&gt;
    &lt;c:when test=&quot;\${n==4}&quot;&gt;星期四&lt;/c:when&gt;
    &lt;c:when test=&quot;\${n==5}&quot;&gt;星期五&lt;/c:when&gt;
    &lt;c:when test=&quot;\${n==6}&quot;&gt;星期六&lt;/c:when&gt;
    &lt;c:when test=&quot;\${n==7}&quot;&gt;星期天&lt;/c:when&gt;

    &lt;c:otherwise&gt;数字输入有误&lt;/c:otherwise&gt;
&lt;/c:choose&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_015-foreach的使用" tabindex="-1"><a class="header-anchor" href="#_015-foreach的使用" aria-hidden="true">#</a> 015.<code>foreach</code>的使用</h2><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%@ page import=&quot;java.util.ArrayList&quot; %&gt;&lt;%--
  编辑器: IntelliJ IDEA.
  作者: 18010
  日期: 2019/9/2
  时间: 9:20
--%&gt;
&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;%@ taglib prefix=&quot;c&quot; uri=&quot;http://java.sun.com/jsp/jstl/core&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;for&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;%--
foreach:相当于java代码的for语句
    1. 完成重复的操作
        * 属性：
            begin：开始值
            end：结束值
            var：临时变量
            step：步长
            varStatus:循环状态对象
                index:容器中元素的索引，从0开始
                count:循环次数，从1开始
    2.注意:foreach包左又包右
--%&gt;
&lt;%--打印10次HelloWorld--%&gt;
&lt;c:forEach begin=&quot;1&quot; end=&quot;10&quot; step=&quot;1&quot; varStatus=&quot;s&quot;&gt;
    &lt;h3&gt;HelloWorld---\${s.count}&lt;/h3&gt;
&lt;/c:forEach&gt;


&lt;%--
 2. 遍历容器
    * 属性：
        items:容器对象
        var:容器中元素的临时变量
        varStatus:循环状态对象
            index:容器中元素的索引，从0开始
            count:循环次数，从1开始
 --%&gt;
&lt;%--1.创建列表--%&gt;
&lt;%
    ArrayList&lt;String&gt; strings = new ArrayList&lt;&gt;();
    strings.add(&quot;楚枫&quot;);
    strings.add(&quot;萃萃&quot;);
    strings.add(&quot;大黄&quot;);
    request.setAttribute(&quot;names&quot;,strings);
%&gt;
&lt;%--2.遍历列表--%&gt;
&lt;c:forEach items=&quot;\${names}&quot; var=&quot;i&quot; varStatus=&quot;name&quot;&gt;
    &lt;h3&gt;\${name.index} \${name.count} \${i}&lt;/h3&gt;
&lt;/c:forEach&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_016-练习" tabindex="-1"><a class="header-anchor" href="#_016-练习" aria-hidden="true">#</a> 016.练习</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.创建User类型,包含name,gender,birthday三个属性
2.包含getBirStr方法,返回格式化的生日
3.包含全参,空参,getter和setter方法
4.创建一个jsp文件,在里面创建一个包含3个User对象的ArrayList集合
5.遍历该集合,打印到table表格中,要求生日格式化输出
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.创建<code>User</code>类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>lxgzhw<span class="token punctuation">.</span>web<span class="token punctuation">.</span>domain</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>text<span class="token punctuation">.</span></span><span class="token class-name">SimpleDateFormat</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Date</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">char</span> gender<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Date</span> birthday<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 格式化生日
     * <span class="token keyword">@return</span> 格式化后的生日字符串
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getBirthStr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">SimpleDateFormat</span> simpleDateFormat <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token string">&quot;yyyy-MM-dd HH:mm:ss&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> format <span class="token operator">=</span> simpleDateFormat<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>birthday<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> format<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">char</span> gender<span class="token punctuation">,</span> <span class="token class-name">Date</span> birthday<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>gender <span class="token operator">=</span> gender<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>birthday <span class="token operator">=</span> birthday<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;User{&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;name=&#39;&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token string">&quot;, gender=&quot;</span> <span class="token operator">+</span> gender <span class="token operator">+</span>
                <span class="token string">&quot;, birthday=&quot;</span> <span class="token operator">+</span> birthday <span class="token operator">+</span>
                <span class="token char">&#39;}&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">char</span> <span class="token function">getGender</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> gender<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setGender</span><span class="token punctuation">(</span><span class="token keyword">char</span> gender<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>gender <span class="token operator">=</span> gender<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Date</span> <span class="token function">getBirthday</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> birthday<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setBirthday</span><span class="token punctuation">(</span><span class="token class-name">Date</span> birthday<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>birthday <span class="token operator">=</span> birthday<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.创建<code>jsp</code>文件</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%@ page import=&quot;java.util.ArrayList&quot; %&gt;
&lt;%@ page import=&quot;com.lxgzhw.web.domain.User&quot; %&gt;
&lt;%@ page import=&quot;java.util.Date&quot; %&gt;&lt;%--
  编辑器: IntelliJ IDEA.
  作者: 18010
  日期: 2019/9/2
  时间: 9:39
--%&gt;
&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;%@ taglib prefix=&quot;c&quot; uri=&quot;http://java.sun.com/jsp/jstl/core&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;遍历数据填充表格&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;%
    //1.创建集合
    ArrayList&lt;User&gt; users = new ArrayList&lt;&gt;();
    //2.填充集合
    users.add(new User(&quot;楚枫&quot;, &#39;男&#39;, new Date()));
    users.add(new User(&quot;萃萃&quot;, &#39;女&#39;, new Date()));
    users.add(new User(&quot;大黄&quot;, &#39;雄&#39;, new Date()));
    //3.传到request域
    request.setAttribute(&quot;users&quot;, users);
%&gt;

&lt;%--遍历集合,填充表格--%&gt;
&lt;table border=&quot;1&quot; width=&quot;60%&quot; align=&quot;center&quot;&gt;
    &lt;tr&gt;
        &lt;th&gt;姓名&lt;/th&gt;
        &lt;th&gt;性别&lt;/th&gt;
        &lt;th&gt;生日&lt;/th&gt;
    &lt;/tr&gt;
    &lt;c:forEach items=&quot;\${users}&quot; var=&quot;user&quot; varStatus=&quot;s&quot;&gt;
        &lt;tr&gt;
            &lt;td&gt;\${user.name}&lt;/td&gt;
            &lt;td&gt;\${user.gender}&lt;/td&gt;
            &lt;td&gt;\${user.birthStr}&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/c:forEach&gt;
&lt;/table&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.重启服务器,打开浏览器测试</p><figure><img src="`+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',62),r=[c];function u(v,o){return e(),s("div",null,r)}const b=n(d,[["render",u],["__file","35.html.vue"]]);export{b as default};
