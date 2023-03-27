import "../css/Root.css";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { Outlet } from "react-router-dom";

import SideMenu from "/src/layout/SideMenu";
import Header from "/src/layout/Header";
import useWindowSize from "../hooks/useWindowSize";

const queryClient = new QueryClient();

export default function Root() {
  const { width } = useWindowSize();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* <ReactQueryDevtools /> */}

        {/* {width >= 991 ? <SideMenu /> : <MobileSideMenu />} */}

        <section className="content">
          <Header />
          <main className="main">
            <Outlet />
          </main>
        </section>
      </QueryClientProvider>
    </>
  );
}
