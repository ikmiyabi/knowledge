"use strict";(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[2550],{6445:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-4c3827ea",path:"/backend/ruby/%E3%80%90Ruby%20on%20Rails%E3%80%91%E3%83%90%E3%83%AA%E3%83%87%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%AE%E4%BD%9C%E6%88%90.html",title:"",lang:"ja",frontmatter:{},excerpt:"",headers:[{level:2,title:"バリデーションの作成",slug:"バリデーションの作成",children:[]}],filePathRelative:"backend/ruby/【Ruby on Rails】バリデーションの作成.md",git:{updatedTime:1639532968e3,contributors:[{name:"bamv-ikeda",email:"ikeda@bamv.co.jp",commits:1}]}}},7519:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const e=(0,a(6252).uE)('<h2 id="バリデーションの作成" tabindex="-1"><a class="header-anchor" href="#バリデーションの作成" aria-hidden="true">#</a> バリデーションの作成</h2><ul><li>存在チェックする(presence)</li></ul><div class="language-ruby ext-rb line-numbers-mode"><pre class="language-ruby"><code>validates <span class="token symbol">:column</span><span class="token punctuation">,</span> presence<span class="token punctuation">:</span> <span class="token boolean">true</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>長さを制限する(length)</li></ul><div class="language-ruby ext-rb line-numbers-mode"><pre class="language-ruby"><code>validates <span class="token symbol">:column</span><span class="token punctuation">,</span> maximum<span class="token punctuation">:</span> <span class="token number">255</span>\nvalidates <span class="token symbol">:column</span><span class="token punctuation">,</span> minimum<span class="token punctuation">:</span> <span class="token number">3</span>\nvalidates <span class="token symbol">:column</span><span class="token punctuation">,</span> <span class="token keyword">in</span><span class="token punctuation">:</span> <span class="token number">3.</span><span class="token number">.255</span>\nvalidates <span class="token symbol">:column</span><span class="token punctuation">,</span> is<span class="token punctuation">:</span> <span class="token number">8</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>空を許可する(allow_blank)</li></ul><div class="language-ruby ext-rb line-numbers-mode"><pre class="language-ruby"><code>validates <span class="token symbol">:column</span><span class="token punctuation">,</span> allow_blank<span class="token punctuation">:</span> <span class="token boolean">true</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>数値のみを許可する(numericality)</li></ul><div class="language-ruby ext-rb line-numbers-mode"><pre class="language-ruby"><code>validates <span class="token symbol">:column</span><span class="token punctuation">,</span> numericality<span class="token punctuation">:</span> <span class="token boolean">true</span>\n<span class="token comment"># 整数のみ</span>\nvalidates <span class="token symbol">:column</span><span class="token punctuation">,</span> numericality<span class="token punctuation">:</span> <span class="token punctuation">{</span>only_integer<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>特定のフォーマットにマッチするかどうか</li></ul><div class="language-ruby ext-rb line-numbers-mode"><pre class="language-ruby"><code>validates <span class="token symbol">:column</span><span class="token punctuation">,</span> format<span class="token punctuation">:</span> <span class="token punctuation">{</span> with<span class="token punctuation">:</span> 正規表現 <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>特定のフォーマットにマッチするかどうか</li></ul><div class="language-ruby ext-rb line-numbers-mode"><pre class="language-ruby"><code>validates <span class="token symbol">:column</span><span class="token punctuation">,</span> uniquieness<span class="token punctuation">:</span> <span class="token boolean">true</span>\n<span class="token comment"># 大文字・小文字を区別しない</span>\nvalidates <span class="token symbol">:column</span><span class="token punctuation">,</span> uniquieness<span class="token punctuation">:</span> <span class="token punctuation">{</span> case_sensitive<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>エラーメッセージは <code>message.errors</code> に格納される</li><li>以下はrailsデフォルトのエラーメッセージ表示の書き方</li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>&lt;% if message.errors.any? %&gt;\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>error_explanation<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>&lt;%= pluralize(message.errors.count, &quot;error&quot;) %&gt; prohibited this message from being saved:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>\n\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>\n    &lt;% message.errors.full_messages.each do |message| %&gt;\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>&lt;%= message %&gt;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>\n    &lt;% end %&gt;\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n&lt;% end %&gt;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>',15),l={},t=(0,a(3744).Z)(l,[["render",function(n,s){return e}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}}}]);