import "../css/Root.css";

import { toggle } from "/src/app/slice/sliceSideMenuMobile";
import { useDispatch, useSelector } from "react-redux";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { Outlet } from "react-router-dom";

import Header from "/src/layout/Header";
import useWindowSize from "../hooks/useWindowSize";
import DesktopMenu from "../layout/SideMenu/DesktopMenu";
import MobileMenu from "../layout/SideMenu/MobileMenu";

const queryClient = new QueryClient();

export default function Root() {
  const { width } = useWindowSize();

  const onDesktop = width >= 990;
  const onTablet = width <= 990;

  const isMenuClosedMobile = useSelector(
    (state) => state.isMenuClosedMobile.value
  );
  const dispatch = useDispatch();

  const handleCloseSideMenu = () => onTablet && dispatch(toggle(false));

  return (
    <>
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
        </section>
      </QueryClientProvider>
    </>
  );
}
