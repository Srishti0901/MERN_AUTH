import { Link } from "react-router-dom";
import { useSignupMutation } from "../slices/apiSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { setUserState } from "../slices/userSlice";
// import "./Signup.css"
export const Signup = () => {
  const [signup, { isLoading }] = useSignupMutation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await signup({ name, email, password }).unwrap();
      dispatch(setUserState({ ...res }));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSignup}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
      />
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
        Signup
      </button>
      <div>
        Already have an account? <Link to="/login">Login</Link>
      </div>
    </form>
  );
};
