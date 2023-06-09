import styled from "styled-components";
import { ImageElement } from "../../components/ImageElement";
import { Pet } from "../../types/pet";

type Props = {
  pet: Pet;
  selected: boolean;
};

export const PetListElementNewAnnouncement = ({ pet, selected }: Props) => {
  return (
    <Container selected={selected}>
      <ImageElement pet={pet} />
      <LeftContainer>
        <Title>{pet.name}</Title>
        <BottomText>
          {pet.name}, {pet.sex}, {pet.species}, {pet.breed},{" "}
          {new Date().getFullYear() - pet.birthday.getFullYear()} years old
        </BottomText>
      </LeftContainer>
      <RightContainer />
    </Container>
  );
};

const Container = styled.div<{ selected: boolean }>`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 10px;
  background-color: ${({ selected }) => {
    if (selected === true) {
      return (props) => props.theme.colors.lightGreen;
    } else {
      return (props) => props.theme.colors.powderWhite;
    }
  }};
  height: 150px;
  display: flex;
  transition: all 0.2s ease-in;
  :hover {
    background-color: ${(props) => props.theme.colors.lightGreen};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const Title = styled.h1`
  margin: 0;
  padding: 5px;
  font-size: 20px;
`;

const BottomText = styled.p`
  margin: 0;
  align-self: flex-end;
  text-align: left;
  align-self: flex-start;
  padding: 5px;
  color: ${(props) => props.theme.colors.darkgrey};
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const RightContainer = styled.div`
  display: flex;
  margin-left: auto;
  flex-direction: column;
  justify-content: center;
`;
