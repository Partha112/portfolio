import React from "react";

const Education = () => {
  return (
    <section
      id="education"
      className="min-h-screen py-20 bg-muted/30 flex p-50"
    >
      <div className="container-custom">
        <h2 className="text-paragraph font-heading text-4xl font-semibold pb-1">
          Education
        </h2>
        <hr className="w-32 border-t-4 border-blue-700 border-muted/50"></hr>
        <div className="max-w-4xl mx-auto mt-12 px-20">
          <div className="bg-card p-6 rounded-lg shadow-lg">
            <div className="flex flex-wrap items-start justify-between mb-4">
              <h3 className="text-2xl font-heading font-bold">
                B. Tech In Computer Science & Engineering
              </h3>
              <span className="bg-slate-700 w-26 p-2 rounded-full ml-8 text-paragraph text-violet-600 py-1">
                2025 - 2028
              </span>
            </div>
            <h4 className="text-xm mb-4 text-paragraph opacity-70">
              North Eastern Regional Institute Of Science & Technology (NERIST)
            </h4>
            <ul className="space-y-3 items-center">
              <li className="flex items-start">
                <span className="text-violet-500">
                  <i className="ri-pushpin-fill"></i>
                </span>
                <span className="font-paragraph ml-2">
                  Expected Graduation : 2028
                </span>
              </li>
            </ul>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-lg">
            <div className="flex flex-wrap items-start justify-between mb-4">
              <h3 className="text-2xl font-heading font-bold">
                Diploma In Computer Science & Engineering
              </h3>
              <span className="bg-slate-700 w-26 p-2 rounded-full ml-8 text-paragraph text-violet-600 py-1">
                2022 - 2025
              </span>
            </div>
            <h4 className="text-xm mb-4 text-paragraph opacity-70">
              Nowgong Polytechnic , Nagaon
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
