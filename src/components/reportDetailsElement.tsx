import React, { useState } from "react";
import styled from "styled-components";
import { Report } from "../types/report";
import {
    faTrash,
    faBan,
    faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { AnimatedPage } from "./animatedPage";
import { usePutReport } from "../admin/mutations/putReport";
import { UpdateReport } from "../types/updateReport";
import { UpdateUser } from "../types/updateUser";
import { usePutUser } from "../admin/mutations/putUser";


type ReportProps = {
    report: Report;
};

export const ReportDetailsElement = ({ report }: ReportProps) => {
    const [showFullText, setShowFullText] = useState(false);
    const MAX_TEXT_LENGTH = 1800; 
    const mutateReport = usePutReport();
    const mutateUser = usePutUser();
    
    const { message } = report;
    const truncatedText = message.slice(0, MAX_TEXT_LENGTH);

    const handleToggleText = () => {
        setShowFullText((prevState) => !prevState);
    };
    const [showDismissConfirmation, setShowDismissConfirmation] = useState(false);
    const [showBlockConfirmation, setShowBlockConfirmation] = useState(false);
    const [showFinal, setShowFinal] = useState(false);
    const [isDismissal, setIsDimissal] = useState(false);

    const navigate = useNavigate();

    const dismissReportData = {
        id: report.id,
        state: "Declined",
    } as UpdateReport;

    const acceptReportData = {
        id: report.id,
        state: "Accepted",
    } as UpdateReport;

    const blockUserData =
        {
            id: report.targetId,
            status: 1, //BLOCKED STATUS
        } as UpdateUser;

    const handleDismiss = () => {
        setShowDismissConfirmation(true);
        
    };


    const handleBlock = () => {
        setShowBlockConfirmation(true);
    };

    const handleReportDimiss = () => {
        mutateReport(dismissReportData);
        setIsDimissal(true);
        setShowFinal(true);
    }

    const handleReportAccept = () => {
        mutateReport(acceptReportData);
        if (report.reportType === "adopter")
            mutateUser(blockUserData); //lacking endpoints for handling shelter and announcement blocks, 
            //put for announcement requires shelter role, I don't love this, 
            //but with current ednpoints that's the most we can do plus demonstrates that it actually works, so not that big a deal imo 
        setShowFinal(true);
    }

    

    return (
        <AnimatedPage>
        <Container>
            <div id="reportReason">
                <UsernameText>Reason:</UsernameText>
                <div>
                    {showFullText ? (
                        <p>{message}
                        <span onClick={handleToggleText} className="show-less">
                                {" Show Less"}
                            </span>
                        </p>
                    ) : (
                        <p>
                            {truncatedText}
                            {message.length > MAX_TEXT_LENGTH && (
                                <span onClick={handleToggleText} className="show-more">
                                       <span className="show-more-link">...Show More</span>
                                </span>
                            )}
                        </p>
                    )}
                </div>

            </div>
           
        </Container>
        
         <div id="buttons">
                <ButtonsContainer>
                    <Button onClick={handleDismiss} className="dismiss">
                        <FontAwesomeIcon icon={faTrash} /> Dismiss Report
                    </Button>
                    <Button onClick={handleBlock} className="block">
                        {report.reportType === "adopter" ? (
                            <React.Fragment>
                                <FontAwesomeIcon icon={faBan} /> Block Adopter
                            </React.Fragment>
                        ) : report.reportType === "shelter" ? (
                            <React.Fragment>
                                <FontAwesomeIcon icon={faBan} /> Block Shelter
                            </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    <FontAwesomeIcon icon={faXmark} /> Remove Announcement
                                </React.Fragment>
                            ) }                        
                    </Button>
                </ButtonsContainer>
            </div>
            {
        (showDismissConfirmation || showBlockConfirmation) && (
            <ConfirmationDialog>
                <div className="dialog-window">
                    <p className="message">{showDismissConfirmation ?
                        "Are you sure you want to dismiss the report? It will be permanently removed." :
                        report.reportType==="announcement" ? "Are you sure you want to permanently remove the announcement?" :
                            report.reportType==="adopter" ? "Are you sure you want to block this user?" :
                                "Are you sure you want to block this shelter?"}</p>
                    <div className="buttons">
                                <Button className="confirm" onClick={() => {
                                    showDismissConfirmation ? handleReportDimiss() : handleReportAccept();
                                    setShowDismissConfirmation(false); setShowBlockConfirmation(false);
                                }}>Confirm</Button>
                        <Button className="cancel" onClick={() => { setShowDismissConfirmation(false); setShowBlockConfirmation(false); }}>
                            Cancel
                        </Button>
                    </div>
                </div>
            </ConfirmationDialog>
        )
            }
            {
                (showFinal && (
                    <ConfirmationDialog>
                        <div className="dialog-window">
                            <p className="message">{isDismissal ?
                                "The report has been dismissed." :
                                report.reportType === "shelter" ? "Shelter has been blocked." :
                                    report.reportType === "adopter" ? "User has been blocked." :
                                        "Announcement has been removed"}</p>
                            <div className="buttons">
                                <Button className="confirm" onClick={() => {
                                    setShowFinal(false); 
                                    navigate('../reports')
                                }}>Ok</Button>

                            </div>
                        </div>
                    </ConfirmationDialog>)
                )
            }
    </AnimatedPage>
    );
};

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    color: white;
    font-weight: bold;
    border-radius: 4px;
    border: none;
    cursor: pointer;
     &.dismiss {
        background-color: black;
    }
    &.block {
        background-color: red;
    }
    &.cancel {
        background-color: darkgrey;
    }
    &.confirm {
        background-color: darkgreen;
    }
    padding: 12px 24px; /* Increase the padding to make the buttons bigger */
    font-size: 16px; /* Increase the font size */
`;

const Container = styled.div`
  text-align: center;
  display: grid;
  gap: 10px;
  height: 100%;
  height: min(60vh, 600px);
  
  grid-template-areas:
    "reason"
    "reason"
    "reason";

  grid-template-columns: 1fr;
  background-color: ${(props) => props.theme.colors.powderWhite};
  justify-content: space-around;
  #reportId {
    grid-area: id;
  }

  #reportReason {
    grid-area: reason;
  }
  #buttons
  {
    grid-area: buttons;
  }

  .show-more-link {
    color: blue;
    cursor: pointer;
    transition: color 0.3s;
  }

  .show-more-link:hover {
    color: darkblue;
  }
  .show-less {
    color: darkblue;
    cursor: pointer;
    margin-top: 8px;
    transition: color 0.3s;
  }

  .show-less:hover {
    color: blue;
  }
`;


const UsernameText = styled.h2`
  margin: 0;
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 25px;
  flex: 1;
  -webkit-text-fit: contain; /* for Safari */
  text-fit: contain;
`;

const ConfirmationDialog = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;

    .dialog-window {
        width: 300px;
        height: 300px;
        background-color: #fff;
        padding: 20px;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .message {
        margin-bottom: 20px;
    }

    .buttons {
        display: flex;
        justify-content: flex-end;
        gap: 10px;
    }
`;