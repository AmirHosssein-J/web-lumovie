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

import App from "./routes/App";
import Error from "./pages/Error";
import Home from "./pages/Home";

import Search from "./pages/Search";

import Movies from "/src/pages/Category/Movies";
import Series from "/src/pages/Category/Series";
import Genres from "/src/pages/Category/Genres";
import Actors from "/src/pages/Category/Actors";
import Directors from "/src/pages/Category/Directors";

import Cinema from "/src/pages/Cinema";
import Upcomings from "/src/pages/Upcomings";
import Bookmarks from "/src/pages/Bookmarks";
import Downloads from "/src/pages/Downloads";

import { loader as movieLoader } from "/src/pages/Category/Movie";
import Movie from "./pages/Category/Movie";

import { loader as serieLoader } from "/src/pages/Category/Serie";
import Serie from "./pages/Category/Serie";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<Error />}>
      <Route path="/" element={<Home />} index={true} />

      {/* movie content pages */}
      <Route path="movie/:movieId" element={<Movie />} loader={movieLoader} />
      <Route path="serie/:serieId" element={<Serie />} loader={serieLoader} />

      {/* cateogry routes */}
      <Route path="movies" element={<Movies />} />
      <Route path="series" element={<Series />} />
      <Route path="genres" element={<Genres />} />
      <Route path="actors" element={<Actors />} />
      <Route path="directors" element={<Directors />} />
      <Route path="cinema" element={<Cinema />} />

      {/* general pages routes */}
      <Route path="upcomings" element={<Upcomings />} />
      <Route path="bookmarks" element={<Bookmarks />} />
      <Route path="downloads" element={<Downloads />} />

      <Route path="search" element={<Search />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
  //</React.StrictMode>
);
