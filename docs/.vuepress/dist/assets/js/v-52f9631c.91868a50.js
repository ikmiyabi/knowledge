"use strict";(self.webpackChunkvuepress_sample2=self.webpackChunkvuepress_sample2||[]).push([[3730],{2854:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-52f9631c",path:"/frontend/javascript/JavaScript%E3%81%A7URL%E3%82%A8%E3%83%B3%E3%82%B3%E3%83%BC%E3%83%89.html",title:"JavaScriptでのURLエンコード",lang:"ja",frontmatter:{},excerpt:"",headers:[],filePathRelative:"frontend/javascript/JavaScriptでURLエンコード.md",git:{updatedTime:1639532968e3,contributors:[{name:"bamv-ikeda",email:"ikeda@bamv.co.jp",commits:1}]}}},2604:(n,s,a)=>{a.r(s),a.d(s,{default:()=>l});var p=a(6252);const t=(0,p.uE)('<h1 id="javascriptでのurlエンコード" tabindex="-1"><a class="header-anchor" href="#javascriptでのurlエンコード" aria-hidden="true">#</a> JavaScriptでのURLエンコード</h1><ul><li>方法は以下の二つ <ul><li>encodeURI(param)を用いる</li><li>encodeURIComponent(param)を用いる</li></ul></li><li>違いは+や:などの特殊文字もエンコードするかどうか <ul><li>+や:などもエンコードさせたい場合はencodeURIComponentを使う（通常これを用いることの方が多いはず）</li></ul></li><li>他escape()というものもあるがこれは少々特殊で、全角文字列をUnicodeに変換する</li></ul><p>[実例]</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// encodeURIComponentを用いる（特殊文字もURLエンコード）</span>\n<span class="token keyword">function</span> <span class="token function">show1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n<span class="token keyword">var</span> param <span class="token operator">=</span> <span class="token string">&#39;test+あ?@test.jp&#39;</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>param<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token function">show1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// encodeURIComponentを用いる（特殊文字はURLエンコードしない）</span>\n<span class="token keyword">function</span> <span class="token function">show2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n<span class="token keyword">var</span> param <span class="token operator">=</span> <span class="token string">&#39;test+あ?@test.jp&#39;</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">encodeURI</span><span class="token punctuation">(</span>param<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token function">show2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// escapeを用いる（特殊文字はURLエンコード、２バイト文字はUnicodeへ）</span>\n<span class="token keyword">function</span> <span class="token function">show3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n<span class="token keyword">var</span> param <span class="token operator">=</span> <span class="token string">&#39;test+あ?@test.jp&#39;</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">escape</span><span class="token punctuation">(</span>param<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token function">show3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>[結果]</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>test%2B%E3%81%82%3F%40test.jp\ntest+%E3%81%82?@test.jp\ntest+%u3042%3F@test.jp\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>[参考]</p>',7),e={href:"http://www.techscore.com/blog/2013/10/15/javascript%E3%81%AE%E3%82%A8%E3%82%B9%E3%82%B1%E3%83%BC%E3%83%97%E3%81%82%E3%82%8C%E3%81%93%E3%82%8C/",target:"_blank",rel:"noopener noreferrer"},c=(0,p.Uk)("JavaScriptのエスケープあれこれ"),o={},l=(0,a(3744).Z)(o,[["render",function(n,s){const a=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.iD)(p.HY,null,[t,(0,p._)("ul",null,[(0,p._)("li",null,[(0,p._)("a",e,[c,(0,p.Wm)(a)])])])],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);