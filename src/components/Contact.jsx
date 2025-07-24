import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-20 bg-muted/30 flex p-50">
      <div className="container-custom">
        <h2 className="text-paragraph font-heading text-4xl font-semibold pb-1">
          Get In Touch
        </h2>
        <hr className="w-42 border-t-4 border-blue-700 border-muted/50"></hr>

        <div className="grid grid-cols-2 gap-10 mt-10">
          <div className="">
            <h3 className="space-y-6 font-heading text-2xl font-semibold">
              Contact Information
            </h3>
            <div className="pt-5 font-paragraph">
              <p className="opacity-70">Email</p>
              <p>parthaprotim896@gmail.com</p>
            </div>
            <div className="pt-5 font-paragraph">
              <p className="opacity-70">Phone No</p>
              <p>8822152921</p>
            </div>
            <div className="pt-5 font-paragraph">
              <p className="opacity-70">Social Profiles</p>
              <div className="flex space-x-6 mt-2 text-xl">
                <a href="https://github.com/Partha112" target="_blank">
                  <i className="ri-github-line"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/parthaprotim-nath-65066824b"
                  target="_blank"
                >
                  <i className="ri-linkedin-box-fill"></i>
                </a>
              </div>
            </div>
          </div>

          <form className="space-y-4 mt-2 rounded-md font-paragraph">
            <div className="font-paragraph">
              <label className="block font-semibold">Name</label>
              <input
                type="text"
                size={70}
                className="border-2  rounded px-4 py-2 w-full mt-2"
                placeholder="Your Name"
              />
            </div>
            <div className="mt-4">
              <label className="block font-semibold">Email</label>
              <input
                type="email"
                className="border-2 rounded px-4 py-2 w-full mt-2"
                placeholder="Your Email"
              />
            </div>
            <div className="mt-4">
              <label className="block font-semibold">Message</label>
              <textarea
                className="border-2 rounded px-4 py-2 w-full h-32 mt-2"
                placeholder="Enter Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-4 bg-blue-700 hover:bg-blue-800 transform-border text-white px-6 py-2 w-full rounded cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
