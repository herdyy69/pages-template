import React, { Fragment } from "react";
import Navbar from "./header";
import Footer from "./footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <Navbar />
      {children}
      <Footer />
    </Fragment>
  );
};

export default MainLayout;
