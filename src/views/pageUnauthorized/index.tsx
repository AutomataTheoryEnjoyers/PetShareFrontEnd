import styled from "styled-components";
import { AnimatedPage } from "../../components/animatedPage";

export const PageUnauthorized = () => {
  return (
    <AnimatedPage>
      <Container>
        <h1>Error 401</h1>
        <h3>You're not authorized to access this page</h3>
        <img
          alt=""
          src="https://i.kym-cdn.com/photos/images/original/002/595/364/d3b.png"
        />
      </Container>
    </AnimatedPage>
  );
};

const Container = styled.div`
  text-align: center;
`;
