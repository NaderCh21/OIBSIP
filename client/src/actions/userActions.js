import axios from 'axios'
export const registerUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQUEST" });

  try {
    const response = await axios.post("/api/users/register", user);
    console.log("Registration Response:", response); // Add this line for logging
    dispatch({ type: "USER_REGISTER_SUCCESS" });
  } catch (error) {
    console.log("Registration Error:", error); // Add this line for logging
    dispatch({ type: "USER_REGISTER_FAILED", payload: error });
  }
};

export const loginUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_LOGIN_REQUEST" });

  try {
    const response = await axios.post("/api/users/login", user);
    console.log("Login Response:", response); // Add this line for logging
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: response.data });
    localStorage.setItem("currentUser", JSON.stringify(response.data));
    window.location.href = '/';
  } catch (error) {
    console.log("Login Error:", error); // Add this line for logging
    dispatch({ type: "USER_LOGIN_FAILED", payload: error });
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('currentUser')
  window.location.href = '/login'
}


// Existing actions


export const fetchUsers = () => async (dispatch) => {
  dispatch({ type: 'FETCH_USERS_REQUEST' });

  try {
    const response = await axios.get('/api/users');
    console.log('API Response:', response.data); // Add this line for logging
    dispatch({ type: 'FETCH_USERS_SUCCESS', payload: response.data });
  } catch (error) {
    console.log('Error fetching users:', error);
    dispatch({ type: 'FETCH_USERS_FAILED', payload: error });
  }
};

export const deleteUser = (userId) => async (dispatch) => {
  try {
    // Make a DELETE request to the API endpoint for deleting a user
    await axios.delete(`/api/users/${userId}`);
    // Dispatch a success action
    dispatch({ type: "DELETE_USER_SUCCESS", payload: userId });
  } catch (error) {
    // Handle error and dispatch a failure action if needed
    dispatch({ type: "DELETE_USER_FAILED", payload: error });
  }
}