import Home from "./components/Home";
import "./App.css";
import Login from "./components/AuthPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

function App() {
  //const [username, setUsername] = useState("");
  return (
    <div className="app">
      <Toaster richColors/>
      <div className="title">
        <h1>Todo App</h1>
      </div>
      <div className="main">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login /*setUsername={setUsername}*/ />} />
            <Route path="/home" element={<Home /*username={username}*/ />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
