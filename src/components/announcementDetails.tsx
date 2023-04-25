import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";
import { TextDetails, Title } from "../styles/global";
import { Announcement } from "../types/announcement";

type Props = {
  announcement: Announcement,
  isFollowed?: boolean
};

export const AnnouncementDetailsElement = ({ announcement, isFollowed }: Props) => {
  const [overFollow, setOverFollow] = useState(isFollowed ?? false);
  return (
    <AnnouncementDetailsContainer>
      <AnnouncementDetailsContainerDates>
        <AnnouncementDetailsContainerDatesLeft>
          <TextDetails>
            Created: {announcement.creationDate.toDateString()}
          </TextDetails>
          <TextDetails>
            Last Update: {announcement.lastUpdateDate.toDateString()}
          </TextDetails>
        </AnnouncementDetailsContainerDatesLeft>
        <AnnouncementDetailsContainerDatesRight>
          <FollowContainer
            onMouseOver={() => setOverFollow(true)}
            onMouseLeave={() => setOverFollow(false)}
            onClick={() => { /*function for following*/ }}
          ><FontAwesomeIcon icon={faHeart} font-size={overFollow ? 27 : 25} color={isFollowed ? "red" : overFollow ? "red" : "black"} className="followIcon"></FontAwesomeIcon></FollowContainer>
        </AnnouncementDetailsContainerDatesRight>
      </AnnouncementDetailsContainerDates>
      <Title>{announcement.title && announcement.title}</Title>
      <DescriptionText>
        {announcement.description && announcement.description}
      </DescriptionText>
      <BottomContainer>
        <Separator />
        <AnnouncementIdContainer>ID: {announcement.id}</AnnouncementIdContainer>
      </BottomContainer>
    </AnnouncementDetailsContainer>
  );
};

const AnnouncementDetailsContainer = styled.div`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 12px;
  padding-bottom: 20px;
  background-color: ${(props) => props.theme.colors.powderWhite};
  text-align: left;
`;
const AnnouncementDetailsContainerDates = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 5px;
  padding-right: 5px;
  justify-content: space-between;
`;
const AnnouncementDetailsContainerDatesLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const AnnouncementDetailsContainerDatesRight = styled.div`
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
