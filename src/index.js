import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import reducer from "./store/reducer";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
    document.getElementById("root")
  );


serviceWorker.unregister();
