import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePostUser } from "../Hooks/usePostUser";
import { useLoginUser } from "../Hooks/useLoginUser";
import { useSnackbar } from "notistack";
import { toast } from "sonner";

function AuthPage() {
  const [isLogin, setLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const createUser = usePostUser();
  const { enqueueSnackbar } = useSnackbar();
  const login = useLoginUser();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email.trim() || !password) {
      console.log("Enter Username and Password!");
      enqueueSnackbar("Enter Email and Password!", {
        variant: "warning",
        autoHideDuration: 3000,
      });
      return;
    }
    const result = await login({ email, password });
    if (!result) {
      enqueueSnackbar("Invalid Email or Password!", {
        variant: "error",
        autoHideDuration: 3000,
      });
      return;
    }

    console.log("User login successful");
    console.log(`User: ${result.username}`);
    localStorage.setItem("todo_user", result.username);
    navigate("/Home", { state: { username:result.username } });
    // enqueueSnackbar("Login Successful", {
    //   variant: "success",
    //   autoHideDuration: 3000,
    // });
    toast.success("Login Successful");
  };

  const handleEnter = async (e) => {
    e.preventDefault();
    if (!username.trim() || !password || !email) {
      console.log("Enter Username, Email and Password!");
      return;
    }

    const result = await createUser({ username, email, password });
    if (!result) {
      console.log("Failed to create user");
      return;
    }

    localStorage.setItem("todo_user", username);
    console.log(`Created user: ${username}`);
    navigate("/Home", { state: { username } });
  };

  return (
    <div className="auth">
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>
      <p>Focus on being productive instead of busy.</p>

      {isLogin ? (
        <form className="login-form">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
          <button type="submit" className="submit" onClick={handleLogin}>
            Login
          </button>
        </form>
      ) : (
        <form className="signup-form">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              //setError("");
            }}
            required
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
          <button type="submit" className="submit" onClick={handleEnter}>
            Sign Up
          </button>
        </form>
      )}
      <p className="switch">
        {isLogin ? "Don't have an account?" : "Already have an account?"}
        <button
          className="switch-btn"
          onClick={() => {
            setLogin(!isLogin);
            // setError("");
          }}
        >
          {isLogin ? "Sign Up" : "Login"}
        </button>
      </p>
    </div>
  );
}

export default AuthPage;
