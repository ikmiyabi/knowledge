"use strict";(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[7735],{945:(n,a,s)=>{s.r(a),s.d(a,{data:()=>p});const p={key:"v-13bfe148",path:"/backend/java/%E3%80%90Java8%E3%80%91%E3%83%A9%E3%83%A0%E3%83%80%E5%BC%8F%E3%81%AE%E4%BD%BF%E3%81%84%E6%96%B9.html",title:"【Java8】ラムダ式の使い方",lang:"ja",frontmatter:{},excerpt:"",headers:[{level:2,title:"ラムダ式とは？",slug:"ラムダ式とは",children:[]},{level:2,title:"関数型インターフェースとは？",slug:"関数型インターフェースとは",children:[]},{level:2,title:"実際に使ってみる",slug:"実際に使ってみる",children:[]}],filePathRelative:"backend/java/【Java8】ラムダ式の使い方.md",git:{updatedTime:1639532968e3,contributors:[{name:"bamv-ikeda",email:"ikeda@bamv.co.jp",commits:1}]}}},8797:(n,a,s)=>{s.r(a),s.d(a,{default:()=>t});const p=(0,s(6252).uE)('<h1 id="【java8】ラムダ式の使い方" tabindex="-1"><a class="header-anchor" href="#【java8】ラムダ式の使い方" aria-hidden="true">#</a> 【Java8】ラムダ式の使い方</h1><h2 id="ラムダ式とは" tabindex="-1"><a class="header-anchor" href="#ラムダ式とは" aria-hidden="true">#</a> ラムダ式とは？</h2><ul><li><p>JDK1.8で導入された構文</p></li><li><p>インターフェースを実装したインスタンスの生成を簡単にした式</p></li><li><p>処理を引数に渡せてかんたん！</p></li><li><p>関数方インターフェースの実装を簡潔に書けるようにするためのもの</p></li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@FunctionalInterface</span>\n<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IntFunc</span> <span class="token punctuation">{</span>\n  <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">int</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>ラムダ式を使用しない場合、以下のように書くことになります。</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">IntFunc</span> intFunc1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IntFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token annotation punctuation">@Override</span>\n  <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">return</span> x<span class="token operator">+</span>x<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>ラムダ式に書き換えた場合、以下のようになります。</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">IntFunc</span> intFunc2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span> <span class="token operator">-</span>› <span class="token punctuation">{</span><span class="token keyword">return</span> x<span class="token operator">+</span>x<span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>型を省略できるので以下のように省略できます。</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">IntFunc</span> intFunc3 <span class="token operator">=</span> <span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span><span class="token keyword">return</span> x<span class="token operator">+</span>x<span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">IntFunc</span> intFunc4 <span class="token operator">=</span> x <span class="token operator">-</span>› x<span class="token operator">+</span>x<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>実際に。。。</p><p>shiva-frontend/src/main/java/shiva/frontend/conversion/AbstractConversion.java</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>inquiryList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>inquiry <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>\n    insertInquiryCount <span class="token operator">+=</span> inquiryService<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>inquiry<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    insertEnqueteCount <span class="token operator">+=</span> <span class="token function">registEnquete</span><span class="token punctuation">(</span>inquiry<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="関数型インターフェースとは" tabindex="-1"><a class="header-anchor" href="#関数型インターフェースとは" aria-hidden="true">#</a> 関数型インターフェースとは？</h2><ul><li>抽象メソッドが1つだけ定義されているインターフェース</li></ul><h2 id="実際に使ってみる" tabindex="-1"><a class="header-anchor" href="#実際に使ってみる" aria-hidden="true">#</a> 実際に使ってみる</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// 関数型インターフェース</span>\n<span class="token annotation punctuation">@FunctionalInterface</span>\n<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Runnable</span> <span class="token punctuation">{</span>\n  <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 関数型インターフェースの実装</span>\n<span class="token class-name">Runnable</span> runner <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Runnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token annotation punctuation">@Override</span>\n  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  \t<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello Lambda!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nrunner<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Hello Lambda!</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>ラムダ式を使うと、 Class instance = 引数 -&gt; { 処理 }; のように書ける</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// 関数型インターフェース</span>\n<span class="token class-name">Runnable</span> runner <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello Lambda!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nrunner<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Hello Lambda!</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// 引数ありの場合はカッコを省略できる</span>\n<span class="token class-name">Runnable</span> runner <span class="token operator">=</span> name <span class="token operator">-&gt;</span> <span class="token punctuation">{</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello &quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&quot;!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nrunner<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token string">&quot;Java8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Hello Java8!</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>',21),e={},t=(0,s(3744).Z)(e,[["render",function(n,a){return p}]])},3744:(n,a)=>{a.Z=(n,a)=>{const s=n.__vccOpts||n;for(const[n,p]of a)s[n]=p;return s}}}]);