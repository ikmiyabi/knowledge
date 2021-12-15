"use strict";(self.webpackChunkvuepress_sample2=self.webpackChunkvuepress_sample2||[]).push([[3576],{8980:(l,i,a)=>{a.r(i),a.d(i,{data:()=>u});const u={key:"v-5591dfff",path:"/infra/aws/Amazon%20Auroa%E3%81%AE%E7%89%B9%E5%BE%B4.html",title:"AmazonAuroraってどんなもの？",lang:"ja",frontmatter:{},excerpt:"",headers:[{level:2,title:"特徴",slug:"特徴",children:[]}],filePathRelative:"infra/aws/Amazon Auroaの特徴.md",git:{updatedTime:1639532968e3,contributors:[{name:"bamv-ikeda",email:"ikeda@bamv.co.jp",commits:1}]}}},6800:(l,i,a)=>{a.r(i),a.d(i,{default:()=>r});const u=(0,a(6252).uE)('<h1 id="amazonauroraってどんなもの" tabindex="-1"><a class="header-anchor" href="#amazonauroraってどんなもの" aria-hidden="true">#</a> AmazonAuroraってどんなもの？</h1><h2 id="特徴" tabindex="-1"><a class="header-anchor" href="#特徴" aria-hidden="true">#</a> 特徴</h2><ul><li>ハイパフォーマンス</li><li>スケーラブル</li><li>シームレス</li><li>金額 <ul><li>今まではr3までだった</li><li>ちょっと値段高かったけど小さく始められるようになった</li></ul></li><li>ストレージ（一番違いが大きいところ）</li><li>500G超えるとデータベース止めてー拡張してー <ul><li>なくなった！</li></ul></li><li>シームレスにスケールするストレージ <ul><li>シームレス（継ぎ目のない、断続的な）</li></ul></li><li>ストレージノード</li><li>S3のバックアップ <ul><li>ストリーミングバックアップ</li><li>少し前のデータがすぐにリストアできる</li><li>スナップショットをとるみたいな概念がそもそもない</li></ul></li><li>セキュリティ <ul><li>VPCのやつしか使えない</li></ul></li><li>フェイルオーバーがすごい速い <ul><li>今までのMySQLと比べ、</li></ul></li><li>MySQLではマスターとスレイブみたいな言い方をするが、Auroraでは異なる <ul><li>AuroraではWriterとReaderという</li></ul></li><li>意図的にシステムクラッシュを起こせる <ul><li>本来はデータベースがクラッシュした時のテストは難しいが、サポートしてくれている</li></ul></li><li>AuroraはMySQLみたいだが、実際は異なる <ul><li>裏側でクラウドに最適化している</li></ul></li><li>インスタンスリソースをちゃんと使い切る設計になっている <ul><li>急に数値が高くなっても問題はないとのこと</li></ul></li><li>1トランザクションで大量の更新や削除を行ったりする場合 <ul><li>並列で処理してくれる構造になっている</li><li>細かいクエリを分割して送った方がパフォーマンスが出る</li></ul></li><li>RDSのスナップショットからオーロラにマイグレートできる <ul><li>5.6のみ</li></ul></li><li>Readerを作った段階で勝手に負荷分散してくれる <ul><li>読み込みと書き込みの部分が抽象化される</li></ul></li><li>Lambda Function Integrationとは <ul><li>ロードデータ</li></ul></li><li>Fast DDL <ul><li>Alter Tableが速い</li></ul></li><li>ストリーミングでバックアップしてるので間違えてupdateしちゃったなのもすぐできる</li></ul><p>※フェイルオーバーとは 現用系コンピュータサーバ/システム/ネットワークで異常事態が発生したとき、 自動的に冗長な待機系コンピュータサーバ/システム/ネットワークに切り換える機能を意味する</p>',4),e={},r=(0,a(3744).Z)(e,[["render",function(l,i){return u}]])},3744:(l,i)=>{i.Z=(l,i)=>{const a=l.__vccOpts||l;for(const[l,u]of i)a[l]=u;return a}}}]);