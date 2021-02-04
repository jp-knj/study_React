# study_React

### このリポジトリ での学習内容

#### JSX とは何か？

UI がどのような見た目かを記述するために、JSX は React “要素” を生成します。

JSX はコンパイルされた後、JSX の式は通常の JavaScript 関数呼び出しにコンバートされ、JavaScript Object に変換される。  
JSX を if 文や for ループの中で使用したり、変数に代入したり、引数として受け取ったり、関数から返したりすることができる。

属性に JavaScript 式を埋め込むために中括弧を使用することもできます。

```
const element = <img src={user.avatarUrl}></img>;
```

JSX は HTML よりも JavaScript に似ているので  
React DOM は HTML の属性ではなくキャメルケース の命名規則を利用する
JSX では例えば、class → className となり、tabindex → tabIndex となる。

**JSX はインジェクション攻撃を防ぐ**

```
const title = response.potentiallyMaliciousInput;
// This is safe:
const element = <h1>{title}</h1>;
```

レンダーの前に全てが文字列に変換されます。  
XSS (cross-site-scripting) 攻撃の防止に役立ちます。

**レンダーされた要素の更新**
React 要素はイミュータブル(不変)で  
一度要素を作成すると、その子要素もしくは属性を変更することはできません。  
要素は映画の中のひとつのフレームのようなものであり、それは特定のある時点の UI を表します。

UI を更新する唯一の方法は、新しい要素を作成して `ReactDOM.render()` に渡すことです。

**React は必要な箇所のみを更新する**
React DOM は要素とその子要素を以前のものと比較し、  
DOM を望ましい状態へと変えるのに必要なだけの DOM の更新を行います。

#### Components と Props

コンポーネントにより UI を独立した再利用できる部品に分割し  
部品それぞれを分離して考えることができるようになります。  
このページではコンポーネントという概念の導入を行います。

Components は JavaScript の関数と似ています。（“props” と呼ばれる）任意の入力を受け取り、  
画面上に表示すべきものを記述する React 要素を返します。

コンポーネントを定義するシンプルな方法は JavaScript の関数を書くこと：

```
function Welcome(props) {
return <h1>Hello, {props.name}</h1>;
}
```

この関数は、Data を保有する “props”（Property の省略形）というオブジェクトを引数としてひとつ受け取り  
React 要素を返すので、有効な React Component。 JavaScript の関数ですので、このような Component のことを “関数 Component。 (function component)” と呼ぶ。

コンポーネントを定義するために クラスも使用できます：

```
class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}
```

**_ユーザ定義(自家製)のコンポーネントの名前は大文字で始めること_**
ある要素の型が小文字から始まっているような場合、それは <div> や <span> のような組み込みのコンポーネント(既に用意されているコンポーネント)を参照しており  
それぞれ 'div' や 'span' といった文字列に変換されて `React.createElement`に渡されます。一方で <Foo /> のように大文字で始まる型は `React.createElement(Foo)`にコンパイルされ  
JavaScript ファイルにおいて定義,インポートされたコンポーネントを参照します。

Component を命名するときには、大文字から始めるようにしてください。  
もしすでに小文字から始まるコンポーネントを作ってしまっていたら  
JSX 内で利用する前に大文字から始まる変数に代入しておきましょう。

例えば、以下のコードは悪い例になる。

```
import React from 'react';

// 間違った例。これはコンポーネントなので、大文字ではじめなければいけません。
function hello(props) {
// 正しい例。div は HTML タグなので、<div> と書くのは正解です。
return <div>Hello {props.toWhat}</div>;
}

function HelloWorld() {
// 間違った例。大文字ではじまっていないため、React は <hello /> を HTML タグと認識してしまいます。
return <hello toWhat="World" />;
```
