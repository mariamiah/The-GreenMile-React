/* eslint-disable camelcase */
import * as actions from './ActionTypes';

const { BASE_URL } = process.env;
const access_token = localStorage.getItem('access_token');
export const RegistrationAction = payload => dispatch => fetch(`${BASE_URL}/api/v1/auth/signup`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${access_token}`,
  },
  mode: 'cors',
  body: JSON.stringify(
    payload,
  ),
})
  .then(response => response.json())
  .then((json) => {
    if (json.message === 'user successfully created') {
      dispatch(actions.registerUserActionCreator(json));
    } else {
      dispatch(actions.registerUserFailActionCreator(json));
    }
  })
  .catch(err => err);
export default RegistrationAction;
