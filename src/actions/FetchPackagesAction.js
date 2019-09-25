/* eslint-disable camelcase */
import * as actions from './ActionTypes';

const { BASE_URL } = process.env;
const access_token = localStorage.getItem('access_token');
const FetchPackagesAction = () => dispatch => fetch(`${BASE_URL}/api/v1/packages`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${access_token}`,
  },
  mode: 'cors',
})
  .then(response => response.json())
  .then((json) => {
    if (json.Packages) {
      dispatch(actions.fetchPackagesSuccessActionCreator(json.Packages));
    } else {
      dispatch(actions.fetchPackagesFailActionCreator(json));
    }
  })
  .catch(err => err);
export default FetchPackagesAction;
