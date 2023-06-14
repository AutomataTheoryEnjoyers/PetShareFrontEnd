import styled from "styled-components";
import { useParams } from "react-router-dom";
import { ImageElementDetails } from "../../../components/ImageElementDetails";
import { ShelterDetailsElement } from "../../../components/shelterDetails";
import { AnnouncementDetailsElement } from "../../../components/announcementDetails";
import { PetDetailsElement } from "../../../components/petDetailsElement";
import { AnimatedPage } from "../../../components/animatedPage";
import { useAnnouncements } from "../../../queries/announcements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useGetAnnouncementSingle } from "../../../queries/getAnnouncementSingle";
import { ClipLoader } from "react-spinners";

export const AnnouncementDetails = () => {
  const { id } = useParams();
  const announcement = useGetAnnouncementSingle(id as string);

  if (announcement.isLoading) {
    return (
      <AnimatedPage>
        <CenteredBox>
          <ClipLoader />
        </CenteredBox>
      </AnimatedPage>
    );
  }


    //const [showReportModal, setShowReportModal] = useState(false);
    //const [reportReason, setReportReason] = useState("");

    //const handleReportClick = () => {
    //    setShowReportModal(true);
    //};

    //const handleSendReport = () => {
    //    // Logic to handle sending the report
    //    console.log("Report sent:", reportReason);
    //    setShowReportModal(false);
    //};

    //const handleCancelReport = () => {
    //    setShowReportModal(false);
    //};


    return (
        announcement && (
            <AnimatedPage>
                <Container>
                    <div id="report-button">
                        <ReportButton>
                            <FontAwesomeIcon icon={faFlag} /> Report Announcement
                        </ReportButton>
                    </div>
                    <div id="image">
                        <ImageElementDetails pet={announcement.data!.pet} />
                    </div>
                    <div id="pet">
                        <PetDetailsElement pet={announcement.data!.pet} />
                    </div>
                    <div id="shelter">
                        <ShelterDetailsElement shelter={announcement.data!.pet.shelter} isAdmin={ false} />
                    </div>
                    <div id="details">
                        <AnnouncementDetailsElement announcement={announcement.data!} />
                    </div>
                </Container>
            </AnimatedPage>
        )
    );
};

const CenteredBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-items: center;
`;

const Container = styled.div`
  text-align: center;
  display: grid;
  gap: 10px;
  height: 100%;
  height: min(60vh, 600px);
  grid-template-areas:
    "title title title"
    "report report report"
    "image image pet"
    "image image shelter"
    "details details details"
    "details details details"
    "user user user";

  grid-template-columns: 1fr 1fr 1fr;

  #title {
    grid-area: title;
  }

  #report-button {
    grid-area: report;
    display: flex;
    justify-content: flex-end;
  }

  #image {
    grid-area: image;
  }

  #pet {
    grid-area: pet;
  }

  #shelter {
    grid-area: shelter;
  }

  #details {
    grid-area: details;
  }
`;

const ReportButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    color: white;
    font-weight: bold;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    background-color: darkblue;
        
    padding: 12px 14px; /* Increase the padding to make the buttons bigger */
    font-size: 16px; /* Increase the font size */
`;
