import axios from 'axios'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import AllPost from '../components/molecules/AllPost'
import { getPost } from '../Services'

const Posts = ({postData}) => {
  const { asPath } = useRouter();
  return (

    <>
      <Head>
        <title>All-Posts</title>
        <meta name="description" content="All Javascript Basic Post" />
        <link rel="canonical" key="canonical" href={`${process.env.URL}${asPath}`}/>
        {/* <meta name="robots" content="noindex"></meta> */}
      </Head>
      <div className="w-4/5 m-auto mt-4"> 
        <AllPost postData={postData}/>    
      </div>
      </>
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