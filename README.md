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

#### React コンポーネントにおける state とライフサイクルについて

関数コンポーネントをクラスに変換することができます。

React.Component を継承する同名の クラスを作成する。  
render() と呼ばれる空のメソッドを 1 つ追加する。  
関数の中身を render() メソッドに移動する。  
render() 内の props を this.props に書き換える。  
空になった関数の宣言部分を削除する。

```
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

date を props から state に移します：

render() メソッド内の this.props.date を this.state.date に書き換える：

```
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

this.state の初期状態を設定するクラスコンストラクタを追加する：

```
class Clock extends React.Component {
constructor(props) {
super(props);
this.state = {date: new Date()};
}

render() {
return (
<div>
<h1>Hello, world!</h1>
<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
</div>
);
}
}
```

親クラスのコンストラクタへの props の渡し方に注目してください：

```
constructor(props) {
super(props);
this.state = {date: new Date()};
}
```

クラスのコンポーネントは常に props を引数として親クラスのコンストラクタを呼び出す必要があります。

<Clock /> 要素から date プロパティを削除する：

```
ReactDOM.render(
<Clock />,
document.getElementById('root')
);
```

以下のようになります：

```
class Clock extends React.Component {
constructor(props) {
super(props);
this.state = {date: new Date()};
}

render() {
return (
<div>
<h1>Hello, world!</h1>
<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
</div>
);
}
}

ReactDOM.render(
<Clock />,
document.getElementById('root')
);
```

#### クラスにライフサイクルメソッドを追加する

多くのコンポーネントを有するアプリケーションでは、コンポーネントが破棄された場合にそのコンポーネントが占有していたリソースを解放することがとても重要です。  
タイマーを設定したいのは、最初に Clock が DOM として描画されるときです。このことを React では “マウント (mounting)” と呼びます。  
またタイマーをクリアしたいのは、Clock が生成した DOM が削除されるときです。このことを React では “アンマウント (unmounting)” と呼びます。  
コンポーネントクラスで特別なメソッドを宣言することで、コンポーネントがマウントしたりアンマウントしたりした際にコードを実行することができます：

```
class Clock extends React.Component {
constructor(props) {
super(props);
this.state = {date: new Date()};
}

componentDidMount() {
}

componentWillUnmount() {
}

render() {
return (

<div>
<h1>Hello, world!</h1>
<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
</div>
);
}
}
```

これらのメソッドは “ライフサイクルメソッド (lifecycle method)” と呼ばれます。

componentDidMount() メソッドは、出力が DOM にレンダーされた後に実行されます。ここがタイマーをセットアップするのによい場所です：

```
componentDidMount() {
this.timerID = setInterval(
() => this.tick(),
1000
);
}
```

タイマー ID を直接 this 上に（this.timerID として）格納したことに注目してください。  
this.props は React 自体によって設定され、また this.state は特別な意味を持っていますが、何かデータフローに影響しないデータ（タイマー ID のようなもの）を保存したい場合に、追加のフィールドを手動でクラスに追加することは自由です。

タイマーの後片付けは componentWillUnmount() というライフサイクルメソッドで行います：

```
componentWillUnmount() {
clearInterval(this.timerID);
}
```

最後に、Clock コンポーネントが毎秒ごとに実行する tick() メソッドを実装します。

コンポーネントのローカル state の更新をスケジュールするために this.setState() を使用します：

```
class Clock extends React.Component {
constructor(props) {
super(props);
this.state = {date: new Date()};
}

componentDidMount() {
this.timerID = setInterval(
() => this.tick(),
1000
);
}

componentWillUnmount() {
clearInterval(this.timerID);
}

tick() {
this.setState({
date: new Date()
});
}

render() {
return (

<div>
<h1>Hello, world!</h1>
<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
</div>
);
}
}

ReactDOM.render(
<Clock />,
document.getElementById('root')
);
```

これで、この時計は毎秒ごとに時間を刻みます。

何が起こったのかをメソッドが呼び出される順序にそって簡単に振り返ってみましょう：

<Clock /> が ReactDOM.render() に渡されると、React は Clock コンポーネントのコンストラクタを呼び出します。Clock は現在時刻を表示する必要があるので、現在時刻を含んだオブジェクトで this.state を初期化します。あとでこの state を更新していきます。
次に React は Clock コンポーネントの render() メソッドを呼び出します。これにより React は画面に何を表示すべきか知ります。そののちに、React は DOM を Clock のレンダー出力と一致するように更新します。
Clock の出力が DOM に挿入されると、React は componentDidMount() ライフサイクルメソッドを呼び出します。その中で、Clock コンポーネントは毎秒ごとにコンポーネントの tick() メソッドを呼び出すためにタイマーを設定するようブラウザに要求します。
ブラウザは、毎秒ごとに tick() メソッドを呼び出します。その中で Clock コンポーネントは、現在時刻を含んだオブジェクトを引数として setState() を呼び出すことで、UI の更新をスケジュールします。setState() が呼び出されたおかげで、React は state が変わったということが分かるので、render() メソッドを再度呼び出して、画面上に何を表示すべきかを知ります。今回は、render() メソッド内の this.state.date が異なっているので、レンダーされる出力には新しく更新された時間が含まれています。それに従って React は DOM を更新します。
この後に Clock コンポーネントが DOM から削除されることがあれば、React は componentWillUnmount() ライフサイクルメソッドを呼び出し、これによりタイマーが停止します。
