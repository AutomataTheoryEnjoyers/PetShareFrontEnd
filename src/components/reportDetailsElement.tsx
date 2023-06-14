import React, { useState } from "react";
import styled from "styled-components";
import { Report } from "../types/report";
import {
    faPhone,
    faEnvelope,
    faUser,
    faCheck,
    faTimes,
    faHouse,
    faTrash,
    faBan,
    faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { BACKEND_URL } from "../backendUrl";
import { Title } from "../styles/global";
import { AnimatedPage } from "./animatedPage";
import { usePutReport } from "../admin/mutations/putReport";
import { UpdateReport } from "../types/updateReport";

type HoverState = "None" | "Check" | "Cross";

type ReportProps = {
    report: Report;
};

export const ReportDetailsElement = ({ report }: ReportProps) => {
    const [showFullText, setShowFullText] = useState(false);
    const MAX_TEXT_LENGTH = 1800; // Maximum number of characters to display in truncated version
    const mutateReport = usePutReport();
    
    const { message } = report;
    const truncatedText = message.slice(0, MAX_TEXT_LENGTH);

    const handleToggleText = () => {
        setShowFullText((prevState) => !prevState);
    };
    const [showDismissConfirmation, setShowDismissConfirmation] = useState(false);
    const [showBlockConfirmation, setShowBlockConfirmation] = useState(false);
    const dismissReportData = {
        id: report.id,
        state: "Declined",
    } as UpdateReport;

    const acceptReportData = {
        id: report.id,
        state: "Accepted",
    } as UpdateReport;

    const handleDismiss = () => {
        setShowDismissConfirmation(true);
        
    };


    const handleBlock = () => {
        setShowBlockConfirmation(true);
    };

    const handleReportDimiss = () => {
        mutateReport(dismissReportData);
    }

    const handleReportAccept = () => {
        mutateReport(acceptReportData);
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
                        report.reportType=="announcement" ? "Are you sure you want to permanently remove the announcement?" :
                            report.reportType=="adopter" ? "Are you sure you want to block this user?" :
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

const DetailText = styled.p`
  margin-top: 10px;
  font-size: 18px;
  flex: 1;
  -webkit-text-fit: contain; /* for Safari */
  text-fit: contain;
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