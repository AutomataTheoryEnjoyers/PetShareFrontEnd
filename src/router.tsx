import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./views/home";
import { Router as ShelterRouter } from "./shelter/router";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shelter/*" element={<ShelterRouter />} />
    </Routes>
  </BrowserRouter>
);
