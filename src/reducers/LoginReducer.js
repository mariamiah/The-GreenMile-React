const initialState = {
  username: '',
  password: '',
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGIN_FAIL':
      return {
        ...state,
        error: action.error,
      };
      print(board)
    default:
      return state;
  }
};
export default LoginReducer;
