import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as c,c as i,d as g,w as e,e as x,b as r,a as t}from"./app-a1fbcbb6.js";const y={},u=x('<h2 id="什么是-url" tabindex="-1"><a class="header-anchor" href="#什么是-url" aria-hidden="true">#</a> 什么是 URL</h2><ul><li><strong>URL</strong> 统一资源定位器(<strong>Uniform Resource Locators</strong>)，它是用于标识和定位互联网上的资源（如网页、图片、视频等）的地址。</li><li><strong>URL</strong> 通常由多个部分组成，包括协议（scheme）、主机名（hostname）、端口号（port）、路径（path）、查询参数（query parameters）和片段标识（fragment identifier）等。</li></ul><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><ol><li><strong>协议（scheme）</strong>：<strong>URL</strong> 的协议部分指示了访问资源所使用的协议 <ul><li>例如：<code>HTTP</code>、<code>HTTPS</code>、<code>FTP</code> 等。在 <strong>URL</strong> <code>https://www.example.com</code> 中，协议部分为 <code>https</code></li></ul></li></ol><hr><ol start="2"><li><strong>主机名（hostname）</strong>：主机名指示了资源所在的主机的域名或 IP 地址 <ul><li>例如：在 <strong>URL</strong> <code>https://www.example.com</code> 中，主机名部分为 <code>www.example.com</code></li></ul></li></ol><hr><ol start="3"><li><strong>端口号（port）</strong>：端口号指示了访问资源所使用的端口号，通常在使用默认端口时可以省略 <ul><li>例如： <ul><li><code>HTTP</code> 协议默认端口：<code>80</code></li><li><code>HTTPS</code> 协议默认端口：<code>443</code></li><li><code>FTP</code> 协议默认端口：<code>21</code></li><li>……</li></ul></li><li>在 <strong>URL</strong> <code>https://www.example.com:8080</code> 中，端口号部分为 <code>8080</code></li></ul></li></ol><hr><ol start="4"><li><strong>路径（path）</strong>：路径部分指示了资源在服务器上的具体位置 <ul><li>例如：在 <strong>URL</strong> <code>https://www.example.com/pages/</code> 中，路径部分为 <code>/pages/</code></li></ul></li></ol><hr><ol start="5"><li><strong>文件名（Filename）</strong>： <ul><li>例如：在 <strong>URL</strong> <code>https://www.example.com/page.html</code> 中，文件名部分为 <code>page.html</code></li></ul></li></ol><hr><ol start="6"><li><strong>查询参数（query parameters）</strong>：查询参数部分用于向服务器传递额外的参数，通常以键值对的形式出现，多个参数之间使用<code>&amp;</code>符号分隔 <ul><li>例如：在 <strong>URL</strong> <code>https://www.example.com/search?q=example&amp;page=1</code> 中，查询参数部分为 <code>?q=example&amp;page=1</code>。</li></ul></li></ol><hr><ol start="7"><li><p><strong>片段标识（fragment identifier）</strong>：片段标识部分用于指示资源中的特定片段或位置，通常在访问 HTML 文档时用于定位到文档中的特定部分</p><ul><li>例如：在 <strong>URL</strong> <code>https://www.example.com/page1.html#section1</code> 中，片段标识部分为 <code>#section1</code></li></ul></li></ol><hr><p><strong>总的来说，URL 是用于定位互联网上资源的地址，它包含了多个部分，每个部分都提供了关于资源定位和访问的重要信息。</strong></p></div><h2 id="url-字符编码" tabindex="-1"><a class="header-anchor" href="#url-字符编码" aria-hidden="true">#</a> URL 字符编码</h2><p>URL 只能使用 ASCII 字符集.<br> 来通过因特网进行发送。由于 URL 常常会包含 ASCII 集合之外的字符，URL 必须转换为有效的 ASCII 格式。<br> URL 编码使用 &quot;%&quot; 其后跟随两位的十六进制数来替换非 ASCII 字符。<br> URL 不能包含空格。URL 编码通常使用 + 来替换空格。</p><h3 id="url-编码参考手册" tabindex="-1"><a class="header-anchor" href="#url-编码参考手册" aria-hidden="true">#</a> URL 编码参考手册</h3>',7),o=t("table",null,[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"ASCII 字符"),t("th",{style:{"text-align":"center"}},"URL-编码"),t("th",{style:{"text-align":"center"}}),t("th",{style:{"text-align":"center"}},"ASCII 字符"),t("th",{style:{"text-align":"center"}},"URL-编码")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}},"space"),t("td",{style:{"text-align":"center"}},"%20"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"!"),t("td",{style:{"text-align":"center"}},"%21")]),t("tr",null,[t("td",{style:{"text-align":"center"}},'"'),t("td",{style:{"text-align":"center"}},"%22"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"#"),t("td",{style:{"text-align":"center"}},"%23")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"$"),t("td",{style:{"text-align":"center"}},"%24"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"%"),t("td",{style:{"text-align":"center"}},"%25")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"&"),t("td",{style:{"text-align":"center"}},"%26"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"'"),t("td",{style:{"text-align":"center"}},"%27")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"("),t("td",{style:{"text-align":"center"}},"%28"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},")"),t("td",{style:{"text-align":"center"}},"%29")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"*"),t("td",{style:{"text-align":"center"}},"%2A"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"+"),t("td",{style:{"text-align":"center"}},"%2B")]),t("tr",null,[t("td",{style:{"text-align":"center"}},","),t("td",{style:{"text-align":"center"}},"%2C"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"-"),t("td",{style:{"text-align":"center"}},"%2D")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"."),t("td",{style:{"text-align":"center"}},"%2E"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"/"),t("td",{style:{"text-align":"center"}},"%2F")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"0"),t("td",{style:{"text-align":"center"}},"%30"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"1"),t("td",{style:{"text-align":"center"}},"%31")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"2"),t("td",{style:{"text-align":"center"}},"%32"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"3"),t("td",{style:{"text-align":"center"}},"%33")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"4"),t("td",{style:{"text-align":"center"}},"%34"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"5"),t("td",{style:{"text-align":"center"}},"%35")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"6"),t("td",{style:{"text-align":"center"}},"%36"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"7"),t("td",{style:{"text-align":"center"}},"%37")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"8"),t("td",{style:{"text-align":"center"}},"%38"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"9"),t("td",{style:{"text-align":"center"}},"%39")]),t("tr",null,[t("td",{style:{"text-align":"center"}},":"),t("td",{style:{"text-align":"center"}},"%3A"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},";"),t("td",{style:{"text-align":"center"}},"%3B")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"<"),t("td",{style:{"text-align":"center"}},"%3C"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"="),t("td",{style:{"text-align":"center"}},"%3D")]),t("tr",null,[t("td",{style:{"text-align":"center"}},">"),t("td",{style:{"text-align":"center"}},"%3E"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"?"),t("td",{style:{"text-align":"center"}},"%3F")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"@"),t("td",{style:{"text-align":"center"}},"%40"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"A"),t("td",{style:{"text-align":"center"}},"%41")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"B"),t("td",{style:{"text-align":"center"}},"%42"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"C"),t("td",{style:{"text-align":"center"}},"%43")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"D"),t("td",{style:{"text-align":"center"}},"%44"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"E"),t("td",{style:{"text-align":"center"}},"%45")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"F"),t("td",{style:{"text-align":"center"}},"%46"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"G"),t("td",{style:{"text-align":"center"}},"%47")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"H"),t("td",{style:{"text-align":"center"}},"%48"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"I"),t("td",{style:{"text-align":"center"}},"%49")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"J"),t("td",{style:{"text-align":"center"}},"%4A"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"K"),t("td",{style:{"text-align":"center"}},"%4B")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"L"),t("td",{style:{"text-align":"center"}},"%4C"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"M"),t("td",{style:{"text-align":"center"}},"%4D")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"N"),t("td",{style:{"text-align":"center"}},"%4E"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"O"),t("td",{style:{"text-align":"center"}},"%4F")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"P"),t("td",{style:{"text-align":"center"}},"%50"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"Q"),t("td",{style:{"text-align":"center"}},"%51")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"R"),t("td",{style:{"text-align":"center"}},"%52"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"S"),t("td",{style:{"text-align":"center"}},"%53")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"T"),t("td",{style:{"text-align":"center"}},"%54"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"U"),t("td",{style:{"text-align":"center"}},"%55")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"V"),t("td",{style:{"text-align":"center"}},"%56"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"W"),t("td",{style:{"text-align":"center"}},"%57")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"X"),t("td",{style:{"text-align":"center"}},"%58"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"Y"),t("td",{style:{"text-align":"center"}},"%59")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Z"),t("td",{style:{"text-align":"center"}},"%5A"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"["),t("td",{style:{"text-align":"center"}},"%5B")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"\\"),t("td",{style:{"text-align":"center"}},"%5C"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"]"),t("td",{style:{"text-align":"center"}},"%5D")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"^"),t("td",{style:{"text-align":"center"}},"%5E"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"_"),t("td",{style:{"text-align":"center"}},"%5F")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"`"),t("td",{style:{"text-align":"center"}},"%60"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"a"),t("td",{style:{"text-align":"center"}},"%61")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"b"),t("td",{style:{"text-align":"center"}},"%62"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"c"),t("td",{style:{"text-align":"center"}},"%63")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"d"),t("td",{style:{"text-align":"center"}},"%64"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"e"),t("td",{style:{"text-align":"center"}},"%65")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"f"),t("td",{style:{"text-align":"center"}},"%66"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"g"),t("td",{style:{"text-align":"center"}},"%67")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"h"),t("td",{style:{"text-align":"center"}},"%68"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"i"),t("td",{style:{"text-align":"center"}},"%69")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"j"),t("td",{style:{"text-align":"center"}},"%6A"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"k"),t("td",{style:{"text-align":"center"}},"%6B")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"l"),t("td",{style:{"text-align":"center"}},"%6C"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"m"),t("td",{style:{"text-align":"center"}},"%6D")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"n"),t("td",{style:{"text-align":"center"}},"%6E"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"o"),t("td",{style:{"text-align":"center"}},"%6F")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"p"),t("td",{style:{"text-align":"center"}},"%70"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"q"),t("td",{style:{"text-align":"center"}},"%71")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"r"),t("td",{style:{"text-align":"center"}},"%72"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"s"),t("td",{style:{"text-align":"center"}},"%73")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"t"),t("td",{style:{"text-align":"center"}},"%74"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"u"),t("td",{style:{"text-align":"center"}},"%75")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"v"),t("td",{style:{"text-align":"center"}},"%76"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"w"),t("td",{style:{"text-align":"center"}},"%77")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"x"),t("td",{style:{"text-align":"center"}},"%78"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"y"),t("td",{style:{"text-align":"center"}},"%79")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"z"),t("td",{style:{"text-align":"center"}},"%7A"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"{"),t("td",{style:{"text-align":"center"}},"%7B")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"|"),t("td",{style:{"text-align":"center"}},"%7C"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"}"),t("td",{style:{"text-align":"center"}},"%7D")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"~"),t("td",{style:{"text-align":"center"}},"%7E"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"%"),t("td",{style:{"text-align":"center"}},"7F")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"`"),t("td",{style:{"text-align":"center"}},"%80"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},""),t("td",{style:{"text-align":"center"}},"%81")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"‚"),t("td",{style:{"text-align":"center"}},"%82"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"ƒ"),t("td",{style:{"text-align":"center"}},"%83")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"„"),t("td",{style:{"text-align":"center"}},"%84"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"…"),t("td",{style:{"text-align":"center"}},"%85")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"†"),t("td",{style:{"text-align":"center"}},"%86"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"‡"),t("td",{style:{"text-align":"center"}},"%87")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"ˆ"),t("td",{style:{"text-align":"center"}},"%88"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"‰"),t("td",{style:{"text-align":"center"}},"%89")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Š"),t("td",{style:{"text-align":"center"}},"%8A"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"‹"),t("td",{style:{"text-align":"center"}},"%8B")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Œ"),t("td",{style:{"text-align":"center"}},"%8C"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},""),t("td",{style:{"text-align":"center"}},"%8D")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Ž"),t("td",{style:{"text-align":"center"}},"%8E"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},""),t("td",{style:{"text-align":"center"}},"%8F")]),t("tr",null,[t("td",{style:{"text-align":"center"}},""),t("td",{style:{"text-align":"center"}},"%90"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"'"),t("td",{style:{"text-align":"center"}},"%91")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"'"),t("td",{style:{"text-align":"center"}},"%92"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},'"'),t("td",{style:{"text-align":"center"}},"%93")]),t("tr",null,[t("td",{style:{"text-align":"center"}},'"'),t("td",{style:{"text-align":"center"}},"%94"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"•"),t("td",{style:{"text-align":"center"}},"%95")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"–"),t("td",{style:{"text-align":"center"}},"%96"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"—"),t("td",{style:{"text-align":"center"}},"%97")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"˜"),t("td",{style:{"text-align":"center"}},"%98"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"™"),t("td",{style:{"text-align":"center"}},"%99")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"š"),t("td",{style:{"text-align":"center"}},"%9A"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"›"),t("td",{style:{"text-align":"center"}},"%9B")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"œ"),t("td",{style:{"text-align":"center"}},"%9C"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},""),t("td",{style:{"text-align":"center"}},"%9D")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"ž"),t("td",{style:{"text-align":"center"}},"%9E"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"Ÿ"),t("td",{style:{"text-align":"center"}},"%9F")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"%"),t("td",{style:{"text-align":"center"}},"A0"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"¡"),t("td",{style:{"text-align":"center"}},"%A1")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"¢"),t("td",{style:{"text-align":"center"}},"%A2"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"£"),t("td",{style:{"text-align":"center"}},"%A3")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"¤"),t("td",{style:{"text-align":"center"}},"%A4"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"¥"),t("td",{style:{"text-align":"center"}},"%A5")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"¦"),t("td",{style:{"text-align":"center"}},"%A6"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"§"),t("td",{style:{"text-align":"center"}},"%A7")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"¨"),t("td",{style:{"text-align":"center"}},"%A8"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"©"),t("td",{style:{"text-align":"center"}},"%A9")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"ª"),t("td",{style:{"text-align":"center"}},"%AA"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"«"),t("td",{style:{"text-align":"center"}},"%AB")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"¬"),t("td",{style:{"text-align":"center"}},"%AC"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"­"),t("td",{style:{"text-align":"center"}},"%AD")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"®"),t("td",{style:{"text-align":"center"}},"%AE"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"¯"),t("td",{style:{"text-align":"center"}},"%AF")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"°"),t("td",{style:{"text-align":"center"}},"%B0"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"±"),t("td",{style:{"text-align":"center"}},"%B1")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"²"),t("td",{style:{"text-align":"center"}},"%B2"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"³"),t("td",{style:{"text-align":"center"}},"%B3")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"´"),t("td",{style:{"text-align":"center"}},"%B4"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"µ"),t("td",{style:{"text-align":"center"}},"%B5")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"¶"),t("td",{style:{"text-align":"center"}},"%B6"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"·"),t("td",{style:{"text-align":"center"}},"%B7")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"¸"),t("td",{style:{"text-align":"center"}},"%B8"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"¹"),t("td",{style:{"text-align":"center"}},"%B9")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"º"),t("td",{style:{"text-align":"center"}},"%BA"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"»"),t("td",{style:{"text-align":"center"}},"%BB")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"¼"),t("td",{style:{"text-align":"center"}},"%BC"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"½"),t("td",{style:{"text-align":"center"}},"%BD")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"¾"),t("td",{style:{"text-align":"center"}},"%BE"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"¿"),t("td",{style:{"text-align":"center"}},"%BF")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"À"),t("td",{style:{"text-align":"center"}},"%C0"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"Á"),t("td",{style:{"text-align":"center"}},"%C1")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Â"),t("td",{style:{"text-align":"center"}},"%C2"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"Ã"),t("td",{style:{"text-align":"center"}},"%C3")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Ä"),t("td",{style:{"text-align":"center"}},"%C4"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"Å"),t("td",{style:{"text-align":"center"}},"%C5")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Æ"),t("td",{style:{"text-align":"center"}},"%C6"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"Ç"),t("td",{style:{"text-align":"center"}},"%C7")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"È"),t("td",{style:{"text-align":"center"}},"%C8"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"É"),t("td",{style:{"text-align":"center"}},"%C9")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Ê"),t("td",{style:{"text-align":"center"}},"%CA"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"Ë"),t("td",{style:{"text-align":"center"}},"%CB")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Ì"),t("td",{style:{"text-align":"center"}},"%CC"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"Í"),t("td",{style:{"text-align":"center"}},"%CD")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Î"),t("td",{style:{"text-align":"center"}},"%CE"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"Ï"),t("td",{style:{"text-align":"center"}},"%CF")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Ð"),t("td",{style:{"text-align":"center"}},"%D0"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"Ñ"),t("td",{style:{"text-align":"center"}},"%D1")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Ò"),t("td",{style:{"text-align":"center"}},"%D2"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"Ó"),t("td",{style:{"text-align":"center"}},"%D3")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Ô"),t("td",{style:{"text-align":"center"}},"%D4"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"Õ"),t("td",{style:{"text-align":"center"}},"%D5")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Ö"),t("td",{style:{"text-align":"center"}},"%D6"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"×"),t("td",{style:{"text-align":"center"}},"%D7")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Ø"),t("td",{style:{"text-align":"center"}},"%D8"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"Ù"),t("td",{style:{"text-align":"center"}},"%D9")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Ú"),t("td",{style:{"text-align":"center"}},"%DA"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"Û"),t("td",{style:{"text-align":"center"}},"%DB")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Ü"),t("td",{style:{"text-align":"center"}},"%DC"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"Ý"),t("td",{style:{"text-align":"center"}},"%DD")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Þ"),t("td",{style:{"text-align":"center"}},"%DE"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"ß"),t("td",{style:{"text-align":"center"}},"%DF")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"à"),t("td",{style:{"text-align":"center"}},"%E0"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"á"),t("td",{style:{"text-align":"center"}},"%E1")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"â"),t("td",{style:{"text-align":"center"}},"%E2"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"ã"),t("td",{style:{"text-align":"center"}},"%E3")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"ä"),t("td",{style:{"text-align":"center"}},"%E4"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"å"),t("td",{style:{"text-align":"center"}},"%E5")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"æ"),t("td",{style:{"text-align":"center"}},"%E6"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"ç"),t("td",{style:{"text-align":"center"}},"%E7")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"è"),t("td",{style:{"text-align":"center"}},"%E8"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"é"),t("td",{style:{"text-align":"center"}},"%E9")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"ê"),t("td",{style:{"text-align":"center"}},"%EA"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"ë"),t("td",{style:{"text-align":"center"}},"%EB")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"ì"),t("td",{style:{"text-align":"center"}},"%EC"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"í"),t("td",{style:{"text-align":"center"}},"%ED")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"î"),t("td",{style:{"text-align":"center"}},"%EE"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"ï"),t("td",{style:{"text-align":"center"}},"%EF")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"ð"),t("td",{style:{"text-align":"center"}},"%F0"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"ñ"),t("td",{style:{"text-align":"center"}},"%F1")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"ò"),t("td",{style:{"text-align":"center"}},"%F2"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"ó"),t("td",{style:{"text-align":"center"}},"%F3")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"ô"),t("td",{style:{"text-align":"center"}},"%F4"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"õ"),t("td",{style:{"text-align":"center"}},"%F5")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"ö"),t("td",{style:{"text-align":"center"}},"%F6"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"÷"),t("td",{style:{"text-align":"center"}},"%F7")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"ø"),t("td",{style:{"text-align":"center"}},"%F8"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"ù"),t("td",{style:{"text-align":"center"}},"%F9")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"ú"),t("td",{style:{"text-align":"center"}},"%FA"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"û"),t("td",{style:{"text-align":"center"}},"%FB")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"ü"),t("td",{style:{"text-align":"center"}},"%FC"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"ý"),t("td",{style:{"text-align":"center"}},"%FD")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"þ"),t("td",{style:{"text-align":"center"}},"%FE"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"ÿ"),t("td",{style:{"text-align":"center"}},"%FF")])])],-1),h=t("p",null,"ASCII 设备控制字符最初被设计为用来控制诸如打印机和磁带驱动器之类的硬件设备。在 URL 中这些字符不会起任何作用。",-1),p=t("table",null,[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"ASCII 字符"),t("th",null,"描述"),t("th",{style:{"text-align":"center"}},"URL-编码")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}},"NUL"),t("td",null,"null character"),t("td",{style:{"text-align":"center"}},"%00")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"SOH"),t("td",null,"start of header"),t("td",{style:{"text-align":"center"}},"%01")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"STX"),t("td",null,"start of text"),t("td",{style:{"text-align":"center"}},"%02")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"ETX"),t("td",null,"end of text"),t("td",{style:{"text-align":"center"}},"%03")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"EOT"),t("td",null,"end of transmission"),t("td",{style:{"text-align":"center"}},"%04")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"ENQ"),t("td",null,"enquiry"),t("td",{style:{"text-align":"center"}},"%05")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"ACK"),t("td",null,"acknowledge"),t("td",{style:{"text-align":"center"}},"%06")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"BEL"),t("td",null,"bell (ring)"),t("td",{style:{"text-align":"center"}},"%07")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"BS"),t("td",null,"backspace"),t("td",{style:{"text-align":"center"}},"%08")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"HT"),t("td",null,"horizontal tab"),t("td",{style:{"text-align":"center"}},"%09")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"LF"),t("td",null,"line feed"),t("td",{style:{"text-align":"center"}},"%0A")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"VT"),t("td",null,"vertical tab"),t("td",{style:{"text-align":"center"}},"%0B")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"FF"),t("td",null,"form feed"),t("td",{style:{"text-align":"center"}},"%0C")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"CR"),t("td",null,"carriage return"),t("td",{style:{"text-align":"center"}},"%0D")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"SO"),t("td",null,"shift out"),t("td",{style:{"text-align":"center"}},"%0E")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"SI"),t("td",null,"shift in"),t("td",{style:{"text-align":"center"}},"%0F")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"DLE"),t("td",null,"data link escape"),t("td",{style:{"text-align":"center"}},"%10")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"DC1"),t("td",null,"device control 1"),t("td",{style:{"text-align":"center"}},"%11")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"DC2"),t("td",null,"device control 2"),t("td",{style:{"text-align":"center"}},"%12")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"DC3"),t("td",null,"device control 3"),t("td",{style:{"text-align":"center"}},"%13")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"DC4"),t("td",null,"device control 4"),t("td",{style:{"text-align":"center"}},"%14")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"NAK"),t("td",null,"negative acknowledge"),t("td",{style:{"text-align":"center"}},"%15")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"SYN"),t("td",null,"synchronize"),t("td",{style:{"text-align":"center"}},"%16")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"ETB"),t("td",null,"end transmission block"),t("td",{style:{"text-align":"center"}},"%17")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"CAN"),t("td",null,"cancel"),t("td",{style:{"text-align":"center"}},"%18")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"EM"),t("td",null,"end of medium"),t("td",{style:{"text-align":"center"}},"%19")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"SUB"),t("td",null,"substitute"),t("td",{style:{"text-align":"center"}},"%1A")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"ESC"),t("td",null,"escape"),t("td",{style:{"text-align":"center"}},"%1B")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"FS"),t("td",null,"file separator"),t("td",{style:{"text-align":"center"}},"%1C")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"GS"),t("td",null,"group separator"),t("td",{style:{"text-align":"center"}},"%1D")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"RS"),t("td",null,"record separator"),t("td",{style:{"text-align":"center"}},"%1E")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"US"),t("td",null,"unit separator"),t("td",{style:{"text-align":"center"}},"%1F")])])],-1);function C(A,m){const a=s("Tabs");return c(),i("div",null,[u,g(a,{id:"162",data:[{id:"ASCII 字符集"},{id:"ASCII 控制字符"}]},{title0:e(({value:l,isActive:n})=>[r("ASCII 字符集")]),title1:e(({value:l,isActive:n})=>[r("ASCII 控制字符")]),tab0:e(({value:l,isActive:n})=>[o]),tab1:e(({value:l,isActive:n})=>[h,p]),_:1})])}const F=d(y,[["render",C],["__file","23.html.vue"]]);export{F as default};
