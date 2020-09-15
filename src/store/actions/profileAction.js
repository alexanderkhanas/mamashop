import { SET_lOGIN, SET_USER_DATA } from "./actionTypes";
import { loginRequest, registerRequest } from "../api/api";

export const loginAction = (data) => {
  return async (dispatch) => {
    const response = await loginRequest(data);
    const token = response.data;
    console.log(response?.data, "response");
    if (response.status === 200) {
      // console.log(response.data.user, "user");
      document.cookie = `token=${token} `;
      dispatch({ type: SET_lOGIN, admin: { ...response.data.user } });
    } else {
      dispatch({ type: SET_lOGIN, admin: {} });
    }

    return response.status === 200;
  };
};

export const registerAction = (data) => {
  return async (dispatch) => {
    const response = await registerRequest(data);
    console.log("register response ===", response.data);
    if (response?.data) {
      dispatch({ type: SET_USER_DATA, user: response.data.user });
      const { token, aToken } = response.data;
      if (aToken) {
        document.cookie = `aToken=${aToken}; path=/`;
      }
      if (token) {
        document.cookie = `token=${token}; path=/`;
      }
    }
    return response?.data?.user?._id;
  };
};
