import Link from "next/link";
import React from "react";
import { WEBSITE_NAME } from "../../../Constant";

const Navbar = () => {
  return (
    <>
      <header className="text-gray-600 body-font ">
        <div className="container mx-auto flex flex-wrap  p-5 flex-col md:flex-row items-center">
          <Link href={"/"}>
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src={"logo.png"} alt="error" width={"80px"}/>
            {/* <span className="ml-3 text-xl">{WEBSITE_NAME}</span> */}
          </a></Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"/all-posts"}>
                <a className="mr-5 text-3xl hover:text-gray-900">All Post</a> 
            </Link>
          </nav>
        </div>
        <hr></hr>
      </header>
    </>
  );
};

export default Navbar;
