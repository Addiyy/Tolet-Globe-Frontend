import React from "react";
import "./styles/card.css";
import logo from "../../assets/logo.png";
export default function About_Card(props) {
  const containerClass = `container ${props.place}`;
  // const line = `${props.place + "line"}`
  const line =
    props.place === "left"
      ? "w-[19%] absolute top-[52%] border-t-4 border-[#6cc0c4] right-[0%] hidden lg:block "
      : "w-[20%] absolute top-[52%] border-t-4 border-[#6cc0c4] left-[0%] hidden lg:block";
      // Logo
  const paddingStyles =
    props.place === "left"
      ? "md:py-2 md:pr-[6%] lg:pl-[6%] md:-pl-6 "
      : "md:py-2 md:pr-[4%] lg:pl-[6%] md:-pl-6 ";

  // Dynamic position styles
  const positionStyles = props.place === "left" ? "left-0" : "lg:left-[50%] md:left-[3%]";

  return (
    <>
      <div
        className={`${containerClass} ${positionStyles} ${paddingStyles} md:relative md:w-[50.5%] md:mb-20 md:mt-0 md:ml-0 md:mr-0  sm:mx-6 mb-8 after:hidden md:after:block  `}
      >
        <div className="text-box py-9  px-6 sm:-ml-1 relative rounded-3xl border-2 border-[#6cc0c4]  min-w-72 ml-2 lg:min-w-52  md:overflow-hidden">
          <h1 className="text-center text-[#e59948] font-bold text-xl md:text-3xl ">
            {props.head}
          </h1>
          <p className="text-base md:xl text-white mt-3">{props.paragraph}</p>
        </div>
        <span className={line}></span>
      </div>
    </>
  );
} 