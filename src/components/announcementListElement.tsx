import styled from "styled-components"
import { Link } from "react-router-dom"
import { Announcement } from "../types/announcement"
import { Title, DescriptionText } from "../styles/global"

type Props = {
  announcement: Announcement
}

export const AnnouncementListElement = ({ announcement }: Props) => {
  return <LinkStyled to={`${announcement.id}`}>
    <Container>
      <LeftContainer>
        <Title>{announcement.title}</Title>
        <DescriptionText>{announcement.creationDate.toDateString()}</DescriptionText>
        <DescriptionText>{announcement.closingDate?.toDateString()}</DescriptionText>
        <DescriptionText>{announcement.status}</DescriptionText>
      </LeftContainer>
      <RightContainer>
        <Title>{announcement.pet.name}</Title>
        <DescriptionText>{announcement.pet.species}</DescriptionText>
        <DescriptionText>{announcement.pet.breed}</DescriptionText>
        <DescriptionText>{announcement.pet.birthday.toDateString()}</DescriptionText>
      </RightContainer>
      <Image src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fus-tuna-sounds-images.voicemod.net%2F8b2da0e8-5f18-4c46-b436-a80629388aa0-1662350742067.jpg&f=1&nofb=1&ipt=56ff424dfc11ad96ed521268ede16776efc3d3ec8c1133b0d0ef15ae352e6d55&ipo=images" />
    </Container>
  </LinkStyled >
}

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: black;
`

const Container = styled.div`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 10px;
  background-color: ${(props) =>
    props.theme.colors.powderWhite
  };
  height: 150px;
  display: flex;
  transition: all 0.2s;
  :hover{
    background-color: ${(props) =>
    props.theme.colors.lightGreen
  };
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
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