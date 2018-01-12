import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware,compose} from 'redux';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import registerServiceWorker from './utils/registerServiceWorker';
import thunk from 'redux-thunk';
import 'typeface-roboto';
import reducers from './reducers';
import Index from './components/index';
import Show from './components/show';
import './assets/styles.css';
const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)
ReactDOM.render(
  <Provider store={store}>
     <BrowserRouter>
       <Switch>
         <Route path="/coin/:name" component={Show}/>
         <Route path="/" component={Index} />
       </Switch>
     </BrowserRouter>
   </Provider>, document.getElementById('root'));
registerServiceWorker();
