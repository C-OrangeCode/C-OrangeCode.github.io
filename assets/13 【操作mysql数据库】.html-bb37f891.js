import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as l,a as n,b as s,d as e,e as t}from"./app-a1fbcbb6.js";const i={},r=t('<h1 id="_13-【操作mysql数据库】" tabindex="-1"><a class="header-anchor" href="#_13-【操作mysql数据库】" aria-hidden="true">#</a> 13 【操作mysql数据库】</h1><h2 id="_1-mysql-介绍" tabindex="-1"><a class="header-anchor" href="#_1-mysql-介绍" aria-hidden="true">#</a> 1.mysql 介绍</h2><p>付费的商用数据库：</p><ul><li>Oracle，典型的高富帅；</li><li>SQL Server，微软自家产品，Windows定制专款；</li><li>DB2，IBM的产品，听起来挺高端；</li><li>Sybase，曾经跟微软是好基友，后来关系破裂，现在家境惨淡。</li></ul><p>这些数据库都是不开源而且付费的，最大的好处是花了钱出了问题可以找厂家解决，不过在Web的世界里，常常需要部署成千上万的数据库服务器，当然不能把大把大把的银子扔给厂家，所以，无论是Google、Facebook，还是国内的BAT，无一例外都选择了免费的开源数据库：</p><ul><li>MySQL，大家都在用，一般错不了；</li><li>PostgreSQL，学术气息有点重，其实挺不错，但知名度没有MySQL高；</li><li>sqlite，嵌入式数据库，适合桌面和移动应用。</li></ul><p>作为一个JavaScript全栈工程师，选择哪个免费数据库呢？当然是MySQL。因为MySQL普及率最高，出了错，可以很容易找到解决方法。而且，围绕MySQL有一大堆监控和运维的工具，安装和使用很方便。</p><figure><img src="https://i0.hdslb.com/bfs/album/8fc1c58bb05d52c4afa0641a099c92d078a55789.png" alt="image-20220420083146539" tabindex="0" loading="lazy"><figcaption>image-20220420083146539</figcaption></figure><h2 id="_2-与非关系数据库区别" tabindex="-1"><a class="header-anchor" href="#_2-与非关系数据库区别" aria-hidden="true">#</a> 2.与非关系数据库区别</h2><p>关系型和非关系型数据库的主要差异是数据存储的方式。关系型数据天然就是表格式的，因此存储在数据表的行和列中。数据表可以彼此关联协作存储，也很容易提取数据。</p><p>与其相反，非关系型数据不适合存储在数据表的行和列中，而是大块组合在一起。非关系型数据通常存储在数据集中，就像文档、键值对或者图结构。你的数据及其特性是选择数据存储和提取方式的首要影响因素。</p><p><strong>关系型数据库最典型的数据结构是表，由二维表及其之间的联系所组成的一个数据组织</strong><br> 优点：<br> 1、易于维护：都是使用表结构，格式一致；<br> 2、使用方便：SQL语言通用，可用于复杂查询；<br> 3、复杂操作：支持SQL，可用于一个表以及多个表之间非常复杂的查询。<br> 缺点：<br> 1、读写性能比较差，尤其是海量数据的高效率读写；<br> 2、固定的表结构，灵活度稍欠；<br> 3、高并发读写需求，传统关系型数据库来说，硬盘I/O是一个很大的瓶颈。</p><p><strong>非关系型数据库严格上不是一种数据库，应该是一种数据结构化存储方法的集合，可以是文档或者键值对等。</strong></p><p>优点：</p><p>1、格式灵活：存储数据的格式可以是key,value形式、文档形式、图片形式等等，文档形式、图片形式等等，使用灵活，应用场景广泛，而关系型数据库则只支持基础类型。<br> 2、速度快：nosql可以使用硬盘或者随机存储器作为载体，而关系型数据库只能使用硬盘；<br> 3、高扩展性；<br> 4、成本低：nosql数据库部署简单，基本都是开源软件。</p><p>缺点：</p><p>1、不提供sql支持；<br> 2、无事务处理；<br> 3、数据结构相对复杂，复杂查询方面稍欠。</p><h2 id="_3-mysql2的历史以及选择原因" tabindex="-1"><a class="header-anchor" href="#_3-mysql2的历史以及选择原因" aria-hidden="true">#</a> 3.MySQL2的历史以及选择原因</h2>',18),u={href:"https://github.com/sidorares/nodejs-mysql-native",target:"_blank",rel:"noopener noreferrer"},d={href:"https://github.com/mysqljs/mysql",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/mysqljs/mysql",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/mysqljs/mysql",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/mysqljs/mysql",target:"_blank",rel:"noopener noreferrer"},v=n("li",null,"更快、更好的性能",-1),g={href:"https://github.com/sidorares/node-mysql2/tree/master/documentation/Prepared-Statements.md",target:"_blank",rel:"noopener noreferrer"},h=n("li",null,"MySQL二进制日志协议",-1),f={href:"https://github.com/sidorares/node-mysql2/tree/master/documentation/MySQL-Server.md",target:"_blank",rel:"noopener noreferrer"},y=n("li",null,"对编码和排序规则有很好的支持",-1),_={href:"https://github.com/sidorares/node-mysql2/tree/master/documentation/Promise-Wrapper.md",target:"_blank",rel:"noopener noreferrer"},q=n("li",null,"支持压缩",-1),x={href:"https://github.com/sidorares/node-mysql2/tree/master/documentation/Authentication-Switch.md",target:"_blank",rel:"noopener noreferrer"},w={href:"https://github.com/sidorares/node-mysql2/tree/master/documentation/Extras.md",target:"_blank",rel:"noopener noreferrer"},S={href:"https://github.com/sidorares/node-mysql2/tree/master/documentation_zh-cn#using-connection-pools",target:"_blank",rel:"noopener noreferrer"},j=t(`<p>MySQL2 可以跨平台使用，毫无疑问可以安装在 Linux、Mac OS 或 Windows 上。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">--save</span> mysql2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4-连接数据库" tabindex="-1"><a class="header-anchor" href="#_4-连接数据库" aria-hidden="true">#</a> 4.连接数据库</h2><p><code>config/db.config.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> mysql <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mysql2/promise&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 通过createPool方法连接服务器</span>
<span class="token keyword">const</span> db <span class="token operator">=</span> mysql<span class="token punctuation">.</span><span class="token function">createPool</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 表示连接某个服务器上的mysql数据库</span>
  <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 数据库的用户名 （默认为root）</span>
  <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&#39;123456&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 数据库的密码 (默认为root)</span>
  <span class="token literal-property property">database</span><span class="token operator">:</span> <span class="token string">&#39;dbtest11&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 创建的本地数据库名称</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 测试数据库是否连接成功</span>
db<span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> conn</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  conn<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;连接失败~&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;连接成功~&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> db
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-查询" tabindex="-1"><a class="header-anchor" href="#_5-查询" aria-hidden="true">#</a> 5.查询</h2><ul><li>导入mysql</li><li>通过createPool方法将mysql数据库连接到服务器，并声明一个db变量</li><li>通过db.query方法测试是否连接成功</li><li>将数据返回给客户端 <ul><li>导入express</li><li>创建服务器</li><li>启动服务器</li><li>注册路由</li><li>通过db.query（查询数据库）来执行sql语句</li><li>如果执行成功将数据响应给客户端</li></ul></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> db <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../config/db.config&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> router <span class="token operator">=</span> express<span class="token punctuation">.</span><span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 通过nodejs获取数据库中的数据  并返回给客户端-</span>
router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 通过db.query方法来执行mysql  测试是否连接成功</span>
  <span class="token comment">// 查询语句 data 得到的是一个数组，  增删改得到的是受影响的行数</span>
  <span class="token keyword">let</span> users <span class="token operator">=</span> <span class="token keyword">await</span> db<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token string">&#39;select * from users&#39;</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>users<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">ok</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> users<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> router
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>控制台输出：</p><figure><img src="https://i0.hdslb.com/bfs/album/8ab5e75aff0d880a7842e5c9faff295ff16936f8.png" alt="image-20221105230812798" tabindex="0" loading="lazy"><figcaption>image-20221105230812798</figcaption></figure><p>返回的数据：</p><figure><img src="https://i0.hdslb.com/bfs/album/2b34f7577230de56f5d481588c7758ea024d53f4.png" alt="image-20221105230828022" tabindex="0" loading="lazy"><figcaption>image-20221105230828022</figcaption></figure><h2 id="_6-插入" tabindex="-1"><a class="header-anchor" href="#_6-插入" aria-hidden="true">#</a> 6.插入</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 给user中添加用户名和密码</span>
router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/addUser&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> sql <span class="token operator">=</span> <span class="token string">&#39;insert into users (userid,department_id) values (?,?)&#39;</span> <span class="token comment">// 构建sql语句</span>
  <span class="token comment">// 执行sql语句</span>
  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> db<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;Mary&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">ok</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>控制台输出：</p><figure><img src="https://i0.hdslb.com/bfs/album/e881a7c9d4663f1f81817f0a4d899a0428c67b64.png" alt="image-20221105231625375" tabindex="0" loading="lazy"><figcaption>image-20221105231625375</figcaption></figure><h2 id="_7-修改" tabindex="-1"><a class="header-anchor" href="#_7-修改" aria-hidden="true">#</a> 7.修改</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 修改数据</span>
router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/updateUser&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> sql <span class="token operator">=</span> <span class="token string">&#39;update users set userid=?,department_id=? where id=?&#39;</span> <span class="token comment">// 构建sql语句</span>
  <span class="token comment">// 执行sql语句</span>
  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> db<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;Jerry&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">ok</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>控制台输出：</p><figure><img src="https://i0.hdslb.com/bfs/album/be9866defbe7223d33530db79638606752fc3b9f.png" alt="image-20221106095506641" tabindex="0" loading="lazy"><figcaption>image-20221106095506641</figcaption></figure><h2 id="_8-删除" tabindex="-1"><a class="header-anchor" href="#_8-删除" aria-hidden="true">#</a> 8.删除</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 删除数据</span>
router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/deleteUser&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> sql <span class="token operator">=</span> <span class="token string">&#39;delete from users where id=?&#39;</span> <span class="token comment">// 构建sql语句</span>
  <span class="token comment">// 执行sql语句</span>
  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> db<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">ok</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>控制台输出：</p><figure><img src="https://i0.hdslb.com/bfs/album/45f7756833e7a6b94fe54c92ae3c350e12614d92.png" alt="image-20221106100105915" tabindex="0" loading="lazy"><figcaption>image-20221106100105915</figcaption></figure>`,24);function L(Q,M){const a=o("ExternalLinkIcon");return c(),l("div",null,[r,n("p",null,[s("MySQL2 项目是 "),n("a",u,[s("MySQL-Native"),e(a)]),s(" 的延续。 协议解析器代码从头开始重写，api 更改为匹配流行的 "),n("a",d,[s("mysqljs/mysql"),e(a)]),s("。 MySQL2 团队正在与 "),n("a",k,[s("mysqljs/mysql"),e(a)]),s(" 团队合作，将共享代码分解并移至 "),n("a",m,[s("mysqljs"),e(a)]),s(" 组织下。")]),n("p",null,[s("MySQL2 大部分 API 与 "),n("a",b,[s("mysqljs"),e(a)]),s(" 兼容，并支持大部分功能。 MySQL2 还提供了更多的附加功能")]),n("ul",null,[v,n("li",null,[n("a",g,[s("支持预处理"),e(a)])]),h,n("li",null,[n("a",f,[s("MySQL Server"),e(a)])]),y,n("li",null,[n("a",_,[s("Promise封装"),e(a)])]),q,n("li",null,[s("SSL 和 "),n("a",x,[s("Authentication Switch"),e(a)])]),n("li",null,[n("a",w,[s("自定义流"),e(a)])]),n("li",null,[n("a",S,[s("连接池"),e(a)])])]),j])}const B=p(i,[["render",L],["__file","13 【操作mysql数据库】.html.vue"]]);export{B as default};
