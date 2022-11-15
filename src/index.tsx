import React from 'react';
import { createRoot } from 'react-dom/client';
import App from "./App";
import "./index.css";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {store} from "./store/store";


createRoot(
    document.getElementById('app') as HTMLElement
).render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);
