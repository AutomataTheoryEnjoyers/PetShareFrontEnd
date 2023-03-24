import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { Navbar } from "./components/navbar";
import { MyAnouncements } from "./views/myAnouncements";
import { NewAnouncement } from "./views/newAnouncement";
import { SignUp } from "./views/signup";
export const Router = () => (
  <Container>
    <Navbar />
    <Content>
      <View>
        <Routes>
          <Route path="home" element={< SignUp />} />
          <Route path="my-anouncements" element={< MyAnouncements />} />
          <Route path="new-anouncement" element={< NewAnouncement />} />
        </Routes>
      </View>
    </Content>
  </Container >
);

const Content = styled.div`
  padding: 20px;
  overflow-y: scroll;
  display: flex;
  align-items: stretch;
  flex-direction: column;
`

const View = styled.div`
  margin: 0 auto;
  width: min(90vw, 1000px);
  height: 100%;
  flex: 1;
`

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
`
