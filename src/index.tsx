import * as React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";

import {shaperApp} from "./reducers.ts";
import {Editor} from "./components/Editor.tsx";

let store = createStore(shaperApp);

render(
  <Provider store={store}>
    <Editor />
  </Provider>,
  document.getElementById("shaper")
)
