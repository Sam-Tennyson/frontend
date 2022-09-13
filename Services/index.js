import axios from "axios";

export async function getPost() {
    const res = await axios.get(`${process.env.STRAPI_LOCAL_URL}api/posts`)
    let data = await res.data;
    return data
}

export async function getSinglePost(id) {
    const res = await axios.get(`${process.env.STRAPI_LOCAL_URL}api/posts/${id}`)
    let data = await res.data;
    return data
}


export async function createBlog(formData) {
    const res = await axios.post(`${process.env.STRAPI_LOCAL_URL}api/posts`,{
        "data": 
            formData
        
    })
    let data = await res.data;
    return data

}