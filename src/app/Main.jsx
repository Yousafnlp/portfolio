import React from "react";

import Navbar from "../../components/Navbar";
import CursorGlow from "../../components/CursorGlow";
import CentralSection from "../../components/CentralSection";

const Main = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <CursorGlow />
      <Navbar />
      <div className="relative z-10">
        <CentralSection />
      </div>
    </main>
  );
};

export default Main;
