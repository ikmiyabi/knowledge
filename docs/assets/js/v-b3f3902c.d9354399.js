"use strict";(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[3204],{8231:(n,s,e)=>{e.r(s),e.d(s,{data:()=>a});const a={key:"v-b3f3902c",path:"/other/linux/%E3%82%B7%E3%83%B3%E3%83%9C%E3%83%AA%E3%83%83%E3%82%AF%E3%83%AA%E3%83%B3%E3%82%AF%E4%BD%9C%E6%88%90.html",title:"",lang:"ja",frontmatter:{},excerpt:"",headers:[{level:2,title:"シンボリックリンクを作成するコマンド",slug:"シンボリックリンクを作成するコマンド",children:[]},{level:2,title:"シンボリックリンクを変更するコマンド",slug:"シンボリックリンクを変更するコマンド",children:[]},{level:2,title:"シンボリックリンクを削除するコマンド",slug:"シンボリックリンクを削除するコマンド",children:[]}],filePathRelative:"other/linux/シンボリックリンク作成.md",git:{updatedTime:1639532968e3,contributors:[{name:"bamv-ikeda",email:"ikeda@bamv.co.jp",commits:1}]}}},3237:(n,s,e)=>{e.r(s),e.d(s,{default:()=>i});const a=(0,e(6252).uE)('<h2 id="シンボリックリンクを作成するコマンド" tabindex="-1"><a class="header-anchor" href="#シンボリックリンクを作成するコマンド" aria-hidden="true">#</a> シンボリックリンクを作成するコマンド</h2><p>ln -s で作成できます。「ln」はファイルやディレクトリにリンクを張るコマンド、「-s」はシンボリックリンクを作成するオプションです。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ln</span> -s hoge hoge-s\n<span class="token comment"># 権限によって sudo 付けます。hogeはファイルのパス、hoge-sはリンク先のパスです。</span>\n<span class="token comment"># hoge-s -&gt; hoge となればok。</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="シンボリックリンクを変更するコマンド" tabindex="-1"><a class="header-anchor" href="#シンボリックリンクを変更するコマンド" aria-hidden="true">#</a> シンボリックリンクを変更するコマンド</h2><p>ln -nfs で変更できます。「-n」はディレクトリとリンクを置き換えるオプション、「-f」は上書きするオプションです。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">ln</span> -nfs hoge hoge-n\n権限によって <span class="token function">sudo</span> 付けます。\nhogeはファイルのパス、hoge-nはリンク先のパスです。\n<span class="token function">ls</span> -la で変更されていることを確認。\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="シンボリックリンクを削除するコマンド" tabindex="-1"><a class="header-anchor" href="#シンボリックリンクを削除するコマンド" aria-hidden="true">#</a> シンボリックリンクを削除するコマンド</h2><p>「unlink」コマンドでシンボリックリンクを削除できます。 「rm」コマンドでも削除できるみたいですが、ミスすると色々恐いので「unlink」コマンドを使います。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ unlink hoge-s\n権限によって <span class="token function">sudo</span> 付けます。\n<span class="token function">ls</span> -la で削除されていることを確認。\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',9),l={},i=(0,e(3744).Z)(l,[["render",function(n,s){return a}]])},3744:(n,s)=>{s.Z=(n,s)=>{const e=n.__vccOpts||n;for(const[n,a]of s)e[n]=a;return e}}}]);