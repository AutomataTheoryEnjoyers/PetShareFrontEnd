import { Routes, Route } from "react-router-dom";
import { SignUp } from "./views/signup";
export const Router = () => (
  <Routes>
    <Route path="signup" element={< SignUp />} />
  </Routes>
);
