import styled from "styled-components";
import { AnimatedPage } from "../../../components/animatedPage";
import { ApplicationListElement } from "../../../components/applicationListElement";
import { Header } from "../../../components/header";
import { useMyApplicationsAdopter } from "../../queries/useMyApplicationsAdopter";
import { PaginationParameters } from "../../../types/paginationParameters";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { Pagination } from "../../../components/pagination";
export const MyApplications = () => {
  const announcementsPerPage = 5;
  const [paginationParams, setPaginationParams] =
    useState<PaginationParameters>({
      PageNumber: 1,
      PageCount: announcementsPerPage,
    });
  const applications = useMyApplicationsAdopter(
    paginationParams.PageNumber,
    paginationParams.PageCount
  );

  if (applications.isLoading) {
    return (
      <AnimatedPage>
        <CenteredBox>
          <ClipLoader />
        </CenteredBox>
      </AnimatedPage>
    );
  }

  return (
    <AnimatedPage>
      <Header>My Applications</Header>
      <List>
        {applications?.data?.applications.map((application) => (
          <ApplicationListElement
            key={application.id}
            application={application}
          />
        ))}
      </List>
      <Pagination
        elementCount={applications.data ? applications.data.count : 1}
        paginationParams={paginationParams}
        setPaginationParams={setPaginationParams}
      />
    </AnimatedPage>
  );
};

const CenteredBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-items: center;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
