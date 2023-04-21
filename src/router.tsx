import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Router as LoginRouter } from "./home/router";
import { Router as ShelterRouter } from "./shelter/router";
import { Router as UserRouter } from "./user/router";
import { AnimatePresence } from "framer-motion";

export const Router = () => {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <Routes>
          <Route path="/*" element={<LoginRouter />} />
          <Route path="/shelter/*" element={<ShelterRouter />} />
          <Route path="/user/*" element={<UserRouter />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
};
