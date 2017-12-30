import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import registerServiceWorker from './utils/registerServiceWorker';
import thunk from 'redux-thunk';
import 'typeface-roboto';
import reducers from './reducers';

import App from './components/app';
const store = createStore(reducers,applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
     <BrowserRouter>
       <Switch>
         <Route path="/coin/:name" component={App}/>
         <Route path="/" component={App} />
       </Switch>
     </BrowserRouter>
   </Provider>, document.getElementById('root'));
registerServiceWorker();
