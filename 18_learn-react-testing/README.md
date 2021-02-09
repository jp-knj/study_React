# TDD with Jest and Enzyme

Jest : https://jestjs.io/

## 学習記録としてのメモ

### create-react-appとは？
- npmのpackage
- Create React Applications  
    - 設定(Configuration)  
    - Webpack(有名なバンドラー)  
    - Web Server  

### npxとは？
create-react-appを使用する時,npmではなくnpxを使います。  
最新のVersion(create-react-appのテンプレート)をダウンロードしてくれます。  
依存関係の心配はありません  
npx はnpm5.2+以上  

## Jestについて
- Watch mode
馴染みがある
変更に応じて、テストを実行して、コードの品質を担保する　　
やめたい時は　q　コマンド打つといいよ  
最後のcommitからチェックされるよ  


- How Jest tests are structured
App.test.js見ればわかるけど、  
`import { render, screen } from '@testing-library/react';`でcreate-react-appの外でやってるみたい(3ぱで)

create-react-appはreact17を使ってて、enzyme adapterを相性悪いみたい...
エラー吐き出してるね
`import Adapter from '@wojtekmaj/enzyme-adapter-react-17';`使えば動いた！

## Enzymeについて
toolkitだよ
DOMを通してSearchしてくれるみたい JQuerystyle selectorsみたい?
simple eventsをシュミレートする？

### shallow Rendering
浅いレンダリングってなんだろ？
「1 階層深く」レンダーしてレンダーメソッドが返すものを assert できる
DOMはいらない  

Shallow例:  
```jsx
<div id="form">
 <p>Word here</p>
 <InputFieldComponents/>
 <SubmitButtonComponents/>
</div>
```
Mount例:
```jsx
<div id="form">
 <p>Word here</p>
 <div>
  <span>Enter some text </span>
  <input type="text">
 </div>
 <button type="submit">Submit</button>
</div>
```

### propsとStateをみてみる
valueを触るし、testする

### テストの分類
Unit tests
- functionごとにテスト
統合テスト
- 複数のユニットと一緒に
End-to-end-Tests
- ユーザとのインタラクティぶなやーつ
