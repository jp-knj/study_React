import React from 'react';
import ReactDOM from 'react-dom';

import PrimaryButton, {
  SecondaryButton,
  TertiaryButton
} from './components/Buttons';

const App = () => (
  <div>
    <PrimaryButton>Hello World</PrimaryButton>
    <SecondaryButton>Hello World</SecondaryButton>
    <TertiaryButton>Hello World</TertiaryButton>
  </div>
)

ReactDOM.render(<App />, document.querySelector("#root"));
