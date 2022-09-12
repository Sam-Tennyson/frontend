import React from "react";
import Link from "next/link";
import moment from "moment";

const PostPreview = ({ postData }) => {
  return (
    <>
      
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src="templateLogo.png"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <Link href={`/posts/${postData.id}`}>
            <div className="font-bold text-3xl mb-2 cursor-pointer">{postData.attributes.Title}</div>
          </Link>
          <div className="text-gray-700 text-base">
          {postData.attributes.Description}.
          </div>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #javascript
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #tailwind css
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #html
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #web development
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #react js
          </span>
        </div>
      </div>
      
    </>
  );
};

export default PostPreview;
