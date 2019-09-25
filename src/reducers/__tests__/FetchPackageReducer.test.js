/* eslint-disable prefer-const */
/* eslint-disable no-undef */
import reducers from '..';
import FetchPackagesReducer from '../FetchPackagesReducer';

const initialState = {};
describe('reducers state', () => {
  it('returns default state', () => {
    let state;
    state = reducers(undefined, {});
    expect(state).toEqual({
      LoginReducer: { username: '', password: '' },
      FetchPackagesReducer: { Packages: [] },
      RegisterUserReducer: {
        confirm_password: '',
        email: '',
        password: '',
        role: '',
        username: '',
      },
    });
  });
  it('should handle FETCH_PACKAGE_SUCCESS', () => {
    const action = {
      type: 'FETCH_PACKAGE_SUCCESS',
      payload: 'payload',
    };
    expect(FetchPackagesReducer(initialState, action)).toEqual({
      Packages: 'payload',
    });
  });
  it('should handle FETCH_PACKAGE_FAIL', () => {
    const action = {
      type: 'FETCH_PACKAGE_FAIL',
      error: 'error',
    };
    expect(FetchPackagesReducer(initialState, action)).toEqual({
      error: 'error',
    });
  });
});
