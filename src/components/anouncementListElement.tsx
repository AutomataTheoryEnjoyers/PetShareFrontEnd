import styled from "styled-components"
import { usePetInfo } from "../shelter/queries/petInfo"
import { Anouncement } from "../types/anouncement"

type Props = {
  anouncement: Anouncement
}
export const AnouncementListElement = ({ anouncement }: Props) => {
  const pet = usePetInfo(anouncement.IDPet);
  return <Containter>
    <LeftContainer>
      <Title>{anouncement.Title}</Title>
      <Header>{anouncement.CreationDate.toDateString()}</Header>
      <Header>{anouncement.ClosingDate.toDateString()}</Header>
      <Header>{anouncement.Status}</Header>
    </LeftContainer>
    <RightContainer>
      <Title>{pet.data.Name}</Title>
      <Header>{pet.data.Species}</Header>
      <Header>{pet.data.Breed}</Header>
      <Header>{pet.data.Birthday.toDateString()}</Header>
    </RightContainer>
    <Image src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fus-tuna-sounds-images.voicemod.net%2F8b2da0e8-5f18-4c46-b436-a80629388aa0-1662350742067.jpg&f=1&nofb=1&ipt=56ff424dfc11ad96ed521268ede16776efc3d3ec8c1133b0d0ef15ae352e6d55&ipo=images" />
  </Containter>
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

const Containter = styled.div`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
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
  border-radius: 10px;
`
