import styled from "styled-components";
import { AnimatedPage } from "../../../components/animatedPage";
import { AnnouncementListElement } from "../../../components/announcementListElement";
import { Header } from "../../../components/header";
import { useAnnouncements } from "../../../queries/announcements";
export const FollowedAnnouncements = () => {
  // we have to replace this call with one that actually fetches data for the followed stuff ASAP
  const { data } = useAnnouncements(null);
  return (
    <AnimatedPage>
      <Header>Followed Announcements</Header>
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
