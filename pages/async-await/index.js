import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import ReactMarkdown from "react-markdown";
import { data } from "../../postData/data";
import blurImage from "../../public/logo.png"

const Promises = ({ post }) => {
  const { asPath } = useRouter();

  const currentData = data.find((item) => item.attributes.Route == asPath);
  return (
    <>
      <Head>
      <title>Current Post</title>
      <meta name="description" content={currentData?.attributes?.Description} />
      <link rel="canonical" key="canonical" href={`${process.env.URL}${asPath}`}/>
    </Head>
      <section className="w-11/12 m-auto mt-4 text-justify">
        <div className="container mx-auto">
          <div className=" divide-y-2 divide-gray-100">
            <div className="py-8 px-1 flex flex-wrap md:flex-nowrap">
              <div className="md:flex-grow">
                <h2 className="text-4xl text-center font-medium text-gray-900 title-font mb-2">
                  {currentData?.attributes?.Title}
                </h2>
                <div className="leading-relaxed">
                  {currentData?.attributes?.Content.map((item, ind) => {
                    return (
                      <div
                        className="my-4 shadow shadow-grey-200 hover:font-bold hover:bg-yellow-400 rounded-md "
                        key={ind}
                      >
                        <div className="font-abc my-1 hover:font-bold  rounded-md px-3 py-3 text-xl ">
                          Question - {ind + 1}
                        </div>
                        {/* <Image
                        placeholder="blur"
                          src={`/asyncAwait/${item.pic}`} 
                          alt="Landscape picture"
                          width={500}
                          height={250}
                          blurDataURL={blurImage}
                          layout="responsive"
                        /> */}
                        <img src={`asyncAwait/${item.pic}`} className="block ml-auto mr-auto"  alt="error" />
                        <div className=" my-2 p-2  font-abc text-lg font-thin hover:italic hover:underline">
                          Reason: 
                          {item.Ans}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Promises;
