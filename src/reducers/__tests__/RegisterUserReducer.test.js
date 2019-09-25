/* eslint-disable no-undef */

import RegisterUserReducer from '../RegisterUserReducer';

const initialState = {};
describe('Registration Reducer', () => {
  it('should return initial state', () => {
    expect(RegisterUserReducer(initialState, {})).toEqual(initialState);
  });
  it('should handle REGISTER_USER_SUCCESS', () => {
    const action = {
      type: 'REGISTER_USER_SUCCESS',
      payload: 'payload',
    };
    expect(RegisterUserReducer(initialState, action)).toEqual({
      payload: 'payload',
    });
  });
  it('should handle REGISTER_USER_FAIL', () => {
    const action = {
      type: 'REGISTER_USER_FAIL',
      error: 'error',
    };
    expect(RegisterUserReducer(initialState, action)).toEqual({
      error: 'error',
    });
  });
});
