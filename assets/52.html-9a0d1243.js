import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as e,c as o,a as n,b as c,d as i,e as s}from"./app-a1fbcbb6.js";const l={},u=s(`<h2 id="其它文件操作函数" tabindex="-1"><a class="header-anchor" href="#其它文件操作函数" aria-hidden="true">#</a> 其它文件操作函数</h2><ul><li>ftell 函数</li></ul><table><thead><tr><th>函数声明</th><th>long ftell ( FILE * stream );</th></tr></thead><tbody><tr><td>所在文件</td><td>stdio.h</td></tr><tr><td>函数功能</td><td>得到流式文件的当前读写位置,其返回值是当前读写位置偏离文件头部的字节数.</td></tr><tr><td>参数及返回解析</td><td></td></tr><tr><td>参数</td><td>FILE * 流文件句柄</td></tr><tr><td>返回值</td><td>int 成功，返回当前读写位置偏离文件头部的字节数。失败， 返回-1</td></tr></tbody></table><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">char</span> <span class="token operator">*</span>str <span class="token operator">=</span> <span class="token string">&quot;123456789&quot;</span><span class="token punctuation">;</span>
    FILE <span class="token operator">*</span>fp <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string">&quot;test.txt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;w+&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">long</span> cp <span class="token operator">=</span> <span class="token function">ftell</span><span class="token punctuation">(</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;cp = %li\\n&quot;</span><span class="token punctuation">,</span> cp<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0</span>
    <span class="token comment">// 写入一个字节</span>
    <span class="token function">fputc</span><span class="token punctuation">(</span>str<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> fp<span class="token punctuation">)</span><span class="token punctuation">;</span>
    cp <span class="token operator">=</span> <span class="token function">ftell</span><span class="token punctuation">(</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;cp = %li\\n&quot;</span><span class="token punctuation">,</span> cp<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
    <span class="token function">fclose</span><span class="token punctuation">(</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>rewind 函数</li></ul><table><thead><tr><th>函数声明</th><th>void rewind ( FILE * stream );</th></tr></thead><tbody><tr><td>所在文件</td><td>stdio.h</td></tr><tr><td>函数功能 将文件指针重新指向一个流的开头。</td><td></td></tr><tr><td>参数及返回解析</td><td></td></tr><tr><td>参数</td><td>FILE * 流文件句柄</td></tr><tr><td>返回值</td><td>void 无返回值</td></tr></tbody></table><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">char</span> <span class="token operator">*</span>str <span class="token operator">=</span> <span class="token string">&quot;123456789&quot;</span><span class="token punctuation">;</span>
    FILE <span class="token operator">*</span>fp <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string">&quot;test.txt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;w+&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">long</span> cp <span class="token operator">=</span> <span class="token function">ftell</span><span class="token punctuation">(</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;cp = %li\\n&quot;</span><span class="token punctuation">,</span> cp<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0</span>
    <span class="token comment">// 写入一个字节</span>
    <span class="token function">fputc</span><span class="token punctuation">(</span>str<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> fp<span class="token punctuation">)</span><span class="token punctuation">;</span>
    cp <span class="token operator">=</span> <span class="token function">ftell</span><span class="token punctuation">(</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;cp = %li\\n&quot;</span><span class="token punctuation">,</span> cp<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
    <span class="token comment">// 新指向一个流的开头</span>
    <span class="token function">rewind</span><span class="token punctuation">(</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span>
    cp <span class="token operator">=</span> <span class="token function">ftell</span><span class="token punctuation">(</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;cp = %li\\n&quot;</span><span class="token punctuation">,</span> cp<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0</span>
    <span class="token function">fclose</span><span class="token punctuation">(</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>fseek 函数</li></ul><table><thead><tr><th>函数声明</th><th>int fseek ( FILE * stream, long offset, int where);</th></tr></thead><tbody><tr><td>所在文件</td><td>stdio.h</td></tr><tr><td>函数功能</td><td>偏移文件指针。</td></tr><tr><td>参数及返回解析</td><td></td></tr><tr><td>参 数</td><td>FILE * stream 文件句柄</td></tr><tr><td></td><td>long offset 偏移量</td></tr><tr><td></td><td>int where 偏移起始位置</td></tr><tr><td>返回值</td><td>int 成功返回 0 ，失败返回-1</td></tr></tbody></table><ul><li>常用宏</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">SEEK_CUR</span> <span class="token expression"><span class="token number">1</span> 当前文字</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">SEEK_END</span> <span class="token expression"><span class="token number">2</span> 文件结尾</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">SEEK_SET</span> <span class="token expression"><span class="token number">0</span> 文件开头</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    FILE <span class="token operator">*</span>fp <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string">&quot;test.txt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;w+&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">fputs</span><span class="token punctuation">(</span><span class="token string">&quot;123456789&quot;</span><span class="token punctuation">,</span> fp<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 将文件指针移动到文件结尾, 并且偏移0个单位</span>
    <span class="token function">fseek</span><span class="token punctuation">(</span>fp<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token constant">SEEK_END</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> len <span class="token operator">=</span> <span class="token function">ftell</span><span class="token punctuation">(</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 计算文件长度</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;len = %i\\n&quot;</span><span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">fclose</span><span class="token punctuation">(</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    FILE <span class="token operator">*</span>fp<span class="token punctuation">;</span>
   fp <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string">&quot;file.txt&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;w+&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token function">fputs</span><span class="token punctuation">(</span><span class="token string">&quot;123456789&quot;</span><span class="token punctuation">,</span> fp<span class="token punctuation">)</span><span class="token punctuation">;</span>

   <span class="token function">fseek</span><span class="token punctuation">(</span> fp<span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token constant">SEEK_SET</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token function">fputs</span><span class="token punctuation">(</span><span class="token string">&quot;lnj&quot;</span><span class="token punctuation">,</span> fp<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token function">fclose</span><span class="token punctuation">(</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="捐赠支持" tabindex="-1"><a class="header-anchor" href="#捐赠支持" aria-hidden="true">#</a> 捐赠支持</h3><p>项目的发展离不开你的支持，如果 <strong>CNote</strong> 帮助到你打开编程的大门，请作者喝杯咖啡吧 ☕ 后续我们会继续完善更新！加油！</p>`,15),r={href:"https://www.yuque.com/docs/share/25942927-f732-4f94-a670-154a9c7b06d3",target:"_blank",rel:"noopener noreferrer"},d=s('<h3 id="联系我" tabindex="-1"><a class="header-anchor" href="#联系我" aria-hidden="true">#</a> 联系我</h3><figure><img src="https://cdn.nlark.com/yuque/0/2021/png/12653647/1635664638743-b3515c4e-842f-4a65-8240-bb330e3fe554.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="公众号" tabindex="-1"><a class="header-anchor" href="#公众号" aria-hidden="true">#</a> 公众号</h3>',3);function k(v,m){const a=p("ExternalLinkIcon");return e(),o("div",null,[u,n("p",null,[n("a",r,[c("点击捐赠支持作者"),i(a)])]),d])}const h=t(l,[["render",k],["__file","52.html.vue"]]);export{h as default};