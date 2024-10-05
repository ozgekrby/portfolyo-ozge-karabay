import { applyMiddleware, createStore } from "redux";
import reducer from "../reducers/reducer";
import { thunk } from "redux-thunk";

const myStore =createStore(reducer,applyMiddleware(thunk));

export default myStore;