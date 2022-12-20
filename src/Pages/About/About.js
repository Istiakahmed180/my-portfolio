import { useState } from "react";
import { Tab } from "@headlessui/react";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  let [categories] = useState({
    "About Me": [
      {
        id: 1,
        title: "I'm Istiak Ahmed",
        description:
          "Front End Developer, with extensive knowledge and months of experience, working in web technology and UI/UX design, delivering quality work. I create web pages with UI/UX user interfaces. I love coding. I have done backend work on some projects and got a good appreciation for all these projects. I am an expert in HTML5, CSS3, Bootstrap, Tailwind CSS, JavaScript, React Js, Node Js, Express Js, and MongoDB. I am looking for a position where I have technical skills.",
        connect: "Connect With Me:",
      },
    ],
    Education: [
      {
        id: 1,
        title: "Degree: kushtia Polytechnic Institute",
        subject: "Subject: Electrical Engineering Technologies",
        year: "2015-2016",
      },
    ],
  });

  return (
    <div id="about" className="lg:w-3/4 w-full mx-auto  px-2 my-40 sm:px-0">
      <h1 className="text-center text-4xl text-[#FCA61F] my-10 font-bold">
        About Me
      </h1>
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-gradient-to-r from-[#fdc50f] to-[#fb982f]  p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-[#F9A029] focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-white p-3",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="text-black relative rounded-md p-3 hover:bg-gray-100"
                  >
                    <h3 className=" lg:text-2xl text-base font-medium text-[#FCA61F]">
                      {post.title}
                    </h3>
                    <h5 className="text-xs mt-2">{post.description}</h5>
                    <div className="flex text-xs mt-2 lg:justify-between flex-col">
                      <span className="mb-2">{post.subject}</span>
                      <span>{post.year}</span>
                    </div>
                    <small className="font-medium text-black">
                      {post.connect}
                    </small>
                    <Link
                      href="#"
                      className={classNames(
                        "absolute inset-0 rounded-md",
                        "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                      )}
                    />
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
