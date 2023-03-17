import "../css/Root.css";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { Outlet } from "react-router-dom";

import SideMenu from "/src/layout/SideMenu";
import Header from "/src/layout/Header";

const queryClient = new QueryClient();

export default function Root() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* <ReactQueryDevtools /> */}
        <SideMenu />
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
