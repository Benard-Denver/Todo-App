// import type { User } from "../Models/Todo";

// export const usePostUser = () => {
//   const url = "https://localhost:44300/users/signup";

//   const createUser = async (user: User) => {
//     const response = await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(user),
//     });
//     if (!response.ok) {
//       const error = await response.text();
//       console.log("Failed to create user", error);
//       return false;
//     }
//     return true;
//   };
//   return createUser;
// };
import type { User } from "../Models/Todo";

export const usePostUser = () => {
  const url = "https://localhost:44300/users/signup";

  const createUser = async (user: User) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        const error = await response.text();
        console.log("Failed to create user:", error);
        return false;
      }
      const data = await response.json();
      localStorage.setItem("token", data.token);

      console.log("User created successfully");
      return true;
    } catch (err) {
      console.log("Network error:", err);
      return false;
    }
  };

  return createUser;
};
