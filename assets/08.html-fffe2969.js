import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-a1fbcbb6.js";const t={},p=e(`<h1 id="_08-【聚合函数与分组查询】" tabindex="-1"><a class="header-anchor" href="#_08-【聚合函数与分组查询】" aria-hidden="true">#</a> 08 【聚合函数与分组查询】</h1><p>我们上一章讲到了 SQL 单行函数。实际上 SQL 函数还有一类，叫做聚合（或聚集、分组）函数，它是对一组数据进行汇总的函数，输入的是一组数据的集合，输出的是单个值。</p><h2 id="_1-聚合函数介绍" tabindex="-1"><a class="header-anchor" href="#_1-聚合函数介绍" aria-hidden="true">#</a> 1.聚合函数介绍</h2><ul><li><strong>什么是聚合函数</strong></li></ul><p>聚合函数作用于一组数据，并对一组数据返回一个值。</p><figure><img src="https://i0.hdslb.com/bfs/album/0c825ef5012603764fac185b18d2618c36221385.png" alt="image-20221020133737930" tabindex="0" loading="lazy"><figcaption>image-20221020133737930</figcaption></figure><ul><li><p><strong>聚合函数类型</strong></p><ul><li><table><thead><tr><th style="text-align:left;">函数</th><th style="text-align:left;">功能</th></tr></thead><tbody><tr><td style="text-align:left;">count</td><td style="text-align:left;">统计数量</td></tr><tr><td style="text-align:left;">max</td><td style="text-align:left;">最大值</td></tr><tr><td style="text-align:left;">min</td><td style="text-align:left;">最小值</td></tr><tr><td style="text-align:left;">avg</td><td style="text-align:left;">平均值</td></tr><tr><td style="text-align:left;">sum</td><td style="text-align:left;">求和</td></tr></tbody></table></li></ul></li><li><p>聚合函数语法</p></li></ul><figure><img src="https://i0.hdslb.com/bfs/album/fd871acfa908e86c363fac70a0f7cb9e1ddb2b7b.png" alt="image-20221020133801805" tabindex="0" loading="lazy"><figcaption>image-20221020133801805</figcaption></figure><ul><li>聚合函数不能嵌套调用。比如不能出现类似“AVG(SUM(字段名称))”形式的调用。</li></ul><h3 id="_1-1-avg和sum函数" tabindex="-1"><a class="header-anchor" href="#_1-1-avg和sum函数" aria-hidden="true">#</a> 1.1 AVG和SUM函数</h3><p>可以对数值型数据使用AVG 和 SUM 函数。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">MAX</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">MIN</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span>
<span class="token keyword">FROM</span>   employees
<span class="token keyword">WHERE</span>  job_id <span class="token operator">LIKE</span> <span class="token string">&#39;%REP%&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://i0.hdslb.com/bfs/album/dc1cd72d75dea2a8e21845d3c570a722f122bcfa.png" alt="image-20221020133842816" tabindex="0" loading="lazy"><figcaption>image-20221020133842816</figcaption></figure><h3 id="_1-2-min和max函数" tabindex="-1"><a class="header-anchor" href="#_1-2-min和max函数" aria-hidden="true">#</a> 1.2 MIN和MAX函数</h3><p>可以对<strong>任意数据类型</strong>（包括数值类型、字符串类型、日期类型）的数据使用 MIN 和 MAX 函数。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token function">MIN</span><span class="token punctuation">(</span>hire_date<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">MAX</span><span class="token punctuation">(</span>hire_date<span class="token punctuation">)</span>
<span class="token keyword">FROM</span>	  employees<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://i0.hdslb.com/bfs/album/4a17fe49166886dea38b6651a6169772fb44d255.png" alt="image-20221020134030397" tabindex="0" loading="lazy"><figcaption>image-20221020134030397</figcaption></figure><h3 id="_1-3-count函数" tabindex="-1"><a class="header-anchor" href="#_1-3-count函数" aria-hidden="true">#</a> 1.3 COUNT函数</h3><p>作用：计算指定字段在查询结构中出现的个数</p><p>如果计算表中有多少条记录，如何实现?</p><p>方式1：count(*)</p><p>方式2：count(常量)，例如count(1)或count(2)...</p><p>方式3：count(字段名)，注意：计算指定字段出现的个数时，是不计算NULL值的。</p><ul><li>COUNT(*)返回表中记录总数，适用于<strong>任意数据类型</strong>。</li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span>
<span class="token keyword">FROM</span>   employees
<span class="token keyword">WHERE</span>  department_id <span class="token operator">=</span> <span class="token number">50</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://i0.hdslb.com/bfs/album/1d879ede706a23ffce89a1a3b8dd3feac5eb9be2.png" alt="image-20221020134111842" tabindex="0" loading="lazy"><figcaption>image-20221020134111842</figcaption></figure><ul><li>COUNT(expr) 返回<strong>expr不为空</strong>的记录总数。</li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token function">COUNT</span><span class="token punctuation">(</span>commission_pct<span class="token punctuation">)</span>
<span class="token keyword">FROM</span>   employees
<span class="token keyword">WHERE</span>  department_id <span class="token operator">=</span> <span class="token number">50</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://i0.hdslb.com/bfs/album/ce4a24d11e06b0fc76666d28824ea571ba2f0b93.png" alt="image-20221020134130217" tabindex="0" loading="lazy"><figcaption>image-20221020134130217</figcaption></figure><ul><li><p><strong>问题：用count(*)，count(1)，count(列名)谁好呢?</strong></p><p>其实，对于MyISAM引擎的表是没有区别的。这种引擎内部有一计数器<code>row_count</code>在维护着行数，查询效率都是o(1)。</p><p>Innodb引擎的表用count(*),count(1)直接读行数，复杂度是O(n)，因为innodb真的要去数一遍。但好于具体的count(列名)。<code>count(*)=count(1)&gt;count(字段)</code></p></li><li><p><strong>问题：能不能使用count(列名)替换count(*)?</strong></p><p>不要使用 count(列名)来替代 <code>count(*)</code>，<code>count(*)</code>是 SQL92 定义的标准统计行数的语法，跟数据库无关，跟 NULL 和非 NULL 无关。</p><p>说明：count(*)会统计值为 NULL 的行，而 count(列名)不会统计此列为 NULL 值的行。</p></li></ul><h2 id="_2-group-by" tabindex="-1"><a class="header-anchor" href="#_2-group-by" aria-hidden="true">#</a> 2. GROUP BY</h2><h3 id="_2-1-基本使用" tabindex="-1"><a class="header-anchor" href="#_2-1-基本使用" aria-hidden="true">#</a> 2.1 基本使用</h3><figure><img src="https://i0.hdslb.com/bfs/album/e5330c8bcb888edb492608138bdc3e764a35fb90.png" alt="image-20221020134515316" tabindex="0" loading="lazy"><figcaption>image-20221020134515316</figcaption></figure><p><strong>可以使用GROUP BY子句将表中的数据分成若干组</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token keyword">column</span><span class="token punctuation">,</span> group_function<span class="token punctuation">(</span><span class="token keyword">column</span><span class="token punctuation">)</span>
<span class="token keyword">FROM</span> <span class="token keyword">table</span>
<span class="token punctuation">[</span><span class="token keyword">WHERE</span>	condition<span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token keyword">GROUP</span> <span class="token keyword">BY</span>	group_by_expression<span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token keyword">ORDER</span> <span class="token keyword">BY</span>	<span class="token keyword">column</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>明确：WHERE一定放在FROM后面</strong></p></blockquote><p><strong><code>在SELECT列表中所有未包含在组函数中的列都应该包含在 GROUP BY子句中，反之，GROUP BY中声明的字段可以不出现在SELECT中</code></strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>   department_id<span class="token punctuation">,</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span>
<span class="token keyword">FROM</span>     employees
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://i0.hdslb.com/bfs/album/060903737ffda582da307f9c8b515aee9635b950.png" alt="image-20221020134535918" tabindex="0" loading="lazy"><figcaption>image-20221020134535918</figcaption></figure><p>包含在 GROUP BY 子句中的列不必包含在SELECT 列表中</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>   <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span>
<span class="token keyword">FROM</span>     employees
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://i0.hdslb.com/bfs/album/0af6da31715732312128de77eb205d06c270f193.png" alt="image-20221020134618113" tabindex="0" loading="lazy"><figcaption>image-20221020134618113</figcaption></figure><h3 id="_2-2-使用多个列分组" tabindex="-1"><a class="header-anchor" href="#_2-2-使用多个列分组" aria-hidden="true">#</a> 2.2 使用多个列分组</h3><figure><img src="https://i0.hdslb.com/bfs/album/5fa868122d6ace0e70cf87696e233b9b5e8450c6.png" alt="image-20221020134915012" tabindex="0" loading="lazy"><figcaption>image-20221020134915012</figcaption></figure><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>   department_id dept_id<span class="token punctuation">,</span> job_id<span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span>
<span class="token keyword">FROM</span>     employees
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id<span class="token punctuation">,</span> job_id <span class="token punctuation">;</span>  <span class="token comment">-- 先按department_id分组，在department_id的分组基础上再进一步按job_id分组</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://i0.hdslb.com/bfs/album/efb211df491cbe347bee128f6ea55ba31cb7aa3e.png" alt="image-20221020134934346" tabindex="0" loading="lazy"><figcaption>image-20221020134934346</figcaption></figure><h3 id="_2-3-group-by中使用with-rollup" tabindex="-1"><a class="header-anchor" href="#_2-3-group-by中使用with-rollup" aria-hidden="true">#</a> 2.3 GROUP BY中使用WITH ROLLUP</h3><p>使用<code>WITH ROLLUP</code>关键字之后，在所有查询出的分组记录之后增加一条记录，该记录计算查询出的所有记录的总和，即统计记录数量。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> department_id<span class="token punctuation">,</span><span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span>
<span class="token keyword">FROM</span> employees
<span class="token keyword">WHERE</span> department_id <span class="token operator">&gt;</span> <span class="token number">80</span>
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id <span class="token keyword">WITH ROLLUP</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：</p><p>当使用ROLLUP时，不能同时使用ORDER BY子句进行结果排序，即ROLLUP和ORDER BY是互相排斥的。</p></blockquote><h3 id="_2-4-结论" tabindex="-1"><a class="header-anchor" href="#_2-4-结论" aria-hidden="true">#</a> 2.4 结论</h3><p>结论1：SELECT中出现的非组函数的字段必须声明在GROUP BY 中。 反之，GROUP BY中声明的字段可以不出现在SELECT中。</p><p>结论2：GROUP BY 声明在FROM后面、WHERE后面，ORDER BY 前面、LIMIT前面</p><p>结论3：MySQL中GROUP BY中可以使用WITH ROLLUP</p><h2 id="_3-having" tabindex="-1"><a class="header-anchor" href="#_3-having" aria-hidden="true">#</a> 3. HAVING</h2><h3 id="_3-1-基本使用" tabindex="-1"><a class="header-anchor" href="#_3-1-基本使用" aria-hidden="true">#</a> 3.1 基本使用</h3><figure><img src="https://i0.hdslb.com/bfs/album/065cedfed4fdf353882208e9f7b36428b4cdf034.png" alt="image-20221020135832241" tabindex="0" loading="lazy"><figcaption>image-20221020135832241</figcaption></figure><p><strong>过滤分组：HAVING子句</strong></p><ol><li>行已经被分组。</li><li>使用了聚合函数。</li><li>满足HAVING 子句中条件的分组将被显示。</li><li>HAVING 不能单独使用，必须要跟 GROUP BY 一起使用。</li></ol><figure><img src="https://i0.hdslb.com/bfs/album/8f333c74bda24984936a353a08a771daf8b84f94.png" alt="image-20221020135855381" tabindex="0" loading="lazy"><figcaption>image-20221020135855381</figcaption></figure><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>   department_id<span class="token punctuation">,</span> <span class="token function">MAX</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span>
<span class="token keyword">FROM</span>     employees
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id
<span class="token keyword">HAVING</span>   <span class="token function">MAX</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span><span class="token operator">&gt;</span><span class="token number">10000</span> <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://i0.hdslb.com/bfs/album/60df9a5a4e785044549d1faefa44e35705879bd2.png" alt="image-20221020135914039" tabindex="0" loading="lazy"><figcaption>image-20221020135914039</figcaption></figure><ul><li>**非法使用聚合函数 ： 不能在 <code>WHERE</code>子句中使用聚合函数。**如下：</li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>   department_id<span class="token punctuation">,</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span>
<span class="token keyword">FROM</span>     employees
<span class="token keyword">WHERE</span>    <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">8000</span>
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://i0.hdslb.com/bfs/album/6c3657d44940f6a83d92b36cfad2bc08b9400b87.png" alt="image-20221020135924434" tabindex="0" loading="lazy"><figcaption>image-20221020135924434</figcaption></figure><h3 id="_3-2-where和having的对比" tabindex="-1"><a class="header-anchor" href="#_3-2-where和having的对比" aria-hidden="true">#</a> 3.2 WHERE和HAVING的对比</h3><p><strong>区别1：WHERE 可以直接使用表中的字段作为筛选条件，但不能使用分组中的计算函数作为筛选条件；HAVING 必须要与 GROUP BY 配合使用，可以把分组计算的函数和分组字段作为筛选条件。</strong></p><p>这决定了，在需要对数据进行分组统计的时候，HAVING 可以完成 WHERE 不能完成的任务。这是因为，在查询语法结构中，WHERE 在 GROUP BY 之前，所以无法对分组结果进行筛选。HAVING 在 GROUP BY 之后，可以使用分组字段和分组中的计算函数，对分组的结果集进行筛选，这个功能是 WHERE 无法完成的。另外，WHERE排除的记录不再包括在分组中。</p><p><strong>区别2：如果需要通过连接从关联表中获取需要的数据，WHERE 是先筛选后连接，而 HAVING 是先连接后筛选。</strong> 这一点，就决定了在关联查询中，WHERE 比 HAVING 更高效。因为 WHERE 可以先筛选，用一个筛选后的较小数据集和关联表进行连接，这样占用的资源比较少，执行效率也比较高。HAVING 则需要先把结果集准备好，也就是用未被筛选的数据集进行关联，然后对这个大的数据集进行筛选，这样占用的资源就比较多，执行效率也较低。</p><p><mark>当过滤条件中有聚合函数时，则此过滤条件必须声明在HAVING中。当过滤条件中没有聚合函数时，则此过滤条件声明在WHERE中或HAVING中都可以。但是，建议大家声明在WHERE中，WHERE的执行效率要高于HAVING</mark></p><p>小结如下：</p><table><thead><tr><th></th><th>优点</th><th>缺点</th></tr></thead><tbody><tr><td>WHERE</td><td>先筛选数据再关联，执行效率高</td><td>不能使用分组中的计算函数进行筛选</td></tr><tr><td>HAVING</td><td>可以使用分组中的计算函数</td><td>在最后的结果集中进行筛选，执行效率较低</td></tr></tbody></table><p><strong>开发中的选择：</strong></p><p>WHERE 和 HAVING 也不是互相排斥的，我们可以在一个查询里面同时使用 WHERE 和 HAVING。包含分组统计函数的条件用 HAVING，普通条件用 WHERE。这样，我们就既利用了 WHERE 条件的高效快速，又发挥了 HAVING 可以使用包含分组统计函数的查询条件的优点。当数据量特别大的时候，运行效率会有很大的差别。</p><h2 id="_4-select的执行过程" tabindex="-1"><a class="header-anchor" href="#_4-select的执行过程" aria-hidden="true">#</a> 4. SELECT的执行过程</h2><h3 id="_4-1-查询的结构" tabindex="-1"><a class="header-anchor" href="#_4-1-查询的结构" aria-hidden="true">#</a> 4.1 查询的结构</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">#方式1：</span>
<span class="token keyword">SELECT</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token keyword">FROM</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token keyword">WHERE</span> 多表的连接条件
<span class="token operator">AND</span> 不包含组函数的过滤条件
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token keyword">HAVING</span> 包含组函数的过滤条件
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">ASC</span><span class="token operator">/</span><span class="token keyword">DESC</span>
<span class="token keyword">LIMIT</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
 
<span class="token comment">#方式2：</span>
<span class="token keyword">SELECT</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token keyword">FROM</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">JOIN</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> 
<span class="token keyword">ON</span> 多表的连接条件
<span class="token keyword">JOIN</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token keyword">ON</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token keyword">WHERE</span> 不包含组函数的过滤条件
<span class="token operator">AND</span><span class="token operator">/</span><span class="token operator">OR</span> 不包含组函数的过滤条件
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token keyword">HAVING</span> 包含组函数的过滤条件
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">ASC</span><span class="token operator">/</span><span class="token keyword">DESC</span>
<span class="token keyword">LIMIT</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
 
<span class="token comment">#其中：</span>
<span class="token comment">#（1）from：从哪些表中筛选</span>
<span class="token comment">#（2）on：关联多表查询时，去除笛卡尔积</span>
<span class="token comment">#（3）where：从表中筛选的条件</span>
<span class="token comment">#（4）group by：分组依据</span>
<span class="token comment">#（5）having：在统计结果中再次筛选</span>
<span class="token comment">#（6）order by：排序</span>
<span class="token comment">#（7）limit：分页</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-select执行顺序" tabindex="-1"><a class="header-anchor" href="#_4-2-select执行顺序" aria-hidden="true">#</a> 4.2 SELECT执行顺序</h3><p>你需要记住 SELECT 查询时的两个顺序：</p><p><strong>1. 关键字的顺序是不能颠倒的：</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">FROM</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">WHERE</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">HAVING</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">LIMIT</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>2.SELECT 语句的执行顺序</strong>（在 MySQL 和 Oracle 中，SELECT 执行顺序基本相同）：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">FROM</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">WHERE</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">HAVING</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">SELECT</span> 的字段 <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">DISTINCT</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">LIMIT</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://i0.hdslb.com/bfs/album/4f7793b513a24d02faeb30581516241e00baa1aa.png" alt="image-20221020140433098" tabindex="0" loading="lazy"><figcaption>image-20221020140433098</figcaption></figure><p>比如你写了一个 SQL 语句，那么它的关键字顺序和执行顺序是下面这样的：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token keyword">DISTINCT</span> player_id<span class="token punctuation">,</span> player_name<span class="token punctuation">,</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">as</span> num <span class="token comment"># 顺序 5</span>
<span class="token keyword">FROM</span> player <span class="token keyword">JOIN</span> team <span class="token keyword">ON</span> player<span class="token punctuation">.</span>team_id <span class="token operator">=</span> team<span class="token punctuation">.</span>team_id <span class="token comment"># 顺序 1</span>
<span class="token keyword">WHERE</span> height <span class="token operator">&gt;</span> <span class="token number">1.80</span> <span class="token comment"># 顺序 2</span>
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> player<span class="token punctuation">.</span>team_id <span class="token comment"># 顺序 3</span>
<span class="token keyword">HAVING</span> num <span class="token operator">&gt;</span> <span class="token number">2</span> <span class="token comment"># 顺序 4</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> num <span class="token keyword">DESC</span> <span class="token comment"># 顺序 6</span>
<span class="token keyword">LIMIT</span> <span class="token number">2</span> <span class="token comment"># 顺序 7</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 SELECT 语句执行这些步骤的时候，每个步骤都会产生一个<code>虚拟表</code>，然后将这个虚拟表传入下一个步骤中作为输入。需要注意的是，这些步骤隐含在 SQL 的执行过程中，对于我们来说是不可见的。</p><h3 id="_4-3-sql-的执行原理" tabindex="-1"><a class="header-anchor" href="#_4-3-sql-的执行原理" aria-hidden="true">#</a> 4.3 SQL 的执行原理</h3><p>SELECT 是先执行 FROM 这一步的。在这个阶段，如果是多张表联查，还会经历下面的几个步骤：</p><ol><li>首先先通过 CROSS JOIN 求笛卡尔积，相当于得到虚拟表 vt（virtual table）1-1；</li><li>通过 ON 进行筛选，在虚拟表 vt1-1 的基础上进行筛选，得到虚拟表 vt1-2；</li><li>添加外部行。如果我们使用的是左连接、右链接或者全连接，就会涉及到外部行，也就是在虚拟表 vt1-2 的基础上增加外部行，得到虚拟表 vt1-3。</li></ol><p>当然如果我们操作的是两张以上的表，还会重复上面的步骤，直到所有表都被处理完为止。这个过程得到是我们的原始数据。</p><p>当我们拿到了查询数据表的原始数据，也就是最终的虚拟表 <code>vt1</code>，就可以在此基础上再进行 <code>WHERE 阶段</code>。在这个阶段中，会根据 vt1 表的结果进行筛选过滤，得到虚拟表 <code>vt2</code>。</p><p>然后进入第三步和第四步，也就是 <code>GROUP 和 HAVING 阶段</code>。在这个阶段中，实际上是在虚拟表 vt2 的基础上进行分组和分组过滤，得到中间的虚拟表 <code>vt3</code> 和 <code>vt4</code>。</p><p>当我们完成了条件筛选部分之后，就可以筛选表中提取的字段，也就是进入到 <code>SELECT 和 DISTINCT 阶段</code>。</p><p>首先在 SELECT 阶段会提取想要的字段，然后在 DISTINCT 阶段过滤掉重复的行，分别得到中间的虚拟表 <code>vt5-1</code> 和 <code>vt5-2</code>。</p><p>当我们提取了想要的字段数据之后，就可以按照指定的字段进行排序，也就是 <code>ORDER BY 阶段</code>，得到虚拟表 <code>vt6</code>。</p><p>最后在 vt6 的基础上，取出指定行的记录，也就是 <code>LIMIT 阶段</code>，得到最终的结果，对应的是虚拟表 <code>vt7</code>。</p><p>当然我们在写 SELECT 语句的时候，不一定存在所有的关键字，相应的阶段就会省略。</p><p>同时因为 SQL 是一门类似英语的结构化查询语言，所以我们在写 SELECT 语句的时候，还要注意相应的关键字顺序，<strong>所谓底层运行的原理，就是我们刚才讲到的执行顺序。</strong></p><h2 id="_5-笔记" tabindex="-1"><a class="header-anchor" href="#_5-笔记" aria-hidden="true">#</a> 5.笔记</h2><p>1.where子句可否使用组函数进行过滤? No!</p><p>2.查询公司员工工资的最大值，最小值，平均值，总和</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token function">MAX</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">MIN</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token keyword">FROM</span> employees<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3.查询各job_id的员工工资的最大值，最小值，平均值，总和</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> job_id<span class="token punctuation">,</span> <span class="token function">MAX</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">MIN</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> 
<span class="token keyword">FROM</span> employees 
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> job_id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.选择具有各个job_id的员工人数</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> job_id<span class="token punctuation">,</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> 
<span class="token keyword">FROM</span> employees 
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> job_id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5.查询员工最高工资和最低工资的差距（DIFFERENCE）</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token function">MAX</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">MIN</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">MAX</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token function">MIN</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> DIFFERENCE 
<span class="token keyword">FROM</span> employees<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>6.查询各个管理者手下员工的最低工资，其中最低工资不能低于6000，没有管理者的员工不计算在内</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> manager_id<span class="token punctuation">,</span> <span class="token function">MIN</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> 
<span class="token keyword">FROM</span> employees 
<span class="token keyword">WHERE</span> manager_id <span class="token operator">IS</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> 
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> manager_id 
<span class="token keyword">HAVING</span> <span class="token function">MIN</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">6000</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>7.查询所有部门的名字，location_id，员工数量和平均工资，并按平均工资降序</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> department_name<span class="token punctuation">,</span> location_id<span class="token punctuation">,</span> <span class="token function">COUNT</span><span class="token punctuation">(</span>employee_id<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> avg_sal 
<span class="token keyword">FROM</span> employees e <span class="token keyword">RIGHT</span> 
<span class="token keyword">JOIN</span> departments d 
<span class="token keyword">ON</span> e<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>department_id<span class="token punctuation">\`</span></span> <span class="token operator">=</span> d<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>department_id<span class="token punctuation">\`</span></span> 
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_name<span class="token punctuation">,</span> location_id 
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> avg_sal <span class="token keyword">DESC</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>8.查询每个工种、每个部门的部门名、工种名和最低工资</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> department_name<span class="token punctuation">,</span>job_id<span class="token punctuation">,</span><span class="token function">MIN</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> 
<span class="token keyword">FROM</span> departments d <span class="token keyword">LEFT</span> 
<span class="token keyword">JOIN</span> employees e 
<span class="token keyword">ON</span> e<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>department_id<span class="token punctuation">\`</span></span> <span class="token operator">=</span> d<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>department_id<span class="token punctuation">\`</span></span> 
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_name<span class="token punctuation">,</span>job_id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,115),o=[p];function c(l,i){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","08.html.vue"]]);export{r as default};
