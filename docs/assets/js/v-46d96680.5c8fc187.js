"use strict";(self.webpackChunkvuepress_sample2=self.webpackChunkvuepress_sample2||[]).push([[9299],{6174:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-46d96680",path:"/mobile/swift/%E3%82%B5%E3%82%A4%E3%83%AC%E3%83%B3%E3%83%88%E3%83%97%E3%83%83%E3%82%B7%E3%83%A5%E5%AE%9F%E8%A3%85.html",title:"サイレントプッシュ対応",lang:"ja",frontmatter:{},excerpt:"",headers:[{level:2,title:"サーバ側の対応",slug:"サーバ側の対応",children:[]},{level:2,title:"アプリ側の対応",slug:"アプリ側の対応",children:[]},{level:2,title:"注意点",slug:"注意点",children:[]}],filePathRelative:"mobile/swift/サイレントプッシュ実装.md",git:{updatedTime:1639532968e3,contributors:[{name:"bamv-ikeda",email:"ikeda@bamv.co.jp",commits:1}]}}},6005:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const t=(0,a(6252).uE)('<h1 id="サイレントプッシュ対応" tabindex="-1"><a class="header-anchor" href="#サイレントプッシュ対応" aria-hidden="true">#</a> サイレントプッシュ対応</h1><h2 id="サーバ側の対応" tabindex="-1"><a class="header-anchor" href="#サーバ側の対応" aria-hidden="true">#</a> サーバ側の対応</h2><ul><li>content-availableを有効にする</li><li>apns-push-type: backgroundを指定する</li><li>alertのペイロードを指定しない</li></ul><h2 id="アプリ側の対応" tabindex="-1"><a class="header-anchor" href="#アプリ側の対応" aria-hidden="true">#</a> アプリ側の対応</h2><ul><li>サイレントプッシュ受信時の処理を実装する</li></ul><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token keyword">func</span> <span class="token function-definition function">application</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> application<span class="token punctuation">:</span> <span class="token class-name">UIApplication</span><span class="token punctuation">,</span>\n                 didReceiveRemoteNotification userInfo<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">AnyHashable</span><span class="token punctuation">:</span> <span class="token keyword">Any</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n                 fetchCompletionHandler completionHandler<span class="token punctuation">:</span> <span class="token attribute atrule">@escaping</span> <span class="token punctuation">(</span><span class="token class-name">UIBackgroundFetchResult</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 受信時に行う処理</span>\n    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Received notification : </span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">userInfo</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>\n\n    <span class="token function">completionHandler</span><span class="token punctuation">(</span><span class="token punctuation">.</span>newData<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li>completionHandlerブロックの引数について</li></ul><blockquote><p>completionHandler ブロックの引数には、列挙型 UIBackgroundFetchResult の値を指定します。プッシュ通知では、以下の値を返します。iOS では、この情報をバックグラウンド処理の制御に使用します。</p></blockquote><table><thead><tr><th style="text-align:center;">返す値</th><th style="text-align:center;">意味</th></tr></thead><tbody><tr><td style="text-align:center;">newData</td><td style="text-align:center;">新しいデータを処理できたことを示します。届いたプッシュメッセージが正常に処理できた際に指定します。</td></tr><tr><td style="text-align:center;">noData</td><td style="text-align:center;">例えば、受信処理には成功しましたが、届いたプッシュメッセージに処理対象のデータが存在しないため、データの処理をスキップしたような場合に指定します。</td></tr><tr><td style="text-align:center;">failed</td><td style="text-align:center;">データの処理に失敗したことを示します。</td></tr></tbody></table><p>引用元）https://docs.kii.com/ja/guides/cloudsdk/ios/managing-push-notification/implementation/implementation-notification/</p><h2 id="注意点" tabindex="-1"><a class="header-anchor" href="#注意点" aria-hidden="true">#</a> 注意点</h2><ul><li>アプリはバックグラウンドで通信処理を行うことができないため、通信を行う場合はバックグラウンドで処理を実行させる必要がある</li></ul><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token keyword">var</span> backgroundTaskID<span class="token punctuation">:</span> <span class="token class-name">UIBackgroundTaskIdentifier</span> <span class="token operator">=</span> <span class="token class-name">UIBackgroundTaskIdentifier</span><span class="token punctuation">(</span>rawValue<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">)</span>\n\n<span class="token keyword">func</span> <span class="token function-definition function">application</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> application<span class="token punctuation">:</span> <span class="token class-name">UIApplication</span><span class="token punctuation">,</span>\n                 didReceiveRemoteNotification userInfo<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">AnyHashable</span><span class="token punctuation">:</span> <span class="token keyword">Any</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n                 fetchCompletionHandler completionHandler<span class="token punctuation">:</span> <span class="token attribute atrule">@escaping</span> <span class="token punctuation">(</span><span class="token class-name">UIBackgroundFetchResult</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// バックグラウンドタスクの開始</span>\n    <span class="token keyword">self</span><span class="token punctuation">.</span>backgroundTaskID <span class="token operator">=</span> <span class="token class-name">UIApplication</span><span class="token punctuation">.</span>shared<span class="token punctuation">.</span><span class="token function">beginBackgroundTask</span><span class="token punctuation">(</span>expirationHandler<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">)</span>\n    <span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">appRefresh</span><span class="token punctuation">(</span>fetchCompletionHandler<span class="token punctuation">:</span> completionHandler<span class="token punctuation">)</span>\n\n    <span class="token function">completionHandler</span><span class="token punctuation">(</span><span class="token punctuation">.</span>newData<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">private</span> <span class="token keyword">func</span> <span class="token function-definition function">appRefresh</span><span class="token punctuation">(</span>fetchCompletionHandler completionHandler<span class="token punctuation">:</span> <span class="token attribute atrule">@escaping</span> <span class="token punctuation">(</span><span class="token class-name">UIBackgroundFetchResult</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">do</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 通信処理など</span>\n\n        <span class="token function">completionHandler</span><span class="token punctuation">(</span><span class="token class-name">UIBackgroundFetchResult</span><span class="token punctuation">.</span>newData<span class="token punctuation">)</span>\n        <span class="token class-name">UIApplication</span><span class="token punctuation">.</span>shared<span class="token punctuation">.</span><span class="token function">endBackgroundTask</span><span class="token punctuation">(</span><span class="token keyword">self</span><span class="token punctuation">.</span>backgroundTaskID<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token omit keyword">_</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 例外発生時の処理</span>\n\n        <span class="token function">completionHandler</span><span class="token punctuation">(</span><span class="token class-name">UIBackgroundFetchResult</span><span class="token punctuation">.</span>failed<span class="token punctuation">)</span>\n        <span class="token class-name">UIApplication</span><span class="token punctuation">.</span>shared<span class="token punctuation">.</span><span class="token function">endBackgroundTask</span><span class="token punctuation">(</span><span class="token keyword">self</span><span class="token punctuation">.</span>backgroundTaskID<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div>',13),p={},e=(0,a(3744).Z)(p,[["render",function(n,s){return t}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);