# Amazon Coretto11のインストール方法
## (Mac)インストール方法
1. 下記リンクからインストーラをダウンロードする

https://docs.aws.amazon.com/ja_jp/corretto/latest/corretto-11-ug/downloads-list.html

2. ダウンロードしたpkgファイルを実行する

ファイル名の例）amazon-corretto-11.0.3.7.1-macosx-x64.pkg

3. ウィザードの指示に従い、インストールを進める

4. インストールが完了したら、Amazon Coretto11がインストールされていることを確認する

```zsh
java -version
```

下記画像のように表示されていればOK

### MacでJavaのバージョンを切り替える方法

1. まず、Macにインストールされている全てのJavaのバージョンを確認する

```
/usr/libexec/java_home -V
```

（補足）
`/usr/libexec/java_home` はインストールされているJDKのホームディレクトリのパスを表示してくれるコマンド。
オプションなしだと、最新のJDKのホームディレクトリのパスを表示。
`-V` オプションでインストールされているJDKのバージョンの一覧を表示。
`-v` オプションで、指定したバージョンのJDKのホームディレクトリのパスを表示。
※コマンドの詳細は `man java_home` で確認できる。





2. exportコマンドでパスを通す

- .zshrc（または.bashrc）に以下を追記する

```
export JAVA_HOME$(/usr/libexec/java_home -v 11)
export PATH=$JAVA_HOME/bin:$PATH
```

- Javaのバージョンが11になっていることを確認する

```
java -version
```

### (Windows)インストール方法

下記リンクを参照

https://docs.aws.amazon.com/ja_jp/corretto/latest/corretto-11-ug/windows-7-install.html
