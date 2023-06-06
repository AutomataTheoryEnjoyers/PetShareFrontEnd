import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./views/home";
import { Router as ShelterRouter } from "./shelter/router";
import { Router as UserRouter } from "./user/router";
import { Router as AdminRouter } from "./admin/router";
import { AnimatePresence } from "framer-motion";

export const Router = () => {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shelter/*" element={<ShelterRouter />} />
                  <Route path="/user/*" element={<UserRouter />} />
                  <Route path="/admin/*" element={<AdminRouter />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
};
