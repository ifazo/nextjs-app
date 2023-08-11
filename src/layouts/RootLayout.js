import Footer from "@/components/Footer";
import Navbar from "@/components/navbar";
import React from "react";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;
