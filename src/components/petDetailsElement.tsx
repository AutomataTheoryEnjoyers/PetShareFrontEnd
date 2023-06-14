import { faCake, faDog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";
import styled from "styled-components";
import { Pet } from "../types/pet";

type PetProps = {
  pet: Pet;
};

export const PetDetailsElement = ({ pet }: PetProps) => {
  return (
    <PetDetailsContainer>
      <TileTitle>
        {pet.name} <FontAwesomeIcon icon={faDog} />{" "}
      </TileTitle>
      <DetailsSection prompt={pet.sex}>Sex: {pet.sex}</DetailsSection>
      <DetailsSection prompt={pet.species}>
        Species: {pet.species}
      </DetailsSection>
      <DetailsSection prompt={pet.breed}>Breed: {pet.breed}</DetailsSection>
      <DetailsSection prompt={pet.birthday}>
        <FontAwesomeIcon icon={faCake} /> {pet.birthday.toDateString()}
      </DetailsSection>
      <DetailsSection prompt={pet.description}>
        {pet.description}
      </DetailsSection>
    </PetDetailsContainer>
  );
};

type DetailsProps = {
  children: ReactNode | ReactNode[];
  prompt: string | undefined | Date;
};

const DetailsSection = ({ prompt, children }: DetailsProps) => {
  if (prompt)
    return (
      <>
        <Separator />
        <TileDetails>{children}</TileDetails>
      </>
    );
  return <></>;
};

const Separator = styled.hr`
  width: 100%;
  margin: 0;
`;

const PetDetailsContainer = styled.div`
  height: 100%;
  display: flex;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.powderWhite};
  width: 100%;
  justify-content: space-around;
  display: flex;
  padding-bottom: 10px;
  flex-direction: column;
  align-items: flex-center;
  row-gap: 5px;
`;

const TileDetails = styled.h4`
  margin: 0;
`;

const TileTitle = styled.h1`
  margin: 0;
  font-size: 30;
  margin-top: 10px;
`;
