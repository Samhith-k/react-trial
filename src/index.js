import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import Acts from './Acts'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
      <Fragment>
        <Route exact path="/" component={App} />
        <Route exact path="/categories/acts/:categoryName" component={Acts} />
      </Fragment>
    </BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
