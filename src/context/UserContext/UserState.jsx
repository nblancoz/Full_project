import { createContext, useReducer } from "react";
import axios from "axios";
import UserReducer from "./UserReducer";

const token = JSON.parse(localStorage.getItem("token"));
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  token: token || null,
  user: user || null,
};

const API_URL = "http://localhost:8080";

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  const login = async (user) => {
    try {
      const res = await axios.post(API_URL + "/users/login", user);
      dispatch({
        type: "LOGIN",
        payload: res.data,
      });
      if (res.data) {
        localStorage.setItem("token", JSON.stringify(res.data.token));
        localStorage.setItem("user", JSON.stringify(res.data.user));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getUserInfo = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const res = await axios.get(API_URL + "/users/info", {
        headers: {
          authorization: token,
        },
      });
      dispatch({
        type: "GET_USER_INFO",
        payload: res.data,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const res = await axios.delete(API_URL + "/users/logout", {
        headers: {
          authorization: token,
        },
      });
      dispatch({
        type: "LOGOUT",
        payload: res.data,
      });
      if (res.data) {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const signUp = async (user) => {
    try {
      const res = await axios.post(API_URL + "/users/register", user);
      dispatch({
        type: "CREATE_USER",
        payload: res.data,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        token: state.token,
        user: state.user,
        login,
        getUserInfo,
        logout,
        signUp,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
