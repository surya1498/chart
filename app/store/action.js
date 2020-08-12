const types = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_REQUEST_SUCCESS: 'LOGIN_REQUEST_SUCCESS',
  LOGIN_REQUEST_FAIL: 'LOGIN_REQUEST_FAIL',
  BANNER_NOTIFICATION: 'BANNER_NOTIFICATION',
};

const actions = {
  login: (payload) => ({
    type: types.LOGIN_REQUEST,
    payload,
  }),
  loginSuccess: (response) => ({
    type: types.LOGIN_REQUEST_SUCCESS,
    payload: response,
  }),
  loginFail: (error) => ({
    type: types.LOGIN_REQUEST_FAIL,
    payload: {
      error: error,
    },
  }),
  bannerNotification: () => ({
    type: types.BANNER_NOTIFICATION,
  }),
};

export {types};
export default actions;
