import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context";
import MyButton from "../button/MyButton";

const Navbar = () => {
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth')
    
  }
  const { isAuth, setIsAuth } = useContext(AuthContext);
  return (
    <div className="navbar">
      <MyButton onClick={logout}>Exit</MyButton>
      <div className="navbar__links">
        <Link style={{marginRight:15}} to="/about">About</Link>
        <Link to="/posts">Posts</Link>
      </div>
    </div>
  );
};

export default Navbar;
