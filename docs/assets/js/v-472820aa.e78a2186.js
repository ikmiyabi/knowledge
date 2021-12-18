"use strict";(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[6058],{910:(n,a,s)=>{s.r(a),s.d(a,{data:()=>e});const e={key:"v-472820aa",path:"/frontend/vue/vue%E3%81%AE%E5%9F%BA%E7%A4%8E.html",title:"",lang:"ja",frontmatter:{},excerpt:"",headers:[{level:2,title:"Vueインスタンスとは",slug:"vueインスタンスとは",children:[]},{level:2,title:"Vueインスタンスのプロパティ",slug:"vueインスタンスのプロパティ",children:[]},{level:2,title:"Mustache(マスタッシュ構文)",slug:"mustache-マスタッシュ構文",children:[]},{level:2,title:"差分レンダリング",slug:"差分レンダリング",children:[]}],filePathRelative:"frontend/vue/vueの基礎.md",git:{updatedTime:1639532968e3,contributors:[{name:"bamv-ikeda",email:"ikeda@bamv.co.jp",commits:1}]}}},4474:(n,a,s)=>{s.r(a),s.d(a,{default:()=>c});var e=s(6252),t=s(3577);const p=(0,e.uE)('<h2 id="vueインスタンスとは" tabindex="-1"><a class="header-anchor" href="#vueインスタンスとは" aria-hidden="true">#</a> Vueインスタンスとは</h2><p>Vue.jsの様々な機能をまとめたVueインスタンス</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  el<span class="token operator">:</span> #app\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="vueインスタンスのプロパティ" tabindex="-1"><a class="header-anchor" href="#vueインスタンスのプロパティ" aria-hidden="true">#</a> Vueインスタンスのプロパティ</h2><table><thead><tr><th style="text-align:center;">プロパティ</th><th style="text-align:center;">内容</th></tr></thead><tbody><tr><td style="text-align:center;">el</td><td style="text-align:center;">vueインスタンスを結びつけるHTMLを指定</td></tr><tr><td style="text-align:center;">data</td><td style="text-align:center;">vue.jsで扱うデータを保持</td></tr><tr><td style="text-align:center;">methods</td><td style="text-align:center;">vueで使用するメソッドを定義</td></tr><tr><td style="text-align:center;">computed</td><td style="text-align:center;">算出プロパティを定義</td></tr><tr><td style="text-align:center;">template</td><td style="text-align:center;">コンポーネントを定義</td></tr><tr><td style="text-align:center;">components</td><td style="text-align:center;">外部モジュールとして取り込んだコンポーネントを登録</td></tr></tbody></table><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  el<span class="token operator">:</span> #app\n  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      count<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="mustache-マスタッシュ構文" tabindex="-1"><a class="header-anchor" href="#mustache-マスタッシュ構文" aria-hidden="true">#</a> Mustache(マスタッシュ構文)</h2>',7),l=(0,e.uE)('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>\n  <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;app&quot;</span><span class="token operator">&gt;</span>\n    <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span>text<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>\n  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="差分レンダリング" tabindex="-1"><a class="header-anchor" href="#差分レンダリング" aria-hidden="true">#</a> 差分レンダリング</h2><p>HTMLの一部が変更された時、データが変更された部分だけレンダリングする機能</p><p>仮想DOM: 差分レンダリングを行うために保持しているデータ ※Document Object Model</p>',4),r={},c=(0,s(3744).Z)(r,[["render",function(n,a){return(0,e.wg)(),(0,e.iD)(e.HY,null,[p,(0,e._)("p",null,(0,t.zw)(n.text)+"のような記述のこと",1),l],64)}]])},3744:(n,a)=>{a.Z=(n,a)=>{const s=n.__vccOpts||n;for(const[n,e]of a)s[n]=e;return s}}}]);