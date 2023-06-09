import styled from "styled-components";
import { Shelter } from "../types/shelter";
import {
  faPhone,
  faEnvelope,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";



type Props = {
  shelter: Shelter;
};

export const ShelterDetailsElement = ({ shelter }: Props) => {
  return (
    <ShelterDetailsContainer>
      <TileTitle>
        {shelter.fullShelterName} <FontAwesomeIcon icon={faBuilding} />{" "}
      </TileTitle>
      <DetailsSection prompt={shelter.phoneNumber}>
        {" "}
        <FontAwesomeIcon icon={faPhone} /> {shelter.phoneNumber}
      </DetailsSection>
      <DetailsSection prompt={shelter.email}>
        <FontAwesomeIcon icon={faEnvelope} /> {shelter.email}
      </DetailsSection>

      <Separator />
      <TileDetails>Address:</TileDetails>
      <TextDetails>{shelter.address.street}</TextDetails>
      <TextDetails>{shelter.address.province}</TextDetails>
          <TextDetails>{shelter.address.country}</TextDetails>
      <ReportButton>Report Shelter</ReportButton>
    </ShelterDetailsContainer>
  );
};

const TileTitle = styled.h1`
  margin: 0;
  font-size: 30;
  margin-top: 10px;
`;

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

const TileDetails = styled.h4`
  margin: 0;
`;

const Separator = styled.hr`
  width: 100%;
`;

const TextDetails = styled.p`
  margin: 0;
  padding: 2px;
  font-size: 15px;
`;

const ShelterDetailsContainer = styled.div`
  height: 100%;
  display: flex;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.powderWhite};
  width: 100%;
  display: flex;
  padding-bottom: 10px;
  flex-direction: column;
  align-items: flex-center;
  justify-content: space-around;
  row-gap: 5px;
`;
