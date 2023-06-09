import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import styled from "styled-components";
import { Navbar } from "./components/navbar";
import { AnnouncementDetails } from "./views/announcementDetails";
import { Announcements } from "./views/announcements";
import { Callback } from "./views/callback";
import { RegistrationPage } from "./views/register";
import { AccountSuccessfullyCreated } from "./views/accountCreated";

export const Router = () => {
  const location = useLocation();
  return (
    <Container>
      <Navbar />
      <Content>
        <View>
          <AnimatePresence mode="wait">
            <Routes key={location.pathname} location={location}>
              <Route path="announcements" element={<Announcements />} />
              <Route
                path="announcements/:id"
                element={<AnnouncementDetails />}
              />
              <Route path="callback" element={<Callback />} />
              <Route path="register" element={<RegistrationPage />} />
              <Route
                path="accountSuccessfullyCreated"
                element={<AccountSuccessfullyCreated />}
              />
              <Route path="*" element={<Navigate to="announcements" />} />
            </Routes>
          </AnimatePresence>
        </View>
      </Content>
    </Container>
  );
};

const Content = styled.div`
  padding: 20px;
  overflow-y: scroll;
  display: flex;
  align-items: stretch;
  flex-direction: column;
`;

const View = styled.div`
  margin: 0 auto;
  width: min(90vw, 1000px);
  height: 100%;
  flex: 1;
`;

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
`;
