import { useState } from "react";
import styled from "styled-components";
import { AnimatedPage } from "../../../components/animatedPage";
import {
  AnnouncementFiltersForm,
  DefaultFilterState,
} from "../../../components/announcementFiltersForm";
import { AnnouncementListElement } from "../../../components/announcementListElement";
import { Header } from "../../../components/header";
import { useAnnouncements } from "../../../queries/announcements";
import { AnnouncementFilters } from "../../../types/announcementFilter";
export const MyAnnouncements = () => {
  const [formState, setFormState] =
    useState<AnnouncementFilters>(DefaultFilterState);
  const { data } = useAnnouncements(formState);
  return (
    <AnimatedPage>
      <Header>My Announcements</Header>
      <AnnouncementFiltersForm
        filters={formState}
        onChange={(arg) => setFormState({ ...formState, ...arg })}
      />
      <List>
        {data?.map((announcement) => (
          <AnnouncementListElement
            key={announcement.id}
            announcement={announcement}
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
