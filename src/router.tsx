import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Router as LoginRouter } from "./home/router";
import { Router as ShelterRouter } from "./shelter/router";
import { Router as AdopterRouter } from "./user/router";
import { Router as AdminRouter } from "./admin/router";
import { AnimatePresence } from "framer-motion";
import RouteShelter from "./components/RouteShelter";
import RouteAdopter from "./components/RouteAdopter";

export const Router = () => {
    return (
        <BrowserRouter>
            <AnimatePresence>
                <Routes>
                    <Route path="/*" element={<LoginRouter />} />
                    <Route
                        path="/shelter/*"
                        element={
                            <RouteShelter>
                                <ShelterRouter />
                            </RouteShelter>
                        }
                    />
                    <Route
                        path="/user/*"
                        element={
                            <RouteAdopter>
                                <AdopterRouter />
                            </RouteAdopter>
                        }
                    />
                    <Route
                        path="/admin/*"
                        element={
                            <RouteAdopter>
                                <AdminRouter />
                            </RouteAdopter>
                        }
                    />
                </Routes>
            </AnimatePresence>
        </BrowserRouter>
    );
};
