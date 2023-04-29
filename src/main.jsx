import * as React from "react";
import * as ReactDOM from "react-dom/client";

//Redux
import store from "./app/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
let persistor = persistStore(store);

//React Router Dom
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import Root from "./routes/App";
import Error from "./pages/Error";
import Home from "./pages/Home";

import Filter from "./pages/Filter";
import Search from "./pages/Search";

import Movies from "/src/pages/Category/Movies/index";

import { loader as filterBarLoader } from "./layout/SideBars/FilterBar";

import { loader as movieLoader } from "/src/pages/Category/Movie";
import Movie from "./pages/Category/Movie";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<Error />}>
      <Route path="/" element={<Home />} index={true} />
      <Route path="movie/:movieId" element={<Movie />} loader={movieLoader} />
      <Route path="movies" element={<Movies />} />
      <Route path="filter" element={<Filter />} loader={filterBarLoader} />
      <Route path="search" element={<Search />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
