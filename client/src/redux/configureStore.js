import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reduser from "./reduser";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
  reduser,
  composeWithDevTools(applyMiddleware(thunk))
);
