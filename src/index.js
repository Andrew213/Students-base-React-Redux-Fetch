
import "./scss/style.scss"
import "./index.html";
import "regenerator-runtime/runtime.js";
import React from 'react';
import { render } from 'react-dom';
import App from './js/App.jsx';
import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./redux/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

let store = createStore(
    rootReducer, applyMiddleware(thunk)
);

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

render(
    <React.StrictMode>
        {app}
    </React.StrictMode>,
    document.getElementById('root')
)




