import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full  bg-gradient-to-b from-gray-800 to-black text-white sm:h-full"
    >
      <div className="max-w-screen-lg p-4 mx-auto justify-center w-full h-full block">
        <div className="pb-8 mt-0">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            About Me
          </p>
        </div>

        <p className="text-xl mt-20">
        I am Neha, recently graduated with a degree in Computer Science & Technology from UIET, MDU.
        <br></br>
        From the first year of my studies, I dedicated myself to academic excellence, laying a strong foundation in computer science. I immersed myself in coursework, mastering programming languages, algorithms, data structures, and software development methodologies.
        I recently completed a prestigious internship at Amazon, where I served as a Software Developer Intern.
        <br/>
       
        </p>

        <br />

        {/* <p className="text-xl">
        I recently completed a prestigious internship at Amazon, where I served as a Software Developer Intern. During my time there, I had the opportunity to work on building native AWS services from scratch, utilizing key AWS resources. This experience allowed me to gain valuable insights into developing scalable and efficient solutions within a large-scale technology environment. I am enthusiastic to use the abilities and knowledge I have gained from my internships. 
        </p> */}
      </div>
    </div>
  );
};

export default About;