import { combineReducers } from "redux";
import fetchUsersReducer from "./fetchUsersReducer";

const rootReducer = combineReducers({
    fetchUsersReducer
})

export type RootState= ReturnType<typeof rootReducer>;

export default rootReducer;