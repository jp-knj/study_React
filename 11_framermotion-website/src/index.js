import * as React from "react";
import { useState } from "react";
import { render } from "react-dom";
import { Example } from "./Animation/Example";
import { Refresh } from "./Animation/Refresh";

import "./Animation/styles.css";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Refresh onClick={() => setCount(count + 1)} />
      <div className="example-container">
        <Example key={count} />
      </div>
    </>
  );
};

render(<App />, document.getElementById("root"));
