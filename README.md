# study_React

### このリポジトリ での学習内容

#### JSX とは何か？

UI がどのような見た目かを記述するために、JSX は React “要素” を生成します。

JSX はコンパイルされた後、JSX の式は通常の JavaScript 関数呼び出しにコンバートされ、JavaScript Object に変換される。  
JSX を if 文や for ループの中で使用したり、変数に代入したり、引数として受け取ったり、関数から返したりすることができる。

属性に JavaScript 式を埋め込むために中括弧を使用することもできます。

```javascript
const element = <img src={user.avatarUrl}></img>;
```

JSX は HTML よりも JavaScript に似ているので  
React DOM は HTML の属性ではなくキャメルケース の命名規則を利用する
JSX では例えば、class → className となり、tabindex → tabIndex となる。

**JSX はインジェクション攻撃を防ぐ**

```javascript
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

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

この関数は、Data を保有する “props”（Property の省略形）というオブジェクトを引数としてひとつ受け取り  
React 要素を返すので、有効な React Component。 JavaScript の関数ですので、このような Component のことを “関数 Component。 (function component)” と呼ぶ。

コンポーネントを定義するために クラスも使用できます：

```javascript
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

```javascript
import React from "react";

// 間違った例。これはコンポーネントなので、大文字ではじめなければいけません。
function hello(props) {
  // 正しい例。div は HTML タグなので、<div> と書くのは正解です。
  return <div>Hello {props.toWhat}</div>;
}

function HelloWorld() {
  // 間違った例。大文字ではじまっていないため、React は <hello /> を HTML タグと認識してしまいます。
  return <hello toWhat="World" />;
}
```

#### React コンポーネントにおける state とライフサイクルについて

関数コンポーネントをクラスに変換することができます。

React.Component を継承する同名の クラスを作成する。  
render() と呼ばれる空のメソッドを 1 つ追加する。  
関数の中身を render() メソッドに移動する。  
render() 内の props を this.props に書き換える。  
空になった関数の宣言部分を削除する。

```javascript
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

```javascript
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

```javascript
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
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

```javascript

  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

```

クラスのコンポーネントは常に props を引数として親クラスのコンストラクタを呼び出す必要があります。

<Clock /> 要素から date プロパティを削除する：

```javascript
ReactDOM.render(<Clock />, document.getElementById("root"));
```

以下のようになります：

```javascript
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
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

ReactDOM.render(<Clock />, document.getElementById("root"));
```

#### クラスにライフサイクルメソッドを追加する

多くのコンポーネントを有するアプリケーションでは、コンポーネントが破棄された場合にそのコンポーネントが占有していたリソースを解放することがとても重要です。  
タイマーを設定したいのは、最初に Clock が DOM として描画されるときです。このことを React では “マウント (mounting)” と呼びます。  
またタイマーをクリアしたいのは、Clock が生成した DOM が削除されるときです。このことを React では “アンマウント (unmounting)” と呼びます。  
コンポーネントクラスで特別なメソッドを宣言することで、コンポーネントがマウントしたりアンマウントしたりした際にコードを実行することができます：

```javascript
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {}

  componentWillUnmount() {}

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

```javascript

componentDidMount() {
  this.timerID = setInterval(
    () => this.tick(),
    1000
  );
}

```

タイマー ID を直接 this 上に（this.timerID として）格納したことに注目してください。  
this.props は React 自体によって設定され、また this.state は特別な意味を持っていますが、
何かデータフローに影響しないデータ（タイマー ID のようなもの）を保存したい場合に、追加のフィールドを手動でクラスに追加することは自由です。

タイマーの後片付けは componentWillUnmount() というライフサイクルメソッドで行います：

```javascript

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

```

最後に、Clock コンポーネントが毎秒ごとに実行する tick() メソッドを実装します。

コンポーネントのローカル state の更新をスケジュールするために this.setState() を使用します：

```javascript
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
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

ReactDOM.render(<Clock />, document.getElementById("root"));
```

これで、この時計は毎秒ごとに時間を刻みます。

何が起こったのかをメソッドが呼び出される順序にそって簡単に振り返ってみましょう：

