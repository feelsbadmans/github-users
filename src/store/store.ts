import { Action, applyMiddleware, compose, createStore, ThunkAction } from '@reduxjs/toolkit';
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
