import { Routes, Route, Navigate } from "react-router-dom";
import { HomeRoute } from "./HomeRoute";
import { Login } from "../pages";

export const MainRoute = () => {
  const user = 1;

  return (
    <div className="w-full bg-white dark:bg-gray-800 h-full absolute">
      <Routes>
        <Route path="*" element={user ? <HomeRoute /> : <Login />} />
      </Routes>
    </div>
  );
};
