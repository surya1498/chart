import thunkMiddleware from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import reducer from './reducer';
import actions from './action';
import axios from 'axios';
import {BASE_URL} from '../constants';

const rootReducer = combineReducers({
  loginReducer: reducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const login = (payload) => {
  return (dispatch) => {
    dispatch(actions.login({isLoading: true, email: payload.email}));
    axios({
      method: 'post',
      url: `${BASE_URL}v1/login`,
      data: {
        email: payload.email,
        password: payload.password,
      },
    })
      .then((res) => {
        dispatch(actions.loginSuccess(res.data.msg));
      })
      .catch((err) => dispatch(actions.loginFail(err.response.data.error)));
  };
};

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware)),
);
