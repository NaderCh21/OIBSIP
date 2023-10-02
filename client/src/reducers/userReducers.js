export const registerUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_REGISTER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "USER_REGISTER_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true,
      };
    case "USER_REGISTER_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const loginUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_LOGIN_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "USER_LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true,
        currentUser: action.payload,
      };
    case "USER_LOGIN_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const adminPageReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "FETCH_USERS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_USERS_SUCCESS":
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case "FETCH_USERS_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "DELETE_USER_SUCCESS":
      return {
        ...state,
        // Remove the deleted user from the users array
        users: state.users.filter((user) => user._id !== action.payload),
      };
    case "DELETE_USER_FAILED":
      return {
        ...state,
        // Handle delete user failure (e.g., show an error message)
      };
    default:
      return state;
  }
};
