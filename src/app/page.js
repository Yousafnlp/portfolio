import React from "react";
import Loader from "../../components/Loader";
import dynamic from "next/dynamic";
const Main = dynamic(() => import("./Main"), {
  loading: () => <Loader />,
  ssr: false,
});

const page = () => {
  return <Main />;
};

export default page;
