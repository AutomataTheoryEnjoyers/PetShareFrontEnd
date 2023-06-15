import styled from "styled-components";
import { Report } from "../types/report";
import { ClipLoader } from "react-spinners";
import { AnimatedPage } from "../components/animatedPage";
import { useGetAnnouncementSingle } from "../queries/getAnnouncementSingle";
import { TextDetails } from "../styles/global";

type Props = {
    report: Report;
};

export const AnnouncementDetailsInReportElement = ({ report }: Props) => {
    const announcement = useGetAnnouncementSingle(report.targetId);
    if (announcement.isLoading) {
        return (
            <AnimatedPage>
                <CenteredBox>
                    <ClipLoader />
                </CenteredBox>
            </AnimatedPage>
        );
    }
    return (
        <Container>
            <TopContainer>
                <TopContainerLeft>
                    <TextDetails>
                        Created: {announcement.data!.creationDate.toDateString()}
                    </TextDetails>
                    <TextDetails>
                        Last Update: {announcement.data!.lastUpdateDate.toDateString()}
                    </TextDetails>
                </TopContainerLeft>
            </TopContainer>
            <AnnouncementTitle>{announcement.data!.title && announcement.data!.title}</AnnouncementTitle>
            <DescriptionText>
                {announcement.data!.description && announcement.data!.description}
            </DescriptionText>
        </Container>
    );
};

const AnnouncementTitle = styled.h2`
    text-align:center;
`

const CenteredBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-items: center;
`;

const Container = styled.div`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 12px;
  padding-bottom: 20px;
  background-color: ${(props) => props.theme.colors.powderWhite};
  text-align: left;
  height: 100%;
  height: min(60vh, 600px);
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

const DescriptionText = styled.p`
  margin: 10px 0; /* Added top and bottom margin */
  font-size: 14px;
  text-align: center; /* Added text alignment to center */
`;

