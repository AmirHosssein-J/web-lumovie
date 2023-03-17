import * as React from "react";
import * as ReactDOM from "react-dom/client";

//Redux
import store from "./app/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
let persistor = persistStore(store);

//React Router Dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      //Movies
      {
        path: "movies",
        element: <Movies />,
      },
      {
        path: "movie/:movieId",
        element: <Movie />,
        loader: movieLoader,
      },
      //Series
      {
        path: "series",
        element: <Series />,
      },
      //Anime
      {
        path: "animes",
        element: <Animes />,
      },
      {
        path: "anime/:animeId",
        element: <Anime />,
        loader: animeLoader,
      },
      //
      {
        path: "animations",
        element: <Animations />,
      },
      {
        path: "animation/:animationId",
        element: <Animation />,
        loader: animationLoader,
      },
      {
        path: "filter",
        element: <Filter />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
