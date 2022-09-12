import Router from "next/router";
import React, { useState } from "react";
import CustomModal from "../../components/cells/CustomModal";
import { createBlog } from "../../Services";

const AddBlog = () => {
  const [blogData, setBlogData] = useState({Title: "", Description: "", Content: "", Picture: ""});
  
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => setBlogData({ ...blogData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
	e.preventDefault()
	// console.log(blogData)
  createBlog(blogData)
  Router.push("/")
  handleCloseShowModal()
  }

  const openShowModal = () => setShowModal(true);
  const handleCloseShowModal = () => setShowModal(false);

  return (
    <div className="w-4/5 m-auto mt-4">
      <CustomModal showModal={showModal} handleClose={handleCloseShowModal}>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="Title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Blog Title
            </label>
            <input
				value={blogData.Title}
				onChange={handleChange}
              type="text"
              id="Title"
              name="Title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your title"
              required=""
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="Description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Blog Description
            </label>
            <input
				value={blogData.Description}
				onChange={handleChange}
              type="text"
              placeholder="Enter your description"
              id="Description"
              name="Description"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Blog Content
            </label>
            <textarea
              id="Content"
              name="Content"
			  value={blogData.Content}
			  onChange={handleChange}
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your content..."
            ></textarea>
          </div>

          <div className="mb-6">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              htmlFor="user_avatar"
            >
              Upload file
            </label>
            <input
              value={blogData.Picture}
              className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="user_avatar_help"
              onChange={handleChange}
              id="Picture"
              name="Picture"
              placeholder="Upload a file"
              type="file"
            />
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </CustomModal>
      <button onClick={openShowModal}>Add Blog</button>
    </div>
  );
};

export default AddBlog;
