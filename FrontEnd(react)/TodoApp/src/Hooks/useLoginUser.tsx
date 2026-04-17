//import type { User } from "../Models/Todo";
import type { LoginRequest } from "../Models/Todo";
import { jwtDecode } from "jwt-decode";


export const getToken = () => {
  return localStorage.getItem("token");
};

export interface JwtPayload {
  username: string;
}

export const useLoginUser = () => {
  return async (user: LoginRequest) => {
    const response = await fetch("https://localhost:44300/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    const data = await response.json();
    if (data.success == false) {
      console.log(data.message);
      return;
    }
    localStorage.setItem("token", data.token);

    const decoded = jwtDecode<JwtPayload>(data.token);

    return {
      success: data.success,
      email: data.email,
      username: decoded.username,
      message: data.message,
    };
    
  };
};
