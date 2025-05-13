import React from "react";
import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";

// Testing the Github
function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
