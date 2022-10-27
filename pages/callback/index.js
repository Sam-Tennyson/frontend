import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import ReactMarkdown from "react-markdown";
import { getPost, getSinglePost } from "../../Services";
import { data } from "../../postData/data";
import Image from "next/image";

const Callback = ({ post }) => {
  const { asPath } = useRouter();

  const currentData = data.find((item) => item.attributes.Route == asPath);
  return (
    <>
      <Head>
        <title>Current Post</title>
        <meta
          name="description"
          content={currentData?.attributes?.Description}
        />
        <link
          rel="canonical"
          key="canonical"
          href={`${process.env.URL}${asPath}`}
        />
      </Head>
      <section className="w-11/12 m-auto mt-4 text-justify">
        <div className="container  mx-auto">
          <div className=" divide-y-2 divide-gray-100">
            <div className="py-8 px-1 flex flex-wrap md:flex-nowrap">
              <div className="md:flex-grow">
                <h2 className="text-3xl text-center font-medium text-gray-900 title-font mb-2 hover:font-bold">
                   {currentData?.attributes?.Title} 😜
                </h2>
                <div className="leading-relaxed font-abc">
                  <div className="text-xl italic text-center">
                    Callback is very handy when we want to handle or manage
                    Asynchronous Javascript.
                  </div>
                  <div className="text-lg my-4">
                    Callback make sure that if you have some code which must run
                    after the completion of certain task then this can be
                    achieve with callback very easily. Callback is itself a
                    function can task another function as argument and also it
                    can return another function. <br />
                    Very confusing right 😎
                  </div>
                  Let&apos;s understand it with a very simple example.
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
                          src={`/callback/${item.pic}`} 
                          alt="Landscape picture"
                          width={500}
                          height={250}
                          layout="responsive"
                        /> */}
                        <img src={`callback/${item.pic}`} className="block ml-auto mr-auto" alt="error" />
                        <div className="px-2 py-2 my-3 font-abc md:text-md hover:italic hover:underline">
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

export default Callback;
