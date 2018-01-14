import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import thunk from "redux-thunk";
import "typeface-roboto";
import reducers from "./reducers";
import Index from "./components/index";
import Show from "./components/show";
import "./assets/styles.css";
import Nice from './components/nice';


export const store = createStore(reducers, applyMiddleware(thunk));

/*
compose(
    compose is from redux... I was using it to do redux devtools, but it was messing with 
    my life thunk api calls on app startup.
    window.devToolsExtension ? window.devToolsExtension() : f => f,    
  )
*/

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/asdf" component={Nice} />
        <Route path="/coinfo/:name" component={Show} />
        <Route path="/coinfo" component={Index} />
        <Route path="/" component={Index} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
