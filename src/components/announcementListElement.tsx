import styled from "styled-components"
import { Announcement } from "../types/announcement"

type Props = {
  anouncement: Announcement
}
export const AnnouncementListElement = ({ anouncement }: Props) => {
  return <Container>
    <LeftContainer>
      <Title>{anouncement.title}</Title>
      <Header>{anouncement.creationDate.toDateString()}</Header>
      <Header>{anouncement.closingDate?.toDateString()}</Header>
      <Header>{anouncement.status}</Header>
    </LeftContainer>
    <RightContainer>
      <Title>{anouncement.pet.name}</Title>
      <Header>{anouncement.pet.species}</Header>
      <Header>{anouncement.pet.breed}</Header>
      <Header>{anouncement.pet.birthday.toDateString()}</Header>
    </RightContainer>
    <Image src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fus-tuna-sounds-images.voicemod.net%2F8b2da0e8-5f18-4c46-b436-a80629388aa0-1662350742067.jpg&f=1&nofb=1&ipt=56ff424dfc11ad96ed521268ede16776efc3d3ec8c1133b0d0ef15ae352e6d55&ipo=images" />
  </Container>
}

const Title = styled.h1`
  margin: 0;
  padding: 5px;
  font-size: 25px;
`

const Header = styled.p`
  margin: 0;
  padding: 5px;
  font-size: 15px;
`

const Container = styled.div`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 10px;
  background-color: white;
  height: 150px;
  display: flex;
`

const LeftContainer = styled.div`
  flex: 1;
  border-right: 2px solid black;
`

const RightContainer = styled.div`
  flex: 1;
  margin-left: 10px;
`

const Image = styled.img`
  width: 150px;
  border-radius: 5px;
`
