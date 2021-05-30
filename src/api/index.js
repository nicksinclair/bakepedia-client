// Absolute imports
import axios from "axios";

// URL configuration
// Change the baseURL variable if the domain ever changes!
const baseURL = "https://bakepedia.herokuapp.com";
// const testURL = "localhost:5000";

const API = axios.create({ baseURL });

// Action that occurs before all requests
// Have to send token to server to verify user is logged in
API.interceptors.request.use((req) => {
  // Create Authorization header if profile exists in localStorage
  if (localStorage.getItem("profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

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
