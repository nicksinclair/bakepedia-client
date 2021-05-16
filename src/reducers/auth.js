import { actions } from "../constants/actionTypes";

const { AUTH, LOGOUT } = actions;

const reducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));

      return { ...state, authData: action?.data };
    case LOGOUT:
      localStorage.removeItem("profile");

      return { ...state, authData: null };
    default:
      return state;
  }
};

export default reducer;
