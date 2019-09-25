import * as actions from './ActionTypes';

const { BASE_URL } = process.env;
const LoginAction = payload => dispatch => fetch(`${BASE_URL}/api/v1/auth/login`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  mode: 'cors',
  body: JSON.stringify(
    payload,
  ),
})
  .then(response => response.json())
  .then((json) => {
    if ('access_token' in json) {
      localStorage.setItem('access_token', json.access_token);
      dispatch(actions.loginSuccessActionCreator(json));
    } else {
      dispatch(actions.loginFailActionCreator(json));
    }
  })
  .catch(err => err);
export default LoginAction;
