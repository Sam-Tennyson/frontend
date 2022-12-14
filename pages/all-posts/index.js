import { data } from "../../postData/data";
import React, { useEffect, useState } from "react";
import PostPreview from "../../components/molecules/PostPreview";
import Head from "next/head";
import { useRouter } from "next/router";

const ShowAll = ({ postData }) => {
  const [alldata, setData] = useState(data);
  // console.log(data, postData);
  const renderPostPreviews = () => {
    return alldata.map((item, index) => {
      return (
        // <div className="p-4 " key={index}>
        <div className="py-2 md:p-4 md:4/5 lg:w-1/3" key={index}>
          <PostPreview postData={item} />
        </div>
      );
    });
  };
  const { asPath } = useRouter();

  return (
    <>
      <Head>
        <title>All Post</title>
        <meta name="description" content={"Javascript Basic"} />
        <link rel="canonical" key="canonical" href={`${process.env.URL}${asPath}`}/>
      </Head>
      <div className="w-11/12 m-auto">
        <h2 className="sm:text-3xl text-2xl font-medium title-font my-4 mb-4 text-gray-500 text-center">
          Important Topics
        </h2>
        <div className="flex flex-wrap justify-around   ">
          {renderPostPreviews()}
        </div>
        {!data.length ? (
          <h2 className="sm:text-3xl my-5 text-center text-2xl font-medium title-font mb-4 text-black">
            No post found
          </h2>
        ) : null}
      </div>
    </>
  );
};

export default ShowAll;
