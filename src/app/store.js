// import { configureStore, createSlice } from "@reduxjs/toolkit";
// import sideMenuReducer from "../features/sliceSideMenu";

// // const store = configureStore({
// //   reducer: {
// //     isMenuClosed: sideMenuReducer,
// //   },
// // });

// // export default store;

// https://codesandbox.io/s/react-redux-toolkit-persist-izxb6?file=/src/app/store.js:405-638
import sideMenuReducer from "./slice/sliceSideMenu";
import newSeriesReducer from "./slice/sliceNewSeries";
import listGridReducer from "./slice/sliceListGrid";

import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

const reducers = combineReducers({
  isMenuClosed: sideMenuReducer,
  isNewSeriesClosed: newSeriesReducer,
  isMoviesCompact: listGridReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;
