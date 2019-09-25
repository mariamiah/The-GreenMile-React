const initialState = {
  username: '',
  password: '',
  confirm_password: '',
  email: '',
  role: '',
};

const RegisterUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_USER_SUCCESS':
      return {
        ...state,
        payload: action.payload,
      };
    case 'REGISTER_USER_FAIL':
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};
export default RegisterUserReducer;
