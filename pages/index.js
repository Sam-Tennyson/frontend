import axios from "axios";
import HomeHeader from "../components/molecules/HomeHeader";
import HomeLatestPost from "../components/molecules/HomeLatestPost";
import { getPost } from "../Services";
import Head from "next/head"
import { useRouter } from "next/router";
import { data } from "../postData/data";

// export default function Home({props, postData}) {
export default function Home(props) {
  console.log("postData", props);
  console.log("dummy data", data);
  const { asPath } = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <meta name="description" content="Javascript Basic" />
        <link rel="canonical" key="canonical" href={`${process.env.URL}${asPath}`}/>
        {/* <meta name="robots" content="noindex"></meta> */}
        <title>Fun-with-js</title>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
        <meta name="google-site-verification" content="YMsjE6W20AJUEXp9l2Y7ywCnuKpKETSied8zYAsGq6U" />
      </Head>
      <div className="w-4/5 m-auto mt-4">
        <HomeHeader />
        <HomeLatestPost postData={data} />
      </div>
    </>
  );
}

// export async function getStaticProps() {
//   const postData = await getPost()

//   return { 
//     props: { 
//       postData: postData.data
//     } 
//   }
// }

// import fsPromises from 'fs/promises';
// import path from 'path'
// export async function getStaticProps() {
//   const filePath = path.join(process.cwd(), 'postData/var-let-const.json');
//   console.log(filePath, "filePath")
//   const jsonData = await fsPromises.readFile(filePath);
//   console.log(jsonData, "jsonData")
//   const objectData = JSON.parse(jsonData);
//   console.log(objectData, "objectData")

//   return {
//     props: objectData
//   }
// }