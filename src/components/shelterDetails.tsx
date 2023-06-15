import styled from "styled-components";
import { Shelter } from "../types/shelter";
import {
  faPhone,
  faEnvelope,
  faBuilding,
  faFlag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode, useState } from "react";
import { usePostReport } from "../home/mutations/PostReport";



type Props = {
    shelter: Shelter;
    isAdmin: boolean;
};

export const ShelterDetailsElement = ({ shelter, isAdmin}: Props) => {
    const [showReportModal, setShowReportModal] = useState(false);
    const [reportReason, setReportReason] = useState("");
    const mutatePostReport = usePostReport();
    const handleReportClick = () => {
        setShowReportModal(true);
    };

    const handleSendReport = () => {
        mutatePostReport({
            targetId: shelter.id,
            reportType: "shelter",
            message: reportReason,
        });
        console.log("Report sent:", reportReason);
        setShowReportModal(false);
    };

    const handleCancelReport = () => {
        setShowReportModal(false);
    };
  return (
    <ShelterDetailsContainer>
      <TileTitle>
        {shelter.fullShelterName} <FontAwesomeIcon icon={faBuilding} />{" "}
      </TileTitle>
      <DetailsSection prompt={shelter.phoneNumber}>
        {" "}
        <FontAwesomeIcon icon={faPhone} /> {shelter.phoneNumber}
      </DetailsSection>
      <DetailsSection prompt={shelter.email}>
        <FontAwesomeIcon icon={faEnvelope} /> {shelter.email}
      </DetailsSection>

          <Separator />

          <TileDetails>Address:</TileDetails>
      <TileDetails>{shelter.address.street}</TileDetails>
              <TextDetails>{shelter.address.province}</TextDetails>
          
          <TextDetails>{shelter.address.country}</TextDetails>
          {!isAdmin && (<ReportButton onClick={handleReportClick}><FontAwesomeIcon icon={faFlag}></FontAwesomeIcon>Report Shelter</ReportButton>)}
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
    </ShelterDetailsContainer>
  );
};

const TileTitle = styled.h1`
  margin: 0;
  font-size: 30;
  margin-top: 10px;
`;

type DetailsProps = {
  children: ReactNode | ReactNode[];
  prompt: string | undefined | Date;
};

const DetailsSection = ({ prompt, children }: DetailsProps) => {
  if (prompt)
    return (
      <>
        <Separator />
        <TileDetails>{children}</TileDetails>
      </>
    );
  return <></>;
};

const TileDetails = styled.h4`
  margin: 0;
`;

const Separator = styled.hr`
  width: 100%;
`;

const TextDetails = styled.p`
  margin: 0;
  padding: 2px;
  font-size: 15px;
`;

const ShelterDetailsContainer = styled.div`
  height: 100%;
  display: flex;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.powderWhite};
  width: 100%;
  display: flex;
  padding-bottom: 10px;
  flex-direction: column;
  align-items: flex-center;
  justify-content: space-around;
  row-gap: 5px;
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
  width: fit-content; /* Add this line to make the button width fit its content */
  margin: 0 auto; /* Center the button horizontally */
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
