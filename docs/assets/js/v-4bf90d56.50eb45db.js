"use strict";(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[4861],{8311:(e,t,a)=>{a.r(t),a.d(t,{data:()=>l});const l={key:"v-4bf90d56",path:"/other/other/Web%E3%82%B5%E3%83%BC%E3%83%90%E3%83%BC%E3%81%AE%E3%81%97%E3%81%8F%E3%81%BF.html",title:"Webサーバーのしくみ",lang:"ja",frontmatter:{},excerpt:"",headers:[{level:2,title:"Webサーバーとは",slug:"webサーバーとは",children:[]},{level:2,title:"CGI(Common Gateway Interface)",slug:"cgi-common-gateway-interface",children:[]}],filePathRelative:"other/other/Webサーバーのしくみ.md",git:{updatedTime:1639919311e3}}},7502:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const l=(0,a(6252).uE)('<h1 id="webサーバーのしくみ" tabindex="-1"><a class="header-anchor" href="#webサーバーのしくみ" aria-hidden="true">#</a> Webサーバーのしくみ</h1><h2 id="webサーバーとは" tabindex="-1"><a class="header-anchor" href="#webサーバーとは" aria-hidden="true">#</a> Webサーバーとは</h2><ul><li>httpというプロトコル（ルール）に従って送信されたリクエスト（要求）に対して、レスポンス（応答）を返すソフトウェアのこと</li><li>Webサーバーがインストールされたコンピュータ自体のことも同様にWebサーバーと呼ぶ。</li></ul><h2 id="cgi-common-gateway-interface" tabindex="-1"><a class="header-anchor" href="#cgi-common-gateway-interface" aria-hidden="true">#</a> CGI(Common Gateway Interface)</h2><ul><li>Webサーバー上でユーザープログラムを動作させる仕組み</li><li>CGIプログラムはクライアントからのリクエストに応じて起動する</li><li>CGIプログラムへの情報はコマンドライン引数を環境変数、標準入力で入力する <ul><li>このデータはhttpヘッダで始まる必要がある</li><li>htmlの割合が圧倒的に多い</li></ul></li><li>Webサーバーが外部のプログラムを呼び出すという流れのため負荷が大きい <ul><li>代替としてアプリケーションサーバーを別に起動し、フロントのhttpサーバーをリバースプロキシとして動作させる、などの手段が多く取られる</li></ul></li></ul><p><img src="images/server.png" alt="server"></p>',6),i={},r=(0,a(3744).Z)(i,[["render",function(e,t){return l}]])},3744:(e,t)=>{t.Z=(e,t)=>{const a=e.__vccOpts||e;for(const[e,l]of t)a[e]=l;return a}}}]);