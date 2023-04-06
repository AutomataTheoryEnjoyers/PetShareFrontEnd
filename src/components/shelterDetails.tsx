import styled from "styled-components";
import { TextDetails, Title } from "../styles/global";
import { Announcement } from "../types/announcement";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
    announcement: Announcement
}

export const ShelterDetailsElement = ({ announcement }: Props) => {
    const shelter = announcement.pet.shelter;
    return <ShelterDetailsContainer>
        <Title>{shelter.fullShelterName}</Title>
        <IconTextRow>
            <FontAwesomeIcon icon={faPhone} />
            <TextDetails>  {shelter.phoneNumber}</TextDetails>
        </IconTextRow>
        <IconTextRow>
            <FontAwesomeIcon icon={faEnvelope} />
            <TextDetails>  {shelter.email}</TextDetails>
        </IconTextRow>
        <TextDetails>Address:</TextDetails>
        <TextDetails>{shelter.address.street}</TextDetails>
        <TextDetails>{shelter.address.province}</TextDetails>
        <TextDetails>{shelter.address.country}</TextDetails>
    </ShelterDetailsContainer>
}

const ShelterDetailsContainer = styled.div`
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

const IconTextRow = styled.div`
display: flex;
flex-direction: row;
align-items: center;
align-content: center;
font-size: 10;
column-gap: 3px;
padding: 3px;
`
