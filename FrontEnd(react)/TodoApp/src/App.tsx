import Home from "./components/Home";
import "./App.css";
import AuthPage from "./components/AuthPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { useNotificationListener } from "./Hooks/useNotificationListener";


function App() {
  //const [username, setUsername] = useState("");
  useNotificationListener();

  return (
    <div className="app">
      <Toaster richColors />
      <div className="title">
        <h1>Todo App</h1>
      </div>
      <div className="main">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AuthPage />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
