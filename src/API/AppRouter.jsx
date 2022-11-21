import React from "react";
import { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../components/router/routes";
import Loader from "../components/UI/loader/Loader";
import { AuthContext } from "../context";

const AppRouter = () => {
  const {isAuth,isLoading} = useContext(AuthContext)
  console.log(isAuth)

  if (isLoading) {
    return <Loader/>
  }

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route element={route.component} path={route.path} />
      ))}
      <Route path="*" element={<Navigate to="/posts" replace />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route element={route.component} path={route.path} />
      ))}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRouter;
