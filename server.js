let express = require('express');
let path = require('path');
let React = require('react');
import {Provider} from 'react-redux';
import {createStore} from 'redux';
let ReactDOMServer = require('react-dom/server');
import App from './src/app';
import renderFullPage from './src/render-full-page';
import reducer from './src/reducer';

const app = express();


const reactApp = (store) => (
  <Provider store={store}>
    <App/>
  </Provider>
);

let handleRequest = function(req, res) {
  const initialState = {phrase: 'I like Pizza'};
  const store = createStore(reducer, initialState);

  const preloadedState = store.getState();

  setTimeout(() => {
    const appFragment = ReactDOMServer.renderToString(reactApp(store));
    const html = renderFullPage(appFragment, preloadedState);

    res.send(html);
  }, 1000);
};

app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.get('*', handleRequest);

app.listen(3000, () => {
  console.log('listening on port 3000');
});
