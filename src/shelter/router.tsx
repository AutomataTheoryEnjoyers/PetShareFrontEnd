import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import styled from "styled-components";
import { PageNotFound } from "../views/pageNotFound";
import { Navbar } from "./components/navbar";
import { AnnouncementDetails } from "./views/announcementDetails";
import { PetDetails } from "./views/petDetails";
import { MyAnnouncements } from "./views/myAnnouncements";
import { NewAnnouncement } from "./views/newAnnouncement";
import { PetDetails } from "./views/petDetails";
import { MyPets } from "./views/myPets";
import { NewPetForm } from "./views/newPet";
export const Router = () => {
  const location = useLocation();
  return (
    <Container>
      <Navbar />
      <Content>
        <View>
          <AnimatePresence mode="wait">
            <Routes key={location.pathname} location={location}>
              <Route
                path="my-announcements/:id"
                element={<AnnouncementDetails />}
              />
              <Route path="my-announcements" element={<MyAnnouncements />} />
              <Route path="new-announcement" element={<NewAnnouncement />} />
              <Route path="my-pets/:id" element={<PetDetails />} />
              <Route path="my-pets" element={<MyPets />} />
              <Route path="new-pet" element={<NewPetForm />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </AnimatePresence>
        </View>
      </Content>
    </Container>
  );
};

const Content = styled.div`
  padding: 40px;
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
