import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import ReactMarkdown from "react-markdown";
import { getPost, getSinglePost } from "../../Services";
import { data } from "../../postData/data";

const Callback = ({ post }) => {
  const { asPath } = useRouter();

  const currentData = data.find((item) => item.attributes.Route == asPath);
  console.log(currentData,  currentData.attributes.Title);
  return (
    <>
      <Head>
      <title>Current Post</title>
      <meta name="description" content={currentData?.attributes?.Description} />
      <link rel="canonical" key="canonical" href={`${process.env.URL}${asPath}`}/>
    </Head>
      <section className="w-4/5 m-auto mt-4 text-justify">
        <div className="container px-5  mx-auto">
          <div className=" divide-y-2 divide-gray-100">
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:flex-grow">
                <h2 className="text-4xl text-center font-medium text-gray-900 title-font mb-2">
                  {currentData?.attributes?.Title}
                </h2>
                <div className="leading-relaxed">
                  <div className="font-bold">
                    Callback is very handy when we want to handle or manage
                    Asynchronous Javascript.
                  </div>
                  <div className="my-4">
                    Callback make sure that if you have some code which must run
                    after the completion of certain task then this can be
                    achieve with callback very easily. Callback is itself a
                    function can task another function as argument and also it
                    can return another function. <br />
                    Very confusing right 😎
                  </div>
                  Let&apos;s understand it with a very simple example.
                  {currentData?.attributes?.Content.map((item, ind) => {
                    console.log(item);
                    return (
                      <div
                        className="my-4 p-5 shadow shadow-grey-200 hover:font-bold hover:bg-yellow-400 rounded-md "
                        key={ind}
                      >
                        <div className="font-abc my-1 hover:font-bold  rounded-md px-3 py-3 text-xl ">
                          Question - {ind + 1}
                        </div>
                        <img src={`callback/${item.pic}`} alt="error" />
                        <div className=" my-2  font-abc text-lg font-thin hover:italic hover:underline">
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
