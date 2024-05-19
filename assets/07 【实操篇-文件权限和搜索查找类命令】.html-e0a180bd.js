import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-a1fbcbb6.js";const t={},o=e(`<h1 id="_07-【实操篇-文件权限和搜索查找类命令】" tabindex="-1"><a class="header-anchor" href="#_07-【实操篇-文件权限和搜索查找类命令】" aria-hidden="true">#</a> 07 【实操篇-文件权限和搜索查找类命令】</h1><h2 id="_1-文件权限类" tabindex="-1"><a class="header-anchor" href="#_1-文件权限类" aria-hidden="true">#</a> 1.文件权限类</h2><h3 id="_1-1-权限管理的重要性" tabindex="-1"><a class="header-anchor" href="#_1-1-权限管理的重要性" aria-hidden="true">#</a> 1.1 权限管理的重要性</h3><p>和 Windows 系统不同，Linux 系统为每个文件都添加了很多的属性，最大的作用就是维护数据的安全。举个简单的例子，在你的 Linux 系统中，和系统服务相关的文件通常只有 root 用户才能读或写，就拿 /etc/shadow 这个文件来说，此文件记录了系统中所有用户的密码数据，非常重要，因此绝不能让任何人读取（否则密码数据会被窃取），只有 root 才可以有读取权限。</p><p>此外，如果你有一个软件开发团队，你希望团队中的每个人都可以使用某一些目录下的文件，而非团队的其他人则不予以开放。通过前面章节的学习我们知道，只需要将团队中的所有人加入新的群组，并赋予此群组读写目录的权限，即可实现要求。反之，如果你的目录权限没有做好，就很难防止其他人在你的系统中乱搞。</p><p>比如说，本来 root 用户才能做的开关机、ADSL 拨接程序，新增或删除用户等命令，一旦允许任何人拥有这些权限，系统很可能会经常莫名其妙的挂掉。而且，万一 root 用户的密码被其他人获取，他们就可以登录你的系统，从事一些只有 root 用户才能执行的操作，这是绝对不允许发生的。</p><p>因此，在服务器上，绝对不是所有的用户都使用 root 身份登录，而要根据不同的工作需要和职位需要，合理分配用户等级和权限等级。</p><p>在Linux中我们可以使用ll或者ls -l命令来显示一个文件的属性以及文件所属 的用户和组。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ls -al</span>
total <span class="token number">156</span>
drwxr-x---.   <span class="token number">4</span>    root   root     <span class="token number">4096</span>   Sep  <span class="token number">8</span> <span class="token number">14</span>:06 <span class="token builtin class-name">.</span>
drwxr-xr-x.  <span class="token number">23</span>    root   root     <span class="token number">4096</span>   Sep  <span class="token number">8</span> <span class="token number">14</span>:21 <span class="token punctuation">..</span>
-rw-------.   <span class="token number">1</span>    root   root     <span class="token number">1474</span>   Sep  <span class="token number">4</span> <span class="token number">18</span>:27 anaconda-ks.cfg
-rw-------.   <span class="token number">1</span>    root   root      <span class="token number">199</span>   Sep  <span class="token number">8</span> <span class="token number">17</span>:14 .bash_history
-rw-r--r--.   <span class="token number">1</span>    root   root       <span class="token number">24</span>   Jan  <span class="token number">6</span>  <span class="token number">2007</span> .bash_logout
<span class="token punctuation">..</span>.									
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-权限位" tabindex="-1"><a class="header-anchor" href="#_1-2-权限位" aria-hidden="true">#</a> 1.2 权限位</h3><p>Linux 系统，最常见的文件权限有 3 种，即对文件的读（用 r 表示）、写（用 w 表示）和执行（用 x 表示，针对可执行文件或目录）权限。在 Linux 系统中，每个文件都明确规定了不同身份用户的访问权限，通过 ls 命令即可看到。</p><blockquote><p>除此之外，我们有时会看到 s（针对可执行文件或目录，使文件在执行阶段，临时拥有文件所有者的权限）和 t（针对目录，任何用户都可以在此目录中创建文件，但只能删除自己的文件），文件设置 s 和 t 权限，会占用 x 权限的位置。</p></blockquote><p>例如，我们以 root 的身份登陆 Linux，并执行如下指令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ls -al</span>
total <span class="token number">156</span>
drwxr-x---.   <span class="token number">4</span>    root   root     <span class="token number">4096</span>   Sep  <span class="token number">8</span> <span class="token number">14</span>:06 <span class="token builtin class-name">.</span>
drwxr-xr-x.  <span class="token number">23</span>    root   root     <span class="token number">4096</span>   Sep  <span class="token number">8</span> <span class="token number">14</span>:21 <span class="token punctuation">..</span>
-rw-------.   <span class="token number">1</span>    root   root     <span class="token number">1474</span>   Sep  <span class="token number">4</span> <span class="token number">18</span>:27 anaconda-ks.cfg
-rw-------.   <span class="token number">1</span>    root   root      <span class="token number">199</span>   Sep  <span class="token number">8</span> <span class="token number">17</span>:14 .bash_history
-rw-r--r--.   <span class="token number">1</span>    root   root       <span class="token number">24</span>   Jan  <span class="token number">6</span>  <span class="token number">2007</span> .bash_logout
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，每行的第一列表示的就是各文件针对不同用户设定的权限，一共 11 位，但第 1 位用于表示文件的具体类型，最后一位此文件受 SELinux 的安全规则管理，不是本节关心的内容。</p><p>因此，为文件设定不同用户的读、写和执行权限，仅涉及到 9 位字符，以 ls 命令输出信息中的 .bash_logout 文件为例，设定不同用户的访问权限是 rw-r--r--，各权限位的含义如图所示。</p><figure><img src="https://i0.hdslb.com/bfs/album/96869fad16ee7c68cfda85376370a6260a5ff219.png" alt="image-20220819131621876" tabindex="0" loading="lazy"><figcaption>image-20220819131621876</figcaption></figure><p>从图中可以看到，Linux 将访问文件的用户分为 3 类，分别是文件的所有者，所属组（也就是文件所属的群组）以及其他人。</p><blockquote><p>除了所有者，以及所属群组中的用户可以访问文件外，其他用户（其他群组中的用户）也可以访问文件，这部分用户都归为其他人范畴。</p></blockquote><p>很显然，Linux 系统为 3 种不同的用户身份，分别规定了是否对文件有读、写和执行权限。拿图 1 来说，文件所有者拥有对文件的读和写权限，但是没有执行权限；所属群组中的用户只拥有读权限，也就是说，这部分用户只能读取文件内容，无法修改文件；其他人也是只能读取文件。</p><p>Linux 系统中，多数文件的文件所有者和所属群组都是 root（都是 root 账户创建的），这也就是为什么，root 用户是超级管理员，权限足够大的原因。</p><h3 id="_1-3-读写执行权限-r、-w、-x-的含义" tabindex="-1"><a class="header-anchor" href="#_1-3-读写执行权限-r、-w、-x-的含义" aria-hidden="true">#</a> 1.3 读写执行权限（-r、-w、-x）的含义</h3><p><strong>从左到右的 10 个字符表示</strong></p><figure><img src="https://i0.hdslb.com/bfs/album/96869fad16ee7c68cfda85376370a6260a5ff219.png" alt="image-20220819131621876" tabindex="0" loading="lazy"><figcaption>image-20220819131621876</figcaption></figure><p>如果没有权限，就会出现减号[ - ]而已。从左至右用0-9这些数字来表示:</p><p>（1）0 首位表示类型</p><p>​ 在Linux中第一个字符代表这个文件是目录、文件或链接文件等等</p><blockquote><ul><li><p>- 代表文件</p></li><li><p>d 代表目录</p></li><li><p>l 链接文档(link file)；</p></li></ul></blockquote><p>（2）第1-3位确定属主（该文件的所有者）拥有该文件的权限。---User</p><p>（3）第4-6位确定属组（所有者的同组用户）拥有该文件的权限，---Group</p><p>（4）第7-9位确定其他用户拥有该文件的权限 ---Other</p><p><strong>rwx 作用文件和目录的不同解释</strong></p><p>（1）作用到文件：</p><ul><li><p>[ r ]代表可读(read): 可以读取，查看</p></li><li><p>[ w ]代表可写(write): 可以修改，但是不代表可以删除该文件，删除一个文件的前提条件是对该文件所在的目录有写权限，才能删除该文件</p></li><li><p>[ x ]代表可执行(execute):可以被系统执行</p></li></ul><p>（2）作用到目录：</p><ul><li><p>[ r ]代表可读(read): 可以读取，ls查看目录内容</p></li><li><p>[ w ]代表可写(write): 可以修改，目录内创建+删除+重命名目录</p></li><li><p>[ x ]代表可执行(execute):可以进入该目录</p></li></ul><p><strong>案例实操</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@hadoop101 ~<span class="token punctuation">]</span><span class="token comment"># ll</span>
总用量 <span class="token number">104</span>
-rw-------. <span class="token number">1</span> root root <span class="token number">1248</span> <span class="token number">1</span> 月 <span class="token number">8</span> <span class="token number">17</span>:36 anaconda-ks.cfg
drwxr-xr-x. <span class="token number">2</span> root root <span class="token number">4096</span> <span class="token number">1</span> 月 <span class="token number">12</span> <span class="token number">14</span>:02 dssz
lrwxrwxrwx. <span class="token number">1</span> root root <span class="token number">20</span> <span class="token number">1</span> 月 <span class="token number">12</span> <span class="token number">14</span>:32 houzi -<span class="token operator">&gt;</span> xiyou/dssz/houge.tx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://i0.hdslb.com/bfs/album/08071bb7f281eb00cbb25e476322ae1ebaf83277.png" alt="image-20220819132433035" tabindex="0" loading="lazy"><figcaption>image-20220819132433035</figcaption></figure><p>（1）如果查看到是文件：链接数指的是硬链接个数。</p><p>（2）如果查看的是文件夹：链接数指的是子文件夹个数。</p><h3 id="_1-4-chmod-改变权限" tabindex="-1"><a class="header-anchor" href="#_1-4-chmod-改变权限" aria-hidden="true">#</a> 1.4 chmod 改变权限</h3><p>既然我们已经知道文件权限对于一个系统的重要性，也知道每个文件都设定了针对不同用户的访问权限，那么，是否可以手动修改文件的访问权限呢？</p><p>可以，通过 chmod 命令即可。chmod 命令设定文件权限的方式有 2 种，分别可以使用数字或者符号来进行权限的变更。</p><h4 id="_1-4-1-chmod命令使用数字修改文件权限" tabindex="-1"><a class="header-anchor" href="#_1-4-1-chmod命令使用数字修改文件权限" aria-hidden="true">#</a> 1.4.1 chmod命令使用数字修改文件权限</h4><p>Linux 系统中，文件的基本权限由 9 个字符组成，以 <code>rwxrw-r-x</code> 为例，我们可以使用数字来代表各个权限，各个权限与数字的对应关系如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>r --<span class="token operator">&gt;</span> <span class="token number">4</span>
w --<span class="token operator">&gt;</span> <span class="token number">2</span>
x --<span class="token operator">&gt;</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于这 9 个字符分属 3 类用户，因此每种用户身份包含 3 个权限（r、w、x），通过将 3 个权限对应的数字累加，最终得到的值即可作为每种用户所具有的权限。</p><p>拿 rwxrw-r-x 来说，所有者、所属组和其他人分别对应的权限值为：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>所有者 <span class="token operator">=</span> rwx <span class="token operator">=</span> <span class="token number">4</span>+2+1 <span class="token operator">=</span> <span class="token number">7</span>
所属组 <span class="token operator">=</span> rw- <span class="token operator">=</span> <span class="token number">4</span>+2 <span class="token operator">=</span> <span class="token number">6</span>
其他人 <span class="token operator">=</span> r-x <span class="token operator">=</span> <span class="token number">4</span>+1 <span class="token operator">=</span> <span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以，此权限对应的权限值就是 765。</p><p>使用数字修改文件权限的 chmod 命令基本格式为：</p><p><code>[root@localhost ~]# chmod [-R] 权限值 文件名</code></p><ul><li>-R（注意是大写）选项表示连同子目录中的所有文件，也都修改设定的权限。</li></ul><p>例如，使用如下命令，即可完成对 .bashrc 目录文件的权限修改：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ls -al .bashrc</span>
-rw-r--r--. <span class="token number">1</span> root root <span class="token number">176</span> Sep <span class="token number">22</span> <span class="token number">2004</span> .bashrc
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># chmod 777 .bashrc</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ls -al .bashrc</span>
-rwxrwxrwx. <span class="token number">1</span> root root <span class="token number">176</span> Sep <span class="token number">22</span> <span class="token number">2004</span> .bashrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再举个例子，通常我们以 Vim 编辑 Shell 文件批处理文件后，文件权限通常是 rw-r--r--（644），那么，如果要将该文件变成可执行文件，并且不让其他人修改此文件，则只需将此文件的权限该为 rwxr-xr-x（755）即可。</p><p><strong>修改整个文件夹里面的所有文件的所有者、所属组、其他用户都具有可读可写可 执行权限。</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># chmod -R 777 .bashrc</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_1-4-2-chmod命令使用字母修改文件权限" tabindex="-1"><a class="header-anchor" href="#_1-4-2-chmod命令使用字母修改文件权限" aria-hidden="true">#</a> 1.4.2 chmod命令使用字母修改文件权限</h4><p>既然文件的基本权限就是 3 种用户身份（所有者、所属组和其他人）搭配 3 种权限（rwx），chmod 命令中用 u、g、o 分别代表 3 种身份，还用 a 表示全部的身份（all 的缩写）。另外，chmod 命令仍使用 r、w、x 分别表示读、写、执行权限。</p><p>使用字母修改文件权限的 chmod 命令，其基本格式如图所示。</p><figure><img src="https://i0.hdslb.com/bfs/album/d23d9415f6b458accf29eba74ba0c53de5fe8cce.png" alt="image-20220819133048560" tabindex="0" loading="lazy"><figcaption>image-20220819133048560</figcaption></figure><p>例如，如果我们要设定 .bashrc 文件的权限为 rwxr-xr-x，则可执行如下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># chmod u=rwx,go=rx .bashrc</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ls -al .bashrc</span>
-rwxr-xr-x. <span class="token number">1</span> root root <span class="token number">176</span> Sep <span class="token number">22</span> <span class="token number">2004</span> .bashrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再举个例子，如果想要增加 .bashrc 文件的每种用户都可做写操作的权限，可以使用如下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ls -al .bashrc</span>
-rwxr-xr-x. <span class="token number">1</span> root root <span class="token number">176</span> Sep <span class="token number">22</span> <span class="token number">2004</span> .bashrc
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># chmod a+w .bashrc</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ls -al .bashrc</span>
-rwxrwxrwx. <span class="token number">1</span> root root <span class="token number">176</span> Sep <span class="token number">22</span> <span class="token number">2004</span> .bashrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>实际还是以数字修改为主</p></blockquote><h3 id="_1-5-chown-改变所有者和所属组" tabindex="-1"><a class="header-anchor" href="#_1-5-chown-改变所有者和所属组" aria-hidden="true">#</a> 1.5 chown 改变所有者和所属组</h3><p>chown 命令，可以认为是 &quot;change owner&quot; 的缩写，主要用于修改文件（或目录）的所有者，除此之外，这个命令也可以修改文件（或目录）的所属组。</p><p>当只需要修改所有者时，可使用如下 chown 命令的基本格式：</p><p><code>[root@localhost ~]# chown [-R] 所有者 文件或目录</code></p><ul><li>-R（注意大写）选项表示连同子目录中的所有文件，都更改所有者。</li></ul><p>如果需要同时更改所有者和所属组，chown 命令的基本格式为：</p><p><code>[root@localhost ~]# chown [-R] 所有者:所属组 文件或目录</code></p><p>注意，在 chown 命令中，所有者和所属组中间也可以使用点（.），但会产生一个问题，如果用户在设定账号时加入了小数点（例如 zhangsan.temp），就会造成系统误判。因此，建议大家使用冒号连接所有者和所属组。</p><p>当然，chown 命令也支持单纯的修改文件或目录的所属组，例如 <code>chown :group install.log</code> 就表示修改 install.log 文件的所属组，但修改所属组通常使用 chgrp 命令，因此并不推荐大家使用 chown 命令。</p><p>另外需要注意的一点是，使用 chown 命令修改文件或目录的所有者（或所属者）时，要保证使用者用户（或用户组）存在，否则该命令无法正确执行，会提示 &quot;invalid user&quot; 或者 &quot;invaild group&quot;。</p><p>【例 1】<br> 其实，修改文件的所有者，更多时候是为了得到更高的权限，举一个实例：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># touch file</span>
<span class="token comment">#由root用户创建file文件</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ll file</span>
-rw-r--r--. <span class="token number">1</span> root root <span class="token number">0</span> Apr <span class="token number">17</span> 05:12 <span class="token function">file</span>
<span class="token comment">#文件的所有者是root，普通用户user对这个文件拥有只读权限</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># chown user file</span>
<span class="token comment">#修改文件的所有者</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ll file</span>
-rw-r--r--. <span class="token number">1</span> user root <span class="token number">0</span> Apr <span class="token number">17</span> 05:12 <span class="token function">file</span>
<span class="token comment">#所有者变成了user用户，这时user用户对这个文件就拥有了读、写权限</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，通过修改 file 文件的所有者，user 用户从其他人身份（只对此文件有读取权限）转变成了所有者身份，对此文件拥有读和写权限。</p><p>【例 2】<br> Linux 系统中，用户等级权限的划分是非常清楚的，root 用户拥有最高权限，可以修改任何文件的权限，而普通用户只能修改自己文件的权限（所有者是自己的文件），例如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># cd /home/user</span>
<span class="token comment">#进入user用户的家目录</span>
<span class="token punctuation">[</span>root@localhost user<span class="token punctuation">]</span><span class="token comment"># touch test</span>
<span class="token comment">#由root用户新建文件test</span>
<span class="token punctuation">[</span>root@localhost user<span class="token punctuation">]</span><span class="token comment"># ll test</span>
-rw-r--r--. <span class="token number">1</span> root root <span class="token number">0</span> Apr <span class="token number">17</span> 05:37 <span class="token builtin class-name">test</span>
<span class="token comment">#文件所有者和所属组都是root用户</span>
<span class="token punctuation">[</span>root@localhost user<span class="token punctuation">]</span><span class="token comment"># su - user</span>
<span class="token comment">#切换为user用户</span>
<span class="token punctuation">[</span>user@localhost ~<span class="token punctuation">]</span>$ <span class="token function">chmod</span> <span class="token number">755</span> <span class="token builtin class-name">test</span>
chmod:更改<span class="token string">&quot;test&quot;</span>的权限：不允许的操作 <span class="token comment">#user用户不能修改test文件的权限</span>
<span class="token punctuation">[</span>user@localhost ~<span class="token punctuation">]</span>$ <span class="token builtin class-name">exit</span>
<span class="token comment">#退回到root身份</span>
<span class="token punctuation">[</span>root@localhost user<span class="token punctuation">]</span><span class="token comment"># chown user test</span>
<span class="token comment">#由root用户把test文件的所有者改为user用户</span>
<span class="token punctuation">[</span>root@localhost user<span class="token punctuation">]</span><span class="token comment"># su - user</span>
<span class="token comment">#切换为user用户</span>
<span class="token punctuation">[</span>user@localhost ~<span class="token punctuation">]</span>$ <span class="token function">chmod</span> <span class="token number">755</span> <span class="token builtin class-name">test</span>
<span class="token comment">#user用户由于是test文件的所有者，所以可以修改文件的权限</span>
<span class="token punctuation">[</span>user@localhost ~<span class="token punctuation">]</span>$ ll <span class="token builtin class-name">test</span>
-rwxr-xr-x. <span class="token number">1</span> user root <span class="token number">0</span> Apr <span class="token number">17</span> 05:37 <span class="token builtin class-name">test</span>
<span class="token comment">#查看权限</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，user 用户无权更改所有者为 root 用户文件的权限，只有普通用户是这个文件的所有者，才可以修改文件的权限。</p><p>【例 3】</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># chown user:group file</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ll file</span>
-rw-r--r--. <span class="token number">1</span> user group <span class="token number">0</span> Apr <span class="token number">17</span> 05:12 <span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-6-chgrp-改变所属组" tabindex="-1"><a class="header-anchor" href="#_1-6-chgrp-改变所属组" aria-hidden="true">#</a> 1.6 chgrp 改变所属组</h3><p>hgrp 命令用于修改文件（或目录）的所属组。</p><p>为了方便初学者记忆，可以将 chgrp 理解为是 &quot;change group&quot; 的缩写。</p><p>chgrp 命令的用法很简单，其基本格式为：</p><p><code>[root@localhost ~]# chgrp [-R] 所属组 文件名（目录名）</code></p><ul><li>-R（注意是大写）选项长作用于更改目录的所属组，表示更改连同子目录中所有文件的所属组信息。</li></ul><p>使用此命令需要注意的一点是，要被改变的群组名必须是真实存在的，否则命令无法正确执行，会提示 &quot;invaild group name&quot;。</p><p>举个例子，当以 root 身份登录 Linux 系统时，主目录中会存在一个名为 install.log 的文件，我们可以使用如下方法修改此文件的所属组：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># groupadd group1</span>
<span class="token comment">#新建用于测试的群组 group1</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># chgrp group1 install.log</span>
<span class="token comment">#修改install.log文件的所属组为group1</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ll install.log</span>
-rw-r--r--. <span class="token number">1</span> root group1 <span class="token number">78495</span> Nov <span class="token number">17</span> 05:54 install.log
<span class="token comment">#修改生效</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># chgrp testgroup install.log</span>
chgrp: invaild group name <span class="token string">&#39;testgroup&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，在具有 group1 群组的前提下，我们成功修改了 install.log 文件的所属组，但我们再次试图将所属组修改为 testgroup 时，命令执行失败，就是因为系统的 /etc/group 文件中，没有 testgroup 群组。</p><h2 id="_2-搜索查找类" tabindex="-1"><a class="header-anchor" href="#_2-搜索查找类" aria-hidden="true">#</a> 2.搜索查找类</h2><h3 id="_2-1-find-查找文件或者目录" tabindex="-1"><a class="header-anchor" href="#_2-1-find-查找文件或者目录" aria-hidden="true">#</a> 2.1 find 查找文件或者目录</h3><p>Linux find 命令用来在指定目录下查找文件。任何位于参数之前的字符串都将被视为欲查找的目录名。如果使用该命令时，不设置任何参数，则 find 命令将在当前目录下查找子目录与文件。并且将查找到的子目录和文件全部进行显示。find 命令有非常大的灵活性，可以向其指定丰富的搜索条件（如文件权限、属主、属组、文件类型、日期和大小等）来定位系统中的文件和目录。此外，find 还支持对搜索到的结果进行多种类型的命令操作。</p><p><strong>1）基本语法</strong></p><p>find [搜索范围] [选项]</p><p><strong>2）选项说明</strong></p><ul><li>-name&lt;查询方式&gt; 按照指定的文件名查找模式查找文件</li><li>-user&lt;用户名&gt; 查找属于指定用户名所有文件</li><li>-size&lt;文件大小&gt; 按照指定的文件大小查找文件,单位为 <ul><li>b —— 块（512 字节）</li><li>c —— 字节</li><li>w —— 字（2 字节）</li><li>k —— 千字节</li><li>M —— 兆字节</li><li>G —— 吉字节</li></ul></li></ul><p><strong>3）案例实操</strong></p><p>（1）按文件名：根据名称查找/目录下的filename.txt文件。</p><p><code>[root@hadoop101 ~]# find xiyou/ -name &quot;*.txt&quot; </code></p><p>(2) 将当前目录及其子目录下所有文件后缀为 <strong>.c</strong> 的文件列出来</p><p><code>find . -name &quot;*.c&quot;</code></p><p>（3）按拥有者：查找/opt目录下，用户名称为-user的文件</p><p><code>[root@hadoop101 ~]# find xiyou/ -user atguigu </code></p><p>（4）按文件大小：在/home目录下查找大于200m的文件（+n 大于 -n小于 n等于）</p><p><code>[root@hadoop101 ~]find /home -size +204800</code></p><h3 id="_2-2-locate-快速定位文件路径" tabindex="-1"><a class="header-anchor" href="#_2-2-locate-快速定位文件路径" aria-hidden="true">#</a> 2.2 locate 快速定位文件路径</h3><p>Linux locate命令用于查找符合条件的文档，他会去保存文档和目录名称的数据库内，查找合乎范本样式条件的文档或目录。</p><p>一般情况我们只需要输入 <strong>locate your_file_name</strong> 即可查找指定文件。</p><p>Locate 指令无需遍历整个文件系统，查询速度较快。为了保证查询结果的准确 度，管理员必须定期更新 locate 时刻。</p><p><strong>1）基本语法</strong></p><p>​ locate 搜索文件</p><p><strong>2）经验技巧</strong></p><p>locate 与 find 不同: find 是去硬盘找，locate 只在 /var/lib/slocate 资料库中找。</p><p>locate 的速度比 find 快，它并不是真的查找，而是查数据库，一般文件数据库在 /var/lib/slocate/slocate.db 中，所以 locate 的查找并不是实时的，而是以数据库的更新为准，一般是系统自己维护，也可以手工升级数据库 ，命令为：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>updatedb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>3）案例实操</strong></p><p>查询文件夹</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@hadoop101 ~<span class="token punctuation">]</span><span class="token comment"># updatedb</span>
<span class="token punctuation">[</span>root@hadoop101 ~<span class="token punctuation">]</span><span class="token comment">#locate tmp</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>查找 passwd 文件，输入以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@hadoop101 ~<span class="token punctuation">]</span><span class="token comment"># locate passwd</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-3-grep-过滤查找" tabindex="-1"><a class="header-anchor" href="#_2-3-grep-过滤查找" aria-hidden="true">#</a> 2.3 grep 过滤查找</h3><p>Linux grep 命令用于查找文件里符合条件的字符串。</p><p>grep 指令用于查找内容包含指定的范本样式的文件，如果发现某文件的内容符合所指定的范本样式，预设 grep 指令会把含有范本样式的那一列显示出来。若不指定任何文件名称，或是所给予的文件名为 <strong>-</strong>，则 grep 指令会从标准输入设备读取数据。</p><p><strong>基本语法</strong></p><p><code>grep 选项 查找内容 源文件</code></p><ul><li><strong>-n 或 --line-number</strong> : 在显示符合样式的那一行之前，标示出该行的列数编号。</li></ul><p><strong>实例</strong></p><p>1、在当前目录中，查找后缀有 file 字样的文件中包含 test 字符串的文件，并打印出该字符串的行。此时，可以使用如下命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>grep test *file 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查找前缀有“test”的文件包含“test”字符串的文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">grep</span> <span class="token builtin class-name">test</span> test* <span class="token comment">#查找前缀有“test”的文件包含“test”字符串的文件  </span>
testfile1:This a Linux testfile<span class="token operator">!</span> <span class="token comment">#列出testfile1 文件中包含test字符的行  </span>
testfile_2:This is a linux testfile<span class="token operator">!</span> <span class="token comment">#列出testfile_2 文件中包含test字符的行  </span>
testfile_2:Linux <span class="token builtin class-name">test</span> <span class="token comment">#列出testfile_2 文件中包含test字符的行 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、系统报警显示了时间，但是日志文件太大无法直接 cat 查看。(查询含有特定文本的文件，并拿到这些文本所在的行)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">grep</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;2021-10-24 00:01:11&#39;</span> *.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-4-管道符" tabindex="-1"><a class="header-anchor" href="#_2-4-管道符" aria-hidden="true">#</a> 2.4 “|”管道符</h3><blockquote><p>管道符主要用于多重命令处理，前面命令的打印结果作为后面命令的输入。简单点说就是，就像工厂的流水线一样，进行完一道工序后，继续传送给下一道工序处理…</p></blockquote><figure><img src="https://i0.hdslb.com/bfs/album/16d256b0723671e30bec77446903a97ff201a3c6.png" alt="image-20220819143831999" tabindex="0" loading="lazy"><figcaption>image-20220819143831999</figcaption></figure><p><code># cat /etc/passwd | grep /bin/bash</code></p><p>这条命令使用了两个管道，利用第一个管道将cat命令（显示passwd文件的内容）的输出送给grep命令，grep命令找出含有<code>/bin/bash</code>的所有行；</p><p>**例 **</p><p>查找某文件在第几行</p><p><code>[root@hadoop101 ~]# ls | grep -n test</code></p><h3 id="_2-5-wc-计算字数" tabindex="-1"><a class="header-anchor" href="#_2-5-wc-计算字数" aria-hidden="true">#</a> 2.5 wc 计算字数</h3><p>Linux wc命令用于计算字数。</p><p>利用wc指令我们可以计算文件的Byte数、字数、或是列数，若不指定文件名称、或是所给予的文件名为&quot;-&quot;，则wc指令会从标准输入设备读取数据。</p><p><strong>语法</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wc</span> <span class="token punctuation">[</span>-clw<span class="token punctuation">]</span><span class="token punctuation">[</span>--help<span class="token punctuation">]</span><span class="token punctuation">[</span>--version<span class="token punctuation">]</span><span class="token punctuation">[</span>文件<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>-c或--bytes或--chars 只显示Bytes数。</li><li>-l或--lines 显示行数。</li><li>-w或--words 只显示字数。</li><li>--help 在线帮助。</li><li>--version 显示版本信息。</li></ul><p><strong>例1</strong></p><p>在默认的情况下，wc将计算指定文件的行数、字数，以及字节数。使用的命令为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wc testfile 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>先查看testfile文件的内容，可以看到：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> testfile  
Linux networks are becoming <span class="token function">more</span> and <span class="token function">more</span> common, but scurity is often an overlooked  
issue. Unfortunately, <span class="token keyword">in</span> today’s environment all networks are potential hacker targets,  
fro0m tp-secret military research networks to small home LANs.  
Linux Network Securty focuses on securing Linux <span class="token keyword">in</span> a networked environment, where the  
security of the entire network needs to be considered rather than just isolated machines.  
It uses a mix of theory and practicl techniques to teach administrators how to <span class="token function">install</span> and  
use security applications, as well as how the applcations work and why they are necesary. 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 wc统计，结果如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">wc</span> testfile           <span class="token comment"># testfile文件的统计信息  </span>
<span class="token number">3</span> <span class="token number">92</span> <span class="token number">598</span> testfile       <span class="token comment"># testfile文件的行数为3、单词数92、字节数598 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，3 个数字分别表示testfile文件的行数、单词数，以及该文件的字节数。</p><p><strong>例2</strong></p><p>如果想同时统计多个文件的信息，例如同时统计testfile、testfile_1、testfile_2，可使用如下命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wc testfile testfile_1 testfile_2   #统计三个文件的信息 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出结果如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">wc</span> testfile testfile_1 testfile_2  <span class="token comment">#统计三个文件的信息  </span>
<span class="token number">3</span> <span class="token number">92</span> <span class="token number">598</span> testfile                    <span class="token comment">#第一个文件行数为3、单词数92、字节数598  </span>
<span class="token number">9</span> <span class="token number">18</span> <span class="token number">78</span> testfile_1                   <span class="token comment">#第二个文件的行数为9、单词数18、字节数78  </span>
<span class="token number">3</span> <span class="token number">6</span> <span class="token number">32</span> testfile_2                    <span class="token comment">#第三个文件的行数为3、单词数6、字节数32  </span>
<span class="token number">15</span> <span class="token number">116</span> <span class="token number">708</span> 总用量                    <span class="token comment">#三个文件总共的行数为15、单词数116、字节数708 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,167),p=[o];function l(c,i){return s(),a("div",null,p)}const d=n(t,[["render",l],["__file","07 【实操篇-文件权限和搜索查找类命令】.html.vue"]]);export{d as default};
