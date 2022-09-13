import axios from "axios";
import HomeHeader from "../components/molecules/HomeHeader";
import HomeLatestPost from "../components/molecules/HomeLatestPost";
import { getPost } from "../Services";

export default function Home({postData}) {
  // console.log("postData",postData);
  return (
    <>
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
