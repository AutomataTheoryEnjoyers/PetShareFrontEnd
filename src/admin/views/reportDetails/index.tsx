import styled from "styled-components";
import { useMyUsers } from "../../queries/myUsers";
import { Report } from "../../../types/report";
import { User } from "../../../types/user";
import { useParams } from "react-router-dom";
import { UserDetailsElement } from "../../../components/userDetailsElement";
import { AnimatedPage } from "../../../components/animatedPage";
import { useReports } from "../../queries/reports";
import { ReportDetailsElement } from "../../../components/reportDetailsElement";
import { useAnnouncements } from "../../../queries/announcements";
import { useShelters } from "../../queries/shelters";
import { Announcement } from "../../../types/announcement";
import { Shelter } from "../../../types/shelter";
import { ShelterDetailsElement } from "../../../components/shelterDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan, faTrash, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Title } from "../../../styles/global";
import { useState } from "react";
import { ReportAnnouncementDetailsElement } from "../../../components/reportsAnnouncementElement";
import { useMyAnnouncements } from "../../../shelter/queries/myAnnouncements";


export const ReportDetails = () => {
    const { id } = useParams();

    const reports = useReports();
    const currentReport = reports.data?.find(
        (report) => report.id === id
    ) as Report;

    const users = useMyUsers();
    const adopter = currentReport.adopterId ? users.data?.find(
        (adopter) => adopter.id === currentReport.adopterId
    ) as User : null;

    const announcements = useAnnouncements(null);
    const announcement = currentReport.announcementId ? announcements.data?.find(
        (announcement) => announcement.id === currentReport.announcementId
    ) as Announcement : null;

    const shelters = useShelters();
    const shelter = !currentReport.announcementId && currentReport.shelterId ? shelters.data?.find(
        (shelter) => shelter.id === currentReport.shelterId
    ) as Shelter : null;
    
    const [showDismissConfirmation, setShowDismissConfirmation] = useState(false);
    const [showBlockConfirmation, setShowBlockConfirmation] = useState(false);
    const handleDismiss = () => {
        setShowDismissConfirmation(true);
    };
    

    const handleBlock = () => {
        setShowBlockConfirmation(true);
    };

    return (
        currentReport && (
            <AnimatedPage>
                <Container>
                    <div id="title">
                        <Title>Report ID: {currentReport.id}</Title>
                    </div>
                    <div id="report">
                        <ReportDetailsElement report={currentReport} />
                    </div>
                    <div id="user">
                        {adopter && <UserDetailsElement user={adopter} />}
                        {announcement && <ReportAnnouncementDetailsElement announcement={announcement} />}
                        {shelter && <ShelterDetailsElement shelter={shelter} />}
                    </div>
                    <div id="buttons">
                    <ButtonsContainer>
                        <Button onClick={handleDismiss} className="dismiss">
                                <FontAwesomeIcon icon={faTrash} />{"Dismiss Report"}
                        </Button>
                        <Button onClick={handleBlock} className="block">
                                {currentReport.announcementId ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBan} />}{" "}
                            {currentReport.adopterId ? "Block User" :
                                currentReport.announcementId ? "Remove Announcement" : "Block Shelter"} 
                        </Button>
                        </ButtonsContainer>
                    </div>
                
                {(showDismissConfirmation || showBlockConfirmation) && (
                    <ConfirmationDialog>
                        <div className="dialog-window">
                                <p className="message">{showDismissConfirmation ?
                                    "Are you sure you want to dismiss the report? It will be permanently removed." :
                                    currentReport.announcementId ? "Are you sure you want to permanently remove the announcement?"
                                        : currentReport.adopterId ? "Are you sure you want to block this user?"
                                        : "Are you sure you want to block this shelter?"}</p>
                            <div className="buttons">
                                <Button className="confirm">Confirm</Button>
                                    <Button className="cancel" onClick={() =>
                                    { setShowDismissConfirmation(false); setShowBlockConfirmation(false); }}>Cancel</Button>
                            </div>
                        </div>
                    </ConfirmationDialog>

                    )}
                </Container>
            </AnimatedPage>
        )
    );
};

const Container = styled.div`
  text-align: center;
  display: grid;
  gap: 10px;
  height: 100%;
  min-height: 60vh;
  grid-template-areas:
    "title title title"
    "report report user"
    "buttons buttons buttons";

  grid-template-columns: 1fr 1fr 1fr;

  #user {
    grid-area: user;
  }

  #report {
    grid-area: report;
    overflow: auto;
    background-color: white; /* Add white background color */
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  #buttons {
    grid-area: buttons;
  }
  #title {
    grid-area: title;
  }
`;

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




