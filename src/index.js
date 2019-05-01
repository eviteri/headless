import React from 'react';

//REACT DOM
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

//REDUX
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import menuReducer from './store/reducers/menu';
import pageReducer from './store/reducers/page';


//COMPONENTS
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//REDUX DEV TOOLS
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    menu: menuReducer,
    page: pageReducer
});

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)


ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
