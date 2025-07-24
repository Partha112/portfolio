import React from "react";
import { GrAction } from "react-icons/gr";
import { MdOutlineSecurity } from "react-icons/md";

const Skill = () => {
  return (
    <section id="skills" className="min-h-screen py-20 bg-muted/30 flex p-50">
      <div className="container-custom">
        <h2 className="text-paragraph font-heading text-4xl font-semibold pb-1">
          Skills
        </h2>
        <hr className="w-18 border-t-4 border-blue-700 border-muted/50"></hr>
      </div>
      <div className="grid grid-cols-3 gap-6 mt-12">
        <div className="bg-card p-6 rounded-xl shadow-md">
          <div className="flex flex-wrap item-center gap-3 mb-4">
            <i className="ri-code-ai-line blue"></i>
            <h3 className="font-heading font-semibold text-xl">
              Programing Languages
            </h3>
          </div>
          <div className="flex flex-wrap gap-4 font-paragraph">
            <span className="skill">Javascript(ES5, ES6)</span>
            <span className="skill">Java</span>
            <span className="skill">C++</span>
          </div>
        </div>
        <div className="bg-card p-6 rounded-xl shadow-md">
          <div className="flex item-center gap-3 mb-4">
            <i class="ri-reactjs-line blue"></i>
            <h3 className="font-heading font-semibold text-xl">
              Frontend Technologies
            </h3>
          </div>
          <div className="flex flex-wrap gap-4 font-paragraph">
            <span className="skill">HTML5</span>
            <span className="skill">CSS</span>
            <span className="skill">ReactJs</span>
            <span className="skill">Next.js</span>
            <span className="skill">Tailwind CSS</span>
            <span className="skill">Shadcn</span>
          </div>
        </div>
        <div className="bg-card p-6 rounded-xl shadow-md">
          <div className="flex item-center gap-3 mb-4">
            <i class="ri-nodejs-line blue"></i>
            <h3 className="font-heading font-semibold text-xl">
              Backend Technologies
            </h3>
          </div>
          <div className="flex flex-wrap gap-4 font-paragraph">
            <span className="skill">NodeJS</span>
            <span className="skill">ExpressJS</span>
          </div>
        </div>
        <div className="bg-card p-6 rounded-xl shadow-md">
          <div className="flex item-center gap-3 mb-4">
            <i class="ri-database-2-fill blue"></i>
            <h3 className="font-heading font-semibold text-xl">Database</h3>
          </div>
          <div className="flex flex-wrap gap-4 font-paragraph">
            <span className="skill">MongoDB</span>
            <span className="skill">MySQL</span>
          </div>
        </div>
        <div className="bg-card p-6 rounded-xl shadow-md">
          <div className="flex item-center gap-3 mb-4">
            <i class="ri-code-s-slash-fill blue"></i>
            <h3 className="font-heading font-semibold text-xl">
              Data structure and Algorithms
            </h3>
          </div>
          <div className="flex flex-wrap gap-4 font-paragraph">
            <span className="skill">c++</span>
          </div>
        </div>
        <div className="bg-card p-6 rounded-xl shadow-md">
          <div className="flex item-center gap-3 mb-4">
            <MdOutlineSecurity className="blue" />
            <h3 className="font-heading font-semibold text-xl">
              Authentication & Security
            </h3>
          </div>
          <div className="flex flex-wrap gap-4 font-paragraph">
            <span className="skill">Jwt</span>
            <span className="skill">BrycptJs</span>
            <span className="skill">Clerk</span>
          </div>
        </div>
        <div className="bg-card p-6 rounded-xl shadow-md">
          <div className="flex item-center gap-3 mb-4">
            <GrAction className="blue" />
            <h3 className="font-heading font-semibold text-xl">
              Api Handling & Middleware
            </h3>
          </div>
          <div className="flex flex-wrap gap-4 font-paragraph">
            <span className="skill">Axios</span>
            <span className="skill">Express Validator</span>
            <span className="skill">Mongoose</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
