"use strict";(self.webpackChunkvuepress_sample2=self.webpackChunkvuepress_sample2||[]).push([[5051],{2447:(s,a,n)=>{n.r(a),n.d(a,{data:()=>e});const e={key:"v-33cdf9b5",path:"/other/shellscript/date%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89.html",title:"dateコマンド",lang:"ja",frontmatter:{},excerpt:"",headers:[{level:2,title:"dateコマンドについて",slug:"dateコマンドについて",children:[]}],filePathRelative:"other/shellscript/dateコマンド.md",git:{updatedTime:1639532968e3,contributors:[{name:"bamv-ikeda",email:"ikeda@bamv.co.jp",commits:1}]}}},5394:(s,a,n)=>{n.r(a),n.d(a,{default:()=>p});const e=(0,n(6252).uE)('<h1 id="dateコマンド" tabindex="-1"><a class="header-anchor" href="#dateコマンド" aria-hidden="true">#</a> dateコマンド</h1><h2 id="dateコマンドについて" tabindex="-1"><a class="header-anchor" href="#dateコマンドについて" aria-hidden="true">#</a> dateコマンドについて</h2><p>BSD系OS(Unix, Mac)とGNU系OS(Unix)でdateコマンドは異なる</p><p>例）</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token function">date</span> --version <span class="token operator">&gt;</span>/dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token punctuation">;</span> <span class="token keyword">then</span>\n  <span class="token builtin class-name">echo</span> Using GNUdate\n<span class="token keyword">else</span>\n  <span class="token builtin class-name">echo</span> Not Using GNUdate\n<span class="token keyword">fi</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>※GNU版のdateコマンドのみdate --versionが成功する</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token builtin class-name">type</span> gdate <span class="token operator">&gt;</span> /dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span><span class="token punctuation">;</span> <span class="token keyword">then</span>\n  Date <span class="token operator">=</span> gdate\n<span class="token keyword">else</span>\n  Date <span class="token operator">=</span> <span class="token function">date</span>\n<span class="token keyword">fi</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',7),t={},p=(0,n(3744).Z)(t,[["render",function(s,a){return e}]])},3744:(s,a)=>{a.Z=(s,a)=>{const n=s.__vccOpts||s;for(const[s,e]of a)n[s]=e;return n}}}]);