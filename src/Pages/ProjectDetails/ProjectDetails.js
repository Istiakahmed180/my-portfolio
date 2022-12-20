import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ProjectDetails = () => {
  const projects = useLoaderData();
  const {
    image2,
    image3,
    image4,
    live_link,
    github_link,
    name,
    point1,
    point2,
    point3,
    technology_used,
  } = projects;
  return (
    <section className="mb-28 ">
      <div className=" flex flex-col justify-center p-4 mx-auto">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3  sm:grid-cols-2">
          <img
            alt=""
            className=" w-full  aspect-video rounded-lg"
            src={image2}
          />
          <img
            alt=""
            className=" w-full  aspect-video rounded-lg"
            src={image3}
          />
          <img
            alt=""
            className=" w-full  aspect-video rounded-lg"
            src={image4}
          />
        </div>
      </div>
      <section className="">
        <div className="container px-4 py-16 mx-auto space-y-8 lg:max-w-3xl">
          <h2 className="text-2xl font-bold md:text-3xl text-[#FDB918] hover:text-yellow-500">
            {name}
          </h2>
          <div className="space-y-8">
            <div>
              <ul className="space-y-4">
                <li className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 fill-current dark:dark:text-violet-400"
                    >
                      <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                      <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                    </svg>
                    <h4 className="">{point1}</h4>
                  </div>
                </li>
                <li className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 fill-current dark:dark:text-violet-400"
                    >
                      <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                      <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                    </svg>
                    <h4 className="">{point2}</h4>
                  </div>
                </li>
              </ul>
            </div>
            <div className="text-sm">
              <ul className="space-y-4">
                <li className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 fill-current dark:dark:text-violet-400"
                    >
                      <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                      <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                    </svg>
                    <h4 className="">{point3}</h4>
                  </div>
                </li>
                <li className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 fill-current dark:dark:text-violet-400"
                    >
                      <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                      <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                    </svg>
                    <h4 className="">
                      Quis velit quae similique maxime optio temporibus
                    </h4>
                  </div>
                </li>
                <li className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 fill-current dark:dark:text-violet-400"
                    >
                      <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                      <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                    </svg>
                    <h4 className="">
                      Quis velit quae similique maxime optio temporibus
                    </h4>
                  </div>
                </li>
              </ul>
              <p className="mt-3 text-sm">
                <span className="text-[#FDC50F] font-bold">
                  Technology Used:{" "}
                </span>
                {technology_used}
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center space-x-5">
        <a href={live_link}>
          <button className="button">Live</button>
        </a>
        <a href={github_link}>
          <button className="button">Github</button>
        </a>
      </div>
    </section>
  );
};

export default ProjectDetails;
