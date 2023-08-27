export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const LOGOUT_AUTHED_USER = "LOGOUT_AUTHED_USER";

export function setAuthedUser(id) {
  return {
    type: SET_AUTHED_USER,
    id,
  };
}

export function handleLoginUser(username, password) {
  return (dispatch, getState) => {
    const { users } = getState();
    const user = Object.values(users)
      .find((user) => user.password === password && user.id === username);
    if (user) {
      return dispatch(setAuthedUser(user.id));
    }
  };
}

export const logoutAuthedUser = () => {
  return {
    type: LOGOUT_AUTHED_USER,
  };
};
