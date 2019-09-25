const initialState = {
  Packages: [],
};

const FetchPackagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PACKAGE_SUCCESS':
      return {
        ...state,
        Packages: action.payload,
      };
    case 'FETCH_PACKAGE_FAIL':
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};
export default FetchPackagesReducer;
