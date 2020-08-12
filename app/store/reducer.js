import  {types} from './action';

const INITIAL_STATE = {
  isLoggedIn: false,
  isLoading: false,
  error: null,
  email: '',
  isBannerVisible: true,
};
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        ...action.payload,
      };
    case types.LOGIN_REQUEST:
      return {
        ...state,
        ...action.payload,
      };

    case types.LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
      };

    case types.LOGIN_REQUEST_FAIL:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
      };
    case types.BANNER_NOTIFICATION:
      return {
        ...state,
        isBannerVisible: !state.isBannerVisible,
      };

    default:
      return state;
  }
};

export default reducer;