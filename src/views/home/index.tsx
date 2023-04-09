import { faBuilding, faPerson } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Home = () => {
  return (
    <Container>
      <HomeTitle>Welcome to PetShare!</HomeTitle>
      <HomeDescription>who are you?</HomeDescription>
      <ButtonContainer>
        <Link
          style={{ textDecoration: "none" }}
          to={"shelter/my-announcements"}
        >
          <Button>
            <FontAwesomeIcon fontSize={120} icon={faBuilding} />
            <h1>Shelter</h1>
          </Button>
        </Link>
        <Link style={{ textDecoration: "none" }} to={"user/announcements"}>
          <Button>
            <FontAwesomeIcon fontSize={120} icon={faPerson} />
            <h1>User</h1>
          </Button>
        </Link>
      </ButtonContainer>
    </Container>
  );
};

const HomeTitle = styled.h1`
  font-size: 80px;
`;

const HomeDescription = styled.h3`
  font-size: 30px;
`;

const ButtonContainer = styled.div`
  height: 100%;
  width: max(90vh, 1000px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.div`
  height: 300px;
  width: 300px;
  border: solid 6px black;
  color: black;
  border-radius: 10px;
  margin: 30px;
  transition: all 0.7s ease;
  background-color: white;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;

  :hover {
    transform: scale(1.2) rotate(360deg);
    cursor: pointer;
    border: solid 6px ${(props) => props.theme.colors.main};
    color: ${(props) => props.theme.colors.main};
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 80vh;
`;
