import styled from "styled-components";
import { AnimatedPage } from "../../../components/animatedPage";
import { ReportListElement } from "../../../components/reportListElement";
import { Header } from "../../../components/header";
import { useReports } from "../../queries/reports";
export const Reports = () => {
    const reports = useReports(null);
    return (
        <AnimatedPage>
            <Header>Reports</Header>
            <List>
                {reports.response?.reports.map((report) => (
                    <ReportListElement
                        key={report.id}
                        report={report}
                    />
                ))}
            </List>
            {/*<Separator />*/}
            {/*<Pagination*/}
            {/*    elementCount={announcements.response ? announcements.response.count : 1}*/}
            {/*    paginationParams={paginationParams}*/}
            {/*    setPaginationParams={setPaginationParams}*/}
            {/*/>*/}
        </AnimatedPage>
    );
};


const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

`;
