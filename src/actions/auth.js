// Relative imports
import * as api from "../api";
import { actions } from "../constants/actionTypes";

export const signIn = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: actions.AUTH, data });

    // Immediately go back to home page after successful sign in
    history.push("/");
  } catch (error) {
    console.error(error);
  }
};

export const signUp = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: actions.AUTH, data });

    // Immediately go back to home page after successful sign up
    history.push("/");
  } catch (error) {
    console.error(error);
  }
};
