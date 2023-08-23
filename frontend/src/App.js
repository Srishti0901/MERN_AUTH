import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { ToastContainer } from "react-toastify";
import { Signup } from "./pages/Signup";
import Home from "./pages/Home";
import { useSelector } from "react-redux";

function App() {
  const userdata = useSelector((state) => state.authSlice);
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          {userdata && <Route path="/" element={<Home />}></Route>}
          <Route index path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
//just checking

export default App;
