import styled from "styled-components";
import { DescriptionText, TextDetails, Title } from "../styles/global";
import { Announcement } from "../types/announcement";

type PetProps = {
    announcement: Announcement
}

export const PetDetailsElement = ({ announcement }: PetProps) => {
    const pet = announcement.pet;
    return <PetDetailsContainer>
        <Title>{pet.name}</Title>
        <TextDetails>Species: {pet.species}</TextDetails>
        <TextDetails>Breed: {pet.breed}</TextDetails>
        <TextDetails>Birthday: {pet.birthday.toDateString()}</TextDetails>
        <DescriptionText>{pet.description}</DescriptionText>
    </PetDetailsContainer>
}

const PetDetailsContainer = styled.div`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 10px;
  background-color: ${(props) =>
        props.theme.colors.powderWhite
    };
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 5px;
`