import { useState } from "react";
import styled from "styled-components";
import { AnimatedPage } from "../../../components/animatedPage";
import { AnnouncementListElement } from "../../../components/announcementListElement";
import { Header } from "../../../components/header";
import { useMyAnnouncements } from "../../queries/myAnnouncements";

export const MyAnnouncements = () => {
  const { data } = useMyAnnouncements();

  return (
    <AnimatedPage>
      <Header>My Announcements</Header>
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
