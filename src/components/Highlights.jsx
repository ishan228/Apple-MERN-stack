import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { rightImg, watchImg } from "../utils";
import VideoCareousel from "./VideoCareousel";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      y: 0,
    });
    gsap.to(".link", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.25,
    });
  }, []);

  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="screen-max-width">
        <div className="mb-12 md:flex items-end w-full justify-between">
          <h1 id="title" className="section-heading">
            Get the Highlights
          </h1>
          <div className="flex flex-wrap items-end  ">
            <p className="link">
              Watch the flim <img src={watchImg} alt="watch" className="ml-2" />
            </p>
          </div>
          <div className="flex flex-wrap items-end gap-5 ">
            <p className="link">
              Watch the Event{" "}
              <img src={rightImg} alt="rightimg" className="text-xs" />
            </p>
          </div>
        </div>
        <VideoCareousel/>
      </div>
    </section>
  );
};

export default Highlights;
