"use strict";(self.webpackChunkvuepress_sample2=self.webpackChunkvuepress_sample2||[]).push([[6897],{9550:(l,i,e)=>{e.r(i),e.d(i,{data:()=>a});const a={key:"v-7f66b87c",path:"/infra/aws/AWS%E3%82%BB%E3%82%AD%E3%83%A5%E3%83%AA%E3%83%86%E3%82%A3.html",title:"AWSセキュリティ",lang:"ja",frontmatter:{},excerpt:"",headers:[{level:2,title:"AWS責任共有モデル",slug:"aws責任共有モデル",children:[]},{level:2,title:"AWSクラウドのセキュリティ",slug:"awsクラウドのセキュリティ",children:[]},{level:2,title:"AWSの責任範囲",slug:"awsの責任範囲",children:[{level:3,title:"物理的なセキュリティ",slug:"物理的なセキュリティ",children:[]},{level:3,title:"ハイパーバイザーのセキュリティ管理",slug:"ハイパーバイザーのセキュリティ管理",children:[]},{level:3,title:"管理プレーン",slug:"管理プレーン",children:[]},{level:3,title:"APIキーの管理",slug:"apiキーの管理",children:[]}]},{level:2,title:"マネージドでないサービス",slug:"マネージドでないサービス",children:[]},{level:2,title:"マネージドなサービス",slug:"マネージドなサービス",children:[]},{level:2,title:"セキュリティのベストプラクティス",slug:"セキュリティのベストプラクティス",children:[]}],filePathRelative:"infra/aws/AWSセキュリティ.md",git:{updatedTime:1639532968e3,contributors:[{name:"bamv-ikeda",email:"ikeda@bamv.co.jp",commits:1}]}}},7944:(l,i,e)=>{e.r(i),e.d(i,{default:()=>p});var a=e(6252);const r=(0,a.uE)('<h1 id="awsセキュリティ" tabindex="-1"><a class="header-anchor" href="#awsセキュリティ" aria-hidden="true">#</a> AWSセキュリティ</h1><h2 id="aws責任共有モデル" tabindex="-1"><a class="header-anchor" href="#aws責任共有モデル" aria-hidden="true">#</a> AWS責任共有モデル</h2><p>セキュリティにおいてAWS側が責任を負う部分とユーザー側が責任を負う部分を明確にしたモデル</p><ul><li>クラウド内のセキュリティはユーザーが担当する <ul><li>AWSが用意するセキュリティサービスを適切に活用することでセキュリティを管理</li></ul></li><li>クラウド本体のセキュリティはAWSが担当する。</li></ul><p><img src="https://raw.githubusercontent.com/bamv-ikeda/knowledge/master/aws/_image/AWSの責任共有モデル.jpg" alt="AWS責任共有モデル"></p>',5),t=(0,a.Uk)("画像引用元: "),h={href:"https://aws.amazon.com/jp/compliance/shared-responsibility-model/",target:"_blank",rel:"noopener noreferrer"},n=(0,a.Uk)("【公式】AWS責任共有モデル"),d=(0,a.uE)('<h2 id="awsクラウドのセキュリティ" tabindex="-1"><a class="header-anchor" href="#awsクラウドのセキュリティ" aria-hidden="true">#</a> AWSクラウドのセキュリティ</h2><p>AWSセキュリティのメリットは以下の4点</p><ol><li>データの保護</li><li>コンプライアンスの要件の準拠</li><li>コスト削減</li><li>迅速なスケーリング</li></ol><h2 id="awsの責任範囲" tabindex="-1"><a class="header-anchor" href="#awsの責任範囲" aria-hidden="true">#</a> AWSの責任範囲</h2><h3 id="物理的なセキュリティ" tabindex="-1"><a class="header-anchor" href="#物理的なセキュリティ" aria-hidden="true">#</a> 物理的なセキュリティ</h3><ol><li>環境レイヤー <ul><li>自然災害（洪水、異常気象、地震等）などの環境リスクを軽減するための設置場所</li><li>各リージョンのデータセンター群は互いに独立・隔離されている</li></ul></li><li>物理的な境界防御レイヤー <ul><li>保安要員、防御壁、侵入検知などによる物理的な防御</li></ul></li><li>インフラストラクチャレイヤー <ul><li>インフラとして建物や各種機器、それらの運用に関わるシステム</li><li>ユーザーのデータの保護のための発電設備や消火施設</li></ul></li><li>データレイヤー <ul><li>アクセス制限や特権の分離</li></ul></li></ol><h3 id="ハイパーバイザーのセキュリティ管理" tabindex="-1"><a class="header-anchor" href="#ハイパーバイザーのセキュリティ管理" aria-hidden="true">#</a> ハイパーバイザーのセキュリティ管理</h3><p>仮想化を実現するハイパーバイザはAWSがセキュリティを担当</p><p>ハイパーバイザとは</p><blockquote><p>コンピュータ用語における、ハイパーバイザ (hypervisor) とは、コンピュータの仮想化技術のひとつである仮想機械（バーチャルマシン）を実現するための、制御プログラムである。</p></blockquote>',10),u=(0,a.Uk)("引用元: "),s={href:"https://ja.wikipedia.org/wiki/%E3%83%8F%E3%82%A4%E3%83%91%E3%83%BC%E3%83%90%E3%82%A4%E3%82%B6#:~:text=%E3%82%B3%E3%83%B3%E3%83%94%E3%83%A5%E3%83%BC%E3%82%BF%E7%94%A8%E8%AA%9E%E3%81%AB%E3%81%8A%E3%81%91%E3%82%8B%E3%80%81%E3%83%8F%E3%82%A4%E3%83%91%E3%83%BC%E3%83%90%E3%82%A4%E3%82%B6,%E3%81%AE%E3%80%81%E5%88%B6%E5%BE%A1%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0%E3%81%A7%E3%81%82%E3%82%8B%E3%80%82",target:"_blank",rel:"noopener noreferrer"},A=(0,a.Uk)("ハイパーバイザ - Wikipedia"),o=(0,a.uE)('<h3 id="管理プレーン" tabindex="-1"><a class="header-anchor" href="#管理プレーン" aria-hidden="true">#</a> 管理プレーン</h3><p>管理プレーンの保護はユーザーがセキュリティを担当</p><p>※管理プレーンとは、クラウドを管理する面（プレーン）、つまり管理コンソールなどの総称</p><ol><li>IDとパスワードの管理 <ul><li>情報流出によるクラウド利用＆請求はユーザーの過失</li><li>権限の強いアカウントにはMFA（Multi-Factor Authentication、多要素認証）を利用してアカウントの保護が可能</li></ul></li><li>ルートアカウント <ul><li>すべての操作が可能な、最も強い権限のアカウント</li><li>通常作業は別アカウントに適切な権限を割り当てて利用すること</li></ul></li><li>キーペアの管理 <ul><li>EC2などのインスタンスのログインEC2公開鍵暗号方式によるキーペアを利用する</li><li>キーペアは共有するのではなく、利用者ごとに公開鍵を設定するべき</li></ul></li><li>APIキー <ul><li>Webブラウザではユーザー名／パスワード を利用するが、コマンド・プログラムではAPIキー（アクセスキー／シークレットアクセスキー） を利用する。</li><li>APIキーはユーザー単位で発行可能</li><li>ルートアカウントへの発行はリスクが高いため推奨しない。 ソースコードへのAPIキー埋め込みは推奨しない。環境変数や認証ファイルでの設定が適切。</li><li>現在はAPIキーの利用そのものが推奨されていない。IAMの利用が推奨される。</li></ul></li></ol><h3 id="apiキーの管理" tabindex="-1"><a class="header-anchor" href="#apiキーの管理" aria-hidden="true">#</a> APIキーの管理</h3><p>ユースケース | 利用方法 | 認証方法</p><ul><li><p>| - | - Webブラウザ | AWSマネジメントコンソール | ユーザー名/パスワード コマンド | AWS CLI | アクセスキー/シークレットアクセスキー プログラム | AWS SDK | アクセスキー/シークレットアクセスキー</p></li><li><p>APIはユーザー名/パスワードと同等の権限を持つため、ルートアカウントのAPIキーは発行しないこと</p></li><li><p>APIキーはユーザーが適切に管理し、必要な権限のみを付与すること</p></li></ul><h2 id="マネージドでないサービス" tabindex="-1"><a class="header-anchor" href="#マネージドでないサービス" aria-hidden="true">#</a> マネージドでないサービス</h2><p>Amazon EC2やAmazon VPCなどのマネージドでないサービスではユーザーがセキュリティを担当</p><p>※IaaS(Infrastructure as a Service)のAWSサービスはユーザーがroot、Administrator権限を持つため</p><ul><li>EC2などのコンピューティングサービスのOS層以上はユーザーの責任</li><li>ファイアウォール（セキュリティグループ）の設定内容はユーザーの責任</li></ul><h2 id="マネージドなサービス" tabindex="-1"><a class="header-anchor" href="#マネージドなサービス" aria-hidden="true">#</a> マネージドなサービス</h2><p>Amazon RDSやAmazon DynamoDBなどのマネージドサービスではAWSとユーザーでセキュリティを分担</p><ul><li>リソースへのアクセスコントロールと、アカウント認証情報の保護のみがユーザーがセキュリティを担当</li><li>ユーザーから見えないサービスのプラットフォーム部分(OSやDBのパッチ適用、ファイアウォールの設定)はAWSがセキュリティを担当</li></ul><h2 id="セキュリティのベストプラクティス" tabindex="-1"><a class="header-anchor" href="#セキュリティのベストプラクティス" aria-hidden="true">#</a> セキュリティのベストプラクティス</h2><ol><li>転送中のデータの保護 <ul><li>適切なプロトコルや暗号化アルゴリズムを選択する(例：FTPではなくSCPを使用する)</li><li>脆弱性のアル暗号化アルゴリズムを選択しない</li></ul></li><li>蓄積データの保護 <ul><li>蓄積データをサービス外に出力する場合はアクセスコントロールに配慮する(例：DBへの登録時にアプリケーション上でデータの暗号化やマスク処理を行う)</li></ul></li><li>AWS資格情報の保護 <ul><li>ルートアカウントは使用しない</li><li>ユーザーごとにIAMユーザーを作成する</li><li>必要最小限の権限のみを付与する</li></ul></li><li>アプリケーションの安全性の確保 <ul><li>SQLインジェクション、OSコマンドインジェクション、クロスサイトスクリプティングなどの既知の攻撃に対する対策を行う</li><li>IPA(独立行政法人 情報処理推進機構)などから出ている脆弱性関連情報をチェックする</li><li>Amazon Inspectorなどを活用し、定期的な脆弱性診断を行う</li></ul></li></ol>',16),c={},p=(0,e(3744).Z)(c,[["render",function(l,i){const e=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[r,(0,a._)("p",null,[t,(0,a._)("a",h,[n,(0,a.Wm)(e)])]),d,(0,a._)("p",null,[u,(0,a._)("a",s,[A,(0,a.Wm)(e)])]),o],64)}]])},3744:(l,i)=>{i.Z=(l,i)=>{const e=l.__vccOpts||l;for(const[l,a]of i)e[l]=a;return e}}}]);