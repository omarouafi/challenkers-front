import { legacy_createStore as createStore, applyMiddleware } from "redux";
import rootReducer from "./root-reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
export const store = createStore(rootReducer , applyMiddleware(logger,thunk));

export default store;
