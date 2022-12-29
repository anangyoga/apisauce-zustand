import React from "react";

const MainLayout = ({ children }) => {
  return <main className="mt-4 p-6 grid grid-cols-5 gap-4">{children}</main>;
};

export default MainLayout;