<Clock /> が ReactDOM.render() に渡されると、React は Clock コンポーネントのコンストラクタを呼び出します。Clock は現在時刻を表示する必要があるので、現在時刻を含んだオブジェクトで this.state を初期化します。あとでこの state を更新していきます。
次に React は Clock コンポーネントの render() メソッドを呼び出します。これにより React は画面に何を表示すべきか知ります。そののちに、React は DOM を Clock のレンダー出力と一致するように更新します。
Clock の出力が DOM に挿入されると、React は componentDidMount() ライフサイクルメソッドを呼び出します。その中で、Clock コンポーネントは毎秒ごとにコンポーネントの tick() メソッドを呼び出すためにタイマーを設定するようブラウザに要求します。
ブラウザは、毎秒ごとに tick() メソッドを呼び出します。その中で Clock コンポーネントは、現在時刻を含んだオブジェクトを引数として setState() を呼び出すことで、UI の更新をスケジュールします。setState() が呼び出されたおかげで、React は state が変わったということが分かるので、render() メソッドを再度呼び出して、画面上に何を表示すべきかを知ります。今回は、render() メソッド内の this.state.date が異なっているので、レンダーされる出力には新しく更新された時間が含まれています。それに従って React は DOM を更新します。
この後に Clock コンポーネントが DOM から削除されることがあれば、React は componentWillUnmount() ライフサイクルメソッドを呼び出し、これによりタイマーが停止します。

#### state を正しく使用する

setState() について知っておくべきことが 3 つあります。

state を直接変更しないこと
例えば、以下のコードではコンポーネントは再レンダーされません：

```javascript
// Wrong
this.state.comment = "Hello";
```

代わりに setState() を使用してください：

```javascript
// Correct
this.setState({ comment: "Hello" });
```

this.state に直接代入してよい唯一の場所はコンストラクタです。

state の更新は非同期に行われる可能性がある
React はパフォーマンスのために、複数の setState() 呼び出しを 1 度の更新にまとめて処理することがあります。

this.props と this.state は非同期に更新されるため、次の state を求める際に、それらの値に依存するべきではありません。

例えば、以下のコードはカウンターの更新に失敗することがあります：

```javascript
// Wrong
this.setState({
  counter: this.state.counter + this.props.increment,
});
```

これを修正するために、オブジェクトではなく関数を受け取る setState() の 2 つ目の形を使用します。その関数は前の state を最初の引数として受け取り、更新が適用される時点での props を第 2 引数として受け取ります：

```javascript
// Correct
this.setState((state, props) => ({
  counter: state.counter + props.increment,
}));
```

上記のコードではアロー関数を使いましたが、通常の関数でも動作します：

```javascript
// Correct
this.setState(function (state, props) {
  return {
    counter: state.counter + props.increment,
  };
});
```

state の更新はマージされる
setState() を呼び出した場合、React は与えられたオブジェクトを現在の state にマージします。

例えば、あなたの state はいくつかの独立した変数を含んでいるかもしれません：

```javascript

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: []
    };
  }

```

その場合、別々の setState() 呼び出しで、それらの変数を独立して更新することができます：

```javascript

  componentDidMount() {
    fetchPosts().then(response => {
    this.setState({
      posts: response.posts
    });
  });

    fetchComments().then(response => {
      this.setState({
        comments: response.comments
      });
    });
  }
```

マージは浅く (shallow) 行われるので、this.setState({comments}) は this.state.posts をそのまま残しますが、this.state.comments を完全に置き換えます。

#### イベント処理

React.js でのイベント処理は DOM 要素のイベント処理と共通点がある。

ですが、文法的な違いもあります：

React.js のイベント処理は小文字ではなく キャメルケース(camelCase) で命名規則があります。  
JSX ではイベントハンドラとして文字列(text)ではなく関数(function)を渡します。

例えば：
こちらは HTML:

```html
<button onclick="activateLasers()">Activate Lasers</button>
```

こちらは React.js：

```javascript
<button onClick={activateLasers}>Activate Lasers</button>
```

React.js では false を返してもデフォルトの動作を抑止することができません。  
明示的に preventDefault を呼び出す必要があります。例えば、HTML では、「新しいページを開く」というリンクのデフォルト動作を  
抑止するために次のように書くことができます。

こちらは HTML:

```html
<a href="#" onclick="console.log('The link was clicked.'); return false">
  Click me
</a>
```

こちらは React.js：

```javascript
function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log("The link was clicked.");
  }
  return (
    <a href="#" onClick="{handleClick}">
      {" "}
      Click me{" "}
    </a>
  );
}
```

