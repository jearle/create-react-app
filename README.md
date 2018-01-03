## Prerequisites
+ node v8.0.0+
+ yarn 1.2.1

## Running application

```bash
git clone https://github.com/jearle/create-react-app.git
yarn install
yarn start
```

## Relevant Files

`// src/index.js`

```js
import 'core-js/es6/map';
import 'core-js/es6/set';
import 'raf/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

```

`src/App.js`

```js
import React from 'react';
import styled from 'styled-components';

const App = styled.div`
  background: red;
  height: 10px;
  left: 0;
  position: absolute;
  top: 0;
  width: calc(100% - 10px);
`;

export default App;

```