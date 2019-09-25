/* eslint-disable import/prefer-default-export */
export const loginSuccessActionCreator = payload => ({
  type: 'LOGIN_SUCCESS',
  payload,
});
export const loginFailActionCreator = error => ({
  type: 'LOGIN_FAIL',
  error,
});
export const fetchPackagesSuccessActionCreator = payload => ({
  type: 'FETCH_PACKAGE_SUCCESS',
  payload,
});
export const fetchPackagesFailActionCreator = error => ({
  type: 'FETCH_PACKAGE_FAIL',
  error,
});
export const registerUserActionCreator = payload => ({
  type: 'REGISTER_USER_SUCCESS',
  payload,
});
export const registerUserFailActionCreator = error => ({
  type: 'REGISTER_USER_FAIL',
  error,
});
