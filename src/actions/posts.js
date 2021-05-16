// Relative imports
import * as api from "../api";
import { actions } from "../constants/actionTypes";

// Action Creators
// Functions that return actions

// Get Posts
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    // Dispatch instead of returning
    dispatch({ type: actions.FETCH_ALL, payload: data });
  } catch (error) {
    console.error(error);
  }
};

// Create Post
export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: actions.CREATE, payload: data });
  } catch (error) {
    console.error(error);
  }
};

// Update Post
export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: actions.UPDATE, payload: data });
  } catch (error) {
    console.error(error);
  }
};

// Delete Post
export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: actions.DELETE, payload: id });
  } catch (error) {
    console.error(error);
  }
};

// Like Post
export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);

    dispatch({ type: actions.UPDATE, payload: data });
  } catch (error) {
    console.error(error);
  }
};
