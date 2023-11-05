import React from "react";
import HeroImage from "../assets/Pic.jpeg";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white mt-24">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-10 max-w-lg">
          a software developer with a strong proficiency in Java and hands-on experience with frontend technologies like HTML, CSS, JS, React, Bootstrap, Tailwind CSS. 
          </p>
        </div>

        <div className="border-2 p-5 border-slate-50">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full border-slate-50"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;