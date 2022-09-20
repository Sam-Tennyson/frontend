import axios from "axios";
import HomeHeader from "../components/molecules/HomeHeader";
import HomeLatestPost from "../components/molecules/HomeLatestPost";
import { getPost } from "../Services";
import Head from "next/head"

export default function Home({postData}) {
  // console.log("postData",postData);
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <title>Fun-with-js</title>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
        <meta name="google-site-verification" content="YMsjE6W20AJUEXp9l2Y7ywCnuKpKETSied8zYAsGq6U" />
      </Head>
      <div className="w-4/5 m-auto mt-4">
        <HomeHeader />
        <HomeLatestPost postData={postData} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const postData = await getPost()

  return { 
    props: { 
      postData: postData.data
    } 
  }
}
