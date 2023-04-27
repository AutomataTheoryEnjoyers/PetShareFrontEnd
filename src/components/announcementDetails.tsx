import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";
import { TextDetails, Title } from "../styles/global";
import { Announcement } from "../types/announcement";

type Props = {
  announcement: Announcement,
  isFollowed?: boolean,
  isShelter?: boolean,
};

export const AnnouncementDetailsElement = ({ announcement, isFollowed, isShelter }: Props) => {
  const [overFollow, setOverFollow] = useState(isFollowed ?? false);
  return (
    <Container>
      <TopContainer>
        <TopContainerLeft>
          <TextDetails>
            Created: {announcement.creationDate.toDateString()}
          </TextDetails>
          <TextDetails>
            Last Update: {announcement.lastUpdateDate.toDateString()}
          </TextDetails>
        </TopContainerLeft>
        <TopContainerRight>
          {!isShelter && <FollowContainer
            onMouseOver={() => setOverFollow(true)}
            onMouseLeave={() => setOverFollow(false)}
            onClick={() => { /*function for following*/ }}
          ><FontAwesomeIcon icon={faHeart} data-testid="followIcon" style={{ transform: `scale(${overFollow ? 1.15 : 1})` }} font-size={25} color={isFollowed ? "red" : overFollow ? "red" : "black"} className="followIcon"></FontAwesomeIcon></FollowContainer>}
        </TopContainerRight>
      </TopContainer>
      <Title>{announcement.title && announcement.title}</Title>
      <DescriptionText>
        {announcement.description && announcement.description}
      </DescriptionText>
      <BottomContainer>
        <Separator />
        <AnnouncementIdContainer>ID: {announcement.id}</AnnouncementIdContainer>
      </BottomContainer>
    </Container>
  );
};

const Container = styled.div`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 12px;
  padding-bottom: 20px;
  background-color: ${(props) => props.theme.colors.powderWhite};
  text-align: left;
`;
const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 5px;
  padding-right: 5px;
  justify-content: space-between;
`;
const TopContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const TopContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const FollowContainer = styled.div`
padding: 5px;
.followIcon{
  transition: all 0.1s;
}
:hover {
cursor: pointer;
}
`
const DescriptionText = styled.p`
  margin: 0;
  font-size: 14px;
`;

const BottomContainer = styled.div``;

const Separator = styled.hr`
  width: 100%;
  height: 3px;
  background-color: black;
  margin-bottom: 0;
`;

const AnnouncementIdContainer = styled.div`
  padding: 5px;
  float: left;
  font-size: 10px;
`;
