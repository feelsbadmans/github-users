import { combineReducers } from "redux";
import fetchUsersReducer from "./fetchUsersReducer";
import fetchUserPageReducer from "./fetchUserPageReducer";

const rootReducer = combineReducers({
    fetchUsersReducer,
    fetchUserPageReducer
})

export type RootState= ReturnType<typeof rootReducer>;

export default rootReducer;