import React from "react";
import { About } from "../components/global/About";
import { Experience } from "../components/Experience";

export const Home = () => {
  return (
    <>
      <section className="p-10 ">
        <h1 className=" mb-[50px]">About</h1>
        <About />
        <Experience />
      </section>
    </>
  );
};
