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

import Root from "./routes/root";
import Error from "./pages/Error";
import Home from "./pages/Home";

import Movies from "./pages/Category/Movies";
import Movie, { loader as movieLoader } from "./pages/Category/Movies/Movie";

import Series from "./pages/Category/Series";

import Animes from "./pages/Category/Animes";
import Anime, { loader as animeLoader } from "./pages/Category/Animes/Anime";

import Animations from "./pages/Category/Animations";
import Animation, {
  loader as animationLoader,
} from "./pages/Category/Animations/Animation";
import Filter from "./pages/Filter";
import Search from "./pages/Search";

import { loader as filterBarLoader } from "./layout/SideBars/FilterBar";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<Error />}>
      <Route path="/" element={<Home />} index={true} />
      <Route
        path="movie/:movieId"
        element={<Movie />}
        loader={movieLoader}
        errorElement={<Error />}
      />
      <Route
        path="anime/:animeId"
        element={<Anime />}
        loader={animeLoader}
        errorElement={<Error />}
      />
      <Route
        path="animation/:animationId"
        element={<Animation />}
        loader={animationLoader}
        errorElement={<Error />}
      />
      <Route path="movies" element={<Movies />} />
      <Route path="series" element={<Series />} />
      <Route path="animes" element={<Animes />} />
      <Route path="animations" element={<Animations />} />
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
