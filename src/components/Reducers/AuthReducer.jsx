import ACTIONS from '../../components/Actions/Actions'

const initialState = {
  logged: false,
  user: {
    email: "",
    password: "",
  },
};
 const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.LOGIN_REQUEST: {
      return {
        ...state,
        user: action.payload.user,
        logged: true,
      };
    }
    case ACTIONS.LOGIN_FAILURE: {
      return {
        ...state,
        logged: false,
      };
    }

    default:
      return state;
  }
};
export default AuthReducer;