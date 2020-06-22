// import { soma } from './soma';

// console.log(soma(15, 1520 ));

import React from 'react';
import { render } from 'react-dom';

import App from './App'; // /. representa que está na mesma pasta!

// JSX: HTML dentro do JavaScript (Javascript XML)
//render(<h1>Hello World</h1>, document.getElementById('app'));

render( <App /> , document.getElementById('app'));

