import React from "react";
import Nav from "../components/Nav";

const LayoutPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
};

export default LayoutPage;
