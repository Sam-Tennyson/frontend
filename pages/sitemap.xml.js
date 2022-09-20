import { getPost, getSinglePost } from "../Services";

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.funwithjs.com/schemas/sitemap/0.9">
        <url>
            <loc>https://www.funwithjs.com/posts</loc>
            <changefreq>daily</changefreq>
            <priority>0.7</priority>
        </url>
        <url>
            <loc>https://www.funwithjs.com/privacy-and-policy</loc>
            <changefreq>daily</changefreq>
            <priority>0.7</priority>
        </url>
        <url>
            <loc>https://www.funwithjs.com/disclaimer</loc>
            <changefreq>daily</changefreq>
            <priority>0.7</priority>
        </url>
        <url>
            <loc>https://www.funwithjs.com/terms-and-conditions</loc>
            <changefreq>daily</changefreq>
            <priority>0.7</priority>
        </url>
        ${posts.map(({ id }) => {
            return `<url>
                        <loc>https://www.funwithjs.com/posts/${id}</loc>
                    </url>
                `;}).join('')}
    </urlset>`
}


// export async function getServerSideProps() {
//   const res = await getPost()
//   const pathss = await res.data;
//   const paths =  pathss.map((item) => {
//     return { params: { id: item.id.toString() } };
//   });
//   return {
//     paths,
//     fallback: false,
//   };
// }

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const request = await getPost()
  const posts = await request.data;

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;