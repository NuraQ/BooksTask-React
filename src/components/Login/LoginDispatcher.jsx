import ACTIONS from "../../components/Actions/Actions";

export const SetCurrentUser = (user)  => (dispatch) => {
   dispatch({
    type: ACTIONS.LOGIN_REQUEST,
    payload: { user },
  });
};
export const SetFailedLogin = () => (dispatch) => {
  dispatch({
    type: ACTIONS.LOGIN_FAILURE,
    payload: {},
  });
};

export const ClearCurrentUser = () => (dispatch) => {
  return dispatch({
    type: ACTIONS.LOG_OUT,
    payload: {},
  });
};
