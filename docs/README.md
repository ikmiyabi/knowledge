---
home: true
heroImage: /images/home.png
heroText: 個人用ナレッジ
tagline:
---

## インストール

<CodeGroup>
<CodeGroupItem title="YARN" active>

```zsh
# インストール
yarn install
# 起動
yarn dev
```

</CodeGroupItem>
<CodeGroupItem title="NPM">

```zsh
# インストール
npm install
# 起動
npm run dev
```

</CodeGroupItem>
</CodeGroup>

## VuePress特有の記法

### 見出し一覧 (TOC)

Markdown

```md
[[toc]]
```

表示

[[toc]]

### カスタムコンテナ

Markdown

```md
::: tip
これはチップです。
:::

::: tip 役立つ情報
tipの後ろに入力した文字がタイトルになります（デフォルトTIP）
:::

::: warning
これは警告です。
:::

::: danger
これは危険な警告です。
:::

::: details 詳細を表示
detailsでアコーディオンを作成できます。
:::
```

表示

::: tip
これはチップです。
:::

::: tip 役立つ情報
tipの後ろに入力した文字がタイトルになります（デフォルトTIP）
:::

::: warning
これは警告です。
:::

::: danger
これは危険な警告です。
:::

::: details 詳細を表示
detailsでアコーディオンを作成できます。
:::

### 行のハイライト付きシンタックスハイライト

```typescript{6}
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({})
export default class extends Vue {
  private highlight: booelan = true
}
```

### コードグループ

<CodeGroup>
<CodeGroupItem title="Java" active>

```java
public class Main {
    public static void main (String[] args) {
        System.out.println("Hello World");
    }
}
```

</CodeGroupItem>
<CodeGroupItem title="Ruby">

```ruby
puts "Hello World";
```

</CodeGroupItem>
<CodeGroupItem title="Python">

```python3
print("HelloWorld")
```

</CodeGroupItem>
</CodeGroup>
