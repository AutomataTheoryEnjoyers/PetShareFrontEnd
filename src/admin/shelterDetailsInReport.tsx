import styled from "styled-components";
import { Report } from "../types/report";
import { useGetShelterSingle } from "./queries/getShelterSingle";
import { ShelterDetailsElement } from "../components/shelterDetails";
import { ClipLoader } from "react-spinners";
import { AnimatedPage } from "../components/animatedPage";



type Props = {
    report: Report;
};

export const ShelterDetailsInReportElement = ({ report }: Props) => {
    const shelter = useGetShelterSingle(report.targetId);
    if (shelter.isLoading) {
        return (
            <AnimatedPage>
                <CenteredBox>
                    <ClipLoader />
                </CenteredBox>
            </AnimatedPage>
        );
    }
    return (
        shelter &&
        <ShelterDetailsElement shelter={shelter.data!} isAdmin={true}/>
        
    );
};


const CenteredBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-items: center;
`;