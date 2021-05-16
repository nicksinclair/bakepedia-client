// Relative imports
import * as api from "../api";
import { actions } from "../constants/actionTypes";

export const signin = (formData, history) => async (dispatch) => {
  try {
    // TODO: Sign in user

    history.push("/");
  } catch (error) {
    console.error(error);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    // TODO: Sign up user

    history.push("/");
  } catch (error) {
    console.error(error);
  }
};
