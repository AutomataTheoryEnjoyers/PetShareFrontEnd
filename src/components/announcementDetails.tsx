import { faFlag, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";
import { usePostReport } from "../home/mutations/PostReport";
import { Announcement } from "../types/announcement";
import { LikeQueryParams, usePostLike } from "../user/mutations/postLike";

type Props = {
  announcement: Announcement;
  isFollowed?: boolean;
  isShelter?: boolean;
};

export const AnnouncementDetailsElement = ({
  announcement,
  isShelter = false,
}: Props) => {
  const mutateLike = usePostLike();
  const [overFollow, setOverFollow] = useState(announcement.isLiked);
  const [isLiked, setIsLiked] = useState(announcement.isLiked);
  const [showReportModal, setShowReportModal] = useState(false);
  const [reportReason, setReportReason] = useState("");
  const mutatePostReport = usePostReport();

  const handleReportClick = () => {
    setShowReportModal(true);
  };
  const handleCancelReport = () => {
    setShowReportModal(false);
  };
  const handleSendReport = () => {
    mutatePostReport({
      targetId: announcement.id,
      reportType: "announcement",
      message: reportReason,
    });
    console.log("Report sent:", reportReason);
    setShowReportModal(false);
  };
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
          {!isShelter && (
            <>
              <ReportButton
                onClick={handleReportClick}
              >
                <FontAwesomeIcon icon={faFlag} /> Report Announcement
              </ReportButton>
              <FollowContainer
                onMouseOver={() => setOverFollow(true)}
                onMouseLeave={() => setOverFollow(false)}
                onClick={() => {
                  mutateLike({ announcementId: announcement.id, isLiked: true } as LikeQueryParams);
                  setIsLiked(true);
                }}
              >
                <FontAwesomeIcon
                  icon={faHeart}
                  data-testid="followIcon"
                  style={{ transform: `scale(${overFollow ? 1.15 : 1})` }}
                  fontSize={25}
                  color={isLiked || overFollow ? "red" : "black"}
                  className="followIcon"
                />
              </FollowContainer>
            </>
          )}
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
      {showReportModal && (
        <ReportModal>
          <ModalContent>
            <ModalText>Your reason for the report:</ModalText>
            <ReportInput
              value={reportReason}
              onChange={(e) => setReportReason(e.target.value)}
            />
            <ModalButtonContainer>
              <ModalButton onClick={handleSendReport} className="send">Send</ModalButton>
              <ModalButton onClick={handleCancelReport} className="cancel">Cancel</ModalButton>
            </ModalButtonContainer>
          </ModalContent>
        </ReportModal>
      )}
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
  flex-direction: row; /* Changed flex-direction to row */
  align-items: center;
`;
const FollowContainer = styled.div`
  padding: 5px;
  .followIcon {
    transition: all 0.1s;
  }
  :hover {
    cursor: pointer;
  }
`;
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
const ReportButton = styled.button`
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  color: white;
  font-weight: bold;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  background-color: darkblue;
  font-size: 16px;
  width: fit-content;
  margin-right: 20px; /* Added margin-right */
`;


const ReportModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background-color: white;
  width: 600px; /* Increase the width as desired */
  height: 400px; /* Increase the height as desired */
  padding: 20px;
  border-radius: 4px;
`;

const ModalText = styled.p`
  margin: 0 0 10px 0;
`;

const ReportInput = styled.textarea`
  width: 100%;
  height: 300px; /* Increase the height as desired */
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  font-size: 16px; /* Adjust the font size */
  resize: vertical; /* Allow vertical resizing */
  overflow-y: auto; /* Add a scrollbar when needed */
`;

const ModalButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px; /* Add a desired gap value */
`;

const ModalButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    color: white;
    font-weight: bold;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    &.cancel {
        background-color: darkgrey;
    }
    &.send {
        background-color: darkblue;
    }
    padding: 6px 12px; /* Increase the padding to make the buttons bigger */
    font-size: 16px; /* Increase the font size */
`;
