"use strict";(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[9545],{5965:(s,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e={key:"v-29708370",path:"/infra/aws/growi%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB.html",title:"AWSの設定",lang:"ja",frontmatter:{},excerpt:"",headers:[{level:2,title:"TL;DR",slug:"tl-dr",children:[]},{level:2,title:"gitのインストール",slug:"gitのインストール",children:[]},{level:2,title:"dockerのインストール",slug:"dockerのインストール",children:[]},{level:2,title:"docker-composeのインストール",slug:"docker-composeのインストール",children:[]}],filePathRelative:"infra/aws/growiインストール.md",git:{updatedTime:1639532968e3}}},3649:(s,n,a)=>{a.r(n),a.d(n,{default:()=>c});const e=(0,a(6252).uE)('<h1 id="awsの設定" tabindex="-1"><a class="header-anchor" href="#awsの設定" aria-hidden="true">#</a> AWSの設定</h1><h2 id="tl-dr" tabindex="-1"><a class="header-anchor" href="#tl-dr" aria-hidden="true">#</a> TL;DR</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> yum update -y\n<span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token function">git</span> -y\n<span class="token function">sudo</span> amazon-linux-extras <span class="token function">install</span> docker -y\n<span class="token function">sudo</span> <span class="token function">curl</span> -L <span class="token string">&quot;https://github.com/docker/compose/releases/download/1.29.1/docker-compose-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> -s<span class="token variable">)</span></span>-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> -m<span class="token variable">)</span></span>&quot;</span> -o /usr/local/bin/docker-compose\n<span class="token function">sudo</span> <span class="token function">chmod</span> +x /usr/local/bin/docker-compose\n<span class="token function">sudo</span> <span class="token function">ln</span> -s /usr/local/bin/docker-compose /usr/bin/docker-compose\n<span class="token function">git</span> clone https://github.com/weseek/growi-docker-compose.git\n<span class="token function">sudo</span> amazon-linux-extras <span class="token function">install</span> docker\n<span class="token function">sudo</span> systemctl start docker\n<span class="token builtin class-name">cd</span> growi-docker-compose\n<span class="token function">vi</span> docker-compose.yml\n<span class="token function">sudo</span> docker-compose up -d\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="gitのインストール" tabindex="-1"><a class="header-anchor" href="#gitのインストール" aria-hidden="true">#</a> gitのインストール</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> yum update\n<span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token function">git</span>\n\n<span class="token comment"># インストールされていることを確認</span>\n<span class="token function">git</span> version\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="dockerのインストール" tabindex="-1"><a class="header-anchor" href="#dockerのインストール" aria-hidden="true">#</a> dockerのインストール</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> amazon-linux-extras <span class="token function">install</span> docker\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="docker-composeのインストール" tabindex="-1"><a class="header-anchor" href="#docker-composeのインストール" aria-hidden="true">#</a> docker-composeのインストール</h2><ul><li>docker-composeの最新バージョンを確認する</li></ul><p><code>https://github.com/docker/compose/releases/</code>にてdocker-composeの最新バージョンを確認</p><ul><li>docker-composeをインストールする</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># URLに最新のバージョンを指定し、docker-composeをインストールする（1.29.1は2021/04/15現在の最新バージョン）</span>\n<span class="token function">sudo</span> <span class="token function">curl</span> -L <span class="token string">&quot;https://github.com/docker/compose/releases/download/1.29.1/docker-compose-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> -s<span class="token variable">)</span></span>-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> -m<span class="token variable">)</span></span>&quot;</span> -o /usr/local/bin/docker-compose\n\n<span class="token function">sudo</span> <span class="token function">chmod</span> +x /usr/local/bin/docker-compose\n\n<span class="token comment"># シンボリックリンクの作成</span>\n<span class="token function">sudo</span> <span class="token function">ln</span> -s /usr/local/bin/docker-compose /usr/bin/docker-compose\n\n<span class="token comment"># インストールされていることを確認</span>\ndocker-compose --version\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>',12),o={},c=(0,a(3744).Z)(o,[["render",function(s,n){return e}]])},3744:(s,n)=>{n.Z=(s,n)=>{const a=s.__vccOpts||s;for(const[s,e]of n)a[s]=e;return a}}}]);