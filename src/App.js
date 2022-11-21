import React, { useEffect, useState } from "react";
import "./styles/App.css";
import Navbar from "./components/UI/navbar/Navbar";
import AppRouter from "./API/AppRouter";
import { AuthContext } from "./context";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);


  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
      localStorage.setItem("auth", true);
    }
    setLoading(false);
  }, []);
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, isLoading }}>
      <div className="root">
        <Navbar />
        <AppRouter />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
