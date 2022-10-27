import Image from "next/image";
import Link from "next/link";
import React from "react";
import { WEBSITE_NAME } from "../../../Constant";

const Footer = () => {
  return (
    <>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          
              
            {/* <span className="ml-3 text-xl"> 
            <img src={"logo.png"} alt="error" width={"80px"}/>
            </span> */}
          
          <Image
            src={`/logo.png`} 
            alt="Landscape picture"
            width={70}
            height={70}
            layout="intrinsic"
          />
          <div className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2022 {WEBSITE_NAME} — All Rights Reserved 
          </div>
          <ul className="flex flex-wrap  flex-col sm:flex-row sm:px-10 items-center mt-3 text-0.5sm sm:text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
            <Link href={"/privacy-and-policy"}>
              <li>
                <a href="#" className="mr-4 text-gray-400 hover:underline md:mr-6 ">
                  Privacy Policy
                </a>
              </li>
            </Link>

            <Link href={"/disclaimer"}>
              <li>
                <a href="#" className="mr-4 text-gray-400 hover:underline md:mr-6 ">
                  Disclaimer
                </a>
              </li>
            </Link>

            <Link href={"/terms-and-conditions"}>
              <li>
                <a href="#" className="mr-4 text-gray-400 hover:underline md:mr-6 ">
                  Terms & conditions
                </a>
              </li>
            </Link>
          </ul>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-500" target="_blank"  rel="noreferrer" href="https://www.facebook.com/profile.php?id=100086980339368">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500" target={"_blank"} rel="noopener noreferrer" href="https://twitter.com/SamFunwithjs">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500" rel="noopener noreferrer" href="https://www.instagram.com/samtennyson707/" target="_blank">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
           
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
