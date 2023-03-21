import styled from "styled-components"
import { Anouncement } from "../types/anouncement"

type Props = {
  anouncement: Anouncement
}
export const AnouncementListElement = ({ anouncement }: Props) => {
  return <Containter>
    <LeftContainer />
    <RightContainer />
    <Image src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.imgflip.com%2F6u25jl.jpg&f=1&nofb=1&ipt=d87bf92cf52464c1f9e44ec545667489ebccb881e0d6bc866b22ee4e91be3ea4&ipo=images" />
  </Containter>
}

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
`

const RightContainer = styled.div`
  flex: 1;
  border-left: 2px solid black;
`

const Image = styled.img`
  width: 150px;
`
