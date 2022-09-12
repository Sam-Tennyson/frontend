import React, { useEffect, useState } from "react";
import PostPreview from "../PostPreview";

const AllPost = ({ postData }) => {
  const renderPostPreviews = () => {
    return postData.map((item, index) => {
      return (
        <>
          <div className="p-4 md:4/5 lg:w-1/3" key={index}>
            <PostPreview postData={item} />
          </div>
        </>
      );
    });
  };

  return (
    <>
      <div className="flex flex-wrap -m-4">{renderPostPreviews()}</div>
    </>
  );
};

export default AllPost;
