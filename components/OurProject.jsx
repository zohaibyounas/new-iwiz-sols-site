import React from "react";
import Image from "next/image";
import project from "../public/project.png";
import project1 from "../public/project1.png";
import project2 from "../public/project2.png";
import Link from "next/link";

const OurProject = () => {
  const projects = [
    {
      title: "Marketing Agency Website",
      subtitle: "Development, Marketing",
      image: project,
    },
    {
      title: "Mobile App Design",
      subtitle: "UI/UX Design",
      image: project1,
    },
    {
      title: "Web Platform Template",
      subtitle: "Web Development",
      image: project2,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1024px] mx-auto text-center">
        <p className="text-blue-500 text-sm font-medium">Our Project</p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-10 text-black">
          Tech Solutions Driving Global <br className="hidden md:block" />{" "}
          Connectivity
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-tl-3xl rounded-br-3xl w-full h-64"
            >
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {index === 0 && (
                <div className="absolute bottom-4 left-4 text-left">
                  <h3 className="font-semibold text-white text-lg drop-shadow-md">
                    {project.title}
                  </h3>
                  <p className="text-white text-sm drop-shadow-md">
                    {project.subtitle}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        <Link href="/projects">
          <button className="mt-10 px-8 py-4 rounded-tl-xl rounded-br-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold shadow-md hover:shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all ">
            View Our All Works
          </button>
        </Link>
      </div>
    </section>
  );
};

export default OurProject;
