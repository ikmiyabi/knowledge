"use strict";(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[9775],{4516:(s,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e={key:"v-b748215c",path:"/other/shellscript/%E3%82%B9%E3%83%8B%E3%83%9A%E3%83%83%E3%83%88.html",title:"testコマンド",lang:"ja",frontmatter:{},excerpt:"",headers:[{level:2,title:"条件文のコマンド",slug:"条件文のコマンド",children:[]}],filePathRelative:"other/shellscript/スニペット.md",git:{updatedTime:1639532968e3,contributors:[{name:"bamv-ikeda",email:"ikeda@bamv.co.jp",commits:1}]}}},1958:(s,n,a)=>{a.r(n),a.d(n,{default:()=>l});const e=(0,a(6252).uE)('<h1 id="testコマンド" tabindex="-1"><a class="header-anchor" href="#testコマンド" aria-hidden="true">#</a> testコマンド</h1><h2 id="条件文のコマンド" tabindex="-1"><a class="header-anchor" href="#条件文のコマンド" aria-hidden="true">#</a> 条件文のコマンド</h2><table><thead><tr><th style="text-align:center;">オプション</th><th style="text-align:center;">意味</th></tr></thead><tbody><tr><td style="text-align:center;"><code>test -d [directry]</code></td><td style="text-align:center;">ディレクトリが存在する時</td></tr><tr><td style="text-align:center;"><code>test -f [file]</code></td><td style="text-align:center;">ファイルが存在する時</td></tr><tr><td style="text-align:center;"><code>test -z [string]</code></td><td style="text-align:center;">文字列が空の時</td></tr><tr><td style="text-align:center;"><code>test -n [string]</code></td><td style="text-align:center;">文字列が空でない場合</td></tr></tbody></table><p>#!/bin/bash</p><h1 id="coding-utf-8-unix" tabindex="-1"><a class="header-anchor" href="#coding-utf-8-unix" aria-hidden="true">#</a> -<em>- coding: utf-8-unix -</em>-</h1><h1 id="実行ファイルのディレクトリを取得する" tabindex="-1"><a class="header-anchor" href="#実行ファイルのディレクトリを取得する" aria-hidden="true">#</a> 実行ファイルのディレクトリを取得する</h1><p>BINDIR=$(cd $(dirname $0) &amp;&amp; pwd) echo 1:$(dirname $0) echo 2:$(cd $(dirname $0) &amp;&amp; pwd) echo 3:$BINDIR PROGRAM_NAME=<code>basename $0</code> echo 4:$PROGRAM_NAME</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 実行ファイルのディレクトリを取得する</span>\n<span class="token assign-left variable">BINDIR</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">cd</span> <span class="token punctuation">$(</span>dirname $0<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">pwd</span><span class="token variable">)</span></span>\n<span class="token builtin class-name">echo</span> <span class="token number">1</span>:<span class="token variable"><span class="token variable">$(</span><span class="token function">dirname</span> $0<span class="token variable">)</span></span>\n<span class="token builtin class-name">echo</span> <span class="token number">2</span>:<span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">cd</span> <span class="token punctuation">$(</span>dirname $0<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">pwd</span><span class="token variable">)</span></span>\n<span class="token builtin class-name">echo</span> <span class="token number">3</span>:<span class="token variable">$BINDIR</span>\n<span class="token assign-left variable">PROGRAM_NAME</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token function">basename</span> $0<span class="token variable">`</span></span>\n<span class="token builtin class-name">echo</span> <span class="token number">4</span>:<span class="token variable">$PROGRAM_NAME</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> SHELL_VARIABLE:<span class="token variable">$SHELL_VARIABLE</span>\n<span class="token builtin class-name">echo</span> ENVIORONMENT_VARIABLE:<span class="token variable">$ENVIORONMENT_VARIABLE</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">TARGET_DATE</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$1</span>&quot;</span>\n<span class="token builtin class-name">echo</span> <span class="token variable">$TARGET_DATE</span>\n\n<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">${SKIP_MONTHLY_DBJOB}</span>&quot;</span> <span class="token operator">!=</span> <span class="token string">&quot;yes&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>\n    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable"><span class="token variable">`</span>gdate -d <span class="token string">&quot;<span class="token variable">${TARGET_DATE}</span>&quot;</span> +%d<span class="token variable">`</span></span> <span class="token operator">=</span> <span class="token string">&quot;01&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>\n        <span class="token assign-left variable">TARGET_MONTH</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span>gdate -d <span class="token string">&quot;<span class="token variable">${TARGET_DATE}</span> -1 month&quot;</span> +%Y/%m<span class="token variable">`</span></span>\n    <span class="token keyword">fi</span>\n    <span class="token builtin class-name">echo</span> <span class="token variable">$TARGET_MONTH</span>\n<span class="token keyword">fi</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">dirname</span> $0<span class="token variable">)</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 通常のif文</span>\n<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token number">1</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token punctuation">]</span> <span class="token punctuation">;</span> <span class="token keyword">then</span>\n  <span class="token builtin class-name">echo</span> <span class="token string">&#39;if&gt; trueです&#39;</span>\n<span class="token keyword">fi</span>\n\n<span class="token comment"># testコマンド使用</span>\n<span class="token keyword">if</span> <span class="token builtin class-name">test</span> <span class="token number">1</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token punctuation">;</span> <span class="token keyword">then</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;test&gt; trueです&#39;</span><span class="token punctuation">;</span> <span class="token keyword">fi</span>\n\n<span class="token comment"># ワンライナーで</span>\n<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token number">1</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token punctuation">]</span> <span class="token punctuation">;</span> <span class="token keyword">then</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;oneliner&gt; trueです&#39;</span><span class="token punctuation">;</span> <span class="token keyword">fi</span>\n\n<span class="token comment"># &amp;&amp;使用</span>\n<span class="token punctuation">[</span> <span class="token number">1</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;use&quot;&amp;&amp;&quot;&gt; trueです&#39;</span>\n\n<span class="token comment"># if/else文</span>\n<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token number">1</span> <span class="token operator">=</span> <span class="token number">2</span> <span class="token punctuation">]</span> <span class="token punctuation">;</span> <span class="token keyword">then</span>\n  <span class="token builtin class-name">echo</span> <span class="token string">&#39;if/else&gt; trueです&#39;</span>\n<span class="token keyword">else</span>\n  <span class="token builtin class-name">echo</span> <span class="token string">&#39;if/else&gt; falseです&#39;</span>\n<span class="token keyword">fi</span>\n\n<span class="token comment"># ワンライナーでif/else文</span>\n<span class="token punctuation">[</span> <span class="token number">1</span> <span class="token operator">=</span> <span class="token number">2</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;oneliner&gt; trueです&#39;</span> <span class="token operator">||</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;oneliner&gt; falseです&#39;</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">pwd</span><span class="token variable">)</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\n<span class="token assign-left variable">PROGRAM</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$1</span>&quot;</span>\n<span class="token builtin class-name">.</span> <span class="token string">&quot;./<span class="token variable">$PROGRAM</span>&quot;</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">SHELL_VARIABLE</span><span class="token operator">=</span><span class="token string">&quot;シェル変数です&quot;</span>\n<span class="token assign-left variable">ENVIORONMENT_VARIABLE</span><span class="token operator">=</span><span class="token string">&quot;環境変数です&quot;</span>\n\n<span class="token builtin class-name">export</span> ENVIORONMENT_VARIABLE\n\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\n<span class="token assign-left variable">foo</span><span class="token operator">=</span>bar\n<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$foo</span>&quot;</span>\n<span class="token builtin class-name">echo</span> <span class="token string">&#39;$foo&#39;</span>\n<span class="token builtin class-name">echo</span> <span class="token variable">$foo</span>\n\n<span class="token assign-left variable">hoge</span><span class="token operator">=</span>fuga\n<span class="token builtin class-name">echo</span> <span class="token string">&quot;hoge|<span class="token variable">$hoge</span>&quot;</span>\n<span class="token builtin class-name">echo</span> <span class="token string">&#39;hoge|$hoge&#39;</span>\n<span class="token builtin class-name">echo</span> hoge<span class="token operator">|</span><span class="token variable">$hoge</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\n<span class="token builtin class-name">echo</span> fruitの値を代入して下さい\n<span class="token builtin class-name">read</span> fruit\n<span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$fruit</span>&quot;</span> <span class="token keyword">in</span>\n  <span class="token string">&quot;apple&quot;</span> <span class="token punctuation">)</span> <span class="token string">&quot;りんごです&quot;</span><span class="token punctuation">;</span><span class="token punctuation">;</span>\n  <span class="token string">&quot;orage&quot;</span> <span class="token punctuation">)</span> <span class="token string">&quot;みかんです&quot;</span><span class="token punctuation">;</span><span class="token punctuation">;</span>\n  <span class="token string">&quot;banana&quot;</span> <span class="token punctuation">)</span> <span class="token string">&quot;バナナです&quot;</span><span class="token punctuation">;</span><span class="token punctuation">;</span>\n<span class="token keyword">esac</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>\n<span class="token comment"># coding: utf-8-unix</span>\n\n<span class="token builtin class-name">echo</span> <span class="token string">&#39;$0: &#39;</span> <span class="token variable">$0</span>\n<span class="token builtin class-name">echo</span> <span class="token string">&#39;$1: &#39;</span> <span class="token variable">$1</span>\n<span class="token builtin class-name">echo</span> <span class="token string">&#39;$2: &#39;</span> <span class="token variable">$2</span>\n<span class="token builtin class-name">echo</span> <span class="token string">&#39;$3: &#39;</span> <span class="token variable">$3</span>\n<span class="token builtin class-name">echo</span> <span class="token string">&#39;$4: &#39;</span> <span class="token variable">$4</span>\n<span class="token builtin class-name">echo</span> <span class="token string">&#39;$#: &#39;</span> <span class="token variable">$#</span>\n<span class="token builtin class-name">echo</span> <span class="token string">&#39;$*: &#39;</span> <span class="token variable">$*</span>\n<span class="token builtin class-name">echo</span> <span class="token string">&#39;$@: &#39;</span> <span class="token variable">$@</span>\n<span class="token builtin class-name">echo</span> <span class="token string">&#39;$?: &#39;</span> <span class="token variable">$?</span>\n<span class="token builtin class-name">echo</span> <span class="token string">&#39;$$: &#39;</span> <span class="token variable">$$</span>\n<span class="token builtin class-name">echo</span> <span class="token string">&#39;$!: &#39;</span> <span class="token variable">$!</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>',18),p={},l=(0,a(3744).Z)(p,[["render",function(s,n){return e}]])},3744:(s,n)=>{n.Z=(s,n)=>{const a=s.__vccOpts||s;for(const[s,e]of n)a[s]=e;return a}}}]);