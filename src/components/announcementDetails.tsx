import styled from "styled-components"
import { Announcement } from "../types/announcement";
import { Application } from "../types/application";

type ImageProps = {
  announcement: Announcement
}

type UserListProps = {
  announcement: Announcement
  applications: Application[]
}

type UserProps = {
  application: Application
}

type PetProps = {
  announcement: Announcement
}

type AnnouncementProps = {
  announcement: Announcement
}

export const ImageElement = ({ announcement }: ImageProps) => {
  return <ImageContainer>
    <Image src="https://preview.redd.it/9vpjwej8sopa1.png?width=640&crop=smart&auto=webp&v=enabled&s=89d8d1904862a0d40e86817306404d89a71d9cc6" />
  </ImageContainer>
}

export const PetDetailsElement = ({ announcement }: PetProps) => {
  const pet = announcement.pet;
  return <PetDetailsContainer>
    <Title>{pet.name}</Title>
    <TextDetails>{pet.species}</TextDetails>
    <TextDetails>{pet.breed}</TextDetails>
    <TextDetails>{pet.birthday.toDateString()}</TextDetails>
    <DescriptionText>{pet.description}</DescriptionText>
  </PetDetailsContainer>
}

export const ShelterDetailsElement = ({ announcement }: PetProps) => {
  const shelter = announcement.pet.shelter;
  return <ShelterDetailsContainer>
    <Title>{shelter.fullShelterName}</Title>
    <TextDetails>Phone Number: {shelter.phoneNumber}</TextDetails>
    <TextDetails>E-Mail: {shelter.email}</TextDetails>
    <TextDetails>Address details:</TextDetails>
    <DescriptionText>{shelter.address.street}</DescriptionText>
    <DescriptionText>{shelter.address.province}</DescriptionText>
    <DescriptionText>{shelter.address.country}</DescriptionText>
  </ShelterDetailsContainer>
}

export const AnnouncementDetailsElement = ({ announcement }: AnnouncementProps) => {
  return <AnnouncementDetailsContainer>
    <AnnouncementDetailsContainerDates>
      <AnnouncementDetailsContainerDatesLeft>
        <TextDetails>Created: {announcement.creationDate.toDateString()}</TextDetails>
        <TextDetails>Last Update: {announcement.lastUpdateDate.toDateString()}</TextDetails>
      </AnnouncementDetailsContainerDatesLeft>
      <AnnouncementDetailsContainerDatesRight>
        <TextDetails>Status: {announcement.status}</TextDetails>
        {announcement.closingDate != null && <TextDetails>Closing date: {announcement.closingDate.toDateString()}</TextDetails>}
      </AnnouncementDetailsContainerDatesRight>
    </AnnouncementDetailsContainerDates>
    <Title>{announcement.title && announcement.title}</Title>
    <DescriptionText>{announcement.description && announcement.description}</DescriptionText>
    <BottomContainer>
      <AnnouncementIdContainer>ID: {announcement.id}</AnnouncementIdContainer>
    </BottomContainer>
  </AnnouncementDetailsContainer>
}

export const ApplicationListElement = ({ announcement, applications }: UserListProps) => {
  var usableApplications = applications.filter((applic) => applic.announcement.id === announcement.id)
  return <ApplicationListContainer>
    {usableApplications.map(applic => (
      <ApplicationContainerElement application={applic} />
    )
    )}
  </ApplicationListContainer>
}

const ApplicationContainerElement = ({ application }: UserProps) => {
  return <ApplicationContainer>
    <LeftContainer>
      <UsernameText>
        {application.user.userName && application.user.userName}
        {!application.user.userName && "Default Username"}
      </UsernameText>
    </LeftContainer>
    <RightContainer>
      <DescriptionText>Phone number: {application.user.phoneNumber}</DescriptionText>
      <DescriptionText>E-Mail: {application.user.email}</DescriptionText>
    </RightContainer>
    <RightContainer>
      <ButtonAccept>Accept</ButtonAccept>
      <ButtonReject>Reject</ButtonReject>
    </RightContainer>
  </ApplicationContainer>
}

// Text styles
const Title = styled.h1`
  margin: 0;
  padding: 5px;
  font-size: 25px;
`

const TextDetails = styled.p`
  margin: 0;
  padding: 2px;
  font-size: 15px;
`

// Image styles
const ImageContainer = styled.div`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 10px;
  background-color: white;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Image = styled.img`
  width: auto;
  max-width: 95%;
  max-height: 95%;
  border-radius: 10px;
`

// Pet Details Styles
const PetDetailsContainer = styled.div`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 10px;
  background-color: white;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

// Shelter Details Styles
const ShelterDetailsContainer = styled.div`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 10px;
  background-color: white;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

// Announcement Details styles
const AnnouncementDetailsContainer = styled.div`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 12px;
  padding-bottom: 20px;
  background-color: white;
  position: relative;
  text-align: left;
`
const AnnouncementDetailsContainerDates = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const AnnouncementDetailsContainerDatesLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
const AnnouncementDetailsContainerDatesRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const DescriptionText = styled.p`
  margin: 0;
  padding: 3px;
  font-size: 14px;
`

const BottomContainer = styled.div`
  border-top: 2px solid black;
`

const AnnouncementIdContainer = styled.div`
  padding: 3px;
  float: left;
  font-size: 10px;
`

// Application styles
const ApplicationListContainer = styled.div`
  display: flex;
  align-content: space-between;
  justify-content: space-around;
  list-style: none;
  align-items: stretch;
  gap: 10px;
  flex-wrap: wrap;
`
const ApplicationContainer = styled.div`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 10px;
  background-color: white;
  height: 100px;
  display: flex;
`

const UsernameText = styled.h2`
margin: 0;
font-size: 20px;
`

const LeftContainer = styled.div`
  flex: 1;
  border-right: 2px solid black;
  display: flex;
  align-items: center;
`

const RightContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  align-items: stretch;
  align-content: space-around;
  font-size: 10;
`

const ButtonAccept = styled.button`
  border-radius: 5px;
  padding: 10px;
  background-color: green;
  color: white;
  height: 40px;
  display: flex;
`

const ButtonReject = styled.button`
  border-radius: 5px;
  padding: 10px;
  margin-top: 5px;
  background-color: red;
  color: white;
  height: 40px;
  display: flex;
`