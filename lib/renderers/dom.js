import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import StateApi from 'state-api';

const store = new StateApi(window.initialData);

// const initialData = {
//   articles: {},
//   authors:{}
// };
ReactDOM.render(
    <App store={store}/>, 
    document.getElementById('app'));
