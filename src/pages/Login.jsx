import React from "react";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/myInput";
import { AuthContext } from "../context";
import { useContext } from "react";
const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth','true')
  };
  return (
    <div>
      <h1>Authenticate page</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Enter login" />
        <MyInput type="password" placeholder="Enter password" />
        <MyButton>Login</MyButton>
      </form>
    </div>
  );
};

export default Login;
