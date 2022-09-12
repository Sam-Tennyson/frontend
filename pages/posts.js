import axios from 'axios'
import React from 'react'
import AllPost from '../components/molecules/AllPost'

const Posts = ({postData}) => {
  return (
    <div className="w-4/5 m-auto mt-4"> 
      <h2 className='sm:text-3xl text-2xl text-center font-medium title-font mb-4 text-gray-900'>All Posts</h2>
      <AllPost postData={postData}/>    
    </div>
  )
}

export default Posts

export async function getStaticProps() {
  const res = await axios.get("http://localhost:1337/api/posts")
  const postData = await res.data;
  return { 
    props: { 
      postData: postData.data
    } 
  }
}