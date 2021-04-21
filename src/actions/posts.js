// Relative imports
import * as api from "../api";

// Action Creators
// Functions that return actions
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    // Dipatch instead of returning
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.error(error.message);
  }
};
