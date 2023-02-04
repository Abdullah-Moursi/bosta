import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, nightMode, setNightMode, setQuery, query }) => (
  <>
    <Header
      nightMode={nightMode}
      setNightMode={setNightMode}
      setQuery={setQuery}
      query={query}
    />
    {children}
    <Footer />
  </>
);

export default Layout;
