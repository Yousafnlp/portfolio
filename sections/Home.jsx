import React from "react";
import Introduction from "../components/Introduction";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-28 pb-10"
    >
      <div className="max-w-5xl mx-auto w-full">
        <Introduction />
      </div>
    </section>
  );
};

export default Home;
