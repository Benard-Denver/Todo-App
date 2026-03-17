import type { User } from "../Models/Todo";

export const getToken = () => {
  return localStorage.getItem("token");
};

export const useLoginUser = () => {
  return async (user: User) => {
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

    return {
      success: data.success,
      username: data.username,
      message: data.message,
    };
  };
};
