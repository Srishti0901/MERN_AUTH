import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
import { useLoginMutation } from "../slices/apiSlice";
import "./Login.css";
import { setUserState } from "../slices/userSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await login({ email, password }).unwrap();
    console.log(res);
    dispatch(setUserState({ ...res }));
    navigate("/");
  };

  return (
    <form onSubmit={handleLogin}>
      {/* {isError && toast.error(error)} */}
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email"
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password"
      />
      <button type="submit" disabled={isLoading}>
        Login
      </button>
      <div className="demo">
        New User? <Link to="/signup">Signup</Link>
      </div>
    </form>
  );
};
