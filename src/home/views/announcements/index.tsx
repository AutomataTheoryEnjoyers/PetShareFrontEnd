import styled from "styled-components";
import { AnnouncementListElement } from "../../../components/announcementListElement";
import { Header } from "../../../components/header";
import { useAnnouncements } from "../../queries/announcements";
import { AnimatedPage } from "../../../components/animatedPage";

export const Announcements = () => {
  const { data } = useAnnouncements();
  return (
    <AnimatedPage>
      <Header>Announcements</Header>
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