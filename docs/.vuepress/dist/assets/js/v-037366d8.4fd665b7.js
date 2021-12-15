"use strict";(self.webpackChunkvuepress_sample2=self.webpackChunkvuepress_sample2||[]).push([[282],{2464:(n,t,e)=>{e.r(t),e.d(t,{data:()=>a});const a={key:"v-037366d8",path:"/mobile/swift/swift%E4%BA%8B%E5%A7%8B%E3%82%81.html",title:"swiftメモ",lang:"ja",frontmatter:{},excerpt:"",headers:[{level:2,title:"デリゲート(delegate)",slug:"デリゲート-delegate",children:[]},{level:2,title:"フォルダの構成",slug:"フォルダの構成",children:[]},{level:2,title:"NotificationCenterの使い方",slug:"notificationcenterの使い方",children:[]}],filePathRelative:"mobile/swift/swift事始め.md",git:{updatedTime:1639532968e3,contributors:[{name:"bamv-ikeda",email:"ikeda@bamv.co.jp",commits:1}]}}},8166:(n,t,e)=>{e.r(t),e.d(t,{default:()=>l});const a=(0,e(6252).uE)('<h1 id="swiftメモ" tabindex="-1"><a class="header-anchor" href="#swiftメモ" aria-hidden="true">#</a> swiftメモ</h1><ul><li>delegateについて</li><li>push通知について</li><li>UserNotification</li><li>@escapeについて(非同期)</li><li>extension</li><li>appdelegateの使い所</li><li>UNUserNotificationcenter.current() <ul><li>アプリまたはアプリ拡張の共有ユーザー</li><li>通知センターにインスタンスを返す</li></ul></li></ul><h2 id="デリゲート-delegate" tabindex="-1"><a class="header-anchor" href="#デリゲート-delegate" aria-hidden="true">#</a> デリゲート(delegate)</h2><ol><li>プロトコル <ul><li>任せる処理をメソッドとして定義</li></ul></li><li>処理を任せるクラス <ul><li>処理の流れを記述</li></ul></li><li>処理を任されるクラス <ul><li>デリゲートメソッドを実装</li></ul></li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>TableView.delegate <span class="token operator">=</span> self\n// TableViewインスタンスのデリゲート先をViewController<span class="token punctuation">(</span>今のクラス<span class="token punctuation">)</span>に設定している\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="フォルダの構成" tabindex="-1"><a class="header-anchor" href="#フォルダの構成" aria-hidden="true">#</a> フォルダの構成</h2><table><thead><tr><th style="text-align:center;">ファイル</th><th style="text-align:center;">内容</th></tr></thead><tbody><tr><td style="text-align:center;">AppDelegete</td><td style="text-align:center;">アプリの状態に応じて動作する処理</td></tr><tr><td style="text-align:center;">ViewController</td><td style="text-align:center;">画面に関する処理</td></tr><tr><td style="text-align:center;">Main.storybord</td><td style="text-align:center;">画面を編集するファイル</td></tr><tr><td style="text-align:center;">Assets</td><td style="text-align:center;">アイコンなどを保存</td></tr><tr><td style="text-align:center;">LaunchScreen</td><td style="text-align:center;">アプリが立ち上がったときに表示される画面</td></tr><tr><td style="text-align:center;">info.plist</td><td style="text-align:center;">アプリに関する設定をまとめるファイル</td></tr></tbody></table><h2 id="notificationcenterの使い方" tabindex="-1"><a class="header-anchor" href="#notificationcenterの使い方" aria-hidden="true">#</a> NotificationCenterの使い方</h2><ol><li>NotificationCenterに通知を登録する</li></ol><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token class-name">NotificationCenter</span><span class="token punctuation">.</span><span class="token keyword">default</span><span class="token punctuation">.</span><span class="token function">addObserver</span><span class="token punctuation">(</span><span class="token keyword">self</span><span class="token punctuation">,</span>\n                   selector<span class="token punctuation">:</span> <span class="token other-directive property">#selector</span><span class="token punctuation">(</span><span class="token function">type</span><span class="token punctuation">(</span>of<span class="token punctuation">:</span> <span class="token keyword">self</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">notified</span><span class="token punctuation">(</span>notification<span class="token punctuation">:</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n                   name<span class="token punctuation">:</span> <span class="token class-name">Notification</span><span class="token punctuation">.</span><span class="token class-name">Name</span><span class="token punctuation">.</span><span class="token class-name">UIApplicationDidBecomeActive</span><span class="token punctuation">,</span>\n                   object<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>',10),s={},l=(0,e(3744).Z)(s,[["render",function(n,t){return a}]])},3744:(n,t)=>{t.Z=(n,t)=>{const e=n.__vccOpts||n;for(const[n,a]of t)e[n]=a;return e}}}]);