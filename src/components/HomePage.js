import React from "react";

export default function HomePage() {
  return (
    <section id="about" className="flex h-screen">
      <div className="container mx-auto mx-55 flex px-20 py-40">
        <div className="pt-30 space-y-5 lg:flex-grow lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-lg text-sm  font-medium text-white">
            Hi, my name is
          </h1>
          <div>
            <h2 className="title-font font-bold text-white sm:text-7xl">
              Jason Yang.
            </h2>
          </div>
          <div>
            <h3 className="title-font font-bold text-slate-400 sm:text-6xl justify-start">
              I build digital products.
            </h3>
          </div>
          <div className=" max-w-lg text-left">
            <p className="mb-8 leading-relaxed text-left">
              I'm a New Grad Software Engineer specializing in building (and
              occasionally designing) robust and extensible software components
              and products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
