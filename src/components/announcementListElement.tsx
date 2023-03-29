import styled from "styled-components"
import { Link } from "react-router-dom"
import { Announcement } from "../types/announcement"

type Props = {
  announcement: Announcement
}
export const AnnouncementListElement = ({ announcement }: Props) => {
  return <LinkStyled to={`/shelter/my-announcements/${announcement.id}`}>
    <Container>
      <LeftContainer>
        <Title>{announcement.title}</Title>
        <Header>{announcement.creationDate.toDateString()}</Header>
        <Header>{announcement.closingDate?.toDateString()}</Header>
        <Header>{announcement.status}</Header>
      </LeftContainer>
      <RightContainer>
        <Title>{announcement.pet.name}</Title>
        <Header>{announcement.pet.species}</Header>
        <Header>{announcement.pet.breed}</Header>
        <Header>{announcement.pet.birthday.toDateString()}</Header>
      </RightContainer>
      <Image src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fus-tuna-sounds-images.voicemod.net%2F8b2da0e8-5f18-4c46-b436-a80629388aa0-1662350742067.jpg&f=1&nofb=1&ipt=56ff424dfc11ad96ed521268ede16776efc3d3ec8c1133b0d0ef15ae352e6d55&ipo=images" />
    </Container>
  </LinkStyled>
}

const LinkStyled = styled(Link)`
  text-decoration: none;
`

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