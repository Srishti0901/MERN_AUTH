import React from "react";
import { useLogoutMutation } from "../slices/apiSlice";
import { logoutState } from "../slices/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logout, { isLoading }] = useLogoutMutation();
  const logouthandler = async (e) => {
    e.preventDefault();
    const res = await logout();
    dispatch(logoutState({ ...res }));
    navigate("/login");
  };
  return (
    <>
      <div>I love u my Cutiee</div>
      <button onClick={logouthandler} disabled={isLoading}>
        Logout
      </button>
      ;
    </>
  );
};

export default Home;
