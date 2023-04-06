import styled from "styled-components";
import { AnnouncementListElement } from "../../../components/announcementListElement";
import { Header } from "../../../components/header";
import { useAnnouncements } from "../../queries/announcements";
export const Announcements = () => {
  const { data } = useAnnouncements();
  return (
    <Container>
      <Header>My Announcements</Header>
      <List>
        {data?.map((announcement) => (
          <AnnouncementListElement
            key={announcement.id}
            announcement={announcement}
          />
        ))}
      </List>
    </Container>
  );
};

const Container = styled.div``;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
