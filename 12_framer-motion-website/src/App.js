import React, { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset-advanced';
import Home from './pages/Home';

import "./styles/styles.css";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Home/>
  </Fragment>
);

export default App