ここで、e は合成 (synthetic) イベントです。  
React.js のイベントはネイティブのイベントと全く同様に動作するわけではない。

React.js を使う場合、一般的には DOM 要素の生成後に  
addEventListener を呼び出してリスナを追加する必要はない。  
代わりに、要素が最初にレンダーされる際にリスナ-を指定する。

コンポーネントを クラスを使用して定義した場合  
一般的なパターンではイベントハンドラはクラスのメソッドになる。  
例えば、以下の Toggle コンポーネントはユーザが “ON” 状態 “OFF”状態を切り替えられるようなボタンをレンダーする。

```javascript
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((state) => ({ isToggleOn: !state.isToggleOn }));
  }
  render() {
    return;
    <button onClick="{this.handleClick}">
      {this.state.isToggleOn ? "ON" : "OFF"}
    </button>;
  }
}
ReactDOM.render(<Toggle />, document.getElementById("root"));
```

JSX の CallBack における this に注意しなければなりません。  
JavaScript では、クラスのメソッドはデフォルトではバインドされません。
this.handleClick へのバインドを忘れて onClick に渡した場合、  
実際に関数が呼ばれた時に this は undefined となってしまいます。

これは React.js に限った動作ではなく、

JavaScript における関数の仕組みの一部です。  
一般的に、onClick={this.handleClick} のように () を末尾に付けずに  
何らかのメソッドを参照する場合、そのメソッドはバインドしておく必要があります。

bind の呼び出しが苦痛なら、それを回避する方法が 2 つあります。

パブリッククラスフィールド構文を使用しているなら、
コールバックを正しくバインドするのにクラスフィールドを利用できます：

```javascript
class LoggingButton extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is _experimental_ syntax.
  handleClick = () => {
    console.log("this is:", this);
  };

  render() {
    return <button onClick={this.handleClick}>Click me</button>;
  }
}
```

この構文は、Create React App ではデフォルトで有効です。
クラスフィールド構文を使用していない場合、コールバック内でアロー関数を使用することもできます：

```javascript
class LoggingButton extends React.Component {
  handleClick() {
    console.log("this is:", this);
  }

  render() {
    // This syntax ensures `this` is bound within handleClick
    return <button onClick={() => this.handleClick()}>Click me</button>;
  }
}
```

この構文での問題は、LoggingButton がレンダーされるたびに異なるコールバック関数が毎回作成されるということです。  
大抵のケースではこれは問題ありません。しかし、このコールバックが props の一部として下層のコンポーネントに渡される場合、  
それら下層コンポーネントが余分に再描画されることになります。 一般的にはコンストラクタでバインドするかクラスフィールド構文を使用して、この種のパフォーマンスの問題を避けるようおすすめします。

#### 条件付きレンダー

React ではあなたの必要なふるまいをカプセル化した独立したコンポーネントを作ることができます。  
そして、あなたのアプリケーションの状態に応じて、その一部だけを描画することが可能です。

React における条件付きレンダーは JavaScript における条件分岐と同じ仕組みである。
条件演算子(if)のような JavaScript 演算子を使用して現在の状態を表す要素を作成すれば、  
React はそれに一致するように UI を更新します。

以下の 2 つのコンポーネントを考えてみましょう：

```javascript
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}
```

ユーザがログインしているかどうかによって
これらのコンポーネントの一方だけを表示する Greeting コンポーネントを作成しましょう：

```javascript
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

ReactDOM.render(
  // Try changing to isLoggedIn={true}:
  <Greeting isLoggedIn={false} />,
  document.getElementById("root")
);
```

この例では isLoggedIn プロパティの値によって異なる挨拶メッセージを表示します。

**要素変数**
要素を保持しておくために変数を使うことができます。これは、出力の他の部分を変えずにコンポーネントの一部を条件付きでレンダーしたい時に役立ちます。

ログアウトとログインボタンを表す以下の 2 つの新しいコンポーネントを考えましょう：

```javascript
function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}
```

以下の例では、LoginControl というステート付きコンポーネントを作成します。

LoginControl は現在の state によって <LoginButton /> もしくは <LogoutButton /> の一方をレンダーします。  
加えて、前の例の <Greeting /> もレンダーします：

```javascript
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

ReactDOM.render(<LoginControl />, document.getElementById("root"));
```

