import styled from "styled-components";
import { AnimatedPage } from "../../../components/animatedPage";
import { ReportListElement } from "../../../components/reportListElement";
import { Header } from "../../../components/header";
import { useReports } from "../../queries/reports";
export const Users = () => {
    const { data } = useReports();
    return (
        <AnimatedPage>
            <Header>Users</Header>
            <List>
                {data?.map((report) => (
                    <ReportListElement
                        key={report.id}
                        report={report}
                    />
                ))}
            </List>
        </AnimatedPage>
    );
};


const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
