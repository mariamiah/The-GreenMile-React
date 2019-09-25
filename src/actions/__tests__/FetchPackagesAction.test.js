/* eslint-disable no-undef */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import FetchPackagesAction from '../FetchPackagesAction';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const { BASE_URL } = process.env;
const PackagesUrl = `${BASE_URL}/api/v1/packages`;

describe('Fetch Packages Action', () => {
  beforeEach(() => {
    fetchMock.restore();
  });
  it('fetches a package', () => {
    fetchMock.getOnce(PackagesUrl, {
      headers: { 'content-type': 'application/json' },
      body: {
        Packages: [],
      },
    });
    const expectedAction = [{
      type: 'FETCH_PACKAGE_SUCCESS',
      payload: [],
    }];
    const store = mockStore();
    return store.dispatch(FetchPackagesAction()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
  it('doesnot fetch a package on fail', () => {
    fetchMock.getOnce(PackagesUrl, {
      headers: { 'content-type': 'application/json' },
      body: {
        errors: 'errors',
      },
    });
    const expectedAction = [{
      type: 'FETCH_PACKAGE_FAIL',
      error: {
        errors: 'errors',
      },
    }];
    const store = mockStore();
    return store.dispatch(FetchPackagesAction()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
  it('is capable of catching errors', () => {
    fetchMock.getOnce(PackagesUrl, {
      body: undefined,
      headers: { 'content-type': 'application/json' },
    });
    const expectedAction = [];
    const store = mockStore();
    return store.dispatch(FetchPackagesAction()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
