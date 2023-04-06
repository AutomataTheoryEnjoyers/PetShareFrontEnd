import styled from "styled-components";
import { DescriptionText, Title } from "../../styles/global";

export const PageNotFound = () => {
  return <Container>
    <h1>Error 404</h1>
    <h3>Page was not found</h3>
    <img src="https://cdn.pixabay.com/photo/2018/01/09/11/04/dog-3071334__480.jpg" />
  </Container>;
}

const Container = styled.div`
  text-align: center;
`
