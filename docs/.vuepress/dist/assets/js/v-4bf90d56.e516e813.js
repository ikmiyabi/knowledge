"use strict";(self.webpackChunkvuepress_sample2=self.webpackChunkvuepress_sample2||[]).push([[4861],{8311:(e,a,t)=>{t.r(a),t.d(a,{data:()=>i});const i={key:"v-4bf90d56",path:"/other/other/Web%E3%82%B5%E3%83%BC%E3%83%90%E3%83%BC%E3%81%AE%E3%81%97%E3%81%8F%E3%81%BF.html",title:"Webサーバーのしくみ",lang:"ja",frontmatter:{},excerpt:"",headers:[{level:2,title:"Webサーバーとは",slug:"webサーバーとは",children:[]},{level:2,title:"CGI(Common Gateway Interface)",slug:"cgi-common-gateway-interface",children:[]}],filePathRelative:"other/other/Webサーバーのしくみ.md",git:{updatedTime:1639532968e3,contributors:[{name:"bamv-ikeda",email:"ikeda@bamv.co.jp",commits:1}]}}},3780:(e,a,t)=>{t.r(a),t.d(a,{default:()=>r});const i=(0,t(6252).uE)('<h1 id="webサーバーのしくみ" tabindex="-1"><a class="header-anchor" href="#webサーバーのしくみ" aria-hidden="true">#</a> Webサーバーのしくみ</h1><h2 id="webサーバーとは" tabindex="-1"><a class="header-anchor" href="#webサーバーとは" aria-hidden="true">#</a> Webサーバーとは</h2><ul><li>httpというプロトコル（ルール）に従って送信されたリクエスト（要求）に対して、レスポンス（応答）を返すソフトウェアのこと</li><li>Webサーバーがインストールされたコンピュータ自体のことも同様にWebサーバーと呼ぶ。</li></ul><h2 id="cgi-common-gateway-interface" tabindex="-1"><a class="header-anchor" href="#cgi-common-gateway-interface" aria-hidden="true">#</a> CGI(Common Gateway Interface)</h2><ul><li>Webサーバー上でユーザープログラムを動作させる仕組み</li><li>CGIプログラムはクライアントからのリクエストに応じて起動する</li><li>CGIプログラムへの情報はコマンドライン引数を環境変数、標準入力で入力する <ul><li>このデータはhttpヘッダで始まる必要がある</li><li>htmlの割合が圧倒的に多い</li></ul></li><li>Webサーバーが外部のプログラムを呼び出すという流れのため負荷が大きい <ul><li>代替としてアプリケーションサーバーを別に起動し、フロントのhttpサーバーをリバースプロキシとして動作させる、などの手段が多く取られる</li></ul></li></ul><p><img src="_image/server.png" alt="server"></p>',6),l={},r=(0,t(3744).Z)(l,[["render",function(e,a){return i}]])},3744:(e,a)=>{a.Z=(e,a)=>{const t=e.__vccOpts||e;for(const[e,i]of a)t[e]=i;return t}}}]);