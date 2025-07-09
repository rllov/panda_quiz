import React from "react";
import DockNavigation from "./DockNavigation";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Content */}
      <div className="flex-grow">{children}</div>

      {/* Dock Navigation */}
      <DockNavigation />
    </div>
  );
};

export default MainLayout;
