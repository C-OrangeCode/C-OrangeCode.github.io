import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as e,e as a}from"./app-a1fbcbb6.js";const n={},s=a(`<h2 id="变量内存分析" tabindex="-1"><a class="header-anchor" href="#变量内存分析" aria-hidden="true">#</a> 变量内存分析</h2><ul><li>内存模型</li></ul><ul><li>内存模型是线性的(有序的)</li><li>对于 32 机而言，最大的内存地址是2^32次方bit(4294967296)(4GB)</li><li>对于 64 机而言，最大的内存地址是2^64次方bit(18446744073709552000)(171亿GB)</li></ul><figure><img src="https://img-blog.csdnimg.cn/img_convert/c15e330e2723191671e55b27cd9e4f1c.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li><p>CPU 读写内存</p><ul><li>CPU 在运作时要明确三件事</li></ul><ul><li>存储单元的地址（地址信息）</li><li>器件的选择，读 or 写 （控制信息）</li><li>读写的数据 （数据信息）</li></ul></li><li><p>如何明确这三件事情</p><ul><li>通过地址总线找到存储单元的地址</li><li>通过控制总线发送内存读写指令</li><li>通过数据总线传输需要读写的数据</li></ul></li></ul><blockquote><ul><li>地址总线: 地址总线宽度决定了CPU可以访问的物理地址空间(寻址能力) <ul><li>例如: 地址总线的宽度是1位, 那么表示可以访问 0 和 1的内存</li><li>例如: 地址总线的位数是2位, 那么表示可以访问 00、01、10、11的内存</li></ul></li><li>数据总线: 数据总线的位数决定CPU单次通信能交换的信息数量 <ul><li>例如: 数据总线:的宽度是1位, 那么一次可以传输1位二进制数据</li><li>例如: 地址总线的位数是2位,那么一次可以传输2位二进制数据</li></ul></li><li>控制总线: 用来传送各种控制信号</li></ul></blockquote><ul><li><p>写入流程</p><ul><li>CPU 通过地址线将找到地址为 FFFFFFFB 的内存</li><li>CPU 通过控制线发出内存写入命令，选中存储器芯片，并通知它，要其写入数据。</li><li>CPU 通过数据线将数据 8 送入内存 FFFFFFFB 单元中<br><img src="https://img-blog.csdnimg.cn/img_convert/ed76e9a4a2ce06d0a3cd20192956f863.png" alt="" loading="lazy"></li></ul></li><li><p>读取流程</p></li></ul><ul><li>CPU 通过地址线将找到地址为 FFFFFFFB 的内存</li><li>CPU 通过控制线发出内存读取命令，选中存储器芯片，并通知它，将要从中读取数据</li><li>存储器将 FFFFFFFB 号单元中的数据 8 通过数据线送入 CPU寄存器中<br><img src="https://img-blog.csdnimg.cn/img_convert/2fb17f543aa500524932669a322cd57a.png" alt="" loading="lazy"></li></ul><ul><li>变量的存储原则</li></ul><ul><li><p>先分配字节地址大内存,然后分配字节地址小的内存(内存寻址是由大到小)</p></li><li><p>变量的首地址,是变量所占存储空间字节地址(最小的那个地址 )</p></li><li><p>低位保存在低地址字节上,高位保存在高地址字节上</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token number">10</span>的二进制<span class="token operator">:</span> <span class="token number">0</span>b00000000 <span class="token number">00000000</span> <span class="token number">00000000</span> <span class="token number">00001010</span>
           高字节←                        →低字节
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,10),c=[s];function t(u,o){return i(),e("div",null,c)}const d=l(n,[["render",t],["__file","14.html.vue"]]);export{d as default};
