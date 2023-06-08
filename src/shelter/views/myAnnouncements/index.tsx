import styled from "styled-components";
import { AnimatedPage } from "../../../components/animatedPage";
import { AnnouncementListElement } from "../../../components/announcementListElement";
import { Header } from "../../../components/header";
import { useMyAnnouncements } from "../../queries/myAnnouncements";
import { Pagination } from "../../../components/pagination";
import { PaginationParameters } from "../../../types/paginationParameters";
import { useState } from "react";
import { ClipLoader } from "react-spinners";

export const MyAnnouncements = () => {
  const announcementsPerPage = 5;
  const [paginationParams, setPaginationParams] =
    useState<PaginationParameters>({
      PageNumber: 0,
      PageCount: announcementsPerPage,
    });
  const { data, isLoading } = useMyAnnouncements(paginationParams);

  if (isLoading) {
    return (
      <AnimatedPage>
        <Header>Announcements</Header>
        <CenteredBox>
          <ClipLoader />
        </CenteredBox>
      </AnimatedPage>
    );
  }

  return (
    <AnimatedPage>
      <Header>Announcements</Header>
      <List>
        {data?.announcements.map((announcement) => (
          <AnnouncementListElement
            key={announcement.id}
            announcement={announcement}
          />
        ))}
      </List>
      <Separator />
      <Pagination
        elementCount={data ? data.count : 1}
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

const CenteredBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-items: center;
`;

const Separator = styled.hr`
  width: 100%;
  height: 3px;
  background-color: black;
  margin-bottom: 0;
`;
