// Absolute imports
import axios from "axios";

const baseURL = "https://bakepedia.herokuapp.com";
const url = `${baseURL}/posts`;

// Fetch Posts
export const fetchPosts = () => axios.get(url);

// Create Post
export const createPost = (newPost) => axios.post(url, newPost);

// Update Post
export const updatePost = (id, postData) =>
  axios.patch(`${url}/${id}`, postData);

// Delete Post
export const deletePost = (id) => axios.delete(`${url}/${id}`);

// Like Post
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
