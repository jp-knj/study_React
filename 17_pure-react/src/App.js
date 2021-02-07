import React from 'react';
import { render } from 'react-dom';

import Pet from './Pet';

const App = () => {

  return (
    <div>
      <h1>Hello World</h1>
      <Pet name="タマ" animal="猫" breed="マタタビ" />
      <Pet name="ポチ" animal="犬" breed="ドックフード" />
      <Pet name="Doink" animal="cat" breed="Mix" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
