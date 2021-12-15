"use strict";(self.webpackChunkvuepress_sample2=self.webpackChunkvuepress_sample2||[]).push([[3155],{7476:(s,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e={key:"v-10b65757",path:"/middleware/git/git%E3%81%AE%E8%A8%AD%E5%AE%9A.html",title:"gitの設定ファイルの参照場所",lang:"ja",frontmatter:{},excerpt:"",headers:[{level:2,title:"色の設定",slug:"色の設定",children:[]},{level:2,title:"aliasの設定",slug:"aliasの設定",children:[]},{level:2,title:"シェルにgitブランチを表示させる",slug:"シェルにgitブランチを表示させる",children:[]}],filePathRelative:"middleware/git/gitの設定.md",git:{updatedTime:1639532968e3,contributors:[{name:"bamv-ikeda",email:"ikeda@bamv.co.jp",commits:1}]}}},3599:(s,n,a)=>{a.r(n),a.d(n,{default:()=>l});const e=(0,a(6252).uE)('<h1 id="gitの設定ファイルの参照場所" tabindex="-1"><a class="header-anchor" href="#gitの設定ファイルの参照場所" aria-hidden="true">#</a> gitの設定ファイルの参照場所</h1><ul><li>ググれば色々出てくるけどとりあえず公式を見ること</li></ul><p>https://git-scm.com/book/ja/v1/Git-%E3%81%AE%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%9E%E3%82%A4%E3%82%BA-Git-%E3%81%AE%E8%A8%AD%E5%AE%9A</p><p>要約すると、</p><ul><li>最初に見るのは/etc/gitconfig — systemの設定はココ</li><li>次に見るのは~/.gitconfig — globalの設定はココ</li><li>最後に見るのは.git/config — localの設定はここ</li></ul><p>git configコマンド使えば楽に設定できる</p><p>例）</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> config --global user.name <span class="token string">&quot;John Doe&quot;</span>\n<span class="token function">git</span> config --global user.email johndoe@example.com\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="色の設定" tabindex="-1"><a class="header-anchor" href="#色の設定" aria-hidden="true">#</a> 色の設定</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> config --global color.diff auto\n<span class="token function">git</span> config --global color.status auto\n<span class="token function">git</span> config --global color.branch auto\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="aliasの設定" tabindex="-1"><a class="header-anchor" href="#aliasの設定" aria-hidden="true">#</a> aliasの設定</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># git stやgit co でコマンド実行できるようになる</span>\n<span class="token function">git</span> config --global alias.co <span class="token string">&quot;checkout&quot;</span>\n<span class="token function">git</span> config --global alias.st <span class="token string">&quot;status&quot;</span>\n<span class="token function">git</span> config --global alias.br <span class="token string">&quot;branch&quot;</span>\n<span class="token function">git</span> config --global alias.cm <span class="token string">&quot;commit&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="シェルにgitブランチを表示させる" tabindex="-1"><a class="header-anchor" href="#シェルにgitブランチを表示させる" aria-hidden="true">#</a> シェルにgitブランチを表示させる</h2><ul><li>.bashrcに以下を追加する</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># gitブランチを表示する</span>\n<span class="token keyword">function</span> <span class="token function-name function">parse_git_branch</span> <span class="token punctuation">{</span>\n    <span class="token function">git</span> branch --no-color <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> /dev/null <span class="token operator">|</span> <span class="token function">sed</span> -e <span class="token string">&#39;/^[^*]/d&#39;</span> -e <span class="token string">&#39;s/* \\(.*\\)/ [\\1]/&#39;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">function</span> <span class="token function-name function">promps</span> <span class="token punctuation">{</span>\n    <span class="token builtin class-name">local</span>  <span class="token assign-left variable">BLUE</span><span class="token operator">=</span><span class="token string">&quot;\\[<span class="token entity" title="\\e">\\e</span>[1;34m\\]&quot;</span>\n    <span class="token builtin class-name">local</span>  <span class="token assign-left variable">RED</span><span class="token operator">=</span><span class="token string">&quot;\\[<span class="token entity" title="\\e">\\e</span>[1;31m\\]&quot;</span>\n    <span class="token builtin class-name">local</span>  <span class="token assign-left variable">GREEN</span><span class="token operator">=</span><span class="token string">&quot;\\[<span class="token entity" title="\\e">\\e</span>[1;32m\\]&quot;</span>\n    <span class="token builtin class-name">local</span>  <span class="token assign-left variable">WHITE</span><span class="token operator">=</span><span class="token string">&quot;\\[<span class="token entity" title="\\e">\\e</span>[00m\\]&quot;</span>\n    <span class="token builtin class-name">local</span>  <span class="token assign-left variable">GRAY</span><span class="token operator">=</span><span class="token string">&quot;\\[<span class="token entity" title="\\e">\\e</span>[1;37m\\]&quot;</span>\n\n    <span class="token keyword">case</span> <span class="token environment constant">$TERM</span> <span class="token keyword">in</span>\n        xterm*<span class="token punctuation">)</span> <span class="token assign-left variable">TITLEBAR</span><span class="token operator">=</span><span class="token string">&#39;\\[\\e]0;\\W\\007\\]&#39;</span><span class="token punctuation">;</span><span class="token punctuation">;</span>\n        *<span class="token punctuation">)</span>      <span class="token assign-left variable">TITLEBAR</span><span class="token operator">=</span><span class="token string">&quot;&quot;</span><span class="token punctuation">;</span><span class="token punctuation">;</span>\n    <span class="token keyword">esac</span>\n    <span class="token builtin class-name">local</span> <span class="token assign-left variable">BASE</span><span class="token operator">=</span><span class="token string">&quot;\\u@\\h&quot;</span>\n    <span class="token assign-left variable"><span class="token environment constant">PS1</span></span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">${TITLEBAR}</span><span class="token variable">${GREEN}</span><span class="token variable">${BASE}</span><span class="token variable">${WHITE}</span>:<span class="token variable">${BLUE}</span>\\W<span class="token variable">${GREEN}</span>\\<span class="token variable"><span class="token variable">$(</span>parse_git_branch<span class="token variable">)</span></span><span class="token variable">${BLUE}</span>\\$<span class="token variable">${WHITE}</span> &quot;</span>\n<span class="token punctuation">}</span>\npromps\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div>',15),t={},l=(0,a(3744).Z)(t,[["render",function(s,n){return e}]])},3744:(s,n)=>{n.Z=(s,n)=>{const a=s.__vccOpts||s;for(const[s,e]of n)a[s]=e;return a}}}]);