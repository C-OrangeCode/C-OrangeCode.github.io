import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o,c,d as l,w as d,e as u,a as t,b as a}from"./app-a1fbcbb6.js";const p={},i=u(`<p>音频（Audio）元素用于在网页中嵌入音频内容。它提供了一种在网页中播放音频文件的标准方法，支持多种音频格式，包括 MP3、WAV 和 Ogg 等。下面是音频元素的详细介绍以及所有可用的属性和方法。</p><h2 id="音频元素的基本用法" tabindex="-1"><a class="header-anchor" href="#音频元素的基本用法" aria-hidden="true">#</a> 音频元素的基本用法</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>audio</span>
  <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://downsc.chinaz.net/Files/DownLoad/sound1/201906/11582.mp3<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">controls</span>
<span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>audio</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="音频元素的属性" tabindex="-1"><a class="header-anchor" href="#音频元素的属性" aria-hidden="true">#</a> 音频元素的属性</h2><table><thead><tr><th>属性</th><th>描述</th></tr></thead><tbody><tr><td>autoplay</td><td>布尔值，表示是否自动播放音频</td></tr><tr><td>controls</td><td>布尔值，表示是否显示播放控件</td></tr><tr><td>loop</td><td>布尔值，表示是否循环播放音频</td></tr><tr><td>muted</td><td>布尔值，表示是否静音播放音频</td></tr><tr><td>preload</td><td>字符串，表示预加载音频的方式（&quot;none&quot;、&quot;metadata&quot;、&quot;auto&quot;）</td></tr><tr><td>src</td><td>字符串，表示音频文件的 URL</td></tr><tr><td>volume</td><td>数值，表示音量的大小（0.0 到 1.0 之间的浮点数）</td></tr></tbody></table><h2 id="音频元素的方法" tabindex="-1"><a class="header-anchor" href="#音频元素的方法" aria-hidden="true">#</a> 音频元素的方法</h2><table><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td>load()</td><td>加载音频文件</td></tr><tr><td>play()</td><td>播放音频</td></tr><tr><td>pause()</td><td>暂停音频</td></tr></tbody></table><h2 id="音频元素的事件" tabindex="-1"><a class="header-anchor" href="#音频元素的事件" aria-hidden="true">#</a> 音频元素的事件</h2><table><thead><tr><th>事件</th><th>描述</th></tr></thead><tbody><tr><td>onplay</td><td>当音频开始播放时触发</td></tr><tr><td>onpause</td><td>当音频暂停时触发</td></tr><tr><td>onended</td><td>当音频播放结束时触发</td></tr><tr><td>ontimeupdate</td><td>当音频播放位置发生改变时触发</td></tr></tbody></table><h2 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h2>`,10),r=t("div",{class:"language-html line-numbers-mode","data-ext":"html"},[t("pre",{class:"language-html"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("button")]),a(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"onclick"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value javascript language-javascript"},[t("span",{class:"token function"},"play"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")")]),t("span",{class:"token punctuation"},'"')])]),t("span",{class:"token punctuation"},">")]),a("播放"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("button")]),t("span",{class:"token punctuation"},">")]),a(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("audio")]),a(`
  `),t("span",{class:"token attr-name"},"id"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("audiodemo"),t("span",{class:"token punctuation"},'"')]),a(`
  `),t("span",{class:"token attr-name"},"src"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("http://downsc.chinaz.net/Files/DownLoad/sound1/201906/11582.mp3"),t("span",{class:"token punctuation"},'"')]),a(`
  `),t("span",{class:"token attr-name"},"controls"),a(`
`),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("audio")]),t("span",{class:"token punctuation"},">")]),a(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),k=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token keyword"},"var"),a(" audio "),t("span",{class:"token operator"},"="),a(" document"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"getElementById"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"audiodemo"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),a(`
`),t("span",{class:"token keyword"},"function"),a(),t("span",{class:"token function"},"play"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token punctuation"},"{"),a(`
  audio`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"play"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),a(),t("span",{class:"token comment"},"// 播放音频"),a(`
  audio`),t("span",{class:"token punctuation"},"."),a("volume "),t("span",{class:"token operator"},"="),a(),t("span",{class:"token number"},"0.5"),t("span",{class:"token punctuation"},";"),a(),t("span",{class:"token comment"},"// 设置音量为 50%"),a(`
`),t("span",{class:"token punctuation"},"}"),a(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1);function h(m,b){const n=e("CodeDemo");return o(),c("div",null,[i,l(n,{id:"code-demo-173",type:"normal",title:"%E7%A4%BA%E4%BE%8B",code:"eJxVj8FKwzAcxl8lBIQNJGknFd26HkQFwUfIJSbRRtN/SpNW5tjZoyjeBe/u4kUE9zQy3VuYtgfZLfnyI7/vm+PcFwaPcXpRe28BWRBGi5spw6Xhs8GQ4Wz99LZ+XqW0JzIGKa+ltgwQ0jKA3U2qwjLcZq4SIcy9L8eUSnsLThCRa+B3BJSnp9ooR49Dfm65pM7WIGM6iuLDaJ/GcXIwIkW5138lLPjKGscgS2mnCXa8i695w52odOlD84ZXqHtDUyStqAsFnlwpf2JUezyancnBVsnhhMFlDcLrsLdfieatrmNIn0wQpahfvnl537w+/gONNUESbBFJOux3ufr5WrbY/cP3xydKoh0Gi9B08QeRQIKO"},{default:d(()=>[r,k]),_:1})])}const f=s(p,[["render",h],["__file","09.html.vue"]]);export{f as default};