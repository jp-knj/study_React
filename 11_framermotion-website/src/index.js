import * as React from "react";
import { render } from "react-dom";
import { Example } from "./Variants/Example";

import "./Variants/styles.css";

const App = () => <Example />;

render(<App />, document.getElementById("root"));
