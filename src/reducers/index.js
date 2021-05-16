// Absolute imports
import { combineReducers } from "redux";

// Relative imports
import posts from "./posts";
import auth from "./auth";

export default combineReducers({
  posts,
  auth,
});
