import styled from "styled-components";

import { Report } from "../../../types/report";

import { useParams } from "react-router-dom";

import { AnimatedPage } from "../../../components/animatedPage";
import { useReports } from "../../queries/reports";
import { ReportDetailsElement } from "../../../components/reportDetailsElement";

import { Title } from "../../../styles/global";

import { ClipLoader } from "react-spinners";

import { ShelterDetailsInReportElement } from "../../shelterDetailsInReport";
import { AnnouncementDetailsInReportElement } from "../../announcementDetailsInReport";
import { UserDetailsInReportElement } from "../../userDetailsInReportElement";

type ConfirmationDialogProps = {
    handleConfirm: () => void;
    handleCancel: () => void;
};

export const ReportDetails = () => {
    const { id } = useParams();

    const reports = useReports(null);
    const currentReport = reports?.response?.reports?.find(
        (report) => report.id === id
    ) as Report;
    if (reports.query.isLoading) {
        return (
            <AnimatedPage>
                <CenteredBox>
                    <ClipLoader />
                </CenteredBox>
            </AnimatedPage>
        );
    }

    

    

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
                        {currentReport.reportType === "adopter" && <UserDetailsInReportElement report={currentReport} />}
                        {currentReport.reportType === "announcement" && <AnnouncementDetailsInReportElement report={currentReport} />}
                        {currentReport.reportType === "shelter" && <ShelterDetailsInReportElement report={currentReport} />}
                    </div>
                    
                    
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
    "user report report"
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



const CenteredBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-items: center;
`;


