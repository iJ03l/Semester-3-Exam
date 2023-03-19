import React, { useEffect, useState } from "react";
import construction1 from "../assets/images/construction-image.jpg";
import TypeWriterEffect from "react-typewriter-effect";
import "./timeline.css";

function Home() {
  const handleResume = () => {
    window.location.replace(
      "https://drive.google.com/file/d/1UYcTPgfT3Xf1ksHFFCiBN3Ks1fVoLbOO/view?usp=share_link",
      "_blank"
    );
  };

  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return (
    <div className="font-monserrat">
      <section>
        <div className="grid lg:grid-cols-12 md:mb-0 mb-12">
          <div className="col-span-12 lg:col-span-6">
            <div className="w-full lg:h-[700px] h-[200px]">
              <img
                src={construction1}
                alt="construction-image"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 flex items-center pl-10 relative  -mt-20 pt-16 lg:mt-0 lg:pt-0">
            <div className="lg:pb-10 pr-4 lg:pr-0">
              <h1 className="text-jet text-[2.5rem] py-5 lg:text-[3rem] lg:text-5xl font-extrabold tracking-wider uppercase lg:pt-20 ">
                <span className="text-violet-600">
                  Hi 👋🏾
                  <TypeWriterEffect
                    textStyle={{
                      fontFamily: "Montserrat, sans-serif",
                      color: "#3F3D56",
                      fontWeight: 800,
                      display: "block",
                    }}
                    startDelay={2000}
                    cursorColor="#3F3D56"
                    multiText={["MEET.", "THE INNOVATIVE.", "i-J03l."]}
                    multiTextDelay={2000}
                    typeSpeed={200}
                  />
                </span>
              </h1>
              <p className="text-black lg:pr-20 w-full pr-4 lg:my-5 lg:tracking-wide lg:text-xl lg:first-line lg:font-medium font-light">
                An early stage software engineer, I bring a fresh perspective
                and a hunger to learn and grow. I have a strong foundation in
                general technology and am proficient in cloud technologies. I
                have worked on a variety of projects, from building prototypes
                to developing full-scale applications. My passion for innovation
                and technology drives me to constantly seek out new challenges
                and opportunities to learn. I thrive in fast-paced environments
                and enjoy collaborating with others to solve complex problems. I
                am excited to contribute my skills and energy to help drive your
                company's growth and success.
              </p>
              <button
                onClick={handleResume}
                className="btn hover:shadow-lg hover:bg-blue hover:text-white lg:btn-lg flex flex-row justify-center items-center gap-3 my-4 text-orange-200"
              >
                Resume
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="flex px-6">
        <div className="flex flex-col justify-center items-center w-full my-5">
          <h1 className="text-[2.5rem] flex flex-col md:flex-row font-bold text-grey-600 uppercase">
            <span>May the force be with us.</span>
          </h1>
          {typeof backendData.users === "undefined" ? (
            <p>Loading...</p>
          ) : (
            backendData.users.map((user, i) => <p key={i}>{user}</p>)
          )}
          <span className="w-16 h-4 bg-orange-600 relative rounded-full"></span>
        </div>
      </section>
    </div>
  );
}

export default Home;
