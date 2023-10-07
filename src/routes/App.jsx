import "../css/Root.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { useMediaQuery } from "react-responsive";

import { toggle } from "/src/app/slice/sliceSideMenuMobile";
import { useDispatch, useSelector } from "react-redux";

import { Outlet } from "react-router-dom";

import DesktopMenu from "../layout/SideMenu/DesktopMenu";
import MobileMenu from "../layout/SideMenu/MobileMenu";
import Header from "/src/layout/Header";
import Footer from "../layout/Footer";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 120 * (60 * 1000), // 120 mins
      cacheTime: 125 * (60 * 1000), // 125 mins
      refetchOnWindowFocus: false,
    },
  },
});

export default function App() {
  const onTabletOrMobile = useMediaQuery({ query: "(max-width: 61.875rem)" });
  const onDesktop = useMediaQuery({ query: "(min-width: 61.875rem)" });

  const isMenuClosedMobile = useSelector(
    (state) => state.isMenuClosedMobile.value
  );
  const dispatch = useDispatch();
  const handleCloseSideMenu = () => onTabletOrMobile && dispatch(toggle(false));
  return (
    <QueryClientProvider client={queryClient}>
      {onDesktop ? <DesktopMenu /> : <MobileMenu />}
      <ReactQueryDevtools />
      <section className="content">
        <Header />
        <main className="main">
          {isMenuClosedMobile && (
            <div className="overlay" onClick={handleCloseSideMenu}></div>
          )}

          <Outlet />
        </main>
        <Footer />
      </section>
    </QueryClientProvider>
  );
}