変数を宣言して if 文を使用することはコンポーネントを条件的にレンダーするなかなか良い方法ではありますが  
より短い構文を使いたくなる時もあります。  
以下で述べるように、JSX でインラインで条件を記述する方法がいくつか存在します。

#### 論理 && 演算子によるインライン If

`中括弧{}`で囲むことで、JSX に式を埋め込むことができます。
これには `JavaScript の論理 && 演算子`も含まれます。

```javascript
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 && (
        <h2>You have {unreadMessages.length} unread messages.</h2>
      )}
    </div>
  );
}

const messages = ["React", "Re: React", "Re:Re: React"];
ReactDOM.render(
  <Mailbox unreadMessages={messages} />,
  document.getElementById("root")
);
```

JavaScript では `true && expression` は必ず `expression` と評価され、`false && expression` は必ず `false` と評価されるからです。

従って、条件部分が true であれば、&& の後に書かれた要素が出力に現れます。  
もし false であれば、React はそれを無視して飛ばします。falsy な値を返した場合、&& の後の要素の評価はスキップされますが、falsy な値そのものは返されるということに注意してください。  
以下の例では <div>0</div> がレンダーメソッドから返されます。

```javascript
render() {
const count = 0;
return (

<div>
{ count && <h1>Messages: {count}</h1>}
</div>
);
}
```

**条件演算子によるインライン(If-Else)**
条件的に要素をレンダーするもうひとつの方法は JavaScript の `condition ? true : false` 条件演算子を利用することです。

以下の例では条件演算子を用いて、条件に応じてテキストの小さなブロックをレンダーします。

```javascript

render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
    </div>
  );
}

```

より大きな式にも適用することができますが、何が起こっているのか分かりづらくはなります：

```javascript

render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      { isLoggedIn
        ? <LogoutButton onClick={this.handleLogoutClick} />
        : <LoginButton onClick={this.handleLoginClick} />
      }
    </div>
  );
}

```

普通の JavaScript を書くときと同様、あなたとチームが読みやすいと思えるものに合わせて、適切なスタイルを選択してください。  
条件が複雑になりすぎたら、コンポーネントを抽出するべきタイミングかもしれない、ということにも留意してください。  
コンポーネントのレンダーを防ぐ稀なケースですが、他のコンポーネントによってレンダーされているにも関わらず、コンポーネントが自分のことを隠したい、ということがあるかもしれません。  
その場合はレンダー出力の代わりに null を返すようにしてください。  
以下の例では、`<WarningBanner />` バナーは warn と呼ばれるプロパティの値に応じてレンダーされます。

そのプロパティの値が false なら、コンポーネントはレンダーされません：

```javascript
function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return <div className="warning">Warning!</div>;
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showWarning: true };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState((state) => ({
      showWarning: !state.showWarning,
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? "Hide" : "Show"}
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Page />, document.getElementById("root"));
```

コンポーネントの render メソッドから null を返してもコンポーネントのライフサイクルメソッドの発火には影響しません。  
例えば componentDidMount は変わらず呼び出されます。

#### リスト(List)とキー(Key)

JavaScript でリストを変換する方法についておさらいしましょう。

`map() 関数`を使用し、`配列 numbers` というを受け取って中身の値を `2 倍`しています。  
`map() 関数`が返す新しい配列を`変数 doubled` に格納し、ログに出力します：

```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number \* 2);
console.log(doubled);
```

このコードはコンソールに [2, 4, 6, 8, 10] と出力します。　　
React では配列を要素のリストに変換することが、同じである。

複数のコンポーネントをレンダーする要素の集合を作成し`中括弧 {}` で囲むことで
JSX に含めることができます。
JavaScript の `map() 関数`を利用して、`配列 numbers` に対して反復処理を行っています。
それぞれの整数に対して <li> 要素を返しています。

結果として得られる要素の配列を `listItems` に格納しています：

```javascript
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => <li>{number}</li>);
```

listItems という配列全体を <ul> 要素の内側に含め、それを DOM へレンダーします：

```javascript
ReactDOM.render(<ul>{listItems}</ul>, document.getElementById("root"));
```

このコードは、1 から 5 までの数字の箇条書きのリストを表示します。

**基本的なリストコンポーネント**
リストは何らかのコンポーネントの内部でレンダーしたいと思うでしょう。
リファクタリングして、`配列 numbers` を受け取って要素のリストを出力するコンポーネントを作ることができます。

