import axios from "axios";
import React from "react";
import { getPost, getSinglePost } from "../../Services";

const PostPage = ({post}) => {
  return <>
    <section className="w-4/5 m-auto mt-4">
        <div className="container px-5  mx-auto">
          <div className=" divide-y-2 divide-gray-100">          
              
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                {post?.attributes?.Title}
                </h2>
                <div className="leading-relaxed">
                {post?.attributes?.Content}
                </div>
                
              </div>
            </div>
            
          </div>
        </div>
      </section>
  </>;
};

export default PostPage;

export async function getStaticProps({params}) {
  const res = await getSinglePost(params?.id)
  return {
    props: {post: res.data},
  };
}

export async function getStaticPaths() {
  const res = await getPost()
  const pathss = await res.data;
  const paths =  pathss.map((item) => {
    return { params: { id: item.id.toString() } };
  });
  return {
    paths,
    fallback: false,
  };
}
