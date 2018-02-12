import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { Route } from 'react-router';
import createSagaMiddleware from 'redux-saga';
import PostStore from './components/PostScore';
import Rule from './components/Rule';
import reducers from './reducers';
import sagas from './sagas';
import { SdgbStore } from './store';

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware<SdgbStore>();
const store = createStore(
  reducers, 
  applyMiddleware(
    routerMiddleware(history), 
    sagaMiddleware
  )
);
sagaMiddleware.run(sagas);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact={true} path="/" component={App}/>
        <Route path="/postscore" component={PostStore}/>
        <Route path="/rule" component={Rule}/>
      </div>
    </ConnectedRouter>         
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
