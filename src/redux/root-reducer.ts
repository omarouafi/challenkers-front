import { combineReducers } from "redux";
import citationReducer from "./citation/citation.reducer";

const rootReducer = combineReducers({
    citationReducer: citationReducer,
});

export default rootReducer;