```javascript
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => <li>{number}</li>);
  return <ul>{listItems}</ul>;
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById("root")
);
```

リスト項目には key を与えるべきだということを受け取るでしょう。  
`key` とは特別な文字列の属性であり、要素のリストを作成する際に含めておく必要があるものです。

なぜ key が重要なのか、次の節で説明します。
`numbers.map()` 内のリスト項目に `key` を割り当てて、`key` が見つからないという問題を修正しましょう。

```javascript
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => (
    <li key={number.toString()}>{number}</li>
  ));
  return <ul>{listItems}</ul>;
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById("root")
);
```

**Key**
Key は、どの要素が変更、追加や削除されたのかを React が判断するのに使用する。  
配列内の項目に安定した識別性を与えるため、それぞれの項目に key を与えるべきです。

```javascript
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => (
  <li key={number.toString()}>{number}</li>
));
```

兄弟間でその項目を一意に特定できるような文字列を key として選ぶのが最良の方法です。  
多くの場合、あなたのデータ内にある ID を key として使うことになるでしょう:

```javascript
const todoItems = todos.map((todo) => <li key={todo.id}>{todo.text}</li>);
```

レンダーされる要素に安定した ID がない場合、最終手段として項目のインデックスを使うことができます：

```javascript
const todoItems = todos.map((todo, index) => (
  // Only do this if items have no stable IDs

  <li key={index}>{todo.text}</li>
));
```

要素の並び順が変更される可能性がある場合、インデックスを key として使用することはお勧めしません。  
パフォーマンスに悪い影響を与え、コンポーネントの状態に問題を起こす可能性があります。

**key のあるコンポーネントの抽出**

key が意味を持つのは、それをとり囲んでいる配列の側の文脈です。

例えば、ListItem コンポーネントを抽出する際には、  
key は ListItem 自体の <li> 要素に書くのではなく、配列内の <ListItem /> 要素に残しておくべきです。

例： 不適切な key の使用法

```javascript
function ListItem(props) {
  const value = props.value;
  return (
    // Wrong! There is no need to specify the key here:

    <li key={value.toString()}>{value}</li>
  );
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => (
    // Wrong! The key should have been specified here:
    <ListItem value={number} />
  ));
  return <ul>{listItems}</ul>;
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById("root")
);
```

**適切な key の使用法**

```javascript
function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => (
    // Correct! Key should be specified inside the array.
    <ListItem key={number.toString()} value={number} />
  ));
  return <ul>{listItems}</ul>;
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById("root")
);
```

`map()` 呼び出しの中に現れる要素に key が必要です。

key は兄弟要素の中で一意であればよい
配列内で使われる key はその兄弟要素の中で一意である必要があります。

しかしグローバルに一意である必要はありません。2 つの異なる配列を作る場合は、同一の key が使われても構いません：

```javascript
function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
  const content = props.posts.map((post) => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  ));
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

const posts = [
  { id: 1, title: "Hello World", content: "Welcome to learning React!" },
  { id: 2, title: "Installation", content: "You can install React from npm." },
];
ReactDOM.render(<Blog posts={posts} />, document.getElementById("root"));
```

key は React へのヒントとして使われますが、
あなたが書くコンポーネントには渡されません。

同じ値をコンポーネントの中でも必要としている場合は、別の名前の prop として明示的に渡してください：

```javascript
const content = posts.map((post) => (
  <Post key={post.id} id={post.id} title={post.title} />
));
```

`Post コンポーネント`は `props.id` を読み取ることができますが、`props.key` は読み取れません。

`map()` を JSX に埋め込む
listItems 変数を他に宣言して、それを JSX に含めました：

```javascript
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => (
    <ListItem key={number.toString()} value={number} />
  ));
  return <ul>{listItems}</ul>;
}
```

JSX では任意の式を埋め込むことができますので、map() の結果をインライン化することもできます。

```javascript
function NumberList(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) => (
        <ListItem key={number.toString()} value={number} />
      ))}
    </ul>
  );
}
```

よりすっきりしたコードとなりますが、この記法は乱用されることもあります。  
JavaScript でそうであるように、読みやすさのために変数を抽出する価値があるかどうか決めるのはあなたです。  
`map()` の中身がネストされすぎている場合は、コンポーネントに抽出する良いタイミングかもしれない、ということにも留意してください。

