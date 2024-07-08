import React from "react";
import BU from "../../public/bu.svg";
import DA from "../assets/deanza.png";
import Card from "../components/card.jsx";

const Education = () => {
  return (
    <div className="bg-white w-full min-h-screen pt-[65px] px-10 lg:px-20 flex flex-col">
      <h1 className="mt-10 text-4xl text-customGrayLight">Education</h1>
      <div className="mt-5 grid max-lg:grid-rows-2 lg:grid-cols-2 gap-2 h-[500px] lg:h-[400px] w-full">
        <div className="relative flex items-center justify-center bg-[#ececec]">
          <div className="absolute inset-0 w-full h-full bg-white opacity-0 sm:hover:opacity-90 transition-opacity px-2 py-2">
            <span className="flex justify-between mb-2 text-xl">
              <h1>Boston University</h1>
              <h1 className="text-customOrange">GPA: 3.5</h1>
            </span>
            <p className="mb-2">
              I transferred to BU after 2 years at De Anza College. I'm almost
              at the end of my time at BU with only a little more than a year
              left. So far I've taken courses in Data Structures, Linear
              Algebra, Computer Systems, and Probablity in Computing.
            </p>
            <p>
              This upcoming semester I will be taking courses in Software
              Engineering, Computer Languages, and a course dedicated to
              advanced computer algorithms
            </p>
          </div>
          <img className="object-cover" src={BU} width={300} height={300} />
        </div>
        <div className="relative flex items-center justify-center bg-[#ececec]">
          <div className="absolute inset-0 w-full h-full bg-white opacity-0 hover:sm:opacity-90 transition-opacity px-2 py-2">
            <span className="flex justify-between mb-2 text-xl">
              <h1>De Anza</h1>
              <h1 className="text-customOrange">GPA: 3.84</h1>
            </span>
            <p className="mb-2">
              After high school I studied at De Anza for 2 years. While at De
              Anza I found my passion for code and haven't learning since.
            </p>
            <p className="mb-2">
              It was at De Anza that I learned proper work ethic and study
              methods that now aid me thorugh the rest of my studies
            </p>
            <p className="mb-2">
              The relevant classes I took were the Calculus sequence, Physics,
              Discrete Math, and Data Strucutres and Algorithms
            </p>
          </div>
          <img className="object-cover" src={DA} width={350} height={300} />
        </div>
      </div>
    </div>
  );
};

export default Education;
