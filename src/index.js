import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore,applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { Route} from 'react-router-dom'
import register from './serviceWorker';
import thunk from "redux-thunk";
import rootReducer from './redux/scheduleReducer'
import history from './history'
import { routerMiddleware, ConnectedRouter } from 'connected-react-router'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE|| compose;
const store = createStore(
  rootReducer(history),composeEnhancers(applyMiddleware(thunk, routerMiddleware(history)))
)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route component={App}/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
register();
