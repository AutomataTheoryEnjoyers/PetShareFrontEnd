import { useState } from "react";
import styled from "styled-components";
import { AnimatedPage } from "../../../components/animatedPage";
import { AnnouncementFiltersForm, DefaultFilterState } from "../../../components/announcementFiltersForm"; import { AnnouncementListElement } from "../../../components/announcementListElement";
import { Header } from "../../../components/header";
import { AnnouncementFilters } from "../../../types/announcementFilter";
import { useAnnouncements } from "../../../queries/announcements";

export const Announcements = () => {
  const { data } = useAnnouncements(null);
  const [formState, setFormState] = useState<AnnouncementFilters>(DefaultFilterState);
  return (
    <AnimatedPage>
      <Header>My Announcements</Header>
      <AnnouncementFiltersForm filters={formState} onChange={(arg) => setFormState({ ...formState, ...arg })} />
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
