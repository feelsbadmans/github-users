import { combineReducers } from "redux";
import fetchDataReducer from "./fetchDataReducer";

const rootReducer = combineReducers({
    fetchDataReducer
})

export type RootState= ReturnType<typeof rootReducer>;

export default rootReducer;