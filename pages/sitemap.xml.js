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
                        <loc>https://www.funwithjs.com/posts/${id}}</loc>
                    </url>
                `;}).join('')}
    </urlset>`
}


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