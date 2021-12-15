"use strict";(self.webpackChunkvuepress_sample2=self.webpackChunkvuepress_sample2||[]).push([[1546],{7803:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-06bdfce2",path:"/frontend/javascript/%E3%83%96%E3%83%83%E3%82%AF%E3%83%9E%E3%83%BC%E3%82%AF%E3%83%AC%E3%83%83%E3%83%88%E3%81%AE%E4%BD%9C%E6%88%90.html",title:"ブックマークレットの作成",lang:"ja",frontmatter:{},excerpt:"",headers:[],filePathRelative:"frontend/javascript/ブックマークレットの作成.md",git:{updatedTime:1639532968e3,contributors:[{name:"bamv-ikeda",email:"ikeda@bamv.co.jp",commits:1}]}}},3911:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const t=(0,a(6252).uE)('<h1 id="ブックマークレットの作成" tabindex="-1"><a class="header-anchor" href="#ブックマークレットの作成" aria-hidden="true">#</a> ブックマークレットの作成</h1><ul><li>以下のようなスクリプトをブックマークのURLに登録する</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>javascript<span class="token operator">:</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;ブックマークレット実行！&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li><p>実行方法はブックマークを普通にクリックするだけ</p></li><li><p>documentを引数に渡すと、動的にページに変更を加えることができる</p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// タイトルを変更するブックマークレット</span>\njavascript<span class="token operator">:</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">document</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    document<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">&#39;！！！&#39;</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>',5),p={},e=(0,a(3744).Z)(p,[["render",function(n,s){return t}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);