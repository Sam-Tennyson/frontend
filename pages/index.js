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


// export async function getServerSideProps() {
//   // let token  = process.env.blogContextToken
//   // const config = {
//   //   headers: { Authorization: `Bearer ${token}` }
//   // };
//   // const postResponse = await axios.get("http://localhost:1337/api/posts",  {
//   //   headers: {
//   //     'Authorization': `Bearer ${token}`
//   //   }
//   // })
//   // // const postResponse = await axios.get("https://jsonplaceholder.typicode.com/todos/1",  {
//   //   // headers: {
//   //   //   'Authorization': `Bearer ${token}`
//   //   // }
//   // })
//   // const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
//   // const data = await res.json()
//   // const postResponse = "rererer"
//   // console.log("test",postResponse) 
//   return {
//     props: {
//       postData : postResponse.data
//       // data
//     }
//   }
// }
