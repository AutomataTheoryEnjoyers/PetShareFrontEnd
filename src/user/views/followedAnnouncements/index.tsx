import styled from "styled-components";
import { AnimatedPage } from "../../../components/animatedPage";
import { AnnouncementListElement } from "../../../components/announcementListElement";
import { Header } from "../../../components/header";
import { PaginationParameters } from "../../../types/paginationParameters";
import { useState } from "react";
import { Pagination } from "../../../components/pagination";
import { ClipLoader } from "react-spinners";
import { AnnouncementFilters } from "../../../types/announcementFilter";
import {
  AnnouncementFiltersForm,
  DefaultFilterState,
} from "../../../components/announcementFiltersForm";
import { useAnnouncementsUser } from "../../queries/useAnnouncementsUser";
export const FollowedAnnouncements = () => {
  const [formState, setFormState] =
    useState<AnnouncementFilters>(DefaultFilterState);
  const announcementsPerPage = 5;
  const [paginationParams, setPaginationParams] =
    useState<PaginationParameters>({
      PageNumber: 0,
      PageCount: announcementsPerPage,
    });
  const announcements = useAnnouncementsUser(formState, true, paginationParams);
  if (announcements.query.isLoading) {
    return (
      <AnimatedPage>
        <Header>Followed Announcements</Header>
        <CenteredBox>
          <ClipLoader />
        </CenteredBox>
      </AnimatedPage>
    );
  }

  return (
    <AnimatedPage>
      <Header>Followed Announcements</Header>
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
        elementCount={announcements.response ? announcements.response.count : 1}
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
  margin-bottom: 0;
  opacity: 0;
`;
