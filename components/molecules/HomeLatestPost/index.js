import React, { useEffect, useState } from "react";
import PostPreview from "../PostPreview";

const HomeLatestPost = ({ postData }) => {
  const [data, setData] = useState(postData);
  // console.log(data, postData);
  const renderPostPreviews = () => {
    return data.map((item, index) => {
      return (
        <div className="p-4 md:4/5 lg:w-1/3" key={index}>
          <PostPreview postData={item} />
        </div>
      );
    });
  };

  useEffect(() => {
    setData(postData.slice(0, 6));
  }, [postData]);

  return (
    <>
      <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-500">Latest Posts</h2>
      <div className="flex flex-wrap -m-4">{renderPostPreviews()}</div>
    </>
  );
};

export default HomeLatestPost;