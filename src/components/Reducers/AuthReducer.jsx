import ACTIONS from '../../components/Actions/Actions'

const isAuthenticated = localStorage.getItem("loggedUser");
const initialState = {
  isLogged: isAuthenticated,
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
        user: { ...state.user,
          email: action.payload.email,
          password: action.payload.password
        },
        isLogged: true,
      };
    }
    case ACTIONS.LOGIN_FAILURE: {
      return {
        ...state,
        isLogged: false,
        user: null
      };
    }
    case ACTIONS.LOG_OUT: {
      return {
        ...state,
        isLogged: false,
        user: null
      };
    }
    default:
      return state;
  }
};
export default AuthReducer;