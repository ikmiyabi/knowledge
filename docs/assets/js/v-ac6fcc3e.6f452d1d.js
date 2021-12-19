"use strict";(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[7138],{7984:(a,e,n)=>{n.r(e),n.d(e,{data:()=>s});const s={key:"v-ac6fcc3e",path:"/infra/aws/Amazon%20corretto%E3%81%AE%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB.html",title:"Amazon Correttoのインストール",lang:"ja",frontmatter:{},excerpt:"",headers:[{level:2,title:"Homebrew Caskを使用してインストールする(Macの場合)",slug:"homebrew-caskを使用してインストールする-macの場合",children:[{level:3,title:"Homebrewがインストールされていない人はこちらからインストール",slug:"homebrewがインストールされていない人はこちらからインストール",children:[]},{level:3,title:"設定が反映されない場合",slug:"設定が反映されない場合",children:[]}]}],filePathRelative:"infra/aws/Amazon correttoのインストール.md",git:{updatedTime:1639532968e3}}},5033:(a,e,n)=>{n.r(e),n.d(e,{default:()=>k});var s=n(6252);const r=(0,s._)("h1",{id:"amazon-correttoのインストール",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#amazon-correttoのインストール","aria-hidden":"true"},"#"),(0,s.Uk)(" Amazon Correttoのインストール")],-1),l=(0,s._)("h2",{id:"homebrew-caskを使用してインストールする-macの場合",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#homebrew-caskを使用してインストールする-macの場合","aria-hidden":"true"},"#"),(0,s.Uk)(" Homebrew Caskを使用してインストールする(Macの場合)")],-1),o={id:"homebrewがインストールされていない人はこちらからインストール",tabindex:"-1"},t=(0,s._)("a",{class:"header-anchor",href:"#homebrewがインストールされていない人はこちらからインストール","aria-hidden":"true"},"#",-1),c=(0,s.Uk)(" Homebrewがインストールされていない人は"),p={href:"https://brew.sh/index_ja",target:"_blank",rel:"noopener noreferrer"},i=(0,s.Uk)("こちら"),m=(0,s.Uk)("からインストール"),b=(0,s.uE)('<blockquote><p>HomebrewはMacOS用のパッケージマネージャで、Homebrew Caskはその拡張機能。 普通に使う分にはMacのCLIでパッケージ（ソフトウェア）のインストールや管理ができるツールという認識で良い。</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>brew cask <span class="token function">install</span> corretto\n<span class="token comment"># javaのバージョンを確認する</span>\njava --version\n<span class="token comment"># 以下のように表示されればOK</span>\n<span class="token comment"># openjdk 11.0.5 2019-10-15 LTS</span>\n<span class="token comment"># OpenJDK Runtime Environment Corretto-11.0.5.10.2 (build 11.0.5+10-LTS)</span>\n<span class="token comment"># OpenJDK 64-Bit Server VM Corretto-11.0.5.10.2 (build 11.0.5+10-LTS, mixed mode)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="設定が反映されない場合" tabindex="-1"><a class="header-anchor" href="#設定が反映されない場合" aria-hidden="true">#</a> 設定が反映されない場合</h3><ul><li>環境設定のJAVA_HOMEを確認する</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># java_homeコマンドにより、現在のJAVA_HOMEの設定を確認する</span>\n/usr/libexec/java_home\n\n<span class="token comment"># バージョンを指定してMacにインストールされているJava11のJDKを表示する</span>\n/usr/libexec/java_home -v <span class="token number">11</span>\n<span class="token comment"># 以下のようにamazon-corretto11のjdkが表示されることを確認する</span>\n<span class="token comment"># /Library/Java/JavaVirtualMachines/amazon-corretto-11.jdk/Contents/Home</span>\n\n<span class="token comment"># JAVA_HOMEにjava11(amazon corretto 11)を設定</span>\n<span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span>/usr/libexec/java_home -v <span class="token number">11</span><span class="token variable">`</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>(参考)</p>',6),u={href:"https://qiita.com/seri_k/items/e978c1339ce51f13e297",target:"_blank",rel:"noopener noreferrer"},d=(0,s.Uk)("MacでのJAVA_HOME設定 "),h={},k=(0,n(3744).Z)(h,[["render",function(a,e){const n=(0,s.up)("OutboundLink");return(0,s.wg)(),(0,s.iD)(s.HY,null,[r,l,(0,s._)("h3",o,[t,c,(0,s._)("a",p,[i,(0,s.Wm)(n)]),m]),b,(0,s._)("ul",null,[(0,s._)("li",null,[(0,s._)("a",u,[d,(0,s.Wm)(n)])])])],64)}]])},3744:(a,e)=>{e.Z=(a,e)=>{const n=a.__vccOpts||a;for(const[a,s]of e)n[a]=s;return n}}}]);