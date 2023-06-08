import { useState } from "react";
import styled from "styled-components";
import { AnimatedPage } from "../../../components/animatedPage";
import {
  AnnouncementFiltersForm,
  DefaultFilterState,
} from "../../../components/announcementFiltersForm";
import { AnnouncementListElement } from "../../../components/announcementListElement";
import { Header } from "../../../components/header";
import { AnnouncementFilters } from "../../../types/announcementFilter";
import { useAnnouncements } from "../../../queries/announcements";
import { Pagination } from "../../../components/pagination";
import { PaginationParameters } from "../../../types/paginationParameters";
import { ClipLoader } from "react-spinners";

export const Announcements = () => {
  const [formState, setFormState] =
    useState<AnnouncementFilters>(DefaultFilterState);
  const announcementsPerPage = 5;
  const [paginationParams, setPaginationParams] =
    useState<PaginationParameters>({
      PageNumber: 1,
      PageCount: announcementsPerPage,
    });
  const announcements = useAnnouncements(formState, false, paginationParams);

  if (announcements.query.isLoading) {
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
      <AnnouncementFiltersForm
        filters={formState}
        onChange={(arg) => setFormState({ ...formState, ...arg })}
      />
      <List>
        {announcements.response?.announcements.map((announcement) => (
          <AnnouncementListElement
            key={announcement.id}
            announcement={announcement}
          />
        ))}
      </List>
      <Separator />
      <Pagination
        elementCount={
          announcements.response ? announcements.response?.count : 1
        }
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
