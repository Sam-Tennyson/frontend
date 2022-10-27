import Image from "next/image";
import React from "react";

const HomeHeader = () => {
  return (
    <>
      <div className="flex justify-center md:flex-col w-full px-1 mb-4">
          {/* <Image
            className="hidden md:block lg:hidden"
            src={`/teacher.png`} 
            alt="Landscape picture"
            width={500}
            height={500}
            layout="fixed"
          /> */}
          <img
            className="hidden md:block lg:hidden"
            src="teacher.png"
            alt=""
          />
        <div className="flex flex-col md:flex-row sm:flex-col rounded-lg bg-white">

          <img
            className=" lg:w-2/5 lg:block lg:h-auto md:hidden  object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
            src="teacher.png"
            alt=""
          />
          <div className="flex flex-col justify-start">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              Javascript blog 👨‍🏫
            </h5>
            <div className="text-gray-700 text-justify mb-4 ">
   
              <ul className="bg-white text-gray-900">
                <li className="py-2  border-gray-200 w-full rounded-t-lg">
                  JavaScript is a cross-platform, object-oriented scripting
                  language used to make webpages interactive (e.g., having
                  complex animations, clickable buttons, popup menus, etc.).{" "}
                </li>
                <li className="py-2  border-gray-200 w-full">
                  There are also more advanced server side versions of
                  JavaScript such as Node.js, which allow you to add more
                  functionality to a website than downloading files (such as
                  realtime collaboration between multiple computers). Inside a
                  host environment (for example, a web browser), JavaScript can
                  be connected to the objects of its environment to provide
                  programmatic control over them.
                </li>
                <li className="py-2  border-gray-200 w-full">
                  JavaScript contains a standard library of objects, such as
                  Array, Date, and Math, and a core set of language elements
                  such as operators, control structures, and statements. Core
                  JavaScript can be extended for a variety of purposes by
                  supplementing it with additional objects.
                </li>
                <li className="py-2  border-gray-200 w-full">JavaScript creates a revolutionary technology that everyone seems to talk about. The domain of JavaScript is massive and has some very amazing powers which make our work very handy. 😎</li>
              </ul>
              
            </div>
            <div className="text-gray-600 text-lg"> 👨‍🎓👨‍🎓👩‍🎓  🔥 🍀</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHeader;
