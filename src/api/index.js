// Absolute imports
import axios from "axios";

// URL configuration
// Change the baseURL variable if the domain ever changes!
const baseURL = "https://bakepedia.herokuapp.com";
const testURL = "localhost:5000";
// const url = `${baseURL}/posts`;

const API = axios.create({ testURL });

// POSTS
// Fetch Posts
export const fetchPosts = () => API.get("/posts");

// Create Post
export const createPost = (newPost) => API.post("/posts", newPost);

// Update Post
export const updatePost = (id, postData) => API.patch(`/posts/${id}`, postData);

// Delete Post
export const deletePost = (id) => API.delete(`/posts/${id}`);

// Like Post
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

// AUTH
// Sign In
export const signIn = (formData) => API.post("/user/signin", formData);

// Sign Up
export const signUp = (formData) => API.post("/user/signup", formData);
