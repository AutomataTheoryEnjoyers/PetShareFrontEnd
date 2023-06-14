import styled from "styled-components";
import { AnimatedPage } from "../../../components/animatedPage";
import { ReportListElement } from "../../../components/reportListElement";
import { Header } from "../../../components/header";
import { useReports } from "../../queries/reports";
import { PaginationParameters } from "../../../types/paginationParameters";
import { useState } from "react";
import { Pagination } from "../../../components/pagination";
export const Reports = () => {
    const announcementsPerPage = 5;
    const [paginationParams, setPaginationParams] =
        useState<PaginationParameters>({
            PageNumber: 0,
            PageCount: announcementsPerPage,
        });
    const reports = useReports(paginationParams);
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
            <Separator />
            <Pagination
                elementCount={reports.response ? reports.response.count : 1}
                paginationParams={paginationParams}
                setPaginationParams={setPaginationParams}
            />
        </AnimatedPage>
    );
};


const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

`;
const Separator = styled.hr`
  width: 100%;
  height: 3px;
  margin-bottom: 0;
  opacity: 0;
`;