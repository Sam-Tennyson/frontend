import axios from 'axios'
import React from 'react'
import AllPost from '../components/molecules/AllPost'
import { getPost } from '../Services'

const Posts = ({postData}) => {
  return (
    <div className="w-4/5 m-auto mt-4"> 
      <AllPost postData={postData}/>    
    </div>
  )
}

export default Posts

export async function getStaticProps() {
  const postData = await getPost()

  return { 
    props: { 
      postData: postData.data
    } 
  }
}