import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from '../src/component/app/app';
import reducer from './reducer/index';
import session from './lib/redux-reporter';
import reporter from './lib/redux-session';

import './styles/main.scss';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(reporter, session)));

const appContainer = document.createElement('div');
document.body.appendChild(appContainer);

ReactDom.render(<Provider store={store}><App/></Provider>, appContainer);
