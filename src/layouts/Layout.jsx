import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import Footer from "../components/Footer";

const Layout = () => {
  const { setNavHeight } = useAppContext();

  return (
    <>
      <header>
        <Navbar setNavHeight={setNavHeight} />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
