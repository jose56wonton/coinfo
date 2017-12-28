import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import promise from 'redux-promise'
import registerServiceWorker from './utils/registerServiceWorker';

import 'typeface-roboto';
import reducers from './reducers';

import App from './components/app';
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
     <BrowserRouter>
       <Switch>
         <Route path="/coin/:name" component={App}/>
         <Route path="/" component={App} />
       </Switch>
     </BrowserRouter>
   </Provider>, document.getElementById('root'));
registerServiceWorker();
