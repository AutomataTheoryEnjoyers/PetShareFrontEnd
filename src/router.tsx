import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./views/home";
import { Router as ShelterRouter } from "./shelter/router";
import { Router as UserRouter } from "./user/router";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shelter/*" element={<ShelterRouter />} />
        <Route path="/user/*" element={<UserRouter />} />
      </Routes>
    </BrowserRouter>
  )
};
