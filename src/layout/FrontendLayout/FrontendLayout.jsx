import React, { memo } from "react";
import Header from "@/layout/Header/Header";
import SubFooter from "@/layout/SubFooter/SubFooter";
import Footer from "@/layout/Footer/Footer";

function FrontendLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <SubFooter />
      <Footer />
    </>
  );
}

export default memo(FrontendLayout);