## フォーム

自然な HTML のフォーム要素は何らかの状態を持っているので  
フォーム要素は React において他の DOM 要素とちょっと異なる動作をします。

例、HTML によるフォームは 名前(name)を受け付けます：

```html
<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
```

このフォームは、ユーザがフォームを送信した際に新しいページに移動する、という、動作を行います。
フォームの送信に応答してユーザがフォームに入力したデータにアクセスするような `JavaScript 関数`があった方が便利です。
**“制御された (controlled) コンポーネント”**と呼ばれるテクニックを使うことです。

### 制御されたコンポーネントとは?

HTML では <input>、<textarea>、そして <select> のようなフォーム要素は  
状態を保持しており、ユーザの入力に基づいてそれを更新します。  
React では、変更されうる状態はコンポーネントの `state プロパティ`に保持され、`setState() 関数`でのみ更新されます。

React の state を **“信頼できる唯一の情報源 (single source of truth)”** とすることで、2 つの状態を結合させることができます。  
フォームをレンダーしている React コンポーネントが、後のユーザ入力でフォームで起きることも制御できるようになります。

このような方法で React によって値が制御される入力フォーム要素は **制御されたコンポーネント**と呼ばれます。

例 前述のフォームの例において、  
フォーム送信時に名前をログに残すようにしたい場合、フォームを制御されたコンポーネントとして書くことができます：

```javascript
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

フォーム要素の `value 属性`が設定されているので、  
表示される値は常に `this.state.value` となり、React の state が信頼できる情報源となります。  
handleChange はキーストロークごとに実行されて React の state を更新するので、表示される値はユーザがタイプするたびに更新されます。

制御されたコンポーネントを使うと、ユーザ入力の値は常に React の state によって制御されるようになります。  
これによりタイプするコード量は少し増えますが、その値を他の UI 要素に渡したり、他のイベントハンドラからリセットしたりできるようになります。

**textarea タグ**
HTML では、<textarea> 要素はテキストを子要素として定義します。

```html
<textarea>
  Hello there, this is some text in a text area
</textarea>
```

React では、<textarea> は代わりに value 属性を使用します。

こうすることで、<textarea> を使用するフォームは単一行の入力フォームと非常に似た書き方ができるようになります：

```javascript
class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Please write an essay about your favorite DOM element.",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("An essay was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Essay:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

`this.state.value` がコンストラクタで初期化されているので  
テキストエリアには始めからテキストが入っていることに注意してください。

**select タグ**

HTML では、<select> はドロップダウンリストを作成します。例えばこの HTML は味についてのドロップダウンリストを作成しています：

```html
<select>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option selected value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>
```

`selected 属性`があるため `Coconut オプション`が最初に選択されていることに注意してください。  
この selected 属性の代わりに React は `value 属性`を親の `select タグ`で使用します。  
一箇所で更新すればよいだけなので、こちらがより便利です。

例：

```javascript
class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "coconut" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Your favorite flavor is: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

全体的に見て <input type="text">、<textarea>、そして <select> が非常に似た動作をするようになっています。
これらはすべて、制御されたコンポーネントを実装する時に使うことができる `value 属性`を受け取ります。

`value 属性`に配列を渡すことで、select タグ内の複数のオプションを選択することができます：

```html
<select multiple={true} value={['B', 'C']}> file input タグ HTML では、<input
  type="file"
/>
```

デバイス内のファイルを選ばせて、それをサーバにアップロードしたり  
File API を使って JavaScript で操作したりすることができます。

<input type="file" />

この値は読み取り専用ですので、これは非制御コンポーネントになります。  
このドキュメントの後の方で、他の非制御コンポーネントと併せて説明しています。  
複数の入力の処理 複数の制御された input 要素を処理する必要がある場合  
それぞれの入力要素に name 属性を追加すれば、ハンドラ関数に `event.target.name`  
に基づいて処理を選択させるようにできます。

例：

```javascript
class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isGoing: true, numberOfGuests: 2 };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }
  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked="{this.state.isGoing}"
            onChange="{this.handleInputChange}"
          />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value="{this.state.numberOfGuests}"
            onChange="{this.handleInputChange}"
          />
        </label>
      </form>
    );
  }
}
```
