import { SET_lOGIN } from "../actions/actionTypes";

const initialState = {
  email: "",
  password: "",
  token: "",
  _id: "",
  fullName: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_lOGIN:
      return {
        ...state,
        email: action.admin.email,
        password: action.admin.password,
      };
    case SET_USER_DATA:
      return {
        ...state,
        email: action.user.email,
        fullName: action.user.fullName,
        _id: action.user._id,
      };
    // case LOGOUT:
    //   return {
    //     initialState,
    //   };
    default:
      return state;
  }
};
