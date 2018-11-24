import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore,applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router,Route} from 'react-router-dom'
import register from './serviceWorker';
import thunk from "redux-thunk";
import rootReducer from './redux/scheduleReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,composeEnhancers(applyMiddleware(thunk))
)

ReactDOM.render(
  <Provider store= {store}>
    <Router>
      <Route  component={App}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
register();
