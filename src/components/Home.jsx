import React from "react";
import user from '../assets/user.jpg';

const Home = () => {
  return (
    <section className="w-full min-h-screen">
      <div className="w-full min-h-screen flex gap-8 items-center justify-center">
        <div className="flex flex-col w-1/2 p-50">
          <h4 className="text-xl font-semibold text-blue-500 font-paragraph uppercase">
            Hi There
          </h4>
          <h1 className="text-5xl font-bold font-heading mt-4 uppercase">
            I am <span className="text-red-500">Partha</span>
          </h1>
          <h4 className="text-xl mt-4 font-paragraph opacity-74 text-blue-500">
            Aspiring Full Stack Developer
          </h4>
          <div className="mt-8 flex flex-wrap gap-6 ">
            <button className=" w-24 h-12 justify-center rounded-lg bg-violet-500 text-paragraph cursor-pointer">
              <a href="https://imagekit.io/public/share/parthapp/cd14919363c058b34da2d6a35f8dfaebba97099640eded2b47f67bad74e24de09104308b71c74cb1d9b4557e41eb1581b27d681ac1130c0e05c85e4d26be1df1f96d1f55ccbc2778a19dc2fe5c94cac5">
                Resume
              </a>
            </button>
            <button className="border-2 border-violet-500 text-violet-500 w-30 h-12 justify-center rounded-lg bg-transparent text-paragraph cursor-pointer">
              <a href="#contact">Contact Me</a>
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <div className="mb-60 px-20 items-center justify-center">
            <img src='https://ik.imagekit.io/parthapp/download.png?updatedAt=1752956046407' alt="user" className="mt-50 max-h-96 w-96 rounded-full border-muted/50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
