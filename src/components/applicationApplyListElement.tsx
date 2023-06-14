import styled from "styled-components";
import { Application } from "../types/application";
import {
  faPhone,
  faEnvelope,
  faUser,
  faCheck,
  faXmark,
  faFlag,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { usePutApplicationAccept } from "../shelter/mutations/putApplicationAccept";
import { usePutApplicationReject } from "../shelter/mutations/putApplicationReject";
import { MutationContext } from "./mutationContext";
import { MutationContextType } from "../types/mutationContext";
import { usePutAdopterVerify } from "../shelter/mutations/putAdopterVerify";
import { useAdopterVerification } from "../shelter/queries/adopterVerification";
import { AnimatedPage } from "./animatedPage";
import { ClipLoader } from "react-spinners";
import { Header } from "./header";
import { usePostReport } from "../home/mutations/PostReport";

type HoverState = "None" | "Check" | "Cross";

type Props = {
  application: Application;
};

export const ApplicationApplyListElement = ({ application }: Props) => {
  const { setMutationData } = useContext<MutationContextType>(MutationContext);
  const [hoverState, setHoverState] = useState("None" as HoverState);
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
            targetId: application.adopter.id,
            reportType: "adopter",
            message: reportReason,
        });
        console.log("Report sent:", reportReason);
        setShowReportModal(false);
    };
  const mutateApplicationAccept = usePutApplicationAccept();
  const mutateApplicationReject = usePutApplicationReject();

    const mutateAdopterVerify = usePutAdopterVerify();

  const useAcceptApplication = async () => {
    setMutationData({ mutationSuccessful: false });
    mutateApplicationAccept(application.id, {
      onSuccess: () => setMutationData({ mutationSuccessful: true }),
    });
  };

  const useRejectApplication = async () => {
    setMutationData({ mutationSuccessful: false });
    mutateApplicationReject(application.id, {
      onSuccess: () => setMutationData({ mutationSuccessful: true }),
    });
    };

    const useVerifyAdopter = async () => {
        setMutationData({ mutationSuccessful: false });
        mutateAdopterVerify(application.adopter.id, {
            onSuccess: () => setMutationData({ mutationSuccessful: true }),
        });
    }

    const isVerified = useAdopterVerification(application.adopter.id);
    if (isVerified.query.isLoading) {
        return (
            <AnimatedPage>
                <Header>Announcements</Header>
                <CenteredBox>
                    <ClipLoader />
                </CenteredBox>
            </AnimatedPage>
        );
    }

  return (
    <ApplicationContainer hoverState={hoverState}>
      <UsernameText>
        {application.adopter.userName} <FontAwesomeIcon icon={faUser} />
      </UsernameText>
      <DetailText>
        {<FontAwesomeIcon icon={faPhone} />} {application.adopter.phoneNumber}
      </DetailText>
      <DetailText>
        {<FontAwesomeIcon icon={faEnvelope} />} {application.adopter.email}
      </DetailText>
      <DetailText>{application.applicationStatus}</DetailText>
      {application.applicationStatus === "Created" && (
              <ButtonsContainer className="buttonContainer">
                  <ButtonRow>
                       
                          <>
                          {isVerified.response?.isVerified && (
                              <FontAwesomeIcon
                                  className="check"
                                  icon={faCheck}
                                  size="3x"
                                  onMouseEnter={() => setHoverState("Check")}
                                  onMouseLeave={() => setHoverState("None")}
                                  onClick={useAcceptApplication}
                              />
                          )}
                              <FontAwesomeIcon
                                  className="cross"
                                  icon={faXmark}
                                  size="3x"
                                  onMouseEnter={() => setHoverState("Cross")}
                                  onMouseLeave={() => setHoverState("None")}
                                  onClick={useRejectApplication}
                          />
                              
                      </>
                    
                     
                  </ButtonRow>
                  <ReportButtonContainer>
                      {isVerified.response?.isVerified ? <ReportButton onClick={useVerifyAdopter} className="verified" disabled={true}>
                          <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon> Adopter Verified
                      </ReportButton> : <ReportButton onClick={useVerifyAdopter} className="verify">
                          <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon> Verify Adopter
                      </ReportButton>}
                      
                  </ReportButtonContainer>
                  <ReportButtonContainer>
                  <ReportButton onClick={handleReportClick} className="report">
                      <FontAwesomeIcon icon={faFlag} /> Report Adopter
                      </ReportButton>
                  </ReportButtonContainer>
                  
              </ButtonsContainer>
          )}
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
    </ApplicationContainer>
  );
};

const ApplicationContainer = styled.div<{ hoverState: HoverState }>`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 10px;
  transition: 0.2s background-color;
  background-color: ${({ hoverState }) => {
    if (hoverState === "Check") return (props) => props.theme.colors.lightGreen;
    if (hoverState === "Cross")
      return (props) => props.theme.colors.lightTomato;
    return (props) => props.theme.colors.powderWhite;
  }};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: calc(33.6% - 10px);
  height: 350px;

  @media screen and (max-width: 900px) {
    width: calc(50% - 10px);
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }

  .cross {
    transition: 0.2s all;
  }

  .check {
    transition: 0.2s all;
  }

  .cross:hover {
    color: tomato;
    transform: scale(1.5);
    cursor: pointer;
  }

  .check:hover {
    color: green;
    transform: scale(1.5);
    cursor: pointer;
  }
`;

const DetailText = styled.p`
  margin-top: 5px;
  font-size: 15px;
  flex: 1;
  -webkit-text-fit: contain; /* for Safari */
  text-fit: contain;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px; /* Add a gap between the buttons */
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px; /* Add a gap between the buttons */
`;

const UsernameText = styled.h2`
  margin: 0;
  margin-top: 5px;
  margin-bottom: 20px;
  font-size: 23px;
  flex: 1;
  -webkit-text-fit: contain; /* for Safari */
  text-fit: contain;
`;

const CenteredBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-items: center;
`;

const ReportButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
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
  
  &.verify {
        background-color: darkgreen;
    }
    &.verified {
        background-color: darkgrey;
    }
    &.report {
        background-color: darkblue;
    }
  font-size: 16px;
  width: fit-content;
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





