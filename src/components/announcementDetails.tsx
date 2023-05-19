import styled from "styled-components";
import { Announcement } from "../types/announcement";

type Props = {
  announcement: Announcement;
};

export const AnnouncementDetailsElement = ({ announcement }: Props) => {
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
        {
          // Commented for now, will be refactored so it's visible for a shelter and invisible to adopter after implementing auth
          /* <AnnouncementDetailsContainerDatesRight>
          <TextDetails>Status: {announcement.status}</TextDetails>
          {announcement.closingDate != null && (
            <TextDetails>
              Closing date: {announcement.closingDate.toDateString()}
            </TextDetails>
          )}
        </AnnouncementDetailsContainerDatesRight> */
        }
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
// const AnnouncementDetailsContainerDatesRight = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-end;
// `;

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

const Title = styled.h1`
  margin: 0;
  padding: 5px;
  font-size: 20px;
`;

const TextDetails = styled.p`
  margin: 0;
  padding: 2px;
  font-size: 15px;
`;

const DescriptionText = styled.p`
  margin: 0;
  padding: 5px;
  font-size: 14px;
`;
