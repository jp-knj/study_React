import React, { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset-advanced';

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

const App = () => (
  <Fragment>
    <GlobalStyle />
    <div>Hello World</div>
  </Fragment>
);

export default App
