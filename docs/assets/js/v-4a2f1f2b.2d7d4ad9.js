"use strict";(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[396],{7466:(e,a,s)=>{s.r(a),s.d(a,{data:()=>d});const d={key:"v-4a2f1f2b",path:"/other/linux/Linux%E3%81%AB%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC%E3%82%92%E8%BF%BD%E5%8A%A0%E3%81%99%E3%82%8B.html",title:"Linuxにユーザー追加する",lang:"ja",frontmatter:{},excerpt:"",headers:[{level:2,title:"参考",slug:"参考",children:[]},{level:2,title:"ユーザーを確認する方法",slug:"ユーザーを確認する方法",children:[]},{level:2,title:"ユーザー追加方法",slug:"ユーザー追加方法",children:[{level:3,title:"useraddとadduserの違い",slug:"useraddとadduserの違い",children:[]}]},{level:2,title:"ユーザーを削除する方法",slug:"ユーザーを削除する方法",children:[]},{level:2,title:"sudo権限を付ける",slug:"sudo権限を付ける",children:[]}],filePathRelative:"other/linux/Linuxにユーザーを追加する.md",git:{updatedTime:1639532968e3}}},8041:(e,a,s)=>{s.r(a),s.d(a,{default:()=>l});const d=(0,s(6252).uE)('<h1 id="linuxにユーザー追加する" tabindex="-1"><a class="header-anchor" href="#linuxにユーザー追加する" aria-hidden="true">#</a> Linuxにユーザー追加する</h1><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><p>https://qiita.com/Tooooomin/items/c063cee80227a5f1d95b</p><h2 id="ユーザーを確認する方法" tabindex="-1"><a class="header-anchor" href="#ユーザーを確認する方法" aria-hidden="true">#</a> ユーザーを確認する方法</h2><ul><li>ユーザー情報は<code>/etc/passwd</code>に定義されている。</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">less</span> /etc/passwd\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="ユーザー追加方法" tabindex="-1"><a class="header-anchor" href="#ユーザー追加方法" aria-hidden="true">#</a> ユーザー追加方法</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 管理者権限でユーザーを追加するコマンド</span>\n<span class="token function">sudo</span> adduser user_name\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="useraddとadduserの違い" tabindex="-1"><a class="header-anchor" href="#useraddとadduserの違い" aria-hidden="true">#</a> useraddとadduserの違い</h3><p>上記ユーザー追加方法にて、ユーザーを追加するコマンドとして<code>adduser</code>と記載しましたが、実はこれの他に<code>useradd</code>という別のユーザ追加コマンドが存在します。両者の違いは主に以下の通りです。</p><ul><li><p>adduser</p><ul><li>対話形式で新規ユーザーを作成する。</li><li>ログイシェルなどの設定がデフォルトで良い感じになる。</li></ul></li><li><p>useradd</p><ul><li>新規ユーザーを作成する。</li><li>パスワード、ログインシェル、ホームディレクトリ等の設定はオプションにて行うことが出来る。</li></ul></li></ul><p>どちらを使った方が良いかについては状況によるとは思いますが、useraddのデメリットとして、特に何も考慮せずuseraddしてしまった場合、後々面倒なため基本的にはadduserを使用した方が良い。 あと、この紛らわしいコマンドを作成した人は悔い改めて。</p><h2 id="ユーザーを削除する方法" tabindex="-1"><a class="header-anchor" href="#ユーザーを削除する方法" aria-hidden="true">#</a> ユーザーを削除する方法</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> deluser username\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="sudo権限を付ける" tabindex="-1"><a class="header-anchor" href="#sudo権限を付ける" aria-hidden="true">#</a> sudo権限を付ける</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># sudo権限を持つユーザーにて実行</span>\n<span class="token function">sudo</span> visudo\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>',16),n={},l=(0,s(3744).Z)(n,[["render",function(e,a){return d}]])},3744:(e,a)=>{a.Z=(e,a)=>{const s=e.__vccOpts||e;for(const[e,d]of a)s[e]=d;return s}}}]);