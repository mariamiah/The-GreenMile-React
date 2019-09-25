/* eslint-disable no-undef */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { RegistrationAction } from '../RegisterUserAction';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const { BASE_URL } = process.env;
const registrationUrl = `${BASE_URL}/api/v1/auth/signup`;

describe('<Registration Action />', () => {
  beforeEach(() => {
    fetchMock.restore();
  });

  it('fails to register a user if unauthenticated', () => {
    fetchMock.postOnce(registrationUrl, {
      body: { errors: {} },
      headers: { 'content-type': 'application/json' },
    });

    const expectedAction = [{
      type: 'REGISTER_USER_FAIL',
      error: { errors: {} },
    }];

    const invalidData = {
      username: '',
      password: '123',
      confirm_password: '12345678Maih',
      email: 'mar@gmailcom',
      role: 'Loader',
    };
    const store = mockStore();
    return store.dispatch(RegistrationAction(invalidData)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
  it('successfully registers an authenticated user', () => {
    fetchMock.postOnce(registrationUrl, {
      body: {
        message: 'User registered successfully',
      },
      headers: { 'content-type': 'application/json' },
    });

    const expectedAction = [{
      type: 'REGISTER_USER_SUCCESS',
      payload: { message: 'User registered successfully' },
    }];

    const validData = {
      username: 'mariah',
      password: '12345678Maih',
      confirm_password: '12345678Maih',
      email: 'mar@gmail.com',
      role: 'Supplier',
    };
    const store = mockStore();
    return store.dispatch(RegistrationAction(validData)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
  it('is capable of catching errors', () => {
    fetchMock.postOnce(registrationUrl, {
      body: undefined,
      headers: { 'content-type': 'application/json' },
    });
    const expectedAction = [];
    const regData = {
      username: 'mariaffd',
      password: '12345678Maih',
      confirm_password: '12345678Maih',
      email: 'mariahty@gmail.com',
      role: 'Recipient',
    };
    const store = mockStore();
    return store.dispatch(RegistrationAction(regData)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
