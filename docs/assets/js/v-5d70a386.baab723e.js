"use strict";(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[5690],{4893:(n,a,s)=>{s.r(a),s.d(a,{data:()=>p});const p={key:"v-5d70a386",path:"/frontend/javascript/jQuery%E3%81%82%E3%82%8C%E3%81%93%E3%82%8C.html",title:"jQueryあれこれ",lang:"ja",frontmatter:{},excerpt:"",headers:[{level:2,title:"ボタンを入力するたびに処理を実行させる処理",slug:"ボタンを入力するたびに処理を実行させる処理",children:[]},{level:2,title:"prop()とattr()の違い",slug:"prop-とattr-の違い",children:[]}],filePathRelative:"frontend/javascript/jQueryあれこれ.md",git:{updatedTime:1639532968e3}}},6157:(n,a,s)=>{s.r(a),s.d(a,{default:()=>d});var p=s(6252);const t=(0,p.uE)('<h1 id="jqueryあれこれ" tabindex="-1"><a class="header-anchor" href="#jqueryあれこれ" aria-hidden="true">#</a> jQueryあれこれ</h1><h2 id="ボタンを入力するたびに処理を実行させる処理" tabindex="-1"><a class="header-anchor" href="#ボタンを入力するたびに処理を実行させる処理" aria-hidden="true">#</a> ボタンを入力するたびに処理を実行させる処理</h2><p>[事例]</p><ul><li>文字入力・削除を行う毎にフォームのメールアドレスチェックを行い、形式が正しいかどうかを判定する</li><li>形式が合っている場合は確定ボタンを活性にする（押せるようにする）</li><li>形式が間違っている場合は確定ボタンを非活性にする（押せないようにする）</li></ul><h2 id="prop-とattr-の違い" tabindex="-1"><a class="header-anchor" href="#prop-とattr-の違い" aria-hidden="true">#</a> prop()とattr()の違い</h2><ul><li>.prop()はプロパティを取得・設定する</li><li>.attr()は属性を取得・設定する</li></ul><p>&lt;参考&gt;</p>',7),e={href:"http://uxmilk.jp/10061",target:"_blank",rel:"noopener noreferrer"},l=(0,p.Uk)("jQueryでチェックボックスをチェック：prop()とattr()の違い"),c=(0,p._)("li",null,[(0,p._)("p",null,"DOMとは何か：DOMを操作してhtmlのタグの内容を変化させる")],-1),u=(0,p._)("li",null,[(0,p._)("p",null,"jQueryの読み込み位置は重要、読み込めていないと未定義となる")],-1),o=(0,p._)("li",null,[(0,p._)("p",null,"onloadで読み込み直後に実行させることができる")],-1),i=(0,p._)("li",null,[(0,p._)("p",null,"下記ようにすればタグ付けしなくても読み込み直後に実行させることができる（全て同じ意味）")],-1),r=(0,p.uE)('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ready</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token comment">// 実行したい処理</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">$</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ready</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token comment">// 実行したい処理</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token comment">// 実行したい処理</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ul><li><p>onchange属性でフォームの内容が削除されたタイミングで変更</p></li><li><p>oninput属性でフォームに文字を入力・削除されるごとのタイミングで変更</p></li><li><p>タグ内のテキストを変更する $(#id_aaa).text(&quot;変更後のテキスト&quot;); $(#id_aaa).text(&quot;&quot;);</p></li><li><p>DOMを削除してタグごと削除する</p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span>#id_aaa<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>classの属性値を変更する</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span>#id_aaa<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&quot;class&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;hoge&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>class属性自体を削除する</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span>#id_aaa<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">removeAttr</span><span class="token punctuation">(</span><span class="token string">&quot;class&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>disabled属性値自体を追加する</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span>#id_aaa<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">prop</span><span class="token punctuation">(</span><span class="token string">&quot;disabled&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>disabled属性自体を追加する</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span>#id_aaa<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">prop</span><span class="token punctuation">(</span><span class="token string">&quot;disabled&quot;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#aaa&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token comment">// id=&quot;aaa&quot;が存在する場合の処理</span>\n<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>\n    <span class="token comment">// id=&quot;aaa&quot;が存在しない場合の処理</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>',11),k={},d=(0,s(3744).Z)(k,[["render",function(n,a){const s=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.iD)(p.HY,null,[t,(0,p._)("ul",null,[(0,p._)("li",null,[(0,p._)("p",null,[(0,p._)("a",e,[l,(0,p.Wm)(s)])])]),c,u,o,i]),r],64)}]])},3744:(n,a)=>{a.Z=(n,a)=>{const s=n.__vccOpts||n;for(const[n,p]of a)s[n]=p;return s}}}]);