import { useState } from "react";
import styled from "styled-components";
import { AnimatedPage } from "../../../components/animatedPage";
import { AnnouncementFilters, DefaultFilterState, FilterState } from "../../../components/announcementFilters";
import { AnnouncementListElement } from "../../../components/announcementListElement";
import { Header } from "../../../components/header";
import { useAnnouncements } from "../../queries/announcements";

export const Announcements = () => {
  const { data } = useAnnouncements();
  const [formState, setFormState] = useState<FilterState>(DefaultFilterState);
  return (
    <AnimatedPage>
      <Header>My Announcements</Header>
      <AnnouncementFilters filters={formState} onChange={(arg) => setFormState({ ...formState, ...arg })} />
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
